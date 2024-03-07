export const setStorageItem = (name: string, item: string): void => {
  localStorage.setItem(name, item)
}

export const getStorageItem = (name: string): string | null => {
  const storedItem = localStorage.getItem(name)
  return storedItem !== null ? storedItem : null
}

export const clearAllStorage = (): void => {
  localStorage.clear()
}