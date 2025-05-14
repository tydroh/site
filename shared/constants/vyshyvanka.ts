export const mapSize = {
  38: 'XS',
  40: 'S',
  42: 'M',
  44: 'XL'
} as const;

export const sizes = Object.entries(mapSize).map(([value, name]) => ({
  name,
  value,
}));


export type Size = keyof typeof mapSize;