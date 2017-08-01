import faker from 'faker';

import Tweet from '../models/Tweet';

const TWEETS_TOTAL = 10;

export default async () => {
  try {
    await Tweet.remove();

    // creates an array of 10 elements using fake data
    await Array.from({ length: TWEETS_TOTAL }).forEach(
      async () => await Tweet.create({ text: faker.lorem.paragraph(1) }),
    );
  } catch (err) {
    throw err;
  }
};
