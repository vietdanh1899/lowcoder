function e(r) {
  switch (r) {
    case "asc":
      return 1;
    case "desc":
      return -1;
    default:
      return null;
  }
}
function t(r) {
  switch (r) {
    case 1:
      return "asc";
    case -1:
      return "desc";
    default:
      return "";
  }
}
export {
  e as m,
  t as r
};
