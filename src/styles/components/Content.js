import { createUseStyles } from 'react-jss';

const ContentStyle = () => ({
  content: {
    backgroundColor: '#ffffff',
    borderRadius: '7px',
    padding: '15px',
    marginBottom: '20px',
  },
  title: {
    color: '#252525',
    height: '97px',
    width: '377px',
    paddingTop: '10px',
  },
  img: {
    height: '120px',
    width: '175px',
    objectFit: 'contain',
  },
  product__text: {
    display: 'flex',
    flexDirection: 'column',
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
export default createUseStyles(ContentStyle);
