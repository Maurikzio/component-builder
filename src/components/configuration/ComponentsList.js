import React from 'react';
import Component from './Component';

const ComponentsList = (props) => {
    const components = props.components.map(component => (
        <Component 
            key={component.id} 
            id={component.id}
            onUpdateComponent={props.onUpdateComponent}
        />
    ))
    return (
        <div>
            {components}
        </div>
    )
}

export default ComponentsList;