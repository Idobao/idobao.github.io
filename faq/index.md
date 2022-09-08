---
title: FAQ
---

# Frequently Asked Questions

{% assign i = 0 %}
<div class="main" markdown="0">
  {%- for section in site.data.faq.faq -%}
    <div class="section">
      <h3>{{ section.section }}</h3>
      <div class="list-group">
        {%- for question in section.questions -%}
          {% assign i = i | plus:1 %}
          <a href="#item{{ i }}" class="list-group-item list-group-item-action" data-bs-toggle="collapse">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{ question.question }}</h5>
            </div>  
            <p class="mb-1">{{ question.short }}</p>
            {%- if question.long and question.long != '' -%}
              <small><u>Learn more</u></small>         
              <div class="collapse mt-3" id="item{{ i }}">
                {{ question.long }}
              </div>
            {% endif -%}
          </a>
        {% endfor -%}
      </div>
    </div>
  {% endfor -%}
</div>
