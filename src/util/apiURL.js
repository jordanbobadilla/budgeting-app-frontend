export const apiURL = () => {
    if (
      process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "test"
    ) {
      return "http://localhost:8000";
    }
    return "https://budgeting-app-backend.herokuapp.com";
  };