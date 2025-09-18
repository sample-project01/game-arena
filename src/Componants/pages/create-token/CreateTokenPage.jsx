import React, { useState } from 'react';

const CreateTokenPage = () => {
    const adminToken = localStorage.getItem("token");
    if(!adminToken){
        return window.location.href = "/";
    }
  const [roomId, setRoomId] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const [result2, setResult2] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Sample text processing function - replace with your actual logic

  const handleSubmit = (e) => {
    setIsProcessing(true)
    console.log("clicked")
    e.preventDefault();

   
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const resetForm = () => {
    setResult('');
    setShowResult(false);
    setCopySuccess(false);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center'>
      <div className='absolute inset-0 bg-black/20'></div>
      
      <div className='relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6'>
        
        {/* Main Card */}
        <div className='bg-white/10 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-2xl'>
          
          {/* Header */}
          <div className='text-center mb-6 sm:mb-8'>
            <div className='flex justify-center items-center gap-2 mb-4'>
              <span className='text-3xl sm:text-4xl'>⚡</span>
              <h1 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent'>
                Text Processor
              </h1>
              <span className='text-3xl sm:text-4xl'>🔧</span>
            </div>
            <p className='text-gray-300 text-sm sm:text-base lg:text-lg'>
              Enter your text in both fields to process and transform them
            </p>
          </div>

          {/* Input Form */}
          {!showResult && (
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* First Input */}
              <div className='space-y-2'>
                <label className='block text-white font-semibold text-sm sm:text-base'>
                  🎮 Room ID
                </label>
                <input 
                type='text'
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  placeholder="Enter your first text here..."
                  className='w-full h-24 sm:h-32 px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 resize-none'
                  required
                />
                <div className='text-right text-xs text-gray-400'>
                  {roomId.length} characters
                </div>
              </div>

              {/* Second Input */}
              <div className='space-y-2'>
                <label className='block text-white font-semibold text-sm sm:text-base'>
                  🎯 Password
                </label>
                <input 
                type='text'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your second text here..."
                  className='w-full h-24 sm:h-32 px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 resize-none'
                  required
                />
                <div className='text-right text-xs text-gray-400'>
                  {password.length} characters
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!roomId.trim() || !password.trim() || isProcessing}
                className='w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-red-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2'
              >
                {isProcessing ? (
                  <>
                    <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <span>🚀</span>
                    Submit
                  </>
                )}
              </button>
            </form>
          )}

          {/* Result Display */}
          {showResult && (
            <div className='space-y-6'>
              <div className='space-y-3'>
                <div className='flex items-center justify-between'>
                  <label className='block text-white font-semibold text-sm sm:text-base'>
                    ✅ Processed Result
                  </label>
                  <div className='text-xs text-gray-400'>
                    {result.length} characters
                  </div>
                </div>
                <div className='relative'>
                  <textarea
                    value={result1}
                    readOnly
                    className='w-full h-48 sm:h-56 px-4 py-3 bg-black/30 border border-green-500/30 rounded-xl text-green-200 resize-none focus:outline-none'
                  />
                  <textarea
                    value={result2}
                    readOnly
                    className='w-full h-48 sm:h-56 px-4 py-3 bg-black/30 border border-green-500/30 rounded-xl text-green-200 resize-none focus:outline-none'
                  />
                  <div className='absolute top-3 right-3'>
                    <span className='text-green-400 text-xl'>✨</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex flex-col sm:flex-row gap-4'>
                <button
                  onClick={copyToClipboard}
                  className='flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-emerald-600 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2'
                >
                  {copySuccess ? (
                    <>
                      <span>✅</span>
                      Copied!
                    </>
                  ) : (
                    <>
                      <span>📋</span>
                      Copy Result
                    </>
                  )}
                </button>
                <button
                  onClick={resetForm}
                  className='flex-1 bg-white/10 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-xl border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2'
                >
                  <span>🔄</span>
                  Process New Text
                </button>
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className='mt-6 sm:mt-8 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30'>
            <h3 className='text-blue-200 font-semibold mb-2 text-sm sm:text-base'>
              💡 How it works:
            </h3>
            <ul className='text-blue-100 text-xs sm:text-sm space-y-1'>
              <li>• Enter text in both input fields</li>
              <li>• Click "Process Text" to transform your inputs</li>
              <li>• View the processed result with various operations</li>
              <li>• Copy the result or process new text</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTokenPage;