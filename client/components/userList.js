import React, { Component } from 'react'
import { fetchUsers } from '../lib/api'
import theme from '../styles/theme'


class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            error: ""
        }
    }

    componentDidMount() {
        fetchUsers()
            .then(fetchedUsers => {
                this.setState({
                    users: fetchedUsers
                })
            })
            .catch(err => console.log(err))

    }

    render() {
        return (
            <div className="user-list">
                {this.state.users.map(({ username }) => {
                    return (
                        <>
                            <div className="user-plate" key={username}>
                                <div className="user-name username">{username}</div>
                            </div>
                            <style jsx>{`
                                .user-plate {
                                    color: ${theme.dtColors.text};
                                    background-color: ${theme.ltColors.link};
                                    min-height: 40px;
                                    padding: 10px;
                                    border-radius: 5px;
                                    margin: 0 0 5px 0;
                                }

                                .user-plate:hover {
                                    background-color: ${theme.ltColors.linkHover};
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
