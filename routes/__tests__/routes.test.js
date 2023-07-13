import request from 'supertest';
import app from '../../server/index.js';


    test('get all songs', async () => {
        await request(app).get('/songs', (req,res) => {
            const expectedBody = {
                success: true,
                payload: expect.arrayContaining([expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    artist: expect.any(String),
                    lyrics: expect.any(String),
                })])
            };
            expect(res.statusCode).toBe(200);
            expect(res.headers['content-type']).toMatch(/json/);
            expect(res.body).toStrictEqual(expectedBody);
        });
    });
    test('get song by id', async () => {
        await request(app).get('/songs/5', (req,res) => {
            const expectedBody = {
                success: true,
                payload: [{
                    id: 5,
                    name: expect.any(String),
                    artist: expect.any(String),
                    lyrics: expect.any(String),
                }]
            };
            expect(res.statusCode).toBe(200);
            expect(res.headers['content-type']).toMatch(/json/);
            expect(res.body).toStrictEqual(expectedBody);
        });
    });
    test('get todays song', async () => {
        await request(app).get('/todayssong', (req,res) => {
            const expectedBody = {
                success: true,
                payload: [{
                    id: expect.any(Number),
                    name: expect.any(String),
                    artist: expect.any(String),
                    lyrics: expect.any(String),
                }]
            };
            expect(res.statusCode).toBe(200);
            expect(res.headers['content-type']).toMatch(/json/);
            expect(res.body).toStrictEqual(expectedBody);
        });
    });
    test('get all used songs', async () => {
        await request(app).get('/usedsongs', (req,res) => {
            const expectedBody = {
                    success: true,
                    payload: expect.arrayContaining([expect.objectContaining({
                        id: expect.any(Number),
                        name: expect.any(String),
                        artist: expect.any(String),
                        lyrics: expect.any(String),
                    })])
            };
            expect(res.statusCode).toBe(200);
            expect(res.headers['content-type']).toMatch(/json/);
            expect(res.body).toStrictEqual(expectedBody);
        });
    });

