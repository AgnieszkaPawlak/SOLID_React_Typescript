export const SingleResponsibility = () => {
  return(<>
  <h1>Single Responsibility</h1>
  <div>
    <p>
      This rule helps us to increase the flexability and maintability systems by ensuring that each component is focused on a single task.
      In React, we can applay this rule by separationg logic of a component into more focused and smaller pices.
      Example: 
      The navigation component is responsible for displaying the list with buttons that lead to the pages. Each button has its own separate task, so all functions that are used to handle it should not be in the navigation component.
    </p>
  </div>
  </>) 
};
