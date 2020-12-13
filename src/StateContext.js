import React from 'react';

export default React.createContext({
  supplyRate: {
    DAI: undefined,
    USDC: undefined,
    USDT: undefined,
  },
  allocationPercentage: {
    DAI: 100,
    USDC: 0,
    USDT: 0,
  },
  currentInvestment: 0,
  setAllocations: () => {},
  setCurrentInvestment: () => {},
});
