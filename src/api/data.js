const R = require('ramda');

const categories = [
  { id: 'b8f12a38-92ef-4bc3-854d-b8ee40005574', name: 'Comedy' },
  { id: '27963d7f-f51f-45c3-bfb8-3ffe7bd3ca5c', name: 'Horror' },
  { id: 'b085c020-58f5-464f-9c40-354e26864b46', name: 'Superhero' },
  { id: '7bd8de26-1955-40a3-b468-444ea1f151a8', name: 'Drama' },
  { id: 'ce0f36a5-a0cd-462a-8f69-e3f95476e7ca', name: 'Reality-TV' },
];

const comedies = [
  {
    id: '76e7010a-c4b6-4b42-b717-668aadab8baa',
    name: 'WandaVision',
    rating: 7.5,
    description: 'Blends the style of classic sitcoms with the MCU in which Wanda Maximoff and Vision -two super-powered beings living their ideal suburban lives-begin to suspect that everything is not as it seems.',
  },
  {
    id: '94d27d31-cc43-4396-a4d5-884ad813ff48',
    name: 'Cobra Kai',
    rating: 8.6,
    description: 'Decades after their 1984 All Valley Karate Tournament bout, a middle-aged Daniel LaRusso and Johnny Lawrence find themselves martial-arts rivals again.',
  },
  {
    id: '44308bb7-2c76-4eff-81e0-23b02db259d2',
    name: 'Disenchantment',
    rating: 7.2,
    description: 'Princess Tiabeanie, \'Bean\', is annoyed at her imminent arranged marriage to Prince Merkimer. Then she meets Luci, a demon, and Elfo, an elf, and things get rather exciting, and dangerous.',
  },
  {
    id: '5faf7a1e-3a6e-47df-9d36-4aa4a4f11055',
    name: 'The Office',
    rating: 8.9,
    description: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.',
  },
  {
    id: 'aa775bf7-541e-40f5-897c-3d1884b45de0',
    name: 'Schitt\'s Creek',
    rating: 8.5,
    description: 'When rich video-store magnate Johnny Rose and his family suddenly find themselves broke, they are forced to leave their pampered lives to regroup in Schitt\'s Creek.',
  },
];

const horrors = [
  {
    id: '8d73e395-a3f3-4a8c-bbfd-cee72e3504da',
    name: 'Shingeki no kyojin',
    rating: 8.9,
    description: 'After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.',
  },
  {
    id: '0e1c3f17-4f98-488c-830a-0cb9e824890a',
    name: 'The Stand',
    rating: 5.4,
    description: 'After the world is in ruins, due to a man-made plague, a battle of Biblical proportions ensues between the survivors.',
  },
  {
    id: '3bd09a1a-8c13-4ac3-90ee-de0e3e28c253',
    name: 'Servant',
    rating: 7.6,
    description: 'A Philadelphia couple is in mourning after an unspeakable tragedy creates a rift in their marriage and opens the door for a mysterious force to enter their home.',
  },
  {
    id: 'afb50df3-cee1-4889-b32d-6c0e4393ec56',
    name: 'The Walking Dead',
    rating: 8.2,
    description: 'Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.',
  },
  {
    id: 'b032d8e0-e900-432e-a907-cf6f786cc6bc',
    name: 'Supernatural',
    rating: 8.4,
    description: 'Two brothers follow their father\'s footsteps as hunters, fighting evil supernatural beings of many kinds, including monsters, demons and gods that roam the earth.',
  },
];

const superheroes = [
  {
    id: 'f1c61fe2-eb0f-440b-9ef1-5ae95aa77414',
    name: 'The Boys',
    rating: 8.7,
    description: 'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.',
  },
  {
    id: '620b5953-5fe0-42c2-8932-8ea9bce0bc50',
    name: 'Batwoman',
    rating: 3.5,
    description: 'Kate Kane seeks justice for Gotham City as Batwoman.',
  },
  {
    id: '4f3d1c41-50a6-4264-ac3a-2241d5215dab',
    name: 'Superman and Lois',
    rating: null,
    description: 'Follow the world\'s most famous super hero and comic books\' most famous journalist as they deal with all the stress, pressures, and complexities that come with being working parents in today\'s society.',
  },
  {
    id: 'f82c1733-a18d-468d-a019-c11979853d20',
    name: 'Titans',
    rating: 7.7,
    description: 'A team of young superheroes combat evil and other perils.',
  },
  {
    id: 'e52722a7-cd25-4bcf-bd81-41ef679d4885',
    name: 'Agents of S.H.I.E.L.D.',
    rating: 7.5,
    description: 'The missions of the Strategic Homeland Intervention, Enforcement and Logistics Division.',
  },
];

