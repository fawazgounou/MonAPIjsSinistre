'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const studentRoutes = require('./routes/student-routes');
const userRoutes = require('./routes/user-routes');
const adminRoutes = require('./routes/sinistre-routes');
const vehiculeRoutes = require('./routes/vehicule-routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', studentRoutes.routes);
app.use('/api/user', userRoutes.routes);
app.use('/api/admin', adminRoutes.routes);
app.use('/api/vehicule', vehiculeRoutes.routes);


app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));
