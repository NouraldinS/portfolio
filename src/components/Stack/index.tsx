import React from 'react';

import { ReactComponent as NodeJsIcon } from '../../assets/svg/brands/nodejs.svg';
import { ReactComponent as ApolloIcon } from '../../assets/svg/brands/apollo.svg';
import { ReactComponent as CucumberIcon } from '../../assets/svg/brands/cucumberio.svg';
import { ReactComponent as DebianIcon } from '../../assets/svg/brands/debian.svg';
import { ReactComponent as ExpressjsIcon } from '../../assets/svg/brands/expressjs.svg';
import { ReactComponent as FirebaseIcon } from '../../assets/svg/brands/firebase.svg';
import { ReactComponent as GanalyticsIcon } from '../../assets/svg/brands/ganalytics.svg';
import { ReactComponent as GitIcon } from '../../assets/svg/brands/git.svg';
import { ReactComponent as GmapsIcon } from '../../assets/svg/brands/gmaps.svg';
import { ReactComponent as GraphqlIcon } from '../../assets/svg/brands/graphql.svg';
import { ReactComponent as HtmlIcon } from '../../assets/svg/brands/html.svg';
import { ReactComponent as JestjsioIcon } from '../../assets/svg/brands/jestjsio.svg';
import { ReactComponent as MongodbIcon } from '../../assets/svg/brands/mongodb.svg';
import { ReactComponent as NextjsIcon } from '../../assets/svg/brands/nextjs.svg';
import { ReactComponent as QueryIcon } from '../../assets/svg/brands/react-query.svg';
import { ReactComponent as SassIcon } from '../../assets/svg/brands/sass.svg';
import { ReactComponent as StripeIcon } from '../../assets/svg/brands/stripe.svg';
import { ReactComponent as TailwindcssIcon } from '../../assets/svg/brands/tailwindcss.svg';
import { ReactComponent as TypescriptIcon } from '../../assets/svg/brands/typescript.svg';
import { ReactComponent as WebpackIcon } from '../../assets/svg/brands/webpack.svg';
import { ReactComponent as CssIcon } from '../../assets/svg/brands/css.svg';
import { ReactComponent as LinuxIcon } from '../../assets/svg/brands/linux.svg';
import { ReactComponent as PostgresqlIcon } from '../../assets/svg/brands/postgresql.svg';
import { ReactComponent as ReduxIcon } from '../../assets/svg/brands/redux.svg';
import { ReactComponent as MobxIcon } from '../../assets/svg/brands/mobx.svg';
import { ReactComponent as ReactIcon } from '../../assets/svg/brands/react.svg';
import { ReactComponent as RestAPIIcon } from '../../assets/svg/brands/restapi.svg';

const icons = [
  {
    title: 'Frameworks and Libraries',
    items: [
      <ReactIcon />,
      <NextjsIcon />,
      <TypescriptIcon />,
      <NodeJsIcon />,
      <ExpressjsIcon />,
    ],
  }, {
    title: 'State management',
    items: [
      <ReduxIcon />,
      <MobxIcon />,
    ],
  }, {
    title: 'API Architecture',
    items: [
      <GraphqlIcon />,
      <RestAPIIcon />,
    ],
  }, {
    title: 'Tools',
    items: [
      <GitIcon />,
      <QueryIcon />,
      <TailwindcssIcon />,
      <WebpackIcon />,
      <FirebaseIcon />,
      <GanalyticsIcon />,
      <GmapsIcon />,
      <ApolloIcon />,
      <MongodbIcon />,
      <PostgresqlIcon />,
      <StripeIcon />,
      <SassIcon />,
      <DebianIcon />,
      <LinuxIcon />,
      <CssIcon />,
      <HtmlIcon />,
    ],
  }, {
    title: 'Testing',
    items: [
      <CucumberIcon />,
      <JestjsioIcon />,
    ],
  },
];

const Stack = () => (
  <div className="w-1/2 mx-auto pt-52 min-h-screen snap-start">
    <div className="text-xl text-cold-200 mb-4">My Stack</div>
    <div className="gap-4 bg-mainFg p-8 rounded-xl">
      {icons.map((group) => (
        <div className="mb-8">
          <div className="mb-4">{group.title}</div>
          <div className="flex gap-8 flex-wrap">
            {group.items.map((icon) => <div className="min-w-[8rem] max-w-[10rem] max-h-[10rem] flex items-center overflow-hidden">{icon}</div>)}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Stack;
