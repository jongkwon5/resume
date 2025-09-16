import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  top1: '기술로 가치를 만들고, 성과로 증명하는 개발자',
  top2: '',
  top3: '솔선수범하는 개발자',
  content1:
    '기술로 비즈니스 가치를 만들고 성과로 증명하는 2년 차 풀스택 개발자입니다. 지난 1년 3개월간 SI 프로젝트에서 요구사항 분석부터 배포까지 전 과정을 수행하며 문제 해결 역량을 다졌습니다. 특히 국립 금오공과대학교 종합정보시스템 프로젝트에서는 학사·강사료 관리 파트 개발을 주도하며 신규 화면 85개를 구현(시스템 52% 확장)하고, 50만 건 이상 대용량 데이터의 처리 성능을 20% 개선했으며, 사용자 피드백 40여 건을 반영해 안정성과 만족도를 높이는 핵심적인 역할을 수행했습니다. 또한 체계적인 문서화와 사용자 가이드 작성을 통해 유지보수 효율성과 품질 향상에 기여했습니다.',
  content2:
    '이러한 경험을 바탕으로 현재는 솔루션 개발자로서, 단순히 요구사항을 구현하는 것을 넘어 클라이언트의 비즈니스 가치를 최우선으로 고려하고 있습니다. Java, Spring, JPA 등 백엔드 기술과 프론트엔드 역량을 종합적으로 활용하여 상품성 있는 솔루션을 능동적으로 설계·개발합니다. 특히 Jenkins, GitLab, Docker 기반의 CI/CD 자동화 환경을 직접 구축·운영하며 개발부터 배포까지 전 과정의 효율성과 일관성을 크게 높인 경험이 있습니다.',
  content3:
    '누구나 힘들거나 번거로운 일을 피하고 싶어 합니다. 그러나 그런 순간에도 반드시 누군가는 해야 하는 일이 있다면 망설이지 않고 내가 먼저 움직여야 한다고 생각합니다. 작은 불편함이라도 먼저 해결해 나가면 결국 팀 전체가 더 나은 방향으로 나아갈 수 있기 때문입니다. 따라서 앞으로도 불편한 일을 외면하지 않고 먼저 해결하는 자세로 더 나은 시스템을 만들어가는 개발자가 되고자 합니다.',
  sign: 'Jongkwon Park',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
