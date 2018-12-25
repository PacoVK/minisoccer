const promise = require('bluebird');

let options = {
    promiseLib: promise
};

const DB_HOST = 'localhost';
const DB_PORT = 5432;
const DB_USER = 'postgres';
const DB_PASSWD = 'suP3rs3cRe7';
const DB = 'sgfo';

const connection = {
    host: DB_HOST,
    port: DB_PORT,
    database: DB,
    user: DB_USER,
    password: DB_PASSWD
};

let pgp = require('pg-promise')(options);
let db = pgp(connection);

getAllTeams = (req, res, next) => {
    db.any('select * from teams')
        .then((data) => {
            res.status(200)
                .json({
                    status: 'success',
                    teams: data
                });
        })
        .catch((err) =>{
            return next(err);
        });
};

createTeam = (req, res, next) =>{
    db.none('insert into teams(name)' +
        'values(${name})',
        req.body)
        .then(() => {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted ${name}'
                });
        })
        .catch((err) => {
            return next(err);
        });
};

removeTeam = (req, res, next) =>{
    let teamID = parseInt(req.params.id);
    db.result('delete from teams where id = $1', teamID)
        .then((result) => {
            res.status(200)
                .json({
                    status: 'success',
                    message: `Removed ${result.rowCount} player`
                });
        })
        .catch((err) => {
            return next(err);
        });
};

getAllDrinks = (req, res, next) => {
    db.any('select * from drinks')
        .then((data) => {
            res.status(200)
                .json({
                    status: 'success',
                    drinks: data,
                });
        })
        .catch((err) => {
            return next(err);
        });
};

createDrink = (req, res, next) =>{
    db.none('insert into drinks(name)' +
        'values(${name})',
        req.body)
        .then(() =>{
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted ${name}'
                });
        })
        .catch((err) => {
            return next(err);
        });
};

createOrder = (req, res, next) =>{
    req.body.amount = parseInt(req.body.amount);
    db.none('insert into consum(team, drink, amount)' +
        'values(${name}, ${drink}, ${amount})',
        req.body)
        .then(() => {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted order ${amount} from ${name}'
                });
        })
        .catch((err) => {
            return next(err);
        });
};

calculateConsumForTeams = (req, res, next) =>{
    db.any('select t.team, sum(t.amount) as total from (select * from consum inner join drinks on ' +
        '(consum.drink = drinks.name) group by consum.id, drinks.id) as t ' +
        'where t.drink=t.name group by t.team order by total desc')
        .then((result) => {
            res.status(200)
                .json({
                    status: 'success',
                    orders: result,
                });
        })
        .catch((err) => {
            return next(err);
        });
};

module.exports = {
    getAllTeams: getAllTeams,
    createTeam: createTeam,
    removeTeam: removeTeam,
    getAllDrinks: getAllDrinks,
    createDrink: createDrink,
    createOrder: createOrder,
    calculateConsumForTeams: calculateConsumForTeams
};
