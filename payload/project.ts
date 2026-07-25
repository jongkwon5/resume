import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '설비 알람 관리 시스템 개발',
      startedAt: '26-05-08',
      endedAt: '',
      where: '(주)명화공업',
      descriptions: [
        {
          content: '',
          postImage:
            'https://github.com/user-attachments/assets/b8146d6a-0993-49ff-8649-792c7e4d7917',
        },
        {
          content: '실시간 데이터 수집 체계 구축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '9개 라인 57대 설비(FANUC/HMI, 모드버스/PLC) 대상 3초 주기 알람·설비상태 데이터 수집',
            },
            {
              content:
                '단순 수집 데이터만으로는 알람 발생~해지 시점 추적 및 정지 원인 구분이 불가능한 문제 존재',
            },
          ],
        },
        {
          content: '알람 이력 자동화 로직 설계 (1차 개선)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'DB 트리거 기반 상태 비교 로직 설계로 알람 발생~해지 이력을 실시간 자동 기록',
            },
            {
              content:
                '다수 설비 데이터가 동시에 들어오는 상황을 고려해 집합 단위 일괄 처리 방식으로 설계, 처리 지연 없이 안정적으로 대응',
            },
          ],
        },
        {
          content: '알람-설비상태 매칭 정확도 개선 (2차 개선)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '알람과 설비상태 시점 간 ±5초 시차로 매칭률이 2%(651건)에 불과했던 문제 확인',
            },
            {
              content: '사전 집계 및 시간 윈도우 매핑 구조로 전환하여 매칭 로직 재설계',
            },
            {
              content:
                '현장 방문을 통해 실제 설비 동작과 데이터 대조 검증, 매핑 오류 다수 발견 및 수정',
            },
          ],
        },
        {
          content: '성능 개선 효과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '알람-설비 매핑 건수 651건 → 34,187건 (약 52배 향상)',
            },
            {
              content:
                'Python 기반 배치 수집 파이프라인 구축으로 운영 개입 없는 데이터 최신성 유지',
            },
            {
              content: 'React + Spring Boot 기반 웹 대시보드로 라인/설비별 알람 발생 현황 시각화',
            },
          ],
        },
        {
          weight: 'BOLDER',
          content: 'Skill Keywords',
          skillKeywords: [
            'Java',
            'JavaScript',
            'Python',
            'React',
            'Spring',
            'MSSQL',
            'MyBatis',
            'Jenkins',
            'Git/Github',
          ],
        },
      ],
    },
    {
      title: '글로벌 전사 통합 비즈니스 PORTAL 구축 및 고도화',
      startedAt: '26-01-26',
      endedAt: '26-05-07',
      where: '(주)명화공업',
      descriptions: [
        {
          content: '',
          postImage:
            'https://github.com/user-attachments/assets/ff79b2bc-4225-47e1-9aa5-28431469759b',
        },
        {
          content: '노후 시스템 분석 및 리뉴얼 배경',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '해외 공장을 포함한 전 사업장(11개)에서 노후화된 개별 시스템을 각자 운영 중이라, 업무 접근성 저하 및 유지보수 비효율 문제 존재',
            },
            {
              content:
                '차세대 통합 업무 PORTAL로의 리뉴얼을 요구사항 정의부터 아키텍처 설계, 개발, 배포까지 전 과정 단독 리딩',
            },
          ],
        },
        {
          content: '풀스택 아키텍처 구축 (1차)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Java/Spring Boot 기반 풀스택 시스템 구축 및 IIS 서버 배포',
            },
            {
              content: '개발/운영 멀티 환경 분리 및 환경별 DB 격리를 통한 시스템 안정성 확보',
            },
            {
              content:
                '코드 변경 사항의 자동 빌드 및 배포 자동화 프로세스를 구축하여 배포 속도 개선 및 휴먼 에러 차단',
            },
          ],
        },
        {
          content: '업무 자동화 및 데이터 시각화 확장 (2차)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Tableau를 활용한 데이터 시각화 대시보드 구축 및 사내 시스템(BI·RPA·APPSHEET) 통합 연동',
            },
            {
              content:
                '기존 240개 이상의 BI 대시보드가 수작업 캡처·이관으로 관리되던 것을, Python 스크립트 기반 자동 캡처·이관 파이프라인으로 전환',
            },
          ],
        },
        {
          content: '성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '표준 산출물(기획서, ERD, 매뉴얼 등) 수립을 통한 End-to-End 프로세스 정착',
            },
            {
              content:
                '신규 시스템 도입 후 사내 설문조사 결과, 기존 노후 시스템 대비 만족도 93% 향상',
            },
          ],
        },
        {
          weight: 'BOLDER',
          content: 'Skill Keywords',
          skillKeywords: [
            'Java',
            'JavaScript',
            'Python',
            'Spring',
            'MSSQL',
            'MyBatis',
            'Tableau',
            'Jenkins',
            'Git/Github',
            'Prometheus',
            'Grafana',
          ],
        },
      ],
    },
    {
      title: '서울기록원 디지털 아카이브 관리 시스템 고도화',
      startedAt: '25-07-01',
      endedAt: '26-01-09',
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
                '기존 CLOB + Base64 방식으로 인해 DB 용량 폭증 및 대용량 이미지 업로드 시 14.66초의 지연 발생',
            },
            {
              content: '이미지 에디터 업로드 구조를 Base64 → 파일 서버 URL 기반으로 전면 개편',
            },
            {
              content: 'DB 저장 공간 절감',
              descriptions: [
                {
                  content: '단일 이미지(705KB) 기준 0.919MB → 0.00016MB (약 1/5,700 감소)',
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
              content: '운영 안정성 확보',
              descriptions: [
                {
                  content:
                    '/temp → /post 파일 이동 구조 구현 및 잔여 파일 누적 문제 해결을 위한 Crontab 자동 삭제 도입',
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
                  content: 'N+1 Query 제거 및 JOIN 기반 단일 쿼리로 리팩토링',
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
                  content: '최대 메모리 사용량 약 2,250MB → 약 750MB (66% 절감)',
                },
                {
                  content: 'DB I/O 횟수 1만 회 이상 → 수십 회 수준으로 감소',
                },
                {
                  content: 'CPU 사용률 55% 이상 → 10% 이하 안정화',
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
              content: '다중 조인 병목 해소를 위한 SQL 리팩토링 및 인덱스 구조 재설계',
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
          ],
        },
        {
          content: 'https://archives.seoul.go.kr',
          href: 'https://archives.seoul.go.kr',
        },
      ],
    },
    {
      title: 'Rainbow 통합 모니터링 솔루션 개발',
      startedAt: '25-06-01',
      endedAt: '25-10-01',
      where: '(주)라인업코리아',
      descriptions: [
        {
          content: '',
          postImage:
            'https://github.com/user-attachments/assets/12a841a7-97cd-4d84-b117-10b760fb5f84',
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
              content: 'Swagger API를 활용하여 API 문서화 및 테스트 환경 구축',
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
          ],
        },
      ],
    },
    {
      title: '국립 금오공과대학교 종합정보시스템 웹 개발',
      startedAt: '24-04-01',
      endedAt: '25-02-10',
      where: '(주)아카넷',
      descriptions: [
        {
          content: '',
          postImage:
            'https://github.com/user-attachments/assets/e653f4a4-440b-4628-b846-159fccc215c6',
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
          skillKeywords: ['Java', 'JavaScript', 'Spring', 'Oracle', 'MyBatis', 'exBuilder6', 'SVN'],
        },
        {
          content: 'https://onekit.kumoh.ac.kr',
          href: 'https://onekit.kumoh.ac.kr',
        },
      ],
    },
  ],
};

export default project;
