const fomoData = [
    {
        name: "María",
        img: "https://i.pravatar.cc/100?img=44",
        task: "Brought a couse with a discount of 10%",
        time: "Just now",
        target: "https://escuela-ray-bolivar-sosa.com/",
        btn:'Check',
    },
    {
        name: "Liliana",
        img: "https://i.pravatar.cc/100?img=49",
        task: "Started a free trial",
        time: "Just now",
        target: "https://escuela-ray-bolivar-sosa.com/",
        btn:'Check',
    },
    {
        name: "Dayana",
        img: "https://i.pravatar.cc/100?img=42",
        task: "Started a free trial",
        time: "10 min ago",
        btn:'check',
        target: "https://escuela-ray-bolivar-sosa.com/",
    },
    {
        name: "José",
        img: "https://i.pravatar.cc/100?img=3",
        task: "Started a free trial",
        time: "a minute ago",
        btn:'Check',
        target: "https://escuela-ray-bolivar-sosa.com/",
    },
    {
        name: "Pedro",
        img: "https://i.pravatar.cc/100?img=13",
        task: "Started a free trial",
        time: "30 min ago",
        btn:'Check',
        target: "https://escuela-ray-bolivar-sosa.com/",
    },
    {
        name: "Diego",
        img: "https://i.pravatar.cc/100?img=52",
        task: "Started a free trial",
        time: "4 hour ago",
        btn:'Check',
        target: "https://escuela-ray-bolivar-sosa.com/",
    },
    {
        name: "Livia",
        img: "https://i.pravatar.cc/100?img=46",
        task: "Started a free trial",
        time: "2 hour ago",
        btn:'Check',
        target: "https://escuela-ray-bolivar-sosa.com/",
    },
    {
        name: "Paloma",
        img: "https://i.pravatar.cc/100?img=42",
        task: "Started a free trial",
        time: "an hour ago",
        btn:'Check',
        target: "https://escuela-ray-bolivar-sosa.com/",
    },
    {
        name: "31 active users",
        img: "img/book.gif",
        task: "",
        time: "escuela-ray-bolivar-sosa.com",
        target: "",
        btn:'Home'
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








