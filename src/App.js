import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Configuration from './components/configuration/Configuration';
import Preview from './components/preview/Preview';
import './App.css';
import { initialComponents } from './initialComponents.js';


function createNewComponent(){
  const component = {
    id: uuidv4(),
    type: '',
    label: '',
    content: '',
    options:[],
    params:{min: '0', max: '10'}
  }
  return component;
}

function componentIsValid(component) {
  if(component.type && component.label){
    if((component.type === 'checkbox' || component.type === 'radio' ) && component.options.length === 0){
      return false;
    }
    if(component.type === 'range'){
      if(!!component.params.min && !!component.params.max){
        return true;
      }else{
        return false;
      }
    }
    return true;
  }else{
    return false;
  }
}


const App = () => {
  const [ components, setComponents ] = useState(initialComponents);


  const createComponent = () => {
    setComponents([...components, createNewComponent()]);
  }
      
  const updateComponent = (data) => {
    // console.log(data.updates);
    const updatedComponents = components.map( component => {
      if(component.id === data.id){
        return {...component, ...data.updates}
      }else {
        return component;
      }
    });
    setComponents(updatedComponents)
  }

  const deleteComponent = (id) => {
    const newComponents = components.filter(component => component.id !== id)
    setComponents(newComponents)
  }

  const componentsReady = components.filter(componentIsValid)

  // console.log({components})

  return (
    <div className='app'>
      <Configuration 
        components={components} 
        onCreateComponent={createComponent} 
        onUpdateComponent={updateComponent}
        onDeleteComponent={deleteComponent}
      />
      <Preview 
        components={componentsReady} 
        onUpdateComponent={updateComponent}
      />
    </div>
  );
}

export default App;
