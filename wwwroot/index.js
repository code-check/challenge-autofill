//BEGIN_CHALLENGE
var $input = $("#autofill_input");
var $result = $("#autofill_result");

$input.on("keyup", function () {
    var text = $input.val().toLowerCase();
    $result.html(''); // Clear
    if (text.length === 0) return;

    for (var i = 0; i < words.length; i++) {
        if (words[i].toLowerCase().indexOf(text) === 0)
           $result.append("<p>" + words[i] + "</p>");
    }
});
//END_CHALLENGE