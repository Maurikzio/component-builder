import React, { useState } from 'react';
import './styles/component-styles.css';
// import { v4 as uuidv4 } from 'uuid';
import Options from './Options';


// const opts = [
//     {
//       id: uuidv4(),
//       name: 'option1',
//       checked: false,
//     },
//     {
//       id: uuidv4(),
//       name: 'option2',
//       checked: false,
//     }
//   ];

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

    return(
        <div className='component-wrapper'>
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
                    <input value={label} onChange={handleLabelChange} placeholder="Give me a name..."/>
                </div>
            </div>
            <div className='component-options'>
                {props.type === 'checkbox' && 
                    <Options
                        key={props.id}
                        id={props.id}
                        options={props.options}
                        onUpdateComponent={props.onUpdateComponent}
                    />
                }
            </div>
        </div>
    )
}

export default Component;