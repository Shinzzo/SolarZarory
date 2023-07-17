var input = document.getElementById("input1");
   input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      textcolor1(e);
    }
  });



function textcolor1(e) {
  var text = document.getElementById("textField");
  text.style.display = "block";
}