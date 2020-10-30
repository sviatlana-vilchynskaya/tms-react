import { createUseStyles } from 'react-jss';

const ButtonStyle = ({ palette }) => ({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: palette.common.white,
    width: '270px',
    height: '35px',
    backgroundColor: palette.primary.main,
    borderRadius: '4px',
    padding: '0',
    cursor: 'pointer',
    opacity: '1',
    '&:hover': {
      opacity: '0.8',
    },
  },

  active: {
    backgroundColor: 'grey',
  },
});
export default createUseStyles(ButtonStyle);
