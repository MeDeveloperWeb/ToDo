function plus () {
    console.log("Clicked Add");

}

function search () {
    console.log("clicked Search");
}

function sun () {
    document.querySelector(":root").classList.toggle("dark");
}

function sidebar (e) {
    // flip sidebar svg
    e.target.closest('svg').classList.toggle("flip");

    const dialog = document.getElementById("sidebar-dialog");
    if (dialog) {
        if (dialog.open) dialog.close();
        else dialog.show();
    }
}

export default {
    plus,
    search,
    sun,
    sidebar
}