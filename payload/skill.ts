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
      title: 'MyBatis/JPA',
    },
    {
      title: 'JSP/Thymeleaf',
    },
    {
      title: 'Python',
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
      title: 'React',
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
      title: 'MSSQL',
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
    {
      title: 'Windows Server (IIS/NSSM)',
    },
    {
      title: 'NHN Cloud',
    },
    {
      title: 'Git/Github',
    },
    {
      title: 'SVN',
    },
  ],
};

const tool: ISkill.Skill = {
  category: 'Tools',
  items: [
    {
      title: 'Tableau',
    },
    {
      title: 'exBuilder6',
    },
    {
      title: 'Tomcat',
    },
    {
      title: 'Uptime Kuma',
    },
    {
      title: 'Prometheus',
    },
    {
      title: 'Grafana',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [pl, Front, DB, devops, tool],
};

export default skill;
