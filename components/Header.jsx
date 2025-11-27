"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    city: "",
    startupType: "",
    terms: false,
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (mobileOpen || contactFormOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen, contactFormOpen]);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "AI Advantage", href: "#ai-advantage" },
    { name: "FAQs", href: "#faqs" },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!phoneRegex.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = "Mobile number must be 10 digits";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.startupType) {
      newErrors.startupType = "Startup type is required";
    }

    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      setIsLoading(true);

      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.mobileNumber,
        startupStage: formData.startupType,
        city: formData.city,
      };

      try {
        const res = await fetch(
          "https://development4.promena.in/api/v1/contact",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await res.json();

        if (res.ok) {
          setTimeout(() => {
            setContactFormOpen(false);
            setFormData({
              fullName: "",
              mobileNumber: "",
              email: "",
              city: "",
              startupType: "",
              terms: false,
            });
            setIsLoading(false);
            setSubmitted(false);
          }, 2000);
        } else {
          setIsLoading(false);
          setSubmitted(false);
        }
      } catch (error) {
        setIsLoading(false);
        setSubmitted(false);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-purple-100"
            : "bg-gradient-to-r from-purple-50/50 via-pink-50/50 to-blue-50/50 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100]">
              <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
            </div>
          )}

          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo with animation */}
            <a href="/" className="flex items-center gap-2 shrink-0 z-50 group">
              <div className="relative">
                <img
                  src="/newlogo.png"
                  alt="StartUp Builder"
                  className="h-8 sm:h-10 lg:h-[60px] w-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>

            {/* Desktop Nav with gradient hover effects */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 overflow-hidden group"
                >
                  {/* Text */}
                  <span className="relative z-10 transition duration-300 group-hover:text-white">
                    {link.name}
                  </span>

                  {/* Wave reveal background */}
                  <span
                    className="absolute inset-0 translate-y-full group-hover:translate-y-0 
               bg-gradient-to-r from-purple-600 to-pink-600 
               transition-transform duration-500 ease-out 
               rounded-t-[30px]"
                  ></span>
                </a>
              ))}
            </nav>

            {/* Desktop Buttons with gradient effects */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setContactFormOpen(true)}
                className="relative px-6 py-2.5 text-sm font-semibold text-white rounded-full overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={16} className="animate-pulse" />
                  Contact Us
                </span>
                <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Toggle with animation */}
            <button
              className="lg:hidden p-2 text-gray-900 hover:bg-purple-100 rounded-lg transition-all duration-300 z-50 relative group"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {mobileOpen ? (
                <X
                  size={24}
                  className="relative z-10 transition-transform duration-300 rotate-90"
                />
              ) : (
                <Menu
                  size={24}
                  className="relative z-10 transition-transform duration-300"
                />
              )}
            </button>
          </div>
        </div>

        {/* Animated bottom gradient line */}
        <div
          className={`h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-full w-1/3 bg-white/50 animate-shimmer"></div>
        </div>
      </header>

      {/* Mobile Menu with gradient background */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-fadeIn"
            onClick={() => setMobileOpen(false)}
          />

          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 shadow-2xl z-50 lg:hidden overflow-y-auto animate-slideInRight">
            <div className="flex flex-col h-full">
              <div className="px-6 pt-20 pb-6 border-b border-purple-200 flex items-center justify-between">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Menu
                </h2>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-100 rounded-lg transition-all duration-300"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1 px-6 py-8">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between px-4 py-4 text-lg font-medium text-gray-700 hover:text-purple-600 bg-white/50 hover:bg-white rounded-lg transition-all duration-300 group animate-slideInRight"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <span>{link.name}</span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </nav>

              <div className="px-6 py-6 border-t border-purple-200 space-y-3 bg-white/30 backdrop-blur-sm">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setContactFormOpen(true);
                  }}
                  className="block w-full px-6 py-3.5 rounded-lg text-center font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Contact Form with gradient theme */}
      {contactFormOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 animate-fadeIn"
            onClick={() => setContactFormOpen(false)}
          />

          <div className="fixed top-0 right-0 bottom-0 w-full max-w-2xl bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 shadow-2xl z-50 overflow-y-auto animate-slideInRight">
            <div className="relative min-h-screen flex flex-col">
              {/* Header with gradient */}
              <div className="relative px-6 sm:px-8 pt-8 pb-6 border-b border-purple-200 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src="/StartUp_Builder_Logo.png"
                      alt="StartUp Builder"
                      className="h-10 sm:h-12 w-auto object-contain"
                    />
                  </div>

                  <button
                    onClick={() => setContactFormOpen(false)}
                    className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-100 rounded-lg transition-all duration-300"
                    aria-label="Close form"
                  >
                    <X size={24} />
                  </button>
                </div>

                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Get In Touch
                </h1>
                <p className="text-gray-600 mt-2">
                  We'd love to hear from you. Send us a message!
                </p>
              </div>

              {/* Form Content */}
              <div className="relative flex-1 px-6 sm:px-8 py-8">
                {!submitted ? (
                  <div className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none bg-white ${
                          errors.fullName
                            ? "border-red-500 focus:border-red-600"
                            : "border-purple-200 focus:border-purple-500"
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email ID <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none bg-white ${
                          errors.email
                            ? "border-red-500 focus:border-red-600"
                            : "border-purple-200 focus:border-purple-500"
                        }`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none bg-white ${
                          errors.mobileNumber
                            ? "border-red-500 focus:border-red-600"
                            : "border-purple-200 focus:border-purple-500"
                        }`}
                        placeholder="Enter your phone number"
                      />
                      {errors.mobileNumber && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.mobileNumber}
                        </p>
                      )}
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none bg-white ${
                          errors.city
                            ? "border-red-500 focus:border-red-600"
                            : "border-purple-200 focus:border-purple-500"
                        }`}
                        placeholder="Enter your city"
                      />
                      {errors.city && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.city}
                        </p>
                      )}
                    </div>

                    {/* Startup Type */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Startup Type <span className="text-red-500">*</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 text-left flex items-center justify-between bg-white ${
                          errors.startupType
                            ? "border-red-500"
                            : "border-purple-200 focus:border-purple-500"
                        }`}
                      >
                        <span
                          className={
                            formData.startupType
                              ? "text-gray-900"
                              : "text-gray-400"
                          }
                        >
                          {formData.startupType || "Select your startup stage"}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${
                            dropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {dropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-purple-200 rounded-lg shadow-lg z-10 overflow-hidden">
                          {["Ideation Stage", "Startup", "Growth"].map(
                            (option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => {
                                  setFormData({
                                    ...formData,
                                    startupType: option,
                                  });
                                  setDropdownOpen(false);
                                  if (errors.startupType) {
                                    setErrors({ ...errors, startupType: "" });
                                  }
                                }}
                                className={`w-full px-4 py-3 text-left transition-all duration-200 ${
                                  formData.startupType === option
                                    ? "bg-gradient-to-r from-purple-100 to-pink-100 font-semibold text-purple-700"
                                    : "hover:bg-purple-50 text-gray-700"
                                }`}
                              >
                                {option}
                              </button>
                            )
                          )}
                        </div>
                      )}

                      {errors.startupType && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.startupType}
                        </p>
                      )}
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="terms"
                        id="terms"
                        checked={formData.terms}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 rounded cursor-pointer accent-purple-600"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the terms and conditions and privacy policy *
                      </label>
                    </div>
                    {errors.terms && (
                      <p className="text-red-500 text-sm -mt-2">
                        {errors.terms}
                      </p>
                    )}

                    {/* Submit Button */}
                    <button
                      onClick={handleSubmit}
                      className="w-full mt-2 px-6 py-3.5 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg transition-all duration-300 active:scale-95"
                    >
                      Send Message
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-96">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Thank You!
                      </h2>
                      <p className="text-gray-600 mt-2">
                        We've received your message. We'll get back to you soon.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </>
  );
}
