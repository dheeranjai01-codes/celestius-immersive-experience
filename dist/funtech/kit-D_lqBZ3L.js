import {
    $t as e,
    B as t,
    Bn as n,
    Ct as r,
    Dn as i,
    Dt as a,
    Et as o,
    Fn as s,
    G as c,
    H as l,
    Ht as u,
    In as d,
    J as f,
    K as p,
    Lt as m,
    O as h,
    Ot as g,
    P as _,
    Pt as v,
    Qn as y,
    S as b,
    Sn as x,
    St as S,
    Tt as C,
    U as w,
    Un as T,
    Vn as E,
    W as ee,
    Wn as D,
    X as te,
    Y as O,
    Yn as k,
    Z as A,
    Zn as j,
    _r as M,
    _t as N,
    bt as P,
    en as F,
    hn as I,
    ht as L,
    ir as ne,
    j as re,
    jt as ie,
    ln as R,
    lt as ae,
    mt as oe,
    nt as z,
    o as B,
    p as se,
    pt as ce,
    rn as le,
    sn as V,
    sr as ue,
    ur as H,
    ut as de,
    v as fe,
    vn as U,
    vr as W,
    vt as pe,
    w as G,
    wt as me,
    xt as he,
    yt as K
} from "./post-DJ5SZDIO.js";
import {
    t as ge
} from "./pmrem-B-AQRfYD.js";
var q = g,
    _e = q.textureLoad,
    ve = q.ivec2,
    ye = q.int;
q.uint;
var be = q.frontFacing;
q.faceDirection;
var xe = q.normalWorld;
q.normalLocal;
var Se = q.normalGeometry;
q.positionView, q.cameraViewMatrix, q.modelNormalMatrix;
var Ce = q.output;
q.reflectVector, q.transformDirection;
var we = q.sqrt;
q.sign, q.round, q.oneMinus, q.saturate, q.log, q.exp2, q.tan, q.acos, q.asin, q.vertexIndex, q.instanceIndex, q.mat3, q.mat4, q.bvec3, q.materialOpacity, q.screenCoordinate, q.viewportUV;
var Te = q.uniformArray,
    Ee = q.lights,
    De = .0115,
    J = [.16, 1, .28],
    Y = {
        happy: [`....#....`, `...#.#...`, `..#...#..`, `.#.....#.`, `#.......#`],
        open: [`..#####..`, `.#######.`, `#########`, `#########`, `#########`, `.#######.`, `..#####..`],
        blink: [`#########`],
        angry: [`#........`, `###......`, `#######..`, `#########`, `#########`, `.#######.`, `..#####..`],
        wide: [`.#######.`, `#########`, `#########`, `#########`, `#########`, `#########`, `.#######.`],
        star: [`....#....`, `....#....`, `#########`, `..#####..`, `.##...##.`, `#.......#`],
        x: [`#.....#`, `.#...#.`, `..#.#..`, `...#...`, `..#.#..`, `.#...#.`, `#.....#`]
    },
    X = {
        H: [`#...#`, `#...#`, `#...#`, `#####`, `#...#`, `#...#`, `#...#`],
        E: [`#####`, `#....`, `#....`, `####.`, `#....`, `#....`, `#####`],
        L: [`#....`, `#....`, `#....`, `#....`, `#....`, `#....`, `#####`],
        O: [`.###.`, `#...#`, `#...#`, `#...#`, `#...#`, `#...#`, `.###.`],
        W: [`#...#`, `#...#`, `#...#`, `#.#.#`, `#.#.#`, `##.##`, `#...#`],
        R: [`####.`, `#...#`, `#...#`, `####.`, `#.#..`, `#..#.`, `#...#`],
        D: [`####.`, `#...#`, `#...#`, `#...#`, `#...#`, `#...#`, `####.`],
        ",": [`.....`, `.....`, `.....`, `.....`, `.##..`, `..#..`, `.#...`],
        ".": [`.....`, `.....`, `.....`, `.....`, `.....`, `.##..`, `.##..`],
        "!": [`..#..`, `..#..`, `..#..`, `..#..`, `..#..`, `.....`, `..#..`],
        " ": [`.....`, `.....`, `.....`, `.....`, `.....`, `.....`, `.....`]
    },
    Z = {
        H: [`#..#`, `#..#`, `####`, `#..#`, `#..#`, `#..#`],
        E: [`####`, `#...`, `###.`, `#...`, `#...`, `####`],
        L: [`#...`, `#...`, `#...`, `#...`, `#...`, `####`],
        O: [`.##.`, `#..#`, `#..#`, `#..#`, `#..#`, `.##.`],
        W: [`#..#`, `#..#`, `#..#`, `#..#`, `####`, `#..#`],
        R: [`###.`, `#..#`, `###.`, `#.#.`, `#..#`, `#..#`],
        D: [`###.`, `#..#`, `#..#`, `#..#`, `#..#`, `###.`],
        ",": [`....`, `....`, `....`, `....`, `.#..`, `#...`],
        ".": [`....`, `....`, `....`, `....`, `....`, `.#..`],
        " ": [`....`, `....`, `....`, `....`, `....`, `....`]
    };

