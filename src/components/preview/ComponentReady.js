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

    return (
        <div>
            <p>{props.label}</p>
            <input type={props.type} defaultValue={props.content} onChange={handleInputChange}/>
        </div>
    )
}

export default ComponentReady;