import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MainLayout from "@/components/MainLayout";
import GettingStarted from "@/pages/GettingStarted";
import FoundationConcepts from "@/pages/FoundationConcepts";
import EssentialCommands from "@/pages/EssentialCommands";
import NetworkingMastery from "@/pages/NetworkingMastery";
import OffensiveSecurity from "@/pages/OffensiveSecurity";
import DefensiveSecurity from "@/pages/DefensiveSecurity";
import PenetrationTesting from "@/pages/PenetrationTesting";
import LinuxMastery from "@/pages/LinuxMastery";
import PracticalLabs from "@/pages/PracticalLabs";
import Certifications from "@/pages/Certifications";
import FinalChallenges from "@/pages/FinalChallenges";
import YourJourney from "@/pages/YourJourney";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Index />} />
            <Route path="getting-started" element={<GettingStarted />} />
            <Route path="foundation" element={<FoundationConcepts />} />
            <Route path="commands" element={<EssentialCommands />} />
            <Route path="networking" element={<NetworkingMastery />} />
            <Route path="offensive-security" element={<OffensiveSecurity />} />
            <Route path="defensive-security" element={<DefensiveSecurity />} />
            <Route path="pentesting" element={<PenetrationTesting />} />
            <Route path="linux" element={<LinuxMastery />} />
            <Route path="labs" element={<PracticalLabs />} />
            <Route path="certifications" element={<Certifications />} />
            <Route path="challenges" element={<FinalChallenges />} />
            <Route path="journey" element={<YourJourney />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
