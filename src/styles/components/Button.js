import { createUseStyles } from 'react-jss';

const ButtonStyle = () => ({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    width: '270px',
    height: '35px',
    backgroundColor: '#ff8b38',
    borderRadius: '4px',
    padding: '0',
    cursor: 'pointer',
  },

  active: {
    backgroundColor: 'grey',
  },
});
export default createUseStyles(ButtonStyle);
