# Efoodordering

Efoodordering is a single page full stack web app that allows users to place orders to a restaurant.
The app was built using HTML, CSS, Boostrap, jQuery, Ajax, Express, PostgreSQL, Node, Stripe API, and Twilio API.

## Final Product

!["Screenshot of Efoodordering"](https://github.com/benyoo5222/efoodordering/blob/master/public/images/Screen%20Shot%202018-05-06%20at%204.31.24%20PM.png?raw=true)
!["Screenshot of Efoodordering"](https://github.com/benyoo5222/efoodordering/blob/master/public/images/Screen%20Shot%202018-05-06%20at%204.33.46%20PM.png?raw=true)

## Dependencies

- Body-Parser
- EJS
- Express
- Nodemon
- Knex
- Morgan
- node-sass-middleware
- PG
- Stripe
- Twilio

## Getting Started

- Install all dependencies using 'npm install' command.
- Migrate latest to create the tables and seed the data.
- Start picking the food you'd like to order into the cart and submit it.

## Key Features

1. Press "Learn More" button on any item to find out the price, the description, as well as being able to add it to cart.

!["Screenshot of Efoodordering Main Page"](https://github.com/benyoo5222/efoodordering/blob/master/public/images/Screen%20Shot%202018-05-13%20at%208.11.57%20PM.png?raw=true)

2. When the user presses add to cart, the previously empty cart fills with items that the user selected.

!["Screenshot of Efoodordering of Empty Cart"](https://github.com/benyoo5222/efoodordering/blob/master/public/images/Empty%20Cart.png?raw=true)
!["Screenshot of Efoodordering Filled Cart"](https://github.com/benyoo5222/efoodordering/blob/master/public/images/Filled%20Cart.png?raw=true)

3. Once the user submits the order, the details of the order, the quantity of each item, as well as the total price is shown.

!["Screenshot of Efoodordering Order Detail"](https://github.com/benyoo5222/efoodordering/blob/master/public/images/orderscreen.png?raw=true)

4. If the user tries to place the order without filling out the user name and the cellphone number fields first, an error message shows up to let the customer know each field(s) they need to fill out.

!["Screenshot of Efoodordering Error Message"]()
!["Screenshot of Efoodordering Error Message"]()


5. If the user selects to pay at the restaurant, the order is submitted and the order detail as well as the pick up time is sent to both the customer and the restaurant through texts.

!["Screenshot of Efoodordering Success"](https://github.com/benyoo5222/efoodordering/blob/master/public/images/Screen%20Shot%202018-05-06%20at%204.33.46%20PM.png?raw=true)
!["Screenshot of Efoodordering Text Message to Customer"](https://github.com/benyoo5222/efoodordering/blob/master/public/images/texts.png?raw=true)
!["Screenshot of Efoodordering Text Message to Restaurant"](https://github.com/benyoo5222/efoodordering/blob/master/public/images/texts.png?raw=true)

6. If the user decides to pay online, another form pops up for the user to fill out.

!["Screenshot of Efoodordering Card Payment Form"]()

7. Once the submit button is pressed, with Stripe, the payment is processed and the text messages are sent to both parties.

## Future enchancements

1. Adding a feature to select toppings and sides.

2. Better validation checks.

3. Ability to change the quantity of the items on the checkout cart.

- Any suggestions are always welcome to improve the application. Please email any ideas to benyoo5222@gmail.com
