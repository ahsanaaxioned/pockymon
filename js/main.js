// global variable declaration start here
const navLink = document.querySelectorAll(".nav-link"),
    locations = location.pathname;
// global variable declaration end here

//  active class func start here
navLink.forEach(element => {
    const elementAttr = element.getAttribute("href");
    if (locations === elementAttr) {
        const active = document.querySelector(".active");
        if (active) {
            active.classList.remove("active")
        }
        element.classList.add("active");
    }
});
//  active class func end here

const pageBtn = document.querySelectorAll(".btn-link");
const locationss =location.pathname;
// console.log(locationss);
pageBtn.forEach(pageElement => {
    const pageAttr = pageElement.getAttribute("href");
    // console.log(pageAttr);
    if (locationss === pageAttr) {
        const pageActive = document.querySelector(".page-active");
        if ( pageActive) {
            pageActive.classList.remove("page-active")
        }
        pageElement.classList.add("page-active");
    }
});
