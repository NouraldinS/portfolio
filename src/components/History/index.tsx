import React from 'react';
import { Timeline } from 'antd';
import { MY_HISTORY } from './data';

const History = () => (
  <div id="work" className="w-1/2 mx-auto pt-52 h-screen snap-start scroll-mt-5">
    <div className="text-cold-200 text-xl mb-4">My Experiences</div>
    <Timeline
      mode="left"
      items={MY_HISTORY.map(({ date, title, company }) => ({
        label: <span className="text-xl text-cold-400">{date}</span>,
        children: (
          <span className="text-xl text-cold-200">
            {title}
            {' - '}
            {company}
          </span>
        ),
      }))}
    />
  </div>
);

export default History;
