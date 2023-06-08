//run f on dom load
document.addEventListener('DOMContentLoaded', fetchVolunteer)
//fetch randomuser data from API then run f
function fetchVolunteer() {
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => displaySubject(data));
}

//create initial heading with subjects first and last name
function displaySubject(data) {
    randomSubject.innerHTML = "";
    let volunteer = data.results[0];
    let subjectName = (volunteer.name.first + " " + volunteer.name.last);
    let heading = document.createElement("h1");
    heading.innerHTML = subjectName;
    heading.setAttribute("id", "usersName")
    randomSubject.appendChild(heading);
//add image below the header
    let subjectImg = document.createElement("img");
    subjectImg.src = volunteer.picture.large;
    subjectImg.setAttribute("id", "usersImg")
    randomSubject.appendChild(subjectImg);
//add country below image
    let subjCountry = document.createElement("p");
    subjCountry.innerHTML = volunteer.location.country;
    randomSubject.appendChild(subjCountry);
}

//next user button activated
document.getElementById('nextProfile').addEventListener('click', fetchVolunteer);

//add subject button activated leading to f addtolist
document.getElementById('addSubject').addEventListener('click', addToList);
//creates a new list item from the current random user
function addToList() {
    let heading1 = document.createElement('h1');
    let newHeader = document.getElementById('usersName');
    heading1.innerHTML = newHeader.innerHTML;
    subjectList.appendChild(heading1);

    let subjectImg1 = document.createElement('img');
    let imgElement = document.getElementById('usersImg');
    let newImg = imgElement.cloneNode(true);
    subjectImg1 = newImg;
    subjectList.appendChild(subjectImg1);
}

//on dom load, add submit functionality to form and run f on input value
document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      newNote(e.target["newNote"].value)
      form.reset()
    });
  });
  
  //create notes list from input, if no input alert user -- DELETE FUNCTION NOT FUNCTIONING
  function newNote(userNote) {
    let li = document.createElement('li');
    let btn = document.createElement('button');
      btn.addEventListener('click', handleDelete);
      btn.textContent = 'X';
    li.textContent = `${userNote}`;
    if (`${userNote}` === '') {
        alert("That's not a very useful note!");
    } else {
        document.querySelector('#myNotes').appendChild(li);
    }
    li.appendChild(btn);
  }
  
  function handleDelete(e) {
      e.target.parentNode.remove();
    }
