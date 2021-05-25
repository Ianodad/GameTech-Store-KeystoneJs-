<!---
<h1 align="center">
  <br><a href="https://imgbb.com/"><img src="https://i.ibb.co/kXD9vbw/Tech-IT-Not-official.png" alt="Tech-IT-Not-official" border="0"></a></a>
  <br>
  <p align="center"><a href="https://ibb.co/nrNNrwW"><img src="https://i.ibb.co/PxvvxrS/ff2b00.png" alt="ff2b00" border="0"></a></p>
  <br>
</h1>
-->

# GaMeTeCh Server -- KEYSTONEJS WITH GRAPHQL

## Contents

- [GaMeTeCh Server -- KEYSTONEJS WITH GRAPHQL](#gametech-server----keystonejs-with-graphql)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Key Features](#key-features)
  - [Folder Structure](#folder-structure)
  - [Example](#example)
  - [Schemas](#schemas)
  - [Custom Mutations](#custom-mutations)
  - [Installation](#installation)
  - [Built With](#built-with)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

This is the backend of the tech e-commerce server

## Key Features

- [x] MongoDB
- [x] Product CRUD
- [x] User CRUD
- [x] Roles CRUD
- [x] Cart CRUD
- [x] Order CRUD
- [x] Search
- [x] RBAC / access control
- [x] Authentication & Authorization

## Folder Structure

```bash
├───lib/
│   ├───formatMoney.ts
│   ├───mail.ts
│   └───stripe.ts
├───mutations/
│   ├───addToCart.ts
│   ├───checkout.ts
│   └───index.ts
├───node_modules/
├───schemas/
│   ├───CartItem.ts
│   ├───Order.ts
│   ├───OrderItem.ts
│   ├───Product.ts
│   ├───ProductImage.ts
│   ├───Role.ts
│   ├───User.ts
│   └───fields.ts
├───seed-data/
│   ├───data.ts
│   ├───index.ts
│   ├───newdata.ts
│   ├───productimages.json
│   └───products.json
├───.env
├───README.md
├───access.ts
├───keystone.ts
├───package-lock.json
├───package.json
└───types.ts
```

## Example

## Schemas

Most modules are imported into react from the index.js file

```js
 lists: createSchema({
        User,
        Role,
        Order,
        Product,
        CartItem,
        OrderItem,
        ProductImage,
     }),
```

## Custom Mutations

the handlePageChange() takes in one parameter then setState's it to this.state.currentPage

```js
 resolvers: {
      Mutation: {
        addToCart,
        checkout,
     },
  },
```

## Installation

```bash
npm install

npm run dev
```

## Built With

- KeystoneJS
- Graphql
- Nodemailer
- Stripe

## Usage

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

MIT (c) 2021 [Ian Adera](https://github.com/ianodad)
