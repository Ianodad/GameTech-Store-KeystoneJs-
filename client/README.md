<!---
<h1 align="center">
  <br><a href="https://imgbb.com/"><img src="https://i.ibb.co/kXD9vbw/Tech-IT-Not-official.png" alt="Tech-IT-Not-official" border="0"></a></a>
  <br>
  <p align="center"><a href="https://ibb.co/nrNNrwW"><img src="https://i.ibb.co/PxvvxrS/ff2b00.png" alt="ff2b00" border="0"></a></p>
  <br>
</h1>
-->

# GaMeTeCh Client -- NEXTJS WITH APOLLO CLIENT

## Contents

- [GaMeTeCh Client -- NEXTJS WITH APOLLO CLIENT](#gametech-client----nextjs-with-apollo-client)
	- [Contents](#contents)
	- [Introduction](#introduction)
	- [Key Features](#key-features)
	- [Example Screenshots](#example-screenshots)
	- [Folder Structure](#folder-structure)
	- [Apollo Client Config](#apollo-client-config)
	- [Products Query](#products-query)
	- [Installation](#installation)
	- [Built With](#built-with)
	- [Usage](#usage)
	- [Contributing](#contributing)
	- [License](#license)

## Introduction

The front end of a tech e-commerce store

## Key Features

- [x] Fetch Graphql
- [x] Product Vie
- [x] Login, Register, Logout User, Password Reset
- [x] Roles CRUD
- [x] Add to Cart
- [x] Product CRUD
- [x] Route
- [x] Checkout Order
- [x] Search Product

## Example Screenshots

## Folder Structure

```bash
├───components/
│   ├───styles/
│   │   ├───.gitkeep
│   │   ├───CartStyles.js
│   │   ├───CloseButton.js
│   │   ├───DropDown.js
│   │   ├───Form.js
│   │   ├───ItemStyles.js
│   │   ├───NavStyles.js
│   │   ├───OrderItemStyles.js
│   │   ├───OrderStyles.js
│   │   ├───PaginationStyles.js
│   │   ├───PriceTag.js
│   │   ├───SickButton.js
│   │   ├───Supreme.js
│   │   ├───Table.js
│   │   ├───Title.js
│   │   └───nprogress.css
│   ├───.gitkeep
│   ├───AddToCart.js
│   ├───Cart.js
│   ├───CartCount.js
│   ├───Checkout.js
│   ├───CreateProduct.js
│   ├───DeleteProduct.js
│   ├───ErrorMessage.js
│   ├───Header.js
│   ├───Layout.js
│   ├───Nav.js
│   ├───Page.js
│   ├───Pagination.js
│   ├───PleaseSignIn.js
│   ├───Product.js
│   ├───Products.js
│   ├───RemoveFromCart.js
│   ├───RequestReset.js
│   ├───Reset.js
│   ├───Search.js
│   ├───SignIn.js
│   ├───SignOut.js
│   ├───SignUp.js
│   ├───SingleProduct.js
│   ├───UpdateProduct.js
│   └───User.js
├───lib/
│   ├───.gitkeep
│   ├───calcTotalPrice.js
│   ├───cartState.js
│   ├───formatMoney.js
│   ├───paginationField.js
│   ├───useForm.js
│   └───withData.js
├───pages/
│   ├───account/
│   │   └───index.js
│   ├───order/
│   │   └───[id].js
│   ├───orders/
│   │   └───index.js
│   ├───product/
│   │   └───[id].js
│   ├───products/
│   │   ├───[page].js
│   │   └───index.js
│   ├───sell/
│   │   └───index.js
│   ├───.gitkeep
│   ├───_app.js
│   ├───_document.js
│   ├───index.js
│   ├───reset.js
│   ├───signin.js
│   └───update.js
├───public/
│   └───static/
│       └───favicon.png
├───.env.local
├───.eslintrc.js
├───README.md
├───config.js
├───package-lock.json
└───package.json
```

## Apollo Client Config

Most modules are imported into react from the index.js file

```js
     cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // TODO: We will add this together!
            allProducts: paginationField(),
          },
        },
      },
    }).restore(initialState || {}),
```

## Products Query

This is snippet of the a product query.

```js
export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
      id
      name
      price
      description
      status
      photo {
        id
        altText
        image {
          publicUrlTransformed
        }
        # filename
        # originalFilename
        # mimetype
        # encoding
        # meta
      }
    }
  }
`;
```

## Installation

```bash
npm install

npm run dev
```

## Built With

- Next JS
- Apollo Client
- Stripe

## Usage

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

MIT (c) 2021 [Ian Adera](https://github.com/ianodad)
