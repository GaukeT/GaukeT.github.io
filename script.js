$(document).ready(function(){
  $('a').click(function(e){
    if (!$(this).attr('href').startsWith("http")) {
      e.preventDefault();
      $("#content").load($(this).attr('href'));
    }
  });
});