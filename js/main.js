//======== Start Menu transition

const mainmenu = document.querySelector(".binair-hamburger-menu");
const navlinks = document.querySelector(".nav-links");
const allsections = document.querySelector(".all-sections");
const links = document.querySelectorAll(".nav-links li");

mainmenu.addEventListener("click", () => {
  navlinks.classList.toggle("open");

  if (mainmenu.classList.toggle("actif")) {
    mainmenu.setAttribute("src", "images/icons/close-menu.png");
    allsections.setAttribute("hidden", "");
    mainmenu.classList.toggle("rotate-in-center");
  } else {
    mainmenu.setAttribute("src", "images/icons/beenair-menu.png");
    allsections.removeAttribute("hidden");
    mainmenu.classList.toggle("rotate-in-center");
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.classList.toggle("actif")) {
      navlinks.classList.toggle("open");
      mainmenu.classList.toggle("actif");
      mainmenu.setAttribute("src", "images/icons/beenair-menu.png");
      allsections.removeAttribute("hidden");
      link.classList.toggle("actif");
    }
  });
});

const site = document.querySelector(".site");
const application = document.querySelector(".application");
const design = document.querySelector(".design");
const marketingdigital = document.querySelector(".marketing");

const sites = document.querySelector(".siteRow");
const applications = document.querySelector(".appRow");
const designs = document.querySelector(".designRow");
const marketings = document.querySelector(".markRow");
// =>
site.classList.add("active");
applications.classList.add("d-none");
designs.classList.add("d-none");
marketings.classList.add("d-none");
site.addEventListener("click", () => {
  sites.classList.remove("d-none");
  applications.classList.add("d-none");
  designs.classList.add("d-none");
  marketings.classList.add("d-none");

  site.classList.add("active");
  application.classList.remove("active");
  design.classList.remove("active");
  marketingdigital.classList.remove("active");
});

design.addEventListener("click", () => {
  designs.classList.remove("d-none");
  applications.classList.add("d-none");
  sites.classList.add("d-none");
  marketings.classList.add("d-none");

  design.classList.add("active");
  application.classList.remove("active");
  site.classList.remove("active");
  marketingdigital.classList.remove("active");
});

application.addEventListener("click", () => {
  applications.classList.remove("d-none");
  sites.classList.add("d-none");
  designs.classList.add("d-none");
  marketings.classList.add("d-none");

  application.classList.add("active");
  site.classList.remove("active");
  design.classList.remove("active");
  marketingdigital.classList.remove("active");
});

marketingdigital.addEventListener("click", () => {
  marketings.classList.remove("d-none");
  applications.classList.add("d-none");
  designs.classList.add("d-none");
  sites.classList.add("d-none");

  marketingdigital.classList.add("active");
  application.classList.remove("active");
  design.classList.remove("active");
  site.classList.remove("active");
});
// End Menu transition

//======= Start Pack ISOTOPE

// $('.pack-item').isotope({

//     itemSelector: '.item',
//     layoutMode: 'fitRows'
//   });

// $(".pack-item").isotope({
//   filter: ".site",
//   masonry: {
//     columnWidth: 130,
//   },
// });

// $(".pack-menu ul li").click(function () {
//   $(".pack-menu ul li").removeClass("active");
//   $(this).addClass("active");
//   var selector = $(this).attr("data-filter");
//   $(".pack-item").isotope({
//     filter: selector,
//   });
// });
