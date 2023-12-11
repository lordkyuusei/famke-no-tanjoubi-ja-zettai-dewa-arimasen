<script lang="ts">
    import type { ActionData } from "../$types";
    import MessageBox from "$lib/components/MessageBox.svelte";

    let message: string = "";
    let from: string = "";

    export let form: ActionData;
</script>

<h1>Preview</h1>
<div class="hb-messages">
    <MessageBox
        message="Example message for padding purposes don't mind me"
        from="kyuu_bot"
    ></MessageBox>
    <MessageBox {message} {from}></MessageBox>
    <MessageBox message="yeah me neither lol" from="another_kyuu_bot"
    ></MessageBox>
</div>

{#if form?.result === false}
    <p style="color: red">you forgot the message!!! omg!!!!!</p>
{:else if form?.result === true}
    <p style="color: limegreen">successfully added :)</p>
{/if}

<h1>Send your message!</h1>
<form method="POST" action="?/addMessageToPosts">
    <textarea
        name="message"
        placeholder="Your birthday message"
        bind:value={message}
    ></textarea>
    <input
        name="from"
        type="text"
        bind:value={from}
        placeholder="Author (empty = '- Anonymous')"
    />
    <button type="submit">Send</button>
</form>

<style>
    h1 {
        color: white;
        text-align: center;
    }

    .hb-messages {
        display: grid;
        grid-auto-rows: min-content;
        grid-template-columns: repeat(3, 1fr);
        padding-inline: 1rem;
        gap: 1rem;
        width: 100%;
        place-items: center;
    }

    @media (max-width: 640px) {
        .hb-messages {
            grid-template-columns: 1fr !important;
        }

        form :is(textarea, input, button) {
            width: 100% !important;
        }
    }

    form {
        display: grid;
        width: 100%;

        grid-template: max-content 0.2fr 0.1fr / 100%;
        gap: 1rem;
        place-items: center;

        & :is(textarea, input, button) {
            height: 100%;
            width: 50%;
            font-size: larger;
            color: pink;

            background-color: rgba(128, 0, 128, 0.5);
            border: 1px solid pink;
            border-radius: 1rem;
            padding: 1rem;

            &::placeholder {
                color: rgba(255, 255, 255, 0.4);
            }
        }

        & textarea {
            overflow: hidden;
        }
        & button {
            cursor: pointer;
            transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);

            &:hover {
                color: purple;
                background-color: white;
            }
        }
    }
</style>
