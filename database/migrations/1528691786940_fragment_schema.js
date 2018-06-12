'use strict'

const Schema = use('Schema')

class FragmentSchema extends Schema {
  up () {
    this.create('fragment_schema', (table) => {
      table.increments()
      table.string('name')
      table.integer('versionMajor')
      table.integer('versionMinor')
      table.integer('versionPatch')
      table.json('jsonSchema')
      table.timestamps()
    })
  }

  down () {
    this.drop('fragment_schema')
  }
}

module.exports = FragmentSchema
