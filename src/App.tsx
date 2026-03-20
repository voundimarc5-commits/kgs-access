import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductF7 from "./pages/ProductF7";
import ProductF18 from "./pages/ProductF18";
import OfferEntry from "./pages/OfferEntry";
import OfferRemote from "./pages/OfferRemote";
import OfferOS from "./pages/OfferOS";
import Solutions from "./pages/Solutions";
import Compliance from "./pages/Compliance";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LegalNotice from "./pages/LegalNotice";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Configure from "./pages/Configure";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/f7" element={<ProductF7 />} />
              <Route path="/products/f18" element={<ProductF18 />} />
              <Route path="/offers/entry" element={<OfferEntry />} />
              <Route path="/offers/remote" element={<OfferRemote />} />
              <Route path="/offers/os" element={<OfferOS />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/legal" element={<LegalNotice />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
