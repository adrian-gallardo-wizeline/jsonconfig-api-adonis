'use strict'

/*
|--------------------------------------------------------------------------
| SchemaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class SchemaSeeder {
  async run () {
    const schema1 = await Factory.model('App/Models/Schema').make()
    const schema2 = await Factory.model('App/Models/Schema').make()
    const schema3 = await Factory.model('App/Models/Schema').make()
    const schema4 = await Factory.model('App/Models/Schema').make()

    await schema1.childSchemas().save(schema2)
    await schema2.childSchemas().saveMany([schema3, schema4])

    const fragmentSchema1 = await Factory.model('App/Models/FragmentSchema').make()
    await schema1.fragmentSchemas().save(fragmentSchema1)

    const fragmentSchema2 = await Factory.model('App/Models/FragmentSchema').make()
    await schema2.fragmentSchemas().save(fragmentSchema2)

    const fragmentSchema3 = await Factory.model('App/Models/FragmentSchema').make()
    await schema3.fragmentSchemas().save(fragmentSchema3)
  }
}

module.exports = SchemaSeeder
