export const toTitleCase = (str: string) =>
  str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();

export const getStaticPath = (path: string) => {
  return `${process.env.PUBLIC_URL}${path}`;
};
