import { v4 as uuidv4 } from 'uuid';

export const initialComponents = [
    {
      id: uuidv4(),
      type: 'text',
      label: 'Lorem ipsum',
      content: 'Item',
      options:[],
      // params:{}
    },
    {
      id: uuidv4(),
      type: 'password',
      label: 'Qwerty',
      content: '1234567',
      options:[],
      // params:{}
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
      ],
      // params:{}
    },
    {
      id: uuidv4(),
      type: 'radio',
      label: 'Dummy radio',
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
        },
        {
          id: uuidv4(),
          name: `Option 3`,
          checked: false,
        }
      ],
      // params:{}
    },
    {
      id: uuidv4(),
      type: 'range',
      label: 'range',
      content: '',
      options:[],
      params:{
        min: '0',
        max: '10',
      }
    },
    {
      id: uuidv4(),
      type: '',
      label: '',
      content: '',
      options:[],
      // params:{}
    },
];
  