import { Store } from 'pullstate'

const color: string[] = ['#000000', '#804000', '#FE0000', '#FE6A00', '#FFD800', '#00FF01', '#FFFFFF', '#01FFFF', '#0094FE', '#0026FF', '#B100FE', '#FF006E']

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][]
  pick: string
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i = 0; i < 16; i++) {
    output[i] = []
    for (let j = 0; j < 16; j++) {
      output[i].push('#FFFFFF')
    }
  }
  return output
}

export const random = () => {
  const output: string[][] = []
  for (let i = 0; i < 16; i++) {
    output[i] = []
    for (let j = 0; j < 16; j++) {
      output[i].push(color[Math.floor(Math.random() * 12)])
    }
  }
  return output
}

export const randomcell = () => {
  PixelPainterStore.update(s => { s.canvas = random() })
}

export const Clearcolor = () => {
  PixelPainterStore.update(s => { s.canvas = createEmptyCanvas() })
}

export const Change = (x: number, y: number) => {
  PixelPainterStore.update(s => { s.canvas[y][x] = s.pick })
}

export const pickcolor = (color: string) => {
  PixelPainterStore.update(s => { s.pick = color })
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  pick: ""
})