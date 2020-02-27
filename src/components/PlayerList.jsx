import React from 'react'
import styled from 'styled-components'
import { isEmpty } from 'lodash'

import Player from './Player'

const PlayerList = ({ players, updateGame }) => {
  return (
    <>
      
      {!isEmpty(players) && players.map(player => (
        <Player key={player.id} player={player} updateGame={updateGame} />
      ))}
    </>
  )
}

export default PlayerList
