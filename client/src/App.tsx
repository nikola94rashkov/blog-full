import { Form } from './components/FormComponents';
import { createArticleFields } from './services/formsData';

const App = () => {
  return (
    <Form
      title={createArticleFields.title}
      fields={createArticleFields.fields}
      buttonText={createArticleFields.buttonText}
    />
  );
};

export default App;
