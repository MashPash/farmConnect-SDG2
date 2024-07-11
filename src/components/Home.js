import React, { useEffect, useState } from 'react';

function Home() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/')
            .then(response => response.text())
            .then(data => setMessage(data));
    }, []);
    return (
        <div style={{ padding: '20px' }}>
            <h2>Welcome to FarmConnect</h2>
            <p>Connecting farmers and consumers for a sustainable future.</p>
            <p>{message}</p>
        </div>
    );
}

export default Home;
