import React from 'react'
import '../styles/CleaningDuration.css'

const CleaningDuration = () => {
    return (
        <div className='cleaning-duration-container'>
            <h2>Arvio siivouksen kestoajasta</h2>
            <table className='cleaning-duration-table'>
                <thead>
                    <tr>
                        <th colSpan={2}>Asunnon koko (m²)</th>
                        <th className='siivousaika-header' rowSpan={2}>Siivousaika</th>
                    </tr>
                    <tr>
                        <th>Min</th>
                        <th>Max</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>-</td>
                        <td>60</td>
                        <td className='siivousaika'>2h</td>
                    </tr>
                    <tr>
                        <td>60</td>
                        <td>85</td>
                        <td className='siivousaika'>3h</td>
                    </tr>
                    <tr>
                        <td>85</td>
                        <td>110</td>
                        <td className='siivousaika'>4h</td>
                    </tr>
                    <tr>
                        <td>110</td>
                        <td>155</td>
                        <td className='siivousaika'>5h</td>
                    </tr>
                    <tr>
                        <td>155</td>
                        <td>200</td>
                        <td className='siivousaika'>6h</td>
                    </tr>
                    <tr>
                        <td>200</td>
                        <td>-</td>
                        <td className='siivousaika'>ota yhteyttä</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CleaningDuration