function Oe() {
    let i = new Uint8Array(4480),
        s = new U(i, 40, 28, y);
    s.minFilter = s.magFilter = T, s.generateMipmaps = !1, s.needsUpdate = !0;
    let u = {
            ledMat: S(new n),
            gain: S(2),
            off: S(.02),
            time: S(0),
            scan: S(0),
            flash: S(0),
            projD: S(.392),
            projC: S(new M)
        },
        d = new Float32Array(3360),
        m = () => {
            let e = me(u.ledMat.mul(a(ae, 1)).xyz),
                n = u.projC.add(e.xy.sub(u.projC).mul(u.projD).div(O(u.projD.sub(e.z), .001))),
                i = K(.035, .06, r().x).mul(K(.965, .94, r().x)).mul(K(.56, .59, r().y)),
                d = n.div(De).add(C(20, 14)),
                m = ee(d),
                g = c(d).sub(.5),
                _ = P(0, m.x).mul(P(0, m.y)).mul(P(m.x, 39)).mul(P(m.y, 27)),
                v = he(s, m.add(.5).div(C(40, 28))).rgb.mul(2).mul(_),
                y = O(p(d.x), p(d.y)),
                b = h(g).sub(.27),
                x = f(O(b, C(0))).add(te(O(b.x, b.y), 0)).sub(.12),
                S = K(.3, .7, y),
                T = A(w(1).sub(K(y.mul(-.7), y.mul(.7), x)), w(.62), S),
                E = l(t(g, g).div(-.018)),
                D = K(-.12, 0, x).mul(w(1).sub(S)),
                k = c(pe(t(m, C(12.9898, 78.233))).mul(43758.5453)),
                j = v.mul(w(.9).add(k.mul(.16))).mul(A(w(1), w(.25), P(.985, k))),
                M = O(j.r, O(j.g, j.b)),
                N = A(j, o(M), .35),
                F = j.mul(w(.8).add(D.mul(.25))).add(N.mul(.9).mul(A(E, w(.25), S))).mul(u.gain).mul(T),
                I = o(.01, .012, .011).mul(u.off).mul(50).mul(T).mul(w(1).sub(M)),
                L = w(1).add(u.scan.mul(.35).mul(l(h(c(d.y.div(28).sub(u.time.mul(3))).sub(.5)).mul(-18))));
            return F.mul(L).add(I).mul(i).add(o(.6, 1, .7).mul(u.flash).mul(i).mul(.6))
        },
        g = new e;
    g.name = `led`, g.colorNode = m();
    let _ = {
        material: g,
        tex: s,
        u,
        clear() {
            d.fill(0)
        },
        set(e, t, n, r = 1) {
            let i = Math.round(e + 20),
                a = Math.round(t + 14);
            if (i < 0 || a < 0 || i >= 40 || a >= 28) return;
            let o = (a * 40 + i) * 3;
            d[o] = Math.max(d[o], n[0] * r), d[o + 1] = Math.max(d[o + 1], n[1] * r), d[o + 2] = Math.max(d[o + 2], n[2] * r)
        },
        glyph(e, t, n, r, i = 1, a = [0, 0]) {
            let o = e.length,
                s = e[0].length;
            for (let c = 0; c < o; c++)
                for (let l = 0; l < s; l++) e[c][l] === `#` && _.set(t + l - (s - 1) / 2 + a[0], n + (o - 1) / 2 - c + a[1], r, i)
        },
        eyes(e, t = J, n = 1, r = [0, 0]) {
            _.glyph(Y[e], -10, 1, t, n, r), _.glyph(Y[e], 10, 1, t, n, r)
        },
        text(e, t, n = J, r = 1, i = 1 / 0) {
            let a = [...e],
                o = a.length * 6 - 1;
            a.forEach((e, a) => {
                if (a >= i) return;
                let s = X[e] ? ? X[` `],
                    c = -o / 2 + a * 6 + 2;
                _.glyph(s, c, t, n, r)
            })
        },
        text4(e, t, n = J, r = 1, i = 1 / 0) {
            let a = [...e],
                o = e => e === `,` || e === `.` ? 2 : 5,
                s = -(a.reduce((e, t) => e + o(t), 0) - 1) / 2;
            a.forEach((e, a) => {
                let c = Z[e] ? ? Z[` `];
                if (a < i)
                    for (let e = 0; e < c.length; e++)
                        for (let i = 0; i < 4; i++) c[e][i] === `#` && _.set(s + i, t + 2.5 - e, n, r);
                s += o(e)
            })
        },
        upload() {
            for (let e = 0; e < 1120; e++) i[e * 4] = Math.min(255, d[e * 3] * 127.5), i[e * 4 + 1] = Math.min(255, d[e * 3 + 1] * 127.5), i[e * 4 + 2] = Math.min(255, d[e * 3 + 2] * 127.5), i[e * 4 + 3] = 255;
            s.needsUpdate = !0
        },
        dispose() {
            s.dispose(), g.dispose()
        }
    };
    return _
}
var Q = .633;

