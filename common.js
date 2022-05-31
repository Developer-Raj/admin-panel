/* Declaration */
const $ = (elem) => document.querySelector(elem);
const $$ = (elem) => document.querySelectorAll(elem);

/* Functions */

// function to execute fullscreen mode
function execDesktopViewFullscreen(e) {
  //   Getting Icon Element for toggle icon
  let icon = $("#fullscreen-button i");
  //   Getting Toggled State
  let isToggled =
    e.currentTarget.dataset.toggle === "false"
      ? false
      : e.currentTarget.dataset.toggle === "true" && true;
  // Updating Toggle State
  if (!isToggled) {
    e.currentTarget.dataset.toggle = "true";
    document.documentElement.requestFullscreen();
    icon.classList.remove("fa-expand");
    icon.classList.add("fa-compress");
  } else {
    e.currentTarget.dataset.toggle = "false";
    document.exitFullscreen();
    icon.classList.remove("fa-compress");
    icon.classList.add("fa-expand");
  }
}
function execMobileViewFullscreen() {
  // Getting MobileMenuFullscreen Button
  let button = $("#MMFS-btn");
  // Getting Desktop View Fullscreen button
  let dmfsButton = $("#fullscreen-button");

  if (button.dataset.toggle === "false") {
    button.dataset.toggle = "true";
    button.innerText = "Exit Fullscreen";
    button.classList.remove("primary-outline");
    button.classList.add("primary-solid");
    document.documentElement.requestFullscreen();
  } else {
    button.dataset.toggle = "false";
    button.innerText = "Enter Fullscreen";
    button.classList.remove("primary-solid");
    button.classList.add("primary-outline");
    document.exitFullscreen();
  }
}
// function to toggle mobile ham menu
function toggleHamMenu() {
  let menuContainer = $("#menu-container");

  if (menuContainer.dataset.toggle === "false") {
    menuContainer.dataset.toggle = true;
    menuContainer.classList.add("active");
  } else {
    menuContainer.dataset.toggle = false;
    menuContainer.classList.remove("active");
  }
}

/* Event Listener */
// Toggling Fullscreen when desktop view header fullscreen button is clicked
$("#fullscreen-button").onclick = (e) => {
  execDesktopViewFullscreen(e);
};
// Toggle Fullscreenw when mobile view sidebar fullscreen button is clicked
$("#MMFS-btn").onclick = (e) => {
  execMobileViewFullscreen();
};
// Toggling menu when Menu Btn is clicked
$("#menu-btn").onclick = () => {
  toggleHamMenu();
};
// Toggling menu again when menu content is clicked
$("#CloseMenu-btn").onclick = () => {
  toggleHamMenu();
};
// Toggling menu when overlay is clicked
$("#menuOverlay").onclick = () => {
  toggleHamMenu();
};
