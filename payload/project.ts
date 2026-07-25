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
                '9개 라인 57대 설비(FANUC/HMI, 모드버스/PLC) 대상 3초 주기 알람/설비상태 데이터 수집',
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
                '다수 설비 데이터 동시 유입 상황에서도 집합 단위 일괄 처리 방식으로 처리 지연 없이 안정적 대응',
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
          content: '성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '알람-설비 매핑 건수 651건 → 34,187건 (약 52배 향상)',
            },
            {
              content:
                '9개 라인 57대 설비 대상 실시간 데이터 수집 체계 구축으로 수작업 점검 없이 전 라인 상태 파악 가능',
            },
            {
              content:
                'DB 트리거 기반 자동 기록으로 별도 인력 개입 없이 알람 발생~해지 이력 실시간 관리',
            },
            {
              content:
                'Python 배치 파이프라인 및 React+Spring Boot 대시보드로 데이터 수집부터 시각화까지 전 과정 자동화',
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
                '해외 공장 포함 전 사업장(11개)이 하나의 노후 시스템을 공유 운영, 업무 접근성 저하 및 유지보수 비효율 발생',
            },
            {
              content:
                '차세대 통합 업무 PORTAL로 리뉴얼, 요구사항 정의부터 아키텍처 설계/개발/배포까지 전 과정 리딩',
            },
          ],
        },
        {
          content: '풀스택 아키텍처 구축 (1차 개선)',
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
                '코드 변경 자동 빌드/배포 자동화 프로세스 구축, 배포 속도 개선 및 휴먼 에러 차단',
            },
          ],
        },
        {
          content: '업무 자동화 및 데이터 시각화 확장 (2차 개선)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Tableau를 활용한 데이터 시각화 대시보드 구축 및 사내 시스템(BI/RPA/APPSHEET) 통합 연동',
            },
            {
              content:
                '기존 수작업 캡처/이관으로 관리되던 BI 대시보드 240개 이상을 Python 스크립트 기반 자동 파이프라인으로 전환',
            },
          ],
        },
        {
          content: '성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '신규 시스템 도입 후 사내 설문조사 결과, 기존 노후 시스템 대비 만족도 93% 향상',
            },
            {
              content: '개발/운영 환경 분리 및 배포 자동화로 휴먼 에러 없는 안정적 운영 체계 확보',
            },
            {
              content: 'BI 대시보드 240개 자동 캡처/이관 전환으로 수작업 관리 부담 제거',
            },
            {
              content: '표준 산출물(기획서, ERD, 매뉴얼 등) 수립을 통한 End-to-End 프로세스 정착',
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
          content: '이미지 에디터 업로드 구조 개선 (Base64 → 파일 서버 URL)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'CKEditor의 Base64 인코딩 후 CLOB 저장 구조로 33% 오버헤드에 따른 DB 용량 급증, 직렬화/역직렬화 CPU 부하, 대용량 업로드 시 최대 14.66초 지연되는 병목 발생',
            },
            {
              content:
                '업로드 방식을 파일 서버 URL 기반 아키텍처로 전면 전환, /temp→/post 파일 이동 로직 구축 및 Crontab 기반 잔여 파일 자동 정리 도입',
            },
          ],
        },
        {
          content: '대용량 엑셀 다운로드 쿼리 최적화 (1차 개선)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'XSSFWorkbook 사용 시 Heap 메모리 4GB 이상 급증으로 OOM/Timeout 반복 발생, N+1 쿼리로 DB I/O 1만 회 이상 발생, 처리 시간 146초까지 증가',
            },
            {
              content: 'For-loop 기반 개별 조회를 제거하고 JOIN 기반 단일 쿼리로 전면 리팩토링',
            },
          ],
        },
        {
          content: 'XSSF → SXSSF 스트리밍 전환 (2차 개선)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'SXSSFWorkbook 도입으로 일정 Row만 메모리에 유지하고 나머지는 실시간 flush 처리하는 구조로 전환',
            },
            {
              content: 'flush된 Row 재작성 오류 해결, 조회는 XSSF, 작성은 SXSSF로 역할 분리',
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
              content: 'FK 인덱스 추가 및 불필요한 조인 제거',
            },
          ],
        },
        {
          content: '성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'DB 저장 공간 절감: 단일 이미지(705KB) 기준 약 1/5,700, 5장 기준 약 1/6,000 감소',
            },
            {
              content: '업로드 속도 개선: 대용량(8.72MB × 5개) 14.66초 → 23.7ms (약 600배)',
            },
            {
              content:
                '엑셀 생성 시간 146초 → 27초 (81.5% 단축), 최대 메모리 사용량 2,250MB → 750MB (66% 감소)',
            },
            {
              content:
                'DB I/O 횟수 1만 회 이상 → 수십 회 수준으로 감소, CPU 사용률 55% 이상 → 10% 이하로 안정화',
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
              content: '중복 등록 검증 및 입력값 유효성 검사(클라이언트/서버)로 데이터 품질 확보',
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
              content:
                'Spring AOP 기반 Aspect/Advice 활용해 API 호출 로깅 및 성능(메서드 실행 시간) 측정 자동화',
            },
          ],
        },
        {
          content: '성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'SSE 기반 실시간 대시보드로 장비 현황을 한 곳에서 통합 파악 가능한 모니터링 체계 구축',
            },
            {
              content:
                '확장 가능한 화면 구조 설계로 향후 CPU/Memory/Disk 등 지표 추가 시 별도 개편 없이 반영 가능',
            },
            {
              content: '중복 등록 검증 및 유효성 검사 체계로 장비 데이터 품질 확보',
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
              content: '총 85개 화면 신규 개발 (기존 55개 대비 52% 확장)',
            },
            {
              content:
                'Spring Framework, Java, MyBatis를 활용한 백엔드 로직 및 Oracle 데이터베이스 연동 개발',
            },
            {
              content:
                '학생 및 교직원의 사용 편의성을 고려한 UI/UX 설계 및 JavaScript, exBuilder6 기반의 화면 개발',
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
              content:
                '시간표 조회 기능 개선: 요일/시간대 필터 기능 신규 도입으로 조회 UI 및 학생 사용 편의성 향상',
            },
            {
              content:
                '강사료 계산 정확도 향상: 강사 구분 및 시수 반영 오류 발생 → CASE문 및 서브쿼리 적용으로 계산 정확도 향상',
            },
          ],
        },
        {
          content: '성능 최적화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '기존 LEFT OUTER JOIN 방식으로 조회 속도 저하 발생, WITH 절 기반 사전 데이터 가공 후 조회로 개선',
            },
            {
              content: '불필요한 반복 JOIN을 줄이고 단일 WITH 절에서 필요한 데이터만 추출',
            },
          ],
        },
        {
          content: '성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '총 85개 화면 신규 개발로 기존 대비 52% 화면 확장, 학사/강사료 관리 파트 풀스택 구축 완료',
            },
            {
              content: '사용자 피드백 40건 이상 반영으로 시간표 조회/강사료 계산 등 실사용성 개선',
            },
            {
              content:
                '50만 건 이상의 강의평가결과 데이터 분석 속도 20% 단축 (10초 이상 → 7초 이내)',
            },
            {
              content: '개발 가이드 및 사용자 메뉴얼 문서화로 유지보수성 및 사용자 지원 체계 확보',
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
