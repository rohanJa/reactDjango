import React from 'react';
import Home from '../Home';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          logged_in: localStorage.getItem('token') ? true : false,
          username: '',
          password: ''
        };
    }
    /*
    componentDidMount() {
        if (this.state.logged_in) {
            fetch('http://localhost:8000/core/current_user/', {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(json => {
                this.setState({ username: json.username });
            });
        }
    }
*/
    handle_login = (e, data) => {
        console.log(data)
        e.preventDefault();
        const handle_token = this.props.handle_token
        
        fetch('http://localhost:8000/token-auth/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json()
        )
        .then(json => {
            localStorage.setItem('token', json.token);
            console.log()
            handle_token({logged_in: true,username:json.user.username});
        });


    };
    
    handle_logout = () => {
        console.log(localStorage.getItem('token'))
        localStorage.removeItem('token');
        console.log(localStorage.getItem('token'))
        this.setState({ logged_in: false, username: '' });
    };


    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState[name] = value;
            return newState;
        });
    };
    render() {
        const token=localStorage.getItem('token')
        return (
       !this.props.logged_in ? (<form onSubmit={e => this.handle_login(e, this.state)}>
        <center>
            <h4>
                <b>Log In</b>
            </h4>
            <label htmlFor="username"><b>Username</b> &nbsp;</label>
            <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handle_change}
            />
            <br/>
            <label htmlFor="password"><b>Password</b> &nbsp;</label>
            <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handle_change}
            />
            <br/>
            <input type="submit" /> 
        </center>
      </form>):(<Home username={this.state.username} />) 

    );
  }
}

export default LoginForm;
