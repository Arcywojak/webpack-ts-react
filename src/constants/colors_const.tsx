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
        backgroundColor: "#1f4287",
        color: "#071e3d",
        borderColor: "#071e3d"
    },
    {
        colorStyleId: 3,
        backgroundColor: "#fc5c9c",
        color: "#c5e3f6",
        borderColor: "#c5e3f6"
    },
    {
        colorStyleId: 4,
        backgroundColor: "#581b98",
        color: "#f3558e",
        borderColor: "#f3558e"
    },
    {
        colorStyleId: 5,
        backgroundColor: "#1f4287",
        color: "#071e3d",
        borderColor: "#071e3d"
    },
] as ColorStyle[];