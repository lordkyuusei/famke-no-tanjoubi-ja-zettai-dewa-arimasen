import { JSONPreset } from "lowdb/node";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const data = { messages: [{ message: "", from: "" }] };
    const db = await JSONPreset("zumi-messages.db", data);

    return {
        posts: db.data.messages
    }

};