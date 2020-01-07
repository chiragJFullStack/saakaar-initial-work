import React from "react";
import '../assets/css/eventform.css'

class Eventregister extends React.Component{

    state = {
        fname: "",
        lname: "",
        phnumber: "",
        city: "",
        age: "",
        kids: "",
    }

    validate = () =>{
        if(this.state.phnumber.length != 10){
            alert("Phone Number should be 10 digits")
        }

        if(!this.state.fname){
            alert("First Name Cannot be blank")
        }

        if(!this.state.lname){
            alert("Last Name Cannot be blank")
        }

        if(!this.state.city){
            alert("City Cannot be blank")
        }

        if(!this.state.age){
            alert("Age Cannot be blank")
        }

        if(!this.state.kids){
            alert("Kids Cannot be blank")
        }
    }

    handleChange = (event, fieldName) => {
        console.log(fieldName)
        this.setState({[fieldName]: event.target.value})
    }
    handleSubmit = () => {
        const isValid = this.validate()
        if(isValid) {
            alert("Thankyou for registering for the event!!")
        }
    }

    render() {
        return(
            <div className="eventForm">
                <div className="Desktop">Hello Desktop
                </div>
                <div className="Mobile">
                    <form onSubmit={this.handleSubmit}>
                        <table>
                            <tr>
                                <td>
                                    <input type="text" value={this.state.fname} onChange={(event) => this.handleChange(event, "fname")} placeholder={"First Name"}/>
                                </td>
                                <td>
                                    <input type="text" value={this.state.lname} onChange={(event) => this.handleChange(event, "lname")} placeholder={"Last Name"}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="number" value={this.state.phnumber} onChange={(event) => this.handleChange(event, "phnumber")} placeholder={"Phone Number"}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" value={this.state.city} onChange={(event) => this.handleChange(event, "city")} placeholder={"City"}/>
                                </td>
                                <td>
                                    <input type="number" value={this.state.age} onChange={(event) => this.handleChange(event, "age")} placeholder={"Age"}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="number" value={this.state.kids} onChange={(event) => this.handleChange(event, "kids")} placeholder={"Kids"}/>
                                </td>
                            </tr>
                        </table>
                        <button className="submit-button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Eventregister;
