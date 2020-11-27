import Head from 'next/head'
import theme from '../../styles/theme'
import UserList from '../../components/userList'


function Users(props) {

    return (
        <>
            <Head>
                <title>Language Partners | Pera Pera Exchange</title>
            </Head>

            <h1>Language-partners-in-waiting</h1>
            <UserList />
        </>
    )
}
export default Users