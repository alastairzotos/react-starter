import * as React from 'react';
import * as ReactDOM from 'react-dom';

function MyPage() {
    return (
        <div>
            <h1>Welcome to my site</h1>
            <p>Please have a look around</p>
 
            <AboutMe name="Joe" />
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

ReactDOM.render(
    <MyPage />,
    document.getElementById('main')
);
