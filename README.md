# Feik

Mock data generator

## Installation

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

// Generate a user with random props
const user = {
  firstName: feik.name.firstName(),
  lastName: feik.name.lastName(),
  email: feik.internet.email(),
};

// Output: ->
// {
//   firstName: 'Aaron',
//   lastName: 'Johnston',
//   email: 'example.org',
// }

// Get consistent results
feik.set('name.firstName', ['Mike', 'John', 'Paul']);
// Restore original results
feik.restore('name.firstName');
// Also, you could call the 'set' method without the 2nd param in order to restore original results.
feik.set('name.firstName')

// Compile
feik.compile('{name.firstName}, {name.lastName}');
// Output: -> Bert, Batz

// Build your own key - It will be added to the 'custom' workspace
feik.build('point', () => {
  x: Math.random(),
  y: Math.random()
});

const point = feik.custom.point();
```
