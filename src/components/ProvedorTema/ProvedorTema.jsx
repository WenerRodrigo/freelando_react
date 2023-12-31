import { ThemeProvider } from "@emotion/react";

const tema = {
  cores: {
    branco: "#FFF",
    atencao: "",
    focus: "#B009FF",
    primarias: {
      a: "#5754ED",
      b: "#D93114",
      c: "",
    },
    secundarias: {
      a: "#EBEAF9",
      b: "",
      c: "",
    },
    neutras: {
      a: "#373737",
      b: "",
      c: "",
      d: "",
    },
    dark: {
      a: "",
      b: "",
    },
  },
  espacamentos: {
    xs: '8px',
   s : '32px',
   l : '16px',
  },
  fontFamily: "'MontSerrat', sans-serif"
};

export const ProvedorTema = ({ children }) => {
  return <ThemeProvider theme={tema}>{children}</ThemeProvider>;
};
