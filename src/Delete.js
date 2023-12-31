import React from "react";
import axios from "axios";
class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { st_id: "" };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]:event.target.value });
  };
  componentDidMount() {
    var p = JSON.parse(localStorage.getItem("st_id"));
    //  console.log(p)
    this.setState({ st_id: p });
    console.log(p);
  }

  signSubmit = (event) => {
    event.preventDefault();
    let myformdata = new FormData();
    myformdata.append("st_id", this.state.st_id);
    console.log(this.state.st_id)
    axios
      .post("https://akashsir.in/myapi/crud/student-delete-api.php", myformdata)
      .then( (response) => {
        console.log(response);
        if(response.data.flag == "1")
        {
            alert("account deleted")
            localStorage.clear()
        }else{
          alert(response.data.message);
        }
      })
      .catch( (response) =>  {
        console.log(response);
      });
  };
  render() {
    return (
      <>
        <h1>Delete Profile</h1>
        <form onSubmit={this.signSubmit}>
         Are you Sure you want to Delete your Profile ? 
         <br/>
          <button type="submit"> Delete account </button>
        </form>
      </>
    );
  }
}

export default Delete;
