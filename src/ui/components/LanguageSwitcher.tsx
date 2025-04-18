import React from "react";
import '../styles/LanguageSwitcher.css';
import i18n from 'i18next';

const LanguageSwitcher = () => {
  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="language-switcher">
      <select defaultValue="fi" onChange={changeLanguage}>
        <option value="en">🇬🇧 English</option>
        <option value="fi">🇫🇮 Finnish</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
