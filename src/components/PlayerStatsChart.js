
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PlayerStatsChart = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className="chart-container">
      <h2>{t('playerStats')}</h2>
      <BarChart
        width={500}
        height={300}
        data={[data]}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="wins" fill="#8884d8" name={t('wins')} />
        <Bar dataKey="losses" fill="#82ca9d" name={t('losses')} />
      </BarChart>
    </div>
  );
};

export default PlayerStatsChart;
