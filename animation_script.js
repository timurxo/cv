// // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml16');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml16 .letter',
//     translateY: [-100,0],
//     easing: "easeOutExpo",
//     duration: 3000,
//     delay: (el, i) => 30 * i
//   }).add({
//     targets: '.ml16',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

// AOS.init();
AOS.init({
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 2000, // values from 0 to 3000, with step 50ms
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
});

function toggleNavbar(collapseID) {
  document.getElementById(collapseID).classList.toggle("hidden");
  document.getElementById(collapseID).classList.toggle("block");
}


 
 