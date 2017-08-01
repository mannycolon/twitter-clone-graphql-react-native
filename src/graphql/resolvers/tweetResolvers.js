import Tweet from '../../models/Tweet';

export default {
  getTweets: () => Tweet.find({}) // a resolver is a function that in this case finds everything in the connection Tweet
}