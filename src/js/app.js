// TODO: write your code here
export default function sortByHealth(array) {
    return array.sort((first, second) => second.health - first.health);
  }