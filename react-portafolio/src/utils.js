export const getImageUrl = (path) =>{
    // allows you to create a complete url for each image -> http://localhost:3000/assets/imagen.jpg
    return new URL(`/assets/${path}`, import.meta.url).href;
}