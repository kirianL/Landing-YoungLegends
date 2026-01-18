export const SITE_SETTINGS = {
  title: "Young Legends",
  tagline: {
    es: "The world is ours",
    en: "The world is ours",
  },
  heroText: {
    es: "Bienvenidos a Young Legends. Donde nacen las leyendas del mañana. Más que un sello, una generación que transforma el arte en legado. Si tú también crees en dejar huella, estás en el lugar correcto.",
    en: "Welcome to Young Legends. Where tomorrow's legends are born. More than a label, a generation transforming art into legacy. If you also believe in leaving a mark, you're in the right place.",
  },
  manifestoTitle: {
    es: "DONDE EL ARTE SE CONVIERTE EN LEGADO",
    en: "WHERE ART BECOMES LEGACY",
  },
  manifesto: {
    es: [
      "Young Legends es un colectivo creado para impulsar el arte con una intención que va más allá del beneficio propio: aportar a la cultura, dejar huella y hacer historia. Nacimos con la visión de construir una nueva generación de leyendas: voces auténticas, propuestas frescas y un compromiso real con el arte y su evolución.",
      "Creemos en el talento sin filtros, en el trabajo en equipo y en el poder de una comunidad que apoya, crea y sueña en grande. Más que un sello, somos una familia que vibra con cada barra, cada beat y cada paso que damos hacia el futuro.",
    ],
    en: [
      "Young Legends is a collective created to drive art with an intention that goes beyond self-profit: contributing to culture, leaving a mark, and making history. We were born with the vision of building a new generation of legends: authentic voices, fresh proposals, and a real commitment to art and its evolution.",
      "We believe in unfiltered talent, in teamwork, and in the power of a community that supports, creates, and dreams big. More than a label, we are a family that vibrates with every bar, every beat, and every step we take towards the future.",
    ],
  },
  history: {
    es: [
      "Young Legends nació de una casualidad que parecía escrita por el destino. Un grupo de amigos unidos por el amor a la cultura del hip hop: la música, las rimas, el arte y la forma de vida. Lo que empezó como encuentros, grabaciones y sueños compartidos, se transformó con el tiempo en una visión más grande.",
      "Después de años de trabajo, aprendizajes y logros alcanzados, entendimos que el verdadero poder estaba en la unión. Que el éxito no se mide solo en cifras, sino en impacto, comunidad y crecimiento colectivo.",
      "Orgullosos de lo que hemos construido y con la ambición intacta, decidimos dar forma a este colectivo: Young Legends. Un espacio donde los valores que nos definen, la lealtad, el compromiso, los sueños grandes y la convicción de no tener límites, siguen marcando el camino.",
    ],
    en: [
      "Young Legends was born from a coincidence that seemed written by fate. A group of friends united by their love for hip hop culture: the music, the rhymes, the art, and the way of life. What started as meetups, recordings, and shared dreams, transformed over time into a larger vision.",
      "After years of work, learning, and achievements, we understood that true power lay in unity. That success is not measured only in figures, but in impact, community, and collective growth.",
      "Proud of what we've built and with our ambition intact, we decided to shape this collective: Young Legends. A space where the values that define us, loyalty, commitment, grand dreams, and the conviction of having no limits, continue to lead the way.",
    ],
  },
  contactEmail: "younglegends4lcr@gmail.com",
  contactWhatsApp: "7036 2578",
  communityLink: "https://chat.whatsapp.com/K3sq69eSw465F6o0OLYmR8",
  pillars: [
    {
      title: { es: "Lealtad", en: "Loyalty" },
      description: {
        es: "Más que un sello, somos una familia unida por un mismo propósito.",
        en: "More than a label, we are a family united by a single purpose.",
      },
    },
    {
      title: { es: "Compromiso", en: "Commitment" },
      description: {
        es: "Dedicación absoluta a la excelencia en cada barra, beat y toma.",
        en: "Absolute dedication to excellence in every bar, beat, and shot.",
      },
    },
    {
      title: { es: "Cultura", en: "Culture" },
      description: {
        es: "Aportando al crecimiento del HipHop y el arte urbano en nuestro país.",
        en: "Contributing to the growth of HipHop and urban art in our country.",
      },
    },
    {
      title: { es: "Legado", en: "Legacy" },
      description: {
        es: "No buscamos el momento, construimos lo que durará para siempre.",
        en: "We don't seek the moment, we build what will last forever.",
      },
    },
  ],
  stats: [
    { label: { es: "Fundación", en: "Founded" }, value: "2025" },
    { label: { es: "Artistas", en: "Artists" }, value: "+10" },
    { label: { es: "Pasión", en: "Passion" }, value: "100%" },
  ],
};

