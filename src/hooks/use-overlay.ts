import { useEffect } from "react";

interface Prop {
    onclick : () => void;
    isOverFlowHidden?: boolean
}

export function useOverlay({onclick , isOverFlowHidden = false } : Prop ) {
    
      useEffect(() => {
        const clickHandler = () => {
         onclick()
        };
    
        document.addEventListener("click", clickHandler);
    
        return () => {
          document.removeEventListener("click", clickHandler);
        };
      }, []);



      
        useEffect(() => {
          if (isOverFlowHidden) {
            document.body.style.overflowY = "hidden";
          } else {
            document.body.style.overflowY = "auto";
          }
      
          return () => {
            document.body.style.overflowY = "auto";
          };
        }, [isOverFlowHidden]);
      





    
}