import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Configuration from './components/configuration/Configuration';
import Preview from './components/preview/Preview';
import './App.css';


function createNewComponent(){
  const component = {
    id: uuidv4(),
    type: '',
    label: '',
    content: '',
    options:[]
  }
  return component;
}

function App() {
  const [ components, setComponents ] = useState([]);

  const createComponent = () => {
    setComponents(components.concat(createNewComponent()));
  }

  const updateComponent = (data) => {
    const updatedComponents = components.map( component => {
      if(component.id === data.id){
        return {...component, ...data.updates}
      }else {
        return component
      }
    });
    setComponents(updatedComponents)
  }

  const componentsReady = components.filter( component => component.type && component.label);

  return (
    <div className='app'>
      <Configuration 
        components={components} 
        onCreateComponent={createComponent} 
        onUpdateComponent={updateComponent}
      />
      <Preview 
        components={componentsReady} 
        onUpdateComponent={updateComponent}
      />
    </div>
  );
}

export default App;
