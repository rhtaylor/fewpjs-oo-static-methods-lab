class Formatter {
  //weird sometimes errors pop up and you can't be sure why

  static capitalize(string) {

    return string[0].toUpperCase() + string.slice(1) 

  }

  static sanitize(string) { 

    return string.replace(/[^A-Za-z0-9\-\' ]+/g, '')
  }
  static titleize(string) {
    const array = ["a", "the", "of", "an", "and", "but", "for", "at", "by", "from"]

    return string.split(" ").map(function (word, index) {
      if (index !== 0 && array.includes(word)) {
        return word
      } else {
        return this.capitalize(word)
      }
    }.bind(this)).join(" ")
  }
}