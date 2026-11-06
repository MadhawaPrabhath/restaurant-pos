function App(): React.JSX.Element {
  const sendTestOrder = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Restaurant POS</h1>
      <p>Setup complete. Ready to build!</p>
      <button onClick={sendTestOrder}>Send test order</button>
    </div>
  )
}

export default App