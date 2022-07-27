const MQ_BREAKPOINTS = [
  ['phone', 500],
  ['tablet', 768],
  ['desktop', 1024],
];

const mq = MQ_BREAKPOINTS.reduce((acc, [name, size]) => {
  acc[name] = `only screen and (min-width: ${size}px)`;
  return acc;
}, {});

export default mq;
