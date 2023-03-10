import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Header } from './widgets';

const Home = lazy(() => import('./pages').then((module) => ({ default: module.Home })));
const Register = lazy(() => import('./pages').then((module) => ({ default: module.Register })));
const Login = lazy(() => import('./pages').then((module) => ({ default: module.Login })));
const Dashboard = lazy(() => import('./pages').then((module) => ({ default: module.Dashboard })));
const EditArticle = lazy(() =>
  import('./pages').then((module) => ({ default: module.EditArticle }))
);

const App = () => {
  return (
    <>
      <Suspense fallback={<h2>Loadign...</h2>}>
        <Header />

        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/register" element={<Register />} />
          <Route index path="/login" element={<Login />} />
          <Route index path="/dashboard/*" element={<EditArticle />} />
          <Route index path="/edit/:articleId" element={<EditArticle />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
