const DB = require("../models/db");
DB.Connect();
class Controllers {
  constructor() {}

  /**
   * @function gets all products
   * @param {object} req
   * @param {object} res
   * @returns {json}
   */

  static get_all_products(req, res) {
    DB.connection.query("select * from Products", (err, results) => {
      if (err) {
        res.status(400).json({ error: err });
      }
      res.status(200).json({ response: results });
    });
  }

  /**
   *  @function updates products name
   * @param {string} req
   * @param {object} res
   * @returns {json}
   */
  static update_product_name(req, res) {
    DB.connection.query(
      `update Products set Name = ${req.body.Name} where id = ${req.params.id}`,
      (err, results) => {
        if (err) {
          res.status(400).json({ error: err });
        }
        res.status(200).json({ response: "product name updated" });
      }
    );
  }

  /**
   *  @function updates products price
   * @param {number} req
   * @param {*} res
   * @returns {json}
   */
  static update_product_price(req, res) {
    DB.connection.query(
      `update Products set Price = ${req.body.Price} where id = ${req.params.id}`,
      (err, results) => {
        if (err) {
          res.status(400).json({ error: err });
        }
        res.status(200).json({ response: " product price updated" });
      }
    );
  }

  /**
   *  @function updates products description
   * @param {string} req
   * @param {*} res
   * @returns {json}
   */

  static update_product_description(req, res) {
    DB.connection.query(
      `update Products set Description = ${req.body.Description} where id = ${req.params.id}`,
      (err, results) => {
        if (err) {
          res.status(400).json({ error: err });
        }
        res.status(200).json({ response: "product description updated" });
      }
    );
  }

  /**
   *  @function updates products availablity
   * @param {number} req
   * @param {*} res either 1 or 0
   * @returns {json}
   */

  static update_product_status(req, res) {
    DB.connection.query(
      `update Products set Availability  = ${req.body.Availability} where id = ${req.params.id}`,
      (err, results) => {
        if (err) {
          res.status(400).json({ error: err });
        }
        res.status(200).json({ response: "product availability updated" });
      }
    );
  }

  /**
   * @function creates new products
   * @param {*} req
   * @param {*} res
   * @returns {json}
   */

  static create_products(req, res) {
    let product = {
      Name: req.body.Name,
      Price: req.body.Price,
      Description: req.body.Description,
      Availability: req.body.Availability
    };
    DB.connection.query(
      `insert into Products SET ?`,
      product,
      (err, results) => {
        if (err) {
          res.status(400).json({ error: err });
        }
        res.status(200).json({ response: "product successfully created" });
      }
    );
  }

  /**
   *
   * @param {string} req
   * @param {*} res
   * @function gets product by name
   * @returns {json}
   */

  static get_product_name(req, res) {
    DB.connection.query(
      `select * from Products where Name = ${req.body.Name}`,
      (err, results) => {
        if (err) {
          res.status(400).json({ error: err });
        }
        res.status(200).json({ response: results });
      }
    );
  }

  /**
   * @function get product id
   * @param {number} req
   * @param {*} res
   */

  static get_product_id(req, res) {
    DB.connection.query(
      `select * from Products where id = ${req.params.id}`,
      (err, results) => {
        if (err) {
          res.status(400).json({ error: err });
        }
        res.status(200).json({ response: results });
      }
    );
  }

  /**
   * @function deletes all products
   * @param {*} req
   * @param {*} res
   */

  static delete_all_products(req, res) {
    DB.connection.query(`delete from Products`, (err, results) => {
      if (err) {
        res.status(500).json({ error: err });
      }
      res.status(200).json({ response: "products successfully deleted" });
    });
  }

  /**
   * @function deletes product by id
   * @param {number} req
   * @param {*} res
   */
  static delete_by_id(req, res) {
    DB.connection.query(
      `delete from Products where id = ${req.params.id}`,
      (err, results) => {
        if (err) {
          res.status(400).json({ error: err });
        }
        res.status(200).json({ response: "products successfully deleted" });
      }
    );
  }
}

module.exports = Controllers;
