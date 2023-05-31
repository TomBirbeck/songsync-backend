import pool from '../index.js'

await pool.query('CREATE TABLE IF NOT EXISTS songs (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name VARCHAR (100), artist VARCHAR (100), lyrics VARCHAR (500))');