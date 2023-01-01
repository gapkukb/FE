const regexp = /(\w+)/;

function _genKey(key: string) {
  return key.match(regexp)?.[1] || '';
}

export function importAll(sources: Record<string, any>, genKey: (key: string) => string = _genKey) {
  return Object.keys(sources).reduce((acc, key) => {
    const k = genKey(key);
    acc[k] = sources[key].default;
    return acc;
  }, {} as any);
}
