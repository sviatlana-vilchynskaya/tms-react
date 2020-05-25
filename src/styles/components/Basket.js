import { createUseStyles } from 'react-jss';

const BasketStyle = () => ({
  basket__count: {
    fontSize: '9px',
    fontWeight: '400',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '15px',
    height: '15px',
    color: '#ffffff',
    background: '#ff8b38',
    transform: 'translateY(-7px)',
    borderRadius: '50%',
  },
  basket__amount: {
    fontSize: '9px',
    textTransform: 'lowercase',
    color: '#c1c1c2',
  },
  basket__amount_sum: {
    fontSize: '9px',
  },
});
export default createUseStyles(BasketStyle);
