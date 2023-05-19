import React from 'react'
import ReactDOM from 'react-dom'
import logo from './letme.png'; 
console.log(logo);
const name='Arya Ayush';
// const head = React.createElement('h1',{},'hello react from the react 1st class')
const jsxHeading = (
    <div>
        <h1 data-gillu = "hid">Hello {name} this is JSX ,{name==='Arya Ayush'? 'awesome': 'great'}</h1>
        <h2 data-gillu = "hid">Hello {name} this is JSX ,{name==='Arya Ayush'? 'awesome': 'great'}</h2>
    </div>
);
const HeadingComponent = () => {return (
<h1>
    <BodyComponent />
    <h6>this is heading functional component</h6>
</h1>
);}
const BodyComponent = () => <h6>this is body of functional component</h6>
ReactDOM.render(<HeadingComponent><h1>heyyy</h1></HeadingComponent>, document.getElementById('root'))
 