import type { UniformLocations } from './type';
import { compileShader, createProgram, getUniforms, hashCode } from './utils';

class Material<T extends WebGLRenderingContext | WebGL2RenderingContext> {
  programs: WebGLProgram[];
  activeProgram: WebGLProgram | null;
  uniforms: UniformLocations;
  vertexShader: WebGLShader;
  fragmentShaderSource: string;
  gl: T; // The property now uses the generic type

  constructor(gl: T, vertexShader: WebGLShader, fragmentShaderSource: string) {
    this.vertexShader = vertexShader;
    this.fragmentShaderSource = fragmentShaderSource;
    this.programs = [];
    this.activeProgram = null;
    this.uniforms = {};
    this.gl = gl;
  }
  setKeywords(keywords: string[]) {
    let hash = 0;
    for (let i = 0; i < keywords.length; i++) hash += hashCode(keywords[i]);
    let program = this.programs[hash];
    if (program == null) {
      const fragmentShader = compileShader(
        this.gl,
        this.gl.FRAGMENT_SHADER,
        this.fragmentShaderSource,
        keywords,
      );
      program = createProgram(this.gl, this.vertexShader, fragmentShader);
      this.programs[hash] = program;
    }
    if (program === this.activeProgram) return;
    this.uniforms = getUniforms(this.gl, program);
    this.activeProgram = program;
  }
  bind() {
    this.gl.useProgram(this.activeProgram);
  }
}

export default Material;
