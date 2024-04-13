import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, userEvent } from "../../utils/test.utils";
import InputSUI from "../InputSui";

const mockedHandleSerach = vi.fn();

describe("Input", async () => {
  it("should render the input with the placehlder of 'Search... '", () => {
    render(
      <InputSUI placeholder="Search..." handleSerach={mockedHandleSerach} />
    );
    const placeholder = screen.getByPlaceholderText("Search...");
    expect(placeholder).toBeInTheDocument();
  });
  it("should change input text on type event", () => {
    render(<InputSUI placeholder="Search..." handleSerach={() => {}} />);
    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText("Search...");
    fireEvent.change(inputElement, {
      target: {
        value: "changed text",
      },
    });
    expect(inputElement.value).toBe("changed text");
  });

  it("should reset text when search btn is clicked", async () => {
    render(<InputSUI placeholder="Search..." handleSerach={() => {}} />);
    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText("Search...");
    const btnElement = screen.getByTestId("btnTestElement");

    fireEvent.change(inputElement, {
      target: {
        value: "change text",
      },
    });
    fireEvent.click(btnElement);
    expect(inputElement.innerText).toBe(undefined);
  });
});
