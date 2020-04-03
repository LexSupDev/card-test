var pageUrl=location.search.substring(1);

if (pageUrl === 'ip') {
  var ipFormInput = document.querySelector('#bis-form-ip');
  ipFormInput.checked = true;
} else if (pageUrl === 'ooo') {
  var oooFormInput = document.querySelector('#bis-form-ooo');
  oooFormInput.checked = true;
}
