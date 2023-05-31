import express from 'express';
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.json({message: 'welcome to the homepage'})
    } catch (error) {
        res.status(404);
        res.json({message: 'error occurred', payload: error})
    }
})

export default router;