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
        'versionMajor', 'versionMinor', 'versionPatch',
        'parentSchemaId'
      ])
      .with('parentSchema', builder => {
        builder.select('id', 'name')
      })
      .with('childSchemas', builder => {
        builder
          .select('id', 'name', 'parentSchemaId')
          .setVisible(['id', 'name'])
      })
      .paginate()
  }


  /**
   * Create/save a new schema.
   * POST schema
   */
  async store ({ request, response }) {
    const schemaData = request.only(['name', 'jsonSchema', 'parentSchemaId', 'fragmentSchemasIds'])
    const schema = new Schema()
    schema.fill(schemaData)
    schema.save()
    
    if (schemaData.fragmentSchemasIds) {

    }
    
    return schema
  }

  /**
   * Display a single schema.
   * GET schema/:id
   */
  async show ({ params, request, response, view }) {
    const query = Schema.query()
      .where('id', params.id)
      .with('fragmentSchemas')

    this.addParentSchemaToQuery(query, 10)
     
    return await query.first()
  }
  
  addParentSchemaToQuery(queryBuilder, count) {
    queryBuilder.with('parentSchema', builder => {
      builder.with('fragmentSchemas')

      if (count > 0) {
        this.addParentSchemaToQuery(builder, --count)
      }
    })
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
