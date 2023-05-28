import React from 'react';
import FuturisticPortalBackground from '../FuturisticPortalBackground';

const aboutMe = `
I'm an experienced Frontend Engineer, focused on ReactJS and well versed in libraries and frameworks that work with it.
I've had lead roles over small teams and successfully contributed to releasing  multiple features alongside my team members.
With experience in real world problems, I can create highly performant, maintainable and effective UI elements.
Highly communicative, both with less experienced developers to help them better understand the inner works of their code and ours, and also with the more technical team members in order to give out a good and clear view of the problem/solution.
`;

const About = () => (
  <FuturisticPortalBackground>
    <div id="about" className="w-1/2 mx-auto pt-52 h-screen snap-start">
      <div className="text-xl text-cold-200 mb-4">
        About me
      </div>
      <div className="text-lg text-hot-400 whitespace-break-spaces">
        {aboutMe}
      </div>
    </div>
  </FuturisticPortalBackground>
);

export default About;
