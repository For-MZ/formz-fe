import { HttpResponse, http } from 'msw';
import { USERS } from './db/users';
import { COMMUNITY_POSTS } from './db/community/posts';
import { COMMUNITY_COMMENTS } from './db/community/comments';
import { COMMUNITY_REPLIES } from './db/community/replies';

export const handlers = [
  // test api
  http.get('/test', () => {
    console.log('test api 실행');
    return HttpResponse.json(USERS[0]);
  }),

  // 커뮤니티 게시글 목록 조회 api
  http.get('/community/posts', ({ request, params }) => {
    return HttpResponse.json(COMMUNITY_POSTS);
  }),

  // 커뮤니티 상세 게시글 조회 api
  http.get('/community/posts/:postId', ({ request, params }) => {
    const { postId } = params;
    const foundedPost = COMMUNITY_POSTS.find((post) => postId === post.postId);

    return HttpResponse.json(foundedPost);
  }),

  // 커뮤니티 상세 게시글 댓글 목록 조회 api
  http.get('/comments/all/:postId', ({ request, params }) => {
    const { postId } = params;
    const comments = COMMUNITY_COMMENTS.filter((comment) => comment.postId === postId);

    return HttpResponse.json(comments);
  }),

  // 커뮤니티 상세 게시글 답글 목록 조회 api
  http.get('/comments/child/:commentId', ({ request, params }) => {
    const { commentId } = params;
    const replies = COMMUNITY_REPLIES.filter((reply) => reply.commentId === commentId);

    return HttpResponse.json(replies);
  }),
];
