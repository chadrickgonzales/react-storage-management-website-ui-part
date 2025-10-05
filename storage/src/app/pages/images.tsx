export default function ImagesPage() {
  return (
    <div className="min-h-screen bg-brand-dark-blue text-brand-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-brand-coral">Images</h1>
        <p className="text-brand-light-gray mb-8">View and manage your image files</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-brand-off-white/10 backdrop-blur-sm rounded-lg p-6 border border-brand-charcoal">
            <h2 className="text-xl font-semibold mb-2 text-accent-teal">Photos</h2>
            <p className="text-brand-light-gray mb-4">156 files • 4.2 GB</p>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-brand-charcoal h-16 rounded"></div>
              <div className="bg-brand-charcoal h-16 rounded"></div>
              <div className="bg-brand-charcoal h-16 rounded"></div>
            </div>
          </div>
          
          <div className="bg-brand-off-white/10 backdrop-blur-sm rounded-lg p-6 border border-brand-charcoal">
            <h2 className="text-xl font-semibold mb-2 text-accent-orange">Screenshots</h2>
            <p className="text-brand-light-gray mb-4">23 files • 890 MB</p>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-brand-charcoal h-16 rounded"></div>
              <div className="bg-brand-charcoal h-16 rounded"></div>
              <div className="bg-brand-charcoal h-16 rounded"></div>
            </div>
          </div>
          
          <div className="bg-brand-off-white/10 backdrop-blur-sm rounded-lg p-6 border border-brand-charcoal">
            <h2 className="text-xl font-semibold mb-2 text-accent-purple">Graphics</h2>
            <p className="text-brand-light-gray mb-4">8 files • 1.1 GB</p>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-brand-charcoal h-16 rounded"></div>
              <div className="bg-brand-charcoal h-16 rounded"></div>
              <div className="bg-brand-charcoal h-16 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
