/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('headers').truncate()
  await knex('categories').truncate()
  await knex('projects').truncate()

  //hydrate with seed data
  await knex('headers').insert([
    {
      title: 'Useful Projects (Repos) related to Ethiopia',
      description: 'This repository is a collection of repos that are concerned with developing Ethiopian related apps, chatbots, APIs, AI, etc.'
    }
  ]);
  await knex('categories').insert([
    { id: 1, name: 'Localization' },
    { id: 2, name: 'Calendar' },
    { id: 3, name: 'Ethiopic Data' },
    { id: 4, name: 'Telegram Bots' },
    { id: 5, name: 'Android Apps' },
    { id: 6, name: 'Github Organizations' },
    { id: 7, name: 'Other apps' },
  ]);
  return await knex('projects').insert([
    {
      title: 'Amharic-Keyboard',
      link: 'https://github.com/dawityise/Amharic-Keyboard',
      description: 'jQuery plugin for Amharic keyboard support onlinei',
      category_ids: '1',
    },
    {
      title: 'Amharic-transliteration',
      link: 'https://github.com/dohliam/amharic-transliteration',
      description: 'A JavaScript-based converter for transliterating Amharic text into Latin characters',
      category_ids: '1',
    },
    {
      title: 'En2am',
      link: 'https://github.com/misgeatgit/en2am',
      description: 'Yet another way to type amharic on standard english keyboard',
      category_ids: '1',
    },
    {
      title: 'EthiopicWeb',
      link: 'https://github.com/tedinega/EthiopicWeb',
      description: 'Map English characters to Ethiopic phonetics',
      category_ids: '1',
    },
    {
      title: 'Geezer',
      link: 'https://github.com/moe-szyslak/Geezer',
      description: 'Converts Arabic numerals to Geez',
      category_ids: '1',
    },
    {
      title: 'geezify-php',
      link: 'https://github.com/geezify/geezify-php',
      description: 'This package is a library to convert ascii number like "3456" to geez number "፴፬፻፶፮" and vise versa.',
      category_ids: '1',
    },
    {
      title: 'geezify-js',
      link: 'https://github.com/geezify/geezify-js',
      description: 'This package is a library to convert ascii number like "3456" to geez number "፴፬፻፶፮" and vise versa.',
      category_ids: '1',
    },
    {
      title: 'geezify-rb',
      link: 'https://github.com/yilkalargaw/Geezify-rb.git',
      description: 'This package is a library to convert ascii number like "3456" to geez number "፴፬፻፶፮" and vise versa.',
      category_ids: '1',
    },
    {
      title: 'geezify-lua',
      link: 'https://github.com/yilkalargaw/geezify-lua',
      description: 'This package is a library to convert ascii number like "3456" to geez number "፴፬፻፶፮" and vise versa.',
      category_ids: '1',
    },
    {
      title: 'Ime',
      link: 'https://github.com/menzew/input-method-editor-for-am_ET',
      description: '(Java) Input Method for am_et. Simple algorithm, portable code.',
      category_ids: '1',
    },
    {
      title: 'Magento-translation-am Majento',
      link: 'https://github.com/admasethiopia/magento-translation-am',
      description: '1.7.0.2 Amharic Translation',
      category_ids: '1',
    },
    {
      title: 'HornMorpho2.5',
      link: 'https://github.com/adamsamson/HornMorpho2.5',
      description: 'HORNMORPHO is a Python program that analyzes Amharic, Oromo, and Tigrinya words into their constituent morphemes (meaningful parts) and generates words, given a root or stem and a representation of the word’s grammatical structure.',
      category_ids: '1',
    },
    {
      title: 'Sleeboard',
      link: 'https://github.com/sleeboard/sleeboard',
      description: 'An Amharic keyboard to add to your website.',
      category_ids: '1',
    },
    {
      title: 'calender',
      link: 'https://github.com/andegna/calender',
      description: 'If you ever want to convert Ethiopian Calender to any other calender system (like the Gregorian Calender)',
      category_ids: '2',
    },
    {
      title: 'Ethiopia LSMS Household Cluster Location',
      link: 'https://github.com/tessam30/Ethiopia',
      description: 'Ethiopia Rural Socioeconomic Survey (ERSS) Analysis',
      category_ids: '3',
    },
    {
      title: 'Amharic-telegram-bot',
      link: 'https://github.com/nathenapse/Amharic-telegram-bot',
      description: 'This is a telegram bot to translate text to amharic @amharicbot',
      category_ids: '4',
    },
    {
      title: 'G12 Matrick App',
      link: 'https://github.com/RhinoSoftware/G12Matric',
      description: 'G12 Matrick App is an application made for android that aims to assist Ethiopian grade 12 students with matrick exam materials to help them prepare for national examination',
      category_ids: '5',
    },
    {
      title: "Ge'ez Frontier Foundation",
      link: 'https://github.com/geezorg',
      description: "A github organization filled with various texts, software and encoding & decoding tools for those needing resorces for working with languages that use the Ge'ez alphabet.",
      category_ids: '6',
    },
    {
      title: "Gus-Petch",
      link: 'https://github.com/moe-szyslak/Gus-Petch',
      description: "Edna Mall's multiplex unofficial iOS App. Works Offline, Rotten Tomatoes rating, Movie Plot & Trailer video. Built with React and Cordova",
      category_ids: '7',
    },
  ]);
};
