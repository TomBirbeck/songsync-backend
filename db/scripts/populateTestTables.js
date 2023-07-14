import pool from '../index.js';
import { songList, usedSongs, todaysSong } from "../testData.js";

async function populateSongs(songs) {
    for (let i = 0; i < songs.length; i++) {
      let res = await pool.query(
        'insert into test_songs (name,artist,lyrics) values ($1,$2,$3) returning *',
        [songs[i].song, songs[i].artist, songs[i].lyrics]
      );
      console.log(res.rows);
    }
  }
  
//   populateSongs(songList);

async function populateUsedSongs(songs) {
    for (let i = 0; i < songs.length; i++) {
      let res = await pool.query(
        'insert into test_used_songs (id,name) values ($1,$2) returning *',
        [songs[i].id, songs[i].name]
      );
      console.log(res.rows);
    }
  }
  
//   populateUsedSongs(usedSongs);

  async function populateTestTodaysSong(song) {
    let res = await pool.query('INSERT INTO test_todays_song (id, name, artist, lyrics) VALUES ($1, $2, $3, $4) RETURNING *', [song.id, song.name, song.artist, song.lyrics]);
    console.log(res.rows)
  }

//   populateTestTodaysSong(todaysSong)