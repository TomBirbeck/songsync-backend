import express from 'express';
import { addSong, getAllSongs, getSongById } from '../modules/handlers.js';
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.json({message: 'welcome to the homepage'});
    } catch (error) {
        res.status(404);
        res.json({message: 'error occurred', payload: error});
    }
    next();
})

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
})

router.get('/songs/:id', async (req, res, next) => {
    try {
        const data = await getSongById(Number(req.params.id));
        res.json({success: true, payload: data});
    } catch (error) {
        res.status(403);
        res.json({message: 'error occurred during song by id request', payload: error});
    }
    next();
})

export default router;