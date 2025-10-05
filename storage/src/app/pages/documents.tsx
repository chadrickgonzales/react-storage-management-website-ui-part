export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-brand-dark-blue text-brand-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-brand-coral">Documents</h1>
        <p className="text-brand-light-gray mb-8">Manage your documents and files</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-brand-off-white/10 backdrop-blur-sm rounded-lg p-6 border border-brand-charcoal">
            <h2 className="text-xl font-semibold mb-2 text-accent-teal">PDF Files</h2>
            <p className="text-brand-light-gray mb-4">15 files • 2.3 GB</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>report.pdf</span>
                <span>1.2 MB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>manual.pdf</span>
                <span>856 KB</span>
              </div>
            </div>
          </div>
          
          <div className="bg-brand-off-white/10 backdrop-blur-sm rounded-lg p-6 border border-brand-charcoal">
            <h2 className="text-xl font-semibold mb-2 text-accent-orange">Word Documents</h2>
            <p className="text-brand-light-gray mb-4">8 files • 1.1 GB</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>proposal.docx</span>
                <span>2.1 MB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>notes.docx</span>
                <span>456 KB</span>
              </div>
            </div>
          </div>
          
          <div className="bg-brand-off-white/10 backdrop-blur-sm rounded-lg p-6 border border-brand-charcoal">
            <h2 className="text-xl font-semibold mb-2 text-accent-purple">Spreadsheets</h2>
            <p className="text-brand-light-gray mb-4">12 files • 890 MB</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>budget.xlsx</span>
                <span>3.2 MB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>data.xlsx</span>
                <span>1.8 MB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
