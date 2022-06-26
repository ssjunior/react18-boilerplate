import { getRoutes, GlobalProvider, Routes, THEMES } from "tomato";

import MODULES from "./modules";

const App = () => {
  const modulesRoutes = getRoutes(MODULES);
  const manualRoutes = [];
  const routes = [...modulesRoutes, ...manualRoutes];

  return (
    <GlobalProvider locale="pt-BR" tz="America/Sao_Paulo" theme={THEMES.light}>
      <Routes routes={routes} />
    </GlobalProvider>
  );
};

export default App;
