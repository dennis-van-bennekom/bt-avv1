(function(){
  document.getElementById('geo').addEventListener('click', function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(data) {
          alert("location: " + data.coords.latitude + ", " + data.coords.longitude);
        },
        function() {
          geoFallback();
        }
      )
    } else {
      geoFallback();
    }
  });

  function geoFallback() {
    document.getElementById('geo-fallback').classList.remove('hidden');
  }

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
