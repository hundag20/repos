const { Model } = require("../App");

class Project extends Model {
  static get tableName() {
    return "projects";
  }
}

export default Project;
