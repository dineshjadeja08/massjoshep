import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, CheckCircle2, ArrowRight, AlertCircle, Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import PageBanner from '../components/ui/PageBanner';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Full name is required (min 2 characters)' }),
  workEmail: z.string().email({ message: 'A valid work email is required' }),
  company: z.string().min(2, { message: 'Company or organization name is required' }),
  country: z.string().min(1, { message: 'Please select your country or region' }),
  projectType: z.array(z.string()).min(1, { message: 'Select at least one project requirement' }),
  budget: z.string().min(1, { message: 'Please select an estimated budget range' }),
  timeline: z.string().min(1, { message: 'Please select an anticipated timeline' }),
  message: z.string().min(15, { message: 'Please provide some project details (at least 15 characters)' }),
  honeypot: z.string().max(0, { message: 'Bot detected' }).optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { projectType: [], honeypot: '' }
  });

  const onSubmit = async (data: ContactFormValues) => {
    if (data.honeypot) return;
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Simulate/EmailJS integration
      await new Promise(resolve => setTimeout(resolve, 800));
      setIsSuccess(true);
      reset();
    } catch (err: any) {
      setErrorMessage('Unable to dispatch enquiry automatically. Please email contact@velunosofttech.com or message via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Veluno Softtech</title>
        <meta 
          name="description" 
          content="Start a technical scoping conversation with Veluno Softtech for custom web applications and software." 
        />
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
            <div className="lg:col-span-7 bg-[#F8F9FA] rounded-xl p-8 md:p-12 border border-gray-200/90 shadow-sm">
              <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-wider block mb-2">
                Discovery Intake
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0B1F3A] mb-6">
                Tell us about your project.
              </h2>

              {isSuccess ? (
                <div className="bg-[#14B8A6]/30 border border-[#14B8A6] p-8 rounded-2xl text-center">
                  <div className="w-12 h-12 rounded-full bg-[#0B1F3A] text-[#14B8A6] flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">Enquiry Received</h3>
                  <p className="text-sm text-gray-700">
                    Our engineering lead will review your requirements and respond within 24 hours with an initial architectural perspective.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1F3A] uppercase mb-1">Your Name</label>
                      <input 
                        {...register('name')} 
                        placeholder="John Doe" 
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#14B8A6]"
                      />
                      {errors.name && <span className="text-xs text-rose-500 mt-1 block">{errors.name.message}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1F3A] uppercase mb-1">Work Email</label>
                      <input 
                        {...register('workEmail')} 
                        type="email" 
                        placeholder="john@company.com" 
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#14B8A6]"
                      />
                      {errors.workEmail && <span className="text-xs text-rose-500 mt-1 block">{errors.workEmail.message}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1F3A] uppercase mb-1">Company Name</label>
                      <input 
                        {...register('company')} 
                        placeholder="Acme Inc" 
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#14B8A6]"
                      />
                      {errors.company && <span className="text-xs text-rose-500 mt-1 block">{errors.company.message}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1F3A] uppercase mb-1">Region / Country</label>
                      <select 
                        {...register('country')} 
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#14B8A6]"
                      >
                        <option value="">Select Region</option>
                        <option value="India">India</option>
                        <option value="UK">United Kingdom</option>
                        <option value="Europe">Europe</option>
                        <option value="UAE">UAE & Middle East</option>
                        <option value="Australia">Australia & APAC</option>
                        <option value="US">USA & Americas</option>
                      </select>
                      {errors.country && <span className="text-xs text-rose-500 mt-1 block">{errors.country.message}</span>}
                    </div>
                  </div>

                  {/* Requirements checkboxes */}
                  <div>
                    <label className="block text-xs font-bold text-[#0B1F3A] uppercase mb-2">Project Requirements</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {['Web Application', 'SaaS Platform', 'Mobile App', 'API Integration', 'Technical SEO & CRO', 'Dedicated Team'].map(type => (
                        <label key={type} className="flex items-center text-xs text-gray-700 bg-white p-2.5 rounded-xl border border-gray-200 cursor-pointer hover:border-[#14B8A6]">
                          <input 
                            type="checkbox" 
                            value={type} 
                            {...register('projectType')} 
                            className="mr-2 accent-[#2563EB]"
                          />
                          <span>{type}</span>
                        </label>
                      ))}
                    </div>
                    {errors.projectType && <span className="text-xs text-rose-500 mt-1 block">{errors.projectType.message}</span>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1F3A] uppercase mb-1">Estimated Budget</label>
                      <select 
                        {...register('budget')} 
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#14B8A6]"
                      >
                        <option value="">Select Range</option>
                        <option value="< $5k">&lt; $5,000</option>
                        <option value="$5k - $15k">$5,000 – $15,000</option>
                        <option value="$15k - $30k">$15,000 – $30,000</option>
                        <option value="$30k+">$30,000+</option>
                      </select>
                      {errors.budget && <span className="text-xs text-rose-500 mt-1 block">{errors.budget.message}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1F3A] uppercase mb-1">Anticipated Timeline</label>
                      <select 
                        {...register('timeline')} 
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#14B8A6]"
                      >
                        <option value="">Select Timeline</option>
                        <option value="Immediate">Immediate (&lt; 2 weeks)</option>
                        <option value="1 month">Within 1 month</option>
                        <option value="1-3 months">1 – 3 months</option>
                        <option value="Exploratory">Exploratory</option>
                      </select>
                      {errors.timeline && <span className="text-xs text-rose-500 mt-1 block">{errors.timeline.message}</span>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1F3A] uppercase mb-1">Project Details</label>
                    <textarea 
                      {...register('message')} 
                      rows={4} 
                      placeholder="Outline your application goals, existing platforms, or key operational bottlenecks..." 
                      className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm focus:outline-none focus:border-[#14B8A6]"
                    />
                    {errors.message && <span className="text-xs text-rose-500 mt-1 block">{errors.message.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="btn-teal w-full text-center py-4 rounded-lg font-bold uppercase tracking-wider text-sm shadow-sm"
                  >
                    {isSubmitting ? 'Transmitting Request...' : 'Submit Technical Scoping Request →'}
                  </button>

                </form>
              )}
            </div>

            {/* Sidebar Contact Info matching the dark card style */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#0B1F3A] text-white p-8 md:p-10 rounded-xl shadow-xl">
                <span className="text-xs font-mono font-bold text-[#14B8A6] uppercase tracking-wider block mb-2">
                  Direct Channels
                </span>
                <h3 className="text-2xl font-heading font-extrabold text-white mb-6">
                  Direct Engineering Intake
                </h3>

                <ul className="space-y-6 text-sm">
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#2A2A2A] text-[#14B8A6] flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 uppercase font-mono block">Direct Email</span>
                      <a href="mailto:contact@velunosofttech.com" className="font-bold text-white hover:text-[#14B8A6] transition-colors">
                        contact@velunosofttech.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#2A2A2A] text-[#14B8A6] flex items-center justify-center mr-4 flex-shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 uppercase font-mono block">WhatsApp Chat</span>
                      <a href="https://wa.me/919080824626" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-[#14B8A6] transition-colors">
                        +91 90808 24626
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#2A2A2A] text-[#14B8A6] flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 uppercase font-mono block">Delivery Hub</span>
                      <span className="text-gray-300">
                        Chennai, Tamil Nadu, India (UTC+5:30)
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Timezone Guarantee Card */}
              <div className="bg-[#14B8A6] text-[#0B1F3A] p-8 rounded-xl shadow-sm">
                <span className="text-xs font-mono font-bold uppercase tracking-wider block mb-2 text-[#0B1F3A]/70">
                  Global Client Coverage
                </span>
                <h4 className="text-xl font-heading font-extrabold mb-3">
                  Guaranteed Timezone Overlap
                </h4>
                <p className="text-xs text-[#0B1F3A]/80 leading-relaxed font-medium">
                  We schedule daily recurring syncs and provide active engineering hours overlapping 3.5 to 5 hours with the UK, Europe, UAE, and Australia.
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
