'use strict'

const Model = use('Model')

class FragmentSchema extends Model {

  static get table() {
    return 'fragment_schema'
  }


  composedSchemas() {
    return this.belongsToMany('App/Models/Schema', 'fragmentSchemaId', 'schemaId')
      .pivotModel('App/Models/SchemaFragmentSchema')
  }

}

module.exports = FragmentSchema
