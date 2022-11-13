import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {Alert} from "@mui/material";

const Coinval = ({values}) => {


    return(
        <div className='coin'>
            <h1>{values.names.toUpperCase()}</h1>
            <div>
                <h2>  USD:{(values.usd)}$  </h2>
                <h2> USD 24hr VOL : {values.usd_24h_vol }</h2>
                <h2>INR:{values.inr } ₹</h2>
                <h2> EUR:{values.eur} €</h2>
                <h2>EUR 24hr VOL:{values.eur_24h_vol}</h2></div>
            <Button color={"success"} startIcon={<AddCircleOutlineIcon/>} variant={"contained"} onClick={()=>{alert('added to favorites ✅')}}>Add To Favorites</Button>

        </div>

    )
}
export default Coinval;