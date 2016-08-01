import mongoose from 'mongoose';
import paginate from 'mongoose-paginate';

mongoose.Promise = global.Promise;

import demoSchema from '../schemas/demoSchema';

// Create mongo database connection
// mongoose.connect('mongodb://localhost');

// Events
mongoose.connection.on('connected', () => console.log('MongoDb connected'));
mongoose.connection.on('disconnected', () => console.log('MongoDb disconnected'));

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    throw new Error('MongoDb disconnected through app termination');
  });
});

demoSchema.plugin(paginate);
mongoose.model('Demo', demoSchema);
