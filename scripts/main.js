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
        document.documentElement.style.setProperty("--secondaryBackground", "rgb(211, 211, 211)");
    }

    if (theme === "dark") {
        document.documentElement.style.setProperty("--background", "rgb(33 33 33)");
        document.documentElement.style.setProperty("--secondaryText", "rgb(255, 255, 255)");
        document.documentElement.style.setProperty("--secondaryBackground", "rgb(21 17 17)");
    }

    localStorage.setItem("theme", theme);
}
