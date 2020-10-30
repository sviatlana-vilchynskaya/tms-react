import { createUseStyles } from 'react-jss';

const AppStyle = () => ({
  a: {
    textDecoration: 'none',
    color: '#252525',
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
export default createUseStyles(AppStyle);
