// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
 d
    var imageList = [
        "img/Ben.png",
        "img/Kirk.png",
        "img/Carrie.png",
        "img/2Wendy.png",
        "img/Brian.png",
        "img/Jenny.png",
        "img/Eden.png",
        "img/Banana.png",
        "img/Monkey.png",
        "img/Zookeeper.png",
        "img/Sign.png"
    ];

    for(var i = 0; i < imageList.length; i++ )
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
