$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var word = $("#numberInput").val();

    var str1 = word.split("").reverse().join("");

    alert(str1);

    if (str1 === word){$("#result").text("palindrome");}
      else{$("#result").text("not palindrome");}


    event.preventDefault();
  });
});
