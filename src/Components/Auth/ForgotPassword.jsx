/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { 
  Mail, 
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  RotateCcw,
  Send,
  Clock,
  Shield
} from 'lucide-react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';


// Validation Schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required')
});

// Error Message Component
const CustomErrorMessage = ({ children }) => (
  <div className="text-primary-bg0 text-sm mt-1 flex items-center">
    <AlertCircle className="h-4 w-4 mr-1" />
    {children}
  </div>
);

const ForgotPasswordPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(" ");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const initialValues = {
    email: ''
  };

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful password reset request
      console.log('Password reset requested for:', values.email);
      setSubmitStatus('success');
      setIsEmailSent(true);
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Password reset error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendEmail = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate resend API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('resent');
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsEmailSent(false);
    setSubmitStatus(null);
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r bg-white shadow-lg border-b border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
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
              <p className="text-primary text-sm">Password Recovery</p>
              <p className="text-primary-fav font-semibold">Reset Your Account Access</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          {/* Back to Login Link */}
          <div className="mb-6">
            <a 
              href="/login" 
              className="inline-flex items-center text-primary hover:text-primary-six font-medium transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Login
            </a>
          </div>

          {/* Forgot Password Form */}
          <div className="bg-primary-bg rounded-lg shadow-2xl border border-primary">
            <div className="border-b border-primary bg-primary p-6">
              <div className="flex items-center space-x-3">
                <div className="bg-white rounded-full p-2 shadow-md">
                  <img className='w-12 h-10 '
                      src={assets.MiniLogo}  
                      alt="Logo"
                  />
                </div>
                <div className=''>
                  <h2 className="text-xl font-bold text-primary-fav">
                    {isEmailSent ? 'Check Your Email' : 'Forgot Password?'}
                  </h2>
                  <p className="text-white text-sm mt-1">
                    {isEmailSent 
                      ? 'We\'ve sent you reset instructions' 
                      : 'No worries, we\'ll help you reset it'
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {!isEmailSent ? (
                // Password Reset Request Form
                <>
                  <div className="text-center mb-6">
                    <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <RotateCcw className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-primary text-sm leading-relaxed">
                      Enter your email address and we'll send you a link to reset your password.
                    </p>
                  </div>

                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting: formikSubmitting, touched, errors, handleSubmit: formikHandleSubmit }) => (
                      <form onSubmit={formikHandleSubmit} className="space-y-6">
                        {/* Email */}
                        <div>
                          <label className="block text-sm font-medium text-primary mb-2">
                            <Mail className="h-4 w-4 inline mr-2 text-primary" />
                            Email Address
                          </label>
                          <Field
                            type="email"
                            name="email"
                            className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary-sec focus:border-transparent transition-all duration-200 bg-white ${
                              touched.email && errors.email 
                                ? 'border-red-300 bg-red-500' 
                                : 'border-primary hover:border-red-400'
                            }`}
                            placeholder="Enter your email address"
                          />
                          <ErrorMessage name="email" component={CustomErrorMessage} />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                          <button
                            type="submit"
                            disabled={formikSubmitting || isSubmitting}
                            className={`w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md text-sm font-bold text-primary-bg transition-all duration-200 ${
                              formikSubmitting || isSubmitting
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-primary hover:bg-primary-sec focus:ring-2 focus:ring-red-900 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105'
                            }`}
                          >
                            {formikSubmitting || isSubmitting ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-900 mr-2"></div>
                                Sending reset link...
                              </>
                            ) : (
                              <>
                                <Send className="mr-2 h-4 w-4" />
                                Send Reset Link
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </button>
                        </div>

                        {/* Status Messages */}
                        {submitStatus === 'error' && (
                          <div className="bg-primary-bg border border-red-200 rounded-md p-4 flex items-center space-x-3">
                            <AlertCircle className="h-5 w-5 text-red-600" />
                            <span className="text-primary font-medium">Failed to send reset email. Please try again.</span>
                          </div>
                        )}
                      </form>
                    )}
                  </Formik>
                </>
              ) : (
                // Email Sent Confirmation
                <div className="text-center space-y-6">
                  <div className="bg-primary-bg rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-primary">Email Sent Successfully!</h3>
                    <p className="text-red-700 text-sm leading-relaxed">
                      We've sent a password reset link to your email address. 
                      Click the link in the email to create a new password.
                    </p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div className="text-left">
                        <p className="text-yellow-800 font-medium text-sm">Important:</p>
                        <p className="text-yellow-700 text-sm mt-1">
                          The reset link will expire in 15 minutes for security reasons.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={handleResendEmail}
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center px-4 py-2 border border-red-300 rounded-md text-sm font-medium text-primary bg-white transition-all duration-200 ${
                        isSubmitting 
                          ? 'cursor-not-allowed opacity-50' 
                          : 'hover:bg-primary-bg hover:border-red-400'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600 mr-2"></div>
                          Resending...
                        </>
                      ) : (
                        <>
                          <RotateCcw className="mr-2 h-4 w-4" />
                          Resend Email
                        </>
                      )}
                    </button>

                    <button
                      onClick={resetForm}
                      className="w-full text-sm text-red-600 hover:text-primary font-medium underline"
                    >
                      Try a different email address
                    </button>
                  </div>

                  {submitStatus === 'resent' && (
                    <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-green-800 font-medium">Reset email sent again!</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Login Link */}
          <div className="text-center mt-6">
            <div className="bg-primary rounded-lg p-4 shadow-lg">
              <p className="text-primary-bg text-sm">
                Remember your password?{' '}
                <a href="/login" className="text-primary-fav hover:text-yellow-200 cursor-pointer font-bold underline">
                  Back to Login
                </a>
              </p>
            </div>
          </div>

          {/* Security Information */}
          <div className="mt-8 bg-primary-bg rounded-lg p-4 border border-red-200">
            <div className="flex items-center space-x-3 mb-3">
              <Shield className="h-5 w-5 text-primary" />
              <h3 className="text-primary font-semibold">Security & Privacy</h3>
            </div>
            <div className="space-y-2 text-sm text-red-700">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>All password resets are encrypted and secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Reset links expire automatically for your safety</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Your email and data remain completely private</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;