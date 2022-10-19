import React, { useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Tabel from "./Components/Tabel"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'


function App() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState()

  async function getData(){

  try {
    setLoading(true)
    const res = await fetch("http://localhost:80/getData")
    const data = await res.json()
    setData(data)
  } catch(err) {
    console.log(err)
  }finally{
    setLoading(false)
  }
}


return (
  <>
  <div className="SSS">
  <Header/>
  <Body/>
  </div>
  <div className="divButton">
  <Button className ="connectButton"
        disabled={loading}
        onClick={getData}>Поиск</Button>
  </div>
  <div className = "backgroundTable">
 
  <Tabel data = {data}/>
  </div>
  </>
);

}


export default App;