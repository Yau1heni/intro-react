import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
}

const UncontrolledAccordion = (props: AccordionPropsType) => {
    const [collapsedMenu, setCollapsedMenu] = useState(false)

    console.log('Accordion rendering')
    return (
        <>
            <AccordionTitle title={props.titleValue} collapsedMenu={collapsedMenu} setCollapsedMenu={setCollapsedMenu}/>
            {collapsedMenu && <AccordionBody/>}
        </>)

}

type AccordionTitlePropsType = {
    title: string
    collapsedMenu: boolean
    setCollapsedMenu: (collapsedMenu: boolean) => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={() => props.setCollapsedMenu(!props.collapsedMenu)}>{props.title}</h3>
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion