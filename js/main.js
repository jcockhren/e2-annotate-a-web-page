console.log("hello world");

$('#button').on('click', function(){
  var value = $('#inputBox').val();
 
  $('p').each(function(index){
    var hello = $(this).text();
    console.log(hello);
  })

})