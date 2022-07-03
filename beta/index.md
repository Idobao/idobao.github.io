---
title: Experimental and Beta Program
---

# <i class="fas fa-baby"></i> Experimental & Beta Program

We're all about Continuous Improvement.  And the fist of the Twelve Principles of Agile Philosophy is: *"It is all about the customer and delivering value early."*

With that in mind - herein we will publish our WIP *("Work In Progress")* firmware.

<div class="border shadow shadow-sm border-danger bg-danger bg-opacity-10 rounded-3 p-2 mb-4 text-opacity-75">
  <ul class="fa-ul mb-0 me-3">
  <li><span class="fa-li"><i class="fas fa-exclamation-triangle text-danger"></i></span>
    Please note that resources on this page are <b class="text-danger"><i>EXPERIMENTAL</i></b>, pre-release, and non-supported.  USE AT YOUR OWN RISK! <i class="text-muted">(The source is given though.)</i></li>
  <li class="mt-3"><span class="fa-li"><i class="fas fa-exclamation-circle text-warning"></i></span>
    Please note that any "version" <i>(i.e., "V2", "V3")</i> referred to herein pertains to the PCB version, not the keyboard case version.  Please ensure that the PCB you're flashing is the correct one, as the PCB and the case versions do not always align.</li>
  <li class="mt-3"><span class="fa-li"><i class="fas fa-info-circle text-info"></i></span>
    If you have issues please contact us at our <a href="https://discord.gg/asgKBYJUNA"><i class="fab fa-discord"></i> Discord Server</a>.
    <i>(But support is very limited.)</i></li>
  </ul>
</div>

# <i class="fas fa-baby-carriage"></i>

*(These in development in the IDOBAO repository.)*

