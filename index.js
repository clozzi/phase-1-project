//run f on dom load
document.addEventListener('DOMContentLoaded', fetchVolunteer)

//fetch randomuser data from API then run f
function fetchVolunteer() {
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => displaySubject(data));
}

//create heading with subjects first and last name
function displaySubject(data) {
    randomSubject.innerHTML = "";
    let volunteer = data.results[0];
    let subjectName = (volunteer.name.first + " " + volunteer.name.last);
    let heading = document.createElement("h1");
    heading.innerHTML = subjectName;
    randomSubject.appendChild(heading);
//add image below the header
    let subjectImg = document.createElement("img");
    subjectImg.src = volunteer.picture.large;
    randomSubject.appendChild(subjectImg);
//add country below image
    let subjCountry = document.createElement("p");
    subjCountry.innerHTML = volunteer.location.country;
    randomSubject.appendChild(subjCountry);
}

//allow user to cycle through random user profiles
document.getElementById("nextProfile").addEventListener("click", () => {
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => nextSubject(data));
})

function nextSubject(data) {
    randomSubject.innerHTML = "";
    let volunteer = data.results[0];
    let subjectName = (volunteer.name.first + " " + volunteer.name.last);
    let heading = document.createElement("h1");
    heading.innerHTML = subjectName;
    heading.setAttribute("id", "usersName")
    randomSubject.appendChild(heading);
//add image below the header
    let subjectImg = document.createElement("img");
    subjectImg.setAttribute('id', 'subjImg');
    subjectImg.src = volunteer.picture.large;
    randomSubject.appendChild(subjectImg);
//add country below image
    let subjCountry = document.createElement("p");
    subjCountry.innerHTML = volunteer.location.country;
    randomSubject.appendChild(subjCountry);
}

document.getElementById('addSubject').addEventListener('click', addToList);
//need to clear original img OR access new img element (img elements add with each click so no reference point)
function addToList() {
    let heading = document.createElement('h1');
    let newHeader = document.getElementById('usersName');
    heading.innerHTML = newHeader.innerHTML;
    subjectList.appendChild(heading);

    console.log(subjImg);
    let subjectImg = document.createElement("img");
    subjectImg.setAttribute('id', 'subjImg');
    subjectImg.src = subjImg.src;
    subjectList.appendChild(subjectImg);
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
/*    let btn = document.createElement('button');
      btn.addEventListener('click', handleDelete);
      btn.textContent = 'x';*/
    li.textContent = `${userNote}`;
//    li.appendChild[btn];
    if (`${userNote}` === '') {
        alert("That's not a very useful note!");
    } else {
        document.querySelector('#myNotes').appendChild(li);
    }
  }
  
/*  function handleDelete(e) {
      e.target.parentNode.remove();
    }
*/