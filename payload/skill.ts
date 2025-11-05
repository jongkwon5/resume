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
      title: 'MySQL',
    },
  ],
};

const devops: ISkill.Skill = {
  category: 'DevOps & CI/CD',
  items: [
    {
      title: 'Docker',
    },
    {
      title: 'Jenkins',
    },
    {
      title: 'GitLab',
    },
  ],
};

const Version: ISkill.Skill = {
  category: 'Version Control',
  items: [
    {
      title: 'Git/Github',
    },
    {
      title: 'SVN',
    },
  ],
};

const tool: ISkill.Skill = {
  category: 'IDE & Tools',
  items: [
    {
      title: 'IntelliJ',
    },
    {
      title: 'Eclipse',
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
      title: 'Tomcat',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [pl, Front, DB, devops, Version, tool, etc],
};

export default skill;
