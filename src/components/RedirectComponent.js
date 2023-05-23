import { useEffect } from "react";


export default function RedirectComponent({ to }) {
    
    useEffect(() => {
      window.open(to, '_blank');
    }, [])
    
    return null;
}