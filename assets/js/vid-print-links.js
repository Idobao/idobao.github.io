function vpl_ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

vpl_ready(function() {
  var frameEls = document.querySelectorAll('iframe');
  var frameElsLength = frameEls.length;

  for (var i = 0; i < frameElsLength; i++) {
    var frameEl = frameEls[i];
    var href = frameEl.getAttribute('src');

    var span = document.createElement("span");
    span.innerHTML = "<span class=\"d-none d-print-inline\"><b> { <a href=\"" + href + "\" class=\"video-link\"><tt>" + href + "</tt></a> } </b></span>";

    frameEl.after(span);
  }
});
