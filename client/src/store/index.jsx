import { proxy } from 'valtio'

const state = proxy({

    intro: true,
    bgColor: "#282626",
    textColor: "#fff",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './logo-white.png',
    fullDecal: './logo-white.png',


});

export default state;