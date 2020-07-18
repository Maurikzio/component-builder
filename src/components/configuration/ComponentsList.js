import React from 'react';
import Component from './Component';

const ComponentsList = (props) => {
    const components = props.components.map(component => (
        <Component 
            key={component.id} 
            id={component.id}
            type={component.type}
            label={component.label}
            options={component.options}
            onUpdateComponent={props.onUpdateComponent}
            onDeleteComponent={props.onDeleteComponent}
        />
    ))
    return (
        <div>
            {components}
        </div>
    )
}

export default ComponentsList;