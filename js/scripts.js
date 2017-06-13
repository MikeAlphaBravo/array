//Backend



//Front-end

$(document).ready(function() {
  $(".inputs form").submit(function(event) {
    var fav1 = $("input#favorite1").val();
    var fav2 = $("input#favorite2").val();
    var fav3 = $("input#favorite3").val();
    favorites = [fav1, fav2, fav3];

    alert("My favorite things are " + favorites [0] + " & " + favorites [1] + " & " + favorites [2]);

    event.preventDefault();

  });
});
