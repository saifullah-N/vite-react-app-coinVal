import react, {useState} from "react";
import Coinval from "./Coinval";
const Coins = ({coins,coinValue}) => {
    console.log(coins)
    function myfunc(nam) {
        for (let i=0;i<coinValue.length;i++) {
            let j = coinValue[i]
            // console.log(coinValue[i])
            j.names = nam[i]
        }

    }


    myfunc(coins)
    const [finalData,setfinaData]=useState([])

    return (
        <div>

            {coinValue.map((values)=>(<Coinval values={values} />))}
        </div>
    )

}
export default Coins;