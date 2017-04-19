(function() {
    
    // Settings for the script: speed, etc. 
    var settings = {

    }

    // Find a get the element with id ="typed-text"
    var elemToType = document.getElementById("typed-text");
    var textToType = elemToType.innerHTML;

    // Hide the text
    elemToType.classList.add("no-seen");

    // Split text into single characters
    var splitText = textToType.split('');

    // Wrap into span element every character
    var spanBegin = "<span>";
    var spanEnd = "</span>";

    var typedText = "";
    // ADD LOOP HERE TO CREATE THE
    typedText = spanBegin + element + spanEnd;
    console.log();


    // Add default class "no-seen" to hide characters (will use "seen" class too?)


    // Position the cursor at the beginning


    // Display the cursor & flashing


    // Iterate over the letters
    //  - for each 
    //      - move cursor 1 span element to the right
    //      - remove class "no-seen"  (any other effects?)

    
})();