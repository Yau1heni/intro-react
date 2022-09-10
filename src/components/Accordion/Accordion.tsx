import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsedMenu: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    if (props.collapsedMenu === true) {
        return (
            <>
                <AccordionTitle title={props.titleValue}/>
            </>)
    } else {
        return (
            <>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </>)
    }
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.title}</h3>
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

export default Accordion