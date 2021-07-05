let cursorMeter = document.getElementById('cursorMeter');

// document.addEventListener('mousemove', function(e) {
//   cursorMeter.style.top = e.clientY + "px";
//   cursorMeter.style.left = e.clientX + "px";
// });

let percent = document.getElementById('percent');
let pregressBar = document.getElementById('pregressBar');

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
  let progress = (window.pageYOffset / totalHeight) * 100;
  console.log(progress)
  pregressBar.style.width = progress + "%";
  percent.innerHTML = "Page Scrolled " + Math.round(progress) + "%"
};