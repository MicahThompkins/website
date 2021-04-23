let isOpen = false;
let resizedOver600 = false;
window.addEventListener('load', function () {
    if (document.documentElement.scrollWidth >= 600){
        resizedOver600 = true;
    }
})
// onLoad();
function setClassesToHidden(){
    document.querySelectorAll('.nav_options_shown').forEach( elem => {
        elem.className = "nav_options_hidden";
        // elem.setAttribute("display", "none");
    });
    if (document.getElementsByClassName('topnav_shown').length > 0) {
        document.querySelector('.topnav_shown').className = "topnav";
    }

    document.querySelector('.persistent_shown').className = "persistent";
}
function myFunction() {
    // let x = document.getElementById("myTopnav");
    // if (x.className === "topnav") {
    //     x.className += " responsive";
    // } else {
    //     x.className = "topnav";
    // }
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
    // console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
    if (document.body.clientWidth >= 600 && resizedOver600 === false){
        setClassesToHidden();
        resizedOver600 = true;
    }
    else if (document.body.clientWidth < 600) {
        resizedOver600 = false;
    }
})