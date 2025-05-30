import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '국립 금오공과대학교 종합정보시스템 웹 개발',
      startedAt: '24-05-23',
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
          content: '[Skill Keywords]',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Java(8), JavaScript, Spring, Oracle, MyBatis, exBuilder6, Eclipse(4.5), SVN',
            },
          ],
        },
        {
          content: 'Website : https://onekit.kumoh.ac.kr',
          href: 'https://onekit.kumoh.ac.kr',
        },
      ],
    },
    {
      title: '전국 지역 축제 소개 및 축제 동행 매칭 서비스 - TT',
      startedAt: '23-07-25',
      endedAt: '23-09-03',
      where: '5인 팀 프로젝트 [담당 - 메인 페이지/채팅방 목록/실시간 채팅 풀스택 개발]',
      descriptions: [
        {
          content: '',
          postImage:
            'https://user-images.githubusercontent.com/137694287/274751989-89d277e0-a918-4be8-9790-0a06d1929184.gif',
        },
        {
          content: '실시간 채팅 기능 구현 (WebSocket)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Spring WebSocket을 이용한 양방향 통신으로 실시간 채팅 기능 구현',
            },
            {
              content:
                '사용자 입/퇴장 알림, 귓속말 기능, 채팅방 공개/비공개 설정 등 채팅 비즈니스 로직 처리',
            },
          ],
        },
        {
          content: 'UI/UX 및 메인 페이지 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'HTML/CSS, JavaScript로 메인 페이지 및 채팅방 목록 페이지 개발',
            },
            {
              content: 'Swiper API를 활용해 메인 페이지에 이미지 슬라이드 구현',
            },
          ],
        },
        {
          content: '채팅 비즈니스 로직 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '사용자 입/퇴장 알림',
              descriptions: [
                {
                  content:
                    '사용자가 입장 또는 퇴장할 때 서버에서 해당 정보를 감지하고, 모든 참여자에게 실시간으로 알림을 보냅니다.',
                },
              ],
            },
            {
              content: '귓속말',
              descriptions: [
                {
                  content:
                    '귓속말을 통해 해당 채팅방 내 특정 사용자에게 개인 메시지를 보낼 수 있습니다.',
                },
              ],
            },
            {
              content: '채팅방 생성',
              descriptions: [
                {
                  content: '사용자가 지역을 선택하여 공개 또는 비공개 채팅방을 생성할 수 있습니다.',
                },
              ],
            },
          ],
        },
        {
          content: '데이터베이스 연동 및 관리',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'MyBatis를 이용한 채팅방 목록 CRUD 기능 개발',
            },
            {
              content: 'MySQL 기반의 DB 설계 및 연동을 통해 채팅방 정보 관리',
            },
          ],
        },
        {
          content: '[트러블 슈팅 사례]',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '귓속말 기능이 정상 작동하지 않던 문제 해결',
              descriptions: [
                {
                  content: '원인 : 메시지 파싱 과정에서 잘못된 구분 처리',
                },
                {
                  content:
                    '해결 : startsWith("/w") 조건으로 메시지 유형을 분리하고, split()을 이용해 수신자와 내용을 정확히 분리',
                },
              ],
            },
            {
              content: 'MyBatis 쿼리 실행 순서 문제',
              descriptions: [
                {
                  content: '원인 : insert 쿼리 실행 전에 필요한 파라미터가 제대로 전달되지 않음',
                },
                {
                  content:
                    '해결 : < selectKey > 태그를 활용해 선행 쿼리를 먼저 실행하여 필요한 값을 확보',
                },
              ],
            },
            {
              content: '채팅방 접속 알림 중복 전송 문제',
              descriptions: [
                {
                  content: '원인 : 클라이언트 루프 처리 시 본인에게도 메시지가 전송됨',
                },
                {
                  content:
                    '해결 : if (!session.getId().equals(targetSession.getId())) 조건 추가로 본인을 제외한 사용자에게만 전송',
                },
              ],
            },
          ],
        },
        {
          content: '[Skill Keywords]',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Java(11), JavaScript, Spring(5.0.7), MySQL, MyBatis, IntelliJ, Git',
            },
          ],
        },
        {
          content: 'Github : https://github.com/jongkwon5/TravelTogether',
          href: 'https://github.com/jongkwon5/TravelTogether',
        },
      ],
    },

    {
      title: '가상의 Entertainment Company',
      startedAt: '23-06-07',
      endedAt: '23-07-10',
      where: '개인 프로젝트 [아티스트 소개/게시판/로그인/회원가입 등 풀스택 개발]',
      descriptions: [
        {
          content: 'http://www.riss.kr/link?id=T14771241',
          postImage:
            'https://user-images.githubusercontent.com/137694287/270162201-967fc049-04ba-41c9-b871-0c795b8911d4.gif',
        },
        {
          content: 'UI/UX 및 프론트엔드 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'HTML/CSS, JavaScript, Bootstrap를 활용하여 메인 페이지, 회사 및 아티스트 소개, 로그인/회원가입, 게시판 등 페이지 구성',
            },
            {
              content:
                'Swiper API, Kakao 지도 API, fullPage.js, Slick.js 등 다양한 외부 라이브러리를 활용하여 시각적 효과 및 사용자 편의성 강화',
            },
          ],
        },
        {
          content: '게시판 기능 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'MyBatis를 활용해 게시글 등록/수정/삭제 및 페이징 기능 구현',
            },
            {
              content:
                '댓글 수정/삭제 기능은 AJAX를 이용해 비동기 방식으로 처리하여 사용자 경험 향상',
            },
          ],
        },
        {
          content: '회원 인증 및 유효성 검사',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '세션 기반 로그인/회원가입 기능 구현',
            },
            {
              content:
                '아이디 중복 검사 등 유효성 검사를 AJAX로 처리하여 실시간 확인 가능하게 구현',
            },
          ],
        },
        {
          content: '설계 아키텍처',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Spring MVC(Model2) 아키텍처 기반 설계 및 구현, 역할별 책임을 분리하여 유지보수성과 확장성 고려',
            },
          ],
        },
        {
          content: '[트러블 슈팅 사례]',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'AJAX 댓글 수정 기능 오류',
              descriptions: [
                {
                  content:
                    '원인 : AJAX 요청 시 URL 경로 및 전송 방식 설정 오류로 인해 서버에서 요청을 정상 처리하지 못함',
                },
                {
                  content:
                    '해결 : JSTL < c:url > 태그로 정확한 경로 지정 및 POST 방식 설정을 통해 문제 해결',
                },
              ],
            },
            {
              content: '게시판 검색 결과 목록 오류',
              descriptions: [
                {
                  content:
                    '원인 : MyBatis 동적 SQL 처리 시 WHERE 절 조건 추가가 제대로 작동하지 않음',
                },
                {
                  content:
                    '해결 : < if > 태그를 활용해 검색 조건에 따라 WHERE 절이 유동적으로 추가되도록 쿼리 수정',
                },
              ],
            },
            {
              content: 'Kakao 지도 스크롤 오류',
              descriptions: [
                {
                  content:
                    '원인 : fullPage.js를 적용한 페이지에서 Kakao 지도 위에서 마우스 휠을 사용할 경우, 지도가 확대/축소되지 않고 페이지 전체가 스크롤되는 문제가 발생함',
                },
                {
                  content:
                    '해결 : fullPage.js의 normalScrollElements 옵션에 지도 영역의 id를 추가하여 해당 영역에서는 페이지 스크롤 대신 지도의 고유 스크롤 기능이 작동하도록 설정함',
                },
              ],
            },
          ],
        },
        {
          content: '[Skill Keywords]',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Java(11), JavaScript, Spring(5.0.7), MySQL, MyBatis, IntelliJ, Git',
            },
          ],
        },
        {
          content: 'Github : https://github.com/jongkwon5/Entertainment',
          href: 'https://github.com/jongkwon5/Entertainment',
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
