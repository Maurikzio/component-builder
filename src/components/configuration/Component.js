import React, { useState } from 'react';
import './styles/component-styles.css';
import Options from './Options';


const Component = (props) => {
    const [ type, setType ] = useState(props.type);
    const [ label, setLabel ] = useState(props.label);

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

    const handleRemoveComponent = () => {
        props.onDeleteComponent(props.id)
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
                {(props.type === 'checkbox' || props.type === 'radio' ) && 
                    <Options
                        key={props.id}
                        id={props.id}
                        type={type}
                        options={props.options}
                        onUpdateComponent={props.onUpdateComponent}
                    />
                }
            </div>
        </div>
    )
}

export default Component;