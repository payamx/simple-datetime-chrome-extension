let dayFormat = new Intl.DateTimeFormat("fa", { weekday: "long" });
document.getElementById('today').textContent=dayFormat.format(Date.now());

let options = { year: 'numeric', month: 'numeric', day: 'numeric' };
let today = new Date().toLocaleDateString('fa-IR', options);
document.getElementById('date').textContent=today





function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const formatter = new Intl.NumberFormat('fa-u-nu-arabext', { minimumIntegerDigits: 2 });

    const formattedHours = formatter.format(hours);
    const formattedMinutes = formatter.format(minutes);

    const timeString = `${formattedHours}:${formattedMinutes}`;
    document.getElementById('clock').textContent = timeString;
}
// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();

