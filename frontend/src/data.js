// import bcrypt from 'bcryptjs';

const data = {
  business: {
    name: 'Muse Cases',
    phone: '1.800.123.4567',
  },
  users: [
    {
      name: 'Luca',
      email: 'admin@lucanovello.com',
      // password: bcrypt.hashSync('zP^8n*YzDdw{M=47'),
      password: 'zP^8n*YzDdw{M=47',
      isAdmin: true,
    },
  ],
  products: [
    {
      slug: 'the-great-wave-off-kanagawa',
      sku: 'the-great-wave-off-kanagawa_',
      name: 'The Great Wave Off Kanagawa',
      artist: 'Katsushika Hokusai',
      description: `The Great Wave off Kanagawa (1820-1831) is a woodblock print by the Japanese ukiyo-e artist Hokusai probably made in late 1831 during the Edo period of Japanese history. The print depicts three boats moving through a storm-tossed sea, with a large wave forming a spiral in the centre and Mount Fuji visible in the background.`,
      brand: 'Muse Phone Cases',
      category: 'Fine Art',
      price: 19.99,
      quantityInStock: 13,
      image:
        '/images/products/Katsushika_Hokusai-The_Great_Wave_Off_Kanagawa.jpg',
      rating: 5,
      numReviews: 14,
    },
    {
      slug: 'girl-with-a-pearl-earring',
      sku: 'girl-with-a-pearl-earring_',
      name: 'Girl With A Pearl Earring',
      artist: 'Jan Vermeer',
      description: `Girl with a Pearl Earring (1665) is an oil painting by Dutch Golden Age painter Johannes Vermeer, dated c. 1665. Going by various names over the centuries, it became known by its present title towards the end of the 20th century after the earring worn by the girl portrayed there.`,
      brand: 'Muse Phone Cases',
      category: 'Fine Art',
      price: 19.99,
      quantityInStock: 2,
      image: '/images/products/Jan_Vermeer-Girl_With_A_Pearl_Earring.jpg',
      rating: 4.5,
      numReviews: 8,
    },
    {
      slug: 'the-kiss',
      sku: 'the-kiss_',
      name: 'The Kiss',
      artist: 'Gustav Klimt',
      description: `The Kiss (circa 1907-1908) is an oil-on-canvas painting with added gold leaf, silver and platinum by the Austrian Symbolist painter Gustav Klimt. It depicts a couple embracing each other, their bodies entwined in elaborate beautiful robes decorated in a style influenced by the contemporary Art Nouveau style and the organic forms of the earlier Arts and Crafts movement.`,
      brand: 'Muse Phone Cases',
      category: 'Fine Art',
      price: 19.99,
      quantityInStock: 11,
      image: '/images/products/Gustav_Klimt-The_Kiss.jpg',
      rating: 5,
      numReviews: 11,
    },
    {
      slug: 'mona-lisa',
      sku: 'mona-lisa_',
      name: 'Mona Lisa',
      artist: 'Leonardo Da Vinci',
      description: `The Mona Lisa (1503) is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world".`,
      brand: 'Muse Phone Cases',
      category: 'Fine Art',
      price: 19.99,
      quantityInStock: 0,
      image: '/images/products/Leonardo_Da_Vinci-Mona_Lisa.jpg',
      rating: 3.5,
      numReviews: 13,
    },
    {
      slug: 'jeanne-hebuterne-with-hat-and-necklace',
      sku: 'jeanne-hebuterne-with-hat-and-necklace_',
      name: 'Jeanne Hebuterne With Hat And Necklace',
      artist: 'Amedeo Modigliani',
      description: `Jeanne Hébuterne with Hat and Necklace (1917) is an oil on canvas painting by Italian painter Amedeo Modigliani. The painting shows a modern woman with her hair tucked under a stylish hat. A special attention is given to her eyes painted in a light shade of blue which comes forward on a darker background.`,
      brand: 'Muse Phone Cases',
      category: 'Fine Art',
      price: 19.99,
      quantityInStock: 11,
      image:
        '/images/products/Amedeo_Modigliani-Jeanne_Hebuterne_With_Hat_And_Necklace.jpg',
      rating: 4.5,
      numReviews: 6,
    },
    {
      slug: 'the-desperate-man',
      sku: 'the-desperate-man_',
      name: 'The Desperate Man',
      artist: 'Gustave Courbet',
      description: `The Desperate Man or Desperation (1843-1845) is an oil on canvas self-portrait by Gustave Courbet, produced early during his stay in Paris. It is now in the private collection of the Conseil Investissement Art BNP Paribas but was displayed in the Musée d'Orsay's 2007 Courbet exhibition.`,
      brand: 'Muse Phone Cases',
      category: 'Fine Art',
      price: 19.99,
      quantityInStock: 7,
      image: '/images/products/Gustave_Courbet-The_Desperate_Man.jpg',
      rating: 5,
      numReviews: 7,
    },
  ],
  slideshow: [
    {
      image: '/images/fashion-1.jpg',
      alt: 'Fashion 1',
    },
    {
      image: '/images/fashion-2.jpg',
      alt: 'Fashion 2',
    },
    {
      image: '/images/fashion-3.jpg',
      alt: 'Fashion 3',
    },
  ],
  devices: [
    {
      brand: 'Apple',
      models: [
        'iPhone 13 Pro Max',
        'iPhone 13 Pro',
        'iPhone 13',
        'iPhone 13 Mini',
        'iPhone SE',
        'iPhone 12 Pro Max',
        'iPhone 12 Pro',
        'iPhone 12',
        'iPhone 12 Mini',
      ],
    },
    {
      brand: 'Samsung',
      models: [
        'Samsung Galaxy S22 Ultra',
        'Samsung Galaxy S22+',
        'Samsung Galaxy S22',
        'Samsung Galaxy S21 FE 5G',
        'Samsung Galaxy S21 Ultra 5G',
        'Samsung Galaxy S21 5G',
      ],
    },
    {
      brand: 'Google',
      models: [
        'Google Pixel 6 Pro',
        'Google Pixel 6',
        'Google Pixel 5 Pro',
        'Google Pixel 5',
      ],
    },
  ],
};

export default data;
