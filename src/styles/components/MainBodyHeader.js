import { createUseStyles } from 'react-jss';

const MainBodyHeaderStyle = () => ({
  Products__sort_wrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: '8px',
    borderRadius: '4px',
    marginBottom: '30px',
  },

  Products__sort_value: {
    display: 'block',
    fontSize: '1.17em',
    marginInlineStart: '0',
    marginInlineEnd: '0',
    fontWeight: 'normal',
  },
});
export default createUseStyles(MainBodyHeaderStyle);
