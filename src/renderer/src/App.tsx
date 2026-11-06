function App(): React.JSX.Element {
  const sendTestOrder = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold text-slate-800">Restaurant POS</h1>
      <p className="mt-1 text-slate-500">Version 0.1 — in development</p>

      {/* Menu tiles */}
      <div className="mt-8 grid grid-cols-3 gap-4 max-w-2xl">
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="font-semibold text-slate-800">Chicken Fried Rice</p>
          <p className="text-slate-500">Rs 1,200</p>
        </div>
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="font-semibold text-slate-800">Mix Fried Rice</p>
          <p className="text-slate-500">Rs 1,450</p>
        </div>
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="font-semibold text-slate-800">Seafood Rice</p>
          <p className="text-slate-500">Rs 1,650</p>
        </div>
      </div>

      {/* Pay button */}
      <button
        onClick={sendTestOrder}
        className="mt-8 rounded-xl bg-emerald-600 px-10 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700 active:scale-95"
      >
        Pay Rs 4,300
      </button>
    </div>
  )
}

export default App