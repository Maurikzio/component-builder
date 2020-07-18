import React from 'react';

const ComponentReady = (props) => { 

    const handleInputChange = e => {
        const { target: { value } } = e;    
        props.onUpdateComponent({
            id: props.id,
            updates:{
                content: value
            }
        })
    }
    console.log(props)
    return (
        <div>
            <p>{props.label}</p>
            <input type={props.type} defaultValue={props.content} onChange={handleInputChange}/>
            {props.options.length === 0 ? null : 'options here'}
        </div>
    )
}

export default ComponentReady;