import { Zap } from 'lucide-react'

export default function SportsChannels() {
  const sportsChannels = [
    'Champions League', 'Premier League', 'Eredivisie',
    'La Liga', 'Bundesliga', 'Serie A',
    'Ligue 1', 'Formula 1', 'MotoGP',
    'UFC', 'Tennis', 'NASCAR',
    'Europa League', 'Conference League', 'World Cup',
    'Euro Championship', 'Olympic Games', 'Wimbledon'
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Popular Competitions & Sports Channels
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {sportsChannels.map((channel, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex-shrink-0">
                  <Zap className="w-5 h-5 text-blue-500" />
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  {channel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
