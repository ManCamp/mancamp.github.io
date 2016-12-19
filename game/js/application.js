// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});


    var imageList = [
        "img/Kirk.png",
        "img/Ben.png",
        "img/Carrie.png",
        "img/2Wendy.png",
    ];
    
    for(var i = 0; i < imageList.length; i++ )
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
