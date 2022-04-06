document.addEventListener("DOMContentLoaded", () => {
    const darkMode = document.getElementById("dark-mode");
    darkMode.addEventListener("click", (e) => {
        console.log(darkMode.checked);
        if (darkMode.checked) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    });
});
