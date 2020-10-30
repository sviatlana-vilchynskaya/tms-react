import { createUseStyles } from 'react-jss';

const LoaderStyle = () => ({
  Loader: {
    display: 'none',
    position: 'fixed',
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Loader__child: {
    width: '120px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c8c8c8',
    color: '#252525',
    borderRadius: '4px',
  },
  '.Loader.active': {
    display: 'flex',
  },
});

export default createUseStyles(LoaderStyle);
