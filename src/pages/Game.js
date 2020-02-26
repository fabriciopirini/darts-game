import React, { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'

import Player from '../components/Player'

function Game() {
  const [players, setPlayers] = useState([])
  const [currentPlayer, setCurrentPlayer] = useState('')
  const [history, setHistory] = useState([])

  const updateGame = (playerId) => {

  }

  useEffect(() => {
    const initializeData = () => {
      if (isEmpty(players)) {
        setPlayers([
          ...players,
          {id: 'fabricio', name: 'Fabricio', hits: [20, 20, 20]},
          {id: 'paulim', name: 'Paulim', hits: [0, 0]},
          ]);
      }
    }

    initializeData()
  }, [players])

  return (
    <>
      <header>
        <h1>Darts game</h1>
      </header>
      {!isEmpty(players) && players.map(player => (
        <Player key={player.id} name={player.name} hits={player.hits} updateGame={updateGame} />
      ))}
    </>
  );
}

export default Game;
