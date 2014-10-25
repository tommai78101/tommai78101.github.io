---
layout: page
title: Test Bed for Test Posts
permalink: /test/
---

<div class="test">
  {% for test in site.test %}
    <article class="test">    
      
      <h1><a href="{{ site.baseurl }}{{ test.url }}">{{ test.title }}</a></h1>

      <div class="entry">
        {{ test.content | truncatewords:50}}
      </div>

      <a href="{{ site.baseurl }}{{ test.url}}" class="read-more">Read More</a>
    </article>
  {% endfor %}
</div>
