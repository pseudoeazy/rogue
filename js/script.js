const view = {
  checkBox: document.getElementById("nav-toggle"),
  headerRight: document.getElementById("header-right"),
  form: document.getElementById("contact-form"),
  popup: document.getElementById("popup"),
  popupClose: document.getElementById("popup-close"),
  books: document.querySelectorAll(".book"),
  loader: document.getElementById("loader"),

  watch() {
    this.checkBox.addEventListener("click", function () {
      view.headerRight.classList.toggle("slide-in");
    });

    this.form.addEventListener("submit", function (e) {
      e.preventDefault();
      view.loader.classList.add("loader");
      setTimeout(() => {
        view.loader.classList.remove("loader");
        view.form.parentElement.innerHTML = `<div class="response">
        <span> Thank you for your email <br />We will get in touch</span>
        </div>`;
      }, 3000);
    });

    //disable popup

    // [...this.books].forEach((book) => {
    //   book.addEventListener("click", () => {
    //     view.popup.style.display = "block";
    //   });
    // });

    this.popupClose.addEventListener("click", () => {
      // view.popup.style.display = "none";
    });
  },
};

addEventListener("DOMContentLoaded", function () {
  view.watch();
});
