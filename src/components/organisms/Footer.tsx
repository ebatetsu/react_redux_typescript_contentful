import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    footer: {
      textAlign: 'center',
      padding: '10px 0',
      backgroundColor: '#ccc',
    },
  }),
)

const Footer: React.FC = () => {
  const classes = useStyles()

  return (
    <>
    <footer className={ classes.footer }>
      <small>&copy; ebatetsu</small>
    </footer>
    </>
  )
}

export default Footer
