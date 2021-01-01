import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import theme from '../../styles/theme';


const UserPlate = styled.div`
    color: ${theme.ltColors.text};
    background-color: ${theme.ltColors.background};
    min-height: 40px;
    padding: 10px;
    border-radius: 5px;
    margin: 0 0 5px 0;

    &:hover {
        background-color: ${theme.ltColors.linkHover};
        box-shadow: ${theme.shadows.subtle};
    }
`;

function Users({ data }) {
    return (
        <>
            <Head>
                <title>Language Partners | Pera Pera Exchange</title>
            </Head>

            <h1>Language-partners-in-waiting</h1>
            <div className="user-list">
                {data.users.map(({ username }) => {
                    return (
                        <UserPlate key={username}>
                            <div className="user-name username">{username}</div>
                        </UserPlate>
                    );
                })}
            </div>
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:9000/users`);
    const data = await res.json();

    return { props: { data } };
}

export default Users;
