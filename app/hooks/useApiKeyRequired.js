'use client'
import { useEffect,useState } from "react"

//hook permettant de récuper l'API KEY
export const useApiKeyRequired = () => {
  const [apiKey, setApiKey] = useState('')

  useEffect(() => {
    const storedKey = localStorage.getItem('omdbApiKey')
    if(storedKey){
      setApiKey(storedKey)
    }
    else{
      const userKey = prompt('Veuillez entrer votre clé API :')
      if(userKey){
        setApiKey(userKey)
        localStorage.setItem('omdbApiKey', userKey)
      }
    }
  }, [])
    
  return {apiKey}

}
