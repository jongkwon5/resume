import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '서울기록원 디지털 아카이브 관리 시스템 고도화',
      startedAt: '25-07-01',
      endedAt: '',
      where: '(주)라인업코리아',
      descriptions: [
        {
          content: '',
          postImage:
            'https://github.com/user-attachments/assets/a072f4c1-48f6-4316-8b54-11fc33158a07',
        },
        {
          content: '에디터 업로드 구조 개선 (Base64 → 파일서버/URL)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '기존 CLOB + Base64UploadAdapter 방식으로 DB에 이미지 데이터를 직접 저장하던 구조를 개선',
            },
            {
              content: '이미지 Base64 저장 방식을 파일 서버 기반 URL 참조 구조로 변경',
            },
            {
              content: 'DB 저장 공간 절감',
              descriptions: [
                {
                  content: '단일 이미지(705KB) 저장 용량 0.919MB → 0.00016MB (약 1/5,700 감소)',
                },
                {
                  content: '5장 기준 4.59MB → 0.00076MB (약 1/6,000 감소)',
                },
              ],
            },
            {
              content: '업로드 성능 개선',
              descriptions: [
                {
                  content: '대용량(8.72MB × 5개) 업로드 시간 14.66초 → 23.7ms (약 600배 개선)',
                },
              ],
            },
            {
              content: '네트워크 효율 향상',
              descriptions: [
                {
                  content:
                    'Base64 대비 전송 크기 33% 절감, 브라우저 캐시 활용으로 재조회 속도 향상',
                },
              ],
            },
          ],
        },
        {
          content: '대용량 엑셀 다운로드 최적화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '기존 XSSFWorkbook 사용으로 OOM 및 응답 지연 발생',
            },
            {
              content: '쿼리 구조 개선 (1차 개선)',
              descriptions: [
                {
                  content:
                    'for-loop 기반 개별 조회 제거, UUID 리스트를 900개 단위로 IN 절 일괄 조회',
                },
                {
                  content: '스칼라 서브쿼리 제거 및 JOIN 단일 쿼리 리팩터링',
                },
                {
                  content: '엑셀 생성 시간 146초 → 27초 (81.5% 단축)',
                },
              ],
            },
            {
              content: 'XSSF → SXSSF 전환 (2차 개선)',
              descriptions: [
                {
                  content:
                    'SXSSFWorkbook 적용으로 일정 Row 단위만 메모리에 유지, 나머지는 디스크로 flush',
                },
                {
                  content: 'flush된 Row 재작성 오류 해결 → createRow()를 append 방식으로 수정',
                },
              ],
            },
            {
              content: '성능 개선 효과',
              descriptions: [
                {
                  content: '파일 생성 시간 121초 → 19초 (84% 단축)',
                },
                {
                  content: '메모리 사용량 4GB → 500MB (약 88% 절감)',
                },
                {
                  content: 'DB I/O 횟수 1만 회 이상 → 수십 회 수준으로 감소',
                },
                {
                  content: 'CPU 사용률 55% → 10% 이하 안정화',
                },
              ],
            },
          ],
        },
        {
          content: '전거 등록부 고도화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '다중 조인 병목 해소를 위한 SQL 리팩터링 및 인덱스 구조 재설계',
            },
            {
              content: 'FK 인덱스 추가 및 불필요한 조인 제거로 쿼리 속도 개선',
            },
            {
              content: '수십만 건 조회에서도 안정적 응답 속도 확보',
            },
          ],
        },
        {
          weight: 'BOLDER',
          content: 'Skill Keywords',
          skillKeywords: [
            'Java',
            'JavaScript',
            'Spring',
            'Oracle',
            'JPA',
            'MyBatis',
            'Jenkins',
            'Git/Github',
            'GitLab',
            'intelliJ',
          ],
        },
      ],
    },
    {
      title: 'Rainbow 통합 모니터링 솔루션 개발',
      startedAt: '25-06-01',
      endedAt: '25-09-01',
      where: '(주)라인업코리아',
      descriptions: [
        {
          content: '',
          postImage:
            'https://github.com/user-attachments/assets/d511179d-6106-4335-86c4-9be62c471da8',
        },
        {
          content: '실시간 모니터링 지표 제공 및 사용자 중심 대시보드 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'DB에 등록된 장비 목록 및 상태를 기반으로 현황 대시보드 구현',
            },
            {
              content:
                '향후 모니터링 지표(CPU, Memory, Disk 등) 확장을 고려한 유연한 화면 구조 설계',
            },
            {
              content: 'SSE 기반 실시간 반영 + 직관적 시각화를 통해 관리 사용 편의성 향상',
            },
          ],
        },
        {
          content: '장비 등록 관리(관리자 화면)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '모니터링 장비의 효율적인 등록 및 관리를 위한 UI/UX 설계 및 구현',
            },
            {
              content: ' 중복 등록 검증 및 입력값 유효성 검사(클라이언트/서버)로 데이터 품질 확보',
            },
          ],
        },
        {
          content: '서비스 간 REST API 연동 및 AOP 기반 공통 기능 모듈화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '장비 정보 조회를 위한 REST API 엔드포인트 설계',
            },
            {
              content: 'Spring AOP 기반 Aspect/Advice 활용',
              descriptions: [
                {
                  content: 'API 호출 로깅 및 성능(메서드 실행 시간) 측정 자동화',
                },
                {
                  content: '공통 로직 분리로 성능 병목 구간 식별 및 유지보수성 향상',
                },
              ],
            },
          ],
        },
        {
          content: 'Git 컨벤션/배포 가이드 표준화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Git Commit 메시지 및 Branch 전략 등 Git 컨벤션 규칙 수립 및 문서화',
            },
            {
              content: '시스템의 안정적 운영과 원활한 인수인계를 위한 설치/배포 가이드 작성',
            },
          ],
        },
        {
          weight: 'BOLDER',
          content: 'Skill Keywords',
          skillKeywords: [
            'Java',
            'JavaScript',
            'Spring',
            'MySQL',
            'JPA',
            'Docker',
            'Jenkins',
            'Git/Github',
            'GitLab',
            'intelliJ',
          ],
        },
      ],
    },
    {
      title: '국립 금오공과대학교 종합정보시스템 웹 개발',
      startedAt: '24-05-01',
      endedAt: '25-02-10',
      where: '(주)아카넷 서울지사',
      descriptions: [
        {
          content: '',
          postImage:
            'https://github.com/user-attachments/assets/9cc6fd68-9432-4e88-9903-f4432c3dce59',
        },
        {
          content: '종합정보시스템 학사(수업) 및 강사료 관리 파트 풀스택 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: ' 총 85개 화면 신규 개발 (기존 55개 대비 52% 확장)',
            },
            {
              content:
                ' Spring Framework, Java, MyBatis를 활용한 백엔드 로직 및 Oracle 데이터베이스 연동 개발 담당',
            },
            {
              content:
                ' 학생 및 교직원의 사용 편의성을 고려한 UI/UX 설계 및 JavaScript, exBuilder6 기반의 화면 개발',
            },
          ],
        },
        {
          content: '사용자 요구사항 반영 및 시스템 기능 개선',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '별도 피드백 사이트를 통해 40건 이상의 개선 요청 사항 수집 및 반영',
            },
            {
              content: '학생 시간표 조회 기능 개선',
              descriptions: [
                {
                  content:
                    '요일/시간대 필터 기능 신규 도입 → 조회 UI 개선 및 학생 사용 편의성 향상',
                },
              ],
            },
            {
              content: '강사료 계산 정확도 향상',
              descriptions: [
                {
                  content:
                    '강사 구분 및 시수 반영 오류 발생 → CASE문 및 서브쿼리 적용으로 계산 정확도 향상',
                },
              ],
            },
          ],
        },
        {
          content: '성능 최적화 및 효율적인 개발 프로세스 적용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '50만 건 이상의 강의평가결과 데이터를 처리하며 분석 속도 20% 단축 (10초 이상 → 7초 이내)',
              descriptions: [
                {
                  content: '기존 LEFT OUTER JOIN 방식으로 인해 조회 속도 저하 문제 발생',
                },
                {
                  content: 'WITH 절을 활용하여 사전 데이터 가공 후, 조회하도록 개선',
                },
                {
                  content:
                    '불필요한 반복 JOIN을 줄이고 단일 WITH 절에서 필요한 데이터만 추출하여 성능 최적화',
                },
              ],
            },
          ],
        },
        {
          content: '문서화 및 사용자 가이드 작성',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '신규 기능 개발 가이드 및 사용 메뉴얼 문서화',
              descriptions: [
                {
                  content:
                    '추후 유지보수를 고려하여 주요 기능의 설계 의도, 로직 흐름 등을 정리한 개발 문서 작성',
                },
                {
                  content:
                    '학생 및 교직원을 위한 사용자 메뉴얼 작성에 참여하여 실제 사용자 대상 기능 설명 자료 제공',
                },
              ],
            },
          ],
        },
        {
          weight: 'BOLDER',
          content: 'Skill Keywords',
          skillKeywords: [
            'Java',
            'JavaScript',
            'Spring',
            'Oracle',
            'MyBatis',
            'exBuilder6',
            'SVN',
            'Eclipse',
          ],
        },
        {
          content: 'https://onekit.kumoh.ac.kr',
          href: 'https://onekit.kumoh.ac.kr',
        },
      ],
    },

    // {
    //   title: 'Lorem ipsum Project',
    //   startedAt: '2016-10',
    //   endedAt: '2017-11',
    //   where: 'Bar Co., LTD.',
    //   descriptions: [
    //     { content: 'Hello Everyone' },
    //     {
    //       content: 'Launched Bar Service in 2018',
    //       weight: 'MEDIUM',
    //       descriptions: [
    //         { content: 'Suspendisse vestibulum odio id libero facilisis gravida' },
    //         {
    //           content: 'In ipsum est, pellentesque vestibulum tortor eu, bibendum imperdiet metus',
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

export default project;
