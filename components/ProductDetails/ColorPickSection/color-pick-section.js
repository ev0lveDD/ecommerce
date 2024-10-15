import ColorPickInput from "./ColorPickInput/color-pick-input";

export default function ColorPickSection({ colorPicked, setColorPicked }) {
    return(
        <div className="flex flex-col gap-4">
            <p className="text-lg font-medium">Color</p>
            <div className="flex gap-4">
                <ColorPickInput colorPickInputId="color-radio-1" colorName="WHITE" colorNameCSS="bg-white-200" colorPicked={colorPicked} setColorPicked={setColorPicked}/>
                <ColorPickInput colorPickInputId="color-radio-2" colorName="NAVY" colorNameCSS="bg-blue-950" colorPicked={colorPicked} setColorPicked={setColorPicked}/>
                <ColorPickInput colorPickInputId="color-radio-3" colorName="BLACK" colorNameCSS="bg-black" colorPicked={colorPicked} setColorPicked={setColorPicked}/>
                <ColorPickInput colorPickInputId="color-radio-4" colorName="GREEN" colorNameCSS="bg-green-800" colorPicked={colorPicked} setColorPicked={setColorPicked}/>
            </div>
        </div>
    );
}