"use client"

import React, { useRef, useState, useEffect } from 'react';


export default function FormContact() {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        hs_lastname_contacts_1: '',
        user_email: '',
        hs_phone_number_1: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic form validation
        const errors = {};
        if (!formData.user_name) {
            errors.user_name = 'Please enter your first name.';
        }
        if (!formData.user_email) {
            errors.user_email = 'Please enter your email address.';
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.user_email)) {
                errors.user_email = 'Please enter a valid email address.';
            }
        }
        if (!formData.message) {
            errors.message = 'Please enter your message.';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        // Prepare data for the mailto link
        const { user_name, hs_lastname_contacts_1, user_email, hs_phone_number_1, message } = formData;
        const subject = `Contact Form Submission from ${user_name}`;
        const body = `Name: ${user_name}\nLast Name: ${hs_lastname_contacts_1}\nEmail: ${user_email}\nPhone Number: ${hs_phone_number_1}\nMessage: ${message}`;
        const mailtoLink = `mailto:ayoub.moustahfid@zohomail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open the user's default email client with pre-filled information
        window.location.href = mailtoLink;

        // Reset form data
        setFormData({
            user_name: '',
            hs_lastname_contacts_1: '',
            user_email: '',
            hs_phone_number_1: '',
            message: '',
        });

        setFormSubmitted(true);
        setShowSuccessAlert(true);
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
        <form ref={formRef} onSubmit={handleSubmit}>
            <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="user_name" className="sr-only">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            id="user_name"
                            value={formData.user_name}
                            onChange={handleChange}
                            className={`py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${formErrors.user_name ? 'border-red-500' : ''
                                }`}
                            placeholder="First Name"
                            required
                        />
                        {formErrors.user_name && (
                            <p className="text-red-500 text-sm mt-1">
                                {formErrors.user_name}
                            </p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="hs-lastname-contacts-1"
                            className="sr-only"
                        >
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="hs_lastname_contacts_1"
                            id="hs-lastname-contacts-1"
                            value={formData.hs_lastname_contacts_1}
                            onChange={handleChange}
                            className={`py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${formErrors.hs_lastname_contacts_1 ? 'border-red-500' : ''
                                }`}
                            placeholder="Last Name"
                        />
                        {formErrors.hs_lastname_contacts_1 && (
                            <p className="text-red-500 text-sm mt-1">
                                {formErrors.hs_lastname_contacts_1}
                            </p>
                        )}
                    </div>
                </div>
                <div>
                    <label htmlFor="user_email" className="sr-only">
                        Email
                    </label>
                    <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        autoComplete="email"
                        className={`py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${formErrors.user_email ? 'border-red-500' : ''
                            }`}
                        placeholder="Email"
                        required
                    />
                    {formErrors.user_email && (
                        <p className="text-red-500 text-sm mt-1">
                            {formErrors.user_email}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="hs-phone-number-1" className="sr-only">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        name="hs_phone_number_1"
                        id="hs-phone-number-1"
                        value={formData.hs_phone_number_1}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Phone Number"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">
                        Details
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className={`py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 ${formErrors.message ? 'border-red-500' : ''
                            }`}
                        placeholder="Details"
                        required
                    />
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
                    Contact Me
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
                    We&lsquo;ll get back to you in 1-2 business days.
                </p>
            </div>
        </form>
    </div>
  )
}
