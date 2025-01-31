import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '국립금오공과대학교 종합정보시스템 웹 개발',
      startedAt: '24-06-23',
      endedAt: '25-02-10',
      where: '(주)아카넷 서울지사',
      descriptions: [
        {
          content: '',
          postImage:
            'https://github.com/user-attachments/assets/535c180f-e842-4aa8-90f4-92e448302af4',
        },
        {
          content: '종합정보시스템 내 수업 및 강사료 관리 화면 총 85개 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '기존 시스템의 55개 화면 대비 52% 증가한 화면 수를 개발하여 시스템 확장성과 사용자 요구사항 충족',
            },
            {
              content: '주당 평균 2.5개 화면 제작, 프로젝트 일정 내 모든 작업 완료',
            },
          ],
        },
        {
          content: '사용자 요구사항 반영 및 시스템 기능 개선',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '별도 피드백 사이트를 통해 40건 이상의 개선 요청 사항 수집 및 처리',
            },
            {
              content:
                '초과 수업료 산정시 예외 처리를 추가하여 추가 강사료가 시스템 계산 결과와 일치하도록 개선',
            },
            {
              content:
                '시간표 조회 시 요일 및 시간대별 필터링 기능을 추가하여 학생 사용 편의성 개선',
            },
          ],
        },
        {
          content: '효율적 개발 프로세스와 성능 최적화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'SQL 최적화를 통해 강의평가결과 분석 데이터 처리 속도 개선(평균 응답 시간 20% 단축)',
            },
          ],
        },
        {
          content: '[Skill Keywords]',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Java(8), JavaScript, Spring, Nexacro, Oracle, MyBatis, Eclipse(4.5), SVN',
            },
          ],
        },
      ],
    },
    {
      title: '지역 축제 소개를 토대로 여행 파트너를 구할 수 있는 서비스 - TT',
      startedAt: '23-07-25',
      endedAt: '23-09-03',
      where: '5인 팀 프로젝트 [담당 : 메인 페이지/채팅방 목록/실시간 채팅 풀스택 개발]',
      descriptions: [
        {
          content: '',
          postImage:
            'https://user-images.githubusercontent.com/137694287/274751989-89d277e0-a918-4be8-9790-0a06d1929184.gif',
        },
        {
          content: '실시간 채팅 서비스 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Spring WebSocket 기술을 활용해 양방향 통신을 구현하여 실시간으로 상호작용이 가능한 채팅방 기능을 구현하였습니다.',
            },
          ],
        },
        {
          content: '웹 페이지 UI/UX 디자인 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'HTML/CSS 및 JavaScript를 사용하여 메인 페이지 및 채팅방 목록 페이지를 구현하였습니다.',
            },
            {
              content:
                'Swiper API를 활용하여 메인 페이지에 이미지 슬라이드쇼를 구현하여 시각적으로 다양한 환경을 구현하였습니다.',
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
              content:
                'MyBatis를 활용하여 채팅방 목록 CRUD를 구현하였으며, MySQL를 통해 채팅방 정보를 저장 및 관리하였습니다.',
            },
          ],
        },
        {
          content: '[트러블 슈팅 해결 사례]',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '귓속말 기능',
              descriptions: [
                {
                  content:
                    '문제 : 귓속말 기능에서 특정 사용자에게 메시지가 전송되지 않는 문제가 발생했습니다.',
                },
                {
                  content:
                    '원인 : 메시지를 파싱할 때 잘못된 메시지 분리가 원인으로 확인되었습니다.',
                },
                {
                  content:
                    '해결 : startsWith() 메소드를 활용하여 메시지가 "/w"로 시작하는지 여부를 체크하고, 이후 split() 메소드를 사용하여 메시지를 분리하도록 코드를 수정하였습니다.',
                },
              ],
            },
            {
              content: 'MyBatis 쿼리 실행 순서 문제',
              descriptions: [
                {
                  content:
                    '문제 : <insert>태그에서 필요한 파라미터를 가져오지 못해 문제가 발생하였습니다.',
                },
                {
                  content:
                    '원인 : 해당 파라미터를 가져올 쿼리가 <insert>태그 쿼리보다 먼저 실행되어야 했기 때문입니다.',
                },
                {
                  content:
                    '해결 : 선행 쿼리를 먼저 실행하여 필요한 값을 가져오기 위해 <selectKey>태그를 사용하였습니다.',
                },
              ],
            },
            {
              content: '채팅방 접속 알림 중복 전송 문제',
              descriptions: [
                {
                  content:
                    '문제 : 채팅방에 처음 입장할 때, 사용자에게 입장 알림 메시지가 중복으로 전송되는 문제가 발생했습니다.',
                },
                {
                  content:
                    '원인 : for문 내에서 현재 클라이언트와 다른 모든 클라이언트에게 메시지를 전송하도록 구현되어 있었습니다.',
                },
                {
                  content:
                    '해결 : if (!session.getId().equals(targetSession.getId())) 조건을 추가하여 현재 클라이언트를 제외한 다른 클라이언트에게만 입장 알림 메시지를 전송하도록 수정하였습니다.',
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
          content: 'Github : https://github.com/jongkwon5/TT',
          href: 'https://github.com/jongkwon5/TT',
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
          content: '웹 페이지 UI/UX 디자인 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'HTML/CSS, JavaScript, Bootstrap를 활용하여 메인 페이지, 회사 소개, 게시판, 아티스트 소개, 로그인/회원가입 페이지를 구현하였습니다.',
            },
            {
              content:
                'Swiper API, Kakao 지도 API, fullPage.js를 사용하여 웹 페이지의 시각적 효과를 향상하였습니다.',
            },
            {
              content:
                'Slick.js를 사용하여 마우스로 버튼을 누르거나 드래그할 때 컨텐츠(영상 및 이미지)가 자연스럽게 변경되도록 구현하였습니다.',
            },
          ],
        },
        {
          content: '게시판 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'MyBatis를 활용하여 게시판 CRUD 및 페이징 기능을 구현하였으며, MySQL를 통해 게시글 정보를 저장 및 관리하였습니다.',
            },
            {
              content: 'AJAX를 활용하여 댓글 수정 및 삭제를 비동기 방식으로 구현하였습니다.',
            },
          ],
        },
        {
          content: '인증 및 사용자 관리',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '로그인 및 회원가입은 세션을 기반으로 하여 구현하였습니다. 더불어, 아이디 중복 검사 등의 유효성 검사를 적용하였으며, 이를 AJAX를 통해 실시간으로 확인 가능하게 구현하였습니다.',
            },
          ],
        },
        {
          content: '설계 아키텍처 ',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Spring MVC Model2 아키텍처를 기반으로 설계되었으며, MVC 패턴을 준수하여 구현하였습니다.',
            },
          ],
        },
        {
          content: '[트러블 슈팅 해결 사례]',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'AJAX 댓글 수정 기능 오류',
              descriptions: [
                {
                  content:
                    '문제 : 댓글 수정 기능에서 AJAX를 활용하여 비동기적으로 처리할 때, 정상적으로 동작하지 않는 문제가 발생했습니다.',
                },
                {
                  content:
                    '원인 : AJAX 요청이 서버로 전송될 때, 요청 URL 및 데이터 전송 방식에 오류가 있어 서버에서 요청을 제대로 처리하지 못했습니다.',
                },
                {
                  content:
                    '해결 : AJAX 요청 시 JSTL<c:url>태그를 사용해 올바른 URL을 지정하고, 데이터 전송 방식을 POST로 지정하여 서버로 요청이 제대로 전달되도록 수정하였습니다.',
                },
              ],
            },
            {
              content: '게시판 검색 결과 목록 오류',
              descriptions: [
                {
                  content:
                    '문제 : 게시판 검색 결과 목록을 가져오는 쿼리에서 검색 조건에 따라 올바른 결과가 출력되지 않는 문제가 발생했습니다.',
                },
                {
                  content:
                    '원인 : 검색 조건에 따라 WHERE 절이 동적으로 추가되는 부분에서 오류가 발생하여 올바르게 동작하지 않았습니다.',
                },
                {
                  content:
                    '해결 : MyBatis의 동적 쿼리 기능 중 <if>문을 활용하여 검색 조건에 따라 WHERE 절이 동적으로 추가되도록 수정하였습니다.',
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
