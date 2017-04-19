(function() {
    
    // Settings for the script: speed, etc. 
    var settings = {

    }

    // Find a get the element with id ="typed-text"
    var elemToType = document.getElementById("typed-text");
    var textToType = elemToType.innerHTML;

    // Hide the text
    elemToType.classList.add("no-seen");

    // Split text into single characters - ARRAY
    var splitTextArray = textToType.split('');

    // Wrap into span element every character
    var spanBegin = "<span class=\"no-seen\">";
    var spanEnd = "</span>";

    // Hold text after transformation and add cursor
    var typedText = "<span id=\"cursor\">|</span>";

    // Loop over the elements and create the wrap with span element
    // Add no-seen class
    splitTextArray.forEach(function(item, index, arr) {
        typedText += spanBegin + item + spanEnd;
    });

    // Insert typedText into DOM
    elemToType.innerHTML = typedText;

    // Position the cursor at the beginning
    var cursor = "";


    // Display the cursor & flashing


    // Iterate over the letters
    //  - for each 
    //      - move cursor 1 span element to the right
    //      - remove class "no-seen"  (any other effects?)

    
})();