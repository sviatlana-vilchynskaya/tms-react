import { createUseStyles } from 'react-jss';

const CartStyle = () => ({
  content: {
    backgroundColor: '#ffffff',
    borderRadius: '7px',
    padding: '15px',
    margin: '20px 0 20px 0',
  },
  title: {
    color: '#252525',
  },
  img: {
    height: '120px',
    width: '175px',
    objectFit: 'contain',
  },
  product__text: {
    paddingTop: '10px',
    width: '377px',
    marginLeft: '23px',
    display: 'flex',
    flexDirection: 'column',
    height: '97px',
  },
  product__description: {
    paddingTop: '20px',
    fontSize: '12px',
  },
  product__price: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  text_width: {
    paddingTop: '10px',
    width: '377px',
  },

  wrap: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
export default createUseStyles(CartStyle);
