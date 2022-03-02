//isim
let userName = prompt("Adınızı Giriniz Lütfen");
let yazi = document.querySelector("#myName")
yazi.innerHTML = userName


//Saat
function showTime() {

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    //digital oldu
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    let time = hour + ":" + minute + ":" + second;

    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();

