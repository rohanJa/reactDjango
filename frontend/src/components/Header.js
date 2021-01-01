import React, { Component } from "react";

class Header extends Component {
  render() {

    return (
      <div className="text-center"><h1>Web Application using Django REST Framework and React</h1>        
      {this.props.logged_in &&   
            <button onClick={()=>this.props.handle_logout()} >Logout</button>
      }  
      <hr />
      </div>
    );
  }
}

export default Header;