import { useEffect, useState } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({});
  const URL = "https://geek-jokes.sameerkumar.website/api?format=json";

  const getnewJoke = async () => {
    let response = await fetch(URL);
    let jsonresponse = await response.json();
    console.log(jsonresponse);
    setJoke({ joke: jsonresponse.joke });
  };


  ///setJoke({setup:jsonresponse.setup ,punchline:jsonresponse.punchline}) 
  // --> ye format according setups change honge 

  useEffect(() => {
    async function getfirstjoke() {
      let response = await fetch(URL);
      let jsonresponse = await response.json();
      console.log(jsonresponse);
      setJoke({ joke: jsonresponse.joke });
    }
    getfirstjoke();  //--> this function is used to intialize the component with
    // the needed values that has to displayed on the click on the button
  }, []);

  return (
    <div>
      <h3>Joker!</h3>
      <h2>{joke.joke}</h2>
      <button onClick={getnewJoke}>New Joke</button>
    </div>
  );
}