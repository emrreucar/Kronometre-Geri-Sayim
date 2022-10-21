let istenilenSure = 0.5; //*Dk Cinsinden
let toplamSaniye = istenilenSure * 60; //*Toplam Saniye
let sayacElement = document.querySelector('#sayac');

let sayacBaslat = setInterval(() =>{

    if(toplamSaniye <= 0){
        clearInterval(sayacBaslat);
        sayacElement.innerHTML = "Sayacım Sonlandı";
    }
    else{
        toplamSaniye--;

        const gun = Math.floor(toplamSaniye / 3600 / 24);
        const saat = Math.floor(toplamSaniye / 3600) % 24;
        const dakika = Math.floor(toplamSaniye / 60) % 60;
        const saniye = Math.floor(toplamSaniye % 60);

        sayacElement.innerHTML = `Süre: ${gun} gun / ${saat} sa / ${dakika} dk / ${saniye} sn `;

    }


}, 1000)

//! 1gün -> 24 saat -> 24*60 dakika -> 24*60*60 saniye
//! 1 saat -> 60 dakika -> 60*60 saniye