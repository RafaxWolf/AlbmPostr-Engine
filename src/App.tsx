import Poster from './components/Poster/Poster'
import { mockAlbum } from './data/mockAlbum'

import './App.css'

function App() {

  return (
    <main className='app'>
      <h1>Album Poster Generator</h1>

      <Poster album={mockAlbum}/>

    </main>
  )
}

export default App