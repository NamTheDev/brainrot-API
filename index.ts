import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port: number = 3000;

app.use(express.json());

interface BrainrotQuote {
  quote: string;
  author: string;
}

interface BrainrotFact {
  fact: string;
  category: string;
}

interface BrainrotImage {
  url: string;
  description: string;
}

interface BrainrotDictionary {
  word: string;
  definition: string;
}

interface BrainrotName {
  name: string;
  meaning: string;
}

interface BrainrotJoke {
  joke: string;
  category: string;
}

const brainrotQuotes: BrainrotQuote[] = [
  { quote: "Sample quote", author: "Sample author" },
];

const brainrotFacts: BrainrotFact[] = [
  { fact: "Sample fact", category: "Sample category" },
];

const brainrotDictionary: BrainrotDictionary[] = [
  { word: "Sample word", definition: "Sample definition" },
];

const brainrotNames: BrainrotName[] = [
  { name: "Sample name", meaning: "Sample meaning" },
];

const brainrotImages: BrainrotImage[] = [
  { url: "https://sample-image.com", description: "Sample image description" },
];

const brainrotJokes: BrainrotJoke[] = [
  { joke: "Sample joke", category: "Sample category" },
];

app.get('/quotes', (req: Request, res: Response) => {
  const randomQuote = brainrotQuotes[Math.floor(Math.random() * brainrotQuotes.length)];
  res.json(randomQuote);
});

app.get('/facts', (req: Request, res: Response) => {
  const randomFact = brainrotFacts[Math.floor(Math.random() * brainrotFacts.length)];
  res.json(randomFact);
});

app.get('/images', (req: Request, res: Response) => {
  const randomImage = brainrotImages[Math.floor(Math.random() * brainrotImages.length)];
  res.json(randomImage);
});

app.get('/dictionary', (req: Request, res: Response) => {
  const randomDictionary = brainrotDictionary[Math.floor(Math.random() * brainrotDictionary.length)];
  res.json(randomDictionary);
});

app.get('/names', (req: Request, res: Response) => {
  const randomName = brainrotNames[Math.floor(Math.random() * brainrotNames.length)];
  res.json(randomName);
});

app.get('/jokes', (req: Request, res: Response) => {
  const randomJoke = brainrotJokes[Math.floor(Math.random() * brainrotJokes.length)];
  res.json(randomJoke);
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
  res.json(message);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
