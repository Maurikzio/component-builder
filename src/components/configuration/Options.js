import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './styles/options-styles.css';


const Options = (props) => {
    const [ counter, setCounter] = useState(props.options.length+1);
    const [ options, setOptions ] = useState(props.options)

    
    const updateOptions = (e, id) => {
        const updatedOptions = options.map( option => {
            if(option.id === id){
                return {...option, checked: e.target.checked}
            }else {
                return option;
            }
        })
        setOptions(updatedOptions);

        props.onUpdateComponent({
            id: props.id,
            updates: {
                options: updatedOptions
            }
        })
    }

    const createOption = (e) => {
        e.preventDefault();
        setCounter(counter+1);
      
        const newOption = {
          id: uuidv4(),
          name: `Option ${counter}`,
          checked: false,
        }
      
        const newOptions = [...options, newOption];

        setOptions(newOptions);

        props.onUpdateComponent({
            id: props.id,
            updates: {
                options: newOptions
            }
        })
    }

    return (
        <div className='options-wrapper'>
            <form>
                {
                    options.map( option => (
                        <label key={option.id} className={option.checked ? 'checked' : 'unchecked'}>
                            <input
                                type='checkBox'
                                name={option.name}
                                checked={option.checked}
                                onChange={(e) => updateOptions(e, option.id)}
                            />
                            {option.name}
                        </label>
                    ))
                }
                <button onClick={createOption}>+</button>
            </form>
        </div>
    )
}

export default Options;