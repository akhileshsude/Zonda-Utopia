"use client";

import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const PAGANI_ASCII = `
                                       ..   ...                                         
                                     .......   ...                                      
                                   .................                                    
                                ......................                                  
                             ...........................                                
                          ................................                              
                        ....................................                            
                     .........................................                          
                   .............................................                        
                 .................................................                      
               .....................................................                    
             .........................................................                  
            ...........................................................                 
           .............................................................                
          ...............................................................               
         .................................................................              
        ...................................................................             
       .....................................................................            
      .......................................................................           
     .........................................................................          
    ...........................................................................         
   .............................................................................        
`;

export default function EasterEggs() {
    const [typedKeys, setTypedKeys] = useState("");

    useEffect(() => {
        // Console Art & Quote
        console.log(
            `%c${PAGANI_ASCII}`,
            "color: #CC0000; font-weight: bold; font-family: monospace;"
        );
        console.log(
            `%c"Art and Science are disciplines that can be combined with each other." - Leonardo da Vinci`,
            "color: #ededed; font-style: italic; font-size: 14px; background: #1a1a1a; padding: 10px; border-left: 4px solid #CC0000;"
        );

        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key.toUpperCase();
            setTypedKeys((prev) => {
                const newKeys = (prev + key).slice(-10); // Keep last 10 chars

                if (newKeys.includes("FANGIO")) {
                    toast(
                        "Juan Manuel Fangio: The inspiration behind the Zonda. A true legend.",
                        {
                            icon: "🏎️",
                            style: {
                                background: "#1a1a1a",
                                color: "#CC0000",
                                border: "1px solid #CC0000",
                            },
                            duration: 5000,
                        }
                    );
                    return ""; // Reset
                }

                if (newKeys.includes("HORACIO")) {
                    toast(
                        "Every Pagani is a vision of Horacio Pagani, blending art and science.",
                        {
                            icon: "🖌️",
                            style: {
                                background: "#1a1a1a",
                                color: "#CC0000",
                                border: "1px solid #CC0000",
                            },
                            duration: 5000,
                        }
                    );
                    return ""; // Reset
                }

                return newKeys;
            });
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <Toaster
            position="bottom-right"
            toastOptions={{
                className: "font-serif text-sm",
                style: {
                    background: "#1a1a1a",
                    color: "#ededed",
                }
            }}
        />
    );
}
