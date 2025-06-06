import profile from './profile';
import introduce from './introduce';
import skill from './skill';
import experience from './experience';
import openSource from './openSource';
import project from './project';
import sideproject from './sideproject';
import education from './education';
import article from './article';
import certification from './certification';
import etc from './etc';
import footer from './footer';

import { _global } from './_global';

import { IProfile } from '../component/profile/IProfile';
import { IIntroduce } from '../component/introduce/IIntroduce';
import { ISkill } from '../component/skill/ISkill';
import { IOpenSource } from '../component/openSource/IOpenSource';
import { IExperience } from '../component/experience/IExperience';
import { IProject } from '../component/project/IProject';
import { ISideProject } from '../component/sideproject/ISideProject';
import { ICertification } from '../component/certification/ICertification';
import { IEducation } from '../component/education/IEducation';
import { IEtc } from '../component/etc/IEtc';
import { IFooter } from '../component/footer/IFooter';
import { IGlobal } from '../component/common/IGlobal';
import { IArticle } from '../component/article/IArticle';

const Payload: Payload = {
  profile,
  introduce,
  skill,
  openSource,
  experience,
  project,
  sideproject,
  // presentation,
  article,
  education,
  certification,
  etc,
  footer,
  _global,
};

interface Payload {
  profile: IProfile.Payload;
  introduce: IIntroduce.Payload;
  skill: ISkill.Payload;
  openSource: IOpenSource.Payload;
  experience: IExperience.Payload;
  project: IProject.Payload;
  sideproject: ISideProject.Payload;
  // presentation: ICertification.Payload;
  education: IEducation.Payload;
  article: IArticle.Payload;
  etc: IEtc.Payload;
  footer: IFooter.Payload;
  certification: ICertification.Payload;
  _global: IGlobal.Payload;
}

export default Payload;
