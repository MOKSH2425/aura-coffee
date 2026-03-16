'use client';

import Link from 'next/link';
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const { signUp } = useAuth();
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    if (email && password) {
      try {
        await signUp(email, password, name);
        router.push('/rewards');
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-aura-dark via-aura-dark/80 to-aura-dark/40"></div>
        </div>

        <div className="relative z-10 w-full max-w-md p-6 mt-10">
            <div className="text-center mb-8">
                <Link href="/" className="inline-flex items-center gap-2 group mb-6">
                    <span className="material-icons text-aura-gold text-3xl">auto_awesome</span>
                    <span className="text-2xl font-bold tracking-widest uppercase">AURA</span>
                </Link>
                <h1 className="text-3xl font-bold mb-2">Join the Club</h1>
                <p className="text-gray-400 text-sm">Unlock exclusive beans, brewing guides, and rewards.</p>
            </div>

            <div className="bg-[#1E1915]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
                <form className="space-y-4" onSubmit={handleSignup}>
                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                        <div className="relative">
                            <span className="material-icons absolute left-4 top-3 text-gray-500 text-sm">person</span>
                            <input type="text" name="name" placeholder="John Doe" className="w-full bg-[#120C08] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm focus:border-aura-gold focus:ring-1 focus:ring-aura-gold outline-none transition-all placeholder-gray-600" required />
                        </div>
                    </div>

                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                        <div className="relative">
                            <span className="material-icons absolute left-4 top-3 text-gray-500 text-sm">email</span>
                            <input type="email" name="email" placeholder="you@example.com" className="w-full bg-[#120C08] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm focus:border-aura-gold focus:ring-1 focus:ring-aura-gold outline-none transition-all placeholder-gray-600" required />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Password</label>
                        <div className="relative">
                            <span className="material-icons absolute left-4 top-3 text-gray-500 text-sm">lock</span>
                            <input type="password" name="password" placeholder="Create a password" className="w-full bg-[#120C08] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-sm focus:border-aura-gold focus:ring-1 focus:ring-aura-gold outline-none transition-all placeholder-gray-600" required />
                        </div>
                    </div>

                    <div className="flex items-start gap-2 pt-2">
                        <input type="checkbox" className="mt-1 bg-[#120C08] border-white/20 rounded text-aura-gold focus:ring-0" />
                        <p className="text-xs text-gray-500 leading-snug">I agree to the <Link href="#" className="text-white hover:underline">Terms of Service</Link> and <Link href="#" className="text-white hover:underline">Privacy Policy</Link>.</p>
                    </div>

                    <button type="submit" className="block text-center w-full bg-aura-gold text-aura-dark font-bold py-3 rounded-lg uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-aura-gold/10 mt-2">Create Account</button>
                </form>

                <p className="text-center text-xs text-gray-500 mt-8">
                    Already have an account? <Link href="/login" className="text-aura-gold font-bold hover:underline">Sign In</Link>
                </p>
            </div>
        </div>
    </div>
  );
}
