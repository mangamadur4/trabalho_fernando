function showDateTime() {
    const el = document.getElementById('datetime');
    el.textContent = new Date().toLocaleString();
}
function calcTwoPlusTwo() {
    document.getElementById('calcResult').textContent = '2 + 2 = ' + (2 + 2);
}
showDateTime();
setInterval(showDateTime, 1000);
document.getElementById('calcBtn').addEventListener('click', calcTwoPlusTwo);