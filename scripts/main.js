let theme = localStorage.getItem("theme");

if (theme == null) {
    changeTheme("light");
} else {
    changeTheme(theme);
}

function changeTheme(theme) {
    if (theme === "light") {
        document.documentElement.style.setProperty("--backgroundColor", "rgb(255, 255, 255)");
        document.documentElement.style.setProperty("--secondaryText", "rgb(0, 0, 0)");
    }

    if (theme === "dark") {
        document.documentElement.style.setProperty("--backgroundColor", "rgb(33 33 33)");
        document.documentElement.style.setProperty("--secondaryText", "rgb(255, 255, 255)");
    }

    localStorage.setItem("theme", theme);
}
