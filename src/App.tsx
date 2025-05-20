import Router from "@/router";
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <Router />
    </ThemeProvider>
  )
}

export default App;
