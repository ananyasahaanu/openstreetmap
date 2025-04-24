function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function showLocation() {
  const output = document.getElementById('locationResult');
  if (!navigator.geolocation) {
    output.innerText = 'Geolocation is not supported by your browser.';
    return;
  }

  output.innerText = 'Fetching location...';

  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      output.innerHTML = `📍 Your location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}<br>Nearby mappers feature coming soon!`;
    },
    () => {
      output.innerText = 'Unable to retrieve your location.';
    }
  );
}
