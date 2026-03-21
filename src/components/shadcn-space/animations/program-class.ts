import type { UniformLocations } from './type';
import { createProgram, getUniforms } from './utils';

class Program<T extends WebGLRenderingContext | WebGL2RenderingContext> {
  uniforms: UniformLocations;
  program: WebGLProgram;
  gl: T; // The property now uses the generic type

  constructor(gl: T, vertexShader: WebGLShader, fragmentShader: WebGLShader) {
    this.gl = gl; // Assign the WebGL context to the class property
    this.program = createProgram(this.gl, vertexShader, fragmentShader);
    this.uniforms = getUniforms(this.gl, this.program);
  }
  bind() {
    this.gl.useProgram(this.program);
  }
}

export default Program;
