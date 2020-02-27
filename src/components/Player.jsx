import React from 'react'
import styled from 'styled-components'
import { isObject } from 'lodash'

const Row = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 12rem 4rem repeat(3, 7rem) repeat(2, 4rem) ;
  grid-gap: 0.7rem;
  grid-auto-rows: auto;
`

const Col1 = styled.input`
  border: 0.1rem solid black;
  border-radius: 25px;
  font-size: 2rem;
  grid-column: 3;
  grid-row: 1;
  margin: 0.1rem auto;
  text-align: center;
  width: 7rem;
`

const Col2 = styled(Col1)`
  grid-column: 4;
`

const Col3 = styled(Col1)`
  grid-column: 5;
`

const Name = styled.span`
  font-size: 2rem;
  font-weight: bold;
  grid-column: 1;
`

const Target = styled(Name)`
  grid-column: 2;
  font-weight: normal;
  margin: 0.7rem auto;
`

const Life = styled(Target)`
  grid-column: 6;
`
const Revive = styled(Target)`
  font-family: "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", Times, Symbola, Aegyptus, Code2000, Code2001, Code2002, Musica, serif, LastResort;
  grid-column: 7;
`

const Player = ({ player, processScore, updateGame }) => {
  const { id, name, number, hits, lifes, revive } = player
  return (
    <>
      <Row>
        <Name>{name}</Name>
        <Target>{number}</Target>
        {isObject(hits[0])
          ? (<Col1 id={id + '-hit-0'} defaultValue={hits[0].value} onChange={() => processScore(id)} onBlur={e => updateGame(e.target.value)} />)
          : (<Col1 id={id + '-hit-0'} onChange={processScore} onBlur={e => updateGame(e.target.value)} />)
        }
        {isObject(hits[1])
          ? (<Col2 id={id + '-hit-1'} defaultValue={hits[1].value} onChange={processScore} onBlur={e => updateGame(e.target.value)} />)
          : (<Col2 id={id + '-hit-1'} onChange={processScore} onBlur={e => updateGame(e.target.value)} />)
        }
        {isObject(hits[2])
          ? (<Col3 id={id + '-hit-2'} defaultValue={hits[2].value} onChange={processScore} onBlur={e => updateGame(e.target.value)} />)
          : (<Col3 id={id + '-hit-2'} onChange={processScore} onBlur={e => updateGame(e.target.value)} />)
        }
        <Life>{lifes}</Life>
        <Revive>{revive && '👼'}</Revive>
      </Row>
    </>
  )
}

export default Player
