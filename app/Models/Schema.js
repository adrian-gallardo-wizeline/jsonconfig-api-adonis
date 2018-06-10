'use strict'

const Model = use('Model')

class Schema extends Model {

  static get table() {
    return 'schema'
  }

  static get computed() {
    return ['version']
  }

  static get hidden() {
    return ['version_major', 'version_minor', 'version_patch', 'schema_id']
  }

  getVersion({ version_major, version_minor, version_patch }) {
    return `${version_major}.${version_minor}.${version_patch}`
  }

  parentSchema() {
    return this.hasOne('App/Models/Schema', 'schema_id', 'id')
  }

  childSchemas() {
    return this.hasMany('App/Models/Schema', 'id', 'schema_id')
  }
}

module.exports = Schema
