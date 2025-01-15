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
