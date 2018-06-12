'use strict'

class Schema {
  
  get validateAll() {
    return true
  }

  get rules () {
    return {
      name: 'required|string|max:30',
      jsonSchema: 'json|required',
      parentSchemaId: 'number|integer',
      //fragmentSchemas: 'array'
    }
  }
}

module.exports = Schema
