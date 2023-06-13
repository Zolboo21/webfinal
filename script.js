$(window).scroll(function() {
  var bottomNavbar = $(".bottom-navbar");
  var scrollPosition = $(window).scrollTop();

  if (scrollPosition > 100) {
    bottomNavbar.addClass("transparent");
  } else {
    bottomNavbar.removeClass("transparent");
  }
});
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
      items:1,
      loop:true,
      nav:true,
      dots:true,
      autoplay:true,
      autoplaySpeed:1000,
      smartSpeed:1500,
      autoplayHoverPause:true
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var listItems = document.querySelectorAll('.earthquake-info li');

  // Function to fetch earthquake data from the API
  function fetchEarthquakeData() {
    const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=5';

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        // Process the earthquake data
        const earthquakes = data.features;
        updateEarthquakeList(earthquakes);
      })
      .catch(error => {
        console.error('Error fetching earthquake data:', error);
      });
  }

  // Function to update the earthquake list with new data
  function updateEarthquakeList(earthquakes) {
    var ul = document.querySelector('.earthquake-info ul');
    ul.innerHTML = ''; // Clear the existing list

    earthquakes.forEach(earthquake => {
      const location = earthquake.properties.place;
      const magnitude = earthquake.properties.mag;
      const date = new Date(earthquake.properties.time);

      var li = document.createElement('li');
      li.classList.add('selected');
      li.classList.add('focused');
      li.setAttribute('onclick', `showNewsText(this, '${location}', 'Magnitude: ${magnitude}', 'Date: ${date.toDateString()}')`);

      var html = `
        <span class="location">${location}</span><br>
        Magnitude: <span class="magnitude">${magnitude}</span><br>
        Date: <span class="date">${date.toDateString()}</span>
      `;

      li.innerHTML = html;
      ul.appendChild(li);
    });
  }

  // Function to show the earthquake information
  function showNewsText(listItem, location, magnitude, date) {

    var selectedItems = document.querySelectorAll('.earthquake-info li.selected');

    for (var i = 0; i < selectedItems.length; i++) {
      selectedItems[i].classList.remove('selected');
      selectedItems[i].classList.remove('focused');
    }

    listItem.classList.add('selected');
    listItem.classList.add('focused');
    newsText.innerHTML = `<h3>Location: ${location}</h3>`;
    pictureDiv.style.display = 'none';
    newsText.style.display = 'block';
  }

  // Fetch and update earthquake data on page load
  fetchEarthquakeData();

  // Refresh earthquake data every 5 seconds
  setInterval(fetchEarthquakeData, 5000);

  // Add click event listeners to the list items
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function() {
      var location = this.querySelector('.location').textContent;
      var magnitude = this.querySelector('.magnitude').textContent;
      var date = this.querySelector('.date').textContent;

      showNewsText(this, location, magnitude, date);
    });
  }
  
});

document.getElementById('1st-slide-button').addEventListener('click', function() {
  window.location.href = 'readmore.html';
});

document.getElementById('2nd-slide-button').addEventListener('click', function() {
  window.location.href = 'comment.html';
});

document.getElementById('3rd-slide-button').addEventListener('click', function() {
  window.location.href = 'likeshare.html';
});


    const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=5';

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Process the retrieved earthquake data
    const earthquakes = data.features;
    
    // Create a Leaflet map
    const map = L.map('map').setView([0, 0], 2); // Set the initial view to center of the world (latitude: 0, longitude: 0)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map); // Add a tile layer to the map
    
    // Add markers for each earthquake
    earthquakes.forEach(earthquake => {
      const coordinates = earthquake.geometry.coordinates;
      const magnitude = earthquake.properties.mag;
      const title = earthquake.properties.place;
      const marker = L.marker([coordinates[1], coordinates[0]]).addTo(map);
      marker.bindPopup(`<strong>${title}</strong><br>Magnitude: ${magnitude}`);
    });
  })
  .catch(error => {
    console.error('Error fetching earthquake data:', error);
  });

  function showModal() {
    document.getElementById("modalContainer").style.display = "block";
  }