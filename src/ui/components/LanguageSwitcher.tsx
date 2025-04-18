import i18n from "../../utils/i18n";
import '../styles/LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("fi")}>Finnish</button>
    </div>
  );
};

export default LanguageSwitcher;
