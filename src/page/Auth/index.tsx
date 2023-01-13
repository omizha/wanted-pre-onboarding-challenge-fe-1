import { useLocation } from 'react-router-dom';

const Auth = () => {
  const { state } = useLocation();
  const { from } = state || { from: { pathname: '/' } };

  return (
    <div>
      <h1>Auth</h1>
      <p>Redirect from: {from.pathname}</p>
    </div>
  );
};

export default Auth;
