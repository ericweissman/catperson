class Catperson {
  constructor(obj) {
    this.shortHaired = [];
    this.mediumHaired = [];
    this.longHaired = [];
    this.name = obj.name || 'Cody';
  }
  hordeKitties(kittens) {
    console.log(kittens)
  }
}


module.exports = Catperson;
