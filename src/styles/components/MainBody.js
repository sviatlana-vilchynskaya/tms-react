import { createUseStyles } from 'react-jss';

const MainBodyStyle = ({ palette }) => ({
  MainBody: {
    paddingTop: '20px',
  },

  LastChild: {
    paddingBottom: '15px',
  },
  cart: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    columnGap: '20px',
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: palette.background.cart,
    borderRadius: '4px',
  },
});
export default createUseStyles(MainBodyStyle);
