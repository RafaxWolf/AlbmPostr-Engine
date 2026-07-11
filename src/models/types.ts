import type { ReactNode } from "react"

// Album Schema
export interface Album {
    title: string
    artist: string
    cover: string
    genre?: string
    tracks: string[]
    colors: string[]
    releaseDate: string
}

// Poster Properties
export interface PosterProps {
    album: Album
}

export interface PosterBodyProps {
    children: ReactNode
}

export interface AlbumInfoProps {
    artist: string
    title: string
    genre?: string
    releaseDate: string
}

export interface CoverProps {
    cover: string
}

export interface TrackListProps {
    tracks: string[]
}

export interface ColorPaletteProps {
    colors: string[]
}