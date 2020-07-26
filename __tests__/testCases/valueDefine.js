$('#other-username').val(() =>
  $(this).prop('checked') ? $('#repo-owner').val() : ''
);

$('#other-username').val(function () {
  return $(this).prop('checked') ? $('#repo-owner').val() : ''
});
