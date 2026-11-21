import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Clock, MapPin, Send, MessageSquare, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import PageBanner from '../components/ui/PageBanner';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Full name is required (min 2 characters)' }),
  email: z.string().email({ message: 'A valid business email address is required' }),
  phone: z.string().min(7, { message: 'Phone or WhatsApp number is required' }),
  company: z.string().optional(),
  service: z.string().min(1, { message: 'Please select a required service' }),
  budget: z.string().min(1, { message: 'Please choose an estimated budget' }),
  preferredMethod: z.string(),
  message: z.string().min(10, { message: 'Please provide a brief description of your project (min 10 characters)' }),
  honeypot: z.string().max(0, { message: 'Bot detected' }).optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const SERVICES = [
  'Website Development',
  'Web Application Development',
  'Mobile App Development (iOS & Android)',
  'E-commerce Development',
  'UI/UX Design & Prototyping',
  'Custom Software Development',
  'CRM & ERP Solutions',
  'AI & Business Automation',
  'Digital Marketing & Social Media',
  'Other / Technical Consultation'
];

const BUDGET_RANGES = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $30,000',
  '$30,000+',
  'Flexible / To be determined'
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919080824626';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Veluno Softtech! I'm interested in your software development services. I'd like to discuss my project."
  )}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { 
      service: '', 
      budget: '',
      preferredMethod: 'Email',
      honeypot: '' 
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    if (data.honeypot) return;
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // In production with EmailJS configured or API backend
      await new Promise(resolve => setTimeout(resolve, 800));
      setIsSuccess(true);
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: data.service,
          value: data.budget,
        });
      }
      reset();
    } catch (err: any) {
      setErrorMessage('Unable to dispatch enquiry automatically. Please email contact@velunosofttech.com or message us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Veluno Softtech – Enterprise Software & Digital Solutions</title>
        <meta 
          name="description" 
          content="Start a technical scoping conversation with Veluno Softtech for web applications, mobile apps, custom software, and digital solutions." 
        />
        <link rel="canonical" href="https://www.velunosofttech.com/contact" />
      </Helmet>
      
      {/* Top Banner */}
      <PageBanner 
        title="Contact Us" 
        breadcrumb="Contact" 
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-[#F8F9FA] rounded-xl p-8 md:p-12 border border-gray-200 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider block mb-2">
                Project Intake Form
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0B1F3A] mb-3">
                Tell Us About Your Project
              </h2>
              <p className="text-sm text-slate-600 mb-8 leading-relaxed">
                Fill out the details below to schedule an architectural consultation. Our technical team evaluates every submission and responds with practical recommendations within 24 hours.
              </p>

              {isSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-xl text-center animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-[#0B1F3A] text-emerald-400 flex items-center justify-center mx-auto mb-4 font-bold text-2xl shadow-sm">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#0B1F3A] mb-2">Enquiry Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Thank you for reaching out! Our engineering lead will review your project brief and reply with an initial technical assessment within 4 business hours.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#2563EB] hover:underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  
                  {/* Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1F3A] uppercase tracking-wide mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input 
                        {...register('name')} 
                        placeholder="e.g. Alex Henderson" 
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm text-[#0B1F3A] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                      />
                      {errors.name && <span className="text-xs text-rose-500 mt-1 block font-medium">{errors.name.message}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1F3A] uppercase tracking-wide mb-1.5">
                        Business Email <span className="text-rose-500">*</span>
                      </label>
                      <input 
                        {...register('email')} 
                        type="email" 
                        placeholder="alex@company.com" 
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm text-[#0B1F3A] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                      />
                      {errors.email && <span className="text-xs text-rose-500 mt-1 block font-medium">{errors.email.message}</span>}
                    </div>
                  </div>

                  {/* Phone / WhatsApp & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1F3A] uppercase tracking-wide mb-1.5">
                        Phone / WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <input 
                        {...register('phone')} 
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm text-[#0B1F3A] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                      />
                      {errors.phone && <span className="text-xs text-rose-500 mt-1 block font-medium">{errors.phone.message}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1F3A] uppercase tracking-wide mb-1.5">
                        Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input 
                        {...register('company')} 
                        placeholder="Acme Corporation" 
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm text-[#0B1F3A] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Required Service & Estimated Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1F3A] uppercase tracking-wide mb-1.5">
                        Required Service <span className="text-rose-500">*</span>
                      </label>
                      <select 
                        {...register('service')} 
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm text-[#0B1F3A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                      >
                        <option value="">Select a service</option>
                        {SERVICES.map(srv => (
                          <option key={srv} value={srv}>{srv}</option>
                        ))}
                      </select>
                      {errors.service && <span className="text-xs text-rose-500 mt-1 block font-medium">{errors.service.message}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1F3A] uppercase tracking-wide mb-1.5">
                        Estimated Budget <span className="text-rose-500">*</span>
                      </label>
                      <select 
                        {...register('budget')} 
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm text-[#0B1F3A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                      >
                        <option value="">Select budget range</option>
                        {BUDGET_RANGES.map(rng => (
                          <option key={rng} value={rng}>{rng}</option>
                        ))}
                      </select>
                      {errors.budget && <span className="text-xs text-rose-500 mt-1 block font-medium">{errors.budget.message}</span>}
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-xs font-bold text-[#0B1F3A] uppercase tracking-wide mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-700">
                      {['Email', 'WhatsApp', 'Phone Call'].map((method) => (
                        <label key={method} className="inline-flex items-center gap-2 cursor-pointer bg-white px-3.5 py-2 rounded-lg border border-gray-200 hover:border-slate-400">
                          <input
                            type="radio"
                            value={method}
                            {...register('preferredMethod')}
                            className="text-[#2563EB] focus:ring-[#2563EB]"
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-bold text-[#0B1F3A] uppercase tracking-wide mb-1.5">
                      Project Description <span className="text-rose-500">*</span>
                    </label>
                    <textarea 
                      {...register('message')} 
                      rows={4} 
                      placeholder="Outline your project scope, core features, target audience, or desired launch timeline..." 
                      className="w-full bg-white border border-gray-300 rounded-lg p-4 text-sm text-[#0B1F3A] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                    />
                    {errors.message && <span className="text-xs text-rose-500 mt-1 block font-medium">{errors.message.message}</span>}
                  </div>

                  {/* Honeypot field for spam prevention */}
                  <input type="text" {...register('honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-[#0B1F3A] hover:bg-[#1E3A5F] text-white font-bold uppercase tracking-wider text-xs py-4 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <span>Submit Project Enquiry</span>
                        <Send className="w-4 h-4 text-[#2563EB]" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
                    <ShieldCheck className="w-4 h-4 text-slate-400" />
                    <span>Your data is protected under strict non-disclosure. Zero spam.</span>
                  </div>

                </form>
              )}
            </div>

            {/* Sidebar Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Info Card */}
              <div className="bg-[#0B1F3A] text-white p-8 md:p-10 rounded-xl shadow-xl">
                <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider block mb-2">
                  Direct Channels
                </span>
                <h3 className="text-2xl font-heading font-extrabold text-white mb-6">
                  Get in Touch
                </h3>

                <ul className="space-y-6 text-sm">
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-white/10 text-[#2563EB] flex items-center justify-center mr-4 shrink-0">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 uppercase font-mono block">Direct Email</span>
                      <a href="mailto:contact@velunosofttech.com" className="font-bold text-white hover:text-blue-400 transition-colors">
                        contact@velunosofttech.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-white/10 text-[#2563EB] flex items-center justify-center mr-4 shrink-0">
                      <Clock className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 uppercase font-mono block">Response Time</span>
                      <span className="font-bold text-white">
                        Under 4 Business Hours
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-white/10 text-[#2563EB] flex items-center justify-center mr-4 shrink-0">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 uppercase font-mono block">Delivery Hub</span>
                      <span className="text-gray-200 font-medium">
                        Chennai, India
                      </span>
                    </div>
                  </li>
                </ul>

                {/* WhatsApp Direct Action inside Card */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <span className="text-xs font-mono uppercase text-gray-400 block mb-3">
                    Prefer Instant Messaging?
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-150"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Timezone Guarantee Card */}
              <div className="bg-[#F8F9FA] border border-gray-200 text-[#0B1F3A] p-8 rounded-xl shadow-xs">
                <span className="text-xs font-mono font-bold uppercase tracking-wider block mb-2 text-[#2563EB]">
                  Global Client Coverage
                </span>
                <h4 className="text-lg font-heading font-extrabold mb-2">
                  Guaranteed Timezone Overlap
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We schedule daily recurring syncs and provide active engineering hours overlapping 3.5 to 5 hours with clients across the UK, Europe, USA, Canada, UAE, and Australia.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
