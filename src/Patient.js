import React,{Component}from "react";
import { variables } from "./Variable";

export class Patient extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Customers: []
                };
      }

      componentDidMount() {
        this.fetchPatient();
      }
      fetchPatient() {
        fetch(variables.API_URL + "Patient" ,{
          method: "GET",
          headers:{
            "Content-Type":"application/json",
            'Authorization':'Bearer '+localStorage.getItem('token')
          }
          })
          .then((response) => response.json())
          .then((data) => {
            this.setState({ Patient: data });
          })
          .catch((error) => {
            console.error("Error fetching Patient:", error);
          });
      }
    render(){
        return(
            <div>
                <h1>Customer</h1>
                <table  className="table">
            <thead>
            <tr>
            <th>CustomerId</th>
            <th>Cake Id</th>
            <th>Customer Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {Patient.map((Patient) => (
            <tr key={Patient.patient_id}>
            <td>{Patient.patient_id}</td>
            <td>{Patient.cakeId}</td>
            <td>{Patient.customerName}</td>
            <td>{Patient.phonenumber}</td>
            <td>{Patient.address}</td>
            
            </tr>
            ))}
            </tbody>
            </table></div>
        )
    }
}