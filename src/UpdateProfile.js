import React from "react";
import axios from "axios";

class UpdateProfile extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {st_id:"",name1 : "", gender : "", email: "", mobileno: ""}
  }
  
  handleChange = (event) => {
    this.setState ( { [event.target.name]: event.target.value });
  };
 
  componentDidMount()
  {
    var p = JSON.parse(localStorage.getItem("st_id"));
    this.setState({ st_id: p });
    console.log(p);
    console.log(this.state.st_id)
    axios
      .get(`https://akashsir.in/myapi/crud/student-detail-api.php?st_id=${p}`)
      .then( (response) => {
        console.log(response.data);
        console.log(response.data.st_name);
        
        if (response.data.flag == "1") {
          this.setState({ name1:response.data.st_name})
          this.setState({ gender:response.data.st_gender})
          this.setState({ email:response.data.st_email})
          this.setState({ mobileno:response.data.st_mobileno})}})
          } 

  signSubmit = (event) => {
    event.preventDefault();
    let myformdata = new FormData();
    myformdata.append("st_id" , this.state.st_id);
    myformdata.append("st_name" , this.state.name1);
    myformdata.append("st_gender" , this.state.gender);
    myformdata.append("st_email" , this.state.email);
    myformdata.append("st_mobileno" , this.state.mobileno);
    axios.post("https://akashsir.in/myapi/crud/student-edit-api.php", myformdata).then(function (response) {
      console.log(response)
      if (response.data.flag == "1")
      {
        alert('Record updated')
      }
    }).catch(function(response) {
      console.log(response)
    });
  };

  render() {
    return (
      <>
      <h1>Profile</h1>
      <form onSubmit={this.signSubmit.bind(this)}>
       Name : <input type="text" name="name1" value={this.state.name1} onChange={this.handleChange.bind(this)}></input><br/>
       Gender : <input type="text" name="gender" value={this.state.gender} onChange={this.handleChange.bind(this)}></input> <br/>
       Email : <input type="text" name="email" value={this.state.email} onChange={this.handleChange.bind(this)}></input><br/>
       Mobileno : <input type="text" name="mobileno" value={this.state.mobileno} onChange={this.handleChange.bind(this)}></input> <br/>
       
       <button type="submit"  > Update Profle </button>
       </form>
      </>
    );
  }
}
export default UpdateProfile;
