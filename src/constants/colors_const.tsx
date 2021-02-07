import {ColorStyle} from '../models/models';

export const DEFAULT_COLOR_STYLE = {
    colorStyleId: 1,
    backgroundColor: "#21e6c1", 
    color: "#1f4287",
    borderColor: "#1f4287"
} as ColorStyle;

export const COLOR_STYLE_1 = {
    colorStyleId: 2,
    backgroundColor: "#1f4287",
    color: "#071e3d",
    borderColor: "#071e3d"
}

export const COLOR_STYLES = [
    DEFAULT_COLOR_STYLE,
    {
        colorStyleId: 2,
        backgroundColor: "#a7ff83",
        color: "#071a52",
        borderColor: "#071a52"
    },
    {
        colorStyleId: 3,
        backgroundColor: "#d72323",
        color: "#3e3636",
        borderColor: "#3e3636"
    },
    {
        colorStyleId: 4,
        backgroundColor: "#581b98",
        color: "#f3558e",
        borderColor: "#f3558e"
    },
    {
        colorStyleId: 5,
        backgroundColor: "#ac3f21",
        color: "#f3cf7a",
        borderColor: "#f3cf7a"
    },
    {
        colorStyleId: 6,
        backgroundColor: "#f5eded",
        color: "#000000",
        borderColor: "#000000"
    },
] as ColorStyle[];