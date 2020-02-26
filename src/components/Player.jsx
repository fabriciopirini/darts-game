import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { isNumber } from 'lodash'

const Row = styled.div`
  display: flex;
  line-height: 1.5;
  margin: 0 auto;
  height: 100%;
  width: 33%;
`

const Col = styled.input`
  border: 0.1rem solid black;
  border-radius: 25px;
  flex: 1;
  height: 100%;
  margin: 0.1rem;
`

const Name = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`

const Player = ({ name, hits, lives, revive, processScore, updateGame }) => {
  return (
    <>
      <Row>
        <Name>{name}</Name>
        {isNumber(hits[0])
          ? (<Col id={name + '-hit-0'} defaultValue={hits[0]} onChange={processScore} onBlur={updateGame} />)
          : (<Col/>)
        }
        {isNumber(hits[1])
          ? (<Col id={name + '-hit-1'} defaultValue={hits[1]} onChange={processScore} onBlur={updateGame} />)
          : (<Col/>)
        }
        {isNumber(hits[2])
          ? (<Col id={name + '-hit-2'} defaultValue={hits[2]} onChange={processScore} onBlur={updateGame} />)
          : (<Col/>)
        }
      </Row>
    </>
  )
}

Player.propTypes = {

}

export default Player
