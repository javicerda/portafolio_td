// modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

// tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


// scroll tool

$("button").click(function(){
  alert($("div").scrollTop());
});
