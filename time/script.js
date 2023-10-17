// 设置倒计时的目标日期和时间
var targetDate = new Date("2023-12-31T23:59:59");

function countdown() {
    var currentDate = new Date();

    // 计算剩余时间
    var remainingTime = targetDate - currentDate;

    // 计算剩余的天数、小时、分钟和秒数
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // 更新倒计时显示
    document.getElementById("days").textContent = days < 10 ? "0" + days : days;
    document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
}

// 每秒更新倒计时
setInterval(countdown, 1000);