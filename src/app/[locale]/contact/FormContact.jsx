 "use client"

import React, { useRef, useState, useEffect } from 'react';
import { useTranslations } from "next-intl";


export default function FormContact() {
    const t = useTranslations('Contact')
    const formRef = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        subject: '',  // Added subject field
        message: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setFormErrors({
            ...formErrors,
            [e.target.name]: '',
        });
    };

    const emailTemplate = encodeURIComponent(`
    Dear Moustahfid,

    I hope this email finds you well. My name is ${formData.user_name}, and I recently visited your portfolio website. I am impressed by your work and would like to inquire about potential collaboration or job opportunities.

    ${formData.message}

    I have attached my resume for your reference.

    Thank you for your time, and I look forward to the possibility of working together.

    Best Regards,
    ${formData.user_name}
    `)


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const to = 'ayoub.moustahfid@zohomail.com';
        const subject = formData.get('subject') || 'Contact Form Submission';
        const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${emailTemplate}`;
        window.location.href = mailtoLink;
    };

    useEffect(() => {
        // Hide the success alert after 3 seconds
        const timeoutId = setTimeout(() => {
            setShowSuccessAlert(false);
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [showSuccessAlert]);

    return (
        <div className="relative">
            <form ref={formRef} onSubmit={handleFormSubmit}>
                <div className="grid gap-4">
                    <div>
                        <label htmlFor="subject" className="sr-only">
                            {t('subject')}
                        </label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={`py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${formErrors.subject ? 'border-red-500' : ''
                                }`}
                            placeholder={t('subject')}
                            required
                        />
                        {formErrors.subject && (
                            <p className="text-red-500 text-sm mt-1">
                                {formErrors.subject}
                            </p>
                        )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="user_name" className="sr-only">
                                {t('fullName')}
                            </label>
                            <input
                                type="text"
                                name="user_name"
                                id="user_name"
                                value={formData.user_name}
                                onChange={handleChange}
                                className={`py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${formErrors.user_name ? 'border-red-500' : ''
                                    }`}
                                placeholder={t('fullName')}
                                required
                            />
                            {formErrors.user_name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {formErrors.user_name}
                                </p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="user_phone" className="sr-only">
                                {t('phone')}
                            </label>
                            <input
                                type="text"
                                name="user_phone"
                                id="user_phone"
                                value={formData.user_phone}
                                onChange={handleChange}
                                className={`py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${formErrors.user_phone ? 'border-red-500' : ''
                                    }`}
                                placeholder={t('phone')}
                                required
                            />
                            {formErrors.user_phone && (
                                <p className="text-red-500 text-sm mt-1">
                                    {formErrors.user_phone}
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="user_email" className="sr-only">
                            {t('email')}
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            id="user_email"
                            value={formData.user_email}
                            onChange={handleChange}
                            className={`py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${formErrors.user_email ? 'border-red-500' : ''
                                }`}
                            placeholder={t('email')}
                            required
                        />
                        {formErrors.user_email && (
                            <p className="text-red-500 text-sm mt-1">
                                {formErrors.user_email}
                            </p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="message" className="sr-only">
                            {t('message')}
                        </label>
                        <textarea
                            type="text"
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${formErrors.message ? 'border-red-500' : ''
                                }`}
                            placeholder={t('message')}
                            required
                        ></textarea>
                        {formErrors.message && (
                            <p className="text-red-500 text-sm mt-1">
                                {formErrors.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="mt-4 grid">
                    <button
                        type="submit"
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                        {t('textBtn')}
                    </button>
                </div>
                {formSubmitted && showSuccessAlert && (
                    <div className="fixed top-2 right-2 animate-fadeIn">
                        <div className="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                            <svg className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9" />
                            </svg>
                            <div className="ps-4 text-sm font-normal">Message sent successfully.</div>
                        </div>
                    </div>
                )}
                <div className="mt-3 text-center">
                    <p className="text-sm text-gray-500">
                        {t('warning')}
                    </p>
                </div>
            </form>
        </div>
    );
}
