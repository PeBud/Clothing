/*jshint esversion: 6 */
var x = document.getElementById("click");
if (x.addEventListener) {
  x.addEventListener("click", move);
  else if (x.attachEvent) {
    x.attachEvent("onclick", move);
  }

  function move
}
