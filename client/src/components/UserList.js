import React, { Component } from 'react'
import styled from 'styled-components'


const UserPlate = styled.div`
    background-color: ${({ theme }) => theme.mainColor};
`

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
            .then(data => this.setState({
                users: data.user.map(user => {
                    return {
                        username: user.username,
                        nativeLanguage: user.nativeLanguage,
                        points: user.points,
                        rank: user.rank
                    }
                })
            }))
            .catch(err => {
                this.setState({ error: err })
            })
    }

    render() {
        return (
            <div className="user-list">
                {this.state.users.map(user => {
                    return <UserPlate className="user-plate" key={user.username}>{user.username}</UserPlate>
                })}
            </div>
        )
    }
}

export default UserList