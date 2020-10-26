import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';

function MyPage() {
    return (
        <div>
            <h1>Welcome to my site</h1>
            <p>Please have a look around</p>
 
            <AboutMe name="Joe" />
            <Counter />
        </div>
    )
}
 
function AboutMe(props) {
    return (
        <div>
            <h3>About me</h3>
            <p>Hello my name is {props.name}</p>
        </div>
    )
}

function Counter() {
    var [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click me</button>

            <p>Count: {count}</p>
        </div>
    )
}

ReactDOM.render(
    <MyPage />,
    document.getElementById('main')
);
