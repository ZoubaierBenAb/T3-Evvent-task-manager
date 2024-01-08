'use client';

import { Button } from "@/components/ui/button";
import {signIn} from 'next-auth/react'

export default function SignInWithGitHub(){
    return (
        <Button className="mt-6" variant={'secondary'} onClick={()=>signIn('github',{
            callbackUrl : `${window.location.origin}`
        })}>
            Sign in with GitHub
        </Button>
    )
}