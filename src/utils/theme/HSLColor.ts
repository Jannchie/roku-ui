import { hexToHsl } from './utils'

export class HSLColor {
  constructor (public h: number, public s: number, public l: number) { }

  static fromHex (hex: string): HSLColor {
    const [h, s, l] = hexToHsl(hex)
    return new HSLColor(h, s, l)
  }

  toString (): string {
    return `${(this.h * 360).toFixed()} ${(this.s * 100).toFixed()}% ${(this.l * 100).toFixed()}%`
  }
}
