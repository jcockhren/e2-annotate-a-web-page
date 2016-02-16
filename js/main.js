$('article').mouseup(function() {
    //Create a placeholder selection
    var userSelection = document.getSelection();
    //abstract magic using the selection the user just made
    markRange(getSelectionRange(userSelection), '#ffae14');
});


function getSelectionText() {
    var self = this;
    if (document.getSelection) {
        var text = document.getSelection()
        var textsel = text.toString();
    }
    return textsel;
}
// getSelectionText();

//once the document is ready will fire function
$(document).ready(function(){
    var color = '#ff0000';
    //turns document editing mode on
    //loops to go through all elements in local storage and console values
    for(var i in localStorage){
        //parse item to get id
        var id = localStorage[i].slice(0,(localStorage[i].search("-")));
        //parse item to get selected text
        var text = localStorage[i].slice((localStorage[i].search("-")+1), (localStorage[i].length));
        //get text from paragraph specified in the item
        var paraText = $("#"+id).text();
        //replace the text in the item with "marked" text and rerender to the dom
        var markedText = paraText.replace(text, "<mark>"+text+"</mark>")
        $("#"+id).html(markedText);
    }
})
