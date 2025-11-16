import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutRLJIT from "./pages/about/AboutRLJIT";
import AboutFounder from "./pages/about/AboutFounder";
import AboutTrust from "./pages/about/AboutTrust";
import Admissions from "./pages/Admissions";
import CSE from "./pages/departments/CSE";
import Cybersecurity from "./pages/departments/Cybersecurity";
import DataScience from "./pages/departments/DataScience";
import AlliedSciences from "./pages/departments/AlliedSciences";
import AIML from "./pages/departments/AIML";
import MechanicalEngineering from "./pages/departments/MechanicalEngineering";
import MBA from "./pages/departments/MBA";
import MTech from "./pages/departments/MTech";
import AboutPrincipal from "./pages/about/AboutPrincipal";
import Library from "./pages/facilities/Library";
import Hostel from "./pages/facilities/Hostel";
import Transport from "./pages/facilities/Transport";
import Committees from "./pages/Committees";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about/rljit" element={<AboutRLJIT />} />
            <Route path="/about/founder" element={<AboutFounder />} />
            <Route path="/about/trust" element={<AboutTrust />} />
            <Route path="/about/principal" element={<AboutPrincipal />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/departments/cse" element={<CSE />} />
            <Route path="/departments/aiml" element={<AIML />} />
            <Route path="/departments/cys" element={<Cybersecurity />} />
            <Route path="/departments/ds" element={<DataScience />} />
            <Route path="/departments/me" element={<MechanicalEngineering />} />
            <Route path="/departments/mba" element={<MBA />} />
            <Route path="/departments/mtech" element={<MTech />} />
            <Route path="/departments/allied" element={<AlliedSciences />} />
            <Route path="/facilities/library" element={<Library />} />
            <Route path="/facilities/hostel" element={<Hostel />} />
            <Route path="/facilities/transport" element={<Transport />} />
            <Route path="/committees" element={<Committees />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
