function init() {
  document.querySelector('header').onclick = function () {
    console.log('toggle');
    if (this.className === "smaller") {
      this.className = "";
    } else {
      this.className = "smaller";
    }
  }
  
  setTimeout(function () {
    document.querySelector('header').className = "smaller";
    console.log('make smaller', document.querySelector('header'));
  }, 3000)
}

window.onload = init();