{: .table .table-striped .border .align-middle }
| Keyboard | Firmware file<sup>1</sup> | VIA JSON file<sup>2</sup> | Notes |  <i class="fas fa-code"></i> | <i class="fas fa-keyboard"></i> |
|----------|---------------------------|---------------------------|-------|:---:|:---:|
| Montex V2 *(>= Apr 2022)* | [`idobao_montex_v2_idobao.hex`]({{ site.github_raw_path }}/beta/idobao_montex_v2_idobao.hex.zip)<br>[`idobao_montex_v2_idobao_mac.hex`]({{ site.github_raw_path }}/beta/idobao_montex_v2_idobao_mac.hex.zip)<sup>5</sup> | [`montex-v2-via.json`]({{ site.github_raw_path }}/beta/montex-v2-via.json.zip) | *--* | [<i class="fab fa-github-alt"></i>](https://github.com/Idobao/qmk.qmk_firmware/tree/vr-id27-v2-id-keymap/keyboards/idobao/montex/v2) | [<i class="fas fa-image"></i>](../kle/idobao-id27-v2.png) |
| Abacus ID42 | [`idobao_id42_idobao_vial.hex`]({{ site.github_raw_path }}/beta/idobao_id42_idobao_vial.hex.zip) | [`id42-via.json`]({{ site.github_raw_path }}/beta/id42-via.json.zip) | [New Layers](id42-layer-readme.png) <sup>3<sup> | [<i class="fab fa-github-alt"></i>](https://github.com/Idobao/qmk.qmk_firmware/tree/vr-id42-add-new/keyboards/idobao/id42/)/[<svg class="fa"><use xlink:href="#vial-logo"></use></svg>](https://github.com/Idobao/vial-kb.vial-qmk/tree/vr-id42/keyboards/idobao/id42/) | [<i class="fas fa-image"></i>](id42-layer-readme.png) |
| Denwir 60 ID61 | [`idobao_id61_idobao.hex`]({{ site.github_raw_path }}/beta/idobao_id61_idobao.hex.zip) | [`id61-via.json`]({{ site.github_raw_path }}/beta/id61-via.json.zip) | <sup>4</sup> | [<i class="fab fa-github-alt"></i>](https://github.com/Idobao/qmk.qmk_firmware/tree/vr-id61-new/keyboards/idobao/id61/) | [<i class="fas fa-image"></i>](../kle/idobao-id61.png) |


# <i class="fas fa-child"></i>

*(These are in the QMK `develop` repository, awaiting the next quarterly merge.)*

{: .table .table-striped .border .align-middle }
| Keyboard | Firmware file<sup>1</sup> | VIA JSON file<sup>2</sup> | Notes |  <i class="fas fa-code"></i> | <i class="fas fa-keyboard"></i> |
|----------|---------------------------|---------------------------|-------|:---:|:---:|
| ID67 V2 | [`idobao_id67_idobao.hex`]({{ site.github_raw_path }}/beta/idobao_id67_idobao.hex.zip) | [`id67-v2-via.json`]({{ site.github_raw_path }}/beta/id67-v2-via.json.zip) | <sup>4</sup> | [<i class="fab fa-github-alt"></i>](https://github.com/qmk/qmk_firmware/tree/develop/keyboards/idobao/id67/v2/) | [<i class="fas fa-image"></i>](../kle/idobao-id67.png) |
| ID80 V3 | [`idobao_id80_v3_ansi_idobao.hex`]({{ site.github_raw_path }}/beta/idobao_id80_v3_ansi_idobao.hex.zip) | [`id80-v3-via.json`]({{ site.github_raw_path }}/beta/id80-v3-via.json.zip) | <sup>4</sup> | [<i class="fab fa-github-alt"></i>](https://github.com/qmk/qmk_firmware/tree/develop/keyboards/idobao/id80/v3/) |  [<i class="fas fa-image"></i>](../kle/idobao-id80.png) |
| ID87 V2 TKL | [`idobao_id87_v2_idobao.hex`]({{ site.github_raw_path }}/beta/idobao_id87_v2_idobao.hex.zip) | [`id87-v2-via.json`]({{ site.github_raw_path }}/beta/id87-v2-via.json.zip) | <sup>4</sup> | [<i class="fab fa-github-alt"></i>](https://github.com/qmk/qmk_firmware/tree/develop/keyboards/idobao/id87/) | [<i class="fas fa-image"></i>](../kle/idobao-id87.png) |


# <i class="fas fa-user-graduate"></i>

*(These are now incorporated into QMK.)*

{: .table .table-striped .border .align-middle }
| Keyboard | Firmware file<sup>1</sup> | VIA JSON file<sup>2</sup> | Notes |  <i class="fas fa-code"></i> | <i class="fas fa-keyboard"></i> |
|----------|---------------------------|---------------------------|-------|:---:|:---:|
| Denwir 60 ID63 | [`idobao_id63_idobao.hex`]({{ site.github_raw_path }}/beta/idobao_id63_idobao.hex.zip) | [`id63-via.json`]({{ site.github_raw_path }}/beta/id63-via.json.zip) | <sup>4</sup> | [<i class="fab fa-github-alt"></i>](https://github.com/qmk/qmk_firmware/tree/master/keyboards/idobao/id63/) | [<i class="fas fa-image"></i>](../kle/idobao-id63.png) |

---

<small class="text-muted">
<sup>1</sup> = For instructions on how to flash firmware see our [<i class="fas fa-bolt"></i> Flashing Guide](/manuals/flashing/) page.  *(Skip step 1)*<br>
<sup>2</sup> = For instructions on how to side-load VIA JSON files see our [<i class="fas fa-rotate-90 fa-download"></i> Sideloading VIA JSON](/manuals/via/sideload/) help page. *(Skip step 1)*<br>
<sup>3</sup> = The Abacus features firmware from Vial. You do not need to use VIA or side-load VIA JSON for this to work in Vial.<br>
&nbsp; &nbsp; &nbsp; Vial can be downloaded from [<svg class="fa"><use xlink:href="#vial-logo"></use></svg> get.vial.today](https://get.vial.today/)<br>
<sup>4</sup> = This firmware includes new features:</small>
{: .mb-0}  

  * {: .small } Caps Lock LED indicator. Caps Lock glows white regardless of RGB off or on, when the caps lock is activated.
  * {: .small } 4-state RGB Toggle.  States are: 1 = All ON, 2 = Underglow ON, per-key off, 3 = Underglow off, per-key ON, 4 = All off.
  * {: .small } Full support for QMK RGB Matrix, including 40× LED animations
  * {: .small } VIA's "LIGHTING" tab bug fixed in VIA JSON file
  {: .ms-3 .mt-0 .text-muted } 
<small class="text-muted">
<sup>5</sup> = Special build for macOS users.
</small>

-----

<span class="text-muted">
<i class="fas fa-code"></i> = Source code for the firmware files can be found in our QMK fork, located at [<i class="fab fa-github-alt"></i> github.com/Idobao/qmk.qmk_firmware](https://github.com/Idobao/qmk.qmk_firmware).<br>
Please ***do not*** contact us about how to compile the code, this is ***not*** supported - but if you already know that, and have [useful feedback](https://alearningaday.blog/2020/08/04/useful-feedback/), please feel free to contact us on our [<i class="fab fa-discord"></i> Discord Server](https://discord.gg/asgKBYJUNA).
</span>
