const navToggle = document.querySelector('.navbar_toggle');
    const navMenu = document.querySelector('.navbar_main');
    const overlay = document.getElementById("overlay");

    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("hidden");
      overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
      navMenu.classList.add("hidden");  
      navToggle.classList.remove("active");
      overlay.classList.remove("active");
});
