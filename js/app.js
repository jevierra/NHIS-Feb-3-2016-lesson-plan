
$(".answer span").hide();

$(".answer").append("<button>Question 1:</button>");

$("button").click(function(){
 
  $(this).prev().show();
  
  $(this).remove();


});
