$(document).ready(function () {

  const getLoginInfo = () => {
    return {
      targetOwner: $('#target-owner').val().trim(),
      targetRepo: $("#target-repo").val().trim(),
      personalAccessToken: $('#personal-access-token').val().trim(),
    };
  };

  const writeLog = (string) => {
    $('#loadingModal .modal-body').append(`${string}<br />`);
  };

  const checkInputChanges = (el) => {
    let noChanges = true;

    el.find(':input[data-orig-val]').each(
      /** @this HTMLElement */
      function () {
        if ($(this).val() !== $(this).attr('data-orig-val')) {
          noChanges = false;
        }
      }
    );
    return noChanges;
  };

});
