import React, { Component } from 'react';

//const App = () => React.createElement('p', { className: 'app' }, 'Hello');

class App extends React.Component {
    render() {
        return (
            React.createElement('p', { className: 'app' }, 'Hello World')
            // <p className = 'app'>Hello</p> // JSX syntax
        )
    }
}
export default App;