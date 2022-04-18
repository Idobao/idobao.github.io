function el_ready(fn) {
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

el_ready(function() {
  var website = window.location.hostname;

  var internalLinkRegex = new RegExp('^(http|https)://', '');  // starts with "http://"

  var anchorEls = document.querySelectorAll('a');
  var anchorElsLength = anchorEls.length;

  for (var i = 0; i < anchorElsLength; i++) {
    var anchorEl = anchorEls[i];
    var href = anchorEl.getAttribute('href');

    if (internalLinkRegex.test(href)) {
      anchorEl.setAttribute('target', '_blank');
      anchorEl.classList.add('external-link');
    }
  }
});
