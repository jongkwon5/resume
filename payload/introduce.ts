import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  top1: '기술로 가치를 만들고, 성과로 증명하는 개발자',
  top2: '솔선수범하는 개발자',
  content1:
    '웹 서비스 전반을 아우르는 풀스택 개발자로서 Java, Spring, MyBatis, JPA, React 등 다양한 기술을 다루며 사용자 중심의 개발을 실천해왔습니다. 국립 금오공과대학교 종합정보시스템 프로젝트에서는 학사·강사료 관리 파트 개발을 주도하여 85개의 신규 화면을 개발(52% 확장)하고, 50만 건 이상의 대용량 데이터 처리 성능을 20% 개선하는 성과를 거두었습니다. 또한, 사용자 피드백 40여 건을 적극적으로 반영해 시스템의 안정성과 사용자 만족도를 높였습니다. 개발 과정에서 문서화와 사용자 가이드 작성에도 힘써 시스템 유지보수와 품질 향상에 기여했습니다. CI/CD(Jenkins, GitLab) 환경을 통한 자동화 경험과 협업 능력까지 갖춘 개발자로서 기술을 넘어 비즈니스 성과까지 책임지는 자세로 성장하고자 합니다.',
  content2:
    '누구나 힘들거나 번거로운 일을 피하고 싶어 합니다. 그러나 그런 순간에도 반드시 누군가는 해야 하는 일이 있다면 망설이지 않고 내가 먼저 움직여야 한다고 생각합니다. 작은 불편함이라도 먼저 해결해 나가면 결국 팀 전체가 더 나은 방향으로 나아갈 수 있기 때문입니다. 따라서 앞으로도 불편한 일을 외면하지 않고 먼저 해결하는 자세로 더 나은 시스템을 만들어가는 개발자가 되고자 합니다.',
  sign: 'Jongkwon Park',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
  top3: '',
  content3: '',
};

export default introduce;
