// Importando o SQLite e configurando o banco de dados
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

// Configuração de sessão
app.use(session({
  secret: 'chave-secreta',
  resave: false,
  saveUninitialized: false
}));

// Função de login com banco de dados SQLite
app.post('/login', (req, res) => {
    const { username, password, role } = req.body;
  
    db.get(`SELECT * FROM users WHERE username = ? AND password = ? AND role = ?`, [username, password, role], (err, user) => {
      if (err) {
        res.json({ success: false, message: 'Erro no servidor' });
      } else if (user) {
        // Salva o usuário na sessão e redireciona para o dashboard
        req.session.user = { id: user.id, username: user.username, role: user.role };
        res.json({ success: true });
      } else {
        res.json({ success: false, message: 'Credenciais inválidas ou função incorreta' });
      }
    });
  });

// Rota de logout
app.post('/logout', (req, res) => {
    req.session.destroy();
    res.json({ success: true });
  });
  

// Middleware para proteger o dashboard
function checkAuth(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      res.redirect('/');
    }
}

// Servindo o dashboard se o usuário estiver autenticado
app.get('/dashboard', checkAuth, (req, res) => {
    res.sendFile(__dirname + '/public/dashboard.html');
  });
  
  const PORT = 3000;
  app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));


 // Criando a tabela de usuários, se ainda não existir
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT,
      role TEXT
    )
  `);

  // Inserindo dados de teste de Aluno e Professor
  db.run(`INSERT OR IGNORE INTO users (username, password, role) VALUES (?, ?, ?)`, ['aluno1', '1234', 'aluno']);
  db.run(`INSERT OR IGNORE INTO users (username, password, role) VALUES (?, ?, ?)`, ['professor1', 'abcd', 'professor']);
});
