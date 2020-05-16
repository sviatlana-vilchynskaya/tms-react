import React from 'react';
import '../styles/components/MainBodyHeader.css';
import SortButton from './SortButton';

import CourseChangeButton from './CourseChangeButton';

const MainBodyHeader = () => (
  <div className="Products__sort_wrap">
    <div>
      <p className="Products__sort_value">Electronics</p>
    </div>
    <div>
      <CourseChangeButton />
    </div>
    <div>
      <SortButton />
    </div>
  </div>

);
export default MainBodyHeader;
