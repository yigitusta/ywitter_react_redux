export const addTweet = (content => ({
  type: 'ADD_TWEET',
  tweet: {
    content,
  },
}));

export const deleteTweet = (index => ({
  type: 'DELETE_TWEET',
  index,
}));
