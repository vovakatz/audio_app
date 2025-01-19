import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import {db} from "../db";

const router = Router();
/**
 * GET /api/tracks
 * Protected route to retrieve all tracks
 */
router.get('/', authMiddleware, async (req, res) => {
    const tracks = await db.getTracks()

    return res.status(200).json(tracks);
});

export default router;