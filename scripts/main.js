let theme = localStorage.getItem("theme");

if (theme == null) {
    changeTheme("light");
} else {
    changeTheme(theme);
}

function changeTheme(theme) {
    if (theme === "light") {
        document.documentElement.style.setProperty("--backgroundColor", "rgb(255, 255, 255)");
        document.documentElement.style.setProperty("--mainText", "rgb(37, 81, 211)");
        document.documentElement.style.setProperty("--secondaryText", "rgb(0, 0, 0)");
        let iTags = document.getElementsByTagName("i");
        for (let i = 0; i < iTags.length; i++) {
            iTags[i].style.filter = "brightness(160%)";
        }
    }

    if (theme === "dark") {
        document.documentElement.style.setProperty("--backgroundColor", "rgb(53, 54, 58)");
        document.documentElement.style.setProperty("--mainText", "rgb(79, 212, 255)");
        document.documentElement.style.setProperty("--secondaryText", "rgb(255, 255, 255)");
        let iTags = document.getElementsByTagName("i");

        for (let i = 0; i < iTags.length; i++) {
            iTags[i].style.filter = "brightness(85%)";
        }
    }
    localStorage.setItem("theme", theme);
}
