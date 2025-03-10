import { faCalendar, faEnvelope, faHouseUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '박종권(Jongkwon Park)',
    small: '',
  },
  contact: [
    {
      title: 'Github',
      link: 'https://github.com/jongkwon5',
      icon: faGithub,
    },
    {
      title: 'jongkwong@naver.com',
      icon: faEnvelope,
    },
    {
      title: '010-9621-0310',
      icon: faPhone,
    },
    {
      title: '서울시 구로구',
      icon: faHouseUser,
    },
    {
      title: '1994. 03. 10.',
      icon: faCalendar,
    },

    // {
    //   title: 'YouTube',
    //   link: 'https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww',
    //   // icon: faRss,
    //   icon: faYoutube,
    // },
  ],
  notice: {
    title: '배움과 도전을 주저하지 않는, 개발자 박종권입니다.',
    // title: 'Status : Open to new opportunities and challenges 🙋‍♂️',
    // title: 'Status : 작성중입니다 🔧',
    icon: faBell,
  },
};

export default profile;
