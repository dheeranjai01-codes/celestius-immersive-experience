import {
    $t as e,
    An as t,
    B as n,
    Cn as r,
    Ct as i,
    Dn as a,
    E as o,
    Et as s,
    Fn as c,
    G as l,
    H as u,
    In as d,
    J as f,
    Kn as p,
    L as m,
    M as h,
    Nn as g,
    O as _,
    Ot as v,
    P as y,
    Qn as b,
    S as x,
    St as S,
    T as C,
    Tt as w,
    U as T,
    Vn as E,
    W as D,
    X as O,
    Y as k,
    Yn as A,
    Z as j,
    Zn as M,
    _n as ee,
    _r as N,
    _t as te,
    a as ne,
    an as re,
    ar as ie,
    at as ae,
    cn as P,
    cr as oe,
    ct as se,
    dn as ce,
    dt as le,
    gn as ue,
    gt as de,
    hn as F,
    i as fe,
    ir as pe,
    it as I,
    j as L,
    jn as me,
    ln as R,
    lr as he,
    lt as z,
    n as ge,
    o as _e,
    or as ve,
    ot as ye,
    p as be,
    pn as xe,
    pr as Se,
    q as Ce,
    r as we,
    rn as Te,
    rt as Ee,
    s as De,
    sr as Oe,
    st as ke,
    tn as B,
    un as Ae,
    ur as je,
    ut as V,
    v as Me,
    vn as Ne,
    vr as H,
    vt as Pe,
    w as Fe,
    wt as Ie,
    xn as Le,
    xt as U,
    yr as Re,
    yt as W
} from "./post-DJ5SZDIO.js";
import {
    f as ze,
    i as Be,
    r as Ve
} from "./index-BSu4tWCh.js";
import {
    t as He
} from "./pmrem-B-AQRfYD.js";
async function Ue(e, t) {
    let n = await e.binary(t),
        r = new Uint8Array(n);
    if (String.fromCharCode(r[0], r[1], r[2], r[3]) !== `FTPK`) throw Error(`${t}: not a museum pack`);
    let i = new DataView(n).getUint32(8, !0),
        a = JSON.parse(new TextDecoder().decode(r.subarray(12, 12 + i)));
    return {
        header: a,
        get(e) {
            let n = a.sections.find(t => t.name === e);
            if (!n) throw Error(`${t}: no section ${e}`);
            return r.subarray(n.offset, n.offset + n.length)
        }
    }
}
async function We(e) {
    if (typeof DecompressionStream < `u`) {
        let t = new Blob([e]).stream().pipeThrough(new DecompressionStream(`gzip`));
        return new Uint8Array(await new Response(t).arrayBuffer())
    }
    let {
        gunzipSync: t
    } = await ze(async () => {
            let {
                gunzipSync: e
            } = await
            import (`./fflate.module-DVTTPdyi.js`);
            return {
                gunzipSync: e
            }
        }, [],
        import.meta.url);
    return t(e)
}

function Ge(e) {
    let t = 2;
    for (; t + 9 < e.length;) {
        if (e[t] !== 255) {
            t++;
            continue
        }
        let n = e[t + 1];
        if (n === 255) {
            t++;
            continue
        }
        if (n === 216 || n === 1 || n >= 208 && n <= 215) {
            t += 2;
            continue
        }
        if (n >= 192 && n <= 207 && n !== 196 && n !== 200 && n !== 204) return [e[t + 7] << 8 | e[t + 8], e[t + 5] << 8 | e[t + 6]];
        t += 2 + (e[t + 2] << 8 | e[t + 3])
    }
    return null
}
var G, Ke = 0,
    qe = new Map;

function Je(e, t) {
    if (G === void 0) try {
        G = new Worker(URL.createObjectURL(new Blob([`onmessage=async(e)=>{const{id,src,opts}=e.data;try{const b=await createImageBitmap(src,opts);if(src instanceof ImageBitmap)src.close();postMessage({id,b},[b])}catch(err){postMessage({id,err:String(err&&err.message||err)})}}`], {
            type: `text/javascript`
        }))), G.onmessage = e => {
            let t = qe.get(e.data.id);
            t && (qe.delete(e.data.id), e.data.b ? t.ok(e.data.b) : t.fail(Error(e.data.err)))
        }
    } catch {
        G = null
    }
    if (!G) return createImageBitmap(e, t).then(t => (e instanceof ImageBitmap && e.close(), t));
    let n = ++Ke;
    return new Promise((r, i) => {
        qe.set(n, {
            ok: r,
            fail: i
        }), G.postMessage({
            id: n,
            src: e,
            opts: t
        }, e instanceof ImageBitmap ? [e] : [])
    })
}
async function Ye(e, t = {}) {
    let n = new Blob([e], {
            type: `image/jpeg`
        }),
        r = {
            premultiplyAlpha: `none`,
            colorSpaceConversion: `none`
        },
        i = t.box ? `medium` : `high`,
        a = t.scale && t.scale < 1 ? Ge(e) : null,
        o = a ? await Je(n, { ...r,
            resizeWidth: Math.max(8, Math.round(a[0] * t.scale)),
            resizeHeight: Math.max(8, Math.round(a[1] * t.scale)),
            resizeQuality: i
        }) : await createImageBitmap(n, r);
    if (!a && t.scale && t.scale < 1) {
        let e = Math.max(8, Math.round(o.width * t.scale)),
            n = Math.max(8, Math.round(o.height * t.scale));
        o = await Je(o, { ...r,
            resizeWidth: e,
            resizeHeight: n,
            resizeQuality: i
        })
    }
    let s = new Se(o);
    return s.flipY = !1, s.colorSpace = t.srgb ? ve : ``, s.generateMipmaps = !0, s.minFilter = d, s.magFilter = c, s.anisotropy = t.aniso ? ? 4, Ze(s), s
}
var Xe = 1e3;

function Ze(e) {
    return e.version = ++Xe, e
}

function Qe(e) {
    if (!e) return;
    let t = e.image;
    e.dispose();
    try {
        t ? .close ? .()
    } catch {}
}

function $e(e, t, n, r, i, a) {
    let o = new Uint16Array(a),
        s = 0;
    for (let a = 0; a < i; a++)
        for (let i = 0; i < r; i++) {
            let c = a * r + i;
            if (n[c] < 0) continue;
            let l = i > 0 ? n[c - 1] : -1,
                u = a > 0 ? n[c - r] : -1,
                d = i > 0 && a > 0 ? n[c - r - 1] : -1,
                f = 0;
            l >= 0 && u >= 0 && d >= 0 ? f = o[l] + o[u] - o[d] : l >= 0 ? f = o[l] : u >= 0 && (f = o[u]);
            let p = e[s] | t[s] << 8,
                m = p >>> 1 ^ -(p & 1);
            o[s] = f + m & 65535, s++
        }
    return o
}

function et(e, t, n) {
    let r = new Int32Array(t * n).fill(-1),
        i = 0;
    for (let a = 0; a < t * n; a++) e[a >> 3] >> (a & 7) & 1 && (r[a] = i++);
    return {
        at: r,
        n: i
    }
}

function tt(e, t) {
    let n = new Float32Array(e.length);
    for (let r = 0; r < t.length; r += 3) {
        let i = t[r] * 3,
            a = t[r + 1] * 3,
            o = t[r + 2] * 3,
            s = e[o] - e[a],
            c = e[o + 1] - e[a + 1],
            l = e[o + 2] - e[a + 2],
            u = e[i] - e[a],
            d = e[i + 1] - e[a + 1],
            f = e[i + 2] - e[a + 2],
            p = c * f - l * d,
            m = l * u - s * f,
            h = s * d - c * u;
        n[i] += p, n[i + 1] += m, n[i + 2] += h, n[a] += p, n[a + 1] += m, n[a + 2] += h, n[o] += p, n[o + 1] += m, n[o + 2] += h
    }
    for (let e = 0; e < n.length; e += 3) {
        let t = Math.hypot(n[e], n[e + 1], n[e + 2]) || 1;
        n[e] /= t, n[e + 1] /= t, n[e + 2] /= t
    }
    return n
}

