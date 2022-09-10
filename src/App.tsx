import React from 'react';
import './App.css';

function App() {
    console.log('App rendering')
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>

    );
}

function AppTitle() {
    return <>This is App Component</>
}

function Rating() {
    console.log('Rating rendering')
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>)
}

function Star() {
    console.log('Star rendering')
    return (
        <div>star</div>
    )
}

function Accordion() {
    console.log('Accordion rendering')
    return (
        <>
            <AccordionTitle/>
            <AccordionBody/>
        </>
    )
}

function AccordionTitle() {
    return <h3>Menu</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default App;
