'use strict'

const Schema = use('App/Models/Schema')

/**
 * Resourceful controller for interacting with schema
 */
class SchemaController {

  /**
   * Show a list of all schema.
   * GET schema
   */
  async index ({ request, response, view }) {
    return Schema.query()
      .select([
        'id',
        'name',
        'version_major', 'version_minor', 'version_patch',
        'schema_id'
      ])
      .with('parentSchema', builder => {
        builder.select('id', 'name')
      })
      .with('childSchemas', builder => {
        builder
          .select('id', 'name', 'schema_id')
          .setVisible(['id', 'name'])
      })
      .paginate()
  }

  /**
   * Create/save a new schema.
   * POST schema
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single schema.
   * GET schema/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update schema details.
   * PUT or PATCH schema/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a schema with id.
   * DELETE schema/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = SchemaController
