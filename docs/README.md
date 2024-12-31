# Brainrot API Documentation

## Table of Contents
- [Introduction](#introduction)
- [Endpoints](#endpoints)
- [Example Request](#example-request)
- [License](#license)

## Introduction

The Brainrot API is a simple API that provides random quotes, facts, dictionary words, names, and jokes. It is built using the Bun JavaScript runtime and the Elysia framework. The API is deployed at [https://brainrot-api-c9w8.onrender.com/](https://brainrot-api-c9w8.onrender.com/).

## Endpoints

### Base URL
```
https://brainrot-api-c9w8.onrender.com
```

### Get a Random Quote
- **Endpoint:** `/quotes`
- **Method:** `GET`
- **Description:** Returns a random quote.
- **Response:**
  ```json
  {
    "quote": "Skibidi toilet rizzing up Baby Gronk, no cap."
  }
  ```

### Get a Random Fact
- **Endpoint:** `/facts`
- **Method:** `GET`
- **Description:** Returns a random fact.
- **Response:**
  ```json
  {
    "fact": "If you Gyatt too hard in Ohio, you'll become Skibidi Toilet."
  }
  ```

### Get a Random Dictionary Word
- **Endpoint:** `/dictionary`
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
- **Endpoint:** `/names`
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
- **Endpoint:** `/jokes`
- **Method:** `GET`
- **Description:** Returns a random joke.
- **Response:**
  ```json
  {
    "joke": "Why did the Rizzler gyatt in Ohio? To fanum tax the skibidi toilet, no cap!"
  }
  ```

### Get Available Routes
- **Endpoint:** `/`
- **Method:** `GET`
- **Description:** Returns a list of available routes and their descriptions.
- **Response:**
  ```json
  {
    "message": "Welcome to the Brainrot API.",
    "routes": [
      { "path": "/quotes", "description": "Get a list of brainrot quotes" },
      { "path": "/facts", "description": "Get a list of brainrot facts" },
      { "path": "/dictionary", "description": "Get a list of brainrot dictionary words" },
      { "path": "/names", "description": "Get a list of brainrot names" },
      { "path": "/jokes", "description": "Get a list of brainrot jokes" }
    ]
  }
  ```

## Example Request

### Node.js
```javascript
const axios = require('axios');

axios.get('https://brainrot-api-c9w8.onrender.com/quotes')
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

response = requests.get('https://brainrot-api-c9w8.onrender.com/quotes')
if response.status_code == 200:
    print(response.json())
else:
    print(f'Error fetching quote: {response.status_code}')
```

### PHP
```php
<?php
$ch = curl_init('https://brainrot-api-c9w8.onrender.com/quotes');
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
curl 'https://brainrot-api-c9w8.onrender.com/quotes'
```

### Other Languages
You can use any HTTP client library available in your programming language to make requests to the API. The examples above use Axios for Node.js and the `requests` library for Python.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Note:** The API is built using Bun and Elysia, and the data is stored in JSON files. The API is deployed on Render, and the source code is available on GitHub.