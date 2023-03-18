---
title: VIA, Vial & ReMap Support
---

# VIA, Vial & ReMap Support

There are currently three open-source applications that support QMK's VIA implementation. <b>Note</b> that none of these are made, or even influenced, by IDOBAO.  Changes to these tools remain at the discretion of their authors. 

*All of them should work as Chromium apps, so it's a personal choice, and VIA and Vial also run on <i class="fab fa-windows"></i> Windows, <i class="fab fa-apple"></i> macOS or <i class="fab fa-linux"></i> Linux as downloadable native apps.*

Be sure to check back with their sites to make sure you have the latest builds.


<div class="row">
  <div class="col-md-4">
    <div class="card text-center mb-3 border rounded-3 shadow" style="border-color:#AD7070 !important">
      <img src="/assets/img/caniusevia.svg" width="300" height="88" class="card-img-top" style="background-color:#AD7070;color:white">
      <div class="card-body">
        <h5 class="card-title text-shadow">VIA</h5>
        <!-- <p class="card-text"></p> -->
        <span id="via_app_chrome" class="d-none"><a href="https://usevia.app/" class="btn shadow" style="background-color:#AD7070;color:white"><svg class="fa"><use xlink:href="#via-logo"/></svg> usevia.app</a></span>
        <span id="via_app_alt"><a href="https://www.caniusevia.com/" class="btn shadow" style="background-color:#AD7070;color:white"><svg class="fa"><use xlink:href="#via-logo"/></svg> caniusevia.com</a></span>
        <hr>
        <p>If you're looking for the original PC/Mac apps, you can get them at <a href="https://github.com/the-via/releases/releases">https://github.com/the-via/releases</a></p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card text-center mb-3 border rounded-3 shadow" style="border-color:#023E8A !important">
      <img src="/assets/img/getvialtoday.svg" width="300" height="88" class="card-img-top" style="background-color:#023E8A;color:white">
      <div class="card-body">
        <h5 class="card-title text-shadow">Vial</h5>
        <!-- <p class="card-text"></p> -->
        <span id="vial_app_chrome" class="d-none"><a href="https://vial.rocks/" class="btn shadow" style="background-color:#023E8A;color:white"><svg class="fa"><use xlink:href="#vial-logo"/></svg> vial.rocks</a></span>
        <span id="vial_app_alt"><a href="https://get.vial.today/" class="btn shadow" style="background-color:#023E8A;color:white"><svg class="fa"><use xlink:href="#vial-logo"/></svg> get.vial.today</a></span>
        <hr>
        <p>If you're looking for the original PC/Mac apps, you can get them at <a href="https://get.vial.today/download/">https://get.vial.today/download</a></p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card text-center mb-3 border rounded-3 shadow" style="border-color:#3A3B3C !important">
      <img src="/assets/img/remapkeys.svg" width="300" height="88" class="card-img-top" style="background-color:#3A3B3C;color:white">
      <div class="card-body">
        <h5 class="card-title text-shadow">ReMap</h5>
        <!-- <p class="card-text"></p> -->
        <span id="remap_app_chrome" class="d-none"><a href="https://remap-keys.app/" class="btn shadow" style="background-color:#3A3B3C;color:white"><svg class="fa"><use xlink:href="#remap-logo"/></svg> remap-keys.app</a></span>
        <span id="remap_app_alt"><a href="https://remap-keys.app/" class="btn shadow" style="background-color:#3A3B3C;color:white"><svg class="fa"><use xlink:href="#remap-logo"/></svg> remap-keys.app</a></span>
        <hr>
        <p>ReMap is an online app requiring Google Chrome or other Chromium-based web browsers.</p>
      </div>
    </div>
  </div>
</div>

<div class="border shadow shadow border-danger bg-danger bg-opacity-10 rounded-3 p-2 mb-4 text-opacity-75">
  <ul class="fa-ul mb-0 me-3 py-2">
  <li><span class="fa-li"><i class="fas fa-exclamation-triangle text-danger"></i></span>
    <b class="text-danger">Warning:</b> Please note that recent changes (Feb 2023) to VIA & QMK has created new internal key code structures/values, that do not match current/as-sold firmware. There are also issues with keyboards built with the RGB Matrix library.
    <br><br><b>This means that firmware built before November 26, 2022 will cause issues with the new VIA app.</b>
    <br><br>There is nothing we can do about this since the authors of VIA did not account for backward compatibility.  If your Keyboard does not work in the new VIA, please try one of the other two key mapping tools listed above.
    
    </li>
  </ul>
</div>

{%- include show-via-vial.html -%}

{: .my-3}
&nbsp;


{: .table .table-striped .border .align-middle }
| Keyboard |     | VIA Support |
|---------:|:---:|:------------|
| Idobao Montex *(ID27)* | <img src="../assets/img/idobao-id27.png" height="50" width="auto"> | *(Native)* [<i class="fas fa-info-circle"></i>](id27.html) |
| Idobao Abacus ID42 | <img src="../assets/img/idobao-id42.png" height="34" width="auto"> | *(Native)* [<i class="fas fa-info-circle"></i>](id42.html) |
| Idobao ID75 *(Ortholinear)* | <img src="../assets/img/idobao-id75.png" height="40" width="auto"> | *(Native)* [<i class="fas fa-info-circle"></i>](id75.html) |
| Idobao ID67 | <img src="../assets/img/idobao-id67.png" height="40" width="auto"> | *(Native)* [<i class="fas fa-info-circle"></i>](id67.html) |
| Idobao ID80 | <img src="../assets/img/idobao-id80.png" height="52" width="auto"> | *(Native)* [<i class="fas fa-info-circle"></i>](id80.html) |
| Idobao ID87 *(TKL)* | <img src="../assets/img/idobao-id87.png" height="50" width="auto"> | *(Native)* [<i class="fas fa-info-circle"></i>](id87.html) |
| Idobao ID96 | <img src="../assets/img/idobao-id96.png" height="48" width="auto"> | *(Native)* [<i class="fas fa-info-circle"></i>](id96.html) |

-----

<small class="text-muted">
<i class="fas fa-info-circle"></i> = The VIA application already supports keyboards marked as *"Native"*, there is no need to sideload a `json` file
</small>
