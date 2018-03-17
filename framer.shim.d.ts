interface LayerConfig {
  x: number;
  y: number;
}

interface States {
  add(obj: any): void;
}

declare class Layer {
  constructor(config: LayerConfig);
  onTap(fn: Function): void;
  states: States;
}

declare class BackgroundLayer {
  constructor(backgroundColor: string);
}

interface Box {
  width: number;
  height: number;
}

interface Point {
  x: number;
  y: number;
}

interface Frame extends Box, Point {}

declare const Canvas: {
  backgroundColor: string;
  image: string;
  width: number;
  height: number;
  readonly size: Box;
  frame: Frame;
  convertPointToScreen(point: Point): void;
  convertPointToLayer(point: Point, layer: Layer);
};

declare class Color {
  constructor(color: string);
  lighten(amount: number): Color;
  darken(amount: number): Color;
  saturate(amount: number): Color;
  desaturate(amount: number): Color;
  grayscale(): Color;
  gray(amount: number, alpha?: number): Color;
  mix(
    colorA: string,
    colorB: string,
    fraction: number,
    limit: boolean,
    model: string
  ): Color;
  ramdom(): string;
  isColor(value: any): boolean;
  isColorObject(value: any): boolean;
  isColorString(value: string): boolean;
  toHexString(): string;
  toRgbString(): string;
  toHslString(): string;
}

interface AlignFn {
  /**
   * @param {number} [offset=0] 偏移量 默认为0
   * @returns {number}
   * @memberof Align
   */
  (offset?: number): number;
  /**
   * 调试方法
   */
  toInspect(): string;
}

declare interface Align {
  /**
   * @param {number} [offset=0] 偏移量 默认为0
   * @returns {number}
   * @memberof Align
   */
  center: AlignFn;
  /**
   * @param {number} [offset=0] 偏移量 默认为0
   * @returns {number}
   * @memberof Align
   */
  left: AlignFn;
  /**
   * @param {number} [offset=0] 偏移量 默认为0
   * @returns {number}
   * @memberof Align
   */
  right: AlignFn;
  /**
   * @param {number} [offset=0] 偏移量 默认为0
   * @returns {number}
   * @memberof Align
   */
  top: AlignFn;
  /**
   * @param {number} [offset=0] 偏移量 默认为0
   * @returns {number}
   * @memberof Align
   */
  bottom: AlignFn;
}

declare var Align: Align;

declare var Framer: any;

interface IFramer {
  Defaults: any;
}
