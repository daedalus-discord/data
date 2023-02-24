import type { Collection, Document } from "mongodb";

let db: Record<string, Collection<Document>>;

export function set_db(set: typeof db) {
    db = set;
}

export async function autoinc(seq: string): Promise<number> {
    const doc = await db.counters.findOneAndUpdate({ seq }, { $inc: { val: 1 } }, { upsert: true });
    return (doc.value?.val ?? 0) + 1;
}
