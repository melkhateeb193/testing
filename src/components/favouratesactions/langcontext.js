// LanguageContext.js
import React, { createContext, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { changeLanguage } from './languageActions';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const dispatch = useDispatch();

  const setLanguage = (language) => {
    dispatch(changeLanguage(language));
  };

  return (
    <LanguageContext.Provider value={{ setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
