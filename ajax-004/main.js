var url = 'https://randomuser.me/api/';
var fullname = document.querySelector("#fullname");
var avatar = document.querySelector("#avatar");
var username = document.querySelector("#username");
var city = document.querySelector("#city");
var email = document.querySelector("#email");

var btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
  axios.get(url)
  .then(parseJSON)
  .then(updateProfile)
  .catch(handleErrors);
});
function parseJSON (res){
  console.log(res.data.results[0]);
  return res.data.results[0];
}

function updateProfile (data){
  fullname.innerText = data.name.first + " " + data.name.last;
  avatar.src = data.picture.medium;
  username.innerText = data.login.username;
  city.innerText = data.location.city;
  email.innerText = data.email;
}


function handleErrors(err) {
  if (err.response) {
    console.log("Problem With Response ", err.response.status);
  } else if (err.request) {
    console.log("Problem With Request!");
  } else {
    console.log('Error', err.message);
  }
}
