'use strict'

const SchemaHook = exports = module.exports = {}

SchemaHook.assignFirstVersion = (schema) => {
  schema.versionMajor = 1
  schema.versionMinor = 0
  schema.versionPatch = 0
  
  return schema
}
