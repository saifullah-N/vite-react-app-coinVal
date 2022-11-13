import './App.css';
import react,{useState,useEffect}  from 'react';
import reactdom from 'react-dom';
// import {CoinGeko} from 'coingecko-api'
import CoinGecko  from 'coingecko-api';
import * as React from 'react';
import Coins from "./Coins";
import AccountMenu from "./AccountMenu";
import PrimarySearchAppBar from "./PrimarySearchAppBar";



function App() {



  const [coins,setCoins] = useState([])
  const [coinValue,setCoinValue] = useState([])

  useEffect(()=> {
    async function getData() {
      // const CoinGecko = require('coingecko-api')
         let  CoinGeckoClient = new CoinGecko(),
          data = await CoinGeckoClient.simple;
      let val = data.price({
        ids: ['bitcoin', 'ethereum', 'tether', 'solana', 'dai'],
        vs_currencies: ['usd', 'inr', 'eur', 'jpy', 'cad'],
        include_24hr_vol: true,
        include_last_updated_at: true
      })
          .then(value => value.data)
          .then(d => {
            console.log(d)
            setCoins(Object.keys(d))
            setCoinValue(Object.values(Object.values(d)))
            return (Object.entries(d),
                Object.values(Object.values(d)))
          })

    }
    getData()
  },[] )



  return (
      <>
         <PrimarySearchAppBar></PrimarySearchAppBar>

        <Coins  coins={coins} coinValue={coinValue}></Coins>
          </>

  )
}
export default App;
