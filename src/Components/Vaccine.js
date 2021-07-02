import React, { useState } from "react";
import Axios from "axios";

import {
  Button,
} from "reactstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

const Vaccine = () =>{
  const [vaccine, setVaccine] = useState(null)
  const [pin, setPin] = useState('')
  const [date, setDate] = useState('')
  const fetchDetails = async ()=> {
    try{  
      const {data} = await Axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`)
      setVaccine(data.sessions)
      console.log(vaccine)
    }catch(error){
      console.log("Not able to locate user")
    }
  }

return (
  <div className="container">
  <div className="jumbotron">
   <div className="container" style={{textAlign:"center"}}>
    <h1 className="display-4" style={{color:"#24292e"}}> Find your nearest Vaccination Center! </h1>
    <p className="lead" style={{color:"#24292e"}}>Check your nearest vaccination center and slots availability.
    </p>          
  </div>
  </div>
  <div style={{textAlign:"center"}}>
    <div class="col-auto">
      <input
        type="text"
        value={pin}
        onChange={e => setPin(e.target.value)}
          placeholder="Pincode"
            />
      </div>
      <div>
        <br></br>
      </div>
      <div class="col-auto">
      <input
        type="text"
        value={date}
        onChange={e => setDate(e.target.value)}
          placeholder="Date"
      />
      </div>
    <Button onClick={fetchDetails} color="primary mt-3">Find Vaccine</Button>
    {
      (vaccine) ? (
          (vaccine.length)?(
            <table className="table table-hover">
            <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Vaccine</th>
              <th scope="col">Capacity Available</th>
              <th scope="col">Min Age limit</th>
              <th scope="col">Fee</th>
            </tr>
          </thead>
          <tbody>
            {vaccine.map((v) => (
              <tr key={v.region}>
                <td>{v.name}</td>
                <td>{v.address}</td>
                <td>{v.vaccine}</td>
                <td>{v.available_capacity}</td>
                <td>{v.min_age_limit}</td>
                <td>{v.fee}</td>
             </tr>
            ))}
          </tbody>
            </table>
          ):(
            <h4> No Vaccines available as of now </h4>
          )
      ) : (
        null
      )
    }
  </div>
  </div>
);
}

export default Vaccine;