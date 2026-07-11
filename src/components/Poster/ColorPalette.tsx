import type { ColorPaletteProps } from "../../models/types";

function ColorPalette(props: ColorPaletteProps) {
    const { colors } = props

    return (
        <div>
            <h1>Color Palette</h1>
            <ul>
                {colors.map((color) => (
                    <li key={color} style={{ backgroundColor: color }}/>
                ))}
            </ul>
        </div>
    )
}

export default ColorPalette