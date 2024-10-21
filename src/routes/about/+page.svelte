<script>
    export let name = "Fu";
    export let skills = [
        "Backend Programming: Go, Rust, Python",
        "DevOps: Docker, Kubernetes, Linux/Ubuntu",
        "Frontend Programming: HTML, CSS, SCSS, JavaScript",
        "Frameworks: Leptos, SvelteKit, React, HTMX, TailwindCSS",
    ];
</script>

<svelte:head>
    <title>About me</title>
</svelte:head>

<main>
    <section class="about">
        <h1>About Me</h1>
        <p>
            Hello! I'm {name}, a passionate full-stack developer with a strong
            background in backend and DevOps technologies.
        </p>
        <p>I specialize in:</p>
        <ul>
            {#each skills as skill}
                <li>{skill}</li>
            {/each}
        </ul>
        <p>
            Currently, I'm focusing on building full-stack applications using <strong
                >Leptos</strong
            >
            and <strong>SvelteKit</strong>, exploring new ways to make web
            applications faster, efficient, and more scalable.
        </p>
    </section>
</main>

<style>
    main {
        margin-top: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background-color: #f0f4f8;
        color: #333;
    }

    .about {
        max-width: 75vw;
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #2c3e50;
    }

    p {
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 1rem;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        font-size: 1rem;
        background-color: #e1f5fe;
        margin: 5px 0;
        padding: 10px;
        border-radius: 4px;
        color: #0277bd;
    }

    /* Responsive design */
    @media (max-width: 600px) {
        h1 {
            font-size: 1.75rem;
        }

        p,
        li {
            font-size: 0.9rem;
        }

        .about {
            padding: 15px;
        }
    }

    @media (max-width: 400px) {
        h1 {
            font-size: 1.5rem;
        }

        p,
        li {
            font-size: 0.85rem;
        }

        .about {
            padding: 10px;
        }
    }
</style>
