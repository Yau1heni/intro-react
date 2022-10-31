import React from "react";
import {RatingValuePropsType} from "../UncontrolledRating/UncontrolledRating";

type RatingPropsType = {
    value: RatingValuePropsType
    onClick: (value: RatingValuePropsType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('UncontrolledRating rendering')

    return (
        <div>
            <Star onClick={props.onClick} value={1} selected={props.value > 0}/>
            <Star onClick={props.onClick} value={2} selected={props.value > 1}/>
            <Star onClick={props.onClick} value={3} selected={props.value > 2}/>
            <Star onClick={props.onClick} value={4} selected={props.value > 3}/>
            <Star onClick={props.onClick} value={5} selected={props.value > 4}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValuePropsType) => void
    value: RatingValuePropsType
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return (
        <span onClick={() => props.onClick(props.value)}>
            {props.selected ? <b> star</b> : ' star'}
        </span>
    )
}
