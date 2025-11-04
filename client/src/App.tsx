import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Bank from "./pages/Bank";
import Health from "./pages/Health";
import Car from "./pages/Car";
import MutationTesting from "./pages/MutationTesting";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/home2"} component={Home2} />
      <Route path={"/home3"} component={Home3} />
      <Route path={"/mutation-testing"} component={MutationTesting} />
      <Route path={"/bank"} component={Bank} />
      <Route path={"/health"} component={Health} />
      <Route path={"/car"} component={Car} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
