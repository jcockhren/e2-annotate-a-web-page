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
    window.designMode = "on";
    //loops to go through all elements in local storage and console values
    for(var i in localStorage){

        var StoredRange = JSON.parse(localStorage[i]);
        var CreateRange = document.createRange();

        CreateRange.setStart(document.getElementById(StoredRange.startNode), StoredRange.startOffset);
        CreateRange.setEnd(document.getElementById(StoredRange.endNode), StoredRange.endOffset);
        
        console.log(CreateRange);
        window.getSelection();
        window.addRange(CreateRange);
        window.execCommand("hiliteColor", false, color);
    }
    document.designMode = "off";

})
