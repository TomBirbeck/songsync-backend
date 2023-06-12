import pool from '../db/index.js'
import { scheduleJob, RecurrenceRule } from 'node-schedule';

export const addSong = async (song, artist, lyrics) => {
    //add song to database
    const res = await pool.query('INSERT INTO songs (name, artist, lyrics) VALUES (($1), ($2), ($3)) RETURNING * ;', [song, artist, lyrics]);
    return res.rows;
}

export const getSongById = async (id) => {
    //get song from db using id
    const res = await pool.query('SELECT * FROM songs WHERE id = ($1);', [id]);
    return res.rows;
}

export const getAllSongs = async () => {
    // get all songs from db
    const res = await pool.query('SELECT * from todays_song;');
    return res.rows;
}

export const editSong = async (id, song, artist, lyrics) => {
    // patch song
    const res = await pool.query('UPDATE songs SET name=($1), artist=($2), lyrics=($3) WHERE id=($4) RETURNING*;', [song, artist, lyrics, id]);
    return res.rows;
}

export const deleteSong = async (id) => {
    // delete song using id
    const res = await pool.query('DELETE FROM songs WHERE id = ($1);', [id]);
    return res.rows;
}

const rule = new RecurrenceRule();
rule.hour = 0;
rule.minute = 0;
rule.tz = 'Etc/UTC';

const job = scheduleJob(rule, async function(){
    const id = Math.random() 
    const song = await pool.query('SELECT * FROM songs WHERE id = ($1);', [id]);
});

const jobThree = scheduleJob('07 * * * *', async function(){
   const id = 1; 
    const song =  await pool.query('SELECT * FROM songs WHERE id = ($1);', [id]);
    const res = await pool.query('INSERT INTO todays_song (id, name, artist, lyrics) VALUES (($1), ($2), ($3), ($4)) RETURNING * ;', [song.rows[0].id, song.rows[0].name, song.rows[0].artist, song.rows[0].lyrics])
  });