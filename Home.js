import supabase from "./src/config/supabaseClient";

const Home = () => {

    console.log(supabase); // ✅ Check connection

    return (
        <div className="page home">
            <h2>Home</h2>
        </div>
    );
};

export default Home;
