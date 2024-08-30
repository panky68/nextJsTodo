import { render, screen } from "@testing-library/react";

import TodoItem from "../components/todoItem";

describe("TodoItem", () => {
  it("should render correctly", () => {
    render(<TodoItem />);
    const title = screen.getByText("Todo"); 
    
    expect(title).toBeInTheDocument();
  })
})