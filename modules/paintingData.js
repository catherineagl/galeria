const descriptions = [
  "Aquí podemos observar una obra maestra llena de gracia y elegancia.",
  "Mi ex familia, la perfección plasmada en una foto",
  "Esa sonrisa, esa carita que me mata 😍",
  "Nuestro primer viaje juntas y uno de mis dias más felices.",
  "Mujer mas perfecta? No hay.",
  "Diva, regia, inalcanzable.",
  "Esa caritaaa, esos gestos de niña malcriada, me encanta 😫.",
  "Esos ojitos hermosos.",
  "Si, así de preciosa va esa niña a trabajar.",
  "Mención especial para mis niños, estarán por siempre en mi corazón.",
  "Nada que decir, una obra de arte.",
  "Ese flow mi amor.",
  "Llegué de la balberia.",
  "Mi foto favorita por mucho, mujer mas perfecta que esta no hay en el mundo.",
  "Mi segunda foto favorita, porque están cuchis mis dos bebés.",
  "Uno de los tantos días en los que terminamos y me enviaba fotos toda seria, y tan hermosa que se ve así."
]

export const paintingData = [
...Array.from({ length: 4 }, (_, i) => ({
    // Array.from creates an array from an array-like object. The first parameter is the array-like object. The second parameter is a map function that is called for each element in the array-like object. The map function takes two parameters: the element and the index. The map function returns the value that will be added to the new array. In this case, we are returning an object with the painting data. `_` is a placeholder for the element. We don't need it because we are not using the element. `i` is the index. We use it to set the painting number.
    imgSrc: `arte/${i + 1}.png`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 4, // width of the painting
    height: 5, // height of the painting
    position: { x: -15 + 10 * i, y: 2, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      // info about the painting
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: descriptions[i],
      year: `2024`,
      link: "https://github.com/theringsofsaturn",
    },
  })),
  // Back Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `arte/${i + 5}.png`,
    width: 4,
    height: 5,
    position: { x: -15 + 10 * i, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: descriptions[i+4],
      year: `2024`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
  })),
  // Left Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `arte/${i + 9}.png`,
    width: 4,
    height: 5,
    position: { x: -19.5, y: 2, z: -15 + 10 * i },
    rotationY: Math.PI / 2,
    info: {
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: descriptions[i+8],
      year: `2024`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
  })),
  // Right Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `arte/${i + 13}.png`,
    width: 4,
    height: 5,
    position: { x: 19.5, y: 2, z: -15 + 10 * i },
    rotationY: -Math.PI / 2,
    info: {
      title: `Mi Reina ❤️`,
      artist: "El mismísimo Dios",
      description: descriptions[i+12],
      year: `2023`,
      link: "https://www.instagram.com/lorenapsm18/",
    },
    })),
]





/* export const paintingData = [
  // Front Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    // Array.from creates an array from an array-like object. The first parameter is the array-like object. The second parameter is a map function that is called for each element in the array-like object. The map function takes two parameters: the element and the index. The map function returns the value that will be added to the new array. In this case, we are returning an object with the painting data. `_` is a placeholder for the element. We don't need it because we are not using the element. `i` is the index. We use it to set the painting number.
    imgSrc: `artworks/${i + 1}.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 5, // width of the painting
    height: 3, // height of the painting
    position: { x: -15 + 10 * i, y: 2, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      // info about the painting
      title: `Van Gogh ${i + 1}`,
      artist: 'Vincent van Gogh',
      description: `This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty. Artwork ${
        i + 1
      } perfectly encapsulates his love for the beauty of everyday life.`,
      year: `Year ${i + 1}`,
      link: 'https://github.com/theringsofsaturn',
    },
  })),
  // Back Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 5}.jpg`,
    width: 5,
    height: 3,
    position: { x: -15 + 10 * i, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Van Gogh ${i + 5}`,
      artist: 'Vincent van Gogh',
      description: `Artwork ${
        i + 5
      } by Vincent van Gogh is an exceptional piece showcasing his remarkable ability to capture emotion and atmosphere.`,
      year: `Year ${i + 5}`,
      link: 'https://github.com/theringsofsaturn',
    },
  })),
  // Left Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 9}.jpg`,
    width: 5,
    height: 3,
    position: { x: -19.5, y: 2, z: -15 + 10 * i },
    rotationY: Math.PI / 2,
    info: {
      title: `Van Gogh ${i + 9}`,
      artist: 'Vincent van Gogh',
      description: `With its striking use of color and brushwork, Artwork ${
        i + 9
      } is a testament to Van Gogh's artistic genius.`,
      year: `Year ${i + 9}`,
      link: 'https://github.com/theringsofsaturn',
    },
  })),
  // Right Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 13}.jpg`,
    width: 5,
    height: 3,
    position: { x: 19.5, y: 2, z: -15 + 10 * i },
    rotationY: -Math.PI / 2,
    info: {
      title: `Van Gogh ${i + 13}`,
      artist: 'Vincent van Gogh',
      description: `Artwork ${
        i + 13
      } is a captivating piece by Vincent van Gogh, reflecting his distinctive style and deep passion for art.`,
      year: `Year ${i + 13}`,
      link: 'https://github.com/theringsofsaturn',
    },
  })),
];
 */