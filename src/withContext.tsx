import React from "react";
import { useAnimatedScale, useDimension } from "./hook";

const withContext = (MainFC : React.FC<any>) : React.FC<any> => {
    return (props : any) => {
        const {w, h} = useDimension()
        const {scale, start : onClick} = useAnimatedScale()
        const newProps = {
            ...props,
            w, 
            h,
            scale, 
            onClick,
        }
        return (
            <MainFC {...newProps}>

            </MainFC>
        )
    }
}

export default withContext