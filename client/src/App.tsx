import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Solutions from "@/pages/solutions";
import Services from "@/pages/services";
import About from "@/pages/about";
import Insights from "@/pages/insights";
import Contact from "@/pages/contact";
import ContractManagement from "@/pages/services/contract-management";
import ClaimsMonitoring from "@/pages/services/claims-monitoring";
import CostContainmentAnalytics from "@/pages/services/cost-containment-analytics";
import MarketChecks from "@/pages/services/market-checks";
import Reconciliation from "@/pages/services/reconciliation";
import EnhancedReporting from "@/pages/services/enhanced-reporting";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/services" component={Services} />
      <Route path="/services/contract-management" component={ContractManagement} />
      <Route path="/services/claims-monitoring" component={ClaimsMonitoring} />
      <Route path="/services/cost-containment-analytics" component={CostContainmentAnalytics} />
      <Route path="/services/market-checks" component={MarketChecks} />
      <Route path="/services/reconciliation" component={Reconciliation} />
      <Route path="/services/enhanced-reporting" component={EnhancedReporting} />
      <Route path="/about" component={About} />
      <Route path="/insights" component={Insights} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
