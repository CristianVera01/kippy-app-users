import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        fill="none"
        viewBox="0 0 120 120"
        width={props.width}
        height={props.height}
        {...props}
    >
        <Path fill="#EFF1F3" d="M0 0h120v120H0z" />
        <Path
            fill="#687787"
            fillRule="evenodd"
            d="M33.3 38.5c0-1.5 1.1-2.6 2.6-2.6H83c1.5 0 2.7 1.1 2.7 2.6v42c0 1.5-1.2 2.6-2.7 2.6H36a2.6 2.6 0 0 1-2.6-2.6v-42ZM80.5 41h-42v37l24.4-24.4c1-1 2.7-1 3.7 0l13.9 13.9V41.1ZM43.7 51.6a5.2 5.2 0 1 0 10.5 0 5.2 5.2 0 0 0-10.5 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export { SvgComponent as PlaceholderSvg }
