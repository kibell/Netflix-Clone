export default function selectionFilter({ series, films } = []) {
    return {
        //creating and array of series
      series: [
          // we are using the filter method
        { title: 'Documentaries', data: series?.filter((item) => item.genre === 'documentaries') },
        { title: 'Comedies', data: series?.filter((item) => item.genre === 'comedies') },
        { title: 'Children', data: series?.filter((item) => item.genre === 'children') },
        { title: 'Crime', data: series?.filter((item) => item.genre === 'crime') },
        { title: 'Feel Good', data: series?.filter((item) => item.genre === 'feel-good') },
      ],

      //creating another array for films
      films: [
        { title: 'Drama', data: films?.filter((item) => item.genre === 'drama') },
        { title: 'Thriller', data: films?.filter((item) => item.genre === 'thriller') },
        { title: 'Children', data: films?.filter((item) => item.genre === 'children') },
        { title: 'Suspense', data: films?.filter((item) => item.genre === 'suspense') },
        { title: 'Romance', data: films?.filter((item) => item.genre === 'romance') },
      ],
    };
  }