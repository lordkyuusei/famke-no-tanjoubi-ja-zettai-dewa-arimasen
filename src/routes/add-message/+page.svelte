<script lang="ts">
    import type { ActionData } from "../$types";
    import MessageBox from "$lib/components/MessageBox.svelte";

    let message: string = "";
    let from: string = "";

    export let form: ActionData;
</script>

<h1>Preview</h1>
<div class="hb-message">
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
        placeholder="Author (or leave it blank for anonymous"
    />
    <button type="submit">Send</button>
</form>

<style>
    h1 {
        color: white;
    }
    .hb-message {
        display: grid;
        grid-template: 1fr / repeat(3, 1fr);
        padding-inline: 1rem;
        gap: 1rem;
        width: 100%;
        place-items: center;
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
            background-color: rgba(255, 255, 255, 0.4);
            padding: 0.5rem 1rem;
            border: 2px solid rgba(255, 255, 255, 0.2);
            color: white;
            font-size: 2rem;
            border-radius: 1rem;

            &::placeholder {
                color: rgba(255, 255, 255, 0.4);
            }
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
