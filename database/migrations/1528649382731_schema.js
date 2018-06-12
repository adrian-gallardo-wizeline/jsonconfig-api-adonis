'use strict'

const BaseSchema = use('Schema')

class Schema extends BaseSchema {
  up () {
    this.create('schema', (table) => {
      table.increments()
      table.string('name', 80)
      table.integer('versionMajor')
      table.integer('versionMinor')
      table.integer('versionPatch')
      table.integer('parentSchemaId').unsigned()
      table.foreign('parentSchemaId').references('schema.id')
      table.json('jsonSchema')
      table.timestamps()
    })
  }

  down () {
    this.drop('schema')
  }
}

module.exports = Schema
