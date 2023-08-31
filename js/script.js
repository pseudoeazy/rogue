const view = {
  checkBox: document.getElementById("nav-toggle"),
  headerRight: document.getElementById("header-right"),
  form: document.getElementById("contact-form"),
  watch() {
    this.checkBox.addEventListener("click", function () {
      view.headerRight.classList.toggle("slide-in");
    });

    this.form.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  },
};

addEventListener("DOMContentLoaded", function () {
  view.watch();
});
