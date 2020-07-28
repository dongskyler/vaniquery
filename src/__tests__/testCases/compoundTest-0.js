$(document).ready(function () {
  $('body').bootstrapMaterialDesign();

  $('#some-username').click(
    /** @this HTMLElement */
    function () {
      $('#other-username').val(() =>
        $(this).prop('checked') ? $('#repo-owner').val() : ''
      );
    }
  );

  $('#target-owner').keyup(() => {
    $('#copy-to-username').prop('checked') &&
      $('#target-username').val($('#target-owner').val());
  });

});
