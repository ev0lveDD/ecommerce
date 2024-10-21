export default function BestSellersMenuButton({ buttonName, buttonText, buttonSelected, setButtonSelected }) {
    const menuButtonActive = "text-[11px] text-black font-bold cursor-pointer";
    const menuButtonNotActive = "text-[11px] text-gray-400 hover:text-gray-600 cursor-pointer font-bold";
    
    function selectMenuButton() {
        if(buttonSelected===buttonName){
            setButtonSelected(buttonName);
        } else if (buttonSelected!==buttonName) {
            setButtonSelected(buttonName)
        } else {
            null;
        }
    }
    return(
        <li><button className={buttonSelected === buttonName ? menuButtonActive : menuButtonNotActive} onClick={selectMenuButton}>
                {buttonText}
            </button>
        </li>
    );
}