import React, {useState} from 'react';
import Select from './Select';
import {actions} from '@storybook/addon-actions';

export default {
    title: 'Example/User',
    component: Select,
}

export const WithValue = () => {
    const [value, setValue] = useState('2')

    return <>
        <Select
        onChange={setValue}
        value={value}
        items={[
            {value: '1', title: 'Barysaw'},
            {value: '2', title: 'Minsk'},
            {value: '3', title: 'Kyiv'},
        ]}
    />
    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return <>
        <Select
        onChange={setValue}
        value={value}
        items={[
            {value: '1', title: 'Barysaw'},
            {value: '2', title: 'Minsk'},
            {value: '3', title: 'Kyiv'},
        ]}
    />
    </>
}



