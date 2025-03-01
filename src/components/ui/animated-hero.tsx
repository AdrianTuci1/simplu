import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "./input";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["clinica dentara", "sala de fitness", "salonul", "hotelul", "restaurantul"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-24 lg:py-10 items-start justify-start flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-left font-regular">
              <span className="text-spektr-cyan-50">Gestioneaza</span>
              <span className="relative flex w-full justify-start overflow-hidden text-center md:pb-1 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-lg leading-relaxed tracking-tight max-w-xl text-left">
              Sa ai grija de afacerea ta nu trebuie sa fie complicat. Toate functiile de care ai nevoie intr-un
              singur loc.
            </p>
          </div>
          <div className="flex items-center justify-start">
            <div className="flex flex-col md:flex-row items-center gap-2 w-[340px]">
              <div className="relative w-full">
                <Input
                  type="email"
                  placeholder="Anunta-ma cand devine disponibil."
                  className="pl-9 py-2 text-sm"
                />
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors focus-within:text-blue-500"
                  size={18}
                />
              </div>
              <Button size="sm" className="w-full md:w-auto px-4 flex items-center gap-2">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
