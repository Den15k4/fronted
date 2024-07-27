let tg = window.Telegram.WebApp;
tg.expand();

let balance = 0;

document.getElementById('mineButton').addEventListener('click', () => {
    fetch('http://localhost:3000/api/mine')
        .then(response => response.json())
        .then(data => {
            balance += data.mined;
            document.getElementById('balance').textContent = `Balance: ${balance}`;
        });
});