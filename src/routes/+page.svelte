<script lang="ts">
    import narratorTexts from "$lib/constants/narrator.json";
    import MessageBox from "$lib/components/MessageBox.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<h1 class="happy">Happy</h1>
<div class="hb-messages">
    {#each data.posts as message, i}
        {#if (i + 1) % 7 === 0}
            <div style="grid-column: 1 / -1">
                <h2 class="twenty-six">{narratorTexts[(i + 1) / 7 - 1]}</h2>
            </div>
        {/if}
        <MessageBox {...message}></MessageBox>
    {/each}
</div>
<h3 class="twenty-six">26th</h3>
<h4 class="birthday">birthday!</h4>

<style>
    .happy,
    .twenty-six,
    .birthday {
        text-align: center;
        margin-block: 1rem;
    }

    .happy {
        font-size: 10rem;
        color: white;
        font-weight: 100;
        transform: translateY(85px);
        padding: 1rem 0;
        -webkit-animation: showUp 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)
            forwards;
        animation: showUp 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }

    .twenty-six {
        font-size: 7rem;
        color: #1f2938;
        font-weight: 900;
        -webkit-animation: blinkColor 2s cubic-bezier(0.175, 0.885, 0.32, 1.275)
            infinite forwards 0.7s;
        animation: blinkColor 2s cubic-bezier(0.175, 0.885, 0.32, 1.275)
            infinite forwards 0.7s;
        text-shadow: 0 0 10px transparent;
    }

    .birthday {
        font-size: 10rem;
        color: white;
        transform: translateY(-85px);
        padding: 1rem 0;
        -webkit-animation: showDown 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)
            forwards 0.4s;
        animation: showDown 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)
            forwards 0.4s;
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
            grid-template-columns: 100% !important;
        }

        .happy,
        .birthday {
            font-size: 5rem;
        }

        .twenty-six {
            font-size: 3rem;
        }
    }
</style>
