export default function checkIfExpired(timeToExpire) {
    setTimeout(() => {
        fetch('http://localhost:9000/users/token', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            }
            // }, timeToExpire - 3000)
        }, 3000)
    })
}