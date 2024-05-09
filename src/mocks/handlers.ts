import { HttpResponse, http } from 'msw';
import { fakerKO as faker } from '@faker-js/faker';

const delay = (second: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${second} delay`);
    }, second * 1000);
  });
};

export const handlers = [
  // 커뮤니티 게시글 목록 조회 api
  http.get('/community/posts', ({ request }) => {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    // 카테고리 필터링
    if (searchParams.get('category') === 'policy') {
      return HttpResponse.json({
        totalItemCount: 35,
        data: [
          {
            postId: faker.string.uuid(),
            title: `${searchParams.get('page') || 1}페이지 ${faker.lorem.sentence()}`,
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
            title: `${searchParams.get('page') || 1}페이지 ${faker.lorem.sentence()}`,
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
            title: `${searchParams.get('page') || 1}페이지 ${faker.lorem.sentence()}`,
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
            title: `${searchParams.get('page') || 1}페이지 ${faker.lorem.sentence()}`,
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
            title: `${searchParams.get('page') || 1}페이지 ${faker.lorem.sentence()}`,
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
            title: `${searchParams.get('page') || 1}페이지 ${faker.lorem.sentence()}`,
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
            title: `${searchParams.get('page') || 1}페이지 ${faker.lorem.sentence()}`,
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
            title: `${searchParams.get('page') || 1}페이지 ${faker.lorem.sentence()}`,
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
            title: `${searchParams.get('page') || 1}페이지 ${faker.lorem.sentence()}`,
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
            title: `${searchParams.get('page') || 1}페이지 ${faker.lorem.sentence()}`,
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
        ],
      });
    }
    if (searchParams.get('category') === 'housing') {
      return HttpResponse.json({
        totalItemCount: 2,
        data: [
          {
            postId: faker.string.uuid(),
            title: `${searchParams.get('page') || 1}페이지 ${faker.lorem.sentence()}`,
            writer: {
              userId: faker.string.uuid(),
              email: faker.internet.email(),
              nickName: faker.internet.displayName(),
              profileImage: faker.image.url(),
            },
            category: '주택',
            uploadTime: faker.date.past() as unknown as string,
            hasImage: faker.datatype.boolean(),
            views: faker.number.int({ min: 0, max: 999 }),
            likeCnt: faker.number.int({ min: 0, max: 999 }),
            commentCnt: faker.number.int({ min: 0, max: 20 }),
          },
          {
            postId: faker.string.uuid(),
            title: `${searchParams.get('page') || 1}페이지 ${faker.lorem.sentence()}`,
            writer: {
              userId: faker.string.uuid(),
              email: faker.internet.email(),
              nickName: faker.internet.displayName(),
              profileImage: faker.image.url(),
            },
            category: '주택',
            uploadTime: faker.date.past() as unknown as string,
            hasImage: faker.datatype.boolean(),
            views: faker.number.int({ min: 0, max: 999 }),
            likeCnt: faker.number.int({ min: 0, max: 999 }),
            commentCnt: faker.number.int({ min: 0, max: 20 }),
          },
        ],
      });
    }
    if (searchParams.get('category') === 'job') {
      return HttpResponse.json({
        totalItemCount: 2,
        data: [
          {
            postId: faker.string.uuid(),
            title: `${searchParams.get('page') || 1}페이지 ${faker.lorem.sentence()}`,
            writer: {
              userId: faker.string.uuid(),
              email: faker.internet.email(),
              nickName: faker.internet.displayName(),
              profileImage: faker.image.url(),
            },
            category: '취업',
            uploadTime: faker.date.past() as unknown as string,
            hasImage: faker.datatype.boolean(),
            views: faker.number.int({ min: 0, max: 999 }),
            likeCnt: faker.number.int({ min: 0, max: 999 }),
            commentCnt: faker.number.int({ min: 0, max: 20 }),
          },
          {
            postId: faker.string.uuid(),
            title: `${searchParams.get('page') || 1}페이지 ${faker.lorem.sentence()}`,
            writer: {
              userId: faker.string.uuid(),
              email: faker.internet.email(),
              nickName: faker.internet.displayName(),
              profileImage: faker.image.url(),
            },
            category: '취업',
            uploadTime: faker.date.past() as unknown as string,
            hasImage: faker.datatype.boolean(),
            views: faker.number.int({ min: 0, max: 999 }),
            likeCnt: faker.number.int({ min: 0, max: 999 }),
            commentCnt: faker.number.int({ min: 0, max: 20 }),
          },
        ],
      });
    }
    if (searchParams.get('category') === 'foundation') {
      return HttpResponse.json({
        totalItemCount: 2,
        data: [],
      });
    }
    if (searchParams.get('category') === 'free') {
      return HttpResponse.json({
        totalItemCount: 2,
        data: [
          {
            postId: faker.string.uuid(),
            title: `${searchParams.get('page') || 1}페이지 ${faker.lorem.sentence()}`,
            writer: {
              userId: faker.string.uuid(),
              email: faker.internet.email(),
              nickName: faker.internet.displayName(),
              profileImage: faker.image.url(),
            },
            category: '자유',
            uploadTime: faker.date.past() as unknown as string,
            hasImage: faker.datatype.boolean(),
            views: faker.number.int({ min: 0, max: 999 }),
            likeCnt: faker.number.int({ min: 0, max: 999 }),
            commentCnt: faker.number.int({ min: 0, max: 20 }),
          },
          {
            postId: faker.string.uuid(),
            title: `${searchParams.get('page') || 1}페이지 ${faker.lorem.sentence()}`,
            writer: {
              userId: faker.string.uuid(),
              email: faker.internet.email(),
              nickName: faker.internet.displayName(),
              profileImage: faker.image.url(),
            },
            category: '자유',
            uploadTime: faker.date.past() as unknown as string,
            hasImage: faker.datatype.boolean(),
            views: faker.number.int({ min: 0, max: 999 }),
            likeCnt: faker.number.int({ min: 0, max: 999 }),
            commentCnt: faker.number.int({ min: 0, max: 20 }),
          },
        ],
      });
    }
    if (searchParams.get('category') === 'tip') {
      return HttpResponse.json({
        totalItemCount: 2,
        data: [
          {
            postId: faker.string.uuid(),
            title: `${searchParams.get('page') || 1}페이지 ${faker.lorem.sentence()}`,
            writer: {
              userId: faker.string.uuid(),
              email: faker.internet.email(),
              nickName: faker.internet.displayName(),
              profileImage: faker.image.url(),
            },
            category: '꿀팁',
            uploadTime: faker.date.past() as unknown as string,
            hasImage: faker.datatype.boolean(),
            views: faker.number.int({ min: 0, max: 999 }),
            likeCnt: faker.number.int({ min: 0, max: 999 }),
            commentCnt: faker.number.int({ min: 0, max: 20 }),
          },
          {
            postId: faker.string.uuid(),
            title: `${searchParams.get('page') || 1}페이지 ${faker.lorem.sentence()}`,
            writer: {
              userId: faker.string.uuid(),
              email: faker.internet.email(),
              nickName: faker.internet.displayName(),
              profileImage: faker.image.url(),
            },
            category: '꿀팁',
            uploadTime: faker.date.past() as unknown as string,
            hasImage: faker.datatype.boolean(),
            views: faker.number.int({ min: 0, max: 999 }),
            likeCnt: faker.number.int({ min: 0, max: 999 }),
            commentCnt: faker.number.int({ min: 0, max: 20 }),
          },
        ],
      });
    }

    // 가짜로 페이지네이션 구현
    if (searchParams.has('page')) {
      return HttpResponse.json({
        totalItemCount: 450,
        data: [
          {
            postId: faker.string.uuid(),
            title: `${searchParams.get('page')}페이지 ${faker.lorem.sentence()}`,
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
        ],
      });
    }

    // 가짜로 검색 게시글 리스트 조회
    if (searchParams.has('word')) {
      return HttpResponse.json({
        totalItemCount: 10,
        data: [
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
        ],
      });
    }

    return HttpResponse.json({
      totalItemCount: 450,
      data: [
        {
          postId: faker.string.uuid(),
          title: `1페이지 ${faker.lorem.sentence()}`,
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
          title: `1페이지 ${faker.lorem.sentence()}`,
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
          title: `1페이지 ${faker.lorem.sentence()}`,
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
          title: `1페이지 ${faker.lorem.sentence()}`,
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
          title: `1페이지 ${faker.lorem.sentence()}`,
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
          title: `1페이지 ${faker.lorem.sentence()}`,
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
          title: `1페이지 ${faker.lorem.sentence()}`,
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
          title: `1페이지 ${faker.lorem.sentence()}`,
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
          title: `1페이지 ${faker.lorem.sentence()}`,
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
          title: `1페이지 ${faker.lorem.sentence()}`,
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
      ],
    });
  }),

  // 커뮤니티 상세 게시글 조회 api
  http.get('/community/posts/:postId', ({ request, params }) => {
    const { postId } = params;

    return HttpResponse.json({
      postId: faker.string.uuid(),
      title: `postId: ${postId}의 게시글 제목`,
      content: '<h1>안녕하세요.</h1><h2>안녕하세요.</h2><h3>안녕하세요.</h3><p>안녕하세요.</p>',
      writer: {
        userId: faker.string.uuid(),
        email: faker.internet.email(),
        nickName: faker.internet.displayName(),
        profileImage: faker.image.url(),
      },
      category: '정책',
      bookmarked: faker.datatype.boolean(),
      liked: faker.datatype.boolean(),
      likeCnt: faker.number.int({ min: 0, max: 999 }),
      views: faker.number.int({ min: 0, max: 999 }),
      commentCnt: faker.number.int({ min: 0, max: 20 }),
      createdDate: faker.date.past() as unknown as string,
      lastModifiedDate: faker.date.past() as unknown as string,
    });
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
  http.get('/community/comments/:postId', async ({ request, params }) => {
    const url = new URL(request.url);
    const cursor = parseInt(url.searchParams.get('cursor') as string) || 1;
    const { postId } = params;
    await delay(1);
    return HttpResponse.json([
      {
        postId: '1',
        commentId: `${cursor}`,
        content: `postId: ${postId}의 댓글 ${cursor}`,
        cmtWriter: {
          userId: faker.string.uuid(),
          email: faker.internet.email(),
          nickName: faker.internet.displayName(),
          profileImage: faker.image.url(),
        },
        cmtLiked: faker.datatype.boolean(),
        cmtLikeCnt: faker.number.int({ min: 0, max: 100 }),
        cmtChildCnt: faker.number.int({ min: 0, max: 10 }),
        uploadTime: faker.date.anytime() as unknown as string,
      },
      {
        postId: '1',
        commentId: `${cursor + 1}`,
        content: `postId: ${postId}의 댓글 ${cursor + 1}`,
        cmtWriter: {
          userId: faker.string.uuid(),
          email: faker.internet.email(),
          nickName: faker.internet.displayName(),
          profileImage: faker.image.url(),
        },
        cmtLiked: faker.datatype.boolean(),
        cmtLikeCnt: faker.number.int({ min: 0, max: 100 }),
        cmtChildCnt: faker.number.int({ min: 0, max: 10 }),
        uploadTime: faker.date.anytime() as unknown as string,
      },
      {
        postId: '1',
        commentId: `${cursor + 2}`,
        content: `postId: ${postId}의 댓글 ${cursor + 2}`,
        cmtWriter: {
          userId: faker.string.uuid(),
          email: faker.internet.email(),
          nickName: faker.internet.displayName(),
          profileImage: faker.image.url(),
        },
        cmtLiked: faker.datatype.boolean(),
        cmtLikeCnt: faker.number.int({ min: 0, max: 100 }),
        cmtChildCnt: faker.number.int({ min: 0, max: 10 }),
        uploadTime: faker.date.anytime() as unknown as string,
      },
      {
        postId: '1',
        commentId: `${cursor + 3}`,
        content: `postId: ${postId}의 댓글 ${cursor + 3}`,
        cmtWriter: {
          userId: faker.string.uuid(),
          email: faker.internet.email(),
          nickName: faker.internet.displayName(),
          profileImage: faker.image.url(),
        },
        cmtLiked: faker.datatype.boolean(),
        cmtLikeCnt: faker.number.int({ min: 0, max: 100 }),
        cmtChildCnt: faker.number.int({ min: 0, max: 10 }),
        uploadTime: faker.date.anytime() as unknown as string,
      },
      {
        postId: '1',
        commentId: `${cursor + 4}`,
        content: `postId: ${postId}의 댓글 ${cursor + 4}`,
        cmtWriter: {
          userId: faker.string.uuid(),
          email: faker.internet.email(),
          nickName: faker.internet.displayName(),
          profileImage: faker.image.url(),
        },
        cmtLiked: faker.datatype.boolean(),
        cmtLikeCnt: faker.number.int({ min: 0, max: 100 }),
        cmtChildCnt: faker.number.int({ min: 0, max: 10 }),
        uploadTime: faker.date.anytime() as unknown as string,
      },
      {
        postId: '1',
        commentId: `${cursor + 5}`,
        content: `postId: ${postId}의 댓글 ${cursor + 5}`,
        cmtWriter: {
          userId: faker.string.uuid(),
          email: faker.internet.email(),
          nickName: faker.internet.displayName(),
          profileImage: faker.image.url(),
        },
        cmtLiked: faker.datatype.boolean(),
        cmtLikeCnt: faker.number.int({ min: 0, max: 100 }),
        cmtChildCnt: faker.number.int({ min: 0, max: 10 }),
        uploadTime: faker.date.anytime() as unknown as string,
      },
      {
        postId: '1',
        commentId: `${cursor + 6}`,
        content: `postId: ${postId}의 댓글 ${cursor + 6}`,
        cmtWriter: {
          userId: faker.string.uuid(),
          email: faker.internet.email(),
          nickName: faker.internet.displayName(),
          profileImage: faker.image.url(),
        },
        cmtLiked: faker.datatype.boolean(),
        cmtLikeCnt: faker.number.int({ min: 0, max: 100 }),
        cmtChildCnt: faker.number.int({ min: 0, max: 10 }),
        uploadTime: faker.date.anytime() as unknown as string,
      },
      {
        postId: '1',
        commentId: `${cursor + 7}`,
        content: `postId: ${postId}의 댓글 ${cursor + 7}`,
        cmtWriter: {
          userId: faker.string.uuid(),
          email: faker.internet.email(),
          nickName: faker.internet.displayName(),
          profileImage: faker.image.url(),
        },
        cmtLiked: faker.datatype.boolean(),
        cmtLikeCnt: faker.number.int({ min: 0, max: 100 }),
        cmtChildCnt: faker.number.int({ min: 0, max: 10 }),
        uploadTime: faker.date.anytime() as unknown as string,
      },
      {
        postId: '1',
        commentId: `${cursor + 8}`,
        content: `postId: ${postId}의 댓글 ${cursor + 8}`,
        cmtWriter: {
          userId: faker.string.uuid(),
          email: faker.internet.email(),
          nickName: faker.internet.displayName(),
          profileImage: faker.image.url(),
        },
        cmtLiked: faker.datatype.boolean(),
        cmtLikeCnt: faker.number.int({ min: 0, max: 100 }),
        cmtChildCnt: faker.number.int({ min: 0, max: 10 }),
        uploadTime: faker.date.anytime() as unknown as string,
      },
      {
        postId: '1',
        commentId: `${cursor + 9}`,
        content: `postId: ${postId}의 댓글 ${cursor + 9}`,
        cmtWriter: {
          userId: faker.string.uuid(),
          email: faker.internet.email(),
          nickName: faker.internet.displayName(),
          profileImage: faker.image.url(),
        },
        cmtLiked: faker.datatype.boolean(),
        cmtLikeCnt: faker.number.int({ min: 0, max: 100 }),
        cmtChildCnt: faker.number.int({ min: 0, max: 10 }),
        uploadTime: faker.date.anytime() as unknown as string,
      },
    ]);
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

    return HttpResponse.json([
      {
        commentId: 'commentId_1',
        replyId: faker.string.uuid(),
        content: faker.lorem.paragraph(),
        cmtWriter: {
          userId: faker.string.uuid(),
          email: faker.internet.email(),
          nickName: faker.internet.displayName(),
          profileImage: faker.image.url(),
        },
        cmtLiked: faker.datatype.boolean(),
        cmtLikeCnt: faker.number.int({ min: 0, max: 100 }),
        cmtChildCnt: faker.number.int({ min: 0, max: 10 }),
        uploadTime: faker.date.anytime() as unknown as string,
      },
      {
        commentId: 'commentId_1',
        replyId: faker.string.uuid(),
        content: faker.lorem.paragraph(),
        cmtWriter: {
          userId: faker.string.uuid(),
          email: faker.internet.email(),
          nickName: faker.internet.displayName(),
          profileImage: faker.image.url(),
        },
        cmtLiked: faker.datatype.boolean(),
        cmtLikeCnt: faker.number.int({ min: 0, max: 100 }),
        cmtChildCnt: faker.number.int({ min: 0, max: 10 }),
        uploadTime: faker.date.anytime() as unknown as string,
      },
      {
        commentId: 'commentId_2',
        replyId: faker.string.uuid(),
        content: faker.lorem.paragraph(),
        cmtWriter: {
          userId: faker.string.uuid(),
          email: faker.internet.email(),
          nickName: faker.internet.displayName(),
          profileImage: faker.image.url(),
        },
        cmtLiked: faker.datatype.boolean(),
        cmtLikeCnt: faker.number.int({ min: 0, max: 100 }),
        cmtChildCnt: faker.number.int({ min: 0, max: 10 }),
        uploadTime: faker.date.anytime() as unknown as string,
      },
      {
        commentId: 'commentId_2',
        replyId: faker.string.uuid(),
        content: faker.lorem.paragraph(),
        cmtWriter: {
          userId: faker.string.uuid(),
          email: faker.internet.email(),
          nickName: faker.internet.displayName(),
          profileImage: faker.image.url(),
        },
        cmtLiked: faker.datatype.boolean(),
        cmtLikeCnt: faker.number.int({ min: 0, max: 100 }),
        cmtChildCnt: faker.number.int({ min: 0, max: 10 }),
        uploadTime: faker.date.anytime() as unknown as string,
      },
      {
        commentId: 'commentId_3',
        replyId: faker.string.uuid(),
        content: faker.lorem.paragraph(),
        cmtWriter: {
          userId: faker.string.uuid(),
          email: faker.internet.email(),
          nickName: faker.internet.displayName(),
          profileImage: faker.image.url(),
        },
        cmtLiked: faker.datatype.boolean(),
        cmtLikeCnt: faker.number.int({ min: 0, max: 100 }),
        cmtChildCnt: faker.number.int({ min: 0, max: 10 }),
        uploadTime: faker.date.anytime() as unknown as string,
      },
    ]);
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
