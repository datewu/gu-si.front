<script>
    export let category = "";
    export let data = [];
</script>

<div class="category">
    <h2>{category}</h2>
    <div class="websites">
        {#each data as site}
            <div
                class="website-card"
                style="background-image: url('{site.image}')"
            >
                <h3>{site.name}</h3>
                <p>{site.description}</p>
                <a href={site.url}>
                    <div class="icon-text-link">
                        <img src={site.image} alt="Website Icon" />
                        <span> Visit The Website </span>
                    </div></a
                >
                {#if site?.recommended}
                    <span class="recommend-badge">Recommended</span>
                {/if}
            </div>
        {/each}
    </div>
</div>

<style>
    .category {
        margin-bottom: 2rem;
    }

    .category h2 {
        color: var(--secondary-color);
        border-bottom: 2px solid var(--secondary-color);
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }

    .websites {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .website-card {
        background-color: var(--card-background);
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        padding: 1rem;
        position: relative;
        transition: transform 0.3s ease;
        background-size: cover; /* Make the background image cover the card */
        background-position: center; /* Center the image */
        min-height: 150px; /* Ensure a minimum height for the card */
        color: #fff; /* Set text color for better contrast against the background */
    }

    .website-card:hover {
        transform: translateY(-5px);
    }

    .icon-text-link {
        display: flex;
        align-items: center;
        img {
            height: 32px;
        }
        span {
            margin-left: 0.3rem;
        }
    }

    .website-card h3 {
        margin: 0 0 0.5rem 0;
        color: var(--primary-color);
        font-size: 1rem;
    }

    .website-card p {
        color: var(--text-muted);
        margin-bottom: 1rem;
        font-size: 0.9rem;
    }

    .website-card a {
        display: inline-block;
        background-color: var(--primary-color);
        color: white;
        padding: 0.5rem 1rem;
        text-decoration: none;
        border-radius: 4px;
        transition: background-color 0.3s;
        font-size: 0.9rem;
    }

    .website-card a:hover {
        background-color: #0056b3;
    }

    .recommend-badge {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background-color: var(--success-color);
        color: white;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.7rem;
    }

    @media (min-width: 768px) {
        .category h2 {
            font-size: 1.5rem;
        }

        .websites {
            flex-direction: row;
            flex-wrap: wrap;
        }

        .website-card {
            width: calc(50% - 0.5rem);
        }

        .website-card h3 {
            font-size: 1.2rem;
        }

        .website-card p,
        .website-card a {
            font-size: 1rem;
        }
    }

    @media (min-width: 1024px) {
        .website-card {
            width: calc(33.333% - 0.667rem);
        }
    }
</style>
