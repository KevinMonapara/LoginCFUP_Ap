import React from 'react';
import { Link } from "react-router-dom";
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        if (localStorage.getItem('st_name')) {
            this.setState({ myname: localStorage.getItem('st_name') });
        }else{
            window.location ='/Login';
        }
    }

    doLogout(){
        localStorage.clear();
        window.location='/';
    }
    render() {
        return (
            <>
                <h1>Dashboard</h1> 
                Hi, {this.state.myname} <br/>
                <Link to="/ChangePass">Change Password</Link> | 
                <Link to="/UpdateProfile">Profile</Link> | 
                <Link to="/Delete">Delete</Link> |
                
                <button onClick={this.doLogout.bind(this)} type="button"> Logout </button>
            </>
        );
    }
}

export default Dashboard;