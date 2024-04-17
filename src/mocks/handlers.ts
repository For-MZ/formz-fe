import { HttpResponse, http } from 'msw';
import { COMMUNITY_POSTS } from './db/community/posts';
import { COMMUNITY_COMMENTS } from './db/community/comments';
import { COMMUNITY_REPLIES } from './db/community/replies';
import { fakerKO as faker } from '@faker-js/faker';

export const handlers = [
  // 커뮤니티 게시글 목록 조회 api
  http.get('/community/posts', ({ request }) => {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    // 카테고리 필터링
    if (searchParams.get('category') === 'policy') {
      const filteredPosts = COMMUNITY_POSTS.filter((post) => post.category === '정책');
      return HttpResponse.json(filteredPosts);
    }
    if (searchParams.get('category') === 'housing') {
      const filteredPosts = COMMUNITY_POSTS.filter((post) => post.category === '주택');
      return HttpResponse.json(filteredPosts);
    }
    if (searchParams.get('category') === 'job') {
      const filteredPosts = COMMUNITY_POSTS.filter((post) => post.category === '취업');
      return HttpResponse.json(filteredPosts);
    }
    if (searchParams.get('category') === 'foundation') {
      const filteredPosts = COMMUNITY_POSTS.filter((post) => post.category === '창업');
      return HttpResponse.json(filteredPosts);
    }
    if (searchParams.get('category') === 'free') {
      const filteredPosts = COMMUNITY_POSTS.filter((post) => post.category === '자유');
      return HttpResponse.json(filteredPosts);
    }
    if (searchParams.get('category') === 'tip') {
      const filteredPosts = COMMUNITY_POSTS.filter((post) => post.category === '꿀팁');
      return HttpResponse.json(filteredPosts);
    }

    // 가짜로 페이지네이션 구현
    if (searchParams.has('page')) {
      return HttpResponse.json([
        {
          postId: faker.string.uuid(),
          title: `${searchParams.get('page')}페이지 ${faker.lorem.sentence()}`,
          content: faker.lorem.paragraphs(30),
          writer: {
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            nickName: faker.internet.displayName(),
            profileImage: faker.image.url(),
          },
          category: '정책',
          uploadTime: faker.date.past() as unknown as string,
          hasImage: faker.datatype.boolean(),
          views: faker.number.int({ min: 0, max: 999 }),
          likeCnt: faker.number.int({ min: 0, max: 999 }),
          commentCnt: faker.number.int({ min: 0, max: 20 }),
        },
        {
          postId: faker.string.uuid(),
          title: `${searchParams.get('page')}페이지 ${faker.lorem.sentence()}`,
          content: faker.lorem.paragraphs(30),
          writer: {
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            nickName: faker.internet.displayName(),
            profileImage: faker.image.url(),
          },
          category: '정책',
          uploadTime: faker.date.past() as unknown as string,
          hasImage: faker.datatype.boolean(),
          views: faker.number.int({ min: 0, max: 999 }),
          likeCnt: faker.number.int({ min: 0, max: 999 }),
          commentCnt: faker.number.int({ min: 0, max: 20 }),
        },
        {
          postId: faker.string.uuid(),
          title: `${searchParams.get('page')}페이지 ${faker.lorem.sentence()}`,
          content: faker.lorem.paragraphs(30),
          writer: {
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            nickName: faker.internet.displayName(),
            profileImage: faker.image.url(),
          },
          category: '정책',
          uploadTime: faker.date.past() as unknown as string,
          hasImage: faker.datatype.boolean(),
          views: faker.number.int({ min: 0, max: 999 }),
          likeCnt: faker.number.int({ min: 0, max: 999 }),
          commentCnt: faker.number.int({ min: 0, max: 20 }),
        },
        {
          postId: faker.string.uuid(),
          title: `${searchParams.get('page')}페이지 ${faker.lorem.sentence()}`,
          content: faker.lorem.paragraphs(30),
          writer: {
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            nickName: faker.internet.displayName(),
            profileImage: faker.image.url(),
          },
          category: '정책',
          uploadTime: faker.date.past() as unknown as string,
          hasImage: faker.datatype.boolean(),
          views: faker.number.int({ min: 0, max: 999 }),
          likeCnt: faker.number.int({ min: 0, max: 999 }),
          commentCnt: faker.number.int({ min: 0, max: 20 }),
        },
        {
          postId: faker.string.uuid(),
          title: `${searchParams.get('page')}페이지 ${faker.lorem.sentence()}`,
          content: faker.lorem.paragraphs(30),
          writer: {
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            nickName: faker.internet.displayName(),
            profileImage: faker.image.url(),
          },
          category: '정책',
          uploadTime: faker.date.past() as unknown as string,
          hasImage: faker.datatype.boolean(),
          views: faker.number.int({ min: 0, max: 999 }),
          likeCnt: faker.number.int({ min: 0, max: 999 }),
          commentCnt: faker.number.int({ min: 0, max: 20 }),
        },
        {
          postId: faker.string.uuid(),
          title: `${searchParams.get('page')}페이지 ${faker.lorem.sentence()}`,
          content: faker.lorem.paragraphs(30),
          writer: {
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            nickName: faker.internet.displayName(),
            profileImage: faker.image.url(),
          },
          category: '정책',
          uploadTime: faker.date.past() as unknown as string,
          hasImage: faker.datatype.boolean(),
          views: faker.number.int({ min: 0, max: 999 }),
          likeCnt: faker.number.int({ min: 0, max: 999 }),
          commentCnt: faker.number.int({ min: 0, max: 20 }),
        },
        {
          postId: faker.string.uuid(),
          title: `${searchParams.get('page')}페이지 ${faker.lorem.sentence()}`,
          content: faker.lorem.paragraphs(30),
          writer: {
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            nickName: faker.internet.displayName(),
            profileImage: faker.image.url(),
          },
          category: '정책',
          uploadTime: faker.date.past() as unknown as string,
          hasImage: faker.datatype.boolean(),
          views: faker.number.int({ min: 0, max: 999 }),
          likeCnt: faker.number.int({ min: 0, max: 999 }),
          commentCnt: faker.number.int({ min: 0, max: 20 }),
        },
        {
          postId: faker.string.uuid(),
          title: `${searchParams.get('page')}페이지 ${faker.lorem.sentence()}`,
          content: faker.lorem.paragraphs(30),
          writer: {
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            nickName: faker.internet.displayName(),
            profileImage: faker.image.url(),
          },
          category: '정책',
          uploadTime: faker.date.past() as unknown as string,
          hasImage: faker.datatype.boolean(),
          views: faker.number.int({ min: 0, max: 999 }),
          likeCnt: faker.number.int({ min: 0, max: 999 }),
          commentCnt: faker.number.int({ min: 0, max: 20 }),
        },
        {
          postId: faker.string.uuid(),
          title: `${searchParams.get('page')}페이지 ${faker.lorem.sentence()}`,
          content: faker.lorem.paragraphs(30),
          writer: {
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            nickName: faker.internet.displayName(),
            profileImage: faker.image.url(),
          },
          category: '정책',
          uploadTime: faker.date.past() as unknown as string,
          hasImage: faker.datatype.boolean(),
          views: faker.number.int({ min: 0, max: 999 }),
          likeCnt: faker.number.int({ min: 0, max: 999 }),
          commentCnt: faker.number.int({ min: 0, max: 20 }),
        },
        {
          postId: faker.string.uuid(),
          title: `${searchParams.get('page')}페이지 ${faker.lorem.sentence()}`,
          content: faker.lorem.paragraphs(30),
          writer: {
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            nickName: faker.internet.displayName(),
            profileImage: faker.image.url(),
          },
          category: '정책',
          uploadTime: faker.date.past() as unknown as string,
          hasImage: faker.datatype.boolean(),
          views: faker.number.int({ min: 0, max: 999 }),
          likeCnt: faker.number.int({ min: 0, max: 999 }),
          commentCnt: faker.number.int({ min: 0, max: 20 }),
        },
      ]);
    }

    // 가짜로 검색 게시글 리스트 조회
    if (searchParams.has('word')) {
      return HttpResponse.json([
        {
          postId: '1',
          title: `${searchParams.get('word')}이 포함된 게시글 제목 1`,
          content: `게시글 내용 ${searchParams.get('word')}이 포함된 게시글`,
          writer: {
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            nickName: faker.internet.displayName(),
            profileImage: faker.image.url(),
          },
          category: '정책',
          uploadTime: faker.date.past() as unknown as string,
          hasImage: faker.datatype.boolean(),
          views: faker.number.int({ min: 0, max: 999 }),
          likeCnt: faker.number.int({ min: 0, max: 999 }),
          commentCnt: faker.number.int({ min: 0, max: 20 }),
        },
        {
          postId: '2',
          title: `${searchParams.get('word')}이 포함된 게시글 제목 2`,
          content: `게시글 내용 ${searchParams.get('word')}이 포함된 게시글`,
          writer: {
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            nickName: faker.internet.displayName(),
            profileImage: faker.image.url(),
          },
          category: '정책',
          uploadTime: faker.date.past() as unknown as string,
          hasImage: faker.datatype.boolean(),
          views: faker.number.int({ min: 0, max: 999 }),
          likeCnt: faker.number.int({ min: 0, max: 999 }),
          commentCnt: faker.number.int({ min: 0, max: 20 }),
        },
        {
          postId: '3',
          title: `${searchParams.get('word')}이 포함된 게시글 제목 3`,
          content: `게시글 내용 ${searchParams.get('word')}이 포함된 게시글`,
          writer: {
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            nickName: faker.internet.displayName(),
            profileImage: faker.image.url(),
          },
          category: '정책',
          uploadTime: faker.date.past() as unknown as string,
          hasImage: faker.datatype.boolean(),
          views: faker.number.int({ min: 0, max: 999 }),
          likeCnt: faker.number.int({ min: 0, max: 999 }),
          commentCnt: faker.number.int({ min: 0, max: 20 }),
        },
        {
          postId: '4',
          title: `${searchParams.get('word')}이 포함된 게시글 제목 4`,
          content: `게시글 내용 ${searchParams.get('word')}이 포함된 게시글`,
          writer: {
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            nickName: faker.internet.displayName(),
            profileImage: faker.image.url(),
          },
          category: '정책',
          uploadTime: faker.date.past() as unknown as string,
          hasImage: faker.datatype.boolean(),
          views: faker.number.int({ min: 0, max: 999 }),
          likeCnt: faker.number.int({ min: 0, max: 999 }),
          commentCnt: faker.number.int({ min: 0, max: 20 }),
        },
        {
          postId: '5',
          title: `${searchParams.get('word')}이 포함된 게시글 제목 5`,
          content: `게시글 내용 ${searchParams.get('word')}이 포함된 게시글`,
          writer: {
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            nickName: faker.internet.displayName(),
            profileImage: faker.image.url(),
          },
          category: '정책',
          uploadTime: faker.date.past() as unknown as string,
          hasImage: faker.datatype.boolean(),
          views: faker.number.int({ min: 0, max: 999 }),
          likeCnt: faker.number.int({ min: 0, max: 999 }),
          commentCnt: faker.number.int({ min: 0, max: 20 }),
        },
        {
          postId: '6',
          title: `${searchParams.get('word')}이 포함된 게시글 제목 1`,
          content: `게시글 내용 ${searchParams.get('word')}이 포함된 게시글`,
          writer: {
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            nickName: faker.internet.displayName(),
            profileImage: faker.image.url(),
          },
          category: '정책',
          uploadTime: faker.date.past() as unknown as string,
          hasImage: faker.datatype.boolean(),
          views: faker.number.int({ min: 0, max: 999 }),
          likeCnt: faker.number.int({ min: 0, max: 999 }),
          commentCnt: faker.number.int({ min: 0, max: 20 }),
        },
        {
          postId: '7',
          title: `${searchParams.get('word')}이 포함된 게시글 제목 2`,
          content: `게시글 내용 ${searchParams.get('word')}이 포함된 게시글`,
          writer: {
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            nickName: faker.internet.displayName(),
            profileImage: faker.image.url(),
          },
          category: '정책',
          uploadTime: faker.date.past() as unknown as string,
          hasImage: faker.datatype.boolean(),
          views: faker.number.int({ min: 0, max: 999 }),
          likeCnt: faker.number.int({ min: 0, max: 999 }),
          commentCnt: faker.number.int({ min: 0, max: 20 }),
        },
        {
          postId: '8',
          title: `${searchParams.get('word')}이 포함된 게시글 제목 3`,
          content: `게시글 내용 ${searchParams.get('word')}이 포함된 게시글`,
          writer: {
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            nickName: faker.internet.displayName(),
            profileImage: faker.image.url(),
          },
          category: '정책',
          uploadTime: faker.date.past() as unknown as string,
          hasImage: faker.datatype.boolean(),
          views: faker.number.int({ min: 0, max: 999 }),
          likeCnt: faker.number.int({ min: 0, max: 999 }),
          commentCnt: faker.number.int({ min: 0, max: 20 }),
        },
        {
          postId: '9',
          title: `${searchParams.get('word')}이 포함된 게시글 제목 4`,
          content: `게시글 내용 ${searchParams.get('word')}이 포함된 게시글`,
          writer: {
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            nickName: faker.internet.displayName(),
            profileImage: faker.image.url(),
          },
          category: '정책',
          uploadTime: faker.date.past() as unknown as string,
          hasImage: faker.datatype.boolean(),
          views: faker.number.int({ min: 0, max: 999 }),
          likeCnt: faker.number.int({ min: 0, max: 999 }),
          commentCnt: faker.number.int({ min: 0, max: 20 }),
        },
        {
          postId: '10',
          title: `${searchParams.get('word')}이 포함된 게시글 제목 5`,
          content: `게시글 내용 ${searchParams.get('word')}이 포함된 게시글`,
          writer: {
            userId: faker.string.uuid(),
            email: faker.internet.email(),
            nickName: faker.internet.displayName(),
            profileImage: faker.image.url(),
          },
          category: '정책',
          uploadTime: faker.date.past() as unknown as string,
          hasImage: faker.datatype.boolean(),
          views: faker.number.int({ min: 0, max: 999 }),
          likeCnt: faker.number.int({ min: 0, max: 999 }),
          commentCnt: faker.number.int({ min: 0, max: 20 }),
        },
      ]);
    }

    return HttpResponse.json(COMMUNITY_POSTS);
  }),

  // 커뮤니티 상세 게시글 조회 api
  http.get('/community/posts/:postId', ({ request, params }) => {
    const { postId } = params;
    const foundedPost = COMMUNITY_POSTS.find((post) => postId === post.postId);

    return HttpResponse.json(foundedPost);
  }),

  // 커뮤니티 게시글 작성 api
  http.post('/community/posts', ({ request }) => {
    return HttpResponse.json(
      {
        message: '게시글이 성공적으로 작성되었습니다.',
      },
      { status: 201 },
    );
  }),

  // 커뮤니티 게시글 수정 api
  http.patch('/community/posts/:postId', ({ request, params }) => {
    const { postId } = params;

    return HttpResponse.json(
      {
        postId,
        message: '게시글이 성공적으로 수정되었습니다.',
      },
      { status: 200 },
    );
  }),

  // 커뮤니티 게시글 삭제 api
  http.delete('/community/posts/:postId', ({ request, params }) => {
    const { postId } = params;

    return HttpResponse.json(
      {
        postId,
        message: '게시글이 성공적으로 삭제되었습니다.',
      },
      { status: 204 },
    );
  }),

  // 커뮤니티 게시글 추천 api
  http.patch('/community/posts/:postId/like', ({ request, params }) => {
    return HttpResponse.json(
      {
        postId: '1',
        message: '게시글이 성공적으로 작성되었습니다.',
      },
      { status: 201 },
    );
  }),

  // 커뮤니티 게시글 북마크 api
  http.patch('/community/posts/:postId/bookmark', ({ request, params }) => {
    return HttpResponse.json(
      {
        postId: '1',
        message: '게시글이 성공적으로 작성되었습니다.',
      },
      { status: 201 },
    );
  }),

  // 커뮤니티 댓글 작성 api
  http.post('/community/comments', ({ request }) => {
    console.log('실행');

    return HttpResponse.json(
      {
        postId: '1',
        message: '게시글이 성공적으로 작성되었습니다.',
      },
      { status: 201 },
    );
  }),

  // 커뮤니티 댓글 목록 조회 api
  http.get('/community/comments/:postId', ({ request, params }) => {
    const { postId } = params;
    const comments = COMMUNITY_COMMENTS.filter((comment) => comment.postId === postId);

    return HttpResponse.json(comments);
  }),

  // 커뮤니티 댓글 수정 api
  http.patch('/community/comments/:commentId', ({ request, params }) => {
    return HttpResponse.json(
      {
        postId: '1',
        message: '게시글이 성공적으로 작성되었습니다.',
      },
      { status: 201 },
    );
  }),

  // 커뮤니티 댓글 삭제 api
  http.delete('/community/comments/:commentId', ({ request, params }) => {
    return HttpResponse.json(
      {
        postId: '1',
        message: '게시글이 성공적으로 작성되었습니다.',
      },
      { status: 201 },
    );
  }),

  // 커뮤니티 댓글 추천 api
  http.patch('/community/comments/:commentId/like', ({ request, params }) => {
    return HttpResponse.json(
      {
        postId: '1',
        message: '게시글이 성공적으로 작성되었습니다.',
      },
      { status: 201 },
    );
  }),

  // 커뮤니티 답글 작성 api
  http.post('/community/replies', ({ request, params }) => {
    return HttpResponse.json(
      {
        postId: '1',
        message: '게시글이 성공적으로 작성되었습니다.',
      },
      { status: 201 },
    );
  }),

  // 커뮤니티 답글 목록 조회 api
  http.get('community/replies/:commentId', ({ request, params }) => {
    const { commentId } = params;
    const replies = COMMUNITY_REPLIES.filter((reply) => reply.commentId === commentId);

    return HttpResponse.json(replies);
  }),

  // 커뮤니티 답글 수정 api
  http.patch('/community/replies/:replyId', ({ request, params }) => {
    return HttpResponse.json(
      {
        postId: '1',
        message: '게시글이 성공적으로 작성되었습니다.',
      },
      { status: 201 },
    );
  }),

  // 커뮤니티 답글 삭제 api
  http.delete('/community/replies/:replyId', ({ request, params }) => {
    return HttpResponse.json(
      {
        postId: '1',
        message: '게시글이 성공적으로 작성되었습니다.',
      },
      { status: 201 },
    );
  }),
];
