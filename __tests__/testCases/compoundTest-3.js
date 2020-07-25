$(document).ready(function () {

  const $entry = $(this).closest('.label-entry');

  someElement = $('#something');

  someElement.children('.recover-button').click(
    /** @this HTMLElement */
    function () {
      $(this).siblings('.card').removeClass('deleted-card');
      $(this).siblings('.delete-button').removeClass('hidden');
      $(this).addClass('hidden');

      const $entry = $(this).closest('.label-entry');

      if (checkInputChanges($entry)) {
        $entry.attr('data-todo', 'none');
      } else {
        $entry.attr('data-todo', 'update');
      }

      checkIfEnableCommit();
    }
  );

});
