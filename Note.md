# `What is Automated testing:`

- Automated testing involves writing code to verify that our software behaves as expected. 
- When done properly, it can significantly `reduce the need for and cost of manual testing`.
- However, it cannot entirely replace manual testing, as certain aspects of 
an application (e.g., aesthetics) are best assessed by human testers.

- In automated testing, there are `three primary types of tests`: 
    - `unit tests` : Unit tests validate the correctness of small, isolated units within an application

    - `integration tests`: Integration tests examine interactions between different units of an application

    - `end-to-end tests`: End-to-end tests assess the entire application as a whole, simulating user interactions from the user interface to the back-end services

# `Unit testing:`

- A testing framework is a collection of `tools` used for writing and executing tests. Popular 
testing frameworks include 
    - Jest, 
    - Vitest, 
    - Mocha
- Vitest offers native support for `EcmaScript Modules (ESM)` and `TypeScript,` making it a suitable choice for modern JavaScript projects

- ### **AAA pattern** 
    - Test structures often follow the AAA (Arrange-Act-Assert) pattern
    - ***Arrange*** - we set up the test environmen by declaring variable
    - ***Act*** - we perform the action to be tested
    - ***Assert*** - we validate the outcome against our expectations

- ### **Test-driven Development (TDD)**:
    -  is a development approach where tests are written before the corresponding code is implemented.

- ### **Code coverage tools**:
    - measure the proportion of code that is tested.


# `Core Techniques`:

- # Common Matchers:

- ### Equality:
    - `toBe()` - is for premetive values number , string , booleans
    - `toEqual()` - For object or array matching. If new property in object adds, then error will show.

- ### Truthiness

    - `toBeDefined()` - Useful use case would be to check if function returned anything. **CHeck Return value is not equal to undefined**
    - `toBeTruthy()`
    - `toBeFalsy()`
    - `toBeNull()`
    - `toBeUndefined()`

- ### String

    - `toMatch()`

- ### Object

    - `toMatchObject()`
    - `toHaveProperty()`

- ### 