import { JSONPreset } from "lowdb/node";
import type { Actions } from "./$types";

export const actions = {
    addMessageToPosts: async ({ request }) => {
        const formData = await request.formData();

        const message = formData.get('message');
        const from = formData.get('from') ?? "Anonymous";

        if (!message || message === "") {
            return {
                result: false
            }
        }

        const data = { messages: [{ message: "", from: "" }] };
        const db = await JSONPreset("zumi-messages.db", data);
        db.data.messages.push({ message: message.toString(), from: from.toString() });
        db.write();

        return {
            result: true
        }
    },
} satisfies Actions