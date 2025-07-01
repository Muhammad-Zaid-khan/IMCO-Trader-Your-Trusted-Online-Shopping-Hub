/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { 
  Lock, 
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Eye,
  EyeOff,
  Shield,
  Key,
  UserCheck
} from 'lucide-react';
import { assets } from '../../assets/assets';
// import { useNavigate } from 'react-router-dom';

// Validation Schema
const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Please confirm your password')
});

// Error Message Component
const CustomErrorMessage = (errorMessage: string) => (
  <div className="text-primary-bg0 text-sm mt-1 flex items-center">
    <AlertCircle className="h-4 w-4 mr-1" />
    {errorMessage}
  </div>
);

// Password Strength Indicator
const PasswordStrength = ({ password }) => {
  const getStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/\d/.test(pwd)) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) score++;
    return score;
  };

  const strength = getStrength(password);
  const getStrengthText = () => {
    if (strength === 0) return { text: '', color: '' };
    if (strength <= 2) return { text: 'Weak', color: 'text-red-600' };
    if (strength <= 3) return { text: 'Fair', color: 'text-yellow-600' };
    if (strength <= 4) return { text: 'Good', color: 'text-blue-600' };
    return { text: 'Strong', color: 'text-green-600' };
  };

  const strengthInfo = getStrengthText();

  if (!password) return null;

  return (
    <div className="mt-2">
      <div className="flex items-center space-x-2">
        <div className="flex-1 bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              strength <= 2 ? 'bg-red-500' : 
              strength <= 3 ? 'bg-yellow-500' : 
              strength <= 4 ? 'bg-blue-500' : 'bg-green-500'
            }`}
            style={{ width: `${(strength / 5) * 100}%` }}
          />
        </div>
        <span className={`text-sm font-medium ${strengthInfo.color}`}>
          {strengthInfo.text}
        </span>
      </div>
    </div>
  );
};

const ResetPasswordPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const initialValues = {
    password: '',
    confirmPassword: ''
  };

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful password reset
      console.log('Password reset successful');
      setSubmitStatus('success');
      setIsPasswordReset(true);
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Password reset error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // const navigate = useNavigate();

  const handleLoginRedirect = () => {
    // navigate('/login');
    window.location.href = '/login';
  };

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
              <p className="text-primary text-sm">Password Reset</p>
              <p className="text-primary-fav font-semibold">Create New Password</p>
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

          {/* Reset Password Form */}
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
                    {isPasswordReset ? 'Password Reset Successful!' : 'Reset Your Password'}
                  </h2>
                  <p className="text-white text-sm mt-1">
                    {isPasswordReset 
                      ? 'Your password has been updated successfully' 
                      : 'Create a strong new password for your account'
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {!isPasswordReset ? (
                // Password Reset Form
                <>
                  <div className="text-center mb-6">
                    <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Key className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-primary text-sm leading-relaxed">
                      Please enter your new password below. Make sure it's strong and secure.
                    </p>
                  </div>

                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting: formikSubmitting, touched, errors, values, handleSubmit: formikHandleSubmit }) => (
                      <Form className="space-y-6">
                        {/* New Password */}
                        <div>
                          <label className="block text-sm font-medium text-primary mb-2">
                            <Lock className="h-4 w-4 inline mr-2 text-primary" />
                            New Password
                          </label>
                          <div className="relative">
                            <Field
                              type={showPassword ? "text" : "password"}
                              name="password"
                              className={`w-full px-3 py-2 pr-10 border rounded-md focus:ring-2 focus:ring-primary-sec focus:border-transparent transition-all duration-200 bg-white ${
                                touched.password && errors.password 
                                  ? 'border-red-300 bg-red-500' 
                                  : 'border-primary hover:border-red-400'
                              }`}
                              placeholder="Enter your new password"
                            />
                            <button
                              type="button"
                              className="absolute inset-y-0 right-0 pr-3 flex items-center"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4 text-gray-400 hover:text-primary" />
                              ) : (
                                <Eye className="h-4 w-4 text-gray-400 hover:text-primary" />
                              )}
                            </button>
                          </div>
                          <ErrorMessage name="password" render={CustomErrorMessage} />
                          <PasswordStrength password={values.password} />
                        </div>

                        {/* Confirm Password */}
                        <div>
                          <label className="block text-sm font-medium text-primary mb-2">
                            <Shield className="h-4 w-4 inline mr-2 text-primary" />
                            Confirm New Password
                          </label>
                          <div className="relative">
                            <Field
                              type={showConfirmPassword ? "text" : "password"}
                              name="confirmPassword"
                              className={`w-full px-3 py-2 pr-10 border rounded-md focus:ring-2 focus:ring-primary-sec focus:border-transparent transition-all duration-200 bg-white ${
                                touched.confirmPassword && errors.confirmPassword 
                                  ? 'border-red-300 bg-red-500' 
                                  : 'border-primary hover:border-red-400'
                              }`}
                              placeholder="Confirm your new password"
                            />
                            <button
                              type="button"
                              className="absolute inset-y-0 right-0 pr-3 flex items-center"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="h-4 w-4 text-gray-400 hover:text-primary" />
                              ) : (
                                <Eye className="h-4 w-4 text-gray-400 hover:text-primary" />
                              )}
                            </button>
                          </div>
                          <ErrorMessage name="confirmPassword" render={CustomErrorMessage} />
                        </div>

                        {/* Password Requirements */}
                        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                          <h4 className="text-blue-800 font-medium text-sm mb-2">Password Requirements:</h4>
                          <div className="space-y-1 text-xs text-blue-700">
                            <div className={`flex items-center space-x-2 ${values.password.length >= 8 ? 'text-green-600' : ''}`}>
                              <CheckCircle className={`h-3 w-3 ${values.password.length >= 8 ? 'text-green-600' : 'text-gray-400'}`} />
                              <span>At least 8 characters</span>
                            </div>
                            <div className={`flex items-center space-x-2 ${/[a-z]/.test(values.password) ? 'text-green-600' : ''}`}>
                              <CheckCircle className={`h-3 w-3 ${/[a-z]/.test(values.password) ? 'text-green-600' : 'text-gray-400'}`} />
                              <span>One lowercase letter</span>
                            </div>
                            <div className={`flex items-center space-x-2 ${/[A-Z]/.test(values.password) ? 'text-green-600' : ''}`}>
                              <CheckCircle className={`h-3 w-3 ${/[A-Z]/.test(values.password) ? 'text-green-600' : 'text-gray-400'}`} />
                              <span>One uppercase letter</span>
                            </div>
                            <div className={`flex items-center space-x-2 ${/\d/.test(values.password) ? 'text-green-600' : ''}`}>
                              <CheckCircle className={`h-3 w-3 ${/\d/.test(values.password) ? 'text-green-600' : 'text-gray-400'}`} />
                              <span>One number</span>
                            </div>
                            <div className={`flex items-center space-x-2 ${/[!@#$%^&*(),.?":{}|<>]/.test(values.password) ? 'text-green-600' : ''}`}>
                              <CheckCircle className={`h-3 w-3 ${/[!@#$%^&*(),.?":{}|<>]/.test(values.password) ? 'text-green-600' : 'text-gray-400'}`} />
                              <span>One special character</span>
                            </div>
                          </div>
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
                                Resetting password...
                              </>
                            ) : (
                              <>
                                <Lock className="mr-2 h-4 w-4" />
                                Reset Password
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </button>
                        </div>

                        {/* Status Messages */}
                        {submitStatus === 'error' && (
                          <div className="bg-primary-bg border border-red-200 rounded-md p-4 flex items-center space-x-3">
                            <AlertCircle className="h-5 w-5 text-red-600" />
                            <span className="text-primary font-medium">Failed to reset password. Please try again.</span>
                          </div>
                        )}
                      </Form>
                    )}
                  </Formik>
                </>
              ) : (
                // Password Reset Success
                <div className="text-center space-y-6">
                  <div className="bg-primary-bg h-16 flex justify-center mx-auto">
                    <UserCheck className="h-8 text-green-600" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-primary">Password Reset Complete!</h3>
                    <p className="text-red-700 text-sm leading-relaxed">
                      Your password has been successfully updated. You can now log in with your new password.
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-md p-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div className="text-left">
                        <p className="text-green-800 text-sm">Security Tip:</p>
                        <p className="text-green-700 mt-1">
                          Keep your password secure and don't share it with anyone.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={handleLoginRedirect}
                      className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md text-sm font-bold text-primary-bg bg-primary hover:bg-primary-sec focus:ring-2 focus:ring-red-900 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    >
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Continue to Login
                    </button>
                  </div>
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
                <span>Your new password is encrypted and secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>All sessions are automatically secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Your data and privacy are fully protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;