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
    const res = await pool.query('SELECT * from used_songs;');
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

const updateSong = async (id) => {
    const deleteSong = await pool.query('DELETE FROM todays_song;');
    const song =  await pool.query('SELECT * FROM songs WHERE id = ($1);', [id]);
    const res = await pool.query('INSERT INTO todays_song (id, name, artist, lyrics) VALUES (($1), ($2), ($3), ($4)) RETURNING * ;', [song.rows[0].id, song.rows[0].name, song.rows[0].artist, song.rows[0].lyrics]);
    const used = await pool.query('INSERT INTO used_songs (id, name) VALUES (($1), ($2)) RETURNING * ;', [song.rows[0].id, song.rows[0].name]);
}

const checkSong = async (id) => {
const res = await pool.query('SELECT * FROM used_songs WHERE id = ($1);', [id]);
return res.rows
}

const randomNum = (min, max) =>  {
return Math.floor(Math.random() * (max - min + 1)) + min
}

const rule = new RecurrenceRule();
rule.hour = 0;
rule.minute = 0;
rule.tz = 'Etc/UTC';

const job = scheduleJob(rule, async function(){
    let id = randomNum(1, 6);
    let songAlreadyUsed = await checkSong(id);
    while (songAlreadyUsed.length > 0){
     id = randomNum(1, 6);
     songAlreadyUsed = await checkSong(id);
    }
     updateSong(id);
   });

// const jobThree = scheduleJob('52 * * * *', async function(){
//    let id = randomNum(1, 6);
//    let songAlreadyUsed = await checkSong(id);
//    while (songAlreadyUsed.length > 0){
//     id = randomNum(1, 6);
//     songAlreadyUsed = await checkSong(id);
//    }
//     updateSong(id);
//   });
