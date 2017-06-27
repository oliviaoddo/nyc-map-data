const Sequelize = require('sequelize');
const db = new Sequelize('rodents', 'root', 'Redmazda08!', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});


var AllComplaints = db.define('all_complaints', {
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
    AllComplaints: AllComplaints
};
