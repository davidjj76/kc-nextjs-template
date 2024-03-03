import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      base: colors.gray[800],
      accent: colors.orange[600],
      header: colors.slate[900],
    },
    borderColor: { DEFAULT: colors.gray[200] },
  },
  plugins: [],
};
export default config;
