export const useIsString = (value: unknown): value is string => {
  return typeof value === 'string' || value instanceof String;
}

export const shelfLayerTexture = {
  light: 'https://cdn.jsdelivr.net/gh/3dtiles/3d-tiles-shelf@latest/textures/light.png',
  dark: 'https://cdn.jsdelivr.net/gh/3dtiles/3d-tiles-shelf@latest/textures/dark.png',
}

export const shelfTopperTexture = {
  light: 'https://cdn.jsdelivr.net/gh/3dtiles/3d-tiles-shelf@latest/textures/shelf-topper-light.png',
  dark: 'https://cdn.jsdelivr.net/gh/3dtiles/3d-tiles-shelf@latest/textures/shelf-topper-dark.png',
}

export const shelfLegsTexture = {
  light: 'https://cdn.jsdelivr.net/gh/3dtiles/3d-tiles-shelf@latest/textures/shelf-legs-light.png',
  dark: 'https://cdn.jsdelivr.net/gh/3dtiles/3d-tiles-shelf@latest/textures/shelf-legs-dark.png',
}
