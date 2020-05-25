import { createUseStyles } from 'react-jss';

const BasketCartStyle = () => ({
  content: {
    backgroundColor: '#ffffff',
    borderRadius: '7px',
    padding: '15px',
    margin: '20px 0 20px 0',
    display: 'flex',
  },
  title: {
    paddingTop: '10px',
    width: '377px',
    marginLeft: '23px',
    display: 'flex',
    flexDirection: 'column',
    height: '97px',
  },
  img: {
    height: '120px',
    width: '175px',
    objectFit: 'contain',
  },

  product__text: {
    display: 'flex',
    flexDirection: 'column',
    color: '#252525',
  },

  textWidth: {
    paddingTop: '10px',
    width: '377px',
  },
  product__description: {
    paddingTop: '20px',
    fontSize: '12px',
    color: '#000000',
  },
  product__price: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    color: '#000000',
  },

});
export default createUseStyles(BasketCartStyle);
