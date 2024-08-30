import { render, screen } from "@testing-library/react";

import MainHeader from "../components/mainHeader";

describe("MainHeader", () => {
  it("should render correctly", () => {
    render(<MainHeader />);
    const title = screen.getByText("Pankys Todos"); 
    
    expect(title).toBeInTheDocument();
  })
})