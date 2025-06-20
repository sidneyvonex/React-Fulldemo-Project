import { Link } from "react-router";
import { Footer } from "../Components/Footer";
import {Navbar} from "../Components/Navbar";
import loginImg from "../../src/assets/register.svg";
import { useForm } from "react-hook-form"
import { Toaster, toast } from "sonner";
import { useNavigate } from 'react-router-dom';
import { userApi } from "../Features/api/userApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../Features/auth/authSlice";
import { FaSignInAlt } from "react-icons/fa";

type UserLoginFormInputs = {
  email: string;
  password: string;
}
export const Login = () => {
     const navigate = useNavigate();
     const dispatch = useDispatch();
     
     const { register, handleSubmit, formState: { errors } } = useForm<UserLoginFormInputs>();
     const [loginUser,{isLoading}] = userApi.useLoginUserMutation()

     const onSubmit = async (data: UserLoginFormInputs) => {
    const loadingToastId = toast.loading("Logging in Account...");
    // console.log(data)
    try {
      const res = await loginUser(data).unwrap()
      console.log(res)
        dispatch(setCredentials(res)) //rom auth slice 
        toast.success(res?.message, { id: loadingToastId })
        navigate("/dashboard/profile")
    } catch (err: any) {
      const errorMessage =
        err?.data?.message ||
        err?.error ||
        err?.message ||
        JSON.stringify(err); 
    
      toast.error('Failed to Login: ' + errorMessage);
      toast.dismiss(loadingToastId);
    }

  }

    return (
        <>
         <Toaster
        richColors
        position="top-right"
      />
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 flex items-center justify-center py-10">
                <div className="grid sm:grid-cols-2 gap-10 bg-white rounded-3xl  overflow-hidden w-full max-w-5xl">
                    {/* Image Section */}
                    <div className="hidden sm:flex items-center justify-center bg-gradient-to-tr from-blue-200 via-pink-100 to-white">
                        <img src={loginImg} alt="Register" width={400} className="rounded-2xl s" />
                    </div>
                    {/* Form Section */}
                    <div className="flex items-center justify-center p-8">
                        <form className="w-full max-w-md space-y-6 bg-white rounded-2xl  p-8" onSubmit={handleSubmit(onSubmit)}>
                            <div className="text-center mb-6">
                                <div className="text-4xl font-bold text-orange-600 mb-2">Login</div>
                                <p className="text-gray-500">Welcome Back</p>
                            </div>

                            <label className="block">
                                <span className="text-gray-700">Email</span>
                                <input type="email" 
                                className="input input-bordered  
                                border-2 w-full mt-1" 
                                placeholder="Email" 
                                {...register("email", { required: true })}
                                />
                            </label>
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            <label className="block">
                                <span className="text-gray-700">Password</span>
                                <input type="password" 
                                className="input input-bordered border-2 w-full mt-1" 
                                placeholder="Password" 
                                {...register("password", { required: true })}
                                />
                            </label>
                            {errors.password && <span className="text-red-600">Password is required</span>}
                            <button type="submit" className="btn btn-info btn-circle btn-block mt-4 shadow-md hover:scale-105 transition-transform">
                                {isLoading ? <span className="loading loading-spinner text-blue-500 disabled"></span> : <FaSignInAlt />}
                                Login
                            </button>
                            <Link to="#" className="text-green-500 hover:underline ">
                                <span role="img" aria-label="home"></span> Forgot password?
                            </Link>
                            <div className="flex  text-center mt-4">
                                <Link to="/" className="text-blue-500 hover:underline flex items-center justify-center gap-1 mr-10">
                                    <span role="img" aria-label="home">🏡</span> Go to HomePage
                                </Link>
                                <Link to="/register" className="text-yellow-500 hover:underline flex items-center justify-center gap-1">
                                    <span role="img" aria-label="home"></span> Need An Account?
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}