function ke() {
    return {
        root: {
            x: 0,
            y: 0,
            z: 0,
            yaw: 0,
            pitch: 0,
            roll: 0,
            scale: 1
        },
        upper: {
            x: 0,
            y: 0,
            z: 0,
            pitch: 0,
            yaw: 0,
            roll: 0,
            squash: 0
        },
        shoeL: {
            x: 0,
            y: 0,
            z: 0,
            pitch: 0,
            yaw: 0,
            roll: 0
        },
        shoeR: {
            x: 0,
            y: 0,
            z: 0,
            pitch: 0,
            yaw: 0,
            roll: 0
        },
        visor: 0,
        antenna: 0
    }
}
var Ae = new W,
    je = new j,
    Me = new x,
    Ne = new W,
    Pe = new n,
    Fe = class {
        n;
        rest = new Map;
        constructor(e, t) {
            this.n = e, t.updateMatrixWorld(!0);
            let n = t.matrixWorld.clone().invert(),
                r = new W(0, 1, 0);
            for (let t of Object.values(e)) {
                if (!t || !t.parent) continue;
                let e = t.parent.matrixWorld.clone().premultiply(n),
                    i = new W,
                    a = new j,
                    o = new W;
                e.decompose(i, a, o);
                let s = new j;
                t.matrixWorld.clone().premultiply(n).decompose(new W, s, new W);
                let c = 1,
                    l = -1;
                for (let e = 0; e < 3; e++) {
                    let t = Math.abs(new W(+(e === 0), +(e === 1), +(e === 2)).applyQuaternion(s).dot(r));
                    t > l && (l = t, c = e)
                }
                this.rest.set(t, {
                    p: t.position.clone(),
                    q: t.quaternion.clone(),
                    s: t.scale.clone(),
                    pq: a,
                    pqi: a.clone().invert(),
                    ps: o,
                    axis: c
                })
            }
        }
        set(e, t, n = 0) {
            if (!e) return;
            let r = this.rest.get(e);
            if (!r) return;
            Ae.set(t.x || 0, t.y || 0, t.z || 0).applyQuaternion(r.pqi).divide(r.ps), e.position.copy(r.p).add(Ae), je.setFromEuler(Me.set(t.pitch || 0, t.yaw || 0, t.roll || 0, `YXZ`)), e.quaternion.copy(r.q).premultiply(r.pqi.clone().multiply(je).multiply(r.pq));
            let i = 1 - n,
                a = 1 / Math.sqrt(Math.max(.2, i)),
                o = [a, a, a];
            o[r.axis] = i, e.scale.copy(r.s).multiply(Ne.set(o[0], o[1], o[2])).multiplyScalar(t.scale || 1)
        }
        apply(e) {
            let t = this.n;
            this.set(t.rotation, e.root), this.set(t.upper, e.upper, e.upper.squash), this.set(t.shoeL, e.shoeL), this.set(t.shoeR, e.shoeR), this.set(t.spinner, {
                pitch: e.visor
            }), this.set(t.antennaL, {
                roll: e.antenna,
                pitch: e.antenna * .5
            }), this.set(t.antennaR, {
                roll: -e.antenna,
                pitch: e.antenna * .5
            })
        }
        idle(e) {
            let t = ke();
            return t.upper.y = Math.sin(e * 2.1) * .012, t.upper.squash = Math.sin(e * 2.1) * .015, t.upper.roll = Math.sin(e * .9) * .03, t.antenna = Math.sin(e * 5.3) * .08, t
        }
    },
    $ = null,
    Ie = 128;

