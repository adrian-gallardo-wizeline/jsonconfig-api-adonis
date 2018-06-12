'use strict'

/**
 * Resourceful controller for interacting with datafragments
 */
class DataFragmentController {
  /**
   * Show a list of all datafragments.
   * GET datafragments
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new datafragment.
   * GET datafragments/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new datafragment.
   * POST datafragments
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single datafragment.
   * GET datafragments/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing datafragment.
   * GET datafragments/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update datafragment details.
   * PUT or PATCH datafragments/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a datafragment with id.
   * DELETE datafragments/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = DataFragmentController
