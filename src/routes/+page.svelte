<script>
    import Cards from "../components/Cards.svelte";
    let data = [
        {
            category: "education",
            data: [
                {
                    name: "AI subtitle",
                    url: "https://pod.deoops.com",
                    image: "https://pod.deoops.com/fav.svg",
                    description: "Learn English from AI subtitle",
                    recommended: true,
                },
            ],
        },
        {
            category: "entertainment",
            data: [
                {
                    name: "轻视频",
                    url: "https://kan.deoops.com",
                    image: "https://kan.deoops.com/fav.svg",
                    description: "海量电视，电影，综艺资源网站",
                    recommended: false,
                },
            ],
        },
        {
            category: "productivity tools",
            data: [
                {
                    name: "云猪下载",
                    url: "https://dl.deoops.com",
                    imurl: "https://dl.deoops.com/fav.svg",
                    description: "云端的种子，磁力下载工具",
                    recommended: false,
                },
            ],
        },
        {
            category: "others",
            data: [
                {
                    name: "k8s管理工具",
                    url: "https://set-img.deoops.com",
                    imurl: "https://set-img.deoops.com/fav.svg",
                    description: "简单的kubernetes应用发布，更新工具",
                    recommended: false,
                },
            ],
        },
    ];
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

<div class="body-container">
    <h1>Website Navigation v2</h1>
    {#each data as card}
        <Cards category={card.category} data={card.data} />
    {/each}
</div>

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

    .body-container {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        background-color: var(--background-color);
        color: var(--text-color);
        padding: 1rem;
    }

    h1 {
        text-align: center;
        color: var(--primary-color);
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
    }

    @media (min-width: 768px) {
        .body-container {
            padding: 2rem;
        }

        h1 {
            font-size: 2rem;
        }
    }
</style>
