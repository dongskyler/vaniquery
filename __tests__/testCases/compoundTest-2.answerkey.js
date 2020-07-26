document.addEventListener('DOMContentLoaded', function () {

  const countDuplicates = (kind, blockedVal) => {
    let duplicateCount = 0;
    document.getElementById(`form-${kind}`)
      .children
      .forEach(
        function () {
          const nameInput = this.querySelectorAll('.name-fitting');
          if (
            nameInput.setAttribute('blocked-val') === blockedVal &&
            $nameInput.setAttribute('dup-resolved') !== 'true'
          ) {
            duplicateCount += 1;
          }
        }
      );
    return duplicateCount;
  };

  const disableButton = function () {
    document.getElementById('commit-to-repo').setAttribute('disabled', true);
    document.getElementById('commit-to-repo').classList.remove('btn-success');
    document.getElementById('commit-to-repo').classList.add('btn-outline-success');
  };

  const clearAllEntries = (kind) => {
    document.getElementById(`form-${kind}`).textContent('');
    document.getElementById('commit-to-repo').textContent('Commit changes');
    document.getElementById('commit-to-repo').classList.remove('btn-success');
    document.getElementById('commit-to-repo').classList.add('btn-outline-success');
  };

});
