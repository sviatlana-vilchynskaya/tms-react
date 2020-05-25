import { createUseStyles } from 'react-jss';

const HeaderStyle = () => ({
  Header__block: {
    width: '100%',
    background: '#252525',
    marginBottom: '15px',
  },

  Header__container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    color: '#f5f5f7',
  },

  header__logo: {
    color: ' #ffffff',
  },

  basket_text: {
    color: '#252525',
    padding: '20px',
    textAlign: 'center',
  },
});

export default createUseStyles(HeaderStyle);
