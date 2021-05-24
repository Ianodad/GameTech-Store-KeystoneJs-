import { createAuth } from "@keystone-next/auth";
import { config, createSchema } from "@keystone-next/keystone/schema";
import {
  statelessSessions,
  withItemData
} from "@keystone-next/keystone/session";
import "dotenv/config";
import { extendGraphqlSchema } from './mutations';
import { permissionsList } from './schemas/fields';
import { Role } from './schemas/Role';
import { CartItem } from './schemas/CartItem';
import { Product } from "./schemas/Product";
import { ProductImage } from "./schemas/ProductImage";
import { User } from "./schemas/User";
import { OrderItem } from './schemas/OrderItem';
import { Order } from './schemas/Order';


const databaseURL =
  process.env.DATABASE_URL || "mongodb://localhost/keystone-sick-fits-tutorial";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
    // TODO: Add in inital roles here
  }, 
  passwordResetLink: {
    async sendToken(args) {
      // console.log(args);
    },
  },
});
console.log(JSON.stringify(Product))
export default withAuth(
  config({
    // @ts-ignore
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: "mongoose",
      url: databaseURL,
      // TODO: Add data seeding here
    },
    lists: createSchema({
      // Schema items go in here
      User,
      Role,
      Order,
      Product,
      CartItem,
      OrderItem,
      ProductImage,
    }),
    extendGraphqlSchema,
    ui: {
      // Show the UI only for poeple who pass this test
      isAccessAllowed: ({ session }) =>
        // console.log(session);
        !!session?.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      // GraphQL Query
      User: `id name email role { ${permissionsList.join(' ')} }`,
    }),
  })
);
