import Title from './Title'
import '../styles/WhyChooseUs.css'
import { EnvironmentOutlined, ToolOutlined, SafetyOutlined, SyncOutlined } from '@ant-design/icons';
import Reveal from '../../reveal_components/Reveal';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <div className="why-choose-us-container">
      <Title text={t('why_choose_us.title')} />
      
      <div className="section">
        <Reveal>
          <EnvironmentOutlined className="icon" />
          <h2>{t('why_choose_us.locality.title')}</h2>
          <hr />
          <p>{t('why_choose_us.locality.description')}</p>
        </Reveal>
      </div>

      <div className="section">
        <Reveal>
          <ToolOutlined className="icon" />
          <h2>{t('why_choose_us.professionalism.title')}</h2>
          <hr />
          <p>{t('why_choose_us.professionalism.description')}</p>
        </Reveal>
      </div>

      <div className="section">
        <Reveal>
          <SafetyOutlined className="icon" />
          <h2>{t('why_choose_us.reliability.title')}</h2>
          <hr />
          <p>{t('why_choose_us.reliability.description')}</p>
        </Reveal>
      </div>

      <div className="section">
        <Reveal>
          <SyncOutlined className="icon" />
          <h2>{t('why_choose_us.flexibility.title')}</h2>
          <hr />
          <p>{t('why_choose_us.flexibility.description')}</p>
        </Reveal>
      </div>
    </div>
  )
}

export default WhyChooseUs
