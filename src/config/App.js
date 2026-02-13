import { useEffect } from "react";
import supabase from "./config/supabaseClient";

function App() {
  useEffect(() => {
    const checkSupabase = async () => {
      const { data, error } = await supabase.from("your_table_name").select("*").limit(1);
      if (error) {
        console.log("Supabase error:", error);
      } else {
        console.log("Supabase connected! Sample data:", data);
      }
    };

    checkSupabase();
  }, []);

  return (
    <div>
      <h1>Bullying Report App</h1>
      <p>Open console to see if Supabase is connected</p>
    </div>
  );
}

export default App;
