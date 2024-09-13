import * as SQLite from "expo-sqlite";

//const db = SQLite.openDatabase("sessions.db");

/* export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS sessionUser (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, idToken TEXT NOT NULL)",
        [],
        (__, result) => resolve(result),
        (__, error) => reject(error)
      );
    });
  });
  return promise;
}; */

export const init = async () => {
  try {
    const db = await SQLite.openDatabaseAsync("sessions.db");
    const sessionConnected = await db.execAsync(`
      PRAGMA  JOURNAL_MODE = WAL;
      CREATE TABLE IF NOT EXISTS sessionUser (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, idToken TEXT NOT NULL)
    `);
    return sessionConnected;
  } catch (error) {
    return error;
  }
};

/* export const insertSession = ({ localId, email, idToken }) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO sessionUser (localId, email, idToken) VALUES (?, ?, ?)",
        [localId, email, idToken],
        (__, result) => resolve(result),
        (__, error) => reject(error)
      );
    });
  });
  return promise;
}; */
export const insertSession = async ({ localId, email, idToken }) => {
  try {
    const db = await SQLite.openDatabaseAsync("sessions.db");
    const newSession = await db.runAsync(
      "INSERT INTO sessionUser (localId, email, idToken) VALUES (?, ?, ?)",
      [localId, email, idToken]
    );
    return newSession;
  } catch (error) {
    return error;
  }
};

/* export const fetchSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM sessionUser",
        [],
        (__, result) => resolve(result),
        (__, error) => reject(error)
      );
    });
  });
  return promise;
};
 */
export const fetchSession = async () => {
  try {
    const db = await SQLite.openDatabaseAsync("sessions.db");
    const sessionUser = await db.getFirstAsync("SELECT * FROM sessionUser");
    return sessionUser;
  } catch (error) {
    return error;
  }
};

/* export const deleteSession = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE sessionUser",
        [],
        (__, result) => resolve(result),
        (__, error) => reject(error)
      );
    });
  });
  return promise;
}; */

export const deleteSession = async () => {
  try {
    const db = await SQLite.openDatabaseAsync("sessions.db");
    const deleteSession = db.runAsync("DROP TABLE sessionUser");
    return deleteSession;
  } catch (error) {
    return error;
  }
};
