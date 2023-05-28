import React, { PropsWithChildren } from 'react';

const RelativeBackground: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="relative">
    {children}
  </div>
);

export default RelativeBackground;
