const article = [
    {
        title: "Why Everyone Suddenly Carries a Digital Camera Again",
        category: "Style",
        author: "Lena Park",
        date: "2026-02-12",
        summary: "Low-fi flash photos and photo dumps are replacing polished filters for a more casual memory style.",
        link: "https://www.npr.org/2024/12/09/nx-s1-5209770/gen-z-digital-compact-cameras-millennials-trendy",
        image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Matcha Mornings and the New Cafe Aesthetic",
        category: "Food",
        author: "Rae Singh",
        date: "2026-01-30",
        summary: "Short-form creators made matcha and strawberry matcha into a daily ritual with tutorials, recipes, and cafe reviews.",
        link: "https://www.vogue.com/article/matcha-new-wave",
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "How 'No-Buy Month' Became a Flex",
        category: "Lifestyle",
        author: "Mia Alvarez",
        date: "2026-02-20",
        summary: "Budgeting challenges and transparent spending diaries turned saving money into a social trend.",
        link: "https://www.nytimes.com/2025/06/27/your-money/no-buy-july-budgeting.html",
        image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Micro-Vlogging: Tiny Daily Recaps in 15 Seconds",
        category: "Tech",
        author: "Noah Brooks",
        date: "2026-02-04",
        summary: "Creators are favoring quick mini-vlogs over long edits, with subtitles and voiceovers doing most of the storytelling.",
        link: "https://www.aam-us.org/2013/01/29/micro-vlogging-keeking-up-with-social-media-trends/",
        image: "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Thrift Flips and DIY Fashion Algorithms",
        category: "Style",
        author: "Jordan Kim",
        date: "2026-01-25",
        summary: "Secondhand fashion tutorials keep trending as students customize basics into one-of-one pieces.",
        link: "https://thefashionglobe.com/gen-z-thrift-flipping-fast-fashion/",
        image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Campus Run Clubs Are the New Social Feed",
        category: "Wellness",
        author: "Ari Thompson",
        date: "2026-02-15",
        summary: "Run clubs mix fitness with community, replacing passive scrolling with in-person routines and meetups.",
        link: "https://www.vogue.com/article/from-sauna-socials-to-run-clubs-are-community-event-leaders-the-new-influencers",
        image: "https://images.unsplash.com/photo-1452626212852-811d58933cae?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Playlist Culture: Sharing Mood Boards Through Music",
        category: "Music",
        author: "Sam Rivera",
        date: "2026-02-02",
        summary: "Collaborative playlists are now part diary, part recommendation engine, and part friend group identity.",
        link: "https://www.npr.org/2023/04/03/1165044383/music-playlists",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Are Study-With-Me Streams Actually Helpful?",
        category: "Education",
        author: "Kai Patel",
        date: "2026-01-18",
        summary: "Body-doubling and timed focus sessions help students stay accountable, especially during exam season.",
        link: "https://www.bbc.com/news/education-61305442",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
    }
];

const container = document.getElementById("articles");

article.forEach(function(articleItem) {

    let card = document.createElement("div");
    card.classList.add("article-card");

    let title = document.createElement("h2");
    let link = document.createElement("a");
    link.href = articleItem.link;
    link.target = "_blank";
    link.textContent = articleItem.title;
    title.appendChild(link);

    let img = document.createElement("img");
    img.src = articleItem.image;
    img.alt = articleItem.title;

    let summary = document.createElement("p");
    summary.textContent = articleItem.summary;

    let info = document.createElement("p");
    info.textContent = `By ${articleItem.author} | ${articleItem.date}`;

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(summary);
    card.appendChild(info);

    container.appendChild(card);
});