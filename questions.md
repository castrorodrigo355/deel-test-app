1. What is the difference between Component and PureComponent? Give
   an example where it might break my app.

- What I remember about pure component is that... if they receive properties, just the result depends of internal scope
  elements. I mean, the result has nothing to do with external constants or variables. Similar to pure functions. It is performance because pure components avoid re-renders.

####

2. Context + ShouldComponentUpdate might be dangerous. Why is that?

- I usually see that children middle components re-rendered because of one state is updated.
  It's dangerous so, a solution for that would be using memoization. Similar to redux RESELECT library to avoid
  unnecessary re-renders when children shouldn't.

####

3. Describe 3 ways to pass information from a component to its PARENT.

- Tipically we pass states and methods to our child components. These children group can trigger them to update father states
  with some implementation knowledge.
- Another way is define child component just with a onClick but children can not have idea about implementation. It would a
  kind of anonymous implementation. Main problem here is to avoid use a lot of properties.
- Last way is using context api as a native react feature to remove dependencies props between components.
  Just we need to share values into Context provider to allow children to use those values and method to implement from anywhere.

####

4. Give 2 ways to prevent components from re-rendering.

If we are using a global state managemente pattern such as Redux, it's important to use RESELECT library
to create custom selectors and prevent

Another options are useMemo (variables) and useCallback (methods) with syntax similar to useEffect to use memoization of components which are gonna be re-rendered because of state updates. Just we need to add depedencies to useMemo to avoid that.

####

5. What is a fragment and why do we need it? Give an example where it might
   break my app.

The React fragment element is another option to render multiple elements without creating an extra html tag.
We can avoid the existence of an extra parent element wrapping the group I'm interested.

####

6. Give 3 examples of the HOC pattern.

- Memo: It's useful to return pure component from a react component.
- Traditional react-redux implementation CONNECT to implement mapStateToProps and mapDispatchToProps.
- Custom Wrapped components for repetitive tasks like getData, loading, error, Wrapped features return pure components as well.

####

7. What's the difference in handling exceptions in promises, callbacks
   and async...await?

- Callbacks are Functions with another Function as argument so exception can be handled with a typical validation.
  A good option is to declare our callbback with (error? , result) and with specific scenarios we would to avoid the
  famous callback-hell. Regarding promises, they offer us async implementation handling resolve and reject behaviors,
  it's body contains business rules, so we use ourPromise().then(...).then(...).catch(err => err instruction). We can
  create a promises - chain for specific scenarios (e.g: promise all, promise race, etc). Async and await implementation work with promises but with different syntax creating an async function including try catch block with await instruction
  async Fn () => { try { ... await fetchData() } catch (e) { error implementation } }

####

8. How many arguments does setState take and why is it async.

- useState has 2 arguments. First the specific value of the state in a momento and second,its update function.
  useState is async because useState update function doesn't make it inmediatly, it leaves the change in te queue and when the component scope is finished, it will execute the RE-RENDER.

####

9. List the steps needed to migrate a Class to Function Component.

- Update App extends Component and replace for a functional declaration.
- Now we don't need the common state object.
- Replace componentDidMount and rest of life-cycle methods using HOOKS (if we need states)
- Remove all THIS instances (for instance this.state.data1, this.state.data2 and so on, replace for methods and hooks variables)
- render method is no longer needed, just use return (...HTML TAGS)

####

10. List a few ways styles can be used with components.

- Inline CSS styles (I think it's the worst way to implement styles). It's hard form management.
- Another way are style files (.css and other) to isolate ui rules.
- CSS is JS Styled components, Emotion, etc. Useful to create our custom library.
- 3rd party libraries such as Material UI - Chakra UI and so on.

####

11. How to render an HTML string coming from the server.
