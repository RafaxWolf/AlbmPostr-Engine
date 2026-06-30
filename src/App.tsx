import Poster from './components/Poster/Poster'
import { mockAlbum } from './data/mockAlbum'

import './App.css'

function App() {
  //const artistName = "Golden Sextion"
  //const albumName = "The Silicon Age"

  /* var songs = [
    'Hi-Tech Love',
    'White Wall',
    "Sex 'n' Roll",
    'Portrait',
    'So Far From This Day',
    'Jesus On My Back',
    'Saints Are Gone',
    'The Silicon Age',
    'Hidden Truth',
    'My Pain',
    'From High'
  ] */

  return (
    <main className='app'>
      <h1>Album Poster Engine</h1>

      <Poster album={mockAlbum}/>

    </main>
  )
}

export default App