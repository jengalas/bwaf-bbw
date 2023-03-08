---
layout: default
permalink: "/search"
title: Search

# CloudCannon config
_unlisted: true
---

<div class="main-two-up">
    <div>
        <h1>
            Search
        </h1>
    </div>
    <div>
        <input type="text" placeholder="Type to search" class="searchbar" id="searchbar-page">
        <div id="search-results">
        </div>
    </div>
</div>

<script src="https://unpkg.com/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>
<script>
    var sjs = SimpleJekyllSearch({
        searchInput: document.getElementById('searchbar-page'),
        resultsContainer: document.getElementById('search-results'),
        json: '/search.json',
        searchResultTemplate: '<a href="{{site.url}}{url}"><div class="thumbnail image-container"><img src="{image}"></div><div><h6>{category}</h6><h2><b>{title}</b></h2><p>{descript}</p></div></a>'
    })
</script>
