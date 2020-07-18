import React from 'react';

import './styles.css/preview-styles.css';

import ComponentReady from './ComponentReady';


const Preview = (props) => {

    let components = '';

    if(props.components.length === 0){
        components = <div className='preview-helpers'>
            <h3>Oops, something is wrong..<span role='img' aria-label="OMG">😱</span></h3>
            <p><span role='img' aria-label="Error">❗️</span>Try adding a new component</p>
            <p><span role='img' aria-label="Error">❗️</span>Change the <strong>type</strong> of the component</p>
            <p><span role='img' aria-label="Error">❗️</span>Change the <strong>message</strong>  of the component</p>
        </div>
    }else {
        components = props.components.map( component => (
            <ComponentReady
                key={component.id}
                id={component.id}
                type={component.type}
                label={component.label}
                content={component.content}
                options={component.options}
                onUpdateComponent={props.onUpdateComponent}
            />        
        ))
    }

    return (
        <div className='preview'>
            <h2>Components preview</h2>
            <div className='preview-inner-wrapper'>{components}</div>
        </div>
    )
    
};

export default Preview;
