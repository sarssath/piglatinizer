$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.

$("#button").click(function(){
    $(".class").text();
    var vowels = ["a", "e", "i", "o", "u"];
    var input = $(".input").val();
    var split = input.split("");
    var firstLetter = split[0];
    console.log(input);
    if (vowels.includes(firstLetter)) {
        $(".output").append(input + "ay");
    } else {
        input.substring(0,0);
        console.log(input.substring(0,0))
        $(".output").append(input + firstLetter + "ay");
    }
});






});
