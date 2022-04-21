function tbls_ready(fn) {
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

tbls_ready(function() {
  var tables = document.querySelectorAll('table');
  var tablesLength = tables.length;

  for (var i = 0; i < tablesLength; i++) {
    var table = tables[i];
    table.classList.add('table');
    table.classList.add('table-borderless');
    table.classList.add('table-striped');
    table.classList.add('align-middle');

    // var tableHeads = table.querySelectorAll('thead');
    // var tableHeadsLen = tableHeads.length;

    // for (var j = 0; j < tableHeadsLen; j++) {
    //   var thead = tableHeads[i];
    //   thead.classList.add('table-light');
    // }
  }
});
