// IOS positioned fixed
document.addEventListener("DOMContentLoaded", function () {
  // Check if the user agent is iOS
  const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (isiOS) {
    // Add a class to the container for iOS devices
    document.querySelector(".container").classList.add("ios-background-fixed");
  }
});

// Google Maps Visit Us page
function initMap() {
  const myLatLng = {
    lat: 59.91725540161133,
    lng: 10.727352142333984,
  };
  const map = new google.maps.Map(document.getElementById("gmp-map2"), {
    zoom: 10,
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: false,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "My location",
  });
}
