export const theme = {
    colors: {
        primaryBg: '#22272e',
        secondaryBg: '#2B3E53',
        text: '#FFF',
        buttonBg: '#FAFAFA',
        buttonHoverBg: '#FAFAFA60',
        cardBg: '#333',
        languageDefault: '#000',
        viewIcon: '#396739',
        viewIconHover: '#1f3a1f',
        removeIcon: '#F00',
        removeIconHover: '#E6000040',
        link: '#007bff',
        linkHover: '#0056b3',
    },
    fonts: {
        main: 'Arial, sans-serif',
        code: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
    },
    sizes: {
        cardHeight: '400px',
        buttonHeight: '62px',
        inputHeight: '62px',
    },
    borderRadius: '20px',
};

export type ThemeType = typeof theme;
