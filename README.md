# The Reducer Pattern Module Project: The Calculator

This module explored the reducer pattern. During the module, you studied what immutability is, what reducers, actions and dispatch are, and how to use the reducer hook. In this project, you will practice each of the steps of building state and actions into an application. We will do this by both adding in and building from scratch all of the pieces of the reducer pattern.

## Objectives
- Understand how to use useReducer hook.
- Get comfortable connecting a reducer state to an application's UI.
- Successfully connect UI user events to the dispatching of reducer actions.
- Understand how to create reducer cases and the action creators that trigger them.
- Learn how to step through and test thoroughly each step of the process.

## Introduction
In this project, you will build an complete a simple calculator app that can add, multiply, subtract and clear numbers in any order as well as add in memory save and recall features. You will start by adding in missing pieces to the code and complete the process by building features in to the UI, reducer and actions files from scratch.

This simplified calculator adds the entire number selected, rather then adds digits into end of number. In the end of the process, your calculator should function as follows:

![Calculator Example](project-goals.gif)

***Make sure to complete your tasks one at a time and complete test each task before proceding forward.***

## Instructions


#### Add in memory functions from scratch.
> *Congratulations! You have gone through the entire process for adding an action to your app! Now, see if you can follow the same process (reducer case => action creator => UI connection) for the following app features. IN EACH CASE, ALWAYS TEST THAT YOUR FEATURE WORKS BEFORE PROCEEDING FORWARD.*

* [ ] When `M+` is pressed, the current memory value should be set to the current total value. Test by seeing the result of memory in the UI.
* [ ] When `MR` is pressed, the current memory value should be applied to the current total value(See the APPLY_NUMBER case). Test by adding a value to memory and then seeing if the total updates correctly when pressed.
* [ ] When `MC` is pressed, the current memory value should be set to zero. Test by adding a value to memory and then seeing the memory value reset to zero when pressed.


### Task 3: Stretch goals
- [ ] There is a version of the calculator focuses on adding individual digits, rather then entire numbers. How do you imagine adding an individual digit to the total state?
- [ ] [Here is an example](https://freshman.tech/calculator/) of a (non-reducer) approach to building an javascript calculator. Feel free to make a new branch and use the basic ideas in the post to build a new version of the calculator.
