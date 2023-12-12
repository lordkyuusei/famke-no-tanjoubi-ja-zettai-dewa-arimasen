<script lang="ts">
    export let message: string;
    export let from: string;
</script>

<blockquote cite={from} class="message-box">
    <p>« {message} »</p>
    <cite>- {from}</cite>
</blockquote>

<style>
    blockquote {
        display: flex;
        flex-direction: column;
        color: pink;

        z-index: 1;
        background-color: rgba(128, 0, 128, 0.7);
        border: 1px solid pink;
        border-radius: 1rem;
        padding: 1rem;
        width: 100%;

        & > p {
            word-break: break-all;
            hyphens: auto;
            margin: 0;
            font-style: italic;
            font-size: 1.25rem;
        }

        & > cite {
            text-align: right;
        }
    }
</style>
