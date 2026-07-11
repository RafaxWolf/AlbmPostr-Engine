import type { PosterProps } from "../../models/types"
import AlbumCover from "./AlbumCover"
import AlbumInfo from "./AlbumInfo"
import ColorPalette from "./ColorPalette"
import TrackList from "./TrackList"

/**
 * Generador del Poster
 * @param props Propiedades del Poster
 * @returns Poster Generado por el Motor
 */
function Poster(props: PosterProps) {
    const { album } = props

    return (
        <section>
            <AlbumCover cover={album.cover}/>
            <div>
                <ColorPalette colors={album.colors}/>
            </div>
            <AlbumInfo artist={album.artist} title={album.title} genere={album.genere} releaseDate={album.releaseDate}/>
            <div>
                <TrackList tracks={album.tracks}/>
            </div>
        </section>
    )
}

export default Poster