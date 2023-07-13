import { getAllSongs, getAllUsedSongs, getAllUsedSongsCount, getSongById, getSongCount, getTodaysSong, getUsedSongById } from "../handlers"
import jest from 'jest'
// import {test, expect} from 'jest'


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

});

