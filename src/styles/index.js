import { createUseStyles } from 'react-jss';
import './fonts.css';

const RootStyle = () => ({
  '@global': {
    '*': {
      margin: 0,
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 600,
      fontSize: '16px',
      boxSizing: 'border-box',
    },

    body: {
      overflow: 'auto',
      background: '#d8d8d8',
    },

    a: {
      color: '#252525',
      textDecoration: 'none',
    },

    '.container': {
      maxWidth: '901px',
      margin: '0 auto',
      width: '100%',
    },

    '.wrap': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '16px',
      fontWeight: '600',
      padding: '15px',
    },
    img: {
      height: '100%',
      width: '100%',
      objectFit: 'contain',
    },
  },
});


export default createUseStyles(RootStyle, { name: 'Root', index: 100 });
