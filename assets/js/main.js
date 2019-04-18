var count = 0;
$('#spamClick').click(function(){
  count++;
  $('#countClick').attr('value', count);
});
