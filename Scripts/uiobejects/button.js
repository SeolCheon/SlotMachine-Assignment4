var UIObjects;
(function (UIObjects) {
    class Button extends createjs.Bitmap {
        //CONSTRUCTOR(S)
        constructor(bitmap_asset, x = 0, y = 0, isCentered = false) {
            super(Config.Globals.AssetManifest.getResult(bitmap_asset));
            this.isCentered = isCentered;
            this.x = x;
            this.y = y;
            //mouse events
            this.on("mouseover", this.m_mouseOver);
            this.on("mouseout", this.m_mouseOut);
        }
        //Public properties
        get isCentered() {
            return this.m_isCentered;
        }
        set isCentered(value) {
            if (value) {
                this.m_reCalculateSize();
            }
            else {
                this.regX = 0;
                this.regY = 0;
            }
            this.m_isCentered = value;
        }
        //PRIVATE METHOD(S)
        m_reCalculateSize() {
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
        }
        m_mouseOver() {
            this.alpha = 0.7; // 70% opaque - 30% transparent
        }
        m_mouseOut() {
            this.alpha = 1.0; // 100% opaque - 0% transparent
        }
    }
    UIObjects.Button = Button;
})(UIObjects || (UIObjects = {}));
//# sourceMappingURL=button.js.map