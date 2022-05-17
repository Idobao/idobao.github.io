---
title: Experimental Beta Programme
---

# <i class="fas fa-baby"></i> Experimental Beta Programme

We're all about Continuous Improvement.  And the fist of the Twelve Principles of Agile Philosophy is: *"It is all about the customer and delivering value early."*

With that in mind - herein we will publish our WIP ("Work In Progress") firmware.

<div class="border shadow shadow-sm border-danger bg-danger bg-opacity-10 rounded-3 p-2 mb-4 text-opacity-75">
  <ul class="fa-ul mb-0 me-3">
  <li><span class="fa-li"><i class="fas fa-exclamation-triangle text-danger"></i></span>
    Please note that sources on this page are <b><i>EXPERIMENTAL</i></b>, pre-release, and non-supported.  Use at your own risk.</li>
  <li class="mt-3"><span class="fa-li"><i class="fas fa-info-circle text-info"></i></span>
    In you have issues please contact us at our <a href="https://discord.gg/asgKBYJUNA"><i class="fab fa-discord"></i> Discord Server</a>.
    <i>(But support is very limited.)</i></li>
  </ul>
</div>

# <i class="fas fa-baby-carriage"></i>

{: .table .table-striped .border .align-middle }
| Keyboard | Firmware file<sup>1</sup> | VIA JSON file<sup>2</sup> | Notes |
|----------|---------------------------|---------------------------|-------|
| Montex V2 *(>= Apr 2022)* | [`idobao_montex_v2_idobao.hex`](idobao_montex_v2_idobao.hex) | [`montex-v2-via.json`](montex-v2-via.json) | *--* |
| Abacus ID42 | [`idobao_id42_idobao_vial.hex`](idobao_id42_idobao_vial.hex) | [`id42-via.json`](id42-via.json) | [New Layers](id42-layer-readme.png) <sup>3<sup> |
| Denwir ID63 | [`idobao_id63_idobao.hex`](idobao_id63_idobao.hex) | [`id63-via.json`](id63-via.json) | <sup>4</sup> |
| ID67 V2 | [`idobao_id67_idobao.hex`](idobao_id67_idobao.hex) | [`id67-v2.via.json`](id67-v2.via.json) | <sup>4</sup> |
| ID80 V3 | [`idobao_id80_v3_ansi_idobao.hex`](idobao_id80_v3_ansi_idobao.hex) | [`id80-v3-via.json`](id80-v3-via.json) | <sup>4</sup> |
| ID87 V2 TKL | [`idobao_id87_v2_idobao.hex`](idobao_id87_v2_idobao.hex) | [`id87-v2-via.json`](id87-v2-via.json) | <sup>4</sup> |


<small class="text-muted">
<sup>1</sup> = For instructions on how to flash firmware see our [<i class="fas fa-bolt"></i> Flashing Guide](/manuals/flashing/) page.  *(Skip step 1)*<br>
<sup>2</sup> = For instruiction on how to side-load VIA JSON files see our [<i class="fas fa-download"></i> Sideloading VIA JSON](/manuals/via/sideload/) help page. *(Skip step 1)*<br>
<sup>3</sup> = The Abacus features firmware from Vial. You do not need to use VIA or side-load VIA JSON for this to work in Vial.<br>
&nbsp; &nbsp; &nbsp; Vial can be downloaded from [<svg class="fa"><use xlink:href="#vial-logo"></use></svg> get.vial.today](https://get.vial.today/)<br>
<sup>4</sup> = This new firmware features new features, including:</small>
{: .mb-0}  

  * {: .small } Caps Lock LED indicator. Caps Lock glows white regardless of RGB off or on, when the caps lock is activated.
  * {: .small } 4-state RGB Toggle.  States are: 1 = All ON, 2 = Underglow ON, per-key off, 3 = Underglow off, per-key ON, 4 = All off.
  {: .ms-3 .mt-0 .text-muted } 

