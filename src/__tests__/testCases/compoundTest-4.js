$(document).ready(function () {

  $('#form-milestones')
    .children()
    .each(
      /** @this HTMLElement */
      function () {
        $(this).find('.name-fitting').removeAttr('dup-resolved');
        if ($(this).attr('data-todo') === 'delete') {
          return;
        } else {
          const milestoneName = $(this).find('.name-fitting').val();
          if (milestoneName === '') {
            $(this).find('.empty-name-input').removeClass('hidden');
            milestonesErrorCount++;
          }
          $(this).find('.name-fitting').attr('blocked-val', milestoneName);
        }
      }
    );

  $(document).click((event) => {
    if ($(event.target).is('#loadingModal')) {
      $('#loadingModal').modal('hide');
    }
  });

});
