import { useState } from "react"
import supabase from "../config/supabaseClient"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useAuth } from "../AuthContext";
import { FiEye, FiEyeOff } from "react-icons/fi";




function Register(){
    const { login } = useAuth();
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);


    const [error, setError] = useState(null)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async (e) =>{
        e.preventDefault()

        if(!username || !email || !password){
            setError('Please fill the username, email,  and password correctly')
            return
        }

        const {data, error} = await supabase
        .from("tb_user")
        .insert([{ username, email, password}])
        .select()

        if(error){
            console.log(error)
            setError("Please fill the username, email,  and password correctly")
        }
        if(data){
            console.log(data)
            setError(null)
            login(data[0]);
            navigate('/Register')
        }
    }

        

    return(
        <>
        <section className="pt-20 md:h-[900px]">
            <form onSubmit={handleRegister} className="bg-white border border-gray-300 p-8 max-w-md mx-auto rounded-xl shadow-md space-y-4 mt-30">
                <h2 className="text-center text-2xl font-semibold md:pb-4">Register</h2>
            
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
            
            <div>
                <label htmlFor="email"className="block text-sm font-medium text-gray-800 mb-1">Email</label>
                <input 
                type="email"
                id="email"
                className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            className="w-full bg-black text-white rounded-full py-2 text-center hover:bg-gray-600 transition">Register</button>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <p className="text-sm text-gray-700 text-center bg-center">Sudah memiliki akun? <span> <Link to="/Login">Login</Link> </span>   </p>
            </form>
        </section>
        </>
    )
}

export default Register;