import { Button } from "@/components/ui/button"

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div>
        <p className="text-3xl font-bold underline bg-red-50 mb-10">Testing Tailwind with chadcn</p>
        <Button onClick={ipcHandle}>Click me</Button>
      </div>
    </>
  )
}

export default App
