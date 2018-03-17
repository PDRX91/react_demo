import React from 'react';

function Greeting(props){
    console.log(props);

    const {name, favColor} = props;

    const greetingStyle = {
        color: favColor
    }

    return <h1 style={greetingStyle}>Hello, {props.name}, welcome to our site!</h1>
}

export default Greeting;