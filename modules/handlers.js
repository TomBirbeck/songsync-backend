import pool from '../db/index.js'
// import { scheduleJob, RecurrenceRule } from 'node-schedule';

// ~~~ SONGS TABLE ~~~

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
    const res = await pool.query('SELECT * from songs;');
    return res.rows;
}

export const getSongCount = async () => {
    const res = await pool.query('SELECT * from songs;');
    return res.rowCount;
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

// ~~~ TODAY'S SONG ~~~

export const getTodaysSong = async () => {
    const res = await pool.query('SELECT * from todays_song;');
    return res.rows;
}

export const addTodaysSong = async (song) => {
    const res = await pool.query('INSERT INTO todays_song (id, name, artist, lyrics) VALUES (($1), ($2), ($3), ($4)) RETURNING * ;', [song[0].id, song[0].name, song[0].artist, song[0].lyrics]);
    return res.rows;
}

export const emptyTodaysSong = async () => {
    const res = await pool.query('DELETE FROM todays_song;');
    return res.rows;
}

// ~~~ USED SONGS ~~~

export const addUsedSong = async (song) => {
const res = await pool.query('INSERT INTO used_songs (id, name) VALUES (($1), ($2)) RETURNING * ;', [song[0].id, song[0].name]);
return res.rows
}

export const getAllUsedSongs = async () => {
    const res = await pool.query('SELECT * FROM used_songs;');
    return res.rows;
}

export const getAllUsedSongsCount = async () => {
    const res = await pool.query('SELECT * FROM used_songs;');
    return res.rowCount;
}

export const getUsedSongById = async (id) => {
    const res = await pool.query('SELECT * from used_songs WHERE id = ($1);', [id]);
    return res.rows;
}

export const deleteAllUsedSongs = async () => {
    const res = await pool.query('DELETE FROM used_songs;');
    return res.rows
}

// ~~~ DAILY SONG EVENT ~~~

const checkSong = async (id) => {
    const res = await getUsedSongById(id);
    if (res.length > 0){
        return false
    } else {
        return true
    }
}

const updateSong = async (id) => {
    const deleteSong = await pool.query('DELETE FROM todays_song;');
    const song =  await getSongById(id);
    const today = await addTodaysSong(song);
    const used = await addUsedSong(song);
    // console.log(song, today, used)
}

const randomNum = (min, max) =>  {
return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getNewDailySong = async () => {
    const usedSongCount = await getAllUsedSongsCount();
    const songCount = await getSongCount();
    let id = randomNum(1, songCount);
    if (usedSongCount === songCount) {
        await deleteAllUsedSongs();
    } else {
        let songAlreadyUsed = await checkSong(id);
       while (!songAlreadyUsed){
        id = randomNum(1, songCount);
        songAlreadyUsed = await checkSong(id);
       }
    }
    await updateSong(id);
    return id;
}

// const rule = new RecurrenceRule();
// rule.hour = 0;
// rule.minute = 0;
// rule.tz = 'Etc/UTC';

// const job = scheduleJob(rule, async function(){
//     const usedSongCount = await getAllUsedSongsCount();
//     const songCount = await getSongCount();
//     let id = randomNum(1, songCount);
//     if (usedSongCount === songCount) {
//         await deleteAllUsedSongs();
//     } else {
//         let songAlreadyUsed = await checkSong(id);
//        while (!songAlreadyUsed){
//         id = randomNum(1, songCount);
//         songAlreadyUsed = await checkSong(id);
//        }
//     }
//     await updateSong(id);
//    });

// const jobThree = scheduleJob('09 * * * *', async function(){
//     const usedSongCount = await getAllUsedSongsCount();
//     const songCount = await getSongCount();
//     let id = randomNum(1, songCount);
//     if (usedSongCount === songCount) {
//         await deleteAllUsedSongs();
//     } else {
//         let songAlreadyUsed = await checkSong(id);
//        while (!songAlreadyUsed){
//         id = randomNum(1, songCount);
//         songAlreadyUsed = await checkSong(id);
//        }
//     }
//     await updateSong(id);
//     console.log(usedSongCount, songCount, id)
//   });
