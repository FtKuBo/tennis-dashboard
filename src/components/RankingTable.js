
import React from 'react';
import { useTranslation } from 'react-i18next';

const RankingTable = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className="table-container">
      <h2>{t('rankingHistory')}</h2>
      <table>
        <thead>
          <tr>
            <th>{t('year')}</th>
            <th>{t('rank')}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankingTable;
