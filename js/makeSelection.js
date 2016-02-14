var getSelectionRange =  function(userSelection) {
  /**
   * If function is called without a valid user selection, will return undefined.
   * Consider evaluating selection length > 0 instead.
   */
  if (userSelection || !userSelection.isCollapsed) {
    // Create a placeholder range
    var userSelectionRange = document.createRange();
    // Set start and end points of range.
    userSelectionRange.setStart(userSelection.anchorNode, userSelection.anchorOffset);
    userSelectionRange.setEnd(userSelection.focusNode, userSelection.focusOffset);
    /**
     * Using this method will report backwards highlighting as a collapsed range.
     * Selection.getRangeAt(0) reports un-collapsed per the docs.
     * Not really sure how this person figured out that difference. Bug in a suit?
     * http://stackoverflow.com/questions/8038683/window-getselection-how-do-you-tell-if-the-anchor-node-comes-before-the-focus
     */
    if (userSelectionRange.collapsed) {
      userSelectionRange.setStart(userSelection.focusNode, userSelection.focusOffset);
      userSelectionRange.setEnd(userSelection.anchorNode, userSelection.anchorOffset);
    }
  };
  return userSelectionRange;
};

var markRange = function(selectionRange, color) {
  console.log(selectionRange);
  // Create a placeholder selection
  var highlightedSelection = document.getSelection();
  // Remove default range(s) given to selection when instantiated.
  highlightedSelection.removeAllRanges();
  // Add range of user's selection to new selection object.
  highlightedSelection.addRange(selectionRange);

  var selectionObj = {
    startOffSet: selectionRange.startOffset,
    startNode: selectionRange.startContainer.parentElement.id,
    endOffSet: selectionRange.endOffset,
    endNode: selectionRange.endContainer.parentElement.id
  }
  console.log(JSON.stringify(selectionObj));


  //create process to save to local storage
  //create the Key value
  var keyName = selectionRange.toString().substring(0,4);

  //creates new localStorage instance with the keyName and user Range selection object
  localStorage.setItem(keyName,JSON.stringify(selectionObj));
  
  //Highlight new selection
  document.designMode = "on";
  document.execCommand("hiliteColor", false, color);
  document.designMode = "off";
};