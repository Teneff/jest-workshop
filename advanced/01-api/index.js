import uuid from 'uuid/v1';

const api = ({ locale } = { locale: 'bg_MK' }) => ({

  products: () => new Promise((resolve) => {
    const [language, country] = locale.split('_');

    const data = new Array(5).fill().map(() => ({
      id: uuid(),
      language,
      country,
    }));

    setTimeout(() => resolve(data), 1000 * Math.random());
  }),
});

export default api;
