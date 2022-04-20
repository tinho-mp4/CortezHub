import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

export const COLORS = {
    primary: "#00031c",
    secondary: '#1a5ba1',
    accent: '#3498db',
    
    success: '#00C851',
    error: '#ff4444',

    black: "#000000",
    white: "#f2f2f2",
    background: "#00031c"
}


export const SIZES = {
    base: 10,
    width,
    height
}