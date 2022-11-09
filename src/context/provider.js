import { useState, useMemo } from 'react';
import propTypes from 'prop-types';
import Context from './context';

export default function Provider({ children }) {
  const [loginData, setLoginData] = useState({});

  const values = useMemo(() => ({
    loginData,
    setLoginData,
  }), [loginData]);

  return (
    <Context.Provider value={ values }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;

