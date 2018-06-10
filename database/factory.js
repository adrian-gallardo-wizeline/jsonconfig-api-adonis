'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory')
const Config = use('Config')

const seededModels = {}

function seedModelIfNeeded(modelName, faker) {
  if (seededModels[modelName]) {
    return
  }
  const seed = Config.get('app.fakerSeed')
  faker.mt.init_genrand(seed)
  seededModels[modelName] = true
}

/**
  Factory.blueprint('App/Models/User', (faker) => {
    return {
      username: faker.username()
    }
  })
*/

Factory.blueprint('App/Models/Schema', (faker) => {
  
  seedModelIfNeeded('Schema', faker)

  return {
    name: faker.sentence({ words: 3 }),
    version_major: faker.integer(({ min: 0, max: 1 })),
    version_minor: faker.integer(({ min: 0, max: 5 })),
    version_patch: faker.integer(({ min: 0, max: 10 })),
  }
})
