import React, {useState} from "react";

export type RatingValuePropsType = 0 | 1 | 2 | 3 | 4 | 5

export function UncontrolledRating() {
    console.log('UncontrolledRating rendering')
    const [value, setValue] = useState<RatingValuePropsType>(0)

    return (
        <div>
            <Star setValue={setValue} value={1} selected={value > 0}/>
            <Star setValue={setValue} value={2} selected={value > 1}/>
            <Star setValue={setValue} value={3} selected={value > 2}/>
            <Star setValue={setValue} value={4} selected={value > 3}/>
            <Star setValue={setValue} value={5} selected={value > 4}/>

        </div>
    )
}


type StarPropsType = {
    setValue:(value: RatingValuePropsType) => void
    selected: boolean
    value: RatingValuePropsType
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return (
         <span onClick={() => props.setValue(props.value)}>{props.selected ? <b>star</b> : 'star'} </span>
    )


}
