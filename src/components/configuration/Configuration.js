import React from 'react';

import './styles/configuration-styless.css';
import ComponentsList from './ComponentsList';

const Configuration = (props) => {

    const handleCreateComponent = () => {
        props.onCreateComponent()
    }

    return (
        <div className='configuration'>
            <div className='configuration-inner-wrapper'>
            <h2>Components config</h2>
                <ComponentsList 
                    components={props.components} 
                    onUpdateComponent={props.onUpdateComponent}
                    onDeleteComponent={props.onDeleteComponent}
                />
                <div className='configuration-btn-container'>
                    <button onClick={handleCreateComponent}>Add component</button>
                </div>
            </div>

        </div>
    )
};

export default Configuration;