function Le() {
    return $ || ($ = (async () => {
        let e = Ie,
            t = (e, t, n) => {
                let r = Math.sin(e * 127.1 + t * 311.7 + n * 74.7) * 43758.5453;
                return r - Math.floor(r)
            },
            n = (e, n, r, i) => {
                let a = Math.floor(e),
                    o = Math.floor(n),
                    s = e - a,
                    c = n - o,
                    l = s * s * (3 - 2 * s),
                    u = c * c * (3 - 2 * c),
                    d = e => (e % i + i) % i,
                    f = t(d(a), d(o), r),
                    p = t(d(a + 1), d(o), r),
                    m = t(d(a), d(o + 1), r),
                    h = t(d(a + 1), d(o + 1), r);
                return f + (p - f) * l + (m - f) * u + (f - p - m + h) * l * u
            },
            r = new Float32Array(16384),
            i = (t, r) => {
                let i = 0,
                    a = 1,
                    o = 1;
                for (let s = 0; s < 3; s++) i += a * n(t * o / e * 16, r * o / e * 16, s, 16 * o), a *= .5, o *= 2;
                return i
            },
            a = new Uint8Array(65536),
            o = new Uint8Array(65536);
        for (let t = 0; t < e; t += 32) {
            for (let n = t; n < t + 32; n++)
                for (let t = 0; t < e; t++) r[n * e + t] = i(t, n);
            await new Promise(e => requestAnimationFrame(() => e()))
        }
        for (let t = 0; t < e; t += 32) {
            for (let i = t; i < t + 32; i++)
                for (let t = 0; t < e; t++) {
                    let s = r[i * e + (t + 1) % e] - r[i * e + (t - 1 + e) % e],
                        c = r[(i + 1) % e * e + t] - r[(i - 1 + e) % e * e + t],
                        l = -s * 2.2,
                        u = -c * 2.2,
                        d = Math.hypot(l, u, 1),
                        f = (i * e + t) * 4;
                    a[f] = (l / d * .5 + .5) * 255, a[f + 1] = (u / d * .5 + .5) * 255, a[f + 2] = (1 / d * .5 + .5) * 255, a[f + 3] = 255;
                    let p = 150 + (n(t / e * 6, i / e * 6, 9, 6) * .7 + n(t / e * 23, i / e * 23, 4, 23) * .3 - .5) * 120;
                    o[f] = o[f + 1] = o[f + 2] = p, o[f + 3] = 255
                }
            await new Promise(e => requestAnimationFrame(() => e()))
        }
        return {
            nd: a,
            rd: o
        }
    })(), $)
}
async function Re() {
    let {
        nd: e,
        rd: t
    } = await Le(), n = Ie, r = e => {
        let t = new U(e, n, n, y);
        return t.wrapS = t.wrapT = ne, t.generateMipmaps = !0, t.minFilter = d, t.magFilter = s, t.needsUpdate = !0, t
    }, i = r(e), a = r(t);
    return i.repeat.set(6, 6), a.repeat.set(2, 2), {
        normal: i,
        rough: a
    }
}
var ze = e => e.replace(/\.\d+$/, ``),
    Be = new Map;
