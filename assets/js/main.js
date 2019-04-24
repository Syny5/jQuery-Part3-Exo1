$(function() {
  // on déclare une variable count qu'on initialise à zéro
  var count = 0;
  $('#spamClick').click(function(){
    // L'événement se produit au clic 
    count++;
    // on incrémente la variable
    $('#countClick').attr('value', count);
    // on donne au champs de texte la valeur de la variable
  });
});
