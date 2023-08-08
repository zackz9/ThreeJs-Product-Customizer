import { swatch, fileIcon, ai, logoProduct, stylishProduct } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
    title:"Pick your favorite color"

  },
  {
    name: "filepicker",
    icon: fileIcon,
    title:"Enjoy and Upload youre file"

  },
  {
    name: "aipicker",
    icon: ai,
    title:"This feature is in 'Maintenance mode'"
  },
];

export const FilterTabs = [
  {
    name: "logoProduct",
    icon: logoProduct,
    title:"Logo mode"

  },
  {
    name: "stylishProduct",
    icon: stylishProduct,
    title:"Texture mode"

  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoProduct",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishProduct",
  },
};
