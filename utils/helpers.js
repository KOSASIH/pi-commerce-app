// utils/helpers.js

export const formatCurrency = (amount) => {
  return `$${amount.toFixed(2)}`;
};

export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

export const formatTime = (date) => {
  const options = { hour: '2-digit', minute: '2-digit' };
  return new Date(date).toLocaleTimeString('en-US', options);
};

export const formatDateTime = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(date).toLocaleString('en-US', options);
};

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomElement = (array) => {
  return array[getRandomInt(0, array.length - 1)];
};
