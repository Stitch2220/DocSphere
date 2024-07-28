

export async function closeDb() {
    if (!db) return;
    await db.close();
    db = undefined;
}

export function getDb() {
    return db;
}