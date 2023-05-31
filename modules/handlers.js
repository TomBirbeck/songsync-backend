import pool from '../db/index.js'

export const addSong = async (song, artist, lyrics) => {
    //add song to database
    const res = await pool.query('INSERT INTO songs (name, artist, lyrics) VALUES (($1), ($2), ($3)) RETURNING * :', [song, artist, lyrics]);
    return res.rows;
}

export const getSongById = async (id) => {
    //get song from db using id
    const res = await pool.query('SELECT * FROM songs WHERE id = ($1);', [id]);
    return res.rows;
}

export const getAllSongs = async () => {
    // get all songs from db
    const res = await pool.query('SELECT * from songs;');
    return res.rows;
}

export const editSong = async (id, song, artist, lyrics) => {
    // patch song
    const res = await pool.query('UPDATE songs SET name = ($1), artist = ($2), lyrics = ($3) WHERE id = ($4) RETURNING *:', [song, artist, lyrics, id]);
    return res.rows;
}

export const deleteSong = async (id) => {
    // delete song using id
    const res = await pool.query('DELETE FROM songs WHERE id = ($1);', [id]);
    return res.rows;
}