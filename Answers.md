1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    -   .map() .concat() .filter() .assign() We use the .assign() method to create a new object while extending properties of another
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    -   You call an action which dispatches to the store. The store contains a single object which is immutable and is only ever replaced
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    -   Application state keeps state for the entire application which can be passed down to different componenents as needed A component state keeps state just within the component but it can be passed down. Application state can be passed to whichever component needs a certain state
1.  What is middleware?
    -   Middleware sits between actions and the reducer and can take action on any data or action that is going through
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    -   Allows you to write an action creator that returns a function instead of an action. Allows us to delay the execution of our action until something else happens first.
1.  Which `react-redux` method links up our `components` with our `redux store`?
    -   .connect() method allows us to link our redux store to our component

---

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - You call an action which dispatches to the store. The store contains a single object which is immutable and is only ever replaced
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - Application state keeps state for the entire application which can be passed down to different componenents as needed. A component state keeps state just within the component but it can be passed down. Application state can be passed to whichever component needs a certain state
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - .connect() method allows us to link our redux store to our component
