import { loader } from '@monaco-editor/react';

const defineTheme = (themeName: string) => {
  if (themeName === 'light' || themeName === 'vs-dark') return true;
  return new Promise((resolve) => {
    Promise.all([loader.init(), import(`./themes/${themeName}.json`)]).then(
      ([monaco, themeData]) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        monaco.editor.defineTheme(themeName, themeData);
        monaco.editor.setTheme(themeName);
        resolve(true);
      }
    );
  });
};

export default defineTheme;
