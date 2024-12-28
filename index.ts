import jsonQuotes from './json/quotes.json';
import jsonFacts from './json/facts.json';
import jsonDictionary from './json/dictionary.json';
import jsonNames from './json/names.json';
import jsonJokes from './json/jokes.json';
import Elysia from 'elysia';

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

app.get('/quotes', (req: Request, res: Response) => {
  const randomQuote = brainrotQuotes[Math.floor(Math.random() * brainrotQuotes.length)];
  return randomQuote;
});

app.get('/facts', (req: Request, res: Response) => {
  const randomFact = brainrotFacts[Math.floor(Math.random() * brainrotFacts.length)];
  return randomFact;
});

app.get('/dictionary', (req: Request, res: Response) => {
  const randomDictionary = brainrotDictionary[Math.floor(Math.random() * brainrotDictionary.length)];
  return randomDictionary;
});

app.get('/names', (req: Request, res: Response) => {
  const randomName = brainrotNames[Math.floor(Math.random() * brainrotNames.length)];
  return randomName;
});

app.get('/jokes', (req: Request, res: Response) => {
  const randomJoke = brainrotJokes[Math.floor(Math.random() * brainrotJokes.length)];
  return randomJoke;
});
app.get('/', (req: Request, res: Response) => {
  const message = {
    message: "Welcome to the Brainrot API.",
    routes: [
      { path: "/quotes", description: "Get a list of brainrot quotes" },
      { path: "/facts", description: "Get a list of brainrot facts" },
      { path: "/images", description: "Get a list of brainrot images" },
      { path: "/dictionary", description: "Get a list of brainrot dictionary words" },
      { path: "/names", description: "Get a list of brainrot names" },
      { path: "/jokes", description: "Get a list of brainrot jokes" },
    ],
  };
  return message;
});

app.listen(port, () => {
  console.log(`Server started.\nhttp://localhost:${port}`);
});
