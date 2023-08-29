import React from "react";
// import './DocTable.css'
import { useNavigate } from "react-router-dom";

function Doctor({ doctor }) {
  const navigate = useNavigate();
  return (
    <div
      className="card p-2 cursor-pointer"
      onClick={() => navigate(`/book-appointment/${doctor._id}`)}
    >
      <h1 className="card-title">
        {doctor.firstName} {doctor.lastName}
      </h1>
      <hr />
      <table>
        <tr>
        <td>Phone No</td>
        <td> {doctor.phoneNumber}</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>{doctor.address}</td>
        
        </tr>
        <tr>
         
        <td>Fee </td>
       
        <td>{doctor.feePerCunsultation}</td>
        
        </tr>
   <tr>
       
        <td>Sechedule</td>     
        <td>{doctor.timings[0]} - {doctor.timings[1]}</td>
       
   </tr>   <tr>
       
       <td>Sechedule</td>     
       <td>{doctor.timings[0]} - {doctor.timings[1]}</td>
      
  </tr>
        
      </table>
   
    </div>
  );
}

export default Doctor;
