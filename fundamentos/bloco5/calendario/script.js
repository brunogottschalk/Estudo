const days = document.getElementsByClassName('days')[0];

for (let x = 1; x <= 30; x += 1) {
  days.innerHTML += '<li>' + x + '</li>';
}