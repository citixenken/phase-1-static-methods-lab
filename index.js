class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    // removes any non alpha-numeric characters except dash, single quotes, and spaces
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(string) {
    let newWords = [];
    let excludedWords = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    newWords = string.split(" ");
    return newWords
      .map((word, index) => {
        return excludedWords.includes(word) && index != 0
          ? [word]
          : word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }
}
