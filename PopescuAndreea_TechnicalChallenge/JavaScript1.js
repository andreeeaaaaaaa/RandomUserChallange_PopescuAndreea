var modal = document.getElementById("myModal");

var img = document.getElementById("image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}


async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api/?results=250');
    const data = await response.json();
    const user = data.results[0];
    console.log(user);
    displayUser(user);
}

function displayUser(user) {
    const fname = document.getElementById('first-name');
    const lname = document.getElementById('last-name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const location = document.getElementById('location');
    const image = document.getElementById('image');

    fname.innerText = user.name.first;
    lname.innerText = user.name.last;
    email.innerText = user.email;
    phone.innerText = user.phone;
    location.innerText = user.location.country;
    image.setAttribute('src', user.picture.large);
}

getRandomUser();