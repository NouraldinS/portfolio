import React, { PropsWithChildren } from 'react';

const Content: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="snap-y snap-proximity snap h-[calc(100vh-4rem)] overflow-y-scroll scroll-smooth mt-16">
    {children}
  </div>
);

export default Content;
