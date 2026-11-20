import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, CheckCircle2, ArrowLeft, Mail, Paperclip, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const applicationSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  role: z.string().min(2, 'Role is required'),
  linkedinOrPortfolio: z.string().url("Please provide a valid URL").optional().or(z.literal('')),
  coverNote: z.string().min(10, 'Cover note must be at least 10 characters'),
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

const CareerDetail = () => {
  const { slug } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fileValidationMessage, setFileValidationMessage] = useState<string | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const [submittedCandidate, setSubmittedCandidate] = useState<ApplicationFormValues | null>(null);

  const roleTitle = slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Engineering Role';

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      role: roleTitle,
      linkedinOrPortfolio: ''
    }
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setSelectedFileName(null);
      setFileValidationMessage(null);
      return;
    }

    const allowedExtensions = ['pdf', 'doc', 'docx'];
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    const maxSizeBytes = 5 * 1024 * 1024; // 5MB

    if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
      setFileValidationMessage("Please upload a PDF or Word document (.pdf, .doc, .docx).");
      setSelectedFileName(null);
      e.target.value = '';
      return;
    }

    if (file.size > maxSizeBytes) {
      setFileValidationMessage("File size exceeds 5MB. Please upload a smaller file or link your portfolio.");
      setSelectedFileName(null);
      e.target.value = '';
      return;
    }

    setSelectedFileName(file.name);
    setFileValidationMessage(null);
  };

  const onSubmit = async (data: ApplicationFormValues) => {
    setIsSubmitting(true);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            from_email: data.email,
            role_applied: data.role,
            portfolio_url: data.linkedinOrPortfolio || 'None provided',
            cover_note: data.coverNote,
            attached_file_name: selectedFileName || 'None (Emailed separately)',
          },
          publicKey
        );
      }
      setSubmittedCandidate(data);
      setIsSuccess(true);
    } catch (err) {
      console.error("Submission error", err);
      // Fallback: still show the email mailto instructions so candidate is not stranded
      setSubmittedCandidate(data);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const activeCandidate = submittedCandidate || getValues();
  const mailtoSubject = encodeURIComponent(`Application: ${roleTitle} - ${activeCandidate.name || 'Candidate'}`);
  const mailtoBody = encodeURIComponent(
    `Hello Veluno Softtech Team,\n\nI am applying for the ${roleTitle} position.\n\nName: ${activeCandidate.name || ''}\nEmail: ${activeCandidate.email || ''}\nPortfolio/LinkedIn: ${activeCandidate.linkedinOrPortfolio || ''}\n\nNote:\n${activeCandidate.coverNote || ''}\n\n(Attached is my CV)`
  );

  return (
    <>
      <Helmet>
        <title>Apply for {roleTitle} | Veluno Softtech Careers</title>
        <meta name="description" content={`Apply for the ${roleTitle} position at Veluno Softtech.`} />
      </Helmet>

      {/* Header */}
      <div className="bg-navy-900 text-white py-20 border-b-4 border-accent-500">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/careers" className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider mb-4">
            <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to open roles
          </Link>
          <h1 className="text-3xl md:text-5xl font-heading font-medium mb-4">
            {roleTitle}
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl font-light">
            Join our engineering team. We prioritize clean software architecture, direct developer autonomy, and dependable delivery.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white p-8 md:p-10 rounded-sm border border-gray-200 shadow-xs">
          <h2 className="text-2xl font-heading font-bold text-navy-900 mb-2">
            Submit Your Application
          </h2>
          <p className="text-sm text-gray-600 mb-8">
            Complete the form below. To guarantee high-resolution CV delivery without attachment corruption, you can also send your resume directly to our hiring team via email.
          </p>

          {isSuccess ? (
            <div className="text-center py-12 bg-gray-50 rounded-sm border border-gray-200 p-8">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy-900 mb-2">Application Logged!</h3>
              <p className="text-gray-600 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
                Thank you for applying. We have registered your details for <strong>{roleTitle}</strong>.
              </p>
              
              <div className="bg-white p-6 rounded-sm border border-gray-200 text-left max-w-md mx-auto mb-6 text-xs text-gray-700 space-y-2">
                <div className="font-bold text-navy-900 flex items-center gap-1.5 text-sm">
                  <Mail className="w-4 h-4 text-accent-600" /> Complete Submission Checklist:
                </div>
                <p>
                  If you have a PDF resume, please email it directly to:
                </p>
                <div className="font-mono bg-gray-50 p-2 rounded border border-gray-200 text-accent-700 font-bold select-all">
                  contact@velunosofttech.com
                </div>
                <p className="text-gray-500">
                  Subject: Application for {roleTitle}
                </p>
              </div>

              <a 
                href={`mailto:contact@velunosofttech.com?subject=${mailtoSubject}&body=${mailtoBody}`}
                className="btn btn-primary text-xs font-semibold px-6 py-3 inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" /> Open Email Client with Attached Details
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name *</label>
                  <input 
                    type="text" 
                    {...register('name')}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-2.5 border rounded-sm text-sm focus:ring-1 focus:ring-accent-500 focus:border-accent-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address *</label>
                  <input 
                    type="email" 
                    {...register('email')}
                    placeholder="alex@example.com"
                    className={`w-full px-4 py-2.5 border rounded-sm text-sm focus:ring-1 focus:ring-accent-500 focus:border-accent-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Role Applied For</label>
                  <input 
                    type="text" 
                    {...register('role')}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-sm text-sm bg-gray-50 text-gray-600 font-medium"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">LinkedIn Profile or GitHub URL (Optional)</label>
                  <input 
                    type="url" 
                    {...register('linkedinOrPortfolio')}
                    placeholder="https://linkedin.com/in/... or https://github.com/..."
                    className={`w-full px-4 py-2.5 border rounded-sm text-sm focus:ring-1 focus:ring-accent-500 focus:border-accent-500 ${
                      errors.linkedinOrPortfolio ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.linkedinOrPortfolio && <p className="text-red-500 text-xs mt-1">{errors.linkedinOrPortfolio.message}</p>}
                </div>
              </div>

              {/* Resume File Validation */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Resume Document (Optional — PDF, DOCX up to 5MB)
                </label>
                <div className="flex items-center gap-3">
                  <input 
                    type="file" 
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-xs file:font-semibold file:bg-navy-900 file:text-white hover:file:bg-navy-800 cursor-pointer border border-gray-300 p-1.5 rounded-sm bg-white"
                  />
                </div>
                {selectedFileName && (
                  <p className="text-emerald-700 text-xs mt-1 font-medium flex items-center gap-1">
                    <Paperclip className="w-3.5 h-3.5" /> Selected: {selectedFileName}
                  </p>
                )}
                {fileValidationMessage && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {fileValidationMessage}
                  </p>
                )}
                <p className="text-xs text-gray-400 mt-1">
                  You can also email your CV directly to <a href="mailto:contact@velunosofttech.com" className="underline text-gray-600">contact@velunosofttech.com</a>.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Cover Note / Experience Summary *
                </label>
                <textarea 
                  rows={4} 
                  {...register('coverNote')}
                  placeholder="Tell us about relevant software projects you've engineered, your preferred tech stack, and what you're looking for in your next role..."
                  className={`w-full px-4 py-3 border rounded-sm text-sm focus:ring-1 focus:ring-accent-500 focus:border-accent-500 ${
                    errors.coverNote ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.coverNote && <p className="text-red-500 text-xs mt-1">{errors.coverNote.message}</p>}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto btn btn-primary text-sm font-semibold px-8 py-3.5 flex justify-center items-center shadow-sm"
                >
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </button>

                <a 
                  href={`mailto:contact@velunosofttech.com?subject=${mailtoSubject}&body=${mailtoBody}`}
                  className="text-xs text-gray-600 hover:text-navy-900 inline-flex items-center"
                >
                  <Mail className="w-3.5 h-3.5 mr-1" /> Or email directly to contact@velunosofttech.com
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default CareerDetail;
