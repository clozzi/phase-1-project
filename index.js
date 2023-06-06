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
    let subjPW = document.createElement("p");
    subjPW.innerHTML = volunteer.location.country;
    randomSubject.appendChild(subjPW);
    //adds all generated users to potential subject list
    document.getElementById('addSubject').addEventListener('click', () => {
        let subjectName = (volunteer.name.first + " " + volunteer.name.last);
        let heading = document.createElement("h1");
        heading.innerHTML = subjectName;
        subjectList.appendChild(heading);
        //add image below the header
        let subjectImg = document.createElement("img");
        subjectImg.src = volunteer.picture.large;
        subjectList.appendChild(subjectImg);
        //add country below image
        let subjPW = document.createElement("p");
        subjPW.innerHTML = volunteer.location.country;
        subjectList.appendChild(subjPW);
    })
}

/*
document.getElementById("addSubject").addEventListener('click', addToList);
function addToList() {
    let li = document.createElement('li');
    console.log(randomSubject);
    let userData = (randomSubject.name.first + " " + randomSubject.name.last);
    li.innerHTML = userData;
    document.querySelector('#subjectList').appendChild(li);
}
*/

//allow user to cycle through random user profiles
document.getElementById("nextProfile").addEventListener("click", fetchVolunteer);

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