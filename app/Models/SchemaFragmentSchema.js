'use strict'

const Model = use('Model')

class SchemaFragmentSchema extends Model {

  static get table() {
    return 'schema_fragment_schema'
  }
}

module.exports = SchemaFragmentSchema