const dramas = [
  {
    id: '76e7010a-c4b6-4b42-b717-668aadab8baa',
    name: 'WandaVision',
    rating: 7.5,
    description: 'Blends the style of classic sitcoms with the MCU in which Wanda Maximoff and Vision -two super-powered beings living their ideal suburban lives-begin to suspect that everything is not as it seems.',
  },
  {
    id: '10a4dc70-d71d-4bc4-b53f-ebd44779a480',
    name: 'Bridgerton',
    rating: 7.3,
    description: 'Wealth, lust, and betrayal set against the backdrop of Regency-era England, seen through the eyes of the powerful Bridgerton family.',
  },
  {
    id: 'b5a36120-fb09-4e74-8184-534e1aa78160',
    name: 'Lupin',
    rating: 7.7,
    description: 'Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family.',
  },
  {
    id: '94d27d31-cc43-4396-a4d5-884ad813ff48',
    name: 'Cobra Kai',
    rating: 8.6,
    description: 'Decades after their 1984 All Valley Karate Tournament bout, a middle-aged Daniel LaRusso and Johnny Lawrence find themselves martial-arts rivals again.',
  },
  {
    id: '8d73e395-a3f3-4a8c-bbfd-cee72e3504da',
    name: 'Shingeki no kyojin',
    rating: 8.9,
    description: 'After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.',
  },
];

const realities = [
  {
    id: '7a482bbe-3a73-47e6-99c1-b21c415c775e',
    name: 'Bling Empire',
    rating: 5.4,
    description: 'Follow LA\'s wildly wealthy Asian and Asian American fun seekers as they go all out with fabulous parties, glamour and drama in this reality series',
  },
  {
    id: '85fbc6a6-b233-48ec-83aa-f0b58a8082c2',
    name: 'Surviving Death',
    rating: 6.0,
    description: 'Explores questions that have been contemplated throughout time: What does it mean to die, and is death the end of our existence? Weaving together innovative new research with firsthand accounts from those who’ve been close to death.',
  },
  {
    id: '8a1c534b-53af-47bb-843e-3fc497148387',
    name: 'Below Deck',
    rating: 7.3,
    description: 'Follows the crew of a multi million dollar charter boat in the Caribbean.',
  },
  {
    id: '2a23f913-32f9-4a9a-9556-cf493777b57f',
    name: 'RuPaul\'s Drag Race',
    rating: 8.4,
    description: 'RuPaul searches for America\'s next drag superstar.',
  },
  {
    id: '5c3c600e-4949-47fe-8e9a-d37ce4d24f55',
    name: 'Survivor',
    rating: 7.2,
    description: 'A reality show where a group of contestants are stranded in a remote location with little more than the clothes on their back. The lone survivor of this contest takes home a million dollars.',
  },
];

const allTvShows = [
  ...comedies,
  ...horrors,
  ...superheroes,
  ...dramas,
  ...realities,
];

const withoutDetail = R.map(R.pick(['id', 'name']));

const tvShowsByCategory = {
  'b8f12a38-92ef-4bc3-854d-b8ee40005574': withoutDetail(comedies),
  '27963d7f-f51f-45c3-bfb8-3ffe7bd3ca5c': withoutDetail(horrors),
  'b085c020-58f5-464f-9c40-354e26864b46': withoutDetail(superheroes),
  '7bd8de26-1955-40a3-b468-444ea1f151a8': withoutDetail(dramas),
  'ce0f36a5-a0cd-462a-8f69-e3f95476e7ca': withoutDetail(realities),
};

const tvShowsById = allTvShows.reduce(
  (table, tvShow) => R.assoc(tvShow.id, tvShow, table),
  {},
);

const listCategories = () => categories;

const listTvShows = (categoryId, cursor = 0) => {
  const pageSize = 2;
  const all = tvShowsByCategory[categoryId];
  const limit = cursor + pageSize;
  const result = all.slice(cursor, cursor + pageSize);
  const nextCursor = result.length < pageSize ? null : limit;
  return {
    result,
    nextCursor,
  };
};

const getTvShow = id => tvShowsById[id];

module.exports = {
  listCategories,
  listTvShows,
  getTvShow,
};
