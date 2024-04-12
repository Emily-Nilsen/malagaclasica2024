const events = [
  // Concert 27 May
  {
    id: 1,
    locale: 'en',
    date: `27 May, 2024`,
    price: `regular`,
    title: `PRAYER - Opening Concert`,
    location: `Echegaray Theatre, 8 p.m.`,
    sentence: [
      `Immerse yourself in an eclectic musical experience titled "Prayer." Pachelbel kicks off with his timeless Canon, now enriched with strings and organ, a sea of sounds surrounding the audience in an infrequent performance of the well-known work.`,
      `Next, the world premiere of Josu de Solaun's "Madrigal," a piece for string quartet in which De Solaun, one of the most versatile musicians of the scene, brings us back to a counterpoint tradition dating back centuries to show its ever-present relevance.`,
      `Albinoni’s Sonata da Chiesa features an emotive dialogue between violin and organ which shows virtuosic and creative compositional skills. Turina evokes the characteristic Spanish features of passion and sacrifice, with his "Oración del Torero."`,
      `Schubert leads us into the celestial Ave Maria, in a version where the violin becomes both the melodic voice and choir. The rendition of Gomez’s work follows, fusing violin, strings, and organ. `,
      `Join us to explore these diverse compositions, each being, in its way, a prayer from the depths of the soul.`,
    ],
    detailsOne: [
      {
        composer: [`Johann Pachelbel (1653-1706)`],
        info: `Canon in D major`,
        artists: [`Artists of the Festival strings`, `Antonio del Pino organ`],
      },
      {
        composer: [`Málaga Clásica Talents`],
        info: `A selected group of young artists perform a chamber work to be announced`,
      },
      {
        composer: [`Josu de Solaun (1981-)`],
        info: `Tombeau: a Bernardo de Clairveaux’, for string quartet (World Premiere)`,
        artists: [
          `Jesús Reina violin`,
          `Nicolas Dautricourt violin`,
          `Razvan Popovici viola`,
          `Per Nyström cello`,
        ],
      },
      {
        composer: [`Tomaso Albinoni (1671-1751)`],
        info: `Sonata de Chiesa in G minor, Op. 4, for violin and organ`,
        artists: [`Jesús Reina violin`, `Antonio del Pino organ`],
      },
      {
        composer: [`Joaquín Turina (1882-1949)`],
        info: `‘La oración del torero’, Op. 34, for string quartet`,
        artists: [
          `Clemence de Forceville violin`,
          `Anna Margrethe Nilsen violin`,
          `Razvan Popovici viola`,
          `Øyvind Gimse cello`,
        ],
      },
      {
        composer: [`Franz Schubert (1797-1828)`],
        info: `‘Ave Maria’, D. 839, Op. 52 No. 6 (arr. Wilhelmj)`,
        artists: [`Jesús Reina violin`, `Antonio del Pino organ`],
      },
      {
        composer: [`William Gomez (1939-2000)`],
        info: `‘Ave Maria’`,
        artists: [
          `Anna Margrethe Nilsen violin`,
          `Artists of the Festival strings`,
          `Antonio del Pino organ`,
        ],
      },
    ],
    // detailsTwo: [
    //   {
    //     composer: [`Béla Bartók (1882-1945)`, `Luciano Berio (1925-2003)`],
    //     info: `Selección de dúos para dos violines`,
    //     artists: [`Joanna Wronko violín`, `Anna Margrethe Nilsen violín`],
    //   },
    //   {
    //     composer: [`Zoltán Kodály (1882-1967)`],
    //     info: `Dúo para violín y violonchelo, Op.7`,
    //     artists: [`Jesus Reina violín`, `Adolfo Gutiérrez violonchelo`],
    //   },
    // ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686310/M%C3%A1laga%20Cl%C3%A1sica/day-1_cdxl2h.webp',
    image_position: `top center`,
  },

  // Concert 28 May
  {
    id: 2,
    locale: 'en',
    date: `28 May, 2024`,
    price: `regular`,
    title: `MUST IT BE?`,
    location: `Echegaray Theatre, 8 p.m.`,
    sentence: [
      `Felix Mendelssohn takes us on an emotional journey with his String Quartet No. 2 in A Minor, where a quotation from his song "Ist es wahr?” (“Must it be?”) serves as a unifying motif, a quotation that references destiny and freedom, and which also gives the title to the program.`,
      `Then, Johann Sebastian Bach envelops us in the beauty of the Air on the G String, a recognisable melody performed on violin and piano.`,
      `Brahms’ Sonata No. 3 for violin and piano completes this musical evening. Brahms said that a force, or “supreme spirit”, creates his works through him.`,
      `These works, such as the sonata in D minor, provoke deep resonances in the listener's spirit.`,
    ],
    detailsOne: [
      {
        composer: [`Felix Mendelssohn (1809-1847)`],
        info: `String quartet No. 2 in A minor, Op. 13`,
        artists: [
          `Jesús Reina violin`,
          `Anna Margrethe Nilsen violin`,
          `Razvan Popovici viola`,
          `Gabriel Ureña cello`,
        ],
      },
    ],
    detailsTwo: [
      {
        composer: [`Johann Sebastian Bach (1685-1750)`],
        info: `‘Air on the G string‘ from the Orchestral Suite No. 3 in D major (arr. August Wilhelmj), for violin and piano`,
        artists: [`Jesús Reina violin`, `Josu de Solaun piano`],
      },
      {
        composer: [`Johannes Brahms (1833-1897)`],
        info: `Sonata for violin and piano No. 3 in D minor, Op. 108`,

        artists: [`Jesús Reina violin`, `Josu de Solaun piano`],
      },
    ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686310/M%C3%A1laga%20Cl%C3%A1sica/day-2_jlqsfq.webp',
    image_position: `top center`,
  },

  // Concert 29 May
  {
    id: 3,
    locale: 'en',
    date: `29 May, 2024`,
    price: `regular`,
    title: `SPIRITUAL JOURNEY`,
    location: `Echegaray Theatre, 8 p.m.`,
    sentence: [
      `Smetana's Piano Trio weaves a spiritual exploration reflecting life and death. Following this, Schubert’s monumental String Quintet captures the intensity and complexity of human existence.`,
      `This program invites the audience to delve into the depths of emotion and contemplation, guided by the unique expressiveness of Smetana and the tonal richness of Schubert.`,
    ],
    detailsOne: [
      {
        composer: [`Bedřich Smetana (1824-1884)`],
        info: `Piano trio in G minor, Op. 15`,
        artists: [
          `Clemence de Forceville violin`,
          `Gabriel Ureña cello`,
          `Josu de Solaun piano`,
        ],
      },
    ],
    detailsTwo: [
      {
        composer: [`Franz Schubert (1797-1828)`],
        info: `String quintet in C major, D. 956`,
        artists: [
          `Nicolas Dautricourt violin`,
          `Clemence de Forceville violin`,
          `Razvan Popovici viola`,
          `Per Nyström cello`,
          `Øyvind Gimse cello`,
        ],
      },
    ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686311/M%C3%A1laga%20Cl%C3%A1sica/day-3_ot1nh3.webp',
    image_position: `top right`,
  },

  // Concert 30 May
  {
    id: 4,
    locale: 'en',
    date: `30 May, 2024`,
    price: `regular`,
    title: `CONVERSATION WITH HEAVEN`,
    location: `Echegaray Theatre, 8 p.m.`,
    sentence: [
      `Mendelssohn's Piano Trio No. 1 immerses us in a journey of musical anthems, highlighting the use of the Lutheran chorale "Gelobet seist Du, Jesu Christ" in its final movement.`,
      `On the other hand, in his Sonata No. 2, Busoni invites us to experience the grandeur of an anthem through the chorale by Bach, "Wie wohl ist mir, o Freund der Seelen." Thus, this program connects us with the richness of choral tradition.`,
      `It is also a testimony that these composers helped kindle the flame of Bach’s music, by recovering his repertoire and being inspired by his legacy.`,
    ],
    detailsOne: [
      {
        composer: [`Felix Mendelssohn (1809-1847)`],
        info: `Piano trio No. 2 in C minor, Op. 66`,
        artists: [
          `Nicolas Dautricourt violin`,
          `Øyvind Gimse cello`,
          `Natalia Kuchaeva piano`,
        ],
      },
    ],
    detailsTwo: [
      {
        composer: [`Ferruccio Busoni (1866-1924)`],
        info: `Sonata for violin and piano No. 2 in E minor, Op. 36a`,
        artists: [`Anna Margrethe Nilsen violin`, `Josu de Solaun piano`],
      },
    ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686311/M%C3%A1laga%20Cl%C3%A1sica/day-4_uqgq9g.webp',
    image_position: `top right`,
  },

  // Concert 31 May
  {
    id: 5,
    locale: 'en',
    date: `31 May, 2024`,
    price: `regular`,
    title: `MACABRE JOURNEY`,
    location: `Echegaray Theatre, 8 p.m.`,
    sentence: [
      `The "Macabre Journey" program plunges us into a dark musical odyssey. Clarke opens with her Passacaglia, a piece invoking mysterious atmospheres. Bruch, with Kol Nidrei, offers a profoundly resonant cello and piano lament.`,
      `Saint-Saëns uses Henri Cazalis's poem to bring us his “Danse Macabre”. According to the legend the poem is based on, death appears on the midnight of Halloween to call forth the dead to dance for him while he plays his fiddle.`,
      `Bloch presents his brief yet poignant “Prayer” for cello and piano. Shostakovich closes with his Piano Trio No. 2, where lament and urgency intertwine in a musical narrative exploring the extremes of emotional expression.
      `,
    ],
    detailsOne: [
      {
        composer: [`Rebecca Clarke (1886-1979)`],
        info: `‘Passacaglia on an Old English Tune’, for viola and piano`,
        artists: [`Tomoko Akasaka viola`, `Josu de Solaun piano`],
      },
      {
        composer: [`Max Bruch (1838-1920)`],
        info: `‘Kol Nidrei’, Op. 47, for cello and piano`,
        artists: [`Gabriel Ureña cello`, `Natalia Kuchaeva piano`],
      },
      {
        composer: [`Camille Saint-Saëns (1835-1921)`],
        info: `‘Danse macabre’, Op. 40, for piano 4 hands`,
        artists: [`Natalia Kuchaeva piano`, `Josu de Solaun piano`],
      },
    ],
    detailsTwo: [
      {
        composer: [`Ernest Bloch (1880-1959)`],
        info: `‘Prayer’, No. 1 from From Jewish Life, B. 54, for cello and piano`,
        artists: [`Per Nyström cello`, `Josu de Solaun piano`],
      },
      {
        composer: [`Dmitri Shostakóvich (1906-1975)`],
        info: `Piano trio no. 2 in E minor, Op. 67`,
        artists: [
          `Anna Margrethe Nilsen violin`,
          `Per Nyström cello`,
          `Natalia Kuchaeva piano`,
        ],
      },
    ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686311/M%C3%A1laga%20Cl%C3%A1sica/day-5_uqvxm1.webp',
    image_position: `center`,
  },
  // 1 June
  {
    id: 14,
    locale: 'en',
    date: `1 June, 2024`,
    price: `regular`,
    title: `ALFA & OMEGA`,
    location: `Cervantes Theatre, 8 p.m.`,
    sentence: [
      `"Alpha and Omega" explores the cyclical nature of music, beginning with the world premiere of Aurignac's "Piano Septet” by Aurignac, one of today's most prolific and original composers.`,
      `Turina's plural passionate expression in his Piano Quartet follows. The concert culminates with the grandeur of Enescu's "String Octet”, a work that reflects a genius's talent, depth and creativity, an outstanding successor of Felix Mendelssohn in the genre.`,
      `This program brings us onto a journey that embraces the entirety of musical creation, connecting the extremes of the musical alphabet with mastery and emotion.
      `,
    ],
    detailsOne: [
      {
        composer: [`Ernesto Aurignac (1982-)`],
        info: `‘Alfa and Omega’, septet for strings and piano (World premiere)`,
        artists: [
          `Jesús Reina violin`,
          `Clemence de Forceville violin`,
          `Tomoko Akasaka viola`,
          `Laura Romero viola`,
          `Øyvind Gimse cello`,
          `Gabriel Ureña cello`,
          `Josu de Solaun piano`,
        ],
      },
      {
        composer: [`Joaquín Turina (1882-1949)`],
        info: `Piano quartet in A minor, Op. 67`,
        artists: [
          `Nicolas Dautricourt violin`,
          `Tomoko Akasaka viola`,
          `Per Nyström cello`,
          `Natalia Kuchaeva piano`,
        ],
      },
    ],
    detailsTwo: [
      {
        composer: [`George Enescu (1881-1955)`],
        info: `String octet in C major, Op. 7`,
        artists: [
          `Jesús Reina violin`,
          `Anna Margrethe Nilsen violin`,
          `Clemence de Forceville violin`,
          `Laura Romero viola`,
          `Tomoko Akasaka viola`,
          `Nicolas Dautricourt violin`,
          `Øyvind Gimse cello`,
          `Gabriel Ureña cello`,
        ],
      },
    ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/Foto_02_revoluciones_b8del4.webp',
    image_position: `center`,
  },

  // Concierto 27 de Mayo
  {
    id: 8,
    locale: 'es',
    date: `27 de mayo, 2024`,
    price: `regular`,
    title: `PLEGARIA - Concierto de apertura`,
    location: `Teatro Echegaray, 20:00 h.`,
    sentence: [
      `Sumérgete en una experiencia musical ecléctica titulada "Plegaria". Pachelbel da inicio con su Canon atemporal, ahora enriquecido con cuerdas y órgano, un mar de sonidos envolvente en una interpretación poco habitual de la archiconocida obra.`,
      `A continuación, el estreno mundial de "Madrigal" de Josu de Solaun, una obra para cuarteto de cuerdas, en la que De Solaun, uno de los músicos más versátiles del panorama, nos retrotrae a una tradición contrapuntística de hace siglos, mostrando su relevancia presente.`,
      `La Sonata da Chiesa de Albinoni presenta un diálogo emotivo entre violín y órgano de gran virtuosismo y creatividad compositiva. Turina evoca la pasión y entrega característica española con su "Oración del torero". `,
      `Schubert nos lleva al celestial Ave María, en una versión en la que el violín hace a su vez de voz melódica y coro. A esto lo sigue la interpretación de Gómez, fusionando violín, cuerdas y órgano.`,
      `Únete a nosotros para explorar estas composiciones diversas, cada una siendo a su modo, una plegaria desde lo más profundo del alma.`,
    ],
    detailsOne: [
      {
        composer: [`Johann Pachelbel (1653-1706)`],
        info: `Canon en Re mayor`,
        artists: [`Artistas del festival cuerda`, `Antonio del Pino órgano`],
      },
      {
        composer: [`Málaga Clásica Talentos`],
        info: `Un grupo de jóvenes artistas previamente seleccionados interpretan una obra de música de cámara`,
      },
      {
        composer: [`Josu de Solaun (1981-)`],
        info: `’Tombeau: a Bernardo de Clairveaux’, para cuarteto de cuerda (Estreno mundial)`,
        artists: [
          `Jesús Reina violín`,
          `Nicolas Dautricourt violín`,
          `Razvan Popovici viola`,
          `Per Nyström violonchelo`,
        ],
      },
      {
        composer: [`Tomaso Albinoni (1671-1751)`],
        info: `Sonata de Chiesa en Sol menor, Op. 4, para violín y órgano`,
        artists: [`Jesús Reina violín`, `Antonio del Pino órgano`],
      },
      {
        composer: [`Joaquín Turina (1882-1949)`],
        info: `‘La oración del torero’, Op. 34, para cuarteto de cuerda`,
        artists: [
          `Clemence de Forceville violín`,
          `Anna Margrethe Nilsen violín`,
          `Razvan Popovici viola`,
          `Øyvind Gimse violonchelo`,
        ],
      },
      {
        composer: [`Franz Schubert (1797-1828)`],
        info: `‘Ave Maria’, D. 839, Op. 52 No. 6 (arr. Wilhelmj)`,
        artists: [`Jesús Reina violín`, `Antonio del Pino órgano`],
      },
      {
        composer: [`William Gomez (1939-2000)`],
        info: `‘Ave Maria’`,
        artists: [
          `Anna Margrethe Nilsen violín`,
          `Artistas del festival cuerda`,
          `Antonio del Pino órgano`,
        ],
      },
    ],
    // detailsTwo: [
    //   {
    //     composer: [`Béla Bartók (1882-1945)`, `Luciano Berio (1925-2003)`],
    //     info: `Selección de dúos para dos violines`,
    //     artists: [`Joanna Wronko violín`, `Anna Margrethe Nilsen violín`],
    //   },
    //   {
    //     composer: [`Zoltán Kodály (1882-1967)`],
    //     info: `Dúo para violín y violonchelo, Op.7`,
    //     artists: [`Jesus Reina violín`, `Adolfo Gutiérrez violonchelo`],
    //   },
    // ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686310/M%C3%A1laga%20Cl%C3%A1sica/day-1_cdxl2h.webp',
    image_position: `top center`,
  },

  // Concierto 28 de mayo
  {
    id: 9,
    locale: 'es',
    date: `28 de mayo, 2024`,
    price: `regular`,
    title: `¿DEBE SER?`,
    location: `Teatro Echegaray, 20:00 h.`,
    sentence: [
      `Felix Mendelssohn nos lleva en un viaje emocional con su Cuarteto de Cuerdas No. 2 en la menor, donde una cita de su canción "Ist es wahr?" (“¿Debe ser?”) sirve como unificador, cita que alude al destino y la libertad, y la cual da título a este programa.`,
      `Luego, Johann Sebastian Bach nos envuelve en la belleza del “Aire en la cuerda sol”, una conocida y reconocible melodía, en su versión para violín y piano.`,
      `Completa esta velada la Sonata No. 3 para violín y piano de Brahms. El compositor decía que una fuerza, o “espíritu supremo” creaba, a través de él, sus obras. `,
      `Obras que, como esta sonata en re menor, provocan resonancias profundas en el espíritu del oyente.`,
    ],
    detailsOne: [
      {
        composer: [`Felix Mendelssohn (1809-1847)`],
        info: `Cuarteto de cuerda No. 2 en La menor, Op. 13`,
        artists: [
          `Jesús Reina violín`,
          `Anna Margrethe Nilsen violín`,
          `Razvan Popovici viola`,
          `Gabriel Ureña violonchelo`,
        ],
      },
    ],
    detailsTwo: [
      {
        composer: [`Johann Sebastian Bach (1685-1750)`],
        info: `‘Aria para la cuerda de sol‘ de la Suite orquestal No. 3 en Re mayor (arr. August Wilhelmj), para violín y piano`,
        artists: [`Jesús Reina violín`, `Josu de Solaun piano`],
      },
      {
        composer: [`Johannes Brahms (1833-1897)`],
        info: `Sonata para violín y piano No. 3 en Re menor, Op. 108`,

        artists: [`Jesús Reina violín`, `Josu de Solaun piano`],
      },
    ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686310/M%C3%A1laga%20Cl%C3%A1sica/day-2_jlqsfq.webp',
    image_position: `top center`,
  },

  // Concierto 29 de mayo
  {
    id: 10,
    locale: 'es',
    date: `29 de mayo, 2024`,
    price: `regular`,
    title: `TRAVESIA ESPIRITUAL`,
    location: `Teatro Echegaray, 20:00 h.`,
    sentence: [
      `El Trío para Piano de Smetana teje un viaje espiritual que reflexiona sobre la vida y la muerte. A continuación, el monumental Quinteto de Cuerdas de Schubert, captura la intensidad y la complejidad de la existencia humana.`,
      `Este programa invita a la audiencia a a vivir las profundidades de la emoción y la contemplación, guiados por la expresividad única de Smetana y la riqueza tonal de Schubert.`,
    ],
    detailsOne: [
      {
        composer: [`Bedřich Smetana (1824-1884)`],
        info: `Trío con piano en Sol menor, Op. 15`,
        artists: [
          `Clemence de Forceville violín`,
          `Gabriel Ureña violonchelo`,
          `Josu de Solaun piano`,
        ],
      },
    ],
    detailsTwo: [
      {
        composer: [`Franz Schubert (1797-1828)`],
        info: `Quinteto de cuerda en Do mayor, D. 956`,
        artists: [
          `Nicolas Dautricourt violín`,
          `Clemence de Forceville violín`,
          `Razvan Popovici viola`,
          `Per Nyström violonchelo`,
          `Øyvind Gimse violonchelo`,
        ],
      },
    ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686311/M%C3%A1laga%20Cl%C3%A1sica/day-3_ot1nh3.webp',
    image_position: `top right`,
  },

  // Concierto 30 de mayo
  {
    id: 11,
    locale: 'es',
    date: `30 de mayo, 2024`,
    price: `regular`,
    title: `CONVERSACIÓN CON EL CIELO`,
    location: `Teatro Echegaray, 20:00 h.`,
    sentence: [
      `El Trío para Piano No. 2 de Mendelssohn navega por aguas tormentosas, canciones emotivas y el misterio, culminando con el uso del coral luterano “Gelobet seist Du, Jesu Christ” en su último movimiento.`,
      `Por otro lado, Busoni, en su Sonata No. 2, nos invita a experimentar la grandeza de un himno a través del coral de Bach "Wie wohl ist mir, o Freund der Seelen". Así, este programa nos conecta con la riqueza de la tradición coral.`,
      `También sirve de testimonio que estos compositores ayudaran a avivar la llama de la música de Bach, recuperando su repertorio y siendo inspirados por su legado.`,
    ],
    detailsOne: [
      {
        composer: [`Felix Mendelssohn (1809-1847)`],
        info: `Trío con piano No. 2 en Do menor, Op. 66`,
        artists: [
          `Nicolas Dautricourt violín`,
          `Øyvind Gimse violonchelo`,
          `Natalia Kuchaeva piano`,
        ],
      },
    ],
    detailsTwo: [
      {
        composer: [`Ferruccio Busoni (1866-1924)`],
        info: `Sonata para violín y piano No. 2 en Mi menor, Op. 36a`,
        artists: [`Anna Margrethe Nilsen violín`, `Josu de Solaun piano`],
      },
    ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686311/M%C3%A1laga%20Cl%C3%A1sica/day-4_uqgq9g.webp',
    image_position: `top right`,
  },

  // Conciert0 31 de mayo
  {
    id: 12,
    locale: 'es',
    date: `31 de mayo, 2024`,
    price: `regular`,
    title: `DANSE MACABRE`,
    location: `Teatro Echegaray, 20:00 h`,
    sentence: [
      `El programa “Danse Macabre" nos lleva a través de un oscuro recorrido musical. Clarke inicia el concierto con su Passacaglia, una pieza que invoca atmósferas misteriosas. Bruch, con Kol Nidrei, ofrece un lamento para cello y piano de profunda resonancia.`,
      `Saint-Saëns se sirve del poema de Henri Cazalis, para traernos su “Danse Macabre”. La leyenda en la que se basa el poema dice que la muerte sale a medianoche del Día de los Difuntos, para que los muertos bailen para ella mientras toca su violín.`,
      `Bloch presenta su breve pero conmovedora Oración para violonchelo y piano. Shostakovich cierra con su Trío para Piano No. 2, donde el lamento y la urgencia se entrelazan en una narrativa musical que explora los extremos de la expresión emocional.
      `,
    ],
    detailsOne: [
      {
        composer: [`Rebecca Clarke (1886-1979)`],
        info: `‘Passacaglia on an Old English Tune’, para viola y piano`,
        artists: [`Tomoko Akasaka viola`, `Josu de Solaun piano`],
      },
      {
        composer: [`Max Bruch (1838-1920)`],
        info: `‘Kol Nidrei’, Op. 47, para violonchelo y piano`,
        artists: [`Gabriel Ureña violonchelo`, `Natalia Kuchaeva piano`],
      },
      {
        composer: [`Camille Saint-Saëns (1835-1921)`],
        info: `‘Danse macabre’, Op. 40, para piano a 4 manos`,
        artists: [`Natalia Kuchaeva piano`, `Josu de Solaun piano`],
      },
    ],
    detailsTwo: [
      {
        composer: [`Ernest Bloch (1880-1959)`],
        info: `‘Prayer’, No. 1 de From Jewish Life, B. 54, para violonchelo y piano`,
        artists: [`Per Nyström violonchelo`, `Josu de Solaun piano`],
      },
      {
        composer: [`Dmitri Shostakóvich (1906-1975)`],
        info: `Trío con piano no. 2 en Mi menor, Op. 67`,
        artists: [
          `Anna Margrethe Nilsen violín`,
          `Per Nyström violonchelo`,
          `Natalia Kuchaeva piano`,
        ],
      },
    ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686311/M%C3%A1laga%20Cl%C3%A1sica/day-5_uqvxm1.webp',
    image_position: `center`,
  },
  // 1 de junio
  {
    id: 13,
    locale: 'es',
    date: `1 de junio, 2024`,
    price: `regular`,
    title: `ALFA & OMEGA`,
    location: `Teatro Cervantes, 20:00 h`,
    sentence: [
      `"Alfa y Omega" explora la naturaleza cíclica de la música. Comienza con el estreno mundial del "Septeto con Piano" de Aurignac, uno de los más prolíficos y originales compositores del presente.`,
      `Sigue el programa la plural expresividad apasionada de Turina en su Cuarteto para piano. Culmina el concierto la grandiosidad del "Octeto de Cuerdas" de Enescu, una obra que refleja el talento, profundidad y creatividad de un genio, digno sucesor en el género de Felix Mendelssohn.`,
      `Este programa nos sumerge en una travesía que abraza la totalidad de la creación musical, conectando los extremos del alfabeto musical con maestría y emoción.
      `,
    ],
    detailsOne: [
      {
        composer: [`Ernesto Aurignac (1982-)`],
        info: `’Alfa y Omega’, septeto para cuerda y piano (Estreno mundial)`,
        artists: [
          `Jesús Reina violín`,
          `Clemence de Forceville violín`,
          `Tomoko Akasaka viola`,
          `Laura Romero viola`,
          `Øyvind Gimse violonchelo`,
          `Gabriel Ureña violonchelo`,
          `Josu de Solaun piano`,
        ],
      },
      {
        composer: [`Joaquín Turina (1882-1949)`],
        info: `Cuarteto con piano en La menor, Op. 67`,
        artists: [
          `Nicolas Dautricourt violín`,
          `Tomoko Akasaka viola`,
          `Per Nyström violonchelo`,
          `Natalia Kuchaeva piano`,
        ],
      },
    ],
    detailsTwo: [
      {
        composer: [`George Enescu (1881-1955)`],
        info: `Octeto para cuerda en Do mayor, Op. 7`,
        artists: [
          `Jesús Reina violín`,
          `Anna Margrethe Nilsen violín`,
          `Clemence de Forceville violín`,
          `Laura Romero violín`,
          `Tomoko Akasaka viola`,
          `Nicolas Dautricourt violín`,
          `Øyvind Gimse violonchelo`,
          `Gabriel Ureña violonchelo`,
        ],
      },
    ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/Foto_02_revoluciones_b8del4.webp',
    image_position: `center`,
  },
];

export default events;
