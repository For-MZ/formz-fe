import { fakerKO as faker } from '@faker-js/faker';

export const COMMUNITY_REPLIES = [
  {
    commentId: 'commentId_6',
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
    commentId: 'commentId_6',
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
    commentId: 'commentId_6',
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
];
