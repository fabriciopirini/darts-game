/* global Dartboard */
import React, { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'
import styled from 'styled-components'

import PlayerList from '../components/PlayerList'

const Title = styled.header`
  text-align: center;
`

const Main = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-gap: 0.7rem;
  grid-auto-rows: auto;
  height: 100%;
  margin: 2rem;
  width: 80%;
`

const BoardContainer = styled.div`
  grid-column: 2;
  grid-row: 1;
  height: 600px;
  width:600px;
`

const Board = styled.div`
  height: 600px;
  width:600px;
`

const PlayerListCointainer = styled(BoardContainer)`
  grid-column: 1;
  grid-row: 1;
`

function Game() {
  const [players, setPlayers] = useState([])
  // const [currentPlayer, setCurrentPlayer] = useState('')
  // const [history, setHistory] = useState([])

  const updateGame = ({ detail }) => {
    console.log(detail);
  }

  useEffect(() => {
    const initializeData = () => {
      if (isEmpty(players)) {
        setPlayers([
          ...players,
          {
            id: 'fabricio',
            name: 'Fabricio',
            number: 13,
            hits: [{value: 20, display: '20', modifier: 1}, {value: 20, display: 'D-20', modifier: 2}, {value: 5, display: 'T-5', modifier: 3}],
            lifes: 3,
            revive: true,
          },
          {
            id: 'paulim',
            name: 'Paulim',
            number: 20,
            hits: [{value: 0, display: '0', modifier: 1}, {value: 10, display: 'T-10', modifier: 3}],
            lifes: 1,
            revive: true,
          },
        ]);
      }
    }
    initializeData()

    const dartboard = new Dartboard('#dartboard');
    dartboard.render()

    document.querySelector('#dartboard').addEventListener('throw', updateGame);
    return () => {
      document.querySelector('#dartboard').removeEventListener('throw', updateGame);
    }
  }, [players])

  return (
    <>
      <Title>
        <h1>Darts game</h1>
      </Title>
      <Main>
        <PlayerListCointainer>
          <PlayerList players={players} updateGame={updateGame} />
        </PlayerListCointainer>
        <BoardContainer>
          <Board id="dartboard" />
        </BoardContainer>
      </Main>
    </>
  );
}

export default Game;
