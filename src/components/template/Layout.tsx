import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      backgroundColor: '#fff'
    },
    contents: {
      width: '96%',
      margin: '2% auto'
    },
  }),
)

const Layout: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <div className={ classes.wrapper }>
        <Header />
        <div className={ classes.contents }>{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
