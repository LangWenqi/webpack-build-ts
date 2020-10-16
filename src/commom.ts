import { resolve } from "path"

interface Ass {
  name: string
}

export const setup = (aa: Ass) => {
  return new Promise((resolve => {
    console.log(999)
    resolve(999);
  }))
}