import { SignIn } from '@clerk/clerk-react';
import React from 'react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Github, Chrome, Linkedin } from 'lucide-react'

function SignInPage() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4'>
            <div className='w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6'>
                {/* Header */}
                <div className='text-center space-y-2'>
                    <h1 className='text-3xl font-bold text-slate-900'>Sign in to AI-ResumeMaker</h1>
                    <p className='text-slate-600'>Welcome back! Please sign in to continue.</p>
                </div>

                {/* Social Login Buttons */}
                <div className='space-y-3'>
                    <Button 
                        variant='outline' 
                        className='w-full h-12 text-base font-medium border-slate-200 hover:bg-slate-50'
                        onClick={() => window.location.href = '#'}
                    >
                        <Github className='w-5 h-5 mr-2' />
                        Continue with GitHub
                    </Button>
                    <Button 
                        variant='outline' 
                        className='w-full h-12 text-base font-medium border-slate-200 hover:bg-slate-50'
                        onClick={() => window.location.href = '#'}
                    >
                        <Chrome className='w-5 h-5 mr-2' />
                        Continue with Google
                    </Button>
                    <Button 
                        variant='outline' 
                        className='w-full h-12 text-base font-medium border-slate-200 hover:bg-slate-50'
                        onClick={() => window.location.href = '#'}
                    >
                        <Linkedin className='w-5 h-5 mr-2' />
                        Continue with LinkedIn
                    </Button>
                </div>

                {/* Divider */}
                <div className='relative'>
                    <div className='absolute inset-0 flex items-center'>
                        <div className='w-full border-t border-slate-200'></div>
                    </div>
                    <div className='relative flex justify-center text-sm'>
                        <span className='px-4 bg-white text-slate-500'>Or continue with email</span>
                    </div>
                </div>

                {/* Clerk SignIn Component */}
                <div className='space-y-4'>
                    <SignIn 
                        appearance={{
                            elements: {
                                rootBox: 'mx-auto',
                                card: 'shadow-none border-0 p-0',
                            }
                        }}
                    />
                </div>

                {/* Sign Up Link */}
                <div className='text-center pt-4 border-t border-slate-200'>
                    <p className='text-slate-600'>
                        Don't have an account?{' '}
                        <a href='/auth/sign-up' className='text-blue-600 hover:text-blue-700 font-medium'>
                            Sign up
                        </a>
                    </p>
                </div>

                {/* Clerk Development Badge */}
                <div className='flex justify-center'>
                    <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800'>
                        Secured by Clerk • Development mode
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SignInPage;
  