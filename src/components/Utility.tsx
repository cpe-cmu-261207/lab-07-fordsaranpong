import { Clearcolor , randomcell} from "../stores/PixelPainterStore"

const Utility = () => {
  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36" onClick={() => Clearcolor()}>Clear</button>
      <button className="w-36" onClick={() => randomcell()}>Random color</button>
    </div>
  )
}

export default Utility