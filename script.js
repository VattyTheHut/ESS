$(document).ready(() => {
$('#Title').hide()
$( "#Title" ).fadeIn( 2500, function() {
    // Animation complete check
    console.log("got to Animation")
  });


  function myFunction() {
    console.log(document.getElementById("input1").value);
}

})