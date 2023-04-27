import React from 'react';
import SectionComponent from '@/components/section';
import SectionMobileComponent from '@/components/section/mobile';

const Home = () => {
  const data = [
    {
      topic: 'ATHLETS',
      image: {
        url: '/images/footballer_1.png',
        desktop: {
          width: '678',
          height: '950',
        },
        mobile: {
          width: '200',
          height: '281',
        },
      },
      section: [
        {
          title: 'CONNECTION',
          description:
            'Connect with coaches directly, you can ping coaches to view profile.',
          setting: {
            backgroundColor: '#FFFFFF',
          },
        },
        {
          title: 'COLLABORATION',
          description:
            'Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.',
          setting: {
            backgroundColor: '#F5F4F9',
          },
        },
        {
          title: 'GROWTH',
          description:
            'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc ',
          setting: {
            backgroundColor: '#5E3DB3',
            color: '#ffffff',
          },
        },
      ],
    },
    {
      topic: 'PLAYERS',
      image: {
        url: '/images/player_2.png',
        desktop: {
          width: '991',
          height: '815',
        },
        mobile: {
          width: '302',
          height: '249',
        },
      },
      section: [
        {
          title: 'CONNECTION',
          description:
            'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.',
          setting: {
            backgroundColor: '#FFFFFF',
          },
        },
        {
          title: 'COLLABORATION',
          description:
            'Work with recruiter to increase your chances of finding talented athlete.',
          setting: {
            backgroundColor: '#F5F4F9',
          },
        },
        {
          title: 'GROWTH',
          description: 'Save your time, recruit proper athlets for your team.',
          setting: {
            backgroundColor: '#090C35',
            color: '#ffffff',
            color_number: '#8765DD',
          },
        },
      ],
    },
  ];

  return (
    <>
      {data && (
        <>
          <div className="desktop">
            <SectionComponent data={data} />
          </div>
          <div className="mobile">
            <SectionMobileComponent data={data} />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
