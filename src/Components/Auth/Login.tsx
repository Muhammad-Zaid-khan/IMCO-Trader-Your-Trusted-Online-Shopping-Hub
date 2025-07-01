import React, { useState } from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  CheckCircle,
  AlertCircle,
  ArrowRight,
  TrendingUp,
  UserCheck
} from 'lucide-react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

// Validation Schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  rememberMe: Yup.boolean()
});

// Error Message Component
const CustomErrorMessage = ({ children }: { children?: React.ReactNode }) => (
  <div className="text-red-500 text-sm mt-1 flex items-center">
    <AlertCircle className="h-4 w-4 mr-1" />
    {children}
  </div>
);

// Google Icon Component
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
    rememberMe: false
  };

  const handleSubmit = async (values: typeof initialValues) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful login
      console.log('Login data:', values);
      setSubmitStatus('success');
      
      // Navigate to dashboard after successful login
      setTimeout(() => {
        navigate('/dashboard'); // Change this to your dashboard route
      }, 1500);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Login error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    setSubmitStatus(null);

    try {
      // Simulate Google OAuth flow
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful Google login
      console.log('Google sign-in initiated');
      setSubmitStatus('success');
      
      // Navigate to dashboard after successful Google login
      setTimeout(() => {
        navigate('/dashboard'); // Change this to your dashboard route
      }, 1500);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Google sign-in error:', error);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleLogoClick = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r bg-white shadow-lg border-b border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4 cursor-pointer" onClick={handleLogoClick}>
              {/* Logo */}
              <div className="bg-white rounded-full p-2 shadow-md">
                <img className='w-12 h-10'
                  src={assets.MiniLogo}
                  alt="Logo" 
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">IMCO <span className='text-primary-six'>Trader</span> </h1>
                <p className="text-primary-sec text-sm">Professional Happy Shopping Platform</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-primary text-sm">Member Login</p>
              <p className="text-primary-six font-semibold">Welcome Back to Happy Shopping</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          {/* Login Form */}
          <div className="bg-primary-bg rounded-lg shadow-2xl border border-primary">
            <div className="border-b border-primary bg-primary p-6">
              <div className="flex items-center space-x-3">
                <div className="bg-white rounded-full p-2 shadow-md">
                  <img className='w-12 h-10 '
                      src={assets.MiniLogo}  
                      alt=" Logo "
                  />
                </div>
                <div className=''>
                  <h2 className="text-xl font-bold text-primary-fav">Welcome Back Trader</h2>
                  <p className="text-white text-sm mt-1">Sign in to continue your Happy Shopping journey</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Google Sign In Button */}
              <div className="mb-6">
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={isGoogleLoading}
                  className={`w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all duration-200 shadow-sm ${
                    isGoogleLoading ? 'cursor-not-allowed opacity-50' : 'hover:shadow-md'
                  }`}
                >
                  {isGoogleLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-600 mr-3"></div>
                      Connecting to Google...
                    </>
                  ) : (
                    <>
                      <GoogleIcon />
                      <span className="ml-3">Sign in with Google</span>
                    </>
                  )}
                </button>
                
                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-amber-50 text-gray-500">Or sign in with email</span>
                  </div>
                </div>
              </div>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting: formikSubmitting, touched, errors, values }) => (
                  <Form className="space-y-6">
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        <Mail className="h-4 w-4 inline mr-2 text-primary" />
                        Email Address
                      </label>
                      <Field
                        type="email"
                        name="email"
                        className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 bg-white ${
                          touched.email && errors.email 
                            ? 'border-red-300 bg-red-50' 
                            : 'border-primary hover:border-amber-400'
                        }`}
                        placeholder="Enter your email address"
                      />
                      <ErrorMessage name="email" component={CustomErrorMessage} />
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        <Lock className="h-4 w-4 inline mr-2 text-primary" />
                        Password
                      </label>
                      <div className="relative">
                        <Field
                          type={showPassword ? "text" : "password"}
                          name="password"
                          className={`w-full px-3 py-2 pr-10 border rounded-md focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 bg-white ${
                            touched.password && errors.password 
                              ? 'border-red-300 bg-red-50' 
                              : 'border-primary hover:border-amber-400'
                          }`}
                          placeholder="Enter your password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                      <ErrorMessage name="password" component={CustomErrorMessage} />
                    </div>

                    {/* Remember Me and Forgot Password */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Field
                          type="checkbox"
                          name="rememberMe"
                          className="h-4 w-4 text-primary focus:ring-amber-500 border-primary rounded bg-white"
                        />
                        <label className="text-sm text-primary">
                          Remember me
                        </label>
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={handleForgotPassword}
                          className="text-sm text-primary cursor-pointer hover:text-primary-six font-medium underline"
                        >
                          Forgot your password?
                        </button>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={formikSubmitting || isSubmitting}
                        className={`w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md text-sm font-bold text-amber-50 transition-all duration-200 ${
                          formikSubmitting || isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-primary hover:bg-primary focus:ring-2 focus:ring-amber-800 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105'
                        }`}
                      >
                        {formikSubmitting || isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-amber-900 mr-2"></div>
                            Signing you in...
                          </>
                        ) : (
                          <>
                            <UserCheck className="mr-2 h-4 w-4" />
                            Sign In to IMCO Trader
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-green-800 font-medium">Welcome back! Redirecting to dashboard...</span>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-center space-x-3">
                        <AlertCircle className="h-5 w-5 text-red-600" />
                        <span className="text-red-800 font-medium">Invalid email or password. Please try again.</span>
                      </div>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          </div>

          {/* Register Link */}
          <div className="text-center mt-6">
            <div className="bg-primary rounded-lg p-4 shadow-lg">
              <p className="text-amber-50 text-sm">
                Don't have a trading account yet?{' '}
                <button 
                  onClick={handleRegister}
                  className="text-primary-fav hover:text-primary-six cursor-pointer font-bold underline"
                >
                  Create IMCO Trader Account
                </button>
              </p>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-8 bg-amber-50 rounded-lg p-4 border border-amber-200">
            <div className="flex items-center space-x-3 mb-3">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="text-primary font-semibold">Why Choose IMCO Trader?</h3>
            </div>
            <div className="space-y-2 text-sm text-primary-six">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Secure and encrypted transactions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>24/7 customer support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Professional trading platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;