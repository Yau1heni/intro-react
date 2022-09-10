import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log('App rendering')
    return (
        <div>
            <PageTitle title={"This is App Component"}/>
            Article 1
            <Rating value={0}/>
            <Accordion titleValue={'Menu1'} collapsedMenu={true}/>
            Article 2
            <Rating value={1}/>
            <Accordion titleValue={'Menu2'} collapsedMenu={false}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
