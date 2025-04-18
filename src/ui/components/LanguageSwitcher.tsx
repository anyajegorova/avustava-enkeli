import i18n from "../../utils/i18n";
import '../styles/LanguageSwitcher.css';

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
