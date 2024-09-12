import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import UserList from "./UserList";
import '@testing-library/jest-dom';

// import "@testing-library/jest-dom/extend-expect"; // For better assertion messages

// Mock the axios module to avoid making real API calls
jest.mock("axios");

describe("UserList Component", () => {
  test("displays loading text while fetching data", () => {
    axios.get.mockResolvedValueOnce({ data: [] }); // mock the API response
    render(<UserList />);

    const loadingElement = screen.getByText(/loading/i); // check for loading text
    expect(loadingElement).toBeInTheDocument();
  });

  test("displays users when data is fetched successfully", async () => {
    const mockUsers = [
      { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
      { id: 2, name: "Ervin Howell", email: "jShanna@melissa.tv" },
    ];

    axios.get.mockResolvedValueOnce({ data: mockUsers }); // Mock API success

    render(<UserList />);

    // Wait for users to be rendered
    await waitFor(() => {
      expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
      expect(screen.getByText("Sincere@april.biz")).toBeInTheDocument();
      expect(screen.getByText("Ervin Howell")).toBeInTheDocument();
      expect(screen.getByText("jShanna@melissa.tv")).toBeInTheDocument();
    });
  });

  test("displays error message when API request fails", async () => {
    axios.get.mockRejectedValueOnce(new Error("API Error")); // Mock API failure

    render(<UserList />);

    // Wait for error message to be rendered
    await waitFor(() => {
      const errorElement = screen.getByText(/failed to fetch users/i); // check for error text
      expect(errorElement).toBeInTheDocument();
    });
  });
});
