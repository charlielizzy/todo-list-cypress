describe("My Add Todo Test", () => {
  it("should be able to submit the form and see a new todo item", () => {
    cy.visit("http://localhost:3000");
    cy.get('[id="task-input"]').type("Hello world");
    cy.get("form").submit();
    cy.get("tbody").find("tr").should("have.length", 5);
  });

  it("should empty the input field after submit", () => {
    cy.visit("http://localhost:3000");
    cy.get('[id="task-input"]').type("hello");
    cy.get("form").submit();
    cy.get('[id="task-input"]').should("not.have.value");
  });

  it('should remove an item from todo when "Remove" is clicked', () => {
    cy.visit("http://localhost:3000");
    cy.get('[id="remove-2"]').click();
    cy.get("tbody").find("tr").should("have.length", 3);
  });

  it('should change "NO" to "YES" in the "completed" column', () => {
    cy.visit("http://localhost:3000");
    cy.get('[id="completed-2"]').click();
    cy.get('[id="row-2"]').contains("YES");
  });

  it("should not create a task if the input is empty", () => {
    cy.visit("http://localhost:3000");
    cy.get("form").submit();
    cy.get("tbody").find("tr").should("have.length", 4);
  });

  it("should show a message if input is not valid on submit", () => {
    cy.visit("http://localhost:3000");
    cy.get("form").submit();
    cy.get("body").contains("Invalid input");
  });

  it('should put a line through job text when item is "Completed"', () => {
    cy.visit("http://localhost:3000");
    cy.get('[id="completed-1"]').click();
    cy.get('[id="job-1"]').should("have.class", "line-through");
  });

  it('should see a message saying "add an item to do" if there are no todo list items', () => {
    cy.visit("http://localhost:3000");
    cy.get('[id="remove-0"]').click();
    cy.get('[id="remove-0"]').click();
    cy.get('[id="remove-0"]').click();
    cy.get('[id="remove-0"]').click();
    cy.get("body").contains("Add new task...");
  });

  it("should show a message when all todo items are completed", () => {
    cy.visit("http://localhost:3000");
    cy.get('[id="completed-0"]').click();
    cy.get('[id="completed-1"]').click();
    cy.get('[id="completed-2"]').click();
    cy.get("body").contains("I'm done");
  });

  it('should show a star to the left of the job title when "Priority" is clicked', () => {
    // functionality needed
  });

  it('should remove the star from item when "Completed" is clicked', () => {
    // functionality needed
  });

  it("should show priority tasks at the top of the list", () => {
    // functionality needed
  });

  it('should show link saying "unprioritized" is job is a priority', () => {
    // functionality needed
  });

  it('should remove the star and move todo item if "unprioritized" is clicked', () => {
    // functionality needed
  });
});
