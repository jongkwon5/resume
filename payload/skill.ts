import { ISkill } from '../component/skill/ISkill';

const pl: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'Spring',
    },
    {
      title: 'MyBatis',
    },
    {
      title: 'JPA',
    },
  ],
};

const devops: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'React',
    },
    {
      title: 'JavaScript',
    },
    {
      title: 'HTML/CSS',
    },
  ],
};

const env: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'Oracle',
    },
    {
      title: 'MySQL',
    },
  ],
};

const tool: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Git/Github',
    },
    {
      title: 'SVN',
    },
    {
      title: 'Notion',
    },
    {
      title: 'Eclipse',
    },
    {
      title: 'IntelliJ',
    },
    {
      title: 'Tomcat',
    },
    {
      title: 'VScode',
    },
    {
      title: 'exBuilder6',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [pl, devops, env, tool],
};

export default skill;
