'use strict'

const BaseSchema = use('Schema')

class Schema extends BaseSchema {
  up () {
    this.create('schema', (table) => {
      table.increments()
      table.string('name', 80)
      table.integer('version_major')
      table.integer('version_minor')
      table.integer('version_patch')
      table.integer('schema_id').unsigned()
      table.foreign('schema_id').references('schema.id')
      table.json('json_schema')
      table.json('merged_json_schema')
      table.timestamps()
    })
  }

  down () {
    this.drop('schema')
  }
}

module.exports = Schema