function nt(e, t) {
    let {
        gw: n,
        gh: r,
        gwF: i,
        ghF: a,
        nv: o,
        F: [s, c],
        B: [l, u]
    } = t.grid, {
        planeW: d,
        planeH: f
    } = t.frame, p = 0, m = Math.ceil(n * r / 8), h = e.subarray(p, p += m), g = e.subarray(p, p += o), _ = e.subarray(p, p += o), v = e.subarray(p, p += o), y = e.subarray(p, p += o), {
        at: b,
        n: x
    } = et(h, n, r);
    if (x !== o) throw Error(`${t.id}: vertex count ${x} ≠ ${o}`);
    let S = $e(g, _, b, n, r, o),
        C = $e(v, y, b, n, r, o),
        w = new Float32Array(o * 2 * 3),
        T = new Float32Array(o * 2 * 2),
        E = new Float32Array(o * 2);
    for (let e = 0; e < r; e++)
        for (let t = 0; t < n; t++) {
            let r = b[e * n + t];
            if (r < 0) continue;
            let p = Math.min(2 * t, i - 1) / (i - 1),
                m = Math.min(2 * e, a - 1) / (a - 1),
                h = (p - .5) * d,
                g = (.5 - m) * f,
                _ = s + S[r] / 65535 * (c - s),
                v = l + C[r] / 65535 * (u - l);
            for (let e = 0; e < 2; e++) {
                let t = r + e * o;
                w[t * 3] = h, w[t * 3 + 1] = g, w[t * 3 + 2] = e ? v : _, T[t * 2] = p, T[t * 2 + 1] = m, E[t] = e
            }
        }
    let D = o * 2 >= 65536,
        O = e => {
            let i = [];
            for (let t = 0; t + e < r; t += e)
                for (let r = 0; r + e < n; r += e) {
                    let a = b[t * n + r],
                        s = b[t * n + r + e],
                        c = b[(t + e) * n + r],
                        l = b[(t + e) * n + r + e];
                    a < 0 || s < 0 || c < 0 || l < 0 || (i.push(a, c, s, s, c, l), i.push(s + o, c + o, a + o, l + o, c + o, s + o))
                }
            if (t.base.type === `cut`) {
                let t = r - 1;
                for (let r = 0; r + e < n; r += e) {
                    let a = b[t * n + r],
                        s = b[t * n + r + e];
                    a < 0 || s < 0 || i.push(a, a + o, s, s, a + o, s + o)
                }
            }
            return i
        },
        k = O(1),
        A = O(2),
        j = D ? new Uint32Array(k.length + A.length) : new Uint16Array(k.length + A.length);
    j.set(k), j.set(A, k.length);
    let M = new Ae;
    return M.setAttribute(`position`, new R(w, 3)), M.setAttribute(`uv`, new R(T, 2)), M.setAttribute(`side`, new R(E, 1)), M.setAttribute(`normal`, new R(tt(w, k), 3)), M.setIndex(new R(j, 1)), M.setDrawRange(0, k.length), M.computeBoundingBox(), M.computeBoundingSphere(), {
        geo: M,
        lod: [
            [0, k.length],
            [k.length, A.length]
        ],
        nv: o,
        pos: w,
        uv: T,
        at: b,
        gw: n,
        gh: r
    }
}

function rt(e) {
    let t = new DataView(e.buffer, e.byteOffset, e.byteLength),
        n = Math.floor(e.byteLength / 20),
        r = new Float32Array(n),
        i = new Float32Array(n),
        a = new Float32Array(n),
        o = new Float32Array(n),
        s = new Float32Array(n * 3);
    for (let c = 0; c < n; c++) {
        let n = c * 20;
        r[c] = t.getFloat32(n, !0), i[c] = t.getFloat32(n + 4, !0), a[c] = t.getFloat32(n + 8, !0), o[c] = t.getFloat32(n + 12, !0), s[c * 3] = e[n + 16] / 255, s[c * 3 + 1] = e[n + 17] / 255, s[c * 3 + 2] = e[n + 18] / 255
    }
    return {
        n,
        x: r,
        y: i,
        f: a,
        b: o,
        rgb: s
    }
}

function it(e, t) {
    let {
        gw: n,
        gh: r,
        n: i,
        h: [a, o]
    } = t.grid, s = Math.ceil(n * r / 8), c = 0, l = e.subarray(c, c += s), u = e.subarray(c, c += s), d = new Uint8Array(s);
    for (let e = 0; e < s; e++) d[e] = l[e] | u[e];
    let {
        at: f,
        n: p
    } = et(d, n, r);
    if (p !== i) throw Error(`monument: vertex count ${p} ≠ ${i}`);
    let m = e.subarray(c, c += i),
        h = e.subarray(c, c += i),
        g = e.subarray(c, c += i),
        _ = e.subarray(c, c += i),
        v = $e(m, h, f, n, r, i),
        y = $e(g, _, f, n, r, i),
        b = new Float32Array(i),
        x = new Float32Array(i),
        S = new Float32Array(i),
        C = new Float32Array(i),
        w = new Float32Array(i),
        T = new Float32Array(i),
        E = new Uint8Array(i),
        D = new Uint8Array(i),
        {
            planeW: O,
            planeH: k,
            center: A
        } = t.up;
    for (let e = 0; e < r; e++)
        for (let t = 0; t < n; t++) {
            let i = e * n + t,
                s = f[i];
            if (s < 0) continue;
            b[s] = a + v[s] / 65535 * (o - a), x[s] = a + y[s] / 65535 * (o - a), E[s] = l[i >> 3] >> (i & 7) & 1, D[s] = u[i >> 3] >> (i & 7) & 1;
            let c = t / (n - 1),
                d = e / (r - 1);
            w[s] = c, T[s] = d, S[s] = A[0] + (c - .5) * O, C[s] = A[1] + (.5 - d) * k
        }
    return {
        gw: n,
        gh: r,
        n: i,
        at: f,
        vF: E,
        vU: D,
        hF: b,
        hU: x,
        x: S,
        y: C,
        u: w,
        v: T
    }
}
var K = v,
    at = K.instancedBufferAttribute;
K.instanceIndex, K.normalLocal, K.normalGeometry;
var ot = K.normalWorld,
    st = K.transformNormalToView;
K.modelNormalMatrix;
var ct = K.cameraViewMatrix;
K.positionView;
var lt = K.frontFacing,
    ut = K.uniformArray;
K.property, K.textureLevel;
var dt = K.sqrt;
K.saturate, K.sign, K.round, K.acos, K.log, K.exp2, K.cameraNear, K.cameraFar, K.viewportLinearDepth, K.linearDepth, K.reflectVector, K.pmremTexture, K.rotateUV, K.mat3;
var ft = K.ivec2;
K.bool, K.vertexIndex, K.varyingProperty;
var pt = K.normalViewGeometry;
K.instancedDynamicBufferAttribute, K.modelViewMatrix, K.modelWorldMatrixInverse, K.cameraWorldMatrix, K.cameraProjectionMatrixInverse, K.time;
var mt = K.textureLoad,
    ht = new Map,
    gt = () => new Promise(e => requestAnimationFrame(() => e()));
async function _t(e = 256) {
    let t = ht.get(e);
    t || (t = vt(e), ht.set(e, t));
    let n = new Ne(await t, e, e, b);
    return n.wrapS = n.wrapT = pe, n.generateMipmaps = !0, n.minFilter = d, n.magFilter = c, n.needsUpdate = !0, n
}
async function vt(e) {
    let t = new Uint8Array(e * e * 4),
        n = (e, t, n) => {
            let r = Math.sin(e * 127.1 + t * 311.7 + n * 74.7) * 43758.5453;
            return r - Math.floor(r)
        },
        r = (e, t) => {
            let r = new Float32Array(e * e);
            for (let i = 0; i < e; i++)
                for (let a = 0; a < e; a++) r[i * e + a] = n(a, i, t);
            return r
        },
        i = (e, t, n, r) => {
            let i = Math.floor(n),
                a = Math.floor(r),
                o = n - i,
                s = r - a,
                c = o * o * (3 - 2 * o),
                l = s * s * (3 - 2 * s),
                u = (i % t + t) % t,
                d = (a % t + t) % t,
                f = (u + 1) % t,
                p = (d + 1) % t,
                m = e[d * t + u],
                h = e[d * t + f],
                g = e[p * t + u],
                _ = e[p * t + f];
            return m + (h - m) * c + (g - m) * l + (m - h - g + _) * c * l
        },
        a = e => [0, 1, 2, 3].map(t => r(8 << t, e + t * 13)),
        o = a(1),
        s = a(51),
        c = r(32, 9),
        l = (t, n, r) => {
            let a = 0,
                o = .5,
                s = 0;
            for (let c = 0; c < 4; c++) {
                let l = 8 << c;
                a += i(t[c], l, n / e * l, r / e * l) * o, s += o, o *= .5
            }
            return a / s
        },
        u = Math.max(1, e >> 2);
    for (let r = 0; r < e; r += u) {
        r > 0 && await gt();
        for (let a = r; a < Math.min(e, r + u); a++)
            for (let r = 0; r < e; r++) {
                let u = (a * e + r) * 4;
                t[u] = Math.round(l(o, r, a) * 255), t[u + 1] = Math.round(i(c, 32, r / e * 32, a / e * 32) * 255), t[u + 2] = Math.round(l(s, r, a) * 255), t[u + 3] = Math.round(n(r, a, 3) * 255)
            }
    }
    return t
}

function yt(e) {
    return {
        fbm: t => U(e, t.div(8)).r,
        fbmB: t => U(e, t.div(8)).b,
        vn: t => U(e, t.div(32)).g,
        fbm3: t => U(e, w(t.x.add(t.z.mul(.618)), t.y.sub(t.z.mul(.382))).div(8)).r,
        vn3: t => U(e, w(t.x.add(t.z.mul(.618)), t.y.sub(t.z.mul(.382))).div(32)).g,
        arcs: (t, n, r = 38) => {
            let i = t.mul(r),
                a = U(e, w(i.x.mul(.7).add(n.mul(4)), i.y.mul(.7).add(i.z.mul(.5)).sub(n.mul(2.7))).div(8)).r,
                o = U(e, w(i.x.add(a.mul(1.6)).add(i.z.mul(.37)), i.y.add(n.mul(3)).add(a.mul(1.1))).div(8)).r,
                s = T(1).sub(W(0, .035, _(o.sub(.5)))),
                c = W(.55, .8, U(e, w(t.x.mul(9).add(n.mul(5)), t.y.mul(9).add(t.z.mul(4))).div(32)).g);
            return s.mul(c)
        }
    }
}
var bt = new H;

