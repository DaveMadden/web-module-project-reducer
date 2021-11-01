# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* handleclick is called
* dispatch calls addOne() action creator
* addOne returns an object of type ADD_ONE
* reducers recieves ADD_ONE, spreads state, and increments total by one
* UI recognizes state change and updates display
...

* TotalDisplay shows the total plus 1.