export const ROLE_TRANSLATIONS: Record<string, Record<string, string>> = {
  artist: {
    es: "Artista",
    en: "Artist",
  },
  producer: {
    es: "Productor",
    en: "Producer",
  },
  dj: {
    es: "DJ",
    en: "DJ",
  },
  videographer: {
    es: "Videógrafo",
    en: "Videographer",
  },
  photographer: {
    es: "Fotógrafo",
    en: "Photographer",
  },
};

export const MEMBERS = [
  {
    id: "pwatersounds",
    name: "PWaterSounds",
    slug: "pwatersounds",
    roles: ["producer"],
    themeColor: "#00fff2", // Cyan/Teal
    image: "/assets/members/PwaterSounds/PwaterSounds1.webp",
    bio: {
      es: "PWaterSounds es un productor musical costarricense. Su sonido fusiona lo clásico del HipHop con texturas modernas que exploran el Rap y el Trap, generando una identidad sonora versátil y reconocible. Su recorrido en la música nace desde la curiosidad y el deseo de crear desde cero, encontrando en la producción un lenguaje propio. A lo largo de su trayectoria ha trabajado con múltiples artistas emergentes y consolidados, destacando por su oído detallado, su enfoque emocional y su compromiso con el crecimiento colectivo. Su trabajo no solo construye beats, sino atmósferas que elevan cada proyecto al siguiente nivel.",
      en: "PWaterSounds is a Costa Rican music producer. His sound fuses classic HipHop with modern textures that explore Rap and Trap, creating a versatile and recognizable sonic identity. His journey in music stems from curiosity and the desire to create from scratch, finding in production a language of his own. Throughout his career he has worked with multiple emerging and established artists, standing out for his detailed ear, his emotional focus and his commitment to collective growth. His work doesn't just build beats, but atmospheres that elevate each project to the next level.",
    },
    portfolio: [
      {
        type: "discographySection",
        title: { es: "Producciones", en: "Productions" },
        items: [
          {
            title: "NIGHT VISION",
            type: "Album",
            year: "2024",
            image:
              "/assets/members/PwaterSounds/albumes/NIGHT VISION_album_cover.jpg",
          },
          {
            title: "Blackboy P!",
            type: "Album",
            year: "2022",
            image:
              "/assets/members/PwaterSounds/albumes/Blackboy P!_album_cover.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "xeuz",
    name: "Xeuz",
    slug: "xeuz",
    roles: ["artist"],
    themeColor: "#ff0000", // Red
    monthlyListeners: "61,308",
    image: "/assets/members/Xeuz/Xeuz.jpg",
    bio: {
      es: "Xeuz es un artista costarricense nacido el 4 de marzo del 2002, Oriundo de San José, capital de su país y lugar que se muestra impregnado en muchas de sus letras, Amante del HipHop en todas sus formas de expresión y elementos, Teniendo como primer encuentro con dicha cultura el graffiti, decide incursionar en el rap en el 2015, poco a poco entre freestyles y grabaciones encontrando un estilo único que transmite no solo originalidad y frescura sino que también un vistazo a realidades en el día a día de una persona que busca un escape de la sociedad y expresarse de la manera mas real posible.",
      en: "Xeuz is a Costa Rican artist born on March 4, 2002. Hailing from San José, the country's capital and a place that is impregnated in many of his lyrics, he is a lover of HipHop in all its forms of expression and elements. Having his first encounter with this culture through graffiti, he decided to venture into rap in 2015, gradually finding through freestyles and recordings a unique style that transmits not only originality and freshness but also a glimpse into the day-to-day realities of someone seeking an escape from society and expressing themselves in the most real way possible.",
    },
    portfolio: [
      {
        type: "discographySection",
        title: { es: "Discografía", en: "Discography" },
        items: [
          {
            title: "MOB II",
            type: "Mixtape",
            year: "2025",
            image: "/assets/members/Xeuz/albumes/MOB II_album_cover.jpg",
          },
          {
            title: "MOB",
            type: "Mixtape",
            year: "2025",
            image: "/assets/members/Xeuz/albumes/MOB_album_cover.jpg",
          },
          {
            title: "4U",
            type: "Album",
            year: "2024",
            image: "/assets/members/Xeuz/albumes/4U_album_cover.jpg",
          },
          {
            title: "NASTY FLAKO",
            type: "EP",
            year: "2023",
            image: "/assets/members/Xeuz/albumes/NASTY FLAKO_album_cover.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "4bes",
    name: "4bes",
    slug: "4bes",
    roles: ["artist"],
    themeColor: "#ffcc00", // Amarillo Pollito
    image: "/assets/members/4bes/4Bes1.jpeg",
    bio: {
      es: "4bes es un artista costarricense y miembro de Young Legends.",
      en: "4bes is a Costa Rican artist and member of Young Legends.",
    },
    portfolio: [
      {
        type: "discographySection",
        title: { es: "Música", en: "Music" },
        items: [
          {
            title: "Star-Mafia",
            type: "Album",
            year: "2024",
            image: "/assets/members/4bes/Album/Star-Mafia_album_cover.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "jeybil",
    name: "Jeybil",
    slug: "jeybil",
    roles: ["producer"],
    themeColor: "#0080ff", // Blue
    image: "/assets/members/Jeybil/Jeybil1.jpeg",
    bio: {
      es: "Jeybil es un productor musical y miembro de Young Legends.",
      en: "Jeybil is a music producer and member of Young Legends.",
    },
  },
  {
    id: "ozzy",
    name: "Ozzy",
    slug: "ozzy",
    roles: ["dj"],
    themeColor: "#ffaa00", // Orange
    image: "/assets/members/Ozzy1/Ozzy.jpg",
    bio: {
      es: "OZZY es un DJ costarricense. Apasionado por el HipHop y sus variantes, desarrolla un estilo propio que abarca géneros como Rap, Afrosounds, Edits & Blends y Trap. Su amor por la música nace desde la infancia, inspirado por su padre, también DJ. Inicia mezclando en fiestas familiares y en 2023 se forma profesionalmente en DJ LAB CR, obteniendo su título como DJ profesional. Desde entonces ha compartido tarima con figuras reconocidas de la escena nacional y ha sido telonero de artistas internacionales como Akapellah, Nanpa Básico y Granuja. Su selección única y energía en tarima hacen de cada show una experiencia distinta.",
      en: "OZZY is a Costa Rican DJ. Passionate about HipHop and its variants, he develops a style of his own covering genres like Rap, Afrosounds, Edits & Blends, and Trap. His love for music was born in childhood, inspired by his father, also a DJ. He began mixing at family parties and in 2023 he trained professionally at DJ LAB CR, obtaining his title as a professional DJ. Since then he has shared the stage with recognized figures of the national scene and has opened for international artists like Akapellah, Nanpa Básico, and Granuja. His unique selection and on-stage energy make each show a distinct experience.",
    },
  },
  {
    id: "giankoash",
    name: "Giankoash",
    slug: "giankoash",
    roles: ["videographer", "photographer"],
    themeColor: "#00ff80", // Spring Green
    image: "/assets/members/Giankoash/Giankoash1.jpg",
    bio: {
      es: "Giankoash es un videógrafo y fotógrafo costarricense. Apasionado por capturar momentos que cuentan historias reales, encuentra en la cámara una forma de expresión tan poderosa como cualquier verso. Su conexión con la cultura HipHop y el arte urbano lo lleva a documentar desde shows en vivo hasta sesiones íntimas de estudio, siempre con una estética cruda, creativa y auténtica. A lo largo de los años ha trabajado con diversos artistas de la escena nacional, construyendo un estilo visual que destaca por su ojo detallista, su visión narrativa y su compromiso con el arte independiente.",
      en: "Giankoash is a Costa Rican videographer and photographer. Passionate about capturing moments that tell real stories, he finds in the camera a form of expression as powerful as any verse. His connection with HipHop culture and urban art leads him to document everything from live shows to intimate studio sessions, always with a raw, creative, and authentic aesthetic. Over the years he has worked with various artists from the national scene, building a visual style that stands out for his detailed eye, his narrative vision, and his commitment to independent art.",
    },
  },
  {
    id: "kstro",
    name: "Kstro",
    slug: "kstro",
    roles: ["photographer"],
    themeColor: "#ffffff", // White/Silver
    image: "/assets/members/Kstro/Kstro1.jpg",
    bio: {
      es: "Kstro es un fotógrafo costarricense nacido el 31 de diciembre del 2002. Apasionado por capturar la esencia de los momentos desde una mirada auténtica y urbana, encuentra en la fotografía una forma de documentar la cultura que lo rodea. Su enfoque va más allá de la estética: busca narrar historias reales a través de cada toma. Influenciado por el movimiento HipHop y el arte callejero, ha trabajado con artistas de la escena nacional, aportando una visión visual cruda, honesta y cargada de identidad. Su lente se ha convertido en una herramienta clave para inmortalizar el crecimiento del arte independiente costarricense.",
      en: "Kstro is a Costa Rican photographer born on December 31, 2002. Passionate about capturing the essence of moments from an authentic and urban perspective, he finds in photography a way to document the culture that surrounds him. His focus goes beyond aesthetics: he seeks to tell real stories through each shot. Influenced by the HipHop movement and street art, he has worked with artists on the national scene, providing a raw, honest, and identity-charged visual vision. His lens has become a key tool for immortalizing the growth of Costa Rican independent art.",
    },
  },
  {
    id: "hibearm",
    name: "Hibearm",
    slug: "hibearm",
    roles: ["photographer"],
    themeColor: "#7000ff", // Purple
    image: "/assets/members/Hibearm/Hibearm1.jpg",
    bio: {
      es: "Hibearm es un fotógrafo costarricense Su mirada artística se enfoca en capturar la emoción y la autenticidad en cada imagen, combinando elementos del retrato, la cultura urbana y la sensibilidad estética. Su conexión con la fotografía nace del deseo de inmortalizar momentos reales y contar historias visuales que hablen por sí solas. Con una identidad marcada por lo íntimo y lo crudo, ha trabajado con diversos artistas de la escena independiente, aportando un estilo visual que resalta por su atmósfera y profundidad. Para Hibearm, cada toma es una forma de expresar lo que a veces no se puede decir con palabras.",
      en: "Hibearm is a Costa Rican photographer. His artistic perspective focuses on capturing emotion and authenticity in each image, combining elements of portraiture, urban culture, and aesthetic sensibility. His connection with photography stems from the desire to immortalize real moments and tell visual stories that speak for themselves. With an identity marked by the intimate and the raw, he has worked with various artists from the independent scene, providing a visual style that stands out for its atmosphere and depth. For Hibearm, each shot is a way of expressing what sometimes cannot be said with words.",
    },
  },
];

export const NEWS = [
  {
    id: "fichaje-4bes-jeybil",
    title: {
      es: "NUEVOS FICHAJES: 4BES & JEYBIL",
      en: "NEW SIGNINGS: 4BES & JEYBIL",
    },
    slug: "fichaje-4bes-jeybil",
    publishedAt: "2026-01-16T12:00:00Z",
    category: "announcement",
    excerpt: {
      es: "En Young Legends siempre hemos creído que la unión hace la fuerza. Por eso nos complace presentarles a nuestros nuevos fichajes de este 2026. Dos promesas de la música costarricense que con su estilo único han logrado romper puertas y vienen con todas las ganas de seguir creciendo. @4bes4vvvv @jeybil.wtfff gracias por sumarse a la familia, vamos por todo. YL4L!",
      en: "At Young Legends, we have always believed that unity is strength. That's why we are pleased to introduce our new signings for 2026. Two promises of Costa Rican music who, with their unique style, have managed to break down doors and come with all the desire to keep growing. @4bes4vvvv @jeybil.wtfff thank you for joining the family, let's go for it all. YL4L!",
    },
    image: "/assets/News - Events/placeholder.webp",
    video: "/assets/News - Events/4bes-Jeybil.mp4",
  },
  {
    id: "legends-social-club",
    title: { es: "LEGENDS SOCIAL CLUB", en: "LEGENDS SOCIAL CLUB" },
    slug: "legends-social-club",
    publishedAt: "2025-06-07T20:00:00Z",
    category: "event",
    excerpt: {
      es: "Presentado por YL en colaboración con Old Fresco el pasado 7 de junio en el edificio patrimonial La Alhambra.",
      en: "Presented by YL in collaboration with Old Fresco this past June 7th at the heritage building La Alhambra.",
    },
    image: "/assets/News - Events/placeholder.webp",
    location: {
      es: "Edificio patrimonial La Alhambra",
      en: "La Alhambra Heritage Building",
    },
    status: "past",
    presentedBy: "Young Legends + Old Fresco",
  },
];
