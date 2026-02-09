import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SecretsProvider } from "@/context/SecretsContext";
import { AchievementNotifications } from "@/components/AchievementBadge";
import Index from "./pages/Index";
import OurStory from "./pages/OurStory";
import Valentine from "./pages/Valentine";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SecretsProvider>
        <Toaster />
        <Sonner />
        <AchievementNotifications />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/valentine" element={<Valentine />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SecretsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
