import { open } from 'react-native-quick-sqlite';

import {sampleQuotes} from "../util/sampleData.ts";
import {Quote} from "../model/Quote.ts";

const db = open({name: "quotes.db", location: 'default'});

export const createLocalQuotesTable = () => {
    db.execute(`
        CREATE TABLE IF NOT EXISTS quotes (
                                              id INTEGER PRIMARY KEY AUTOINCREMENT,
                                              text TEXT NOT NULL,
                                              author TEXT NOT NULL,
                                              source TEXT NOT NULL DEFAULT 'LB',
                                              isFavorite INTEGER NOT NULL DEFAULT 0
        );
    `);
    insertLocalSeedData()
};

const insertLocalSeedData = () => {
    const result = db.execute(`SELECT COUNT(*) AS count FROM quotes;`);
    const rows = result?.rows;
    let count = (rows as any)._array[0]?.count ?? 0;

    if (count > 0) {
        // already has data
        return
    }
    sampleQuotes.forEach(item => {
        db.execute(
            `
      INSERT INTO quotes (text, author, source, isFavorite)
      VALUES (?, ?, ?, 0);
      `,
            [
                item.text,
                item.author,
                item.source ?? "LB",
            ]
        );
    });
};


export const fetchAllLocalQuotes = (filterByFavorite = false): Quote[] => {
    const filter = filterByFavorite ? 'WHERE isFavorite = 1' : ``
    const result = db.execute(`SELECT * FROM quotes ${filter} ORDER BY id DESC;`);
    return ((result.rows as any)?._array ?? []) as Quote[];
};

export const fetchRandomLocalQuotes = (): Quote => {
    const result = fetchAllLocalQuotes()
    const idx = Math.floor(Math.random() * result.length)
    return result[idx]
};

export const editLocalQuote = (text: string, author: string, isFavorite: boolean, id: number) => {
    db.execute(
        `
      UPDATE quotes
      SET text       = ?,
          author     = ?,
          isFavorite = ?
      WHERE id = ?;
      `,
        [text, author, isFavorite ? 1 : 0, id]
    );
};
