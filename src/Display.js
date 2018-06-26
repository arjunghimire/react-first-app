import React from 'react';

const Display = props => {
    return (
        <div>
            <h1>Name: - {props.name} </h1>
            <h1>Address: - {props.address} </h1>
        </div>
    );

}

export default Display;