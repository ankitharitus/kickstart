import { render, screen, fireEvent } from "@testing-library/react";
import KickstarterTable from "./KickstarterTable";
import "@testing-library/jest-dom";

test("renders the table and paginates correctly", async () => {
  render(<KickstarterTable />);

  // Check if the table is rendered
  expect(screen.getByText("S.No.")).toBeInTheDocument();

  // Initially, check if "Prev" is disabled
  expect(screen.getByText("Prev")).toBeDisabled();

  // Simulate going to the next page
  fireEvent.click(screen.getByText("Next"));

  // Check if page number changes and "Prev" is now enabled
  expect(screen.getByText("Prev")).not.toBeDisabled();
  expect(screen.getByText("Page 2")).toBeInTheDocument();
});
