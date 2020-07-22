$(document).ready(function () {
  $('body').bootstrapMaterialDesign();

  (() => {
    $('#copy-to-username').click(
      /** @this HTMLElement */
      function () {
        $('#target-username').val(() =>
          $(this).prop('checked') ? $('#target-owner').val() : ''
        );
      }
    );

    $('#target-owner').keyup(() => {
      $('#copy-to-username').prop('checked') &&
        $('#target-username').val($('#target-owner').val());
    });

    $('#target-username').keyup(
      /** @this HTMLElement */
      function () {
        $('#copy-to-username').prop('checked', () => {
          return $(this).val() === $('#target-owner').val();
        });
      }
    );
  })();
});
