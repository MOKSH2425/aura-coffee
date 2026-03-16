'use client';

import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    if (email && password) {
      try {
        await login(email, password);
        router.push('/rewards');
      } catch(error) {
        alert(error.message);
      }
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2671&auto=format&fit=crop" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-aura-dark via-aura-dark/80 to-aura-dark/40"></div>
        </div>

        <div className="relative z-10 w-full max-w-md p-6 mt-10">
            <div className="text-center mb-8">
                <Link href="/" className="inline-flex items-center gap-2 group mb-6">
                    <span className="material-icons text-aura-gold text-3xl">auto_awesome</span>
                    <span className="text-2xl font-bold tracking-widest uppercase">AURA</span>
                </Link>
                <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                <p className="text-gray-400 text-sm">Sign in to access your rewards and saved brews.</p>
            </div>

            <div className="bg-[#1E1915]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
                <form className="space-y-5" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                        <div className="relative">
                            <span className="material-icons absolute left-4 top-3 text-gray-500 text-sm">email</span>
                            <input type="email" name="email" placeholder="you@example.com" className="w-full bg-[#120C08] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm focus:border-aura-gold focus:ring-1 focus:ring-aura-gold outline-none transition-all placeholder-gray-600" required />
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500">Password</label>
                            <Link href="#" className="text-[10px] text-aura-gold hover:underline">Forgot?</Link>
                        </div>
                        <div className="relative">
                            <span className="material-icons absolute left-4 top-3 text-gray-500 text-sm">lock</span>
                            <input type="password" name="password" placeholder="••••••••" className="w-full bg-[#120C08] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm focus:border-aura-gold focus:ring-1 focus:ring-aura-gold outline-none transition-all placeholder-gray-600" required />
                        </div>
                    </div>

                    <button type="submit" className="block text-center w-full bg-aura-gold text-aura-dark font-bold py-3 rounded-lg uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-aura-gold/10">Sign In</button>
                </form>

                <div className="my-6 flex items-center gap-4">
                    <div className="h-px bg-white/10 flex-grow"></div>
                    <span className="text-[10px] text-gray-500 uppercase">Or continue with</span>
                    <div className="h-px bg-white/10 flex-grow"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 border border-white/10 rounded-lg py-2.5 hover:bg-white/5 transition-colors">
                        <span className="text-xs font-bold">Google</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 border border-white/10 rounded-lg py-2.5 hover:bg-white/5 transition-colors">
                        <span className="text-xs font-bold">Facebook</span>
                    </button>
                </div>

                <p className="text-center text-xs text-gray-500 mt-8">
                    Not a member yet? <Link href="/signup" className="text-aura-gold font-bold hover:underline">Join the Club</Link>
                </p>
            </div>
        </div>
    </div>
  );
}
