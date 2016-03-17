(function(){
  var geoFallback = document.getElementById('geo-fallback');

  document.getElementById('geo').addEventListener('click', function() {
    if (navigator.geolocation) {
      // Hide als geolocation er in
      geoFallback.classList.add('hidden');

      navigator.geolocation.getCurrentPosition(
        function(data) {
          alert("location: " + data.coords.latitude + ", " + data.coords.longitude);
        },
        function() {
          // Als het alsnog niet werkt, laat dan de fallback weer zien.
          geoFallback.classList.remove('hidden');
        }
      )
    }
  });

  if (navigator.getGamepads) {
    window.addEventListener('gamepadconnected', function() {
      alert('Gamepad connected');
    });

    window.addEventListener('gamepaddisconnected', function() {
      alert('Gamepad disconnected');
    })
  } else {
    gamepadFallback();
  }

  function gamepadFallback() {
    // Use keyboard if gamepad is not supported

    alert('Gamepad not supported, please use your keyboard or update your browser');
    useKeyboard();
  }
}());
