import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "./input";

function Hero() {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl tracking-tight font-medium text-gray-900">
              <span>Gestionează afacerea</span>
              <br />
              <span className="text-gray-800">mai simplu ca niciodată</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Indiferent de afacerea pe care o ai, platforma noastră îți va ușura munca ție și angajaților.
            </p>

            <div className="flex items-center justify-center w-full max-w-md mt-4">
              <div className="flex flex-col md:flex-row items-center gap-2 w-full">
                <div className="relative w-full">
                  <Input
                    type="email"
                    placeholder="Anunță-mă când devine disponibil"
                    className="pl-9 py-2 text-sm"
                  />
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors focus-within:text-blue-500"
                    size={18}
                  />
                </div>
                <Button size="default" className="w-full md:w-auto px-6">
                  <Send className="w-4 h-4 mr-2" />
                  Trimite
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