function q(e, t, n, r, i, a) {
    let o = 2 * Math.PI * i / 4,
        s = Math.max(a - 2 * i, 0),
        c = Math.PI / 4;
    bt.copy(t), bt[r] = 0, bt.normalize();
    let l = .5 * o / (o + s),
        u = 1 - bt.angleTo(e) / c;
    return Math.sign(bt[n]) === 1 ? u * l : s / (o + s) + l + l * (1 - u)
}
var J = class e extends P {
        constructor(e = 1, t = 1, n = 1, r = 2, i = .1) {
            let a = r * 2 + 1;
            if (i = Math.min(e / 2, t / 2, n / 2, i), super(1, 1, 1, a, a, a), this.type = `RoundedBoxGeometry`, this.parameters = {
                    width: e,
                    height: t,
                    depth: n,
                    segments: r,
                    radius: i
                }, a === 1) return;
            let o = this.toNonIndexed();
            this.index = null, this.attributes.position = o.attributes.position, this.attributes.normal = o.attributes.normal, this.attributes.uv = o.attributes.uv;
            let s = new H,
                c = new H,
                l = new H(e, t, n).divideScalar(2).subScalar(i),
                u = this.attributes.position.array,
                d = this.attributes.normal.array,
                f = this.attributes.uv.array,
                p = u.length / 6,
                m = new H,
                h = .5 / a;
            for (let r = 0, a = 0; r < u.length; r += 3, a += 2) switch (s.fromArray(u, r), c.copy(s), c.x -= Math.sign(c.x) * h, c.y -= Math.sign(c.y) * h, c.z -= Math.sign(c.z) * h, c.normalize(), u[r + 0] = l.x * Math.sign(s.x) + c.x * i, u[r + 1] = l.y * Math.sign(s.y) + c.y * i, u[r + 2] = l.z * Math.sign(s.z) + c.z * i, d[r + 0] = c.x, d[r + 1] = c.y, d[r + 2] = c.z, Math.floor(r / p)) {
                case 0:
                    m.set(1, 0, 0), f[a + 0] = q(m, c, `z`, `y`, i, n), f[a + 1] = 1 - q(m, c, `y`, `z`, i, t);
                    break;
                case 1:
                    m.set(-1, 0, 0), f[a + 0] = 1 - q(m, c, `z`, `y`, i, n), f[a + 1] = 1 - q(m, c, `y`, `z`, i, t);
                    break;
                case 2:
                    m.set(0, 1, 0), f[a + 0] = 1 - q(m, c, `x`, `z`, i, e), f[a + 1] = q(m, c, `z`, `x`, i, n);
                    break;
                case 3:
                    m.set(0, -1, 0), f[a + 0] = 1 - q(m, c, `x`, `z`, i, e), f[a + 1] = 1 - q(m, c, `z`, `x`, i, n);
                    break;
                case 4:
                    m.set(0, 0, 1), f[a + 0] = 1 - q(m, c, `x`, `y`, i, e), f[a + 1] = 1 - q(m, c, `y`, `x`, i, t);
                    break;
                case 5:
                    m.set(0, 0, -1), f[a + 0] = q(m, c, `x`, `y`, i, e), f[a + 1] = 1 - q(m, c, `y`, `x`, i, t)
            }
        }
        static fromJSON(t) {
            return new e(t.width, t.height, t.depth, t.segments, t.radius)
        }
    },
    Y = {
        key: (e = 800) => `${e} {px}px elevon, 'Arial Black', 'Helvetica Neue', sans-serif`,
        jp: (e = 800) => `${e} {px}px 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'Yu Gothic', sans-serif`,
        body: (e = 600) => `${e} {px}px proxima-nova, 'Helvetica Neue', Arial, sans-serif`
    },
    X = (e, t) => e.replace(`{px}`, String(t));
async function xt(e = 1800) {
    await Promise.race([Promise.all([`800 100px elevon`, `600 100px proxima-nova`, `700 100px proxima-nova`].map(e => document.fonts.load(e, `WE ARE FUNTECH.`).catch(() => []))), new Promise(t => setTimeout(t, e))])
}

function St(e, t, n, r = .5) {
    let i = new Map,
        a = n => {
            let a = i.get(n);
            if (a) return a;
            let o = n >> 1,
                s = o % t,
                c = o / t | 0;
            if (n & 1) {
                let n = e[c * t + s],
                    i = e[(c + 1) * t + s];
                a = [s, c + (r - n) / (i - n)]
            } else {
                let n = e[c * t + s],
                    i = e[c * t + s + 1];
                a = [s + (r - n) / (i - n), c]
            }
            return i.set(n, a), a
        },
        o = [];
    for (let i = 0; i < n - 1; i++)
        for (let n = 0; n < t - 1; n++) {
            let a = e[i * t + n],
                s = e[i * t + n + 1],
                c = e[(i + 1) * t + n + 1],
                l = e[(i + 1) * t + n],
                u = a > r | (s > r ? 2 : 0) | (c > r ? 4 : 0) | (l > r ? 8 : 0);
            if (u === 0 || u === 15) continue;
            let d = 2 * (i * t + n),
                f = 2 * ((i + 1) * t + n),
                p = 2 * (i * t + n) + 1,
                m = 2 * (i * t + n + 1) + 1,
                h = (e, t) => o.push([e, t]);
            switch (u) {
                case 1:
                case 14:
                    h(p, d);
                    break;
                case 2:
                case 13:
                    h(d, m);
                    break;
                case 3:
                case 12:
                    h(p, m);
                    break;
                case 4:
                case 11:
                    h(m, f);
                    break;
                case 6:
                case 9:
                    h(d, f);
                    break;
                case 7:
                case 8:
                    h(p, f);
                    break;
                case 5:
                    (a + s + c + l) / 4 > r ? (h(p, f), h(d, m)) : (h(p, d), h(m, f));
                    break;
                case 10:
                    (a + s + c + l) / 4 > r ? (h(p, d), h(m, f)) : (h(d, m), h(p, f))
            }
        }
    let s = new Map;
    o.forEach((e, t) => {
        for (let n of e) {
            let e = s.get(n);
            e ? e.push(t) : s.set(n, [t])
        }
    });
    let c = new Uint8Array(o.length),
        l = [];
    for (let e = 0; e < o.length; e++) {
        if (c[e]) continue;
        let t = [],
            n = e,
            r = o[e][0];
        for (let e = 0; e < 1e6; e++) {
            c[n] = 1, t.push(a(r));
            let e = o[n][0] === r ? o[n][1] : o[n][0],
                i = s.get(e).find(e => !c[e]);
            if (r = e, i === void 0) break;
            n = i
        }
        t.length > 6 && l.push(t)
    }
    return l
}

function Ct(e, t) {
    if (e.length < 3) return e;
    let [n, r] = e[0], [i, a] = e[e.length - 1], o = i - n, s = a - r, c = Math.hypot(o, s) || 1, l = 0, u = 0;
    for (let t = 1; t < e.length - 1; t++) {
        let i = Math.abs((e[t][0] - n) * s - (e[t][1] - r) * o) / c;
        i > l && (l = i, u = t)
    }
    return l <= t ? [e[0], e[e.length - 1]] : Ct(e.slice(0, u + 1), t).slice(0, -1).concat(Ct(e.slice(u), t))
}

function wt(e, t) {
    let n = 0,
        r = 0;
    for (let t = 1; t < e.length; t++) {
        let i = Math.hypot(e[t][0] - e[0][0], e[t][1] - e[0][1]);
        i > r && (r = i, n = t)
    }
    let i = Ct(e.slice(0, n + 1), t),
        a = Ct(e.slice(n).concat([e[0]]), t);
    return i.slice(0, -1).concat(a.slice(0, -1))
}
var Tt = e => {
    let t = 0;
    for (let n = 0; n < e.length; n++) {
        let r = e[n],
            i = e[(n + 1) % e.length];
        t += r[0] * i[1] - i[0] * r[1]
    }
    return t / 2
};

function Et(e, t) {
    let n = !1;
    for (let r = 0, i = t.length - 1; r < t.length; i = r++) {
        let [a, o] = t[r], [s, c] = t[i];
        o > e[1] != c > e[1] && e[0] < (s - a) * (e[1] - o) / (c - o) + a && (n = !n)
    }
    return n
}

