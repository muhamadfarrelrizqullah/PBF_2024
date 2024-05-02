// import { createContext } from 'react';

// export const LevelContext = createContext(0);

import React from 'react';
import { createContext } from 'react';
import { themes } from '../themes/mythemes';

export const LevelContext = createContext(0);

export const ThemeContext = createContext({
    theme: themes.light,
    toggleTheme: () => {},
})