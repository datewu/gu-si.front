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
                    image: "https://kan.deoops.com/dist/fav.svg",
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
                    image: "https://dl.deoops.com/fav.svg",
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
                    image: "https://set-img.deoops.com/static/fav.svg",
                    description: "简单的kubernetes应用发布，更新工具",
                    recommended: false,
                },
            ],
        },
    ];
</script>

<div class="body-container">
    <h1>
        <a href="/about">Fu's </a> Personal Work Studio
    </h1>
    {#each data as card}
        <Cards category={card.category} data={card.data} />
    {/each}
</div>

<style>
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

    a {
        text-decoration: none;
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
