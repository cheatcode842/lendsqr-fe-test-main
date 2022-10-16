import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import UserPage from './pages/UserPage';
import Layout from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
        path='/dashboard'
      />
      <Route
        element={
          <Layout>
            <UserPage />
          </Layout>
        }
        path='/users/:id'
      />
      <Route path='/' element={<LoginPage />} />
    </Routes>
  );
};

export default App;
