---
title: FAQ
---

# Frequently Asked Questions

{% assign i = 0 %}
<div class="main" markdown="0">
  {%- for section in site.data.faq.faq -%}
    <div class="section">
      <h3>{{ section.section }}</h3>
      <ul class="list-group">
        {%- for question in section.questions -%}
          {% assign i = i | plus:1 %}
          <li class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{ question.question }}?</h5>
            </div>  
            <p class="mb-1">{{ question.short }}</p>
            {%- if question.long and question.long != '' -%}
              <a href="#item{{ i }}" data-bs-toggle="collapse" class="collapsable collapsed"><span class="more">Learn more</span><span class="less">(Close)</span></a>         
              <div class="collapse my-3" id="item{{ i }}">
                {{ question.long }}
              </div>
            {% endif -%}
          </li>
        {% endfor -%}
      </ul>
    </div>
  {% endfor -%}
</div>
