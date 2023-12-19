// components/TeamSection.jsx
import React from 'react';

const TeamMember = ({ name, role, image, description, steps }) => {
  return (
    <div className="flex-col px-6 py-2 max-w-7xl">
      <div className="md:h-40 h-28 w-28 md:w-40 rounded-full overflow-hidden bg-gray-200">
        <img src={image} alt={name} className="" />
      </div>
      <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
        {name}
      </div>
      <div className="italic text-gray-500">{role}</div>
      {steps && (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
            <div className="flex mx-auto flex-wrap mb-20">
              {steps.map((step, index) => (
                <a
                  key={index}
                  className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium ${
                    index === 0
                      ? 'bg-gray-100 border-yellow-500 text-yellow-500'
                      : 'border-gray-200 hover:text-gray-900'
                  } inline-flex items-center leading-none ${
                    index === steps.length - 1 ? 'rounded-b' : ''
                  }`}
                >
                  {step.icon}
                  {step.title}
                </a>
              ))}
            </div>
            <img
              className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
              alt="hero"
              src={steps[0].image}
            />
            <div className="flex flex-col text-center w-full">
              <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
                {steps[0].title}
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                {steps[0].description}
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO, Tailblocks',
      image: 'https://source.unsplash.com/300x300/?man,businessman',
    },
    // Add other team members similarly
  ];

  const teamSteps = [
    {
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-5 h-5 mr-3"
          viewBox="0 0 24 24"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'STEP 1',
      image: 'https://dummyimage.com/720x600',
      description: 'Description for Step 1.',
    },
    // Add other steps similarly
  ];

  return (
    <div className="flex items-center justify-center text-center">
      <div className="flex flex-col p-2 m-2 ">
        <div className="text-3xl font-medium">Meet Our Team</div>
        <div className="text-sm mx-2 md:text-xl text-stone-500">
          Meet the team members who have contributed their designs for this
          website.
        </div>
        <div className="text-sm mx-2 md:text-xl mb-2 text-stone-500">
          Resource person of Tailblocks community
        </div>
        <div className="md:grid flex">
          <div className="flex items-center justify-center md:flex-row flex-col space-x-4 p-2">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                {...member}
                steps={index === 0 ? teamSteps : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
