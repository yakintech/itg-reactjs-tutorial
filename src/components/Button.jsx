import { Button } from '@mui/material'
import React from 'react'

function KNButton(props) {
  return (
    <Button size='large' color='error'>{props.children}</Button>
  )
}

export default KNButton