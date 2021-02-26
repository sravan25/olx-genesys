import { Button,Form } from 'react-bootstrap';
import React, {Component} from 'react';
import axios from "../services/Interceptor";
import LoaderIcon from "../icons/LoaderIcon";

export default class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userName:"",
            password:"",
            isLogin:false,
        }
    }

    componentDidUpdate() {
        console.log("ddd");
    }

    handleLogin = () => {
        let body = {
            userID:this.state.userName,
            password:this.state.password,
            __type: "urn:inin.com:connection:icAuthConnectionRequestSettings",
            applicationName: "ICWS",
        }

        body = {
            "userID": "demouser1",
            "password": "12345",
            __type: "urn:inin.com:connection:icAuthConnectionRequestSettings",
            applicationName: "ICWS"
        }

        this.setState({isLogin:"pending"})

        axios.post("connection",body).then(data => {
            if(data.status === 201) {
                console.log("Is sucessful");
                this.setState({isLogin:true})
            }
        }).catch(err => {


        })
    }

    componentDidMount() {

    }

    myChangeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;

        this.setState({[name]: val});
    }

    submitHandler = () => {


    }

    render() {
        let {isLogin} = this.state;
        console.log("is Login ==",isLogin);
        return (
            <>
            {
            (isLogin === false)?
                <div style={{padding: "20px"}}>
                    <form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter user name" name="userName"
                                          onClick={this.myChangeHandler}/>
                            <Form.Text className="text-muted">
                                Enter valid user name
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                          placeholder="Password"
                                          name="password"
                                          onClick={this.myChangeHandler}
                            />
                        </Form.Group>

                        <div>
                            <Button variant="primary" onClick={this.handleLogin}>Login</Button>
                        </div>
                    </form>
                </div> : isLogin === true?<div> Login Successfull</div>:<div><LoaderIcon></LoaderIcon></div>
            }
            </>
        )
    }
}
