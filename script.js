// IOS positioned fixed
document.addEventListener("DOMContentLoaded", function () {
  // Check if the user agent is iOS
  const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (isiOS) {
    // Add a class to the container for iOS devices
    document.querySelector(".container").classList.add("ios-background-fixed");
  }
});
