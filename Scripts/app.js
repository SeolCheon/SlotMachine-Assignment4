(function () {
    // Function scoped Variables
    let stage;
    let helloLabel;
    let clickMeButton;
    let assets;
    //this function triggers first and "Preloads" all the assets
    function Preload() {
        assets = new createjs.LoadQueue();
        assets.installPlugin(createjs.Sound);
        assets.on("complete", Start);
        assets.loadManifest([
            { id: "clickMeButton", src: "./Assets/images/ClickMeButton.png" }
        ]);
    }
    //this function triggers after everything has been preloaded
    //this function is used for config and initialization
    function Start() {
        console.log("App Started...");
        let canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 FPS or 16.667 ms
        createjs.Ticker.on("tick", Update);
        stage.enableMouseOver(20);
        Main();
    }
    // called every frame
    function Update() {
        //helloLabel.rotation -= 5;
        stage.update();
    }
    // app logic goes here
    function Main() {
        // label
        helloLabel = new UIObjects.Label("Holla, Mundo!", "60px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);
        // button
        clickMeButton = new createjs.Bitmap(assets.getResult("clickMeButoon"));
        clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
        clickMeButton.regY = clickMeButton.getBounds().height * 0.5;
        clickMeButton.x = 320;
        clickMeButton.y = 340;
        stage.addChild(clickMeButton);
        clickMeButton.on("click", () => {
            if (helloLabel.text == "Adios, mundo cruel!") {
                helloLabel.setText("Holla, Mundo!");
            }
            else {
                helloLabel.setText("Adios, mundo cruel!");
            }
        });
        clickMeButton.on("mouseover", () => {
            clickMeButton.alpha = 0.7; // 70% opaque - 30% transparent
        });
        clickMeButton.on("mouseout", () => {
            clickMeButton.alpha = 1.0; // 100% opaque - 0% transparent
        });
    }
    window.addEventListener("load", Preload);
})();
//# sourceMappingURL=app.js.map