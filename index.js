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

