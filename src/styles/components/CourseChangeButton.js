import { createUseStyles } from 'react-jss';

const CourseChangeButtonStyle = () => ({
  course_btn: {
    left: '63%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    width: '60px',
    height: '30px',
    backgroundColor: '#ff8b38',
    borderStyle: 'none',
    borderRadius: '3px',
    padding: '0',
    cursor: 'pointer',
  },

  active: {
    backgroundColor: 'grey',
  },
});

export default createUseStyles(CourseChangeButtonStyle);
