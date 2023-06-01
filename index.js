document.addEventListener('DOMContentLoaded', fetchVolunteer)

function fetchVolunteer() {
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => console.log(data));
}