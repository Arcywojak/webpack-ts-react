import React from 'react'
import {LineBetweenMindsProps} from '../../../../models/components-props';

const LineBetweenMinds = (props: LineBetweenMindsProps) => {
    const {mindFrom, mindTo} = props;

    if (!mindFrom) {
        return null;
    } 

    const x2ForLine = mindTo?.position.x - mindFrom.position.x - mindFrom.averageMindDimenstionsInPx.width/2 + mindTo.averageMindDimenstionsInPx.width/2
    const y2ForLine = mindTo?.position.y - mindFrom.position.y;
    const parentX = mindFrom.position.x + (mindFrom.averageMindDimenstionsInPx.width / 2);
    const parentY = mindFrom.position.y + (mindFrom.averageMindDimenstionsInPx.height / 2);

    const transformStyle = {
        transform: `translate(${parentX}px, ${parentY}px)`,      
        }

    return (
        <svg className="svg-line" style={transformStyle}>
            <marker
            id={`triangle-${mindTo.id}`}
            viewBox="0 0 10 10" refX="45" refY="5" 
            markerUnits="strokeWidth"
            markerWidth="10" markerHeight="8"
            fill={mindFrom.areColoursReversed ? mindFrom.colorStyle.color : mindFrom.colorStyle.backgroundColor}
            orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
            <line markerEnd={`url(#triangle-${mindTo.id})`} x1="0" y1="0" x2={`${x2ForLine}px`} y2={`${y2ForLine}px`}
            stroke={mindFrom.areColoursReversed ? mindFrom.colorStyle.color : mindFrom.colorStyle.backgroundColor}>

            </line>
        </svg>
    )
}

export default LineBetweenMinds;