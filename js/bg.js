const width = 3120;
const height = 2880;

const app = new PIXI.Application({ width, height });
globalThis.__PIXI_APP__ = app;
const bg = document.querySelector("#bg");
if (bg) {
  bg.appendChild(app.view);
}

const shaderVert = `precision mediump float;

attribute vec2 aVertexPosition;
attribute vec2 aUvs;

uniform mat3 translationMatrix;
uniform mat3 projectionMatrix;

varying vec2 vUvs;

void main() {
    vUvs = aUvs;
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
}`;

const shaderFrag = `precision mediump float;
uniform float iTime;
uniform vec2 iResolution;

mat2 Rot(float a) {
    float s = sin(a);
    float c = cos(a);
    return mat2(c, -s, s, c);
}

float Star(vec2 uv, float flare) {

    float strength = 1000.0;

    float d = length(uv);
    float m = 0.5 / d;

    float rays = max(0., 1. - abs(uv.x * uv.y * strength));
    m += rays * flare;

    uv *= Rot(3.1415 / 4.);

    rays = max(0., 1. - abs(uv.x * uv.y * strength));
    m += rays * .3 * flare;

    m *= smoothstep(1.0, .2, d);

    return m;
}

float Hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 35.35);
    return fract(p.x * p.y);
}

vec3 StarLayer(vec2 uv) {
    vec3 col = vec3(0.0);

    vec2 gv = fract(uv) - 0.5;
    vec2 id = floor(uv);

    for(int y = -1; y <= 1; y++) {
        for(int x = -1; x <= 1; x++) {
            vec2 offs = vec2(x, y);

            float n = Hash21(id + offs); // random between 0 and 1
            float size = fract(n * 345.32);

            float star = Star(gv - offs - vec2(n, fract(n * 34.)) + .5, smoothstep(0.7, 0.9, size)) / 19.;

            vec3 color = sin(vec3(.0, .0, .9) * fract(n * 2345.2)) * .5 + .5;

            // color += color * vec3(0, 1, 1); // remove red
            // color += color * vec3(1, 0, 1); // remove green
            // color += color * vec3(1, 1, 0); // remove blue

            color += color * vec3(0., 0., 1.0 + size); // remove green a bit

            star *= sin(iTime * 10. + n * 6.2831) * .5 + 1.;
            col += star * size * color;
        }
    }

    return col;
}

void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
    float t = iTime * 0.1;

    uv *= Rot(t);
    vec3 col = vec3(0.0);

    for(float i = 0.; i < 1.; i += 1. / 5.) {
        float depth = fract(i + t);
        float scale = mix(20.0, .5, depth);
        float fade = depth * smoothstep(1., .9, depth);
        col += StarLayer(uv * scale + i * 453.2) * fade;
    }

    // if(gv.x > 0.48 || gv.y > .48)
    //     col.r = 1.0;

    // col += Hash21(id) * 0.5;

    gl_FragColor = vec4(col, 1.0);
}`;

let shader = PIXI.Shader.from(shaderVert, shaderFrag, {
  iResolution: { x: width * 2, y: height * 2 },
  iShift: 1.0,
  iTime: 0,
  iFrame: 0,
  iSpeed: { x: 1.0, y: 1.01 },
});

let mesh = new PIXI.Mesh(getSquareGeometry(width * 2, height * 2), shader);
app.stage.addChild(mesh);

addEventListener("resize", () => {
  app.renderer.resize(window.innerWidth, window.innerHeight);
});

function getSquareGeometry(w, h) {
  return new PIXI.Geometry()
    .addAttribute(
      "aVertexPosition", // the attribute name
      [0, 0, w, 0, w, h, 0, h], // x, y
      2
    ) // the size of the attribute
    .addAttribute(
      "aUvs", // the attribute name
      [
        0,
        0, // u, v
        1,
        0, // u, v
        1,
        1,
        0,
        1,
      ], // u, v
      2
    ) // the size of the attribute
    .addIndex([0, 1, 2, 0, 2, 3]);
}

PIXI.Ticker.shared.add(() => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  shader.uniforms.iTime += 0.005;
  shader.iResolution = { x: width * 2, y: height * 2 };
});
