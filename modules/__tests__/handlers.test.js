import { addSong, addTodaysSong, addUsedSong, deleteAllUsedSongs, deleteSong, editSong, emptyTodaysSong, getAllSongs, getAllUsedSongs, getAllUsedSongsCount, getSongById, getSongCount, getTodaysSong, getUsedSongById } from "../handlers";

// !!!!!!!!!! BEFORE RUNNING TESTS SHOULD UPDATE HANDLERS TO USE TEST TABLES !!!!!!!!!!

describe('songs database handlers tests', () => {

    test('should return all songs', async () => {
        const actual = await getAllSongs();
        const expected = expect.arrayContaining([expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            artist: expect.any(String),
            lyrics: expect.any(String),
        })]);
        expect(expected).toStrictEqual(actual);
    });
    
    test('should return song with id matching what was provided', async () => {
        const actual = await getSongById(1);
        const expected = [{
            id: 1,
            name: expect.any(String),
            artist: expect.any(String),
            lyrics: expect.any(String),
        }];
        expect(expected).toStrictEqual(actual);
    });
    
    test('should return a number, relating to the amount of songs in the database', async () => {
        const actual = await getSongCount();
        const expected = expect.any(Number);
        expect(actual).toStrictEqual(expected);
    });

    test('should add a new song to songs table', async () => {
        const actual = await addSong('test song', 'test artist', 'test lyrics');
        const expected = [{
            id: expect.any(Number),
            name: 'test song',
            artist: 'test artist',
            lyrics: 'test lyrics',
        }];
        expect(actual).toStrictEqual(expected);
    });

    test('should update a song in songs table', async () => {
        const actual = await editSong(5, 'edited song', 'edited artist', 'edited lyrics');
        const expected = [{
            id: 5,
            name: 'edited song',
            artist: 'edited artist',
            lyrics: 'edited lyrics',
        }];
        expect(actual).toStrictEqual(expected);
    });

    test('should delete a song from the songs table with the provided id', async () => {
        const actual = await deleteSong(6);
        const expected = [];
        expect(actual).toStrictEqual(expected);
    })

});

describe('todays song table tests', () => {

    test('should return todays song', async () => {
        const actual = await getTodaysSong();
        const expected = [{
            id: expect.any(Number),
            name: expect.any(String),
            artist: expect.any(String),
            lyrics: expect.any(String),
            status: 'open',
        }];

        expect(actual).toStrictEqual(expected);
    });

    test('should update todays song', async () => {
        const actual = await addTodaysSong([{id: 2, name: 'today test song', artist: 'today test artist', lyrics: 'today test lyrics'}]);
        const expected = [{
            id: 2,
            name: 'today test song',
            artist: 'today test artist',
            lyrics: 'today test lyrics',
        }];

        expect(actual).toStrictEqual(expected);
    });

    test('should clear todays song', async () => {
        const actual = await emptyTodaysSong();
        const expected = [];
        expect(actual).toStrictEqual(expected);
    })
});

describe('used songs table tests', () => {

    test('should return all used songs', async () => {
        const actual = await getAllUsedSongs();
        const expected = expect.arrayContaining([expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
        })]);
        expect(expected).toStrictEqual(actual);
    });

    test('should return used song matching id given', async () => {
        const actual = await getUsedSongById(1);
        const expected = expect.arrayContaining([expect.objectContaining({
            id: 1,
            name: expect.any(String),
        })]);
        expect(expected).toStrictEqual(actual);
    });

    test('should return number of songs in used songs table', async () => {
        const actual = await getAllUsedSongsCount();
        const expected = expect.any(Number);
        expect(expected).toStrictEqual(actual);
    });
    
    test('should add new used song', async () => {
        const actual = await addUsedSong([{id: 3, name: 'used song test'}]);
        const expected = expect.arrayContaining([expect.objectContaining({
            id: 3,
            name: 'used song test',
        })]);
        expect(actual).toStrictEqual(expected);
    });

    test('should delete all used songs', async () => {
        const actual = await deleteAllUsedSongs();
        const expected = [];
        expect(actual).toStrictEqual(expected);
    });

});

