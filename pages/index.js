import React, { useState } from 'react';

function Home() {

const [message, setMessage] = useState('');

function Action() {
    setMessage('Eu te amo');
};

return (
    <div>
        <h1>Olá</h1>

        <button onClick={Action}>Clique Aqui</button>
        <br></br>
        <br></br>
        <div>{message}</div>
    </div>
    );
}

export default Home;
