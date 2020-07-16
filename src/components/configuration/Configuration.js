import React from 'react';

import './configuration-styless.css';
import ComponentsList from './ComponentsList';

const Configuration = (props) => {

    const handleCreateComponent = () => {
        props.onCreateComponent()
    }

    return (
        <div className='configuration'>
            <h2>Components config</h2>
            <div className='configuration-inner-wrapper'>
                <ComponentsList 
                    components={props.components} 
                    onUpdateComponent={props.onUpdateComponent}
                />
                <button onClick={handleCreateComponent}>Add Component</button>
            </div>

        </div>
    )
};

export default Configuration;
