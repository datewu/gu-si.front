<script>
</script>

<h1>Website Navigation v2</h1>

<div class="category">
    <h2>Education</h2>
    <div class="websites">
        <div class="website-card">
            <img
                src="/placeholder.svg?height=80&width=80"
                alt="Khan Academy Logo"
            />
            <h3>Khan Academy</h3>
            <p>Free online courses, lessons & practice</p>
            <a href="https://www.khanacademy.org/">Visit Website</a>
            <span class="recommend-badge">Recommended</span>
        </div>
        <div class="website-card">
            <img
                src="/placeholder.svg?height=80&width=80"
                alt="Coursera Logo"
            />
            <h3>Coursera</h3>
            <p>Online courses from top universities</p>
            <a href="https://www.coursera.org/">Visit Website</a>
        </div>
        <div class="website-card">
            <img src="/placeholder.svg?height=80&width=80" alt="edX Logo" />
            <h3>edX</h3>
            <p>Free online courses from Harvard, MIT, and more</p>
            <a href="https://www.edx.org/">Visit Website</a>
        </div>
    </div>
</div>

<div class="category">
    <h2>Entertainment</h2>
    <div class="websites">
        <div class="website-card">
            <img src="/placeholder.svg?height=80&width=80" alt="Netflix Logo" />
            <h3>Netflix</h3>
            <p>Streaming TV shows and movies</p>
            <a href="https://www.netflix.com/">Visit Website</a>
            <span class="recommend-badge">Recommended</span>
        </div>
        <div class="website-card">
            <img src="/placeholder.svg?height=80&width=80" alt="Spotify Logo" />
            <h3>Spotify</h3>
            <p>Music streaming platform</p>
            <a href="https://www.spotify.com/">Visit Website</a>
        </div>
        <div class="website-card">
            <img src="/placeholder.svg?height=80&width=80" alt="YouTube Logo" />
            <h3>YouTube</h3>
            <p>Video sharing platform</p>
            <a href="https://www.youtube.com/">Visit Website</a>
        </div>
    </div>
</div>

<div class="category">
    <h2>Tools</h2>
    <div class="websites">
        <div class="website-card">
            <img src="/placeholder.svg?height=80&width=80" alt="Trello Logo" />
            <h3>Trello</h3>
            <p>Collaborative task management tool</p>
            <a href="https://trello.com/">Visit Website</a>
        </div>
        <div class="website-card">
            <img src="/placeholder.svg?height=80&width=80" alt="Canva Logo" />
            <h3>Canva</h3>
            <p>Graphic design platform</p>
            <a href="https://www.canva.com/">Visit Website</a>
            <span class="recommend-badge">Recommended</span>
        </div>
        <div class="website-card">
            <img
                src="/placeholder.svg?height=80&width=80"
                alt="Google Drive Logo"
            />
            <h3>Google Drive</h3>
            <p>Cloud storage and file synchronization</p>
            <a href="https://drive.google.com/">Visit Website</a>
        </div>
    </div>
</div>

<div class="category">
    <h2>Others</h2>
    <div class="websites">
        <div class="website-card">
            <img
                src="/placeholder.svg?height=80&width=80"
                alt="Wikipedia Logo"
            />
            <h3>Wikipedia</h3>
            <p>Free online encyclopedia</p>
            <a href="https://www.wikipedia.org/">Visit Website</a>
        </div>
        <div class="website-card">
            <img src="/placeholder.svg?height=80&width=80" alt="GitHub Logo" />
            <h3>GitHub</h3>
            <p>Web-based version-control platform</p>
            <a href="https://github.com/">Visit Website</a>
            <span class="recommend-badge">Recommended</span>
        </div>
        <div class="website-card">
            <img src="/placeholder.svg?height=80&width=80" alt="Medium Logo" />
            <h3>Medium</h3>
            <p>Online publishing platform</p>
            <a href="https://medium.com/">Visit Website</a>
        </div>
    </div>
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

    body {
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
    }

    .website-card:hover {
        transform: translateY(-5px);
    }

    .website-card img {
        max-width: 80px;
        height: auto;
        margin-bottom: 0.5rem;
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
        body {
            padding: 2rem;
        }

        h1 {
            font-size: 2rem;
        }

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
