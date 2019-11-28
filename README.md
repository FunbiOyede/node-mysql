# node-mysql

A CRUD RESTFUL API USING MYSQL AS DATABASE

### 1. Clone the repo

Clone the repo locally. In a terminal, run:

```
$ git clonehttps://github.com/FunbiOyede/node-mysql.git
```

### 2. Run the application

#### Node.js Installation

1. Install [Node.js](https://nodejs.org/en/)
2. Run the following commands in a terminal:

```
$ npm install


$ yarn install

```

### 3. Expected Parameters

The API expect the following Parameters: </br>
`id` of type int </br>
`Name` of type string </br>
`Price` of type string </br>
`Description` of type string </br>
`Availabiltity` of type string. This represents the status of the product. If the product is available `Availability = 1` if product isn't available `Availability = 0` </br>

### 4. Using Postman

Make sure post is set to `x-www-form-urlencoded`

### 5. Endpoints

- Create Product (GET): `/api/v1/products`
- Update Product Name with id (PUT): `/api/v1/products/name/:id`
- Update Product Price with id (PUT): `/api/v1/products/price/:id`
- Update Product Description with id (PUT): `/api/v1/products/description/:id`
- Update Prodcut Availability with id (PUT): `/api/v1/products/status/:id`
- Create new user (POST) `/api/v1/products`
- Get Product by Name (GET) `/api/v1/products/name`
- Get Product by id (GET) `/api/v1/products/:id`
- Delete All products (DELETE) `/api/v1/products`
- Delete Product by id (DELETE) `/api/v1/products:id`
