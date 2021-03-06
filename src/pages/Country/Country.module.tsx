import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      maxWidth: '1280',
      padding: 0,
      display: 'flex',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      alignItems: 'center',
    },
    media: {
      width: 160,
      height: 64,
      paddingLeft: '32px',
      paddingRight: '32px',
      margin: 0,
    },
    name: {
      textDecoration: 'none',
      fontSize: '1rem',
      cursor: 'pointer',
      paddingLeft: '32px',
      paddingRight: '32px',
      width: '10rem',
    },
    button: {
      // marginLeft: 'auto',
      paddingLeft: '32px',
      paddingRight: '32px',
    },
  }
})

export default useStyles
