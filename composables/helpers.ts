export const useIsString = (value: unknown): value is string => {
  return typeof value === 'string' || value instanceof String;
}

export const shelfLayerTexture = {
  light: 'images/textures/light.png',
  dark: 'images/textures/dark.png',
}

export const shelfTopperTexture = {
  light: 'images/textures/shelf-topper-light.png',
  dark: 'images/textures/shelf-topper-dark.png',
}

export const shelfLegsTexture = {
  light: 'images/textures/shelf-legs-light.png',
  dark: 'images/textures/shelf-legs-dark.png',
}
