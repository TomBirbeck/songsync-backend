import express from 'express';
import { addSong, deleteSong, editSong, getAllSongs, getAllUsedSongs, getNewDailySong, getSongById, getTodaysSong } from '../modules/handlers.js';
const router = express.Router();

// ~~~ SONGS TABLE ROUTES ~~~

router.get('/', async (req, res, next) => {
    try {
        res.json({message: 'welcome to the homepage'});
    } catch (error) {
        res.status(404);
        res.json({message: 'error occurred', payload: error});
    }
    next();
});

router.post('/songs', async (req,res, next) => {
    try {
        const {name, artist, lyrics} = req.body;
        const data = await addSong(name, artist, lyrics);
        res.json({success: true, payload: data});
    } catch (error) {
        res.status(403);
        res.json({message: 'error occurred during entry creation', payload: error});
    }
    next();
})

router.get('/songs', async (req, res, next) => {
    try {
        const data = await getAllSongs();
        res.json({success: true, payload: data});
    } catch (error) {
        res.status(403);
        res.json({message: 'error occurred during all songs request', payload: error});
    }
    next();
});

router.get('/songs/:id', async (req, res, next) => {
    try {
        const data = await getSongById(Number(req.params.id));
        res.json({success: true, payload: data});
    } catch (error) {
        res.status(403);
        res.json({message: 'error occurred during song by id request', payload: error});
    }
    next();
});

router.patch('/songs/:id', async (req, res, next) => {
    try {
        const {name, artist, lyrics} = req.body;
        const data = await editSong(Number(req.params.id), name, artist, lyrics);
        res.json({success: true, payload: data});
    } catch (error) {
        res.status(401);
        res.json({message: 'error occurred during editing song', payload: error});
    }
    next();
});

router.delete('/songs/:id', async (req, res, next) => {
    try {
        const data = await deleteSong(Number(req.params.id));
        res.json({success: true, payload: data});
    } catch (error) {
        res.status(401);
        res.json({message: 'error occurred when deleting song', payload: error});
    }
    next();
});

// ~~~ TODAYS SONG ROUTES ~~~

router.get('/todayssong', async (req, res, next) => {
    try {
        const data = await getTodaysSong();
        res.json({success: true, payload: data});
    } catch (error) {
        res.status(401);
        res.json({message: 'error occurred during todays song request', payload: error});
    }
    next();
});

// ~~~ USED SONGS ROUTES ~~~ 

router.get('/usedsongs', async (req, res, next) => {
    try {
        const data = await getAllUsedSongs();
        res.json({success: true, payload: data});
    } catch (error) {
        res.status(401);
        res.json({message: 'error occurred during all used songs request', payload: error});
    }
    next();
});

// ~~~ SET DAILY SONG ~~~  

router.post('/setdailysong', async (req, res, next) => {
    try {
        const data = await getNewDailySong();
        res.json({success: true, payload: data});
    } catch (error) {
        res.status(401);
        res.json({message: 'error occured when trying to set new daily song', payload: error});
    }
})



export default router;