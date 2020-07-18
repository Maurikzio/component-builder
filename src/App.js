import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Configuration from './components/configuration/Configuration';
import Preview from './components/preview/Preview';
import './App.css';


const initialComponents = [
  {
    id: uuidv4(),
    type: 'text',
    label: 'Lorem ipsum',
    content: 'Item',
    options:[]
  },
  {
    id: uuidv4(),
    type: 'password',
    label: 'Qwerty',
    content: '1234567',
    options:[]
  },
  {
    id: uuidv4(),
    type: 'checkbox',
    label: 'Choice',
    content: '',
    options:[
      {
        id: uuidv4(),
        name: `Option 1`,
        checked: false,
      },
      {
        id: uuidv4(),
        name: `Option 2`,
        checked: false,
      }
    ]
  },
  {
    id: uuidv4(),
    type: '',
    label: '',
    content: '',
    options:[]
  }
]

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
  const [ components, setComponents ] = useState(initialComponents);


  const createComponent = () => {
    setComponents([...components, createNewComponent()]);
  }
      
  const updateComponent = (data) => {
    console.log(data.updates);
    const updatedComponents = components.map( component => {
      if(component.id === data.id){
        return {...component, ...data.updates}
      }else {
        return component
      }
    });
    setComponents(updatedComponents)
  }

  const deleteComponent = (id) => {
    const newComponents = components.filter(component => component.id !== id)
    setComponents(newComponents)
  }

  // console.log({components})

  const componentsReady = components.filter( component => component.type && component.label);

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
