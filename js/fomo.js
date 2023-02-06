





const fomoData = [
    {
        name: "María",
        img: "https://i.pravatar.cc/100?img=44",
        task: "Compró un curso con un descuento del 10%",
        time: "Ahora mismo",
        target: "https://escuela-ray-bolivar-sosa.com/",
        btn:'Revisa',
    },
    {
        name: "Liliana",
        img: "https://i.pravatar.cc/100?img=49",
        task: "Comenzó una prueba gratuita de 7 días.",
        time: "Ahora mismo",
        target: "https://escuela-ray-bolivar-sosa.com/",
        btn:'Revisa',
    },
    {
        name: "Dayana",
        img: "https://i.pravatar.cc/100?img=42",
        task: "Compró un curso con un descuento del 10%",
        time: "Hace 10 minutos",
        btn:'Revisa',
        target: "https://escuela-ray-bolivar-sosa.com/",
    },
    {
        name: "José",
        img: "https://i.pravatar.cc/100?img=3",
        task: "Comenzó una prueba gratuita de 7 días.",
        time: "Hace un minuto",
        btn:'Revisa',
        target: "https://escuela-ray-bolivar-sosa.com/",
    },
    {
        name: "Pedro",
        img: "https://i.pravatar.cc/100?img=13",
        task: "Compró un curso con un descuento del 10%",
        time: "Hace 30 minutos",
        btn:'Revisa',
        target: "https://escuela-ray-bolivar-sosa.com/",
    },
    {
        name: "Diego",
        img: "https://i.pravatar.cc/100?img=52",
        task: "Comenzó una prueba gratuita de 7 días.",
        time: "Hace 4 horas",
        btn:'Revisa',
        target: "https://escuela-ray-bolivar-sosa.com/",
    },
    {
        name: "Livia",
        img: "https://i.pravatar.cc/100?img=46",
        task: "Comenzó una prueba gratuita de 7 días.",
        time: "Hace dos horas",
        btn:'Revisa',
        target: "https://escuela-ray-bolivar-sosa.com/",
    },
    {
        name: "Paloma",
        img: "https://i.pravatar.cc/100?img=42",
        task: "Comenzó una prueba gratuita de 7 días.",
        time: "Hace una hora",
        btn:'Revisa',
        target: "https://escuela-ray-bolivar-sosa.com/",
    },
    {
        name: `${activeUsers(30,90)} usuarios activos`,
        img: "img/book.gif",
        task: "",
        time: "escuela-ray-bolivar-sosa.com",
        target: "",
        btn:''
    },
];



function newFomo() {
    const fomoNUmber = Math.floor(Math.random() * fomoData.length);
    const fomoImg = document.querySelector(".mini-formo-popup .profile img");
    const fomoAuthor = document.querySelector(".mini-formo-popup .info .author");
    const fomoTime = document.querySelector(".mini-formo-popup .info .time");
    const fomoDes = document.querySelector(".mini-formo-popup .info .des");
    const fomoTarget = document.querySelector(".mini-formo-popup .info .check-btn a");
    fomoImg.src = fomoData[fomoNUmber].img;
    fomoAuthor.innerText = fomoData[fomoNUmber].name;
    fomoTime.innerText = fomoData[fomoNUmber].time;
    fomoDes.innerText = fomoData[fomoNUmber].task;
    fomoTarget.innerText = fomoData[fomoNUmber].btn;
    fomoTarget.href = fomoData[fomoNUmber].target;
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








