import { createContext, useContext } from 'react';

export const initialState = {};

const context = createContext(initialState);

export const { Provider } = context;

const useCityContext = () => useContext(context);

export default useCityContext;
