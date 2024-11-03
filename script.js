function startFixedCountdown() {
    const targetDate = new Date("2023-03-05T00:00:00");

    function updateCountdown() {
        const now = new Date();
        const difference = now - targetDate;

        if (difference < 0) {
            alert("A data fixa é no futuro. Corrija a data fixa no código.");
            clearInterval(intervalId);
            return;
        }

        const seconds = Math.floor((difference / 1000) % 60);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30);
        const months = Math.floor((difference / (1000 * 60 * 60 * 24 * 30)) % 12);
        const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));

        document.getElementById("years").textContent = years;
        document.getElementById("months").textContent = months;
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    const intervalId = setInterval(updateCountdown, 1000);
    updateCountdown();
}

startFixedCountdown();
