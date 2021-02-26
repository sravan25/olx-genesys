import { Button,Form } from 'react-bootstrap';
import React, {Component} from 'react';
import axios from "../services/Interceptor";

export default class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:""
        }
    }

    componentDidUpdate() {
        console.log("ddd");
    }

    handleLogin = () => {

        a
    }

    componentDidMount() {

    }

    myChangeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        if (val === "") {
            alert("Your age must be a number");
        }
        this.setState({[name]: val});
    }

    submitHandler = () => {


    }

    render() {
        return (
            <div style={{padding : "20px"}}>
                <form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onClick = {this.myChangeHandler}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onClick = {this.myChangeHandler}/>
                </Form.Group>
                
                <div>
                    <Button bsStyle="primary">Login</Button>
                </div>
                </form>
            </div>
        )
    }
}