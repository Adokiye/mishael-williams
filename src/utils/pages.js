const pages = [
  {
    url: "/",
    title: "Mishael Williams",
    description: "Senior Full-Stack Engineer",
    thumbnail: "",
  },
];
export const getPageByPath = (path) =>
  pages.find(({ url }) => url === path) || pages[0];
