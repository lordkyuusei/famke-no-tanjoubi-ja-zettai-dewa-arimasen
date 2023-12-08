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

        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 1rem;
        padding: 1rem;
        width: 100%;

        & > p {
            margin: 0;
            font-style: italic;
            font-size: 1.25rem;
        }

        & > cite {
            text-align: right;
        }
    }
</style>
