class DataAccess {
  constructor() {}

  //Pure function.
  static getAllLocalStorageKeysAsIngredients() {
    return Object.keys(localStorage).map(function (item) {
      return { name: item };
    });
  }
}

export default DataAccess;
