export default function Signup({ setUser }){
    return (
        <section style={{ background: "#00ff0030" }}> 
            <h1>Sign up</h1>
            <button onClick={() => setUser("Successful Login")}>Login</button>
        </section>
    )
}