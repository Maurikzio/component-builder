import React, { useState } from 'react';
import './component-styles.css';

const Component = (props) => {
    const [ type, setType ] = useState('');
    const [ label, setLabel ] = useState('');

    const handleTypeChange = e => {
        const { target: { value } } = e;    
        setType(value);
        props.onUpdateComponent({
            id: props.id,
            updates:{
                type: value
            }
        })
    }

    const handleLabelChange = e => {
        const { target: { value } } = e;
        setLabel(value);
        props.onUpdateComponent({
            id: props.id,
            updates: {
                label: value
            }
        })
    }

    return(
        <div className='components-wrapper'>
            <div className='type-selector'>
                <select value={type} onChange={handleTypeChange}>
                    <option value=''>Type</option>
                    <option value='Text'>Text</option>
                    <option value='password'>Password</option>
                    <option value='checkbox'>Checkbox</option>
                    <option value='radio'>Radio</option>
                    <option value='range'>Range</option>
                </select>
            </div>
            <div className='type-label'>
                <input value={label} onChange={handleLabelChange} placeholder="Give me a name..."/>
            </div>
        </div>
    )
}

export default Component;