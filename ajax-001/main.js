


function getQoute(){
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      document.getElementById('qoute').innerHTML = XHR.responseText;
    } else {
      document.getElementById('qoute').innerHTML = "qoute limit reached";
    }
  }

  XHR.open("GET","https://api.github.com/zen");
  XHR.send();
}

setInterval(function(){getQoute();},5000);
