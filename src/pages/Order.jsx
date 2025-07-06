import  { useState } from 'react';
import { FaRecycle, FaUserCircle, FaMapMarkerAlt, FaTrashAlt, FaEdit, FaArrowRight, FaLeaf, FaAward, FaBolt } from 'react-icons/fa';

export default function Order() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    quantity: 'small',
    weight: '',
    instructions: '',
    wasteTypes: [],
  });

  const [step, setStep] = useState(1);

  const handleCheckboxChange = (value) => {
    setFormData((prev) => {
      const updated = prev.wasteTypes.includes(value)
        ? prev.wasteTypes.filter((v) => v !== value)
        : [...prev.wasteTypes, value];
      return { ...prev, wasteTypes: updated };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, address, wasteTypes } = formData;
    if (!name || !phone || !address || wasteTypes.length === 0) {
      alert('Please fill in all required fields and select at least one waste type.');
      return;
    }

    console.log('Form submitted:', formData);
    setStep(2); // Simulasi ganti step
    alert('Form validated successfully! Next step would be scheduling pickup.');
  };

  const stepClass = (index) =>
    index < step
      ? 'bg-sky-500 text-white'
      : 'bg-gray-200 text-gray-500';

  const labelClass = (index) =>
    index < step
      ? 'text-gray-600'
      : 'text-gray-400';

  return (
    <div className="gradient-bg min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-green-50 rounded-full mb-4">
            <FaRecycle className="text-4xl text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Schedule Your Waste Pickup</h1>
          <p className="text-gray-600">Help us make the planet cleaner by recycling your waste properly</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-8 relative">
          <div className="flex-1 h-1 bg-gray-200 absolute top-1/2 left-0 -translate-y-1/2 z-0"></div>
          {['Details', 'Schedule', 'Payment', 'Confirm'].map((label, i) => (
            <div key={i} className="step flex flex-col items-center relative z-10">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${stepClass(i + 1)}`}>{i + 1}</div>
              <span className={`text-xs mt-2 ${labelClass(i + 1)}`}>{label}</span>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Waste Collection Details</h2>

          {/* Contact Info */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4 flex items-center">
              <FaUserCircle className="text-sky-500 mr-2" /> Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="input-style" placeholder="Full Name" name="name" value={formData.name} onChange={handleChange} required />
              <input className="input-style" placeholder="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
              <input className="input-style md:col-span-2" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} />
            </div>
          </div>

          {/* Address */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4 flex items-center">
              <FaMapMarkerAlt className="text-sky-500 mr-2" /> Pickup Address
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="input-style md:col-span-2" placeholder="Street Address" name="address" value={formData.address} onChange={handleChange} required />
              <input className="input-style" placeholder="City" name="city" value={formData.city} onChange={handleChange} required />
              <input className="input-style" placeholder="ZIP Code" name="zip" value={formData.zip} onChange={handleChange} required />
            </div>
          </div>

          {/* Waste Details */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4 flex items-center">
              <FaTrashAlt className="text-sky-500 mr-2" /> Waste Details
            </h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Waste Type</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Paper', 'Plastic', 'Glass', 'Metal', 'Organic', 'E-Waste', 'Hazardous', 'Other'].map((type) => (
                  <label key={type} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      value={type.toLowerCase()}
                      checked={formData.wasteTypes.includes(type.toLowerCase())}
                      onChange={() => handleCheckboxChange(type.toLowerCase())}
                      className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                    />
                    <span className="text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select name="quantity" value={formData.quantity} onChange={handleChange} className="input-style">
                <option value="small">Small (1-2 bags)</option>
                <option value="medium">Medium (3-5 bags)</option>
                <option value="large">Large (6-10 bags)</option>
                <option value="xlarge">Extra Large (10+ bags)</option>
              </select>
              <input type="number" name="weight" value={formData.weight} onChange={handleChange} className="input-style" placeholder="Weight (kg)" min="1" />
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4 flex items-center">
              <FaEdit className="text-sky-500 mr-2" /> Special Instructions
            </h3>
            <textarea
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Any special instructions?"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md transition duration-300 flex items-center">
              Continue to Schedule <FaArrowRight className="ml-2" />
            </button>
          </div>
        </form>

        {/* Benefits */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Why Recycle With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: <FaLeaf className="text-green-600" />, title: 'Eco-Friendly', desc: 'We ensure all collected waste is properly recycled to minimize environmental impact.' },
              { icon: <FaAward className="text-sky-600" />, title: 'Certified Process', desc: 'Our recycling facilities meet all government standards and certifications.' },
              { icon: <FaBolt className="text-green-600" />, title: 'Quick Service', desc: 'Schedule pickups as soon as tomorrow with our efficient collection system.' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-3">{item.icon}</div>
                <div>
                  <h3 className="font-medium text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export const inputStyle = "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none";
