import React from "react";
import axios from "axios";

class ChangePass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { st_id: "", op: "", np: "", cp: "" };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    var p = JSON.parse(localStorage.getItem("st_id"));
    this.setState({ st_id: p });
    console.log(p);
  }
  signSubmit = (event) => {
    event.preventDefault();
    let myformdata = new FormData();
    myformdata.append("st_id", this.state.st_id);
    myformdata.append("opass", this.state.op);
    myformdata.append("npass", this.state.np);
    myformdata.append("cpass", this.state.cp);
    axios
      .post(
        "https://akashsir.in/myapi/crud/student-change-password-api.php",
        myformdata
      )
      .then(function (response) {
        console.log(response);
        if (response.data.flag == "1") {
          alert(response.data.message);
        } else {
          alert("wrong");
        }
      });
  };
  render() {
    return (
      <>
        <h1>Change Password</h1>
        
        <form onSubmit={this.signSubmit}>
          <label>
             Old Password : &nbsp;
            <input
              type="password"
              name="op"
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <br />
          <label>
             New Password : &nbsp;
            <input
              type="password"
              name="np"
              onChange={this.handleChange.bind(this)}
            />
          </label>
          
          <br />
          <label>
             Confirm Password : &nbsp;
            <input
              type="password"
              name="cp"
              onChange={this.handleChange.bind(this)}
            />
             
            <br />
          </label>
          <button type="submit"> Change Password </button>
        </form>
      </>
    );
  }
}

export default ChangePass;
