import React from 'react';
import { Timeline } from 'antd';
import { MY_HISTORY } from './data';

const History = () => (
  <div id="work" className="relative w-1/2 mx-auto pt-52 snap-start scroll-mt-5">
    <div className="text-cold-200 text-xl mb-4">My Experiences</div>
    <Timeline
      mode="left"
      items={MY_HISTORY.map(({
        date, title, company, description,
      }) => ({
        label: <span className="text-xl text-cold-400">{date}</span>,
        children: (
          <div>
            <div
              className="absolute -left-[25vw] w-6 h-6 bg-hot-600 border-l-hot-400 animate-spin duration-10000"
            />
            <div className="text-xl text-cold-200">
              {title}
              {' - '}
              {company}
            </div>
            <div className="text-lg text-cold-200">{description}</div>
          </div>
        ),
      }))}
    />
  </div>
);

export default History;
