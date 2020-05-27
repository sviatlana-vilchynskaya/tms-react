import { createUseStyles } from 'react-jss';

const SearshStyle = ({ typography }) => ({
  input: {
    width: '400px',
    height: '30px',
    borderStyle: 'none',
    borderRadius: '3px',
    fontSize: typography.fontSizeNormal,
    paddingLeft: '5px',
  },
});

export default createUseStyles(SearshStyle);
