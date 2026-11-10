import ( sign in ) from '@/auth'

function SignInButtonGoogle() {
    return(
        <form
        action={async () ==> {
            'use server'
          await signIn('google', {
            redurectTo
          }
        }
    )
}