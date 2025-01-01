import ComingSoon from "../components/coming-soon/ComingSoon";

export default function BookingsPage() {
  return (
    <div>
      <ComingSoon />
    </div>
  )
}




// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import 'tailwindcss/tailwind.css';

// const BookingForm = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     eventType: '',
//     customEventType: '',
//     cateringType: '',
//     serviceType: [],
//     eventStyle: '',
//     guests: '',
//     date: '',
//     time: '',
//     name: '',
//     email: '',
//     phone: '',
//     venueCity: '',
//     venueState: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;
//     setFormData({
//       ...formData,
//       serviceType: checked
//         ? [...formData.serviceType, value]
//         : formData.serviceType.filter((item) => item !== value),
//     });
//   };

//   const handleNext = () => setStep((prevStep) => Math.min(prevStep + 1, 7));
//   const handleBack = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

//   const steps = [
//     'Event Type',
//     'Catering Type',
//     'Service Type',
//     'Guest Count',
//     'Date & Time',
//     'Venue Location',
//     'Review & Confirm',
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6">
//       <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 relative">
//         {/* Progress Bar */}
//         <div className="absolute top-0 left-0 w-full h-2 bg-gray-200 rounded-t-lg overflow-hidden">
//           <div
//             className="h-full bg-yellow-500 transition-all duration-300"
//             style={{ width: `${(step / steps.length) * 100}%` }}
//           ></div>
//         </div>

//         {/* Header */}
//         <div className="text-center mb-6">
//           <h2 className="text-3xl font-bold text-gray-800">Catering Service Booking</h2>
//           <p className="text-sm text-gray-500">Step {step} of {steps.length}: {steps[step - 1]}</p>
//         </div>

//         <motion.div
//           key={step}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           {/* Form Sections */}
//           {/* Example: Step 1 */}
//           {step === 1 && (
//             <div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">Select Event Type</h3>
//               <div className="space-y-4">
//                 {['Wedding', 'Birthday', 'Corporate', 'Other'].map((type) => (
//                   <label key={type} className="block text-gray-700">
//                     <input
//                       type="radio"
//                       name="eventType"
//                       value={type}
//                       onChange={handleChange}
//                       className="mr-2"
//                     />
//                     {type}
//                   </label>
//                 ))}
//                 {formData.eventType === 'Other' && (
//                   <input
//                     type="text"
//                     name="customEventType"
//                     value={formData.customEventType}
//                     onChange={handleChange}
//                     className="w-full p-2 border border-gray-300 rounded-md"
//                     placeholder="Enter custom event type"
//                   />
//                 )}
//               </div>
//             </div>
//           )}

//           {/* Add additional steps as per your requirement */}

//           {/* Navigation Buttons */}
//           <div className="mt-8 flex justify-between">
//             <button
//               onClick={handleBack}
//               disabled={step === 1}
//               className={`px-4 py-2 rounded-md text-white ${step === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'}`}
//             >
//               Back
//             </button>
//             <button
//               onClick={handleNext}
//               className="px-4 py-2 bg-yellow-500 text-gray-800 rounded-md hover:bg-yellow-600"
//             >
//               {step === 7 ? 'Confirm' : 'Next'}
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default BookingForm;
