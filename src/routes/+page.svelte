<script>
    import { enhance } from "$app/forms";
    export let data;
</script>

<div id="root">
    <h1>你好，世界！</h1>
    <div>
        <form method="post" use:enhance>
            <textarea
                name="paste"
                id="pastebin"
                cols="30"
                rows="10"
                bind:value={data.text}
            />
            <button type="submit">paste</button>
        </form>
    </div>
</div>

<style>
    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    }
    form {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
    textarea {
        border-width: 2px;
        border-color: green;
        border-radius: 3px;
    }
    button {
        background-color: bisque;
        border-width: 1px;
        border-radius: 2px;
    }

    #root {
        margin: 0;
        place-items: center;
        min-width: 320px;
        min-height: 100vh;
        max-width: 1280px;
        margin: 20vh auto;
        padding: 2rem;
        text-align: center;
    }
</style>
