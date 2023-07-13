import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  signSubmit = (event) => {
    event.preventDefault();
    let myformdata = new FormData();
    myformdata.append("st_email", this.state.email);
    myformdata.append("st_password", this.state.password);
    axios
      .post("https://akashsir.in/myapi/crud/student-login-api.php", myformdata)
      .then(function (response) {
        console.log(response);

        if (response.data.flag == "1") {
          alert("SucessFully Login");
          var a = response.data.st_id
          var b = response.data.st_name
          localStorage.setItem("st_id", JSON.stringify(a))
          localStorage.setItem("st_name", JSON.stringify(b))
          //Navigation
          //let navigate = useNavigate();
          //navigate(`/Dashboard`)
          window.location = 'Dashboard';
        } else {
          alert("You Enteres Wrong Email Id Or Pass");
        }
      })
      .catch(function (response) {
        console.log(response);
      });
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.signSubmit} >
          <label>
            Email ID : &nbsp;
            <input
              type="email"
              name="email"
              onChange={this.handleChange.bind(this)}
            />{" "}
          </label>
          <br />
          <label>
            Password : &nbsp;
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
            />{" "}
          </label>
          <br />
          <button type="submit"> Submit </button>
        </form>
        <Link to="/SignUp">SignUp</Link> |
        <Link to="/ForgotPassword">Forgot Password</Link>

      </>
    );
  }
}

export default Login;
