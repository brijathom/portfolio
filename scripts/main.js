let theme = localStorage.getItem("theme");

if (theme == null) {
    changeTheme("light");
} else {
    changeTheme(theme);
}

function changeTheme(theme) {
    if (theme === "light") {
        document.documentElement.style.setProperty("--background", "rgb(250, 250, 250)");
        document.documentElement.style.setProperty("--secondaryText", "rgb(0, 0, 0)");
    }

    if (theme === "dark") {
        document.documentElement.style.setProperty("--background", "rgb(33 33 33)");
        document.documentElement.style.setProperty("--secondaryText", "rgb(255, 255, 255)");
    }

    localStorage.setItem("theme", theme);
}

window.onresize = function () {
    document.body.height = window.innerHeight;
};
