export const dateConvert = (value: Date) => {
  const date = new Date(value)
  const setDate =
    date.getFullYear() + '/' +
    (date.getMonth() + 1) + '/' +
    date.getDate() + ' ' +
    date.getHours() + ':' +
    date.getMinutes()

  return setDate
}
