import pool from '../index.js';
import songList from '../data.js';

async function populateSongs(songs) {
    for (let i = 0; i < songs.length; i++) {
      let res = await pool.query(
        'insert into songs (name,artist,lyrics) values ($1,$2,$3) returning *',
        [songs[i].song, songs[i].artist, songs[i].lyrics]
      );
      console.log(res.rows);
    }
  }
  
  populateSongs(songList);