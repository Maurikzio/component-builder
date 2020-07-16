import React from 'react';

import './preview-styles.css';
import ComponentReady from './ComponentReady';


const Preview = (props) => {
    const components = props.components.map( component => (
        <ComponentReady
            key={component.id}
            id={component.id}
            type={component.type}
            label={component.label}
            content={component.content}
            onUpdateComponent={props.onUpdateComponent}
        />        
    ))
    return (
        <div className='preview'>
            <h2>Components preview</h2>
            <div className='preview-inner-wrapper'>
                {components}
            </div>
        </div>
    )
};

export default Preview;
