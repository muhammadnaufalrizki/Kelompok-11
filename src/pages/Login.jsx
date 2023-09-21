import React from 'react'

export default function Login() {
  return (
    <>
        <section className="login">
            <div className="login-container flex ai-center jc-sb">
                <img src="/float.png" alt="" />
                <div className="form-regis">
                    <form action="" style={{marginBottom: '10px'}}>
                        <h1 className="logo">TokoShopLogin</h1>
                        <input type="text" placeholder='Username or Email'/>    
                        <input type="password" placeholder='Password'/>    
                        <input type="submit" value={'Login'} className='btn-1'/>
                        <a href="">Lupa password?</a>    
                    </form>
                    <form action="">
                        <p style={{width: '100%'}}>Belum punya akun?<a href="">daftar</a></p>
                    </form>
                </div>    
            </div>    
        </section>  
    </>
  )
}
