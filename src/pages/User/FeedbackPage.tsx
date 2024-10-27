import React from "react";
import { toast } from "sonner";

const FeedbackPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-md border border-gray-200 mt-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">We Value Your Feedback</h2>
      <p className="text-gray-600 text-center mb-8">
        Please let us know about your experience or any suggestions you have to help us improve.
      </p>
      
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
            Your Feedback
          </label>
          <textarea
            id="feedback"
            rows={5}
            placeholder="Please share your thoughts or suggestions here..."
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>

        <div className="space-y-2">
          <span className="block text-sm font-medium text-gray-700">
            How would you rate your experience?
          </span>
          <div className="flex items-center space-x-3">
            {["1", "2", "3", "4", "5"].map((rating) => (
              <label key={rating} className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="rating"
                  value={rating}
                  className="form-radio text-blue-600"
                />
                <span>{rating}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              toast.success("Thank you for your feedback!")
            }}
            className="inline-flex items-center px-6 py-2 bg-black border border-transparent rounded-md font-semibold text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackPage;
