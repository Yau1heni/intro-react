import React, {useState} from 'react';
import s from './Select.module.css'

type ItemsType = {
    title: string
    value: any
};

interface SelectPropsType {
    value?: any
    onChange: (value: any) => void
    items: ItemsType[]
}

const Select = ({value, onChange, items}: SelectPropsType) => {
    const [active, setActive] = useState(false)

    const selectedItem = items.find(i => i.value === value)

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        onChange(value)
        toggleItems()
    }

    return (
        <>
            <div className={s.select}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {items.map(i => <div
                            key={i.value}
                            onClick={() => onItemClick(i.value)}
                        >{i.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    );
};

export default Select;