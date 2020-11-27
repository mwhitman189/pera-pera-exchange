import Head from 'next/head'
import theme from '../styles/theme'
import UserList from '../components/userList'


export default function Profile(props) {

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