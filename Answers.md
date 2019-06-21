1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

	**Filter, map, every (spread operator)**

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

	**Actions are basically objects that have a type and a payload (some data) they get sent to your reducer.  The reducer will take the action and based on the type will perform some action that involves updating the store.  The store is a fancy for your state/data.  Store is the only place where certain data can be accessed.**
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

	**App state can be considered your main state.  App state is data that needs to be access across your app.  Comp state is more local and control things like form inputs and other actions that are local to that component.**
1.  What is middleware?

	**Middleware is as it sounds.  It is basically an interceptor and a way to interact with actions before they reach the store reducer.  These actions can be logging, async request.**

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

	**Redux-thunk is a fancy word that means a function that returns a function.  Thunk in redux allows you to write action creators that return a function instead of an action (which is an object). It allows to create actions asynchronously.**
1.  Which `react-redux` method links up our `components` with our `redux store`?
	
	**Provider**
