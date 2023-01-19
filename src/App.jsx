import { AppRouter } from "./AppRouter"
import { ButtonScrollTop } from "./components/ButtonScrollTop";
import { PokemonProvider } from './context/PokemonProvider';

function App() {
  return (
    <PokemonProvider>
        <AppRouter/>
        <ButtonScrollTop></ButtonScrollTop>
    </PokemonProvider>
  )
}

export default App
