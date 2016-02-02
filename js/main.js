$('#button').on('click', function(){
  var value = $('#inputBox').val();
 
  $('p').each(function(index){
    var hello = $(this).text();
    console.log(hello);
    var x = hello.search(value);
    console.log(x);
    if(x !== -1 ){
      console.log("results found");
    }else{
      console.log("no results found");
    }


  })

})