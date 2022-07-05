import { useEffect, useState } from "react";

import { Card, getRoutes, GlobalProvider, Routes } from "tomato";
import { THEMES } from "tomato/css/theme.css";

import MODULES from "./modules";

export const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.getElementById("app").className = isDark
      ? THEMES.dark
      : THEMES.light;
  }, [isDark]);

  const modulesRoutes = getRoutes(MODULES);
  const manualRoutes = [];
  const routes = [...modulesRoutes, ...manualRoutes];

  return (
    <GlobalProvider>
      <Card mt="5" bg="l1" onClick={() => setIsDark(!isDark)}>
        Me clica para mudar o tema
      </Card>
      <Routes
        routes={routes}
        // defaultLayout={Default}
        // loginPage={Login}
        // authPage={ReAuth}
        // page404={Page404}
      />
    </GlobalProvider>
  );
};
