import { memo } from 'react';
import { Form } from '../../components';
import { loginForm } from '../../staticData';

export const Login = memo(() => {
  return (
    <section>
      <Form title={loginForm.title} fields={loginForm.fields} buttonText={loginForm.buttonText} />
    </section>
  );
});
