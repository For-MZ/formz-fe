import { User } from '@/types/User';
import { fakerKO as faker } from '@faker-js/faker';

export function createRandomUser(): User {
  return {
    userId: faker.string.uuid(),
    email: faker.internet.email(),
    nickName: faker.internet.displayName(),
    profileImage: faker.image.urlPlaceholder(),
  };
}

export const USERS: User[] = faker.helpers.multiple(createRandomUser, {
  count: 5,
});
