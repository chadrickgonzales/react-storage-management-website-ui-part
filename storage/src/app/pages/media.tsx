export default function MediaPage() {
  return (
    <div className="min-h-screen bg-brand-dark-blue text-brand-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-brand-coral">Media</h1>
        <p className="text-brand-light-gray mb-8">Manage your audio and video files</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-brand-off-white/10 backdrop-blur-sm rounded-lg p-6 border border-brand-charcoal">
            <h2 className="text-xl font-semibold mb-2 text-accent-teal">Videos</h2>
            <p className="text-brand-light-gray mb-4">12 files • 8.5 GB</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>presentation.mp4</span>
                <span>2.1 GB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>tutorial.mp4</span>
                <span>1.8 GB</span>
              </div>
            </div>
          </div>
          
          <div className="bg-brand-off-white/10 backdrop-blur-sm rounded-lg p-6 border border-brand-charcoal">
            <h2 className="text-xl font-semibold mb-2 text-accent-orange">Audio</h2>
            <p className="text-brand-light-gray mb-4">45 files • 2.3 GB</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>podcast.mp3</span>
                <span>156 MB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>music.mp3</span>
                <span>89 MB</span>
              </div>
            </div>
          </div>
          
          <div className="bg-brand-off-white/10 backdrop-blur-sm rounded-lg p-6 border border-brand-charcoal">
            <h2 className="text-xl font-semibold mb-2 text-accent-purple">Recordings</h2>
            <p className="text-brand-light-gray mb-4">8 files • 1.2 GB</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>meeting.wav</span>
                <span>234 MB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>interview.wav</span>
                <span>189 MB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
