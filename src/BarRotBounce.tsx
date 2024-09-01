import React from "react";
import withContext from "./withContext";
import { useStyle } from "./hook";

interface BRBProps {
    w : number, 
    h : number, 
    scale : number,
    onClick : () => void
}
const BarRotBounce : React.FC<BRBProps> = (props : BRBProps) => {
    const {parentStyle, blockStyle} = useStyle(props.w, props.h, props.scale)
    return (
        <div style = {parentStyle()}>
            <div style = {blockStyle()} onClick = {props.onClick}>

            </div>
        </div>
    )
}

export default withContext(BarRotBounce)