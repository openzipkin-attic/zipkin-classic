import $ from 'jquery';

const defaults = {
  environment: '',
  suggestLens: false,
  queryLimit: 10,
  defaultLookback: 15 * 60 * 1000, // 15 minutes
  searchEnabled: true,
  dependency: {
    lowErrorRate: 0.5, // 50% of calls in error turns line yellow
    highErrorRate: 0.75 // 75% of calls in error turns line red
  }
};

export default function loadConfig() {
  return $.ajax('config.json', {
    type: 'GET',
    dataType: 'json'
  }).then(data => function config(key) {
    if (data[key] === false) {
      return false;
    }

    return data[key] || defaults[key];
  });
}
