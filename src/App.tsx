import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {RatingValuePropsType, UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    console.log('App rendering')
    const [ratingValue, setRatingValue] = useState<RatingValuePropsType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    return (
        <div>
            <OnOff/>
            <OnOff/>
            <UncontrolledRating/>
            <Rating onClick={setRatingValue} value={ratingValue}/>
            <Accordion titleValue={'Menu'} onClick={setAccordionCollapsed} value={accordionCollapsed}/>
            <UncontrolledAccordion titleValue={'Menu1'}/>
            <UncontrolledAccordion titleValue={'Menu2'}/>

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
