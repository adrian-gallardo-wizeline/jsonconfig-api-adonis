'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', ({ request }) => {
  return { greeting: 'Hello world in JSON' }
})


Route.get('schemas/select', 'SchemaController.select')
Route.resource('schemas', 'SchemaController')
  .validator(new Map([
    [['schemas.store', 'schemas.update'], ['Schema']],
  ]))
  .apiOnly()