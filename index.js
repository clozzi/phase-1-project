document.addEventListener('DOMContentLoaded', fetchVolunteer)

function fetchVolunteer() {
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => displaySubject(data));
}

function displaySubject(data) {
    randomSubject.innerHTML = ""
    let volunteer = data.results[0];
    let subjectName = (volunteer.name.first + " " + volunteer.name.last);
    let heading = document.createElement("h1");
    heading.innerHTML = subjectName;
    randomSubject.appendChild(heading);

    let subjectImg = document.createElement("img");
    subjectImg.src = volunteer.picture.large;
    randomSubject.appendChild(subjectImg);
}

document.getElementById("nextProfile").addEventListener("click", fetchVolunteer);

document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      newNote(e.target["newNote"].value)
      form.reset()
    });
  });
  
  function newNote(userNote) {
    let li = document.createElement('li');
    let btn = document.createElement('button');
    btn.addEventListener('click', handleDelete);
    btn.textContent = 'x';
    li.textContent = `${userNote}`;
    li.appendChild[btn];
    document.querySelector('#myNotes').appendChild(li);
  }
  
  function handleDelete(e) {
    e.target.parentNode.remove();
  }