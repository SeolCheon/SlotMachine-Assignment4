module UIObjects
{
    export class Button extends createjs.Bitmap
    {
        //Private fields(class members)
        private m_isCentered: boolean;

        //Public properties
        get isCentered():boolean
        {
            return this.m_isCentered;
        }
        set isCentered(value:boolean)
        {
            if(value)
            {
                this.m_reCalculateSize();
            }
            else
            {
                this.regX = 0;
                this.regY = 0;
            }
            this.m_isCentered = value;
        }

        //CONSTRUCTOR(S)
        constructor(bitmap_asset:string, x:number = 0, y:number=0, isCentered:boolean=false)
        {
            super(Config.Globals.AssetManifest.getResult(bitmap_asset))

            this.isCentered = isCentered;

            this.x = x;
            this.y = y;
            //mouse events
            this.on("mouseover", this.m_mouseOver);
    
            this.on("mouseout", this.m_mouseOut);

        }

        //PRIVATE METHOD(S)
        m_reCalculateSize() {
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
        }

        private m_mouseOver():void
        {
            this.alpha = 0.7; // 70% opaque - 30% transparent
        }
        private m_mouseOut():void
        {
            this.alpha = 1.0; // 100% opaque - 0% transparent
        }
        //PUBLIC METHOD(S)
       
    }
}