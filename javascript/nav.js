let isOpen = false;
let resizedOver600 = false;
window.addEventListener('load', function () {
    if (document.documentElement.scrollWidth >= 600){
        resizedOver600 = true;
    }
})
function setClassesToHidden(){
    document.querySelectorAll('.nav_options_shown').forEach( elem => {
        elem.className = "nav_options_hidden";
    });
    if (document.getElementsByClassName('topnav_shown').length > 0) {
        document.querySelector('.topnav_shown').className = "topnav";
    }
    if (document.getElementsByClassName('persistent_shown').length > 0) {
        document.querySelector('.persistent_shown').className = "persistent";
    }
}
function myFunction() {
    if (isOpen){
        setClassesToHidden();
        isOpen = false;
    } else {
        document.querySelectorAll('.nav_options_hidden').forEach( elem => {
            elem.className = "nav_options_shown";
        })
        document.querySelector('.topnav').className = "topnav_shown";
        document.querySelector('.persistent').className = "persistent_shown";
        isOpen = true;
    }
    console.log("placeholder");
}
window.addEventListener("resize", function(event) {
    if (document.body.clientWidth >= 600 && resizedOver600 === false){
        setClassesToHidden();
        resizedOver600 = true;
    }
    else if (document.body.clientWidth < 600) {
        resizedOver600 = false;
    }
})