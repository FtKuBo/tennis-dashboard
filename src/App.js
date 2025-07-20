import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { tennisData } from './data/tennisData';
import PlayerStatsChart from './components/PlayerStatsChart';
import RankingHistoryChart from './components/RankingHistoryChart';
import RankingTable from './components/RankingTable';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const [selectedPlayer, setSelectedPlayer] = useState(tennisData.players[0]);
  const [comparePlayer, setComparePlayer] = useState(null);
  const [showTable, setShowTable] = useState(true);

  const handlePlayerChange = (event) => {
    const playerId = parseInt(event.target.value, 10);
    const player = tennisData.players.find((p) => p.id === playerId);
    setSelectedPlayer(player);
  };

  const handleComparePlayerChange = (event) => {
    const playerId = parseInt(event.target.value, 10);
    if (playerId) {
      const player = tennisData.players.find((p) => p.id === playerId);
      setComparePlayer(player);
    } else {
      setComparePlayer(null);
    }
  };

  const clearComparison = () => {
    setComparePlayer(null);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  const playerOptions = tennisData.players.map((player) => (
    <option key={player.id} value={player.id}>
      {t(player.name)}
    </option>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t('title')}</h1>
        <div className="language-switcher">
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('fr')}>Français</button>
        </div>
      </header>
      <main>
        <div className="controls">
          <div>
            <label htmlFor="player-select">{t('selectPlayer')}: </label>
            <select id="player-select" onChange={handlePlayerChange} value={selectedPlayer.id}>
              {playerOptions}
            </select>
          </div>
          <div>
            <label htmlFor="compare-player-select">{t('comparePlayer')}: </label>
            <select id="compare-player-select" onChange={handleComparePlayerChange} value={comparePlayer ? comparePlayer.id : ''}>
              <option value="">{t('none')}</option>
              {playerOptions}
            </select>
            {comparePlayer && (
              <button onClick={clearComparison} className="clear-comparison-btn">
                {t('clearComparison')}
              </button>
            )}
          </div>
          <div>
            <button onClick={toggleTable} className="toggle-table-btn">
              {showTable ? t('hideTable') : t('showTable')}
            </button>
          </div>
        </div>
        <div className="charts">
          <PlayerStatsChart data={selectedPlayer.stats} playerName={t(selectedPlayer.name)} />
          <div className="ranking-section">
            <RankingHistoryChart
              player1Data={selectedPlayer.rankingHistory}
              player2Data={comparePlayer ? comparePlayer.rankingHistory : null}
              player1Name={t(selectedPlayer.name)}
              player2Name={comparePlayer ? t(comparePlayer.name) : null}
            />
            {showTable && <RankingTable data={selectedPlayer.rankingHistory} />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;