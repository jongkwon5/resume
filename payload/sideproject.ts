import { ISideProject } from '../component/sideproject/ISideProject';

const project: ISideProject.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '전국 축제 소개 & 동행 매칭 플랫폼 - TT',
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
                    '사용자가 입/퇴장시 서버에서 해당 정보를 감지하고, 모든 참여자에게 실시간으로 알림을 보냅니다.',
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
          weight: 'BOLDER',
          content: 'Skill Keywords',
          skillKeywords: [
            'Java',
            'JavaScript',
            'Spring',
            'MySQL',
            'MyBatis',
            'Git/Github',
            'IntelliJ',
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
          weight: 'BOLDER',
          content: 'Skill Keywords',
          skillKeywords: [
            'Java',
            'JavaScript',
            'Spring',
            'MySQL',
            'MyBatis',
            'Git/Github',
            'IntelliJ',
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
