# Brainrot API Documentation

## Table of Contents
- [Introduction](#introduction)
- [Endpoints](#endpoints)
- [Example Request](#example-request)
- [License](#license)

## Introduction

The Brainrot API is a simple API that provides random quotes, facts, dictionary words, names, and jokes. It is built using the Bun JavaScript runtime and the Elysia framework.

## Endpoints

### Base URL
```
https://github.com/NamTheDev/brainrot-API
```

### Get a Random Quote
- **Endpoint:** [`/api/quotes`](https://brainrot-api-c9w8.onrender.com/api/quotes)
- **Method:** `GET`
- **Description:** Returns a random quote.
- **Response:**
  ```json
  {
    "quote": "Skibidi toilet rizzing up Baby Gronk, no cap."
  }
  ```

### Get a Random Fact
- **Endpoint:** [`/api/facts`](https://brainrot-api-c9w8.onrender.com/api/facts)
- **Method:** `GET`
- **Description:** Returns a random fact.
- **Response:**
  ```json
  {
    "fact": "If you Gyatt too hard in Ohio, you'll become Skibidi Toilet."
  }
  ```

### Get a Random Dictionary Word
- **Endpoint:** [`/api/dictionary`](https://brainrot-api-c9w8.onrender.com/api/dictionary)
- **Method:** `GET`
- **Description:** Returns a random dictionary word with its meaning.
- **Response:**
  ```json
  {
    "word": "Skibidi",
    "meaning": "That Ohio rizz when the toilet goes brrr and you gotta hit the fanum tax. Basically, it's a sigma move, no cap."
  }
  ```

### Get a Random Name
- **Endpoint:** [`/api/names`](https://brainrot-api-c9w8.onrender.com/api/names)
- **Method:** `GET`
- **Description:** Returns a random name with its meaning.
- **Response:**
  ```json
  {
    "name": "Skibidi Rizzler",
    "meaning": "The ultimate sigma, radiating unadulterated rizz and skibidi energy. He's so Ohio it's bussin'."
  }
  ```

### Get a Random Joke
- **Endpoint:** [`/api/jokes`](https://brainrot-api-c9w8.onrender.com/api/jokes)
- **Method:** `GET`
- **Description:** Returns a random joke.
- **Response:**
  ```json
  {
    "joke": "Why did the Rizzler gyatt in Ohio? To fanum tax the skibidi toilet, no cap!"
  }
  ```

### Get Available Routes
- **Endpoint:** [`/api`](https://brainrot-api-c9w8.onrender.com/api)
- **Method:** `GET`
- **Description:** Returns a list of available routes and their descriptions.
- **Response:**
  ```json
  {
    "message": "Welcome to the Brainrot API.",
    "routes": [
      { "path": "/api/quotes", "description": "Get a list of brainrot quotes" },
      { "path": "/api/facts", "description": "Get a list of brainrot facts" },
      { "path": "/api/dictionary", "description": "Get a list of brainrot dictionary words" },
      { "path": "/api/names", "description": "Get a list of brainrot names" },
      { "path": "/api/jokes", "description": "Get a list of brainrot jokes" }
    ]
  }
  ```

## Example Request

### Node.js
```javascript
const axios = require('axios');

axios.get('https://brainrot-api-c9w8.onrender.com/api/quotes')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching quote:', error);
  });
```

### Python
```python
import requests

response = requests.get('https://brainrot-api-c9w8.onrender.com/api/quotes')
if response.status_code == 200:
    print(response.json())
else:
    print(f'Error fetching quote: {response.status_code}')
```

### PHP
```php
<?php
$ch = curl_init('https://brainrot-api-c9w8.onrender.com/api/quotes');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
if ($response === false) {
    echo 'Error fetching quote: ' . curl_error($ch);
} else {
    echo $response;
}
curl_close($ch);
```

### Curl
```bash
curl 'https://brainrot-api-c9w8.onrender.com/api/quotes'
```

### Other Languages
You can use any HTTP client library available in your programming language to make requests to the API.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
