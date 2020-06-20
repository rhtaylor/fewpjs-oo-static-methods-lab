class Formatter {
  //weird sometimes errors pop up and you can't be sure why
  //I passed this lab and never submitted. Now having minor problems with it. 
  static capitalize(string) {

    return string[0].toUpperCase() + string.slice(1) 

  }

  static sanitize(string) { 

    return string.replace(/[^A-Za-z0-9\-\' ]+/g, '') 

  }
  static titleize(string) {
    const array = ["a", "the", "of", "an", "and", "but", "for", "at", "by", "from"]

    return string.split(" ").map(function (thing, index) {
      if (index !== 0 && array.includes(thing)) {
        return thing
      } else {
        return this.capitalize(thing)
      }
    }.bind(this)).join(" ")
  }
}