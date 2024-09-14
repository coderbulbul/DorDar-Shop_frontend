function getImageURL(name) {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
  // return new URL(`http://localhost:8000/images/${name}`, import.meta.url).href;
}

export { getImageURL };
