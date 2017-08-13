const initState = () => {
  const tweets = [
    {
      content: 'hello this is my first yweet',
    },
    {
      content: 'this is my second tweet',
    },
  ];

  for (let i = 0; i < tweets.length; i++) {
    tweets[i].id = i;
  }

  return tweets;
};

const isUnique = (id, tweets) => {
  for (let i = 0; i < tweets.length; i++) {
    if (tweets[i].id === id) {
      return false;
    }
  }
  return true;
};

const getID = (tweets) => {
  for (let i = 0; i < 10000; i++) {
    if (isUnique(i, tweets)) {
      return i;
    }
  }
  return 10000;
};

export default function (state = initState(), action) {
  const newState = [...state];
  let newTweet = null;
  switch (action.type) {
    case 'DELETE_TWEET':
      newState.splice(action.index, 1);
      break;
    case 'ADD_TWEET':
      newTweet = { ...action.tweet };
      newTweet.id = getID(newState);
      newState.push(newTweet);
      break;
    default:
      break;
  }

  return newState;
}
