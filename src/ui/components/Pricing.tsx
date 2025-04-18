import '../styles/Pricing.css';
import { RobotOutlined, ClearOutlined } from '@ant-design/icons';
import Title from './Title';
import Reveal from '../../reveal_components/Reveal';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <>
      <Title text={t('pricing.title')} />
      <Reveal width='100%'>
        <div className="pricing-container">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>{t('pricing.cleaning_services')}</th>
                <th>{t('pricing.assistance_services')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2} className="center-text">{t('pricing.frequency.biweekly')}</td>
              </tr>
              <tr>
                <td className="price">{t('pricing.cleaning_price.biweekly')}</td>
                <td className="price">{t('pricing.assistance_price.biweekly')}</td>
              </tr>
              <tr>
                <td colSpan={2} className="center-text">{t('pricing.frequency.monthly')}</td>
              </tr>
              <tr>
                <td className="price">{t('pricing.cleaning_price.monthly')}</td>
                <td className="price">{t('pricing.assistance_price.monthly')}</td>
              </tr>
              <tr>
                <td colSpan={2} className="center-text">{t('pricing.minimum_duration')}</td>
              </tr>
              <tr>
                <td className="center-text">{t('pricing.cleaning_min_duration')}</td>
                <td className="center-text">{t('pricing.assistance_min_duration')}</td>
              </tr>
              <tr className="additional-service">
                <td colSpan={2} className="center-text">{t('pricing.additional_services')}</td>
              </tr>
              <tr className="additional-service">
                <td><RobotOutlined className="icon" />{t('pricing.additional_services.robot')}</td>
                <td></td>
              </tr>
              <tr className="additional-service">
                <td><ClearOutlined className="icon" />{t('pricing.additional_services.floor_cleaner')}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p className="pricing-note">{t('pricing.note.tax')}</p>
          <p className="pricing-note">{t('pricing.note.robot')}</p>
          <p className="pricing-note">{t('pricing.note.floor_cleaner')}</p>
        </div>
      </Reveal>
    </>
  );
};

export default Pricing;
