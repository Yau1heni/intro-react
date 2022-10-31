import React from "react";

type AccordionPropsType = {
    titleValue: string;
    onClick: (collapsedMenu: boolean) => void
    value: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <>
            <AccordionTitle onClick={props.onClick} value={props.value} title={props.titleValue}/>
            {!props.value && <AccordionBody/>}
        </>)

}

type AccordionTitlePropsType = {
    title: string
    onClick: (value: boolean) => void
    value: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => {props.onClick(!props.value)}}>{props.title}</h3>
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