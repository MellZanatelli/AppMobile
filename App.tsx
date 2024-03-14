
import { Tela1 } from './src/screens/Tela1'
import { Tela2 } from './src/screens/Tela2'
import {Pontinhos} from './src/components/pontinhos'
import { Tela3 } from './src/screens/Tela3'
import { Tela4 } from './src/screens/Tela4'
import { Fundo } from './src/components/fundo'
import { Pontinhos } from './src/components/pontinhos'
import { FunctionComponent, useState } from 'react'
import { FlatList } from 'react-native/types'

export default function App() {
  const [pagina, setPagina] = useState(1)

  return(
    switch (pagina){
      case 1:

    }
  )
}
