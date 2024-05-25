const cookieExpDays = 14;

// Cookies names
const cookieFontSizeName = "fontSizePercents";
const cookieThemeStateName = "themeState";

function randomBanner() {
    var rlogosrc = "../assets/icons/r-logo/logo" + (Math.floor(Math.random() * 30) + 1) + ".gif";
    document.getElementById("rlogo").src = rlogosrc;

}

function toTheMoon() {
    window.scrollTo(0, 0);
}

function night() {
    const allElements = document.querySelectorAll("*");

    allElements.forEach(element => {
        if (element.classList.length > 0) {
            element.classList.add("night");
        }
    });

    setCookie(cookieThemeStateName, 'n', cookieExpDays);
}

function day() {
    const allElements = document.querySelectorAll("*");

    allElements.forEach(element => {
        if(element.classList.length > 0) {
            element.classList.remove("night");
        }
    });

    setCookie(cookieThemeStateName, 'd', cookieExpDays);
}

function setFontSize(fontsizev) {
    document.querySelector("*").style.fontSize = fontsizev;
}

function setFontSizeCookie(fontsizev) {
    document.querySelector("*").style.fontSize = fontsizev;
    setCookie(cookieFontSizeName, fontsizev, cookieExpDays);
}

function setCookie(name, value, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var re = new RegExp(cname + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}

function ReadingFromCookie() {
    let fontsizecookie = getCookie(cookieFontSizeName);
    let themestatement = getCookie(cookieThemeStateName);
    //console.log(fontsizecookie);

    if (fontsizecookie != "") {
        setFontSize(fontsizecookie);
    } else {
        setCookie(cookieFontSizeName, "100%", cookieExpDays);
        // there is no
    }

    if (themestatement != "") {
        if(themestatement === 'd') {
            day();
        }
        else if(themestatement === 'n') {
            night();
        }
    } else {
        day();
    }

}
