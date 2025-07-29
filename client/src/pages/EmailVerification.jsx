import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { handleApiError } from '../utils/handleApiError';
import { Axios } from '../utils/axios';
import { summaryApi } from '../common/summaryApi';
import toast from 'react-hot-toast';
import Spinner from '../utils/Spinner';

const EmailVerification = () => {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    const [loading, setLoading] = React.useState(false);

    const emailVerify = async() => {
        try {
            setLoading(true)
            const response = await Axios({
                ...summaryApi.verifyEmail,
                data: {
                    code
                }
            })

            if (response.data.success) {
                toast.success(response.data.message);
            }
            
        } catch (error) {
            handleApiError(error)
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
        emailVerify()
    }, [code])

    
    if(loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold text-green-400 flex items-center space-x-3"><span>Verifying...</span> <Spinner /></h1>
                    <p className="text-lg">Please wait while we verify your email.</p>
                    <p className="text-sm text-gray-400">Verification by <span className="font-semibold text-orange-400">Zeeshan Ali Anjam</span></p>
                </div>
            </div>
        )
    }

  return (
     <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-green-400">Email Verified Successfully!</h1>
        <p className="text-lg">Dear User, your email has been verified.</p>
        <p className="text-lg">Congrats 🎉</p>
        <p className="text-sm text-gray-400">Verification by <span className="font-semibold text-orange-400">Zeeshan Ali Anjam</span></p>

        <div className="mt-4">
          <p className="text-xs text-gray-500">Verification Code:</p>
          <p className="text-xs text-gray-300">{code}</p>
        </div>

         <Link
          to="/login"
          className="inline-block mt-6 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow transition duration-300"
        >
          Go to Login
        </Link>
       
      </div>
    </div>
  )
}

export default EmailVerification