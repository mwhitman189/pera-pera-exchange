import React, { Component } from 'react'
import theme from '../styles/theme'


class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:9000/users')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    users: data.user.map(user => {
                        return {
                            username: user.username,
                            nativeLanguage: user.nativeLanguage,
                            points: user.points,
                            rank: user.rank
                        }
                    })
                })
            })
            .catch(err => {
                this.setState({ error: err })
            })
    }

    render() {
        return (
            <div className="user-list">
                {this.state.users.map(user => {
                    return (
                        <>
                            <div className="user-plate" key={user.username}>
                                <div className="user-name bold">{user.username}</div>
                            </div>
                            <style jsx>{`
                                .user-plate {
                                    color: ${theme.dtColors.text};
                                    background: ${theme.ltColors.link};
                                    min-height: 40px;
                                    padding: 10px;
                                    border-radius: 5px;
                                    margin: 0 0 5px 0;
                                }

                                .user-plate:hover {
                                    background: ${theme.ltColors.linkHover};
                                    box-shadow: ${theme.shadows.subtle};
                                }
                            `}</style>
                        </>
                    )
                })}
            </div>
        )
    }
}

export default UserList