import mongoose from 'mongoose';
import paginate from 'mongoose-paginate';

mongoose.Promise = global.Promise;

import demoSchema from '../schemas/demoSchema';

// Create mongo database connection
// mongoose.connect('mongodb://localhost');

/* eslint-disable no-console */
mongoose.connection.on('connected', () => console.log('MongoDb connected'));
mongoose.connection.on('disconnected', () => console.log('MongoDb disconnected'));
/* eslint-enable no-console */

demoSchema.plugin(paginate);
mongoose.model('Demo', demoSchema);
