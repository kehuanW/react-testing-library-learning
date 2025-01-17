import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two input fields and a submit button", () => {
    // render the component
    render(<UserForm />);

    // Manipulate the component or find an element in it
    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");

    // Assert - make sure the component is doing what it should
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument()
});


test('it calls onUserAdd when the form is submitted', async () => {
    // NOT THE BEST IMPLEMENTATION
    const argList = [];
    const callback = (...args) => {
      argList.push(args);
    };
    // Try to render my component
    render(<UserForm onUserAdd={callback} />);
  
    // Find the two inputs
    const [nameInput, emailInput] = screen.getAllByRole('textbox');
  
    // Simulate typing in a name
    await user.click(nameInput);
    await user.keyboard('jane');
  
    // Simulate typing in an email
    await user.click(emailInput);
    await user.keyboard('jane@jane.com');
  
    // Find the button
    const button = screen.getByRole('button');
  
    // Simulate clicking the button
    await user.click(button);
  
    // Assertion to make sure 'onUserAdd' gets called with email/name
    expect(argList).toHaveLength(1);
    expect(argList[0][0]).toEqual({ name: 'jane', email: 'jane@jane.com' });
});  
