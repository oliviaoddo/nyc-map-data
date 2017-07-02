const Sequelize = require('sequelize');
const db = new Sequelize('rodents', 'root', 'Redmazda08!', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});


var Food = db.define('food', {
    date: Sequelize.STRING,
    type: Sequelize.STRING,
    zipcode: Sequelize.STRING,
    borough: Sequelize.STRING,
    latitude: Sequelize.STRING,
    longitude: Sequelize.STRING,
    location: Sequelize.TEXT
}, {
    timestamps: false
    }
);


var Noise = db.define('noise', {
    date: Sequelize.STRING,
    type: Sequelize.STRING,
    zipcode: Sequelize.STRING,
    borough: Sequelize.STRING,
    latitude: Sequelize.STRING,
    longitude: Sequelize.STRING,
    location: Sequelize.TEXT
}, {
    timestamps: false
    }
);

var Graffiti = db.define('graffiti', {
   date: Sequelize.STRING,
    type: Sequelize.STRING,
    zipcode: Sequelize.STRING,
    borough: Sequelize.STRING,
    latitude: Sequelize.STRING,
    longitude: Sequelize.STRING,
    location: Sequelize.TEXT
}, {
    timestamps: false
    }
    );

module.exports = {
    db: db,
    Food: Food,
    Noise: Noise,
    Graffiti: Graffiti,
};
