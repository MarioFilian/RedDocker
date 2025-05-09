const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = 3000;
app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'mibase',
  password: 'postgres',
  port: 5432,
});

app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en el servidor');
  }
});

app.listen(3000, () => console.log('Backend corriendo en puerto 3000'));
