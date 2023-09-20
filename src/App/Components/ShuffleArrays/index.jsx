export const ShuffleArrays = ({ s }) => {
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [s[i], s[j]] = [s[j], s[i]];
  }

  return s;
};
