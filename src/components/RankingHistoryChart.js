import React from 'react';
import { useTranslation } from 'react-i18next';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const RankingHistoryChart = ({ player1Data, player2Data, player1Name, player2Name }) => {
  const { t } = useTranslation();

  const combinedData = player1Data.map(d1 => {
    const d2 = player2Data ? player2Data.find(d => d.year === d1.year) : null;
    return {
      year: d1.year,
      [player1Name]: d1.rank,
      ...(d2 && { [player2Name]: d2.rank }),
    };
  });

  return (
    <div className="chart-container">
      <h2>{t('rankingHistory')}</h2>
      <LineChart
        width={500}
        height={300}
        data={combinedData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={player1Name} stroke="#8884d8" name={player1Name} />
        {player2Data && <Line type="monotone" dataKey={player2Name} stroke="#82ca9d" name={player2Name} />}
      </LineChart>
    </div>
  );
};

export default RankingHistoryChart;