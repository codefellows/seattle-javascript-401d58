'use strict';

class Collection {

  constructor( model ) {
    this.model = model;
  }

  // CRUD METHODS

  async create( data ) {
    try {
      let record = await this.model.create(data);
      return record;
    } catch(e) {
      console.log('Error creating data for model', this.model.name);
      return e;
    }
  }

  async read( id, options={} ) {
    let records = null;
    try {
      if(id) {
        options.where = { id };
        records = await this.model.findOne(options);
      } else {
        records = await this.model.findAll(options);
      }
      return records;
    } catch(e) {
      console.log('Error reading data for model', this.model.name);
      return e;
    }
  }

  async update( id, data ) {
    try {
      let record = await this.model.findOne({where: {id}});
      let updatedRecord = await record.update(data);
      return updatedRecord;
    } catch(e) {
      console.log('Error updating data for model', this.model.name);
      return e;
    }
  }

  async delete( id ) {
    try {
      if(!id) throw new Error('No ID provided for delete operation');
      let deletedRecord = await this.model.destroy({where: {id}});
      return deletedRecord;
    } catch(e) {
      console.log('Error deleting data for model', this.model.name);
      return e;
    }
  }
}

module.exports = Collection;
