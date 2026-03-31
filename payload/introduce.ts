import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  top1: '기술로 비즈니스 병목을 해결합니다.',
  top2: '',
  top3: '',
  top4: '아무도 하지 않는 일에서 핵심 가치를 만듭니다.',
  content1:
    '요구사항 분석부터 배포, 운영까지 전 과정을 주도하며 시스템의 근본적인 효율을 극대화하는 데 집중합니다.',
  content2:
    '국립금오공과대학교 프로젝트에서 학사 관리 파트를 전담하여 85개의 신규 화면을 구축하고 대용량 쿼리 튜닝으로 시스템 안정성을 확보했습니다. 이후 라인업코리아에서 SSE 기반 실시간 모니터링 솔루션을 개발했으며, 서울기록원 고도화 프로젝트에서는 파일 처리 방식 전환과 메모리 구조 개선 등 아키텍처 리팩토링을 주도하여 시스템 성능을 혁신적으로 최적화했습니다.',
  content3:
    '최근 명화공업에서는 글로벌 전사 통합 Portal, 연구소 관리 시스템 개발을 기획부터 운영까지 단독 리딩하며, 직관적인 UI/UX 및 기능 고도화를 통해 사용자 만족도를 기존 대비 93% 향상시키는 실질적인 비즈니스 성과를 창출하고 있습니다.',
  content4:
    '팀 내 비효율이나 기술 부채를 발견하면 즉시 뛰어들어 해결책을 제시합니다. 파편화된 코드 구조를 표준화하고, 반복되는 수작업을 스크립트로 자동화하며, 누락된 기술 문서를 정립하는 등 "작은 불편함의 개선"이 팀 전체의 생산성과 서비스 품질 향상으로 직결됨을 실제 성과로 증명해 왔습니다.',
  content5:
    '누구나 번거로워하는 일일지라도 시스템에 반드시 필요하다면 가장 먼저 움직여 해결합니다. 이러한 책임감을 바탕으로 단순한 기능 구현을 넘어, 팀과 서비스가 지속 가능하게 성장할 수 있는 탄탄한 기술 기반을 구축하고 있습니다.',
  sign: 'Jongkwon Park',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
