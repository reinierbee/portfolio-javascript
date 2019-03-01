var btn = document.querySelector("#btn");
var photo = document.querySelector("#photo");

btn.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText)[0].url;
      photo.src = url;
    } else {
      photo.src = "../assets/Spin-1s-200px.gif";
    }
  }

  XHR.open("GET","https://api.thecatapi.com/v1/images/search?size=full");
  XHR.send();
})
