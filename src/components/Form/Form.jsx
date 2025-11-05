import React, { useState, useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';
// Import Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAMHi6nxri7aQek2m1QWYLtqkYZ1NM4VsU",
  authDomain: "justicepoint-dca66.firebaseapp.com",
  projectId: "justicepoint-dca66",
  storageBucket: "justicepoint-dca66.firebasestorage.app",
  messagingSenderId: "983502266259",
  appId: "1:983502266259:web:6e98412e1b3723e7c01266",
  measurementId: "G-X7L6EJKWN2"
};

const ConsultationModal = ({ show, onClose }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFirebaseReady, setIsFirebaseReady] = useState(false);
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        phone: '', 
        message: '' 
    });
    
    // Firebase state
    const [db, setDb] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
    const initializeFirebase = async () => {
        try {
            
            // Initialize Firebase app
            const app = initializeApp(firebaseConfig);
            
            // Initialize Firestore
            const firestoreDb = getFirestore(app);
            setDb(firestoreDb);
            
            // Skip authentication for now
            setUserId('demo-user-' + Date.now());
            setIsFirebaseReady(true);
            
        } catch (error) {
            console.error("❌ Firebase initialization failed:", error);
            setIsFirebaseReady(false);
        }
    };

    if (show) {
        initializeFirebase();
    }
}, [show]);




    if (!show) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!isFirebaseReady || !db || !userId) {
            alert("The connection to the database is not ready. Please try again in a moment.");
            return;
        }

        setIsSubmitting(true);
        
        try {
            // Save to Firestore
            const docRef = await addDoc(collection(db, 'JusticePoint'), {
                ...formData,
                timestamp: new Date().toISOString(),
                status: 'New Request',
                userId: userId // Store user ID for reference
            });
            setIsSubmitted(true);
            
        } catch (error) {
            alert("There was an error submitting your request. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        // Reset modal state when closed
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
        onClose();
    };

    return (
        <div 
            className="fixed inset-0 bg-gray-900 bg-opacity-75 z-[100] flex items-center justify-center p-4 transition-opacity duration-300"
            onClick={handleClose}
        >
            <div 
                className="bg-white rounded-xl p-8 w-full max-w-lg shadow-2xl transform transition-all duration-300 scale-100"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-start mb-6 border-b pb-3">
                    <h2 className="text-2xl font-bold text-gray-900">
                        {isSubmitted ? 'Request Sent!' : 'Schedule Your Free Consultation'}
                    </h2>
                    <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {isSubmitted ? (
                    // Success Message View
                    <div className="flex flex-col items-center justify-center text-center py-10">
                        <CheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
                        <p className="text-xl font-semibold text-gray-800 mb-2">Thank You, {formData.name || 'Client'}!</p>
                        <p className="text-gray-600">We have received your request. A member of our legal team will contact you within one business day via email or phone to arrange your meeting.</p>
                        <button
                            onClick={handleClose}
                            className="mt-6 px-6 py-2 text-md font-semibold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition duration-300"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    // Form View
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <p className="text-gray-600">Please provide your details and a brief summary of your legal matter.</p>
                        
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                                placeholder="john.doe@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                                placeholder="(555) 123-4567"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Case Summary (Briefly)</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="3"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                                placeholder="I need assistance with..."
                            ></textarea>
                        </div>
                        
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting || !isFirebaseReady}
                                className="w-full px-4 py-3 text-lg font-semibold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Request'}
                            </button>
                            {!isFirebaseReady && (
                                <p className="text-sm text-gray-500 mt-2 text-center">
                                    Initializing connection...
                                </p>
                            )}
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ConsultationModal;