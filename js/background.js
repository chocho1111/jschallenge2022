const images = [
    'https://cdn.wallpapersafari.com/31/2/A7C1GQ.jpg',
    'https://wallpapercave.com/wp/wp4465114.jpg',
    'https://images7.alphacoders.com/996/thumb-1920-996873.jpg',
];

const chosenimage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(${chosenimage})`;
