import { Form } from './components/FormComponents';

const App = () => {
  const dummyData = {
    title: 'Form Create Article',
    fields: [
      {
        type: 'text',
        label: 'description text here',
        name: 'string',
        testId: 'string'
      },
      {
        type: 'radio',
        label: 'choice 1',
        name: 'choice',
        testId: 'choice'
      },
      {
        type: 'radio',
        label: 'choice 2',
        name: 'choice',
        testId: 'choice2'
      },
      {
        type: 'radio',
        label: 'choice 3',
        name: 'choice',
        testId: 'choice3'
      },
      {
        type: 'text',
        label: 'description text here 2',
        name: 'string 2',
        testId: 'string 2'
      },
      {
        type: 'text',
        label: 'description text here 2',
        name: 'string 3',
        testId: 'string 3'
      },
      {
        type: 'select',
        label: 'gender',
        name: 'gender',
        testId: 'gender',
        options: ['male', 'female']
      }
    ],
    buttonText: 'submit'
  };

  return (
    <Form title={dummyData.title} fields={dummyData.fields} buttonText={dummyData.buttonText} />
  );
};

export default App;
