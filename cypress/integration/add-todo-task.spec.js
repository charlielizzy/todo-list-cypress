describe('My Add Todo Test', () => {

  it('should be able to submit the form and see a new todo item', () => {
    cy.visit('http://localhost:3000');
    cy.get('[id="task-input"]').type('Hello world');
    cy.get('form').submit();
  })

  it('should empty the input field after submit', () => {

  })

  it('should remove an item from todo when "Remove" is clicked', () => {

  })

  it('should change "NO" to "YES" in the "completed" column', () => {

  })

  it('should put a line through text when item is "Completed"', () => {
    // functionality needed
  })

  it('should see a message saying "add an item to do" if there are no todo list items', () => {
    // functionality needed
  })

  it('should show a message when all todo items are completed', () => {
    // functionality needed
  })

  it('should show a star to the left of the job title if it when "Priority" is clicked', () => {
    // functionality needed
  })

  it('should remove the star from item when "Completed" is clicked', () => {
    // functionality needed
  })

  it('should show priority tasks at the top of the list', () => {
    // functionality needed
  })

  it('should show link saying "unprioritized" is job is a priority', () => {
    // functionality needed
  })

  it('should remove the star and move todo item if "unprioritized" is clicked', () => {
    // functionality needed
  })



})