import type { CoverProps } from "../../../models/types"

function AlbumCover(props: CoverProps) {
    const { cover } = props

    return (
        <div className="album-cover">
            <h1>Album Cover</h1>
            <img src={cover} alt="Album Cover" />
        </div>
    )
}

export default AlbumCover