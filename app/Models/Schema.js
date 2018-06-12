'use strict'

const Model = use('Model')

class Schema extends Model {

  static boot() {
    super.boot()
    this.addHook('beforeCreate', 'SchemaHook.assignFirstVersion')
    this.addHook('afterFind', schema => {
      schema.jsonSchema = schema.jsonSchema ? JSON.parse(schema.jsonSchema) : {}
    })
    this.addHook('afterFetch', schemas => {
      schemas.forEach(schema => {
        schema.jsonSchema = schema.jsonSchema ? JSON.parse(schema.jsonSchema) : {}
      })
      
    })
  }

  static get table() {
    return 'schema'
  }

  static get computed() {
    return ['version']
  }

  static get hidden() {
    return ['versionMajor', 'versionMinor', 'versionPatch', 'parentSchemaId']
  }

  getVersion({ versionMajor, versionMinor, versionPatch }) {
    return  `${versionMajor}.${versionMinor}.${versionPatch}`
  }

  parentSchema() {
    return this.hasOne('App/Models/Schema', 'parentSchemaId', 'id')
  }

  childSchemas() {
    return this.hasMany('App/Models/Schema', 'id', 'parentSchemaId')
  }

  fragmentSchemas() {
    return this.belongsToMany('App/Models/FragmentSchema', 'schemaId', 'fragmentSchemaId')
      .pivotModel('App/Models/SchemaFragmentSchema')
  }
  
}

module.exports = Schema
