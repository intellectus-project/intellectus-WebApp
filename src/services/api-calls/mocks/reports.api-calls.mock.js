const getRingChartValues = () => ({
  sadness: 0.25,
  happiness: 0.15000000000000002,
  fear: 0.85,
  neutrality: 0.45,
  anger: 0.25,
  numberOfStats: 4
});
const getBarChartValues = () => [
  {
    date: '2020-08-09',
    stats: {
      sadness: 0.3,
      happiness: 0.2,
      fear: 0.8999999999999999,
      neutrality: 0.5,
      anger: 0.5
    }
  },
  {
    date: '2020-08-10',
    stats: {
      sadness: 0.3,
      happiness: 0.7,
      fear: 0.133333,
      neutrality: 0.3,
      anger: 0.1
    }
  },
  {
    date: '2020-08-11',
    stats: {
      sadness: 0.4,
      happiness: 0.02,
      fear: 0.67,
      neutrality: 0.3,
      anger: 0.1
    }
  },
  {
    date: '2020-08-12',
    stats: {
      sadness: 0.1,
      happiness: 0.1,
      fear: 0.1,
      neutrality: 0.3,
      anger: 0.4
    }
  }
];
const getNewEvents = () => [
  {
    title: 'Escándalo en España: un audio y piden seis ascensos - Olé',
    url:
      'https://www.ole.com.ar/futbol-internacional/escandalo-espana-audio-ascensos-lio_0_lkjk2vhki.html',
    created: '2020-08-04'
  },
  {
    title:
      'Efecto acuerdo: el dólar MEP registró su mayor retroceso diario en más de 3 meses (cayó $5,72) - ámbito.com',
    url:
      'https://www.ambito.com/finanzas/dolar/efecto-acuerdo-el-mep-registro-su-mayor-retroceso-diario-mas-3-meses-cayo-572-n5121948',
    created: '2020-08-04'
  },
  {
    title: 'Coronavirus hoy en Perú: cuántos casos se registran al 4 de Agosto - LA NACION',
    url:
      'https://www.lanacion.com.ar/el-mundo/coronavirus-hoy-en-peru-cuantos-casos-se-registran-al-4-de-agosto-nid2411887',
    created: '2020-08-04'
  },
  {
    title:
      'Juan Carlos I: cómo es el lujoso resort de República Dominicana que eligió el rey emérito para su exilio - LA NACION',
    url:
      'https://www.lanacion.com.ar/el-mundo/tras-escandalo-como-es-lujoso-resort-estaria-nid2412437',
    created: '2020-08-04'
  },
  {
    title: 'Coronavirus:nuevo tratamiento de anticuerpos apunta a casos leves - Perfil.com',
    url:
      'https://www.perfil.com/noticias/bloomberg/coronavirus-nuevo-tratamiento-anticuerpos-apunta-casos-leves.phtml',
    created: '2020-08-04'
  },
  {
    title:
      'Mercado festejó el tan ansiado acuerdo de la deuda: bonos treparon hasta 9,6% (acciones, de mayor a menor) - ámbito.com',
    url:
      'https://www.ambito.com/finanzas/bonos/mercado-festejo-el-tan-ansiado-acuerdo-la-deuda-treparon-96-acciones-mayor-menor-n5122255',
    created: '2020-08-04'
  },
  {
    title:
      'Confirmado: los clubes del fútbol argentino volverán a los entrenamientos a partir del 10 de agosto - infobae',
    url:
      'https://www.infobae.com/deportes-2/2020/08/04/confirmado-los-clubes-del-futbol-argentino-volveran-a-los-entrenamientos-a-partir-del-10-de-agosto/',
    created: '2020-08-04'
  }
];

const getCalls = () => [
  {
    startTime: '2020-08-24T20:24:35.8787',
    endTime: '2020-08-24T21:34:35.8787',
    weather: {
      description: 'nubes aisladas',
      temperature: 17.02
    },
    shift: {
      id: 1,
      name: 'Mañana',
      startHour: 0,
      endHour: 8
    },
    operator: {
      id: 6,
      name: 'Lucas'
    }
  },
  {
    startTime: '2020-08-24T20:24:35.8787',
    endTime: '2020-08-24T20:34:12.8787',
    weather: {
      description: 'nubes aisladas',
      temperature: 17.02
    },
    shift: {
      id: 1,
      name: 'Mañana',
      startHour: 0,
      endHour: 8
    },
    operator: {
      id: 6,
      name: 'Lucas'
    }
  }
];

const getWeathersDay = () => ({
  description: 'Llovizna ligera',
  currentTemperature: 5.0,
  minTemperature: 5.0,
  maxTemperature: 19.0,
  image: 'lluvia.png'
});

const getBarChartByOperators = () => [
  {
    date: null,
    stats: {
      sadness: 0.25,
      happiness: 0.18,
      fear: 0.24,
      neutrality: 0.19,
      anger: 0.14
    },
    userInfo: {
      id: 6,
      name: 'Fernanda Perez'
    }
  },
  {
    date: null,
    stats: {
      sadness: 0.2,
      happiness: 0.2,
      fear: 0.2,
      neutrality: 0.2,
      anger: 0.2
    },
    userInfo: {
      id: 6,
      name: 'Lucas Arnualdo'
    }
  },
  {
    date: null,
    stats: {
      sadness: 0.4,
      happiness: 0.2,
      fear: 0.2,
      neutrality: 0.2,
      anger: 0
    },
    userInfo: {
      id: 6,
      name: 'Eric Hooka'
    }
  },
  {
    date: null,
    stats: {
      sadness: 0.18,
      happiness: 0.25,
      fear: 0.14,
      neutrality: 0.19,
      anger: 0.24
    },
    userInfo: {
      id: 6,
      name: 'Ronan Vazquez'
    }
  },
  {
    date: null,
    stats: {
      sadness: 0,
      happiness: 0,
      fear: 0.7,
      neutrality: 0.1,
      anger: 0.1
    },
    userInfo: {
      id: 6,
      name: 'Ronan Vazquez'
    }
  }
];

export default () => {
  return {
    getRingChartValues,
    getBarChartValues,
    getNewEvents,
    getCalls,
    getWeathersDay,
    getBarChartByOperators
  };
};
