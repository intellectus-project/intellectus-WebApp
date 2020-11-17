import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {prevLink: '/dashboard'};

const reducer = (user, newUser) => {
  if (!newUser) {
    localStorage.removeItem('prevLink');
    return initialState;
  }
  return { ...user, ...newUser };
};

const localState = JSON.parse(localStorage.getItem('prevLink'));

const LinkContext = createContext({});

const LinkProvider = ({ children }) => {
  const [prevLink, setPrevLink] = useReducer(reducer, localState || initialState);

  useEffect(() => {
    localStorage.setItem('prevLink', JSON.stringify(prevLink));
  }, [prevLink]);

  return <LinkContext.Provider value={{ prevLink, setPrevLink }}>{children}</LinkContext.Provider>;
};

export { LinkContext, LinkProvider };
