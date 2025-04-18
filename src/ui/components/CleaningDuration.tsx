import '../styles/CleaningDuration.css'
import Title from './Title'
import Reveal from '../../reveal_components/Reveal'
import { useTranslation } from 'react-i18next'

const CleaningDuration = () => {
    const { t } = useTranslation();

    return (
        <>
            <Title text={t('cleaning_duration.title')} />
            <Reveal width='100%'>
                <div className='cleaning-duration-container'>
                    <table className='cleaning-duration-table'>
                        <thead>
                            <tr>
                                <th colSpan={2}>{t('cleaning_duration.apartment_size')}</th>
                                <th className='siivousaika-header' rowSpan={2}>{t('cleaning_duration.cleaning_time')}</th>
                            </tr>
                            <tr>
                                <th>{t('cleaning_duration.min')}</th>
                                <th>{t('cleaning_duration.max')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>-</td>
                                <td>60</td>
                                <td className='siivousaika'>{t('cleaning_duration.time.2h')}</td>
                            </tr>
                            <tr>
                                <td>60</td>
                                <td>85</td>
                                <td className='siivousaika'>{t('cleaning_duration.time.3h')}</td>
                            </tr>
                            <tr>
                                <td>85</td>
                                <td>110</td>
                                <td className='siivousaika'>{t('cleaning_duration.time.4h')}</td>
                            </tr>
                            <tr>
                                <td>110</td>
                                <td>155</td>
                                <td className='siivousaika'>{t('cleaning_duration.time.5h')}</td>
                            </tr>
                            <tr>
                                <td>155</td>
                                <td>200</td>
                                <td className='siivousaika'>{t('cleaning_duration.time.6h')}</td>
                            </tr>
                            <tr>
                                <td>200</td>
                                <td>-</td>
                                <td className='siivousaika'>{t('cleaning_duration.contact')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Reveal>
        </>
    )
}

export default CleaningDuration
