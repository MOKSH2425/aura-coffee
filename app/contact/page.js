export default function Contact() {
  return (
    <div className="pt-20 px-6 max-w-5xl mx-auto pb-24">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-gray-400 text-sm max-w-md mx-auto">We&#39;d love to hear from you. Whether you&#39;re a cafe owner looking for beans or a customer with a question about your brew.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 bg-aura-card border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="md:col-span-7">
                <form className="space-y-6">
                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Topic</label>
                        <select className="w-full bg-[#1E1915] border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-aura-gold focus:ring-1 focus:ring-aura-gold outline-none transition-all appearance-none">
                            <option>General Inquiry</option>
                            <option>Wholesale / Partnership</option>
                            <option>Careers</option>
                            <option>Order Issue</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Name</label>
                            <input type="text" className="w-full bg-[#1E1915] border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-aura-gold focus:ring-1 focus:ring-aura-gold outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                            <input type="email" className="w-full bg-[#1E1915] border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-aura-gold focus:ring-1 focus:ring-aura-gold outline-none transition-all" placeholder="john@example.com" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                        <textarea className="w-full bg-[#1E1915] border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-aura-gold focus:ring-1 focus:ring-aura-gold outline-none transition-all h-40 resize-none" placeholder="How can we help you?"></textarea>
                    </div>
                    <button className="bg-aura-gold text-aura-dark font-bold px-8 py-4 rounded-md text-xs uppercase tracking-widest hover:bg-white transition-colors w-full md:w-auto">
                        Send Message
                    </button>
                </form>
            </div>

            <div className="hidden md:block md:col-span-1 border-r border-white/5 h-full mx-auto"></div>

            <div className="md:col-span-4 space-y-10 py-2">
                <div>
                    <h3 className="font-bold text-white mb-2 text-lg">Headquarters</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Aura Coffee Pvt Ltd.<br/>
                        Plot 24, 100ft Road,<br/>
                        Indiranagar, Bengaluru - 560038
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-white mb-2 text-lg">Email Us</h3>
                    <p className="text-gray-400 text-sm mb-1"><span className="text-aura-gold">Support:</span> hello@auracoffee.in</p>
                    <p className="text-gray-400 text-sm"><span className="text-aura-gold">B2B:</span> wholesale@auracoffee.in</p>
                </div>
                <div>
                    <h3 className="font-bold text-white mb-2 text-lg">Call Us</h3>
                    <p className="text-gray-400 text-sm">+91 80 4123 5678</p>
                    <p className="text-[10px] text-gray-600 mt-1 uppercase tracking-wide">Mon-Fri, 9am - 6pm</p>
                </div>

                <div className="pt-8 border-t border-white/5 flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-aura-gold hover:text-aura-dark transition-all text-gray-400"><span className="material-icons text-sm">facebook</span></a>
                    <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-aura-gold hover:text-aura-dark transition-all text-gray-400"><span className="material-icons text-sm">camera_alt</span></a>
                    <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-aura-gold hover:text-aura-dark transition-all text-gray-400"><span className="material-icons text-sm">alternate_email</span></a>
                </div>
            </div>
        </div>
    </div>
  );
}
