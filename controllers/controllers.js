const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const db = mysql.createConnection({
  localAddress: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE_NAME,
  password: process.env.DB_PASSWORD
});

db.connect(err => {
  if (err) throw err;
});

/**
 * @function gets all products
 * @param {object} req
 * @param {object} res
 * @returns {json}
 */

const get_all_products = (req, res) => {
  db.query("select * from Products", (err, results) => {
    if (err) {
      res.status(400).json({ error: err });
    }
    res.status(200).json({ response: results });
  });
};

/**
 *  @function updates products name
 * @param {string} req
 * @param {object} res
 * @returns {json}
 */
const update_product_name = (req, res) => {
  db.query(
    `update Products set Name = ${req.body.Name} where id = ${req.params.id}`,
    (err, results) => {
      if (err) {
        res.status(400).json({ error: err });
      }
      res.status(200).json({ response: results });
    }
  );
};

/**
 *  @function updates products price
 * @param {number} req
 * @param {*} res
 * @returns {json}
 */
const update_product_price = (req, res) => {
  db.query(
    `update Products set Price = ${req.body.Price} where id = ${req.params.id}`,
    (err, results) => {
      if (err) {
        res.status(400).json({ error: err });
      }
      res.status(200).json({ response: results });
    }
  );
};

/**
 *  @function updates products description
 * @param {string} req
 * @param {*} res
 * @returns {json}
 */

const update_product_description = (req, res) => {
  db.query(
    `update Products set Description = ${req.body.Description} where id = ${req.params.id}`,
    (err, results) => {
      if (err) {
        res.status(400).json({ error: err });
      }
      res.status(200).json({ response: results });
    }
  );
};

/**
 *  @function updates products availablity
 * @param {number} req either 1 or 0
 * @param {*} res
 * @returns {json}
 */

const update_product_status = (req, res) => {
  db.query(
    `update Products set Availability  = ${req.body.Availability} where id = ${req.params.id}`,
    (err, results) => {
      if (err) {
        res.status(400).json({ error: err });
      }
      res.status(200).json({ response: results });
    }
  );
};

/**
 * @function creates new products
 * @param {*} req
 * @param {*} res
 * @returns {json}
 */

const create_products = (req, res) => {
  let product = {
    Name: req.body.Name,
    Price: req.body.Price,
    Description: req.body.Description,
    Availability: req.body.Availability
  };
  db.query(`insert into Products SET ?`, product, (err, results) => {
    if (err) {
      res.status(400).json({ error: err });
    }
    res.status(200).json({ response: results });
  });
};

/**
 *
 * @param {string} req
 * @param {*} res
 * @function gets product by name
 * @returns {json}
 */

const get_product_name = (req, res) => {
  db.query(
    `select * from Products where Name = ${req.body.Name}`,
    (err, results) => {
      if (err) {
        res.status(400).json({ error: err });
      }
      res.status(200).json({ response: results });
    }
  );
};

/**
 * @function get product id
 * @param {number} req
 * @param {*} res
 */

const get_product_id = (req, res) => {
  db.query(
    `select * from Products where id = ${req.params.id}`,
    (err, results) => {
      if (err) {
        res.status(400).json({ error: err });
      }
      res.status(200).json({ response: results });
    }
  );
};

/**
 * @function deletes all products
 * @param {*} req
 * @param {*} res
 */

const delete_all_products = (req, res) => {
  db.query(`delete from Products`, (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    }
    res.status(200).json({ response: results });
  });
};

/**
 * @function deletes product by id
 * @param {number} req
 * @param {*} res
 */
const delete_by_id = (req, res) => {
  db.query(
    `delete from Products where id = ${req.params.id}`,
    (err, results) => {
      if (err) {
        res.status(400).json({ error: err });
      }
      res.status(200).json({ response: results });
    }
  );
};
module.exports = {
  get_all_products,
  update_product_name,
  update_product_price,
  update_product_description,
  update_product_status,
  create_products,
  get_product_name,
  get_product_id,
  delete_all_products,
  delete_by_id
};