async function Ve(t, r) {
    let a = (await t.loadGLTF(r.lod === `high` ? `gen/models/funkun_8000.glb` : `gen/models/funkun_3000.glb`)).scene,
        o = new i;
    o.name = `FUNKUN`, a.position.y = Q, o.add(a);
    let s = e => a.getObjectByName(e),
        c = {
            rotation: s(`FUNCO_ROTATION`),
            upper: s(`FUNCO_UPPER_BODY`),
            body: s(`BODY`),
            helmet: s(`HELMET`),
            visor: s(`VISOR`),
            shoes: s(`SHOES`),
            shoeL: s(`LEFT_SHOE`),
            shoeR: s(`RIGHT_SHOE`),
            spinner: s(`VisorSpinner_Mesh01`),
            antennaL: s(`AntennaLeft_Mesh01`),
            antennaR: s(`AntennaRight_Mesh01`)
        },
        l = Oe(),
        u = r.detail ? await Re() : null,
        d = [],
        f = [],
        p = [],
        m = new Map,
        h = r.envIntensity ? ? 1,
        g = (e, t) => {
            let n = {
                envMap: r.env,
                envMapIntensity: h,
                ...t
            };
            r.detail || (delete n.clearcoat, delete n.clearcoatRoughness);
            let i = new F(n);
            return u && e !== `GLASS` && e !== `GLASS_ROUGH` && (i.normalMap = u.normal, i.normalScale = new M(.12, .12), r.detail && (i.clearcoatNormalMap = u.normal, i.clearcoatNormalScale = new M(.07, .07)), i.roughnessMap = u.rough, i.roughness = Math.max(i.roughness, .25)), i.name = `fk-` + e, p.push(i), f.push(i), i
        },
        _ = r.accent ? ? .12,
        v = (e, n) => {
            if (m.has(e) && e !== `MOUTH_PLASTIC`) return m.get(e);
            let i;
            switch (e) {
                case `DARK_PLASTIC`:
                    i = g(e, {
                        color: 328966,
                        roughness: .3,
                        specularIntensity: .6,
                        clearcoat: 1,
                        clearcoatRoughness: .035
                    });
                    break;
                case `GLOSSY_PLASTIC`:
                    i = g(e, {
                        color: 263173,
                        roughness: .22,
                        specularIntensity: .7,
                        clearcoat: 1,
                        clearcoatRoughness: .03
                    });
                    break;
                case `MOUTH_PLASTIC`:
                    i = g(e, {
                        color: 16777215,
                        map: t.adopt(n.map ? ? null),
                        roughness: .3,
                        clearcoat: 1,
                        clearcoatRoughness: .05
                    });
                    break;
                case `PLASTIC_GLOSSY`:
                    i = g(e, {
                        color: 16730644,
                        roughness: .24,
                        clearcoat: 1,
                        clearcoatRoughness: .06,
                        emissive: 16722440,
                        emissiveIntensity: _
                    });
                    break;
                case `GLOSSY_RUBBER`:
                    i = g(e, {
                        color: 789517,
                        roughness: .45
                    });
                    break;
                case `PLASTIC_NORMAL`:
                    i = g(e, {
                        color: 657931,
                        roughness: .34,
                        specularIntensity: .6,
                        clearcoat: .8,
                        clearcoatRoughness: .06
                    });
                    break;
                case `ROUGH_PLASTIC`:
                    i = g(e, {
                        color: 1052690,
                        roughness: .6,
                        specularIntensity: .5
                    });
                    break;
                case `METALLIC_PLASTIC`:
                    i = g(e, {
                        color: 1710622,
                        metalness: .6,
                        roughness: .3,
                        clearcoat: .6,
                        clearcoatRoughness: .1
                    });
                    break;
                case `Fiberglass Orange`:
                    i = g(e, {
                        color: 14829082,
                        roughness: .3,
                        clearcoat: .9,
                        clearcoatRoughness: .08
                    });
                    break;
                case `GLASS`:
                case `GLASS_ROUGH`:
                    {
                        let t = new F({
                            envMap: r.env,
                            color: 0,
                            roughness: e === `GLASS` ? .02 : .05,
                            metalness: 0,
                            clearcoat: 1,
                            clearcoatRoughness: .02,
                            transparent: !0,
                            depthWrite: !1,
                            blending: 2,
                            envMapIntensity: 1.4 * h
                        });t.name = `fk-glass`,
                        d.push(t),
                        p.push(t),
                        f.push(t),
                        i = t;
                        break
                    }
                case `PLASTIC_EYES`:
                    i = g(e, {
                        color: 131587,
                        roughness: .3
                    });
                    break;
                case `SCREEN_EYES_V06`:
                    i = l.material;
                    break;
                default:
                    i = g(e, {
                        color: 1842204,
                        roughness: .5
                    })
            }
            return m.set(e, i), i
        },
        y = [],
        b;
    a.traverse(e => {
        let t = e;
        if (!t.isMesh) return;
        y.push(t);
        let n = t.material,
            r = ze(n.name || ``);
        r === `SCREEN_EYES_V06` && (b = t);
        let i = v(r, n);
        t.material = i, t.renderOrder = r === `GLASS` || r === `GLASS_ROUGH` ? 3 : 2, n !== i && n.dispose()
    });
    let x = new Fe(c, o);
    o.updateMatrixWorld(!0);
    let S = null;
    if (b) {
        let e = Math.PI / 180,
            t = new W(0, Math.sin(12 * e), Math.cos(12 * e)),
            r = new W(0, .628, .226),
            i = new W(1, 0, 0),
            a = new W().crossVectors(t, i).normalize(),
            s = new n().makeBasis(i, a, t).setPosition(r),
            c = o.matrixWorld.clone().invert();
        S = {
            LrestInv: s.clone().invert(),
            Mrest: b.matrixWorld.clone().premultiply(c)
        }
    }
    let C = [],
        w = null,
        T = null;
    return {
        object: o,
        inner: a,
        nodes: c,
        meshes: y,
        led: l,
        rig: x,
        glass: d,
        mats: f,
        shadowProxies(t) {
            if (C.length) return;
            w = new H(.5, 20, 14), T = new e, o.updateMatrixWorld(!0);
            let r = [c.upper, c.shoeL, c.shoeR].filter(e => !!e),
                i = new Set(y),
                a = new Set;
            for (let e of [c.shoeL, c.shoeR, c.antennaL, c.antennaR]) e ? .traverse(e => a.add(e));
            let s = new n,
                l = new V,
                u = y.length + `:` + y.reduce((e, t) => e + t.geometry.getAttribute(`position`).count, 0),
                d = Be.get(u);
            d || (d = r.map(e => {
                s.copy(e.matrixWorld).invert();
                let t = new V;
                return e.traverse(n => {
                    let r = n;
                    !r.isMesh || !i.has(r) || e === c.upper && a.has(r) || (r.geometry.boundingBox || r.geometry.computeBoundingBox(), t.union(l.copy(r.geometry.boundingBox).applyMatrix4(r.matrixWorld).applyMatrix4(s)))
                }), t
            }), Be.set(u, d));
            for (let e = 0; e < r.length; e++) {
                let n = r[e],
                    i = d[e];
                if (i.isEmpty()) continue;
                let a = new E(w, T);
                i.getCenter(a.position), i.getSize(a.scale), a.scale.multiplyScalar(.92), a.layers.set(t), a.frustumCulled = !1, n.add(a), C.push(a)
            }
        },
        syncLed() {
            S && b && l.u.ledMat.value.copy(S.LrestInv).multiply(S.Mrest).multiply(Pe.copy(b.matrixWorld).invert())
        },
        setEnv(e, t = 1) {
            for (let n of p) n.envMap = e, n.envMapIntensity = (d.includes(n) ? 1.4 : 1) * t, n.needsUpdate = !0
        },
        dispose() {
            for (let e of C) e.removeFromParent();
            w ? .dispose(), T ? .dispose();
            for (let e of new Set(f)) e.dispose();
            for (let e of y) e.geometry.dispose();
            m.get(`MOUTH_PLASTIC`) ? .map ? .dispose(), u ? .normal.dispose(), u ? .rough.dispose(), l.dispose()
        }
    }
}

