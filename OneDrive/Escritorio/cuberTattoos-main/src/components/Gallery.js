import React from 'react';
import Gallery from './Gallery';



const images = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
];

function App() {
  return (
    <div>
      <h1>My Gallery</h1>
      <Gallery images={images} />
    </div>
  );
}

export default App;