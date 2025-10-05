export default function OthersPage() {
  return (
    <div className="min-h-screen bg-brand-dark-blue text-brand-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-brand-coral">Other Files</h1>
        <p className="text-brand-light-gray mb-8">Miscellaneous files and archives</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-brand-off-white/10 backdrop-blur-sm rounded-lg p-6 border border-brand-charcoal">
            <h2 className="text-xl font-semibold mb-2 text-accent-teal">Archives</h2>
            <p className="text-brand-light-gray mb-4">5 files • 1.8 GB</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>backup.zip</span>
                <span>1.2 GB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>project.rar</span>
                <span>456 MB</span>
              </div>
            </div>
          </div>
          
          <div className="bg-brand-off-white/10 backdrop-blur-sm rounded-lg p-6 border border-brand-charcoal">
            <h2 className="text-xl font-semibold mb-2 text-accent-orange">Executables</h2>
            <p className="text-brand-light-gray mb-4">3 files • 890 MB</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>setup.exe</span>
                <span>234 MB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>installer.msi</span>
                <span>189 MB</span>
              </div>
            </div>
          </div>
          
          <div className="bg-brand-off-white/10 backdrop-blur-sm rounded-lg p-6 border border-brand-charcoal">
            <h2 className="text-xl font-semibold mb-2 text-accent-purple">Code Files</h2>
            <p className="text-brand-light-gray mb-4">28 files • 156 MB</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>script.js</span>
                <span>45 KB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>style.css</span>
                <span>23 KB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
