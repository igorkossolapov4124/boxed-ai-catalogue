import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Landing from "./pages/Landing";
import Ideas from "./pages/Ideas";
import IdeaDetail from "./pages/IdeaDetail"; 
import CheckoutJson from "./pages/CheckoutJson";
import Integration from "./pages/Integration";
import Marketplace from "./pages/Marketplace";
import Niches from "./pages/Niches";
import NicheDetail from "./pages/NicheDetail";
import DepartmentAgents from "./pages/DepartmentAgents";
import AgentDetail from "./pages/AgentDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/idea/:slug" element={<IdeaDetail />} />
            <Route path="/checkout/json/:id" element={<CheckoutJson />} />
            <Route path="/integration" element={<Integration />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/niches" element={<Niches />} />
            <Route path="/niche/:nicheId" element={<NicheDetail />} />
            <Route path="/niche/:nicheId/department/:departmentId" element={<DepartmentAgents />} />
            <Route path="/agent/:id" element={<AgentDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
