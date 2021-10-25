require('dotenv').config();
const { Sequelize } = require('sequelize');
const AdministradorModel = require('./models/administrador');
const ProductosModel = require('./models/productos');
const ImagenesModel = require('./models/imagenes');

const {
    DB_USER, DB_PASSWORD, DB_HOST,
  } = process.env;
  
  const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecommerce_machi`, {
    logging: false, 
    native: false, 
  });

  const Administrador = AdministradorModel(sequelize)
  const Producto = ProductosModel(sequelize)
  const Imagenes = ImagenesModel(sequelize)

  module.exports = {
     conn: sequelize,
     Administrador,
     Producto,
     Imagenes
  };