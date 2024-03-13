
import { Tela1 } from './src/screens/Tela1'
import { Tela2 } from './src/screens/Tela2'
import { Tela3 } from './src/screens/Tela3'
import { Tela4 } from './src/screens/Tela4'
import { Fundo } from './src/components/fundo'
import { Pontinhos } from './src/components/pontinhos'
import { FunctionComponent } from 'react'
import { FlatList } from 'react-native/types'

export default function App() {

  const Telas[] = [
    Tela1,
    Tela2,
    Tela3,
    Tela4,
  ]
  const PageControl: FunctionComponent = () => {
    return (
      <Fundo>
        <FlatList data={Telas}
         horizontal
         showsHorizontalScrollIndicator={false}
         pagingEnabled={true}
         keyExtractor={(_, index) => index.toString()}
         renderItem={() => <></>} />
        <FlatList data={Telas}
         keyExtractor={(_, index) => index.toString()}
         renderItem={() => <></>} />
      </Fundo>
    )
  }

}
