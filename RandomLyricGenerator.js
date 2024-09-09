const randomNumberGenerator = () => {
    return Math.floor(Math.random()*8)
};

const nounList = ['The weather ', 'The child ', 'The sea ', 'The tree ', 'The street ', 'The grass ', 'The paint ', 'The colour '];
const verbList = ['runs ', 'sits ', 'swings ', 'sings ', 'plays ', 'chants ', 'thinks ', 'waits '];
const adverbList = ['quickly.', 'quietly.', 'happily.', 'loudly.', 'impatiently.', 'glumly.', 'excitedly.', 'stoically.'];

randomNoun = nounList[randomNumberGenerator()];
randomVerb = verbList[randomNumberGenerator()];
randomAdverb = adverbList[randomNumberGenerator()];

let randomLyric = randomNoun + randomVerb + randomAdverb;

console.log(randomLyric)