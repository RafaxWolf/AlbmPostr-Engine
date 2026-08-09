import type { ColorPaletteProps } from "../../models/types";

function ColorPalette(props: ColorPaletteProps) {
    const { colors } = props

    return (
        <div className="color-palette">
            <h1>Color Palette</h1>
            <ul>
                {colors.map((color, index) => (
                    <li key={index} style={{ backgroundColor: color }}/>
                ))}
            </ul>
        </div>
    )
}

export default ColorPalette