---
title: Experimental & Beta Programme
---

# <i class="fas fa-baby"></i> Experimental & Beta Program

We're all about Continuous Improvement.  And the fist of the Twelve Principles of Agile Philosophy is: *"It is all about the customer and delivering value early."*

With that in mind - herein we will publish our WIP ("Work In Progress") firmware.

<div class="border shadow shadow-sm border-danger bg-danger bg-opacity-10 rounded-3 p-2 mb-4 text-opacity-75">
  <ul class="fa-ul mb-0 me-3">
  <li><span class="fa-li"><i class="fas fa-exclamation-triangle text-danger"></i></span>
    Please note that resources on this page are <b><i>EXPERIMENTAL</i></b>, pre-release, and non-supported.  USE AT YOUR OWN RISK!</li>
  <li class="mt-3"><span class="fa-li"><i class="fas fa-info-circle text-info"></i></span>
    If you have issues please contact us at our <a href="https://discord.gg/asgKBYJUNA"><i class="fab fa-discord"></i> Discord Server</a>.
    <i>(But support is very limited.)</i></li>
  </ul>
</div>

# <i class="fas fa-baby-carriage"></i>

{: .table .table-striped .border .align-middle }
| Keyboard | Firmware file<sup>1</sup> | VIA JSON file<sup>2</sup> | Notes |
|----------|---------------------------|---------------------------|-------|
| Montex V2 *(>= Apr 2022)* | [`idobao_montex_v2_idobao.hex`]({{ site.github_raw_path }}/beta/idobao_montex_v2_idobao.hex.zip) | [`montex-v2-via.json`]({{ site.github_raw_path }}/beta/montex-v2-via.json.zip) | *--* |
| Abacus ID42 | [`idobao_id42_idobao_vial.hex`]({{ site.github_raw_path }}/beta/idobao_id42_idobao_vial.hex.zip) | [`id42-via.json`]({{ site.github_raw_path }}/beta/id42-via.json.zip) | [New Layers](id42-layer-readme.png) <sup>3<sup> |
| Denwir ID63 | [`idobao_id63_idobao.hex`]({{ site.github_raw_path }}/beta/idobao_id63_idobao.hex.zip) | [`id63-via.json`]({{ site.github_raw_path }}/beta/id63-via.json.zip) | <sup>4</sup> |
| ID67 V2 | [`idobao_id67_idobao.hex`]({{ site.github_raw_path }}/beta/idobao_id67_idobao.hex.zip) | [`id67-v2.via.json`]({{ site.github_raw_path }}/beta/id67-v2.via.json.zip) | <sup>4</sup> |
| ID80 V3 | [`idobao_id80_v3_ansi_idobao.hex`]({{ site.github_raw_path }}/beta/idobao_id80_v3_ansi_idobao.hex.zip) | [`id80-v3-via.json`]({{ site.github_raw_path }}/beta/id80-v3-via.json.zip) | <sup>4</sup> |
| ID87 V2 TKL | [`idobao_id87_v2_idobao.hex`]({{ site.github_raw_path }}/beta/idobao_id87_v2_idobao.hex.zip) | [`id87-v2-via.json`]({{ site.github_raw_path }}/beta/id87-v2-via.json.zip) | <sup>4</sup> |


<small class="text-muted">
<sup>1</sup> = For instructions on how to flash firmware see our [<i class="fas fa-bolt"></i> Flashing Guide](/manuals/flashing/) page.  *(Skip step 1)*<br>
<sup>2</sup> = For instruiction on how to side-load VIA JSON files see our [<i class="fas fa-download"></i> Sideloading VIA JSON](/manuals/via/sideload/) help page. *(Skip step 1)*<br>
<sup>3</sup> = The Abacus features firmware from Vial. You do not need to use VIA or side-load VIA JSON for this to work in Vial.<br>
&nbsp; &nbsp; &nbsp; Vial can be downloaded from [<svg class="fa"><use xlink:href="#vial-logo"></use></svg> get.vial.today](https://get.vial.today/)<br>
<sup>4</sup> = This firmware includes new features:</small>
{: .mb-0}  

  * {: .small } Caps Lock LED indicator. Caps Lock glows white regardless of RGB off or on, when the caps lock is activated.
  * {: .small } 4-state RGB Toggle.  States are: 1 = All ON, 2 = Underglow ON, per-key off, 3 = Underglow off, per-key ON, 4 = All off.
  * {: .small } Full support for QMK RGB Matrix, including 40× LED animations
  * {: .small } VIA's "LIGHTING" tab bug fixed in VIA JSON file
  {: .ms-3 .mt-0 .text-muted } 

-----

<span class="text-muted">
<i class="fas fa-code"></i> - Source code for the firmware files can be found in our QMK fork, located at [<i class="fab fa-github-alt"></i> github.com/Idobao/qmk.qmk_firmware](https://github.com/Idobao/qmk.qmk_firmware).<br>
Please ***do not*** contact us about how to compile the code, this is ***not*** supported - but if you already know that, and have [useful feedback](https://alearningaday.blog/2020/08/04/useful-feedback/), please feel free to contact us on our [<i class="fab fa-discord"></i> Discord Server](https://discord.gg/asgKBYJUNA).
</span>
