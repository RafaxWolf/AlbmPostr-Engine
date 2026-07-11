// Components
import AlbumCover from "./AlbumCover"
import ColorPalette from "./ColorPalette"
import PosterBody from "./PosterBody/PosterBody"
import AlbumInfo from "./PosterBody/AlbumInfo"
import TrackList from "./PosterBody/TrackList"

// Types / Props
import type { PosterProps } from "../../models/types"

/**
 * Motor generador del Poster del Album
 * @param props Propiedades del Poster
 * @returns Poster Generado por el Motor
 */
function Poster(props: PosterProps) {
    const { album } = props

    return (
        <section>
            <AlbumCover cover={album.cover}/>

            <ColorPalette colors={album.colors}/>
            
            <PosterBody>
                <TrackList tracks={album.tracks}/>

                <AlbumInfo
                    artist={album.artist}
                    title={album.title}
                    genre={album.genre}
                    releaseDate={album.releaseDate}
                />
            </PosterBody>
        </section>
    )
}

export default Poster