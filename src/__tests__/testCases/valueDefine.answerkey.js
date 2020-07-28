document.getElementById('other-username').value = () =>
  this.checked ? document.getElementById('repo-owner').value : '';

document.getElementById('other-username').value = function () {
  return this.checked ? document.getElementById('repo-owner').value : ''
};
