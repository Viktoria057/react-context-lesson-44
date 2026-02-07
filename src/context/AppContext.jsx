import { createContext, useState } from "react"

export const AppContext = createContext({
  users: [],
  theme: "light",
  toggleTheme: () => {},
})

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const [users] = useState([
    { id: 1, name: "Alice", age: 22 },
    { id: 2, name: "Bob", age: 25 },
  ])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <AppContext.Provider value={{ users, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  )
}