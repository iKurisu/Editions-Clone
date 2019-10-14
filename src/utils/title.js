export const setTitle = title => {
  document.title = title;
}

export const formatTitle = title => {
  const words = title.split(" ");

  return words.length === 2
    ? words.join(" ")
    : words[0][0] + words[0].slice(1).toLowerCase()
}