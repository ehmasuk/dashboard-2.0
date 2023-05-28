

const fomoData = [
    {
        name: "María",
        img: "https://i.pravatar.cc/100?img=44",
        task: "Compró un curso con un descuento del 10%",
        time: "Ahora mismo",
        btn:'Comprar',
        btnFunction : ()=>document.querySelector('.mini-price').classList.add('show')
    },
    {
        name: "Liliana",
        img: "https://i.pravatar.cc/100?img=49",
        task: "Comenzó una prueba gratuita de 7 días.",
        time: "Ahora mismo",
        btn:'Empezar',
        btnFunction : ()=>document.querySelector('.mini-price').classList.add('show')
    },
    {
        name: "Dayana",
        img: "https://escuela-ray-bolivar-sosa.com/newtheme/dashbaord/img/woman.png",
        task: "Compró un curso con un descuento del 10%",
        time: "Hace 10 minutos",
        btn:'Comprar',
        btnFunction : ()=>document.querySelector('.mini-price').classList.add('show')
    },
    {
        name: "José",
        img: "https://i.pravatar.cc/100?img=3",
        task: "Comenzó una prueba gratuita de 7 días.",
        time: "Hace un minuto",
        btn:'Empezar',
        btnFunction : ()=>document.querySelector('.mini-price').classList.add('show')
    },
    {
        name: "Pedro",
        img: "https://escuela-ray-bolivar-sosa.com/newtheme/dashbaord/img/man.png",
        task: "Compró un curso con un descuento del 10%",
        time: "Hace 30 minutos",
        btn:'Empezar',
        btnFunction : ()=>document.querySelector('.mini-price').classList.add('show')
    },
    {
        name: "Diego",
        img: "https://i.pravatar.cc/100?img=52",
        task: "Comenzó una prueba gratuita de 7 días.",
        time: "Hace 4 horas",
        btn:'Empezar',
        btnFunction : ()=>document.querySelector('.mini-price').classList.add('show')
    },
    {
        name: "Martín",
        img: "https://escuela-ray-bolivar-sosa.com/newtheme/dashbaord/img/man.png",
        task: "Comenzó una prueba gratuita de 7 días.",
        time: "Hace dos horas",
        btn:'Empezar',
        btnFunction : ()=>document.querySelector('.mini-price').classList.add('show')
    },
    {
        name: "Paloma",
        img: "https://escuela-ray-bolivar-sosa.com/newtheme/dashbaord/img/woman.png",
        task: "Comenzó una prueba gratuita de 7 días.",
        time: "Hace una hora",
        btn:'Empezar',
        btnFunction : ()=>document.querySelector('.mini-price').classList.add('show')
    },
    {
        name: `${activeUsers(30,90)} usuarios activos`,
        img: "https://escuela-ray-bolivar-sosa.com/newtheme/dashbaord/img/book.gif",
        task: "",
        btn:'',
        time: "escuela-ray-bolivar-sosa.com",
        btnFunction : ()=>document.querySelector('.mini-price').classList.add('show')
    },
];



function newFomo() {
    const fomoNUmber = Math.floor(Math.random() * fomoData.length);
    const fomoImg = document.querySelector(".mini-formo-popup .profile img");
    const fomoAuthor = document.querySelector(".mini-formo-popup .info .author");
    const fomoTime = document.querySelector(".mini-formo-popup .info .time");
    const fomoDes = document.querySelector(".mini-formo-popup .info .des");
    const fomoTarget = document.querySelector(".mini-formo-popup .info .check-btn");
    fomoImg.src = fomoData[fomoNUmber].img;
    fomoAuthor.innerText = fomoData[fomoNUmber].name;
    fomoTime.innerText = fomoData[fomoNUmber].time;
    fomoDes.innerText = fomoData[fomoNUmber].task;
    fomoTarget.innerText = fomoData[fomoNUmber].btn;
    fomoTarget.addEventListener('click',fomoData[fomoNUmber].btnFunction)
}

function closeFomo() {
    document.querySelector(".dashboard-fomo").style.animationName = "fomoSlideOut";
    setTimeout(() => {
        document.querySelector(".dashboard-fomo").style.visibility = "hidden";
    }, 400);
}
function showFomo() {
    document.querySelector(".dashboard-fomo").style.visibility = "visible";
    document.querySelector(".dashboard-fomo").style.animationName = "fomoSlideIn";
}

function closeFomoFunc() {
    setTimeout(() => {
        closeFomo();
    }, 9000);
}
setInterval(() => {
    newFomo();
    showFomo();
    closeFomoFunc();
}, 15000);


function activeUsers(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}










