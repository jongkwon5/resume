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
    {
      title: 'JSP',
    },
  ],
};

const Front: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'React',
    },
    {
      title: 'JavaScript',
    },
    {
      title: 'jQuery',
    },
    {
      title: 'HTML/CSS',
    },
  ],
};

const DB: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'Oracle',
    },
    {
      title: 'MongoDB',
    },
    {
      title: 'MySQL',
    },
  ],
};

const devops: ISkill.Skill = {
  category: 'DevOps & CI/CD',
  items: [
    {
      title: 'Jenkins',
    },
    {
      title: 'GitLab',
    },
  ],
};

const tool: ISkill.Skill = {
  category: 'IDE & Tool',
  items: [
    {
      title: 'IntelliJ',
    },
    {
      title: 'Eclipse',
    },
    {
      title: 'VScode',
    },
    {
      title: 'exBuilder6',
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Git/Github',
    },
    {
      title: 'SVN',
    },
    {
      title: 'Tomcat',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [pl, Front, DB, devops, tool, etc],
};

export default skill;
