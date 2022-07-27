const fluid = (from, to, options = {}) => {
  const opts = {
    vpFrom: 320,
    vpTo: 1440,
    baseSize: 16,
    ...options,
  };

  return `calc(${from * opts.baseSize}px + (${to * opts.baseSize} - ${
    from * opts.baseSize
  }) * ((100vw - ${opts.vpFrom}px) / (${opts.vpTo} - ${opts.vpFrom})))`;
};

export default fluid;
