If I want to change the qty from the drop down
When I select the qty, call the add to cart and change the qty from here.

`{ ...product, qty }` 
    --> This is the `actual data (payload)` you’re sending to `Redux`.
    --> takes all the properties of the product object and includes them here.
    --> Adds or overrides a qty (quantity) property in the object.


`(x) => x._id !== action.payload:` the condition — only keep the items whose _id is not equal to action.payload.

state.cartItems = [
  { _id: "a1", name: "Shoes" },
  { _id: "b2", name: "Hat" },
  { _id: "c3", name: "Jacket" }
];

And action.payload = "b2" — you want to remove the “Hat”.

state.cartItems = state.cartItems.filter((x) => x._id !== "b2");

Result:
state.cartItems = [
  { _id: "a1", name: "Shoes" },
  { _id: "c3", name: "Jacket" }
];


## Reducer Function take 2 params, when it is called One Params passed. WHy?
removeFromCart: (state, action) => {
      // the id will be in the action payload
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);

      // update cart
      return updateCart(state);
},

Call --> dispatch(removeFromCart(id));

reducer function -- takes 
	1.	state – the current Redux state slice (e.g., cart state).
	2.	action – the action object (includes type and payload).

❓ So why do you only call it like this?
`dispatch(removeFromCart(id));`


##### You Do

dispatch(removeFromCart("b2"))
Calls reducer with state and action = { payload: "b2" }
Reducer filters array

##### Behind the Scenes
Removes item with _id === "b2"
State updates
UI re-renders automatically with new cart

