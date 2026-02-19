"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar, Building2, Globe, Phone, Mail, MessageSquare, Clock, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

export default function AppointmentForm() {
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState('forward');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        // Parse the datetime-local input
        const dateTimeValue = data.datetime;
        if (dateTimeValue) {
            const selectedDate = new Date(dateTimeValue);
            data.date = selectedDate.toLocaleDateString('en-US');
            data.time = selectedDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            data.timezone = 'EST';
        }

        try {
            const response = await fetch("/api/appointment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Appointment booked successfully!");
                reset();
                setStep(1);
            } else {
                alert("Failed to send. Try again.");
            }
        } catch (error) {
            alert("Failed to send. Try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const nextStep = () => {
        setDirection('forward');
        setStep(step + 1);
    };

    const prevStep = () => {
        setDirection('backward');
        setStep(step - 1);
    };

    const getSlideClasses = () => {
        if (direction === 'forward') {
            return 'animate-slideInRight';
        } else {
            return 'animate-slideInLeft';
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(onSubmit)(e);
    };

    return (
        <div
            id="contact"
            className="min-h-screen flex items-center justify-center p-6"
            style={{
                background: 'linear-gradient(135deg, #001f3f 0%, #003d7a 100%)',
            }}
        >
            <style>{`
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(100px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-100px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }
                .animate-slideInRight {
                    animation: slideInRight 0.5s ease-out;
                }
                .animate-slideInLeft {
                    animation: slideInLeft 0.5s ease-out;
                }
                .animate-pulse-slow {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
                .input-focus {
                    transition: all 0.3s ease;
                }
                .input-focus:focus {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 16px rgba(245, 158, 11, 0.2);
                }
            `}</style>

            <div className="max-w-xl w-full bg-[#001a33]/80 backdrop-blur-xl shadow-2xl rounded-2xl border border-[#003d7a] overflow-hidden">

                {/* Progress Header */}
                <div className="bg-gradient-to-br from-[#001a33] via-[#001f3f] to-[#001a33] p-4 md:p-5 relative overflow-hidden border-b-2 border-[#0066cc]/30">
                    {/* Subtle Grid Pattern */}
                    <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: 'linear-gradient(rgba(0, 102, 204, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 204, 0.1) 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}></div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0066cc]/5 via-transparent to-[#0066cc]/5"></div>

                    <div className="relative z-10 text-center">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/20 border-2 border-amber-500/40 mb-2 backdrop-blur-sm">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/50"></div>
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-tight leading-tight">
                            {step === 1 && "Schedule Your Consultation"}
                            {step === 2 && "Tell Us About Your Project"}
                            {step === 3 && "Select Your Preferred Time"}
                        </h2>

                        <p className="text-[#a8c5e6] text-xs md:text-sm font-normal max-w-lg mx-auto leading-relaxed">
                            {step === 1 && "Please provide your contact information so we can reach out to you"}
                            {step === 2 && "Share details about your requirements and how we can assist you"}
                            {step === 3 && "Choose a convenient date and time for your appointment"}
                        </p>

                        {/* Progress Indicator */}
                        <div className="mt-2 flex items-center justify-center gap-2">
                            <div className="text-xs font-semibold text-amber-400">STEP {step} OF 3</div>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="bg-[#001a33]/50 px-3 md:px-6 py-3">
                    <div className="flex items-center justify-center">
                        {[1, 2, 3].map((s, index) => (
                            <div key={s} className="flex items-center">
                                <div className="flex flex-col items-center">
                                    <div className={`
                        w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm
                        transition-all duration-500 transform mb-2
                        ${step >= s
                                            ? 'bg-amber-500 text-white scale-110 shadow-lg shadow-amber-500/50'
                                            : 'bg-[#003d7a] text-[#a8c5e6] scale-100'}
                    `}>
                                        {step > s ? <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" /> : s}
                                    </div>
                                    <span className={`text-[10px] md:text-xs font-medium transition-colors whitespace-nowrap ${step >= s ? 'text-amber-400' : 'text-[#a8c5e6]'}`}>
                                        {index === 0 && 'Your Info'}
                                        {index === 1 && 'Requirements'}
                                        {index === 2 && 'Schedule'}
                                    </span>
                                </div>
                                {s < 3 && (
                                    <div className="w-12 md:w-20 h-1 mx-2 md:mx-3 mt-[-28px] bg-[#003d7a] rounded-full overflow-hidden">
                                        <div
                                            className={`h-full bg-amber-500 transition-all duration-500 ${step > s ? 'w-full' : 'w-0'}`}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Content */}
                <div className="p-5">

                    {step === 1 && (
                        <div className={getSlideClasses()}>
                            <div className="space-y-3">
                                <div className="group">
                                    <label className="flex items-center text-[#a8c5e6] text-sm font-medium mb-2 group-hover:text-amber-400 transition-colors">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        Full Name <span className="text-amber-500 ml-1">*</span>
                                    </label>
                                    <input
                                        {...register("name", { required: true })}
                                        className="input-focus border-2 border-[#003d7a] bg-[#001a33]/50 p-3 rounded-xl w-full text-white placeholder-[#a8c5e6]/50 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="text-red-400 text-xs mt-1 animate-pulse-slow">This field is required</p>}
                                </div>

                                <div className="group">
                                    <label className="flex items-center text-[#a8c5e6] text-sm font-medium mb-2 group-hover:text-amber-400 transition-colors">
                                        <Building2 className="w-4 h-4 mr-2" />
                                        Company Name
                                    </label>
                                    <input
                                        {...register("company")}
                                        className="input-focus border-2 border-[#003d7a] bg-[#001a33]/50 p-3 rounded-xl w-full text-white placeholder-[#a8c5e6]/50 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                                        placeholder="Your Company Inc."
                                    />
                                </div>

                                <div className="group">
                                    <label className="flex items-center text-[#a8c5e6] text-sm font-medium mb-2 group-hover:text-amber-400 transition-colors">
                                        <Globe className="w-4 h-4 mr-2" />
                                        Website
                                    </label>
                                    <input
                                        {...register("website")}
                                        className="input-focus border-2 border-[#003d7a] bg-[#001a33]/50 p-4 rounded-xl w-full text-white placeholder-[#a8c5e6]/50 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                                        placeholder="https://yourwebsite.com"
                                    />
                                </div>

                                <div className="group">
                                    <label className="flex items-center text-[#a8c5e6] text-sm font-medium mb-2 group-hover:text-amber-400 transition-colors">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Phone Number <span className="text-amber-500 ml-1">*</span>
                                    </label>
                                    <input
                                        {...register("phone", { required: true })}
                                        className="input-focus border-2 border-[#003d7a] bg-[#001a33]/50 p-4 rounded-xl w-full text-white placeholder-[#a8c5e6]/50 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                    {errors.phone && <p className="text-red-400 text-xs mt-1 animate-pulse-slow">This field is required</p>}
                                </div>

                                <div className="group">
                                    <label className="flex items-center text-[#a8c5e6] text-sm font-medium mb-2 group-hover:text-amber-400 transition-colors">
                                        <Mail className="w-4 h-4 mr-2" />
                                        Email Address <span className="text-amber-500 ml-1">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        {...register("email", { required: true })}
                                        className="input-focus border-2 border-[#003d7a] bg-[#001a33]/50 p-4 rounded-xl w-full text-white placeholder-[#a8c5e6]/50 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-red-400 text-xs mt-1 animate-pulse-slow">This field is required</p>}
                                </div>

                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-4 rounded-xl font-semibold text-lg
                                    hover:from-amber-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300
                                    shadow-lg hover:shadow-amber-500/50 flex items-center justify-center group"
                                >
                                    Continue
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className={getSlideClasses()}>
                            <div className="space-y-5">
                                <div className="group">
                                    <label className="flex items-center text-[#a8c5e6] text-sm font-medium mb-2 group-hover:text-amber-400 transition-colors">
                                        <MessageSquare className="w-4 h-4 mr-2" />
                                        What Can We Help You With? <span className="text-amber-500 ml-1">*</span>
                                    </label>
                                    <input
                                        {...register("need", { required: true })}
                                        className="input-focus border-2 border-[#003d7a] bg-[#001a33]/50 p-4 rounded-xl w-full text-white placeholder-[#a8c5e6]/50 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                                        placeholder="e.g., SEO Services, Web Development, Digital Marketing..."
                                    />
                                    {errors.need && <p className="text-red-400 text-xs mt-1 animate-pulse-slow">This field is required</p>}
                                </div>

                                <div className="group">
                                    <label className="flex items-center text-[#a8c5e6] text-sm font-medium mb-2 group-hover:text-amber-400 transition-colors">
                                        <MessageSquare className="w-4 h-4 mr-2" />
                                        Additional Details
                                    </label>
                                    <textarea
                                        {...register("comment")}
                                        className="input-focus border-2 border-[#003d7a] bg-[#001a33]/50 p-4 rounded-xl w-full text-white placeholder-[#a8c5e6]/50 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 min-h-32"
                                        placeholder="Tell us more about your project, goals, or any specific requirements..."
                                    />
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className="flex-1 bg-[#003d7a] text-white px-6 py-4 rounded-xl font-semibold
                                        hover:bg-[#004a94] transform hover:scale-105 transition-all duration-300
                                        flex items-center justify-center group"
                                    >
                                        <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                        Back
                                    </button>

                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-4 rounded-xl font-semibold
                                        hover:from-amber-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300
                                        shadow-lg hover:shadow-amber-500/50 flex items-center justify-center group"
                                    >
                                        Continue
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className={getSlideClasses()}>
                            <div className="space-y-5">
                                <div className="bg-[#001a33]/50 border border-[#003d7a] rounded-xl p-6 mb-6">
                                    <div className="flex items-start">
                                        <Clock className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-white font-semibold mb-2">Almost There!</h3>
                                            <p className="text-[#a8c5e6] text-sm mb-3">
                                                Select your preferred date and time. Our team will reach out to confirm your appointment.
                                            </p>
                                            <div className="bg-[#001f3f]/50 rounded-lg p-3 border border-[#003d7a]">
                                                <p className="text-amber-400 text-xs font-semibold mb-1">⏰ Business Hours</p>
                                                <p className="text-[#a8c5e6] text-xs">Monday - Friday | 7:00 AM - 4:00 PM (EST)</p>
                                                <p className="text-[#a8c5e6] text-xs mt-1 opacity-80">Please schedule your meeting within these hours</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="flex items-center text-[#a8c5e6] text-sm font-medium mb-2 group-hover:text-amber-400 transition-colors">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        Select Date & Time <span className="text-amber-500 ml-1">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="datetime-local"
                                            {...register("datetime", { required: true })}
                                            className="input-focus border-2 border-[#003d7a] bg-[#001a33]/50 p-4 rounded-xl w-full text-white focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20
                                            [&::-webkit-calendar-picker-indicator]:cursor-pointer
                                            [&::-webkit-calendar-picker-indicator]:opacity-100
                                            [&::-webkit-calendar-picker-indicator]:brightness-0
                                            [&::-webkit-calendar-picker-indicator]:invert
                                            [&::-webkit-calendar-picker-indicator]:hover:brightness-75
                                            [&::-webkit-calendar-picker-indicator]:transition-all"
                                        />
                                        <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a8c5e6] pointer-events-none" />
                                    </div>
                                    {errors.datetime && <p className="text-red-400 text-xs mt-1 animate-pulse-slow">Please select a date and time</p>}
                                </div>

                                <div className="bg-[#0066cc]/10 border border-[#0066cc]/30 rounded-xl p-4">
                                    <p className="text-[#00a8cc] text-sm flex items-center">
                                        <Clock className="w-4 h-4 mr-2" />
                                        Timezone is automatically set to US timezone (EST)
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        disabled={isSubmitting}
                                        className="flex-1 bg-[#003d7a] text-white px-6 py-4 rounded-xl font-semibold
                                        hover:bg-[#004a94] transform hover:scale-105 transition-all duration-300
                                        flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                        Back
                                    </button>

                                    <button
                                        onClick={handleSubmit(onSubmit)}
                                        disabled={isSubmitting}
                                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl font-semibold text-lg
                                        hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300
                                        shadow-lg hover:shadow-green-500/50 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                <CheckCircle2 className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                                                Book Appointment
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

                {/* Footer */}
                <div className="bg-[#001a33]/30 border-t border-[#003d7a] px-8 py-4">
                    <p className="text-[#a8c5e6] text-xs text-center">
                        🔒 Your information is secure and will never be shared with third parties
                    </p>
                </div>
            </div>
        </div>
    );
}