'use client'

// SVG Icons Components
const AndroidIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10z"/>
  </svg>
)

const AppleIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
)

const FirestickIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="6" width="20" height="12" rx="2"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
)

const TvIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="20" height="15" x="2" y="7" rx="2" ry="2"/>
    <polyline points="17,2 12,7 7,2"/>
  </svg>
)

const MagBoxIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="8" width="20" height="8" rx="2"/>
    <circle cx="8" cy="12" r="1"/>
    <circle cx="16" cy="12" r="1"/>
  </svg>
)

const DesktopIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="18" height="11" x="3" y="4" rx="2" ry="2"/>
    <path d="M8 21h8"/>
    <path d="M12 17v4"/>
  </svg>
)

const CheckIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20,6 9,17 4,12"/>
  </svg>
)

const DownloadIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" x2="12" y1="15" y2="3"/>
  </svg>
)

const PlayIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="5,3 19,12 5,21"/>
  </svg>
)

const SettingsIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const SupportIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
)

const devices = [
  { id: 'android', name: 'Android Devices', icon: AndroidIcon, description: 'TiviMate - Best app', color: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200' },
  { id: 'ios', name: 'iOS Devices', icon: AppleIcon, description: 'IPTV Smarters Pro - Perfect', color: 'text-gray-700', bgColor: 'bg-gray-50', borderColor: 'border-gray-200' },
  { id: 'firestick', name: 'Amazon Firestick', icon: FirestickIcon, description: 'Sideload apps', color: 'text-orange-600', bgColor: 'bg-orange-50', borderColor: 'border-orange-200' },
  { id: 'smarttv', name: 'Smart TV', icon: TvIcon, description: 'Samsung & LG TVs', color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
  { id: 'magbox', name: 'MAG Box', icon: MagBoxIcon, description: 'Portal configuration', color: 'text-purple-600', bgColor: 'bg-purple-50', borderColor: 'border-purple-200' },
  { id: 'desktop', name: 'PC & Mac', icon: DesktopIcon, description: 'IPTV Smarters or VLC', color: 'text-indigo-600', bgColor: 'bg-indigo-50', borderColor: 'border-indigo-200' }
]

export default function SetupGuide() {
  
  const renderSteps = (deviceId: string) => {
    const steps = {
      android: [
        { icon: DownloadIcon, title: 'Download TiviMate App', desc: 'Download and install the TiviMate app from the Google Play Store.' },
        { icon: PlayIcon, title: 'Open TiviMate', desc: 'Open the TiviMate app and select "Add Playlist".' },
        { icon: SettingsIcon, title: 'Choose Xtream Codes', desc: 'Choose the "Xtream codes" option.' },
        { icon: CheckIcon, title: 'Enter Your Details', desc: 'Enter your username, password, and server URL that you received via email from IPTV Satlink.' },
        { icon: CheckIcon, title: 'Finish Setup', desc: 'Click on "Next" and then "Finish".' },
        { icon: PlayIcon, title: 'Start Streaming', desc: 'Enjoy thousands of channels and VOD content!' }
      ],
      ios: [
        { icon: DownloadIcon, title: 'Download IPTV Smarters Pro', desc: 'Download and install the IPTV Smarters Pro app from the App Store.' },
        { icon: PlayIcon, title: 'Open IPTV Smarters Pro', desc: 'Open the IPTV Smarters Pro app.' },
        { icon: SettingsIcon, title: 'Add User', desc: 'Select "Add User" option.' },
        { icon: CheckIcon, title: 'Enter Your Details', desc: 'Enter your username, password, and server URL that you received via email from IPTV Satlink.' },
        { icon: CheckIcon, title: 'Add Account', desc: 'Click on "Add".' },
        { icon: PlayIcon, title: 'Start Streaming', desc: 'Enjoy thousands of channels and VOD content!' }
      ],
      firestick: [
        { icon: SettingsIcon, title: 'Search for Downloader', desc: 'From the Firestick home screen, find and select the "Search" option.' },
        { icon: DownloadIcon, title: 'Install Downloader App', desc: 'Search for the "Downloader" app and install it.' },
        { icon: SupportIcon, title: 'Contact Support', desc: 'Open the Downloader app and contact IPTV Satlink support for the latest APK download link.' },
        { icon: DownloadIcon, title: 'Download IPTV App', desc: 'Download and install the recommended IPTV app.' },
        { icon: PlayIcon, title: 'Add Playlist', desc: 'Open the IPTV app and follow the on-screen instructions to add your playlist.' },
        { icon: CheckIcon, title: 'Enter Details', desc: 'Enter your username, password, and server URL that you received via email from IPTV Satlink.' },
        { icon: PlayIcon, title: 'Start Streaming', desc: 'Enjoy thousands of channels and VOD content!' }
      ],
      smarttv: [
        { icon: TvIcon, title: 'Open App Store', desc: 'From your TV home screen, find and open the app store (Samsung: Galaxy Store, LG: Content Store).' },
        { icon: DownloadIcon, title: 'Search & Install', desc: 'Search for "IPTV Smarters" app and install it.' },
        { icon: PlayIcon, title: 'Open App', desc: 'Open the app and select "Add User" option.' },
        { icon: CheckIcon, title: 'Enter Credentials', desc: 'Enter your username, password, and server URL that you received via email from IPTV Satlink.' },
        { icon: CheckIcon, title: 'Add Account', desc: 'Click on "Add".' },
        { icon: PlayIcon, title: 'Start Streaming', desc: 'Enjoy thousands of channels and VOD content!' }
      ],
      magbox: [
        { icon: SettingsIcon, title: 'Access Settings', desc: 'Turn on your MAG Box and go to the "Settings" menu.' },
        { icon: SettingsIcon, title: 'System Settings', desc: 'Select "System Settings".' },
        { icon: SettingsIcon, title: 'Server Settings', desc: 'Select "Server Settings".' },
        { icon: CheckIcon, title: 'Enter Portal URL', desc: 'Enter the portal URL that you received via email from IPTV Satlink.' },
        { icon: CheckIcon, title: 'Save & Restart', desc: 'Save the settings and restart the device.' },
        { icon: PlayIcon, title: 'Start Streaming', desc: 'Enjoy thousands of channels and VOD content!' }
      ],
      desktop: [
        { icon: DownloadIcon, title: 'Download IPTV Smarters', desc: 'Download and install IPTV Smarters from https://iptvsmarterpro.app/' },
        { icon: PlayIcon, title: 'Open IPTV Smarters', desc: 'Open IPTV Smarters and select "Add User" option.' },
        { icon: CheckIcon, title: 'Enter Details', desc: 'Enter your username, password, and server URL that you received via email from IPTV Satlink.' },
        { icon: CheckIcon, title: 'Add Account', desc: 'Click on "Add".' },
        { icon: DesktopIcon, title: 'Mac Alternative', desc: 'For Mac, you can use VLC Media Player or IPTV Smarters if available.' },
        { icon: PlayIcon, title: 'Start Streaming', desc: 'Enjoy thousands of channels and VOD content!' }
      ]
    }

    const deviceSteps = steps[deviceId] || []

    return (
      <div className="space-y-6">
        {deviceSteps.map((step, index) => {
          const IconComponent = step.icon
          return (
            <div key={index} className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold">{index + 1}</div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <IconComponent />
                  <h4 className="font-medium text-gray-800 text-sm">{step.title}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          )
        })}
        {deviceId === 'firestick' && (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-6">
            <h4 className="font-semibold text-orange-800 mb-2">Alternative Apps:</h4>
            <p className="text-orange-800 text-sm">TiviMate, IPTV Smarters Pro, or other recommended apps are available. Contact our support team for the latest download links and installation assistance.</p>
          </div>
        )}
        {deviceId === 'smarttv' && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800 text-sm">For Samsung and LG TVs, we recommend using IPTV Smarters for easy setup.</p>
          </div>
        )}
        {deviceId === 'desktop' && (
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-6">
            <p className="text-indigo-800 text-sm">For Windows, we recommend using IPTV Smarters.</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Complete IPTV Setup Guide</h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">Simple step-by-step instructions for setting up IPTV Satlink service on different devices. Stream 25,000+ channels and 26,000+ movies with ease.</p>
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center space-x-2"><CheckIcon /><span>99.9% Uptime</span></div>
          <div className="flex items-center space-x-2"><SupportIcon /><span>24/7 Support</span></div>
          <div className="flex items-center space-x-2"><CheckIcon /><span>Easy Setup</span></div>
          <div className="flex items-center space-x-2"><CheckIcon /><span>Money Back Guarantee</span></div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Setup Guide for All Devices</h2>
        <div className="space-y-8">
          {devices.map((device) => {
            const Icon = device.icon
            return (
              <div key={device.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className={`p-6 ${device.bgColor} border-b border-gray-200`}>
                  <div className="flex items-center space-x-4">
                    <div className={`inline-flex p-3 rounded-lg bg-white ${device.color}`}>
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{device.name}</h3>
                      <p className="text-gray-600">{device.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  {renderSteps(device.id)}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-16 bg-gradient-hero rounded-2xl p-8 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need Help with Setup?</h2>
          <p className="text-lg mb-8 opacity-90">If you have any questions about the setup process or need further assistance, please contact our customer support team. We're here to help you get started with IPTV Satlink and ensure you have the best streaming experience.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.link/byh2yk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.934 3.79"/></svg>
              Contact Support
            </a>
            <a href="/free-trial" className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors">Get Free Trial</a>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Choose IPTV Satlink?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4"><TvIcon /></div>
            <h3 className="font-semibold text-gray-900 mb-2">25,000+ Live Channels</h3>
            <p className="text-gray-600">Access thousands of premium channels from around the world in HD and 4K quality.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4"><PlayIcon /></div>
            <h3 className="font-semibold text-gray-900 mb-2">26,000+ Movies & Shows</h3>
            <p className="text-gray-600">Enjoy the latest movies and TV shows with our extensive VOD library.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4"><SupportIcon /></div>
            <h3 className="font-semibold text-gray-900 mb-2">24/7 Expert Support</h3>
            <p className="text-gray-600">Our expert support team is available 24/7 to help you set up and troubleshoot.</p>
          </div>
        </div>
        <div className="mt-12">
          <p className="text-lg text-gray-600 mb-6">Professional setup assistance included with all subscriptions</p>
          <a href="https://wa.link/byh2yk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors text-lg">Get Your Subscription Today</a>
        </div>
      </div>
    </div>
  )
}