function He(e, {
    t0: t = 0,
    t1: n = 10,
    dt: r = .001
} = {}) {
    let i = t => {
            if (t <= e[0][0]) return e[0][1];
            for (let n = 0; n < e.length - 1; n++) {
                let [r, i] = e[n], [a, o] = e[n + 1];
                if (t <= a) {
                    let e = (t - r) / (a - r),
                        n = e * e * (3 - 2 * e);
                    return i + (o - i) * n
                }
            }
            return e[e.length - 1][1]
        },
        a = Math.ceil((n - t) / r) + 1,
        o = new Float64Array(a),
        s = 0;
    for (let e = 1; e < a; e++) {
        let n = t + (e - 1) * r,
            a = n + r;
        s += (i(n) + 4 * i((n + a) / 2) + i(a)) / 6 * r, o[e] = s
    }
    return {
        tau: e => {
            if (e <= t) return e - t;
            let n = (e - t) / r,
                s = Math.floor(n);
            return s >= a - 1 ? o[a - 1] + (e - (t + (a - 1) * r)) * i(e) : o[s] + (o[s + 1] - o[s]) * (n - s)
        },
        rate: i
    }
}
var Ue = e => new W(e[0], e[1], e[2]);

function We(e, t, n, r, i) {
    let a = i * i,
        o = a * i;
    return new W(.5 * (2 * t.x + (-e.x + n.x) * i + (2 * e.x - 5 * t.x + 4 * n.x - r.x) * a + (-e.x + 3 * t.x - 3 * n.x + r.x) * o), .5 * (2 * t.y + (-e.y + n.y) * i + (2 * e.y - 5 * t.y + 4 * n.y - r.y) * a + (-e.y + 3 * t.y - 3 * n.y + r.y) * o), .5 * (2 * t.z + (-e.z + n.z) * i + (2 * e.z - 5 * t.z + 4 * n.z - r.z) * a + (-e.z + 3 * t.z - 3 * n.z + r.z) * o))
}
var Ge = class {
    o;
    keys;
    constructor(e, t = {}) {
        this.o = t, this.keys = e.map(e => ({
            roll: 0,
            ease: ie.inOut,
            ...e,
            P: Ue(e.pos),
            T: Ue(e.target)
        }))
    }
    eval(e) {
        let t = this.keys;
        if (e <= t[0].t) return {
            pos: t[0].P.clone(),
            target: t[0].T.clone(),
            fov: t[0].fov,
            roll: t[0].roll
        };
        let n = t[t.length - 1];
        if (e >= n.t) return {
            pos: n.P.clone(),
            target: n.T.clone(),
            fov: n.fov,
            roll: n.roll
        };
        let r = 0;
        for (; r < t.length - 2 && e > t[r + 1].t;) r++;
        let i = t[r],
            a = t[r + 1],
            o = a.ease(v((e - i.t) / (a.t - i.t))),
            s = t[r - 1] ? ? i,
            c = t[r + 2] ? ? a,
            l = t.length > 2;
        return {
            pos: l ? We(s.P, i.P, a.P, c.P, o) : i.P.clone().lerp(a.P, o),
            target: l ? We(s.T, i.T, a.T, c.T, o) : i.T.clone().lerp(a.T, o),
            fov: i.fov + (a.fov - i.fov) * o,
            roll: i.roll + (a.roll - i.roll) * o
        }
    }
    apply(e, t, n = !1) {
        let r = this.eval(t),
            i = this.o.handheld ? ? 0,
            a = this.o.seed ? ? 1,
            o = m(t * .6, a) * i,
            s = m(t * .6, a + 5) * i,
            c = r.roll + m(t * .42, a + 9) * i * .6;
        if (!n)
            for (let e of this.o.shakes ? ? []) o += u(t, e.t, e.amp, e.decay ? ? 9, e.freq ? ? 11), s += u(t, e.t, e.amp * .8, e.decay ? ? 9, (e.freq ? ? 11) * 1.3), c += u(t, e.t, e.amp * .5, e.decay ? ? 9, (e.freq ? ? 11) * .8);
        return e.position.copy(r.pos), e.up.set(0, 1, 0), e.lookAt(r.target), e.translateX(o), e.translateY(s), e.rotateZ(c), e.fov = r.fov, r
    }
};

