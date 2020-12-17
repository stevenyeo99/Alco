function changeLanguage(lang) {
    var value = lang;
    var eng = document.querySelectorAll('.txtEng');
    var id = document.querySelectorAll('.txtIndo');
    if (value === 'ENG') {
        eng.forEach((value, index) => {
            eng[index].style.display = "block";
        });
        
        id.forEach((value, index) => {
            id[index].style.display = "none";
        });
    } else {
        eng.forEach((value, index) => {
            eng[index].style.display = "none";
        });
        
        id.forEach((value, index) => {
            id[index].style.display = "block";
        });
    }

    sessionStorage.setItem("lang", value);
}

function firstLoad() {
    var sessionLang = sessionStorage.getItem("lang");
    
    var ddlLang = document.getElementById('ddlLang');

    if (sessionLang === 'undefined' || sessionLang === '' || sessionLang === null) {
        sessionLang = ddlLang.value;
        sessionStorage.setItem("lang", sessionLang);
    } 

    ddlLang.value = sessionLang;

    changeLanguage(sessionLang);
}

function toggleNavBarClass() {
    var element = document.getElementById('navContent');
    element.classList.toggle("active");
}

window.onload = function () {
    firstLoad();
}

window.onbeforeunload = function (e) {
    var ddlLang = document.getElementById('ddlLang');
    sessionStorage.setItem("lang", ddlLang.value);
    return null;
}