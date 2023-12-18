import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { selectLanguages } from '../features/userDetailsSlice';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const changeLanguage = (language) => {
      dispatch(selectLanguages(language));
    i18n.changeLanguage(language);
  };

  useEffect(()=>{
    if(localStorage.getItem('language')){
        i18n.changeLanguage(localStorage.getItem('language'));
    }
  },[i18n])

  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-light" id="language-dropdown">
        Language
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => changeLanguage('en')}>English</Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage('fr')}>French</Dropdown.Item>
        {/* Add more Dropdown.Item elements for other languages as needed */}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSwitcher;
