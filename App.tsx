import { Tela1 } from './src/screens/Tela1'
import { Tela2 } from './src/screens/Tela2'
import { Fundo } from './src/components/fundo'

export default function App() {

  return (
    <Fundo>
      <Tela1/>
    </Fundo>
  );
}