function Dt(e, t = {}) {
    let {
        font: n = Y.key(800),
        height: r = 1,
        tracking: i = 0,
        lineGap: a = .28,
        res: o = 220,
        eps: s = .6
    } = t, c = Array.isArray(e) ? e : [e], l = o, u = document.createElement(`canvas`).getContext(`2d`);
    u.font = X(n, l), u.letterSpacing = `${i*l}px`;
    let d = u.measureText(`H`).actualBoundingBoxAscent || l * .72,
        f = c.map(e => u.measureText(e).width),
        m = Math.ceil(l * .25),
        h = d * (1 + a),
        g = Math.ceil(Math.max(...f) + m * 2),
        _ = Math.ceil(d + h * (c.length - 1) + m * 2 + l * .25),
        v = document.createElement(`canvas`);
    v.width = g, v.height = _;
    let y = v.getContext(`2d`, {
        willReadFrequently: !0
    });
    y.fillStyle = `#000`, y.fillRect(0, 0, g, _), y.fillStyle = `#fff`, y.font = X(n, l), y.letterSpacing = `${i*l}px`, y.textBaseline = `alphabetic`, c.forEach((e, t) => y.fillText(e, m, m + d + t * h));
    let b = y.getImageData(0, 0, g, _).data,
        x = new Float32Array(g * _);
    for (let e = 0; e < g * _; e++) x[e] = b[e * 4] / 255;
    let S = St(x, g, _).map(e => wt(e, s)).filter(e => e.length >= 3 && Math.abs(Tt(e)) > 4),
        C = S.map((e, t) => S.reduce((n, r, i) => n + (i !== t && Et(e[0], r) ? 1 : 0), 0)),
        w = r / d,
        T = g / 2,
        E = m + d + h * (c.length - 1) / 2 - d / 2,
        D = e => new N((e[0] - T) * w, -(e[1] - E) * w),
        O = [];
    S.forEach((e, t) => {
        if (C[t] % 2) return;
        let n = new oe(e.map(D));
        S.forEach((r, i) => {
            C[i] === C[t] + 1 && Et(r[0], e) && n.holes.push(new p(r.map(D)))
        }), O.push(n)
    });
    let k = (t.prefixes ? ? []).map(e => (m + y.measureText(e).width - T) * w);
    return {
        shapes: O,
        width: Math.max(...f) * w,
        height: (_ - m * 2 - l * .25) * w,
        marks: k,
        start: (m - T) * w
    }
}
var Ot = new Map;

function kt(e, t = {}) {
    let n = t.font ? ? Y.key(800),
        r = JSON.stringify([e, t.height, t.tracking, t.lineGap, t.res, t.eps, t.prefixes, n, document.fonts.check(X(n, 100), `WE`)]),
        i = Ot.get(r);
    return i || (i = Dt(e, t), Ot.set(r, i)), i
}

function At(e, t = {}) {
    let {
        depth: n = .05,
        bevel: i = .006
    } = t, a = kt(e, t), o = new r(a.shapes, {
        depth: n,
        bevelEnabled: i > 0,
        bevelThickness: i,
        bevelSize: i * .8,
        bevelSegments: 2,
        curveSegments: 1
    });
    return o.computeBoundingBox(), {
        geo: o,
        ...a
    }
}

function jt(e, t, n) {
    let r = document.createElement(`canvas`);
    r.width = t, r.height = n, e(r.getContext(`2d`), t, n);
    let i = new ce(r);
    return i.colorSpace = ve, i.anisotropy = 8, i.generateMipmaps = !0, i.minFilter = d, i.userData.reupload = !0, {
        texture: i,
        canvas: r,
        aspect: t / n
    }
}
var Z = {
    corrW: 2.6,
    ceil: 4.2,
    corrEnd: -23,
    vest: {
        x0: -3.2,
        x1: 3.4,
        z0: 0,
        z1: 5.6,
        ceil: 4.6
    },
    rot: {
        cz: -29.6,
        r: 6.6,
        ceil: 8.4,
        oculus: 1.5
    },
    portal: {
        w: 3,
        h: 2.85
    },
    plinthH: 1.08,
    socleH: .12
};

function Mt(t) {
    let n = yt(t),
        r = z.y,
        i = L(`wallPaint`, `vec4`),
        a = new B({
            roughness: .88,
            metalness: 0
        });
    a.name = `museum-wall`; {
        let e = i.w,
            t = n.fbm(w(z.x.add(z.z), r).mul(w(3, 1.2))).mul(.6).add(n.fbm(z.xz.add(r).mul(40)).mul(.4));
        a.colorNode = i.xyz.mul(t.mul(.2).add(.9)).mul(j(T(1), T(.55), W(e.mul(.55), e, r))).mul(j(T(.35), T(1), W(0, .12, r))), a.roughnessNode = j(T(.35), T(.88), W(.1, .13, r))
    }
    let o = (e, t, n) => {
            let r = new F(t),
                i = e.geometry.getAttribute(`position`).count,
                a = new Float32Array(i * 4);
            for (let e = 0; e < i; e++) a[e * 4] = r.r, a[e * 4 + 1] = r.g, a[e * 4 + 2] = r.b, a[e * 4 + 3] = n;
            return e.geometry.setAttribute(`wallPaint`, new R(a, 4)), e
        },
        c = new B({
            color: 460552,
            roughness: .95
        });
    c.name = `museum-ceil`;
    let l = new B({
        roughness: .88,
        metalness: 0
    });
    l.name = `museum-plaster`; {
        let e = n.fbm3(z.mul(s(6, 2, 6))),
            t = n.fbm3(z.mul(60)),
            i = s(.79, .745, .66).mul(e.mul(.08).add(t.mul(.04)).add(.93)).mul(j(T(.72), T(1), W(0, .16, r)));
        l.colorNode = j(i, i.mul(s(.93, .9, .86)), W(.55, .8, n.fbm3(z.mul(3).add(7))).mul(.5)), l.roughnessNode = T(.78).add(n.fbm3(z.mul(11)).mul(.18)).sub(W(.7, .95, n.fbm3(z.mul(25))).mul(.2))
    }
    let u = new B({
        color: 789516,
        roughness: .9
    });
    u.name = `museum-gap`;
    let d = new B({
        roughness: .12,
        metalness: 0
    });
    d.name = `museum-socle`; {
        let e = _(Pe(z.x.mul(3).add(r.mul(9)).add(n.fbm3(z.mul(14)).mul(5))));
        d.colorNode = s(.0035, .0035, .0042).add(s(.5, .5, .52).mul(T(1).sub(W(0, .06, e))).mul(.12))
    }
    let f = new B({
        color: 1184276,
        roughness: .35,
        metalness: .7
    });
    f.name = `museum-can`;
    let p = new B({
        roughness: .7,
        metalness: 0
    });
    p.name = `museum-stone`, p.colorNode = s(.043, .04, .034).mul(n.fbm3(z.mul(4)).mul(.35).add(n.fbm3(z.mul(40)).mul(.1)).add(.75));
    let m = S(1),
        h = new e;
    return h.name = `museum-led`, h.colorNode = s(1, .8, .55).mul(4).mul(m), {
        NZ: n,
        wall: o,
        wallM: a,
        ceil: c,
        plaster: l,
        gap: u,
        socle: d,
        can: f,
        stone: p,
        ledMat: h,
        led: m
    }
}

function Nt(e, t) {
    let n = yt(e),
        r = new B({
            roughness: .3,
            metalness: 0
        });
    r.name = `museum-floor`;
    let i = z.xz,
        a = i.div(.9),
        o = D(a),
        c = l(a),
        u = T(1).sub(W(0, .012, O(O(c.x, T(1).sub(c.x)), O(c.y, T(1).sub(c.y))))),
        d = _e(o),
        f = n.fbm(i.mul(2.5).add(d.mul(10))),
        p = W(.45, .8, n.fbm(i.mul(1.3).add(2)));
    r.colorNode = s(.0035, .0035, .0038).mul(d.mul(.35).add(.8).add(W(.55, .8, f).mul(.25))).mul(T(1).sub(u.mul(.5))), r.roughnessNode = y(T(.12).add(p.mul(.3)).add(u.mul(.25)).add(d.mul(.06)), .04, 1);
    let m = null;
    if (t > 0) {
        m = le({
            resolutionScale: t,
            samples: 0
        });
        let e = m.uvNode,
            n = w(1).div(de),
            i = p.mul(10).add(4),
            a = (t, r) => m.sample(e.add(w(t, r).mul(n).mul(i))).rgb,
            o = m.sample(e).rgb.mul(.28).add(a(1, .3).mul(.18)).add(a(-.3, 1).mul(.18)).add(a(-1, -.3).mul(.18)).add(a(.3, -1).mul(.18)),
            s = I(h.sub(z)),
            c = T(.04).add(T(.96).mul(V(T(1).sub(y(s.y, 0, 1)), 5)));
        r.emissiveNode = o.mul(c.mul(.8).add(.08)).mul(T(1).sub(u.mul(.6))).mul(T(1).sub(p.mul(.45)))
    }
    return {
        m: r,
        refl: m
    }
}

function Pt(e) {
    let t = e.getAttribute(`normal`);
    for (let e = 0; e < t.count; e++) t.setXYZ(e, -t.getX(e), -t.getY(e), -t.getZ(e));
    let n = e.getIndex();
    for (let e = 0; e < n.count; e += 3) {
        let t = n.getX(e + 1);
        n.setX(e + 1, n.getX(e + 2)), n.setX(e + 2, t)
    }
    return e
}

function Q(e, t, n, r, i = 0, a = 0) {
    let o = new E(new A(e, t), n);
    return o.position.set(...r), o.rotation.set(a, i, 0, `YXZ`), o.receiveShadow = !0, o
}

