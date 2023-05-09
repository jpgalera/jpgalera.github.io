export {};

declare global {
  interface Window {
    requestAnimFrame: ((callback: FrameRequestCallback) => number) & ((callback: FrameRequestCallback) => number);
  }
}