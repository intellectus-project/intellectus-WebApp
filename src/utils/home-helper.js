// If all values are nulls means it is the root page so no urlParams are received
const areAllValuesNulls = (a, b, c, d) => !a && !b && !c && !d;

const ranges = [
    { key: 1, title: 'Low', value: 'Low' },
    { key: 2, title: 'Medium', value: 'Medium' },
    { key: 3, title: 'High', value: 'High' }
  ];

  const getCountryObject = (zones, countryName) => {
    let country = {};
    zones.map(function(zone) {
      if (zone.hasOwnProperty('countries')) {
        let filter = zone.countries.filter(country => country.name === countryName);
        if (filter.length > 0) {
          country = Object.assign({ zone: zone }, filter[0]);
        }
      }
    });
    return country;
  };

export {
  areAllValuesNulls,
  ranges,
  getCountryObject,
  territoriesTranslators
};
