import React from 'react';

import './styles/configuration-styless.css';
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
                <div className='configuration-btn-container'>
                    <button onClick={handleCreateComponent}>Add Component</button>
                </div>
            </div>

        </div>
    )
};

export default Configuration;
