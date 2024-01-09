import { Content } from "./components/Content"

function App() {
  return (
    <div className="flex flex-1 items-center justify-center w-full h-full min-h-screen">
      <div className="h-screen w-screen fixed inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" />
      <div className="bg-white my-20 shadow-xl max-w-[min(80vw,1200px)] p-10 lg:p-16 flex flex-col rounded-xl z-10 items-center">
        <Content />
      </div>
    </div>
  )
}

export default App
