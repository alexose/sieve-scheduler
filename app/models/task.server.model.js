'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Task Schema
 */
var TaskSchema = new Schema({
	name: {
		type: String,
		default: 'New Sieve Task',
		required: 'Please provide a name for your new Sieve task.',
		trim: true
	},
  code: {
    type: String,
    default: '{ url : \"http://google.com\" }',
    required: 'Please provide a Sieve code.',
    trim: true
  },
  frequency : {
    type: Number,
    default: '12',
    required: 'Please provide a frequency.'
  },
  end : {
    type: Date
  },
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Task', TaskSchema);
