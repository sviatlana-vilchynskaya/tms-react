import React from 'react';
import useStyles from '../styles/components/MainBodyHeader';
import SortButton from './SortButton';

import CourseChangeButton from './CourseChangeButton';

const MainBodyHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.Products__sort_wrap}>
      <div>
        <p className={classes.Products__sort_value}>Electronics</p>
      </div>
      <div>
        <CourseChangeButton />
      </div>
      <div>
        <SortButton />
      </div>
    </div>
  );
};

export default MainBodyHeader;
