import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MoveRight, Send } from "lucide-react";
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
        <div className="flex gap-8 py-20 lg:py-20 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Citeste articolul de lansare <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Gestioneaza simplu</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
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

            <p className="text-lg md:text-xl leading-relaxed tracking-tight max-w-2xl text-center">
              Sa ai grija de o afacere in ziua de azi este deja greu. Evita complicatiile
              alegand o metoda simpla. 
              Scopul nostru este de a te ajuta sa iti prezinti afacerea si sa gestionezi serviciile eficient, la un pret accesibil.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center gap-2 w-[300px]">
              <div className="relative w-full">
                <Input
                  type="email"
                  placeholder="Anunta-ma cand e disponibil."
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
