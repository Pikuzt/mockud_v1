document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });


  //forms
  $(document).ready(function() {
    M.updateTextFields();
  });
  // Or with jQuery

  $(document).ready(function(){
    $('.parallax').parallax();
  });

  $(document).ready(function() {
    M.updateTextFields();
  });

  //select
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });
