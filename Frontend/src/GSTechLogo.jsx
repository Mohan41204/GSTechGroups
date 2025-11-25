const GSLogo = ({ className = "" }) => {
  const s = {
    icon: "w-12 h-12",
    iconText: "text-lg",
    text: "text-2xl",
    subtext: "text-sm",
    space: "space-x-4",
  };

  return (
    <div className={`flex items-center ${s.space} ${className}`}>
      {/* Geometric Icon */}
      <div className="relative">
        <div
          className={`${s.icon} bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 
          rounded-lg shadow-lg flex items-center justify-center transform hover:scale-105 
          transition-transform`}
        >
          <span className={`text-white font-bold ${s.iconText} tracking-tight`}>
            GS
          </span>
        </div>

        {/* Tech accent dot */}
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 
        rounded-full border-2 border-white shadow-md"></div>
      </div>

      {/* Company Name */}
      <div className="flex flex-col leading-tight">
        <span className={`${s.text} font-bold text-gray-900 tracking-tight`}>
          GS Tech <span className="text-blue-600">Groups</span>
        </span>
        <span className={`${s.subtext} text-gray-500 font-medium tracking-wide`}>
          Enterprise Solutions
        </span>
      </div>
    </div>
  );
};

export default GSLogo;










