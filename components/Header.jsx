import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Paper from 'material-ui/Paper'
import PauseIcon from 'material-ui/svg-icons/av/pause'
import { colors } from 'material-ui/styles'

const Header = props => {
  return (<div>
    <Paper style={{
      width: '100%',
      height: '200px',
      backgroundColor: colors.red500,
      backgroundImage: 'url("/img/example.png")',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }} zDepth={2} rounded={false} />
    <FloatingActionButton style={{position: 'absolute', right: '0px', marginTop: '-28px', marginRight: '20px'}}>
      <PauseIcon />
    </FloatingActionButton>
  </div>)
}

export default Header