function Ke(e, n, i, s = r(), l = null) {
    return G(() => {
        let r = O(e.rgb, o(0)),
            u = l ? z(r, n.exposure).div(z(o(l), n.exposure).g) : z(r, n.exposure),
            d = A(_(r.mul(n.exposure), 0, 1), u, i),
            p = oe(_(d, 0, 1)).toVar(),
            m = o(.2126, .7152, .0722),
            g = t(p, m);
        p.assign(A(o(g), p, n.saturation)), p.assign(p.sub(.5).mul(n.contrast).add(.5)), p.addAssign(n.shadowTint.mul(w(1).sub(K(0, .55, g))).add(n.highTint.mul(K(.45, 1, g))));
        let v = K(1.05, .25, f(s.sub(.5).mul(C(n.aspect, 1))).mul(.95));
        p.mulAssign(A(w(1), v, n.vignette));
        let y = t(_(p, 0, 1), m);
        p.assign(A(p, A(o(n.impactA), o(n.impactB), P(n.impactThr, y)), n.impact)), p.addAssign(o(n.flashColor).mul(n.flash)), p.assign(A(p, o(n.fadeColor), n.fade));
        let b = L.xy,
            x = c(n.time.mul(23.17)).mul(719),
            S = B(b.add(x)).add(B(b.mul(.5).add(x.mul(.46)))).sub(1),
            T = w(1).sub(K(.975, .997, p.x.min(p.y).min(p.z)));
        return p.addAssign(S.mul(n.grain).mul(w(.35).add(w(.65).mul(w(1).sub(h(y.mul(2).sub(1)))))).mul(T)), a(ce(_(p, 0, 1)), 1)
    })()
}
async function qe(t, n) {
    let i = new ue,
        a = [],
        s = new W(...n.center ? ? [0, .6, 0]),
        c = new E(new H(30, 32, 16), new e({
            side: 1,
            depthWrite: !1
        })),
        l = S(new I(n.top)),
        u = S(new I(n.bottom)),
        d = S(new I(n.horizon ? ? n.bottom)),
        p = n.k ? ? 1,
        m = -2 * Math.atan(s.y / 12) / Math.PI;
    c.material.colorNode = G(() => {
        let e = r().y.mul(2).sub(1),
            t = A(A(o(u), o(d), K(-1, 0, e)), o(l), K(0, 1, e));
        if (n.behind) {
            let i = h(r().x.sub(.25));
            t = A(t, o(S(new I(n.behind))), K(.2, .06, i).mul(K(-.35, .05, e)).mul(w(1).sub(K(.55, .85, e))))
        }
        return t = t.mul(p), n.floor && (t = A(t, o(S(new I(n.floor))), w(1).sub(K(m - .004, m + .004, e)))), t
    })(), c.position.copy(s), i.add(c), a.push(c.geometry, c.material);
    let g = [],
        _ = new D;
    for (let e of n.cards) {
        let t = new k(1, 1);
        _.position.set(...e.position), _.scale.set(e.size[0], e.size[1], 1), _.lookAt(s), _.updateMatrix(), t.applyMatrix4(_.matrix);
        let n = t.getAttribute(`position`).count,
            r = new I(e.color).multiplyScalar(e.intensity),
            i = new Float32Array(n * 3),
            a = new Float32Array(n * 3),
            o = e.type === `rect` ? 0 : e.type === `strip` ? 1 : 2;
        for (let t = 0; t < n; t++) i.set([r.r, r.g, r.b], t * 3), a.set([o, e.softness ? ? .25, e.gradient ? ? .4], t * 3);
        t.setAttribute(`cc`, new R(i, 3)), t.setAttribute(`cp`, new R(a, 3)), g.push(t)
    }
    if (g.length) {
        let t = b(g);
        for (let e of g) e.dispose();
        let n = new e({
                transparent: !0,
                blending: 2,
                depthWrite: !1,
                side: 2
            }),
            o = re(`cp`, `vec3`),
            s = re(`cc`, `vec3`),
            c = r().mul(2).sub(1),
            l = de(w(1).sub(K(0, 1, f(c))), 1.6),
            u = P(.5, o.x).mul(P(o.x, 1.5)),
            d = w(1).sub(h(c.x)),
            p = w(1).sub(h(c.y)),
            m = o.y,
            _ = K(0, m, d).mul(K(0, m.mul(A(w(1), w(.35), u)), p)).mul(A(w(1), w(1).sub(o.z.mul(w(1).sub(c.y.add(1).mul(.5)))), u));
        n.colorNode = s.mul(N(o.x.greaterThan(1.5), l, _));
        let v = new E(t, n);
        i.add(v), a.push(t, n)
    }
    let v = new le(t),
        y = {
            size: n.size ? ? 256,
            position: s
        };
    try {
        await se(t, () => v.fromScene(i, 0, .05, 60, y).dispose(), {
            pmrem: !0
        }), await new Promise(e => requestAnimationFrame(() => e()));
        let e = v.fromScene(i, 0, .05, 60, y);
        return fe(t, e), await ge(t, e, {
            frame: () => new Promise(e => requestAnimationFrame(() => e()))
        })
    } finally {
        v.dispose();
        for (let e of a) e.dispose()
    }
}
async function Je(e, t, n) {
    let r = new Set;
    for (let i of t)
        if (i && !r.has(i)) {
            if (r.add(i), n ? .()) return;
            try {
                e.initTexture(i)
            } catch {}
            await new Promise(e => requestAnimationFrame(() => e()))
        }
}

function Ye(e) {
    let t = [];
    for (let n of e)
        for (let e of Object.values(n)) e && e.isTexture && t.push(e);
    return t
}
export {
    we as _, Ye as a, Ve as c, ye as d, ve as f, Ce as g, xe as h, He as i, J as l, Se as m, qe as n, Je as o, Ee as p, Ke as r, Q as s, Ge as t, be as u, _e as v, Te as y
};