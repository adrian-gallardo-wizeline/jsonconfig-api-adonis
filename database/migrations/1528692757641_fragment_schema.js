'use strict'

const Schema = use('Schema')

class SchemaFragmentSchema extends Schema {
  up () {
    this.create('schema_fragment_schema', (table) => {
      table.increments()
      table.integer('schemaId').unsigned()
      table.foreign('schemaId').references('schema.id')
      table.integer('fragmentSchemaId').unsigned()
      table.foreign('fragmentSchemaId').references('fragmentSchema.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('schema_fragment_schema')
  }
}

module.exports = SchemaFragmentSchema
