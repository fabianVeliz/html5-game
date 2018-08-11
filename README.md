# Feik

Generate mock data easily

## Instalation

```javascript
yarn add feik
// or
npm install feik
```

## Usage
```javascript
import Fk from 'feik';

// Set locale - default (en)
const feik = new Fk({
  locale: 'es'
});

// Generate a user with random results.
const user = {
  name: feik.name.firstName(),
  email: feik.internet.email(),
};

// Output: ->
// {
//   name: 'Bert',
//   email: 'example.org',
// }

// Get consistent results. Follow API path.
feik.set('name.firstName', ['Mike', 'John', 'Paul']);

// Compile
feik.compile('{name.firstName}, {name.lastName}');
// Output: ->
// Bert, Batz

// Build your own key - It will be added to the 'custom' workspace.
feik.build('point', () => {
  x: Math.random(),
  y: Math.random()
});

const point = feik.custom.point();
```
