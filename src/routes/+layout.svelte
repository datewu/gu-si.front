<script>
</script>

<svelte:head>
    <title>Fu's Full-Stack Development & DevOps Studio</title>
    <meta
        name="description"
        content="Fu's personal work studio, showcasing expertise in backend programming with Go, Rust, Python, and proficiency in DevOps technologies such as Docker, Kubernetes, and Linux. Skilled in frontend development with Leptos, SvelteKit, and more."
    />
    <meta
        name="keywords"
        content="Full-Stack Development, DevOps, Go, Rust, Python, Docker, Kubernetes, Leptos, SvelteKit, Linux, Ubuntu, Frontend Development, HTML, CSS, SCSS, JavaScript, React, HTMX, TailwindCSS"
    />
    <meta name="author" content="Fu" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<slot />
<footer><a href="/"> ©fu </a> since 2006</footer>

<style>
    :root {
        --primary-color: #007bff;
        --secondary-color: #6c757d;
        --success-color: #28a745;
        --background-color: #f8f9fa;
        --card-background: #ffffff;
        --text-color: #333333;
        --text-muted: #6c757d;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    footer {
        text-align: center;
        margin-top: 1rem;
        font-size: 0.85rem;
        color: var(--text-muted);
    }
</style>
