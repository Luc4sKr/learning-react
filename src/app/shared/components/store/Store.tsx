import { useContext } from "react";
import { ClickerContext } from "../../context/ClickerContext";

function Store() {
    const { clicks, setClicks, addClick } = useContext(ClickerContext);

    return (
        <>
            <span onClick={addClick}>Clique</span>
        </>
    )
}

export default Store;