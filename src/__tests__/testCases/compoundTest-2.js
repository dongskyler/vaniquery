$(document).ready(function () {

  const countDuplicates = (kind, blockedVal) => {
    let duplicateCount = 0;
    $(`#form-${kind}`)
      .children()
      .each(
        function () {
          const $nameInput = $(this).find('.name-fitting');
          if (
            $nameInput.attr('blocked-val') === blockedVal &&
            $nameInput.attr('dup-resolved') !== 'true'
          ) {
            duplicateCount += 1;
          }
        }
      );
    return duplicateCount;
  };

  const disableButton = function () {
    $('#commit-to-repo').attr('disabled', true);
    $('#commit-to-repo').removeClass('btn-success');
    $('#commit-to-repo').addClass('btn-outline-success');
  };

  const clearAllEntries = (kind) => {
    $(`#form-${kind}`).text('');
    $('#commit-to-repo').text('Commit changes');
    $('#commit-to-repo').removeClass('btn-success');
    $('#commit-to-repo').addClass('btn-outline-success');
  };

});
