"use client";

interface ModalsProps {
  activeModal: string | null;
  closeModal: () => void;
}

export default function Modals({ activeModal, closeModal }: ModalsProps) {
  const assetPrefix = process.env.NODE_ENV === 'production' ? '/racinglinexgtlifestyle' : '';
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {/* Car Clubs Modal */}
      {activeModal === 'carClubs' && (
        <div 
          className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 sm:p-8 max-w-2xl xl:max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-2xl shadow-white/5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">Car Clubs</h2>
              <button
                onClick={closeModal}
                className="text-white/80 hover:text-white text-3xl transition-all duration-200 hover:scale-110 bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
              >
                ×
              </button>
            </div>
            <div className="space-y-4 text-white/90">
              <p className="text-lg text-white/95">Discover local car clubs and communities in your area.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Card 1 */}
                <div className="flex flex-col bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                  <div className="w-full h-32 bg-white/10 flex items-center justify-center">
                    <img
                      src={assetPrefix + "/images/clubs/autoworx.png"}
                      alt="Autoworx"
                      className="h-full object-contain"
                      onError={(e) => { (e.target as HTMLImageElement).src = assetPrefix + '/images/placeholder/image.svg'; }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between p-4">
                    <h3 className="text-xl font-semibold text-white mb-1 drop-shadow-sm">Autoworx</h3>
                    <p className="text-white/90">Premier racing community for performance enthusiasts</p>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="flex flex-col bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                  <div className="w-full h-32 bg-white/10 flex items-center justify-center">
                    <img
                      src={assetPrefix + "/images/clubs/SouthSHIFT.png"}
                      alt="SouthSHIFT"
                      className="h-full object-contain"
                      onError={(e) => { (e.target as HTMLImageElement).src = assetPrefix + '/images/placeholder/image.svg'; }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between p-4">
                    <h3 className="text-xl font-semibold text-white mb-1 drop-shadow-sm">SouthSHIFT</h3>
                    <p className="text-white/90">A Corolla Community of the South</p>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="flex flex-col bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                  <div className="w-full h-32 bg-white/10 flex items-center justify-center">
                    <img
                      src={assetPrefix + "/images/clubs/hondaboyz.png"}
                      alt="HondaBoyz"
                      className="h-full object-contain"
                      onError={(e) => { (e.target as HTMLImageElement).src = assetPrefix + '/images/placeholder/image.svg'; }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between p-4">
                    <h3 className="text-xl font-semibold text-white mb-1 drop-shadow-sm">HondaBoyz</h3>
                    <p className="text-white/90">Community of Honda Enthusiasts</p>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="flex flex-col bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                  <div className="w-full h-32 bg-white/10 flex items-center justify-center">
                    <img
                      src={assetPrefix + "/images/clubs/TVCGensan.png"}
                      alt="TVC Gensan"
                      className="h-full object-contain"
                      onError={(e) => { (e.target as HTMLImageElement).src = assetPrefix + '/images/placeholder/image.svg'; }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between p-4">
                    <h3 className="text-xl font-semibold text-white mb-1 drop-shadow-sm">TVC Gensan</h3>
                    <p className="text-white/90">A Toyota Vios Community in General Santos City</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
        </div>
      )}

      {/* Event Info Modal */}
      {activeModal === 'eventInfo' && (
        <div 
          className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 sm:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-white/5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">Event Information</h2>
              <button
                onClick={closeModal}
                className="text-white/80 hover:text-white text-3xl transition-all duration-200 hover:scale-110 bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
              >
                ×
              </button>
            </div>
            <div className="space-y-6 text-white/90">
              
              {/* ENEOS Event */}
                {/* Event Image */}
                <div className="mb-6">
                  <img 
                    src={assetPrefix + "/images/partners/EventPoster.jpg"} 
                    alt="ENEOS Regional Autocross Championships" 
                    className="w-full h-auto rounded-xl shadow-lg"
                    onError={(e) => { (e.target as HTMLImageElement).src = assetPrefix + '/images/placeholder/image.svg'; }}
                  />
                </div>
                
                {/* Event Title */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-sm">
                    ENEOS REGIONAL AUTOCROSS Championships
                  </h3>
                  <h4 className="text-xl sm:text-2xl font-semibold text-white/90 mb-2">
                    Visayas Mindanao Championships Round 1
                  </h4>
                  <p className="text-lg text-white/80">
                    GSC August 30-31, 2025
                  </p>
                </div>

                {/* Event Location */}
                <div className="text-center mb-6">
                  <p className="text-lg text-white/90 font-medium">
                    AVIA Estate Alabel, Sarangani Province
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Event Activities */}
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white text-center mb-4">Event Activities</h4>
                      <div className="flex justify-center">
                        <ul className="bg-white/10 p-4 rounded-xl border border-white/20 flex flex-col items-start list-disc list-inside text-white w-full">
                          <li className="text-lg font-semibold mb-2">CAR | TRUCK Show</li>
                          <li className="text-lg font-semibold mb-2">CAR Club Meet</li>
                          <li className="text-lg font-semibold mb-2">Fellowship Night</li>
                          <li className="text-lg font-semibold mb-2">Autocross Race</li>
                        </ul>
                      </div>
                    </div>
                    {/* Presenter */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h5 className="text-lg font-semibold text-white mb-3 text-center">Presented by:</h5>
                      <div className="bg-white/10 p-4 rounded-xl h-full content-center border border-white/20 text-center">
                        <h6 className="text-xl font-bold text-white mb-2">ENEOS Motor Oil</h6>
                        <p className="text-white/90 mb-1">Japan's No.1 Motor Oil Company</p>
                        <p className="text-white/90">ENEOS Philippines</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partners */}
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-white mb-3 text-center">Our Partners:</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white/10 p-3 rounded-xl border border-white/20 flex items-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3 overflow-hidden">
                        {/* Avatar Placeholder with src */}
                        <img
                          src={assetPrefix + "/images/partners/AVIA.jpg"}
                          alt="AVIA Estates Logo"
                          className="w-10 h-10 object-cover rounded-full"
                          onError={(e) => { (e.target as HTMLImageElement).src = assetPrefix + '/images/placeholder/avatar.svg'; }}
                        />
                      </div>
                      <p className="text-white/90 font-medium text-left">AVIA Estates</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded-xl border border-white/20 flex items-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3 overflow-hidden">
                        {/* Avatar Placeholder with src */}
                        <img
                          src={assetPrefix + "/images/partners/Alsons.jpg"}
                          alt="Alsons Development & Investment Corp Logo"
                          className="w-10 h-10 object-cover rounded-full"
                          onError={(e) => { (e.target as HTMLImageElement).src = assetPrefix + '/images/placeholder/avatar.svg'; }}
                        />
                      </div>
                      <p className="text-white/90 font-medium text-left">Alsons Development & Investment Corp</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded-xl border border-white/20 flex items-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-3 overflow-hidden">
                        {/* Avatar Placeholder with src */}
                        <img
                          src={assetPrefix + "/images/partners/ImprintCustoms.jpg"}
                          alt="Imprints Custom Logo"
                          className="w-10 h-10 object-cover rounded-full"
                          onError={(e) => { (e.target as HTMLImageElement).src = assetPrefix + '/images/placeholder/avatar.svg'; }}
                        />
                      </div>
                      <p className="text-white/90 font-medium text-left">Imprints Custom</p>
                    </div>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="text-center">
                  <p className="text-sm text-white/70 italic">
                    The 2025 Eneos Regional Autocross championships is an affiliate of the Philippine Racing Industry Awards.
                  </p>
                </div>
              </div>
            </div>
          </div>
      )}

      {/* Sponsors Modal */}
      {activeModal === 'sponsors' && (
        <div 
          className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl shadow-white/5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">Sponsors</h2>
              <button
                onClick={closeModal}
                className="text-white/80 hover:text-white text-3xl transition-all duration-200 hover:scale-110 bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
              >
                ×
              </button>
            </div>
            <div className="space-y-4 text-white/90">
              <p className="text-lg text-white/95">Meet our amazing sponsors who make these events possible.</p>
              <div className="grid gap-4">
                <div className="bg-white/15 backdrop-blur-sm p-5 rounded-2xl border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-sm">Performance Plus</h3>
                  <p className="text-white/90">Premium automotive performance parts and accessories</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm p-5 rounded-2xl border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-sm">Racing Dynamics</h3>
                  <p className="text-white/90">Advanced racing technology and engineering solutions</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm p-5 rounded-2xl border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-sm">GT Motorsports</h3>
                  <p className="text-white/90">Luxury automotive lifestyle and performance enhancement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
