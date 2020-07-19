import React, { useState } from 'react';
import './styles/component-styles.css';
import Options from './Options';
import Parameters from './Parameters';


const Component = (props) => {
    // console.log(props.params);
    const [ type, setType ] = useState(props.type);
    const [ label, setLabel ] = useState(props.label);

    const handleTypeChange = e => {
        const { target: { value } } = e;    
        setType(value);
        let newUpdates = { type: value};
        if(value === 'range'){
            newUpdates = {
                type: value,
                content: '',
                params: { min: 5, max: 20}
            }
        }
        props.onUpdateComponent({
            id: props.id,
            updates: newUpdates
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

    const handleRemoveComponent = () => {
        props.onDeleteComponent(props.id)
    }

    let extras = [];

    if(type === 'checkbox' || type === 'radio'){
        extras = <Options
                        // key={props.id}
                        id={props.id}
                        type={type}
                        options={props.options}
                        onUpdateComponent={props.onUpdateComponent}
                    />
    }else if(type === 'range'){
        extras = <Parameters 
            id={props.id}
            params={props.params}
            onUpdateComponent={props.onUpdateComponent}
        />
    }

    return(
        <div className='component-wrapper'>
            
            <span className='delete-btn' onClick={handleRemoveComponent}>&#10008;</span>

            <div className='inner'>
                <div className='component-type'>
                    <select value={type} onChange={handleTypeChange}>
                        <option value=''>Type</option>
                        <option value='text'>Text</option>
                        <option value='password'>Password</option>
                        <option value='checkbox'>Checkbox</option>
                        <option value='radio'>Radio</option>
                        <option value='range'>Range</option>
                    </select>
                </div>
                <div className='component-label'>
                    <input value={label} onChange={handleLabelChange} placeholder="Message"/>
                </div>
            </div>
            <div className='component-options'>
                {extras}
            </div>
        </div>
    )
}

export default Component;