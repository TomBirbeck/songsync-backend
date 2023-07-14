import request from 'supertest';
import app from '../../server/index.js';

// !!!!!!!!!! BEFORE RUNNING TESTS, YOU SHOULD UPDATE HANDLERS TO USE TEST TABLES !!!!!!!!!!

// ~~~ songs table routes tests ~~~

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

    test('trying to add new song without auth should return error code 401', async () => {
       const actual =  await request(app).post('/songs').send({name: 'testing routes', artist: 'songs table', lyrics: 'test lyrics'});
    expect(actual.statusCode).toBe(401);
    });

    test('trying to add new song with auth should work', async () => {
       const actual =  await request(app).post('/songs').set({"authorization": `Bearer ${process.env.JWT}`}).send({name: 'testing routes', artist: 'songs table', lyrics: 'test lyrics'});
       const expectedBody = {
        success: true,
        payload: [{
            id: expect.any(Number),
            name: 'testing routes',
            artist: 'songs table',
            lyrics: 'test lyrics',
        }]
    };
       expect(actual.statusCode).toBe(200);
       expect(actual.headers['content-type']).toMatch(/json/);
       expect(actual.body).toStrictEqual(expectedBody);
    });

    test('trying to patch song without auth should return error code 401', async () => {
        const actual =  await request(app).patch('/songs/5').send({name: 'testing routesupdate fail', artist: 'songs table', lyrics: 'test lyrics'});
     expect(actual.statusCode).toBe(401);
     });

    test('trying to patch song with auth should work', async () => {
       const actual =  await request(app).patch('/songs/4').set({"authorization": `Bearer ${process.env.JWT}`}).send({name: 'testing update routes', artist: 'updated songs table', lyrics: 'updated test lyrics'});
       const expectedBody = {
        success: true,
        payload: [{
            id: 4,
            name: 'testing update routes',
            artist: 'updated songs table',
            lyrics: 'updated test lyrics',
        }]
    };
       expect(actual.statusCode).toBe(200);
       expect(actual.headers['content-type']).toMatch(/json/);
       expect(actual.body).toStrictEqual(expectedBody);
    });

    test('trying to delete song without auth should return error code 401', async () => {
        const actual =  await request(app).delete('/songs/4');
     expect(actual.statusCode).toBe(401);
     });

     test('trying to patch song without auth should return error code 401', async () => {
        const actual =  await request(app).delete('/songs/4').set({"authorization": `Bearer ${process.env.JWT}`});
     expect(actual.statusCode).toBe(200);
     });


    // ~~~ todays song route test ~~~

    test('trying to request todays songs without auth should return error code 401', async () => {
        const actual =  await request(app).delete('/todayssong');
     expect(actual.statusCode).toBe(401);
     });


    test('get todays song with auth should work', async () => {
        const actual = await request(app).get('/todayssong').set({"authorization": `Bearer ${process.env.JWT}`});
            const expectedBody = {
                success: true,
                payload: [{
                    id: expect.any(Number),
                    name: expect.any(String),
                    artist: expect.any(String),
                    lyrics: expect.any(String),
                    status: expect.any(String),
                }]
            };
            expect(actual.statusCode).toBe(200);
            expect(actual.headers['content-type']).toMatch(/json/);
            expect(actual.body).toStrictEqual(expectedBody);
    });

    // ~~~ used songs route ~~~

    test('trying to request used songs without auth should return error code 401', async () => {
        const actual =  await request(app).delete('/usedsongs');
     expect(actual.statusCode).toBe(401);
     });

    test('get set with auth should work', async () => {
        const actual = await request(app).get('/usedsongs').set({"authorization": `Bearer ${process.env.JWT}`});
            const expectedBody = {
                    success: true,
                    payload: expect.arrayContaining([expect.objectContaining({
                        id: expect.any(Number),
                        name: expect.any(String),
                    })])
            };
            expect(actual.statusCode).toBe(200);
            expect(actual.headers['content-type']).toMatch(/json/);
            expect(actual.body).toStrictEqual(expectedBody);
    });

    // ~~~set daily song route~~~
    
    test('trying set daily song without auth should return error code 401', async () => {
        const actual =  await request(app).delete('/setdailysong');
     expect(actual.statusCode).toBe(401);
     });

    test('set daily song with auth should work', async () => {
        const actual = await request(app).get('/setdailysong').set({"authorization": `Bearer ${process.env.JWT}`});
            const expectedBody = {
                    success: true,
                    payload: expect.arrayContaining([expect.objectContaining({
                        id: expect.any(Number),
                        name: expect.any(String),
                        artist: expect.any(String),
                        lyrics: expect.any(String),
                    })])
            };
            expect(actual.statusCode).toBe(200);
            expect(actual.headers['content-type']).toMatch(/json/);
            expect(actual.body).toStrictEqual(expectedBody);
    });

