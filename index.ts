import jsonQuotes from './json/quotes.json';
import jsonFacts from './json/facts.json';
import jsonDictionary from './json/dictionary.json';
import jsonNames from './json/names.json';
import jsonJokes from './json/jokes.json';
import Elysia from 'elysia';
import staticPlugin from '@elysiajs/static';

const app = new Elysia();
const port: number = 3000;

interface BrainrotQuote {
  quote: string;
}

interface BrainrotFact {
  fact: string;
}

interface BrainrotDictionary {
  word: string;
  meaning: string;
}

interface BrainrotName {
  name: string;
  meaning: string;
}

interface BrainrotJoke {
  joke: string;
}

const brainrotQuotes: BrainrotQuote[] = jsonQuotes;
const brainrotFacts: BrainrotFact[] = jsonFacts;
const brainrotDictionary: BrainrotDictionary[] = jsonDictionary;
const brainrotNames: BrainrotName[] = jsonNames;
const brainrotJokes: BrainrotJoke[] = jsonJokes;

const routes = [
  { path: 'quotes', data: brainrotQuotes, type: 'quote' },
  { path: 'facts', data: brainrotFacts, type: 'fact' },
  { path: 'dictionary', data: brainrotDictionary, type: 'dictionary' },
  { path: 'names', data: brainrotNames, type: 'name' },
  { path: 'jokes', data: brainrotJokes, type: 'joke' },
];

routes.forEach((route) => {
  app.get(`/api/${route.path}`, () => {
    const randomData = route.data[Math.floor(Math.random() * route.data.length)];
    return randomData;
  });
});

app

  .get('/api', () => {
    const message = {
      message: "Welcome to the Brainrot API.",
      routes: routes.map((route) => ({ path: `/api/${route.path}`, description: `Get a list of brainrot ${route.type}` })),
    };
    return message;
  })

  .get('/', ({ redirect }) => {
    return redirect('/docs/');
  })

  .use(staticPlugin({
    assets: 'docs',
    prefix: '/docs/'
  }))

  .get('/docs/', () => {
    return Bun.file('docs/index.html');
  })

  .listen(port, () => {
    console.log(`Server started.\nhttp://localhost:${port}`);
  });
