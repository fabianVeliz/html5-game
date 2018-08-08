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
import fk from 'feik';

// Set locale
const feik = new fk({
  locale: 'es'
});

// Set options to 'name' key
feik.set('name', ['Mike', 'John', 'Paul']);

// Generate a user with random (email and city).
const user = {
  name: feik.name(),
  email: feik.email(),
  city: feik.city()
};

// {
//   name: 'John',
//   email: 'brian.riley@erich.br',
//   city: 'New York'
// }

// Build your own key
feik.build('point', () => {
  x: Math.random(),
  y: Math.random()
});

const point = feik.point();
```