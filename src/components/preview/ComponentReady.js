import React from 'react';
import './styles/components-ready-styles.css';

const ComponentReady = (props) => { 
    const handleInputChange = e => {
        const  { target: { value } } = e;    
        props.onUpdateComponent({
            id: props.id,
            updates:{
                content: (props.type === 'range') ? value : Number(value)
            }
        })
    }

    const updateOptions = (e, id) => {
        const updatedOptions = props.options.map( option => {
            if(option.id === id){
                return props.type === 'checkbox' ? {...option, checked: e.target.checked} : {...option, checked: true}
            }else {
                // return option;
                return props.type === 'checkbox' ? option : {...option, checked: false}
            }
        })

        props.onUpdateComponent({
            id: props.id,
            updates: {
                options: updatedOptions
            }
        })
    }

    const options = props.options.map(option => (
        <label key={option.id} className={option.checked ? 'checked' : 'unchecked'}>
            <input
                type={props.type}
                name={option.name}
                checked={option.checked}
                onChange={(e) => updateOptions(e, option.id)}
            />
            {option.name}
        </label>
    ))

    if(props.type === 'checkbox' || props.type === 'radio'){
        return (
            <div className='preview-item radio-check'>
                <p>{props.label}</p>
                <div className='preview-options-wrapper'>
                    {options}
                </div>
            </div>
        )
    }else if(props.type === 'range'){
        return (
            <div className='preview-item range'>
                <p>{props.label}</p>
                <input 
                    type='range' 
                    min={props.params.min} 
                    max={props.params.max} 
                    // defaultValue={props.content} ===> to check!
                    onChange={handleInputChange}    
                    />
                <ul className='range-items'>
                    <li className='range-min'>{props.params.min}</li>
                    <li className='range-content'>{props.content}</li>
                    <li className='range-max'>{props.params.max}</li>
                </ul>
            </div>
        )
    }else {
        return (
            <div className='preview-item basic'>
                <p>{props.label}</p>
                <input type={props.type} defaultValue={props.content} onChange={handleInputChange}/>
            </div>
        )
    }
}

export default ComponentReady;