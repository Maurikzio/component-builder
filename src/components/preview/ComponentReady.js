import React from 'react';
// import './styles.css/components-ready-styles.css';

const ComponentReady = (props) => { 
    // console.log(props.options);
    const handleInputChange = e => {
        const { target: { value } } = e;    
        props.onUpdateComponent({
            id: props.id,
            updates:{
                content: value
            }
        })
    }

    const updateOptions = (e, id) => {
        const updatedOptions = props.options.map( option => {
            if(option.id === id){
                return props.type === 'checkbox' ? {...option, checked: e.target.checked} : {...option, checked: true}
            }else {
                // return option;
                return props.type === 'checkbox' ? option : {...option, checked: false}
            }
        })

        props.onUpdateComponent({
            id: props.id,
            updates: {
                options: updatedOptions
            }
        })
    }


    const options = props.options.map(option => (
        <label key={option.id} className={option.checked ? 'checked' : 'unchecked'}>
            <input
                type={props.type}
                name={option.name}
                checked={option.checked}
                onChange={(e) => updateOptions(e, option.id)}
            />
            {option.name}
        </label>
    ))

    if(props.type === 'checkbox' || props.type === 'radio'){
        return (
            <div className='preview-item adv'>
                <p>{props.label}</p>
                <div className='preview-options-wrapper'>
                    {options}
                </div>
            </div>
        )
    }else {
        return (
            <div className='preview-item basic'>
                <p>{props.label}</p>
                <input type={props.type} defaultValue={props.content} onChange={handleInputChange}/>
            </div>
        )
    }
}

export default ComponentReady;