function Ft(e, t, n) {
    let r = new a;
    r.name = `museum-architecture`;
    let i = e.wallM,
        o = t => e.wall(t, 2894896, Z.ceil),
        c = t => e.wall(t, 2500138, Z.vest.ceil),
        l = Nt(t, n.mirror),
        u = new E(new A(24, 50), l.m);
    u.rotation.x = -Math.PI / 2, u.position.set(0, 0, -17), u.receiveShadow = !0, l.refl && u.add(l.refl.target), r.add(u);
    let d = -Z.corrEnd;
    r.add(o(Q(d, Z.ceil, i, [-Z.corrW, Z.ceil / 2, Z.corrEnd / 2], Math.PI / 2))), r.add(o(Q(d, Z.ceil, i, [Z.corrW, Z.ceil / 2, Z.corrEnd / 2], -Math.PI / 2))), r.add(Q(2 * Z.corrW, d, e.ceil, [0, Z.ceil, Z.corrEnd / 2], 0, Math.PI / 2));
    let f = new P(.05, .035, d + 5.6);
    for (let t of [-1.05, 1.05]) {
        let n = new E(f, e.can);
        n.position.set(t, Z.ceil - .02, (Z.corrEnd + Z.vest.z1) / 2), r.add(n)
    }
    let p = new P(2 * Z.corrW, .22, .14);
    for (let t = -1.6; t > Z.corrEnd; t -= 3.2) {
        let n = new E(p, e.ceil);
        n.position.set(0, Z.ceil - .11, t), n.receiveShadow = !0, r.add(n)
    }
    let m = Z.vest;
    r.add(c(Q(m.z1 - m.z0 + .4, m.ceil, i, [m.x0, m.ceil / 2, (m.z0 + m.z1) / 2], Math.PI / 2))), r.add(c(Q(m.x1 - m.x0, m.ceil, i, [(m.x0 + m.x1) / 2, m.ceil / 2, m.z1], Math.PI))), r.add(c(Q(m.z1 - m.z0, m.ceil, i, [m.x1, m.ceil / 2, (m.z0 + m.z1) / 2], -Math.PI / 2)));
    let h = -Z.corrW - m.x0,
        g = m.x1 - Z.corrW;
    r.add(c(Q(h, m.ceil, i, [m.x0 + h / 2, m.ceil / 2, 0], 0))), r.add(c(Q(g, m.ceil, i, [Z.corrW + g / 2, m.ceil / 2, 0], 0))), r.add(c(Q(2 * Z.corrW, m.ceil - Z.ceil, i, [0, (m.ceil + Z.ceil) / 2, 0], 0))), r.add(Q(m.x1 - m.x0, m.z1 - m.z0, e.ceil, [(m.x0 + m.x1) / 2, m.ceil, (m.z0 + m.z1) / 2], 0, Math.PI / 2));
    let _ = Z.portal,
        v = .7,
        y = Z.corrEnd + v / 2 - .01,
        b = Z.corrW - _.w / 2;
    for (let t of [-1, 1]) {
        let n = new E(new J(b, Z.ceil, v, 2, .02), e.stone);
        n.position.set(t * (_.w / 2 + b / 2), Z.ceil / 2, y), n.receiveShadow = !0, r.add(n)
    }
    let x = new E(new J(_.w + .02, Z.ceil - _.h, v, 2, .02), e.stone);
    x.position.set(0, _.h + (Z.ceil - _.h) / 2, y), x.receiveShadow = !0, r.add(x);
    let C = Z.corrEnd + v - .012;
    for (let t of [-1, 1]) {
        let n = new E(new P(.018, _.h, .018), e.ledMat);
        n.position.set(t * (_.w / 2 - .012), _.h / 2, C), r.add(n)
    }
    let w = new E(new P(_.w, .018, .018), e.ledMat);
    w.position.set(0, _.h - .012, C), r.add(w);
    let T = Z.rot,
        D = new ee(T.r, T.r, T.ceil, 64, 1, !0, Math.asin(Z.corrW / T.r), Math.PI * 2 - 2 * Math.asin(Z.corrW / T.r));
    Pt(D);
    let O = e.wall(new E(D, i), 2631724, T.ceil);
    O.position.set(0, T.ceil / 2, T.cz), O.receiveShadow = !0, r.add(O);
    let j = new E(new ie(T.oculus, T.r + .05, 64, 1), e.ceil);
    j.rotation.x = Math.PI / 2, j.position.set(0, T.ceil, T.cz), j.receiveShadow = !0, r.add(j);
    let M = S(0),
        N = new B({
            roughness: .7,
            metalness: 0
        });
    N.name = `museum-monument-plinth`, N.colorNode = e.stone.colorNode;
    let te = k(ot.z, 0).mul(W(.2, 1, z.y).mul(.85).add(.15)).add(k(ot.y, 0).mul(.9));
    N.emissiveNode = e.stone.colorNode.mul(s(.9, .92, 1)).mul(te).mul(M.mul(1.08));
    let ne = new E(new J(5.6, 1, 1.7, 3, .02), N);
    ne.position.set(0, .5, T.cz), ne.receiveShadow = !0, r.add(ne);
    let re = o(Q(2 * Z.corrW, T.ceil - Z.ceil, i, [0, (T.ceil + Z.ceil) / 2, Z.corrEnd], Math.PI));
    return r.add(re), {
        group: r,
        floor: u,
        refl: l.refl,
        monLit: M,
        dispose: () => {
            let e = new Set;
            r.traverse(t => {
                let n = t;
                n.geometry && e.add(n.geometry)
            });
            for (let t of e) t.dispose();
            l.m.dispose(), l.refl ? .dispose ? .(), N.dispose()
        }
    }
}
var It = {};

function Lt(e, t) {
    return It[e] ? ? = t()
}

function Rt() {
    for (let e of Object.keys(It)) It[e].dispose(), delete It[e]
}

function zt(e) {
    let t = x(e);
    for (let t of e) t.dispose();
    if (!t) throw Error(`museum: parts could not be merged`);
    return t
}

function Bt(e, t = {}) {
    let n = t.w ? ? .48,
        r = t.d ? ? n,
        i = t.h ? ? Z.plinthH,
        o = t.scale ? ? 1,
        s = new a,
        c = new E(Lt(`coltop${n}x${r}x${i}`, () => {
            let e = new J(n, i - .05, r, 3, .006);
            e.translate(0, (i - .05) / 2, 0);
            let t = new J(n + .006, .036, r + .006, 3, .005);
            return t.translate(0, i - .018, 0), zt([e, t])
        }), e.plaster),
        l = new E(Lt(`gap${n}x${r}`, () => new P(n - .024, .014, r - .024)), e.gap);
    l.position.y = i - .05 + .007;
    for (let e of [c, l]) e.castShadow = !0, e.receiveShadow = !0, s.add(e);
    let u = null;
    if (t.socle !== !1) {
        let t = [
            [0, 0],
            [1.25, 0],
            [1.25, .08],
            [1.12, .12],
            [1.1, .16],
            [.72, .26],
            [.6, .42],
            [.62, .62],
            [.8, .72],
            [.82, .8],
            [.9, .84],
            [.95, .92],
            [.95, 1],
            [0, 1]
        ];
        u = new E(Lt(`socle`, () => new g(t.map(([e, t]) => new N(e * .085, t * Z.socleH)), 48)), e.socle), u.scale.setScalar(o), u.position.y = i, u.castShadow = !0, u.receiveShadow = !0, s.add(u)
    }
    return {
        group: s,
        top: i,
        socle: u
    }
}

function Vt(t) {
    let n = new a,
        r = new E(Lt(`canstem`, () => {
            let e = new ee(.045, .05, .16, 16);
            e.rotateX(Math.PI / 2);
            let t = new ee(.008, .008, .12, 6);
            return t.translate(0, .08, 0), zt([e, t])
        }), t.can);
    n.add(r);
    let i = S(.02),
        o = new e;
    o.name = `museum-lens`, o.colorNode = s(1, .85, .62).mul(i);
    let c = new E(Lt(`lens`, () => new xe(.04, 16)), o);
    return c.position.z = .081, n.add(c), {
        group: n,
        lens: i,
        dispose() {
            o.dispose()
        }
    }
}

function Ht() {
    return jt((e, t) => {
        e.clearRect(0, 0, t, 500), e.fillStyle = `#efebe4`, e.font = X(Y.jp(800), 150), e.fillText(`展示室 01`, 8, 150), e.font = X(Y.jp(800), 150), e.fillText(`FUNTECH のひとびと`, 8, 330), e.font = X(Y.body(600), 46), e.letterSpacing = `12px`, e.fillText(`GALLERY 01 — THE PEOPLE OF FUNTECH — 2026`, 14, 440)
    }, 2048, 500)
}
var Ut = [{
        type: `strip`,
        position: [-1.3, 3.6, .001],
        size: [9, .16],
        color: `#fff1de`,
        intensity: 6,
        gradient: 0
    }, {
        type: `strip`,
        position: [1.3, 3.6, .001],
        size: [9, .16],
        color: `#fff1de`,
        intensity: 6,
        gradient: 0
    }, {
        type: `dot`,
        position: [-1, 3.2, 1.7],
        size: [.3, .3],
        color: `#ffd29c`,
        intensity: 30
    }, {
        type: `dot`,
        position: [1, 3.2, 1.7],
        size: [.3, .3],
        color: `#ffd29c`,
        intensity: 30
    }, {
        type: `dot`,
        position: [-1, 3.3, -1.6],
        size: [.22, .22],
        color: `#ffd29c`,
        intensity: 16
    }, {
        type: `dot`,
        position: [1, 3.3, -1.6],
        size: [.22, .22],
        color: `#ffd29c`,
        intensity: 16
    }, {
        type: `rect`,
        position: [0, 2.7, 3.2],
        size: [2.8, 1.5],
        color: `#fff4e6`,
        intensity: 4.5,
        softness: .45
    }, {
        type: `rect`,
        position: [0, 2, -6.5],
        size: [1.6, 2.8],
        color: `#dde8ff`,
        intensity: 3.5,
        softness: .45
    }, {
        type: `rect`,
        position: [-3, .9, .3],
        size: [1.8, 1.4],
        color: `#ffc890`,
        intensity: 1.2,
        softness: .5
    }, {
        type: `rect`,
        position: [3, .9, .3],
        size: [1.8, 1.4],
        color: `#ffc890`,
        intensity: 1.2,
        softness: .5
    }, {
        type: `strip`,
        position: [-2.6, 1.6, -1.9],
        size: [.25, 2.6],
        color: `#b5c8ff`,
        intensity: 9,
        gradient: .3
    }, {
        type: `strip`,
        position: [2.6, 1.6, -1.9],
        size: [.25, 2.6],
        color: `#b5c8ff`,
        intensity: 9,
        gradient: .3
    }, {
        type: `rect`,
        position: [0, -1.4, 1.5],
        size: [4, 2],
        color: `#ffd9b0`,
        intensity: .5,
        softness: .5
    }],
    Wt = [{
        type: `rect`,
        position: [4.2, 2.3, .4],
        size: [3.2, 2],
        color: `#fff6ec`,
        intensity: 5.5,
        softness: .4
    }, {
        type: `strip`,
        position: [3, .9, -2.2],
        size: [.35, 2.6],
        color: `#ffffff`,
        intensity: 12,
        gradient: .3
    }, {
        type: `rect`,
        position: [-4.2, 1.8, .8],
        size: [3.5, 2.6],
        color: `#ff481b`,
        intensity: 3,
        softness: .35
    }, {
        type: `strip`,
        position: [-.6, 1.4, 3],
        size: [.35, 2.6],
        color: `#ff481b`,
        intensity: 10,
        gradient: .2
    }, {
        type: `strip`,
        position: [-.6, 1.4, -3],
        size: [.35, 2.6],
        color: `#ff481b`,
        intensity: 10,
        gradient: .2
    }],
    Gt = [{
        type: `dot`,
        position: [0, 7.5, 0],
        size: [2.4, 2.4],
        color: `#cfe0ff`,
        intensity: 8
    }, {
        type: `rect`,
        position: [-3.4, 4, 3.6],
        size: [1.6, 1.2],
        color: `#ffcf98`,
        intensity: 6,
        softness: .45
    }, {
        type: `rect`,
        position: [3.6, 4, 3.4],
        size: [1.6, 1.2],
        color: `#ffcf98`,
        intensity: 5,
        softness: .45
    }, {
        type: `strip`,
        position: [-4.2, 3, -3.8],
        size: [.4, 4],
        color: `#aac4ff`,
        intensity: 6,
        gradient: .3
    }, {
        type: `strip`,
        position: [4.2, 3, -3.8],
        size: [.4, 4],
        color: `#aac4ff`,
        intensity: 6,
        gradient: .3
    }, {
        type: `rect`,
        position: [0, 2, 6],
        size: [3, 2.2],
        color: `#ffe6c8`,
        intensity: 1.2,
        softness: .5
    }, {
        type: `rect`,
        position: [0, -1, 2],
        size: [5, 2.5],
        color: `#ffd9b0`,
        intensity: .35,
        softness: .5
    }];

function Kt() {
    let t = (e, t) => S(e).onObjectUpdate(({
            object: e
        }) => {
            let n = e.userData.card;
            return n ? t(n) : void 0
        }),
        n = t(0, e => e.type),
        r = t(.25, e => e.soft),
        a = t(.25, e => e.softV),
        o = t(0, e => e.grad),
        c = t(new F, e => e.col),
        l = new e({
            transparent: !0,
            blending: 2,
            depthWrite: !1,
            side: 2
        });
    l.name = `museum-env-card`, l.forceSinglePass = !0;
    let u = i().mul(2).sub(1),
        d = V(T(1).sub(W(0, 1, f(u))), 1.6),
        p = T(1).sub(_(u.x)),
        m = T(1).sub(_(u.y)),
        h = W(0, r, p).mul(W(0, a, m)).mul(T(1).sub(o.mul(T(1).sub(u.y.add(1).mul(.5)))));
    l.colorNode = s(c).mul(te(n.lessThan(.5), d, h));
    let g = S(new F).onObjectUpdate(({
            object: e
        }) => e.userData.tint),
        v = new e({
            side: 1,
            depthWrite: !1
        });
    v.name = `museum-env-dome`;
    let y = I(ke);
    return v.colorNode = j(s(.012, .011, .01), s(g), W(-.2, .25, y.y).mul(T(1).sub(W(.35, .9, y.y)))), {
        card: l,
        dome: v,
        dispose() {
            l.dispose(), v.dispose()
        }
    }
}

function qt(e, t, n, r) {
    let i = new Oe,
        a = new E(new je(30, 32, 16), r.dome);
    a.userData.tint = n, a.position.copy(t), a.renderOrder = -1, i.add(a);
    let o = new A(1, 1);
    for (let n of e) {
        let e = new E(o, r.card),
            a = n.type === `dot` ? 0 : n.softness ? ? .25;
        e.userData.card = {
            type: n.type === `dot` ? 0 : 1,
            soft: a,
            softV: a * (n.type === `strip` ? .35 : 1),
            grad: n.type === `strip` ? n.gradient ? ? 0 : 0,
            col: new F(n.color).multiplyScalar(n.intensity)
        }, e.position.set(n.position[0] + t.x, n.position[1], n.position[2] + t.z), e.scale.set(n.size[0], n.size[1], 1), e.lookAt(t), e.renderOrder = 10, i.add(e)
    }
    return {
        scene: i,
        dispose() {
            a.geometry.dispose(), o.dispose()
        }
    }
}
var Jt = () => new Promise(e => requestAnimationFrame(() => e()));
async function Yt(e, t, n, r = new H(0, 1.6, 0)) {
    let i = new Te(e),
        a = Kt(),
        o = t.map(e => ({
            k: e,
            b: qt(e === `museum` ? Ut : e === `volt` ? [...Ut, ...Wt] : Gt, r, e === `rotunda` ? new F(.018, .02, .028) : new F(.03, .024, .019), a)
        })),
        s = new Map;
    try {
        for (let {
                b: t
            } of o) await be(e, () => i.fromScene(t.scene, 0, .05, 60, {
            size: n,
            position: r
        }).dispose(), {
            pmrem: !0
        }), await Jt();
        for (let {
                k: t,
                b: a
            } of o) {
            let o = i.fromScene(a.scene, 0, .05, 60, {
                size: n,
                position: r
            });
            Me(e, o), s.set(t, o), await Jt()
        }
    } finally {
        for (let {
                b: e
            } of o) e.dispose();
        a.dispose(), i.dispose()
    }
    let c = new Map;
    for (let [t, n] of s) c.set(t, await He(e, n, {
        frame: Jt
    }));
    return {
        get: e => c.get(e).texture,
        dispose() {
            for (let e of c.values()) e.dispose()
        }
    }
}

function Xt(e) {
    let t = e * 2654435761 >>> 0 || 1;
    return () => {
        t |= 0, t = t + 1831565813 | 0;
        let e = Math.imul(t ^ t >>> 15, 1 | t);
        return e = e + Math.imul(e ^ e >>> 7, 61 | e) ^ e, ((e ^ e >>> 14) >>> 0) / 4294967296
    }
}
var Zt = new H(0, -1, 0),
    $ = new H,
    Qt = new M,
    $t = class {
        mesh;
        u = {
            color: S(new F(1, .85, .65)),
            k: S(0),
            len: S(1),
            time: S(0)
        };
        constructor(t, r) {
            let i = yt(t),
                a = new e({
                    transparent: !0,
                    depthWrite: !1,
                    blending: 2,
                    side: 2
                });
            a.name = `beam`, a.forceSinglePass = !0;
            let o = ye.y.negate(),
                c = V(_(n(Ee, se)), 1.5),
                l = o.mul(this.u.len),
                u = T(1).div(l.mul(l).add(.35)),
                d = W(0, .06, o).mul(T(1).sub(W(.55, 1, o))),
                f = i.fbm3(z.mul(2.3).add(s(0, this.u.time.mul(.08), this.u.time.mul(.05)))).mul(.9).add(.55);
            a.colorNode = s(this.u.color).mul(c.mul(u).mul(d).mul(f)).mul(this.u.k), this.mesh = new E(r, a), this.mesh.frustumCulled = !1, this.mesh.renderOrder = 6, this.mesh.visible = !1
        }
        set(e, t, n, r, i) {
            let a = e.distanceTo(t) * 1.12,
                o = Math.tan(n) * a;
            this.mesh.position.copy(e), $.subVectors(t, e).normalize(), this.mesh.quaternion.copy(Qt.setFromUnitVectors(Zt, $)), this.mesh.scale.set(o, a, o), this.u.len.value = a, this.u.k.value = r, i && this.u.color.value.copy(i), this.mesh.visible = r > 1e-4
        }
        dispose() {
            this.mesh.material.dispose()
        }
    };

function en() {
    let e = new ue(1, 1, 28, 6, !0);
    return e.translate(0, -.5, 0), e
}
var tn = class {
    mesh;
    u = {
        time: S(0)
    };
    A;
    B;
    C;
    geo;
    base;
    constructor(r, i) {
        let a = yt(r),
            o = this.base = en(),
            c = new me;
        c.setIndex(o.getIndex()), c.setAttribute(`position`, o.getAttribute(`position`)), c.setAttribute(`normal`, o.getAttribute(`normal`)), this.A = new t(new Float32Array(i * 4), 4), this.B = new t(new Float32Array(i * 4), 4), this.C = new t(new Float32Array(i * 4), 4);
        for (let e of [this.A, this.B, this.C]) e.setUsage(Le);
        c.setAttribute(`iBeamA`, this.A), c.setAttribute(`iBeamB`, this.B), c.setAttribute(`iBeamC`, this.C), c.instanceCount = i, this.geo = c;
        let l = new e({
            transparent: !0,
            depthWrite: !1,
            blending: 2,
            side: 2
        });
        l.name = `beams`, l.forceSinglePass = !0;
        let u = L(`iBeamA`, `vec4`),
            d = L(`iBeamB`, `vec4`),
            f = L(`iBeamC`, `vec4`),
            p = d.xyz,
            g = I(m(p, te(_(p.y).greaterThan(.99), s(1, 0, 0), s(0, 1, 0)))),
            v = m(g, p),
            y = ye,
            b = L(`normal`, `vec3`);
        l.positionNode = u.xyz.add(g.mul(y.x.mul(d.w))).sub(p.mul(y.y.mul(u.w))).add(v.mul(y.z.mul(d.w)));
        let x = Ie(I(g.mul(b.x.div(d.w)).sub(p.mul(b.y.div(u.w))).add(v.mul(b.z.div(d.w))))),
            S = y.y.negate(),
            C = V(_(n(I(x), I(h.sub(z)))), 1.5),
            w = S.mul(u.w),
            D = T(1).div(w.mul(w).add(.35)),
            O = W(0, .06, S).mul(T(1).sub(W(.55, 1, S))),
            k = a.fbm3(z.mul(2.3).add(s(0, this.u.time.mul(.08), this.u.time.mul(.05)))).mul(.9).add(.55);
        l.colorNode = f.xyz.mul(C.mul(D).mul(O).mul(k)), this.mesh = new E(c, l), this.mesh.name = `beams`, this.mesh.frustumCulled = !1, this.mesh.renderOrder = 6
    }
    set(e, t, n, r, i, a) {
        let o = t.distanceTo(n) * 1.12;
        $.subVectors(n, t).normalize(), this.A.setXYZW(e, t.x, t.y, t.z, o), this.B.setXYZW(e, $.x, $.y, $.z, Math.tan(r) * o), this.C.setXYZW(e, a.r * i, a.g * i, a.b * i, 0)
    }
    commit() {
        for (let e of [this.A, this.B, this.C]) e.needsUpdate = !0
    }
    dispose() {
        this.geo.dispose(), this.base.dispose(), this.mesh.material.dispose()
    }
};

function nn(e, t, n, r, i, a) {
    let o = [t.clone(), n.clone()],
        s = t.distanceTo(n) * r,
        c = new H,
        l = new H;
    for (let t = 0; t < 7; t++) {
        let t = [];
        for (let n = 0; n < o.length - 1; n++) {
            let r = o[n],
                i = o[n + 1],
                a = r.clone().add(i).multiplyScalar(.5);
            l.subVectors(i, r).normalize(), c.set(e() - .5, e() - .5, e() - .5).cross(l).normalize(), a.addScaledVector(c, (e() - .5) * 2 * s), t.push(r, a)
        }
        t.push(o[o.length - 1]), o = t, s *= .55
    }
    a.push({
        pts: o,
        w: 1
    });
    let u = Math.floor(i * 8);
    for (let r = 0; r < u; r++) {
        let r = 2 + Math.floor(e() * (o.length * .7)),
            i = o[Math.min(r, o.length - 2)],
            s = o[Math.min(r + 1, o.length - 1)].clone().sub(i).normalize(),
            c = new H(e() - .5, (e() - .8) * .6, e() - .5).normalize(),
            l = t.distanceTo(n) * (.1 + e() * .25),
            u = i.clone().addScaledVector(s.lerp(c, .6).normalize(), l),
            d = [i.clone(), u],
            f = l * .3;
        for (let t = 0; t < 4; t++) {
            let t = [];
            for (let n = 0; n < d.length - 1; n++) {
                let r = d[n].clone().add(d[n + 1]).multiplyScalar(.5);
                r.add(new H(e() - .5, e() - .5, e() - .5).multiplyScalar(f)), t.push(d[n], r)
            }
            t.push(d[d.length - 1]), d = t, f *= .55
        }
        a.push({
            pts: d,
            w: .45
        })
    }
}
var rn = class t {
        max;
        mesh;
        pos;
        att;
        col;
        g;
        n = 0;
        constructor(t = 6e3) {
            this.max = t;
            let n = new Ae;
            this.pos = new Float32Array(t * 4 * 3), this.att = new Float32Array(t * 4 * 2), this.col = new Float32Array(t * 4 * 3), n.setAttribute(`position`, new R(this.pos, 3).setUsage(Le)), n.setAttribute(`rib`, new R(this.att, 2).setUsage(Le)), n.setAttribute(`rcol`, new R(this.col, 3).setUsage(Le));
            let r = new Uint32Array(t * 6);
            for (let e = 0; e < t; e++) r.set([e * 4, e * 4 + 1, e * 4 + 2, e * 4 + 1, e * 4 + 3, e * 4 + 2], e * 6);
            n.setIndex(new R(r, 1)), n.boundingSphere = new he(new H, 1e4);
            let i = new e({
                transparent: !0,
                depthWrite: !1,
                blending: 2,
                side: 2
            });
            i.name = `ribbons`, i.forceSinglePass = !0;
            let a = L(`rib`, `vec2`),
                o = L(`rcol`, `vec3`),
                c = _(a.x),
                l = W(.32, 0, c),
                d = u(c.mul(-3.2));
            i.colorNode = j(s(o), s(1, 1, .96), l).mul(l.mul(12).add(d.mul(2.6))).mul(a.y), this.mesh = new E(n, i), this.mesh.frustumCulled = !1, this.mesh.renderOrder = 12, this.g = n
        }
        seg(e, t, n, r, i) {
            if (this.n >= this.max) return;
            let a = this.n++,
                o = this.pos,
                s = this.att,
                c = this.col,
                l = a * 12;
            o[l] = e.x + n.x, o[l + 1] = e.y + n.y, o[l + 2] = e.z + n.z, o[l + 3] = e.x - n.x, o[l + 4] = e.y - n.y, o[l + 5] = e.z - n.z, o[l + 6] = t.x + n.x, o[l + 7] = t.y + n.y, o[l + 8] = t.z + n.z, o[l + 9] = t.x - n.x, o[l + 10] = t.y - n.y, o[l + 11] = t.z - n.z;
            let u = a * 8;
            s[u] = 1, s[u + 1] = r, s[u + 2] = -1, s[u + 3] = r, s[u + 4] = 1, s[u + 5] = r, s[u + 6] = -1, s[u + 7] = r;
            for (let e = 0; e < 4; e++) c[l + e * 3] = i.r, c[l + e * 3 + 1] = i.g, c[l + e * 3 + 2] = i.b
        }
        _side = new H;
        _dir = new H;
        _view = new H;
        static BOLT = new F(.62, .78, .9);
        update(e, n, r = []) {
            this.n = 0;
            let i = new H().setFromMatrixPosition(e.matrixWorld);
            for (let e of n) {
                if (e.amp <= .002) continue;
                let n = [];
                nn(Xt(e.seed), e.a, e.b, e.jag ? ? .1, e.branch ? ? .5, n);
                for (let r of n) {
                    let n = e.width * r.w;
                    for (let a = 0; a < r.pts.length - 1; a++) {
                        let o = r.pts[a],
                            s = r.pts[a + 1];
                        this._dir.subVectors(s, o), this._view.subVectors(o, i), this._side.crossVectors(this._dir, this._view).normalize().multiplyScalar(n * 3);
                        let c = e.amp * (r.w < 1 ? .6 * (1 - a / r.pts.length) : 1);
                        this.seg(o, s, this._side, c, e.color ? ? t.BOLT)
                    }
                }
            }
            for (let e of r) this._dir.subVectors(e.p1, e.p0), this._view.subVectors(e.p0, i), this._side.crossVectors(this._dir, this._view).normalize().multiplyScalar(e.width * 3), this.seg(e.p0, e.p1, this._side, e.amp, e.color);
            this.g.setDrawRange(0, this.n * 6);
            for (let e of [`position`, `rib`, `rcol`]) {
                let t = this.g.getAttribute(e);
                t.clearUpdateRanges(), t.addUpdateRange(0, this.n * 4 * t.itemSize), t.needsUpdate = !0
            }
            this.mesh.visible = this.n > 0
        }
        dispose() {
            this.g.dispose(), this.mesh.material.dispose()
        }
    },
    an = new H,
    on = new H;

function sn(e, t, n = [], r = 2400) {
    for (let i of t) {
        let t = Xt(i.seed);
        for (let a = 0; a < i.n && n.length < r; a++) {
            let r = i.origin(a, t),
                o = i.life * (.5 + t()),
                s = t() - .5,
                c = t() * .8 + .1,
                l = t() - .5,
                u = i.speed * (.4 + t()),
                d = e - (i.t0 + r.delay);
            if (d < 0 || d > o) continue;
            an.set(s, c, l).normalize().multiplyScalar(.5).add(r.n).normalize().multiplyScalar(u);
            let f = i.gravity ? ? 4.9,
                p = (e, t) => t.copy(r.p).addScaledVector(an, e).add(new H(0, -f * e * e, 0)),
                m = p(d, new H),
                h = p(Math.max(0, d - .02), on).clone(),
                g = (1 - d / o) ** 1.5 * (1.2 + 3 * Math.exp(-d * 20));
            n.push({
                p0: h,
                p1: m,
                width: .0022,
                amp: g,
                color: i.color
            })
        }
    }
    return n
}

function cn(e, t) {
    let n = new A(1, 1),
        r = new E(n, e);
    return r.count = t, r.frustumCulled = !1, r
}
var ln = class {
    object;
    u = {
        origin: S(new H),
        size: S(new H(6, 4, 6)),
        time: S(0),
        gain: S(1),
        apex: ut([...[, , , , ]].map(() => new Re), `vec4`),
        axis: ut([...[, , , , ]].map(() => new Re), `vec4`),
        col: ut([...[, , , , ]].map(() => new Re), `vec4`),
        count: S(0)
    };
    mat;
    constructor(e = 1400) {
        let r = Xt(77),
            a = new Float32Array(e * 4);
        for (let t = 0; t < e; t++) a[t * 4] = r(), a[t * 4 + 1] = r(), a[t * 4 + 2] = r(), a[t * 4 + 3] = r();
        let c = new t(a, 4),
            d = new re({
                transparent: !0,
                depthWrite: !1,
                blending: 2
            });
        d.name = `motes`;
        let p = this.u,
            m = at(c),
            h = m.w,
            g = l(m.xyz.sub(p.origin.div(p.size))).sub(.5).mul(p.size).add(p.origin),
            _ = h.mul(6.2831),
            v = s(Pe(p.time.mul(.31).add(_.mul(3))).mul(.12), Pe(p.time.mul(.23).add(_.mul(5))).mul(.1), Pe(p.time.mul(.27).add(_.mul(2))).mul(.12)),
            y = g.add(v);
        d.positionNode = y, d.scaleNode = T(.0045).mul(h.mul(.8).add(.6)), d.colorNode = Fe(() => {
            let e = s(0).toVar();
            o(4, ({
                i: t
            }) => {
                C(Ce(t).lessThan(Ce(p.count)), () => {
                    let r = p.apex.element(t),
                        i = p.axis.element(t),
                        a = p.col.element(t),
                        o = y.sub(r.xyz),
                        s = n(o, i.xyz),
                        c = f(o),
                        l = s.div(k(c, 1e-4)),
                        u = W(r.w, j(r.w, T(1), .5), l).mul(T(1).sub(W(i.w.mul(.7), i.w, s))).mul(W(0, .1, s));
                    e.addAssign(a.xyz.mul(u).div(c.mul(c).add(.35)))
                })
            });
            let t = Pe(p.time.mul(h.mul(5).add(2)).add(_.mul(7))).mul(.4).add(.6),
                r = i().sub(.5).mul(2),
                a = u(n(r, r).mul(-4));
            return e.mul(t).mul(p.gain).mul(a).mul(h.add(.4))
        })(), this.mat = d, this.object = cn(d, e), this.object.renderOrder = 7
    }
    set(e) {
        let t = Math.min(4, e.length);
        this.u.count.value = t;
        let n = this.u.apex.array,
            r = this.u.axis.array,
            i = this.u.col.array;
        for (let a = 0; a < t; a++) {
            let t = e[a];
            n[a].set(t.apex.x, t.apex.y, t.apex.z, t.cos), r[a].set(t.axis.x, t.axis.y, t.axis.z, t.range), i[a].set(t.color.r * t.k, t.color.g * t.k, t.color.b * t.k, 0)
        }
    }
    dispose() {
        this.mat.dispose(), this.object.geometry.dispose()
    }
};

function un(e, t, n, r) {
    let a = new ge,
        c = ae(t, n, {
            samples: r.samples
        }),
        l = c.getTextureNode(),
        u = {
            blur: S(new N(0, 0)),
            zoom: S(0)
        },
        d = Fe(() => {
            let e = i(),
                t = s(0).toVar();
            return C(f(u.blur).add(_(u.zoom)).greaterThan(4e-4), () => {
                let n = u.blur.add(e.sub(.5).mul(u.zoom));
                o(8, ({
                    i: r
                }) => {
                    let i = T(r).add(.5).div(8).sub(.5);
                    t.addAssign(l.sample(e.add(n.mul(i))).rgb)
                }), t.divAssign(8)
            }).Else(() => {
                t.assign(fe(l, e, a.ca))
            }), k(t, s(0))
        })(),
        [p, m, h] = r.bloom ? ? [.25, .45, .92],
        g = De(d, p, m, h);
    g.setResolutionScale(r.bloomScale);
    let v = new we(e, ne(d.add(g.rgb), a, i())),
        y = null;
    return {
        look: a,
        U: u,
        glow: g,
        pipe: v,
        scenePass: c,
        render(e) {
            v.renderTo(e)
        },
        lowRes(e) {
            e && !y ? (y = [c.getResolutionScale(), g.getResolutionScale()], c.setResolutionScale(1 / 16), g.setResolutionScale(1 / 16)) : !e && y && (c.setResolutionScale(y[0]), g.setResolutionScale(y[1]), y = null)
        },
        dispose() {
            v.dispose(), g.dispose(), c.dispose()
        }
    }
}
var dn = 10,
    fn = {
        name: `museum-portal`,
        duration: 1,
        build: ({
            a: e,
            b: t,
            uv: n,
            p: r
        }) => Fe(() => {
            let i = w(.5, .52),
                a = n.sub(i),
                o = W(0, .62, r),
                c = j(T(1), T(.26), V(o, 1.7)),
                l = o.mul(T(1).sub(o)).mul(.9).add(o.mul(.12)),
                d = s(0);
            for (let t = 0; t < dn; t++) {
                let n = c.mul(T(1).sub(l.mul(t / 9)));
                d = d.add(e(i.add(a.mul(n))).rgb)
            }
            d = d.div(dn);
            let p = W(.38, 1, r),
                m = j(T(.72), T(1), p),
                h = T(1).sub(p).mul(.35),
                g = s(0);
            for (let e = 0; e < dn; e++) {
                let n = m.mul(T(1).add(h.mul(e / 9)));
                g = g.add(t(i.add(a.mul(n))).rgb)
            }
            g = g.div(dn);
            let _ = u(V(r.sub(.5).div(.13), 2).negate()),
                v = s(1, .78, .52).mul(_).mul(T(.35).add(u(f(a.mul(w(1.4, 1))).mul(-3)).mul(.9))),
                b = W(.42, .62, r);
            return y(Be(j(Ve(d.mul(T(1).add(o.mul(.5)))), Ve(g.mul(T(1).add(T(1).sub(p).mul(.6)))), b)).add(v), 0, 1)
        })()
    };

function pn(e, t, r, i, a, o, c = .3) {
    let l = j(s(.16, .085, .04), s(.24, .13, .06), e.fbm(t.mul(w(60, 36)))).toVar(),
        u = e.fbm(t.mul(w(40, 24)).add(4)),
        d = y(T(1).sub(W(.3, .5, i.add(u.sub(.5).mul(.3)))).mul(.85).add(T(1).sub(W(.3, .47, r)).mul(.6)).add(W(.62, .86, u).mul(c)), 0, 1).toVar(),
        f = W(.58, .78, r.add(i.sub(.5).mul(.4)));
    l.assign(j(l, s(.6, .38, .19), f));
    let p = j(s(.1, .3, .24), s(.32, .56, .46), e.fbm(t.mul(60))).toVar();
    if (a && o) {
        let e = U(a.verd, o.xy.mul(.85).add(w(.31, .12))).rgb,
            t = U(a.bronze, o.xy.mul(1.3)).rgb;
        p.assign(j(p, e.mul(1.1), .85)), l.mulAssign(T(.55).add(n(t, s(1 / 3)).mul(.9))), d.assign(y(d.add(n(e, s(1 / 3)).sub(.3).mul(.4).mul(d)), 0, 1))
    }
    return {
        col: j(l, p, d.mul(.9)),
        patina: d,
        rough: j(T(.46).sub(W(.58, .78, r).mul(.18)), T(.9), d),
        metal: T(1).sub(d.mul(.9))
    }
}

function mn(e, t) {
    let n = y(e.sub(.5).mul(2.1).add(.5), 0, 1),
        r = y(t.sub(.5).mul(1.6).add(.5), 0, 1);
    return W(0, .62, n).mul(W(0, .6, r))
}
export {
    yt as A, ut as B, Y as C, At as D, xt as E, ft as F, We as G, it as H, pt as I, Ue as J, Ge as K, dt as L, ct as M, lt as N, kt as O, at as P, mt as R, Ht as S, X as T, rt as U, nt as V, Qe as W, Ze as Y, Rt as _, $t as a, Vt as b, rn as c, sn as d, cn as f, Ft as g, Mt as h, un as i, _t as j, J as k, en as l, Z as m, mn as n, tn as o, Yt as p, Ye as q, fn as r, ln as s, pn as t, Xt as u, Nt as v, jt as w, Bt as x, Pt as y, st as z
};