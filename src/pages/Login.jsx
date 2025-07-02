import { useState } from "react"
import supabase from "../config/supabaseClient"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useAuth } from "../AuthContext";
import { FiEye, FiEyeOff } from "react-icons/fi";


function Login(){
    const { login } = useAuth();
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);


    const [error, setError] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) =>{
        e.preventDefault()

        if(!username || !password){
            setError('Please fill the username and password correctly')
            return
        }

        const{data, error} = await supabase
        .from("tb_user")
        .select("*")
        .eq("username", username)
        .eq("password" , password)
        .single();

        if(error){
         console.log(error)
         setError("Username or password are incorrect")   
        }
        if(data){
            console.log(data)
            navigate('/')
            setError(null)
            login(data);
        }
        

    }
    

    return(
        <>
        <section className="pt-20">
        <form 
        onSubmit={handleLogin}
        className="bg-gray-200 p-8 max-w-md mx-auto rounded-xl shadow-md space-y-4 mt-30">
            <h2 className="text-2xl font-semibold text-center">Login</h2>
            <p className="text-center text-gray-700 mb-4 text-sm">Masuk untuk menggunakan jasa kami</p>
            
            <div>
                <label htmlFor="username"className="block text-sm font-medium text-gray-800 mb-1">Username</label>
                <input 
                type="text"
                id="username"
                className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            

            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-800 mb-1">
                    Password
                </label>

                <div className="relative">
                    <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full border border-gray-400 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                    >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                </div>
                </div>


            <button 
            type="submit"
            className="w-full bg-black text-white rounded-full py-2 text-center hover:bg-gray-600 transition">Login</button>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}


            <p className="text-sm text-gray-700 text bg-center">Belum memiliki akun? <span> <Link to="/Register">Register</Link> </span>   </p>
        </form>
        </section>
        </>
    )
}

export default Login