export const formatDate = (text) => {
    if (!text) return 'formatDate missing pram';
    const date = new Date(text);
    const formatter = new Intl.DateTimeFormat('pl', {
      dateStyle: 'short',
      timeStyle: 'short',
    });
    return formatter.format(date);
  };