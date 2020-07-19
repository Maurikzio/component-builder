import React from 'react';

import './styles/parameters-styles.css';

const Parameters = (props) => {
    const updatedParameters = e => {
        const{ target: { value, name } } = e;

        const updatedParameters = { ...props.params, [name]: (value) }

        props.onUpdateComponent({
            id: props.id,
            updates: {
                params: updatedParameters
            }
        })
    }

    return (
        <div className='param-items'>
            <label className='param-item max'>
                Min:
                <input type='number' value={props.params.min} name='min' onChange={updatedParameters}/>
            </label>
            <label className='param-item min'>
                Max:
                <input type='number' value={props.params.max} name='max' onChange={updatedParameters}/>
            </label>
        </div>
    )
}

export default Parameters;