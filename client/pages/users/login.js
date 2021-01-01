import { Component } from 'react';
import Head from 'next/head';
import theme from '../../styles/theme';
import checkIfExpired from '../../utils/countdown';
import jwt_decode from "jwt-decode";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            authToken: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [ name ]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:9000/users/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(data => {
                const decodedToken = jwt_decode(data.accessToken);
                checkIfExpired(decodedToken.expiresIn);
                return this.setState({
                    authToken: data.accessToken,
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div className="login">
                <Head>
                    <title>Log in | Pera Pera Exchange</title>
                </Head>

                <h1>Log in</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                className="text-input"
                                placeholder="email@example.com"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                        </label>
                        <label>
                            Password:
                            <input
                                type="password"
                                name="password"
                                className="text-input"
                                placeholder="examplePassword"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                        </label>
                    </div>
                    <input type="submit" value="Log in" />
                </form>
                <style jsx>{`
                    .login {
                        color: ${theme.ltColors.text};
                        background: ${theme.ltColors.background};
                        min-height: 300px;
                        height: 50%;
                        width: 96%;
                        margin: auto;
                        z-index: 10;
                    }
                `}</style>
            </div>
        );
    }
}
export default Login;
