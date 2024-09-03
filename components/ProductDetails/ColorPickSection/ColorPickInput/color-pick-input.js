export default function ColorPickInput({colorName, colorPicked, setColorPicked, colorNameCSS}) {
    
    const colorPickActive = "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-600 ring ring-offset-1";
    const colorPickNotActive = "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-0 hover:ring hover:ring-gray-400 hover:ring-offset-1"

    function selectColorButton() {
        if(colorPicked===colorName){
            setColorPicked(null);
        } else if (colorPicked!==colorName) {
            setColorPicked(colorName)
        } else {
            null;
        }
    }

    return(
        <div className="flex items-center relative">
            <label className={colorPicked===colorName ? colorPickActive : colorPickNotActive}>
                <input id="color-radio-2" type="radio" value="" name="color-radio" className="sr-only" onClick={selectColorButton}></input>
                <span className={`h-8 w-8 ${colorNameCSS} rounded-full border border-black border-opacity-10`}></span>
            </label>
        </div>
    );
}