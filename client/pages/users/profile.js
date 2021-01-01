import Head from 'next/head';
import theme from '../../styles/theme';


export default function Profile(props) {
    const { username } = props;

    return (
        <>
            <Head>
                <title>Pera Pera Exchange | My Profile</title>
            </Head>

            <h1>{username}'s Profile</h1>
        </>
    );
}
