import { Fingerprint } from '@mui/icons-material'
import SettingsIcon from '@mui/icons-material/Settings'
import { Button } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <>
      <Button variant='contained' startIcon={<Fingerprint />} 
      color='primary'
      > Login  </Button>
    </>
  )
}

export default Login