import {
    $t as e,
    A as t,
    B as n,
    Bn as r,
    Bt as i,
    Ct as a,
    Dn as o,
    Dt as s,
    E as c,
    Et as l,
    Fn as u,
    G as d,
    H as f,
    I as p,
    In as m,
    J as h,
    Jt as g,
    K as _,
    L as v,
    M as y,
    O as b,
    Ot as x,
    P as S,
    Pt as C,
    Q as w,
    Qn as T,
    Sn as E,
    St as D,
    Tt as O,
    U as k,
    Un as A,
    Vn as ee,
    W as j,
    Wt as M,
    X as N,
    Xn as te,
    Y as P,
    Yn as F,
    Z as I,
    Zn as L,
    _n as ne,
    _r as re,
    _t as R,
    an as ie,
    at as ae,
    bt as z,
    cn as oe,
    ct as se,
    dn as ce,
    dr as le,
    dt as ue,
    en as de,
    fn as fe,
    fr as pe,
    hn as B,
    hr as me,
    ht as he,
    i as ge,
    ir as _e,
    it as V,
    j as H,
    jt as ve,
    k as ye,
    kn as be,
    ln as xe,
    lr as Se,
    lt as U,
    m as Ce,
    mn as we,
    mr as Te,
    mt as Ee,
    n as De,
    nt as Oe,
    o as ke,
    or as Ae,
    pn as je,
    pt as Me,
    q as Ne,
    qt as Pe,
    r as Fe,
    rn as Ie,
    rt as Le,
    s as Re,
    sr as ze,
    st as Be,
    un as Ve,
    ur as He,
    ut as Ue,
    v as We,
    vn as Ge,
    vr as W,
    vt as Ke,
    w as G,
    wt as qe,
    xt as K,
    yr as Je,
    yt as q,
    zt as Ye
} from "./post-DJ5SZDIO.js";
import {
    t as Xe
} from "./pmrem-B-AQRfYD.js";
var Ze = () => new Promise(e => requestAnimationFrame(() => e())),
    J = 1.95,
    Qe = -14.5,
    $e = .85,
    et = .05,
    tt = {
        y: 1.02,
        z: -2.3,
        r: 1.05
    },
    nt = new W(0, .84, -1.55),
    rt = {
        pos: new W(0, 3.55, -5.6),
        width: 3.5
    };

function it(e) {
    let t = e * 2654435761 >>> 0 || 1;
    return () => (t ^= t << 13, t >>>= 0, t ^= t >>> 17, t ^= t << 5, t >>>= 0, t % 1000003 / 1000003)
}

function at() {
    let e = it(20260927),
        t = [];
    for (let n of [-1, 1]) {
        let r = 24;
        for (; r > -11;) {
            let i = 2.8 + e() * 2.6,
                a = Math.max(-11, r - i),
                o = 7.5 + e() * 11,
                s = (e() - .5) * .36,
                c = e();
            t.push({
                side: n,
                z0: r,
                z1: a,
                h: o,
                x: n * (J + s),
                type: c < .45 ? 0 : c < .7 ? 1 : 2,
                tint: .4 + e() * .5,
                hue: e()
            }), r = a - (e() < .22 ? .7 + e() * .5 : 0)
        }
    }
    return t.push({
        side: 0,
        end: !0,
        z0: Qe,
        z1: -18.5,
        h: 21,
        x: 0,
        type: 0,
        tint: .7,
        hue: .3
    }), t
}

function ot(e, t, n) {
    let r = e.find(e => !e.end && e.side === t && n <= e.z0 && n >= e.z1);
    return r ? r.x : t * J
}

function st(e, t) {
    let n = (t, n) => ot(e, t, n),
        r = [],
        i = e => {
            r.push({
                seed: r.length * 1.931 + .27,
                group: r.length % 3,
                ...e
            })
        },
        a = (e, r, a, o, s, c, l = {}) => {
            let u = n(r, o),
                d = t[e],
                f = d ? d.body[2] * d.aspect / d.body[3] : .3,
                p = f >= 1 ? s : s * f,
                m = l.sizeRef === `image` ? (d.aspect >= 1 ? s : s * d.aspect) * d.body[2] : p;
            i({
                id: e,
                mount: `project`,
                side: r,
                wallX: u,
                pos: [u - r * (.12 + m / 2), a, o],
                rotY: 0,
                twoSided: !0,
                size: s,
                depth: c,
                ...l
            })
        },
        o = (e, t, r, a, o, s, c = {}) => {
            let l = n(t, a);
            i({
                id: e,
                mount: `wall`,
                side: t,
                wallX: l,
                pos: [l - t * (s + .06), r, a],
                rotY: t < 0 ? Math.PI / 2 : -Math.PI / 2,
                twoSided: !1,
                size: o,
                depth: s,
                ...c
            })
        };
    i({
        id: `A01`,
        mount: `arch`,
        side: 0,
        wallX: 0,
        span: J,
        pos: [0, 3.25, 6.6],
        rotY: 0,
        twoSided: !0,
        size: 3.3,
        depth: .14
    }), a(`A02`, 1, 4.4, -3.6, 3.1, .14, {
        sizeRef: `image`
    }), o(`A03`, -1, 2.55, -1.2, 2.3, .14), a(`A04`, -1, 3.9, .9, 3.4, .16), a(`A05`, 1, 4.3, 2.2, 3.7, .12), o(`A06`, 1, 2.25, -.4, 1.7, .1, {
        flick: {
            rect: [.06, .36, .94, .63],
            mode: `band`,
            rate: 11
        }
    }), a(`A07`, -1, 5.6, -4.4, 4.1, .12), o(`A08`, -1, 1.95, 2.6, .62, .04, {
        bad: .14
    }), o(`A09`, 1, 2.9, 5.4, 1.3, .05, {
        flick: {
            rect: [.36, .08, .56, .92],
            mode: `tube`,
            rate: 19
        }
    }), [
        [`A10`, -1, 3.9],
        [`A11`, 1, 7.3],
        [`A12`, -1, 9.6],
        [`A13`, 1, -1.9],
        [`A14`, -1, 13.2]
    ].forEach(([e, t, n]) => a(e, t, 2.3, n, .52, .2)), [
        [`A15`, [0, 5.6], 5.2, .14],
        [`A16`, [-5.2, 6.4], 5.2, .1],
        [`A17`, [5, 3.4], 2.4, .08],
        [`A18`, [5.3, 8], 4.6, .14],
        [`A19`, [-5, 3], 2, .1]
    ].forEach(([e, [t, n], r, a]) => i({
        id: e,
        mount: `end`,
        side: 0,
        wallX: 0,
        pos: [t, n, Qe + a + .06],
        rotY: 0,
        twoSided: !1,
        size: r,
        depth: a
    }));
    let s = [`A20`, `A21`, `A22`, `A23`, `A24`, `A25`, `A29`, `A26`, `A27`, `A28`];
    return [
        [-1, 1.35],
        [1, .95],
        [-1, -1.45],
        [1, -2.15],
        [-1, 3.6],
        [1, 4.5],
        [-1, -6],
        [1, -7.4],
        [1, 8.9],
        [-1, 10.2]
    ].forEach(([e, r], a) => {
        let o = s[a],
            c = t[o],
            l = o === `A29`,
            u = l ? .4 : 1.02,
            d = e * (1.53 - a % 2 * .12),
            f = (c.body[1] + c.body[3] / 2) * u;
        i({
            id: o,
            mount: `ground`,
            side: e,
            wallX: n(e, r),
            pos: [d, (l ? .06 : 0) + f, r],
            rotY: e * .25,
            twoSided: !0,
            size: u,
            sizeRef: `image`,
            depth: l ? .14 : .3,
            stand: !0
        })
    }), o(`A30`, -1, 1.45, .35, .8, .03), o(`A31`, -1, 1.05, -.9, .95, .03), o(`A32`, 1, 1.25, .5, .7, .03), [
        [`A33`, -1, 5.9],
        [`A34`, 1, 3.1],
        [`A35`, -1, -2.9],
        [`A36`, 1, 10.6]
    ].forEach(([e, t, r]) => {
        let a = n(t, r);
        i({
            id: e,
            mount: `hang`,
            side: t,
            wallX: a,
            pos: [a - t * .62, 2.2, r],
            rotY: 0,
            twoSided: !0,
            size: .95,
            depth: .06
        })
    }), r
}

function ct(e, t) {
    let n = [],
        r = new E,
        i = new L,
        a = new L().setFromAxisAngle(new W(0, 1, 0), Math.PI);
    for (let o of e) {
        let e = t[o.id];
        if (!e) continue;
        let [s, c, l, u] = e.body, d = e.aspect, f, p;
        o.sizeRef === `image` ? d >= 1 ? (f = o.size, p = f / d) : (p = o.size, f = p * d) : l * d >= u ? (f = o.size / l, p = f / d) : (p = o.size / u, f = p * d);
        let m = l * f,
            h = u * p;
        i.setFromEuler(r.set(0, o.rotY, 0));
        let g = new W(1, 0, 0).applyQuaternion(i),
            _ = new W(0, 1, 0),
            v = new W(0, 0, 1).applyQuaternion(i),
            y = new W(...o.pos),
            b = (.5 - (s + l / 2)) * f,
            x = (.5 - (c + u / 2)) * p,
            S = [],
            C = o.twoSided ? o.depth / 2 + .003 : .003;
        S.push({
            c: y.clone().addScaledVector(g, b).addScaledVector(_, x).addScaledVector(v, C),
            q: i.clone(),
            back: !1
        }), o.twoSided && S.push({
            c: y.clone().addScaledVector(g, -b).addScaledVector(_, x).addScaledVector(v, -C),
            q: i.clone().multiply(a),
            back: !0
        }), n.push({ ...o,
            M: e,
            W: f,
            H: p,
            BW: m,
            BH: h,
            P: y,
            right: g,
            up: _,
            nrm: v,
            faces: S,
            area: m * h,
            index: n.length
        })
    }
    return n
}

function lt(e, t) {
    let n = e => 1 + Math.hypot(e.x, e.y - 1, e.z * .6);
    return e.map(e => ({
        s: e,
        score: 1.25 * e.area * (.4 + e.M.level * 2) / n(e.P)
    })).sort((e, t) => t.score - e.score).slice(0, t).map(({
        s: e
    }) => ({
        pos: e.P.clone().addScaledVector(e.nrm, e.twoSided ? 0 : .45),
        col: new B(e.M.emit[0], e.M.emit[1], e.M.emit[2]),
        base: 2.6 * Math.min(3, e.area) * (.35 + e.M.level * 1.6),
        sign: e.index
    }))
}
var ut = class {
        parts = [];
        sizes = {};
        constructor(e = {}) {
            this.sizes = { ...e
            }
        }
        add(e, t = {}, n) {
            let r = (e.index, e);
            n && r.applyMatrix4(n);
            for (let [e, n] of Object.entries(t)) this.sizes[e] === void 0 && (this.sizes[e] = n.length);
            return this.parts.push({
                g: r,
                c: t
            }), this
        }
        get count() {
            return this.parts.length
        }
        build() {
            let e = 0,
                t = 0;
            for (let {
                    g: n
                } of this.parts) {
                let r = n.getAttribute(`position`).count;
                e += r, t += n.index ? n.index.count : r
            }
            let n = new Float32Array(e * 3),
                r = new Float32Array(e * 3),
                i = new Float32Array(e * 2),
                a = {};
            for (let [t, n] of Object.entries(this.sizes)) a[t] = new Float32Array(e * n);
            let o = e > 65535 ? new Uint32Array(t) : new Uint16Array(t),
                s = 0,
                c = 0,
                l = (e, t, n, r, i) => {
                    if (t) {
                        if (!t.isInterleavedBufferAttribute && t.itemSize === n && t.array instanceof Float32Array) {
                            e.set(t.array.subarray(0, i * n), r * n);
                            return
                        }
                        for (let a = 0; a < i; a++)
                            for (let i = 0; i < n; i++) e[(r + a) * n + i] = t.getComponent(a, i)
                    }
                };
            for (let {
                    g: e,
                    c: t
                } of this.parts) {
                let u = e.getAttribute(`position`),
                    d = e.getAttribute(`normal`),
                    f = e.getAttribute(`uv`),
                    p = u.count;
                l(n, u, 3, s, p), l(r, d, 3, s, p), l(i, f, 2, s, p);
                for (let [e, n] of Object.entries(this.sizes)) {
                    let r = t[e] ? ? Array(n).fill(0),
                        i = a[e];
                    if (n === 1) i.fill(r[0] ? ? 0, s, s + p);
                    else
                        for (let e = 0; e < p; e++)
                            for (let t = 0; t < n; t++) i[(s + e) * n + t] = r[t] ? ? 0
                }
                if (e.index) {
                    let t = e.index.array;
                    for (let e = 0; e < t.length; e++) o[c + e] = t[e] + s;
                    c += t.length
                } else {
                    for (let e = 0; e < p; e++) o[c + e] = s + e;
                    c += p
                }
                s += p, e.dispose()
            }
            let u = new Ve;
            u.setAttribute(`position`, new xe(n, 3)), u.setAttribute(`normal`, new xe(r, 3)), u.setAttribute(`uv`, new xe(i, 2));
            for (let [e, t] of Object.entries(this.sizes)) u.setAttribute(e, new xe(a[e], t));
            return u.setIndex(new xe(o, 1)), u.computeBoundingSphere(), this.parts = [], u
        }
    },
    dt = new r,
    ft = new L;
new W;
var pt = new W(0, 1, 0),
    mt = new W(1, 0, 0);

function ht(e, t, n = ft.identity()) {
    let r = new oe(1, 1, 1);
    return r.applyMatrix4(dt.compose(e, n, t)), r
}

function gt(e, t, n = .035, i = !1) {
    let a = e.distanceTo(t),
        o = i ? new ne(n, n, a, 8, 1, !0).rotateX(Math.PI / 2) : new oe(n, n, a),
        s = t.clone().sub(e).normalize(),
        c = new r().lookAt(e, t, Math.abs(s.y) > .95 ? mt : pt);
    return c.setPosition(e.clone().add(t).multiplyScalar(.5)), o.applyMatrix4(c), o
}

function _t(e, t = .009, n = 24) {
    return new me(new fe(e), Math.max(n, e.length * 4), t, 5, !1)
}

function vt(e, t, n, r = 8) {
    let i = [];
    for (let a = 0; a <= r; a++) {
        let o = a / r;
        i.push(e.clone().lerp(t, o).add(new W(0, -n * 4 * o * (1 - o), 0)))
    }
    return i
}
var yt = new Map,
    bt = () => new Promise(e => requestAnimationFrame(() => e()));

function xt(e, t) {
    let n = new Float32Array(e * e),
        r = t * 2654435761 >>> 0 || 1;
    for (let e = 0; e < n.length; e++) r ^= r << 13, r >>>= 0, r ^= r >>> 17, r ^= r << 5, r >>>= 0, n[e] = r % 100003 / 100003;
    return n
}

function St(e, t) {
    let n = xt(e, t);
    return (t, r) => {
        let i = t * e,
            a = r * e,
            o = Math.floor(i),
            s = Math.floor(a),
            c = i - o,
            l = a - s,
            u = c * c * (3 - 2 * c),
            d = l * l * (3 - 2 * l),
            f = (o % e + e) % e,
            p = (s % e + e) % e,
            m = (f + 1) % e,
            h = (p + 1) % e,
            g = n[p * e + f],
            _ = n[p * e + m],
            v = n[h * e + f],
            y = n[h * e + m];
        return g + (_ - g) * u + (v - g) * d + (g - _ - v + y) * u * d
    }
}

function Ct(e, t, n, r = 48) {
    let i = yt.get(e);
    return i || (i = (async () => {
        let e = new Uint8Array(t * t * 4),
            i = new Float32Array(4);
        for (let a = 0; a < t; a++) {
            for (let r = 0; r < t; r++) {
                n(r / t, a / t, r, a, i);
                let o = (a * t + r) * 4;
                e[o] = Math.round(Math.min(1, Math.max(0, i[0])) * 255), e[o + 1] = Math.round(Math.min(1, Math.max(0, i[1])) * 255), e[o + 2] = Math.round(Math.min(1, Math.max(0, i[2])) * 255), e[o + 3] = Math.round(Math.min(1, Math.max(0, i[3])) * 255)
            }
            a % r === r - 1 && await bt()
        }
        return e
    })(), yt.set(e, i)), i
}

function wt(e) {
    return (t, n) => {
        let r = t * 374761393 + n * 668265263 + e * 1442695041 | 0;
        return r = Math.imul(r ^ r >>> 13, 1274126177), r ^= r >>> 16, (r >>> 0) / 4294967296
    }
}
var Y = x,
    Tt = Y.uniformArray,
    Et = Y.output,
    Dt = Y.normalWorld;
Y.positionView;
var Ot = Y.rtt,
    kt = Y.int;
Y.atan;
var At = Y.sqrt;
Y.sign, Y.mat2;
var jt = Y.interleavedGradientNoise;
Y.cameraViewMatrix, Y.vertexIndex, Y.faceDirection, Y.log2, Y.round, Y.reflectVector, Y.modelWorldMatrixInverse, Y.time, Y.cameraNear, Y.cameraFar, Y.premultiplyAlpha, Y.diffuseColor;
var Mt = Y.normalLocal,
    X = G(([e]) => {
        let t = d(l(e.x, e.y, e.x).mul(.1031)).toVar();
        return t.addAssign(n(t, t.yzx.add(33.33))), d(t.x.add(t.y).mul(t.z))
    }),
    Nt = G(([e]) => {
        let t = j(e),
            n = d(e),
            r = n.mul(n).mul(k(3).sub(n.mul(2))),
            i = X(t),
            a = X(t.add(O(1, 0))),
            o = X(t.add(O(0, 1))),
            s = X(t.add(O(1, 1)));
        return I(I(i, a, r.x), I(o, s, r.x), r.y)
    });
G(([e]) => {
    let t = e.div(12.92),
        n = e.add(.055).div(1.055).pow(2.4);
    return I(t, n, z(.04045, e))
});
async function Pt(e = 256, t = 1) {
    let n = [8, 16, 32, 64].map((e, n) => St(e, t * 31 + n)),
        r = [32, 64, 128].map((e, n) => St(e, t * 37 + 11 + n)),
        i = St(6, t * 41 + 23),
        a = St(13, t * 43 + 29),
        o = wt(t),
        s = await Ct(`noise:${e}:${t}`, e, (e, t, s, c, l) => {
            l[0] = (n[0](e, t) * .5 + n[1](e, t) * .25 + n[2](e, t) * .125 + n[3](e, t) * .0625) / .94, l[1] = (r[0](e, t) * .5 + r[1](e, t) * .25 + r[2](e, t) * .125) / .88, l[2] = o(s, c), l[3] = i(e, t * 16) * .6 + a(e, t * 12.3) * .4
        }),
        c = new Ge(s, e, e, T);
    return c.wrapS = c.wrapT = _e, c.generateMipmaps = !0, c.minFilter = m, c.magFilter = u, c.anisotropy = 4, c.needsUpdate = !0, c
}
G(([e, t]) => {
    let n = h(e);
    return S(f(n.mul(n).mul(t).negate()).sub(f(t.negate())).div(k(1).sub(f(t.negate()))), 0, 1)
});

function Ft(e = 12, t = 6) {
    let n = [],
        r = [],
        i = [],
        a = [];
    for (let t = 0; t < e; t++) n.push(new Je(0, -100, 0, 1)), r.push(new Je);
    for (let e = 0; e < Math.max(t, 4); e++) i.push(new Je(0, -100, 0, 1)), a.push(new Je);
    return {
        nL: e,
        nF: t,
        time: D(0),
        clock: D(0),
        key: D(new B(.35, 1, .18)),
        accent: D(new B(1, .25, .6)),
        keyGain: D(1),
        skyAmb: D(new B(.03, .034, .06)),
        groundAmb: D(new B(.012, .01, .016)),
        pool: D(new W(0, .9, -1.4)),
        poolK: D(.55),
        spill: D(1),
        lp: Tt(n, `vec4`),
        lc: Tt(r, `vec4`),
        fogDens: D(.036),
        fogFall: D(.16),
        fogCol: D(new B(.01, .014, .024)),
        scatter: D(1),
        fp: Tt(i, `vec4`),
        fc: Tt(a, `vec4`),
        glass: D(new Je(0, 0, 1, 1e4)),
        lpArr: n,
        lcArr: r,
        fpArr: i,
        fcArr: a
    }
}

function It(e, t, r) {
    return G(() => {
        let i = V(r),
            a = I(l(e.groundAmb), l(e.skyAmb), i.y.mul(.5).add(.5)),
            o = t.sub(e.pool),
            s = l(e.key).mul(e.keyGain).mul(e.poolK).div(n(o, o).mul(.22).add(1)),
            u = a.add(s).toVar();
        return c(e.nL, ({
            i: r
        }) => {
            let a = e.lp.element(r),
                o = e.lc.element(r),
                s = a.xyz.sub(t),
                c = n(s, s),
                l = P(n(i, s.mul(k(1).div(At(P(c, 1e-4))))), 0).mul(.8).add(.2),
                d = k(1).div(c.mul(.55).add(.35)).mul(q(a.w.mul(a.w), a.w.mul(a.w).mul(.25), c));
            u.addAssign(o.xyz.mul(l).mul(d).mul(e.spill))
        }), u
    })()
}

function Lt(e, t, r) {
    let i = n(e.glass.xyz, y).sub(e.glass.w);
    return S(i.div(P(n(e.glass.xyz, t).negate(), 1e-4)), 0, r)
}

function Rt(e) {
    return G(() => {
        let r = Et.rgb,
            i = Et.a,
            a = U.sub(y),
            o = P(h(a), .001),
            u = a.div(o),
            d = Lt(e, u, o),
            p = y.add(u.mul(d)),
            m = P(o.sub(d), .001),
            g = p.y,
            _ = U.y,
            v = e.fogFall,
            b = _.sub(g),
            x = R(b.abs().lessThan(.001), k(.001), b),
            C = f(g.mul(v).negate()),
            w = I(C, C.sub(f(_.mul(v).negate())).div(v.mul(x)), S(b.abs().mul(8), 0, 1)),
            T = k(1).sub(f(e.fogDens.mul(m).mul(P(w, .02)).negate())),
            E = l(e.fogCol).add(l(e.key).mul(e.keyGain).mul(.004)),
            D = l(0).toVar();
        c(e.nF, ({
            i: r
        }) => {
            let i = e.fp.element(r),
                a = e.fc.element(r),
                o = i.xyz.sub(p),
                s = n(o, u),
                c = At(P(n(o, o).sub(s.mul(s)), 0).add(i.w)),
                l = t(m.sub(s).div(c)).add(t(s.div(c)));
            D.addAssign(a.xyz.mul(l.div(c)))
        });
        let O = e.fogDens.mul(P(w, .05)).mul(e.scatter);
        return s(I(r, E, T).add(D.mul(O)), i)
    })()
}

function zt(e, t) {
    let n = t.sub(y),
        r = h(n);
    return f(e.fogDens.mul(r.sub(Lt(e, n.div(P(r, .001)), r))).mul(.6).negate())
}
var Bt = Math.PI * 2;

function Vt(t, n, r) {
    let i = new e;
    i.name = `alley-walls`;
    let a = H(`aWall`, `vec4`),
        o = H(`aTint`, `vec3`),
        s = U,
        c = Dt,
        u = b(c),
        f = R(u.x.greaterThan(.5), s.zy, R(u.z.greaterThan(.5), s.xy, s.xz)),
        m = s.x.add(s.z),
        h = K(n, f.div(3.2)).r.mul(.55).add(K(n, f.div(.85)).g.mul(.45)),
        g = Ue(K(n, O(f.y.mul(.1), f.x.mul(.31))).a, 3).mul(1.6),
        _ = a.x,
        v = k(.14).add(h.mul(.09)).sub(g.mul(.07)),
        y = f.div(.123),
        x = d(y),
        S = z(N(N(x.x, x.y), N(k(1).sub(x.x), k(1).sub(x.y))), .07),
        C = X(j(y)),
        w = I(k(.22).add(C.mul(.09)).add(h.mul(.04)).sub(g.mul(.09)), k(.08), S),
        T = p(f.x.mul(Bt * 7.5)).mul(.5).add(.5),
        E = k(.13).add(T.mul(.05)).add(h.mul(.06)).sub(g.mul(.06)).mul(k(.8).add(T.mul(.35)));
    return i.colorNode = G(() => {
        let e = R(_.lessThan(.5), v, R(_.lessThan(1.5), w, E)).toVar(),
            i = k(1).sub(q(.02, .9, s.y)).mul(k(.65).add(K(n, O(m.mul(.33), s.y.mul(.5))).r.mul(.35))),
            u = d(s.y.sub(2.95).div(2.9)),
            f = Ue(K(n, O(m.mul(.23), .37)).r, 2.5),
            p = q(.35, 1, u).mul(z(1.6, s.y)).mul(f),
            h = q(.55, .8, K(n, O(m.mul(.07), s.y.mul(.06)).add(.41)).r).mul(.35);
        e.mulAssign(k(1).sub(i.mul(.55)).sub(p.mul(.5)).sub(h.mul(.5)));
        let g = l(o).mul(e).add(l(.012, .011, .01).mul(h)).toVar(),
            y = k(1).sub(q(3.1, 3.45, s.y)),
            b = K(r, O(m.div(4.8).add(a.y.mul(.618)), s.y.div(3.2))).rgb;
        return g.assign(I(g, b.mul(.9).mul(k(1).sub(i.mul(.45))), y)), g.mul(It(t, s, c))
    })(), i
}

function Ht(t) {
    let n = new e;
    n.name = `alley-windows`;
    let r = H(`aP`, `vec4`),
        i = H(`aCol`, `vec3`),
        o = a(),
        s = r.y,
        c = z(.05, o.x).mul(z(o.x, .95)).mul(z(.06, o.y)).mul(z(o.y, .94)),
        u = k(1).sub(k(1).sub(z(.015, b(o.x.sub(.5)))).mul(z(.5, X(O(s, 3))))),
        f = l(.008, .01, .016).add(l(.02, .025, .04).mul(q(.2, 1, o.y.add(o.x.sub(.5).mul(.4))))).add(l(t.key).mul(t.keyGain).mul(.006)),
        p = I(k(1), k(.55).add(z(.5, d(o.y.mul(14).add(X(O(s, 1))))).mul(.45)), r.z),
        m = k(.55).add(q(0, .7, o.y).mul(.45).mul(k(.7).add(Nt(o.mul(3).add(s)).mul(.3)))),
        h = k(1).sub(z(.72, Nt(O(o.x.mul(4).add(s.mul(9)), .5))).mul(z(o.y, k(.45).add(X(O(s, 2)).mul(.2)))).mul(.8)),
        g = l(i).mul(r.w).mul(p).mul(m).mul(h);
    return n.colorNode = I(f, g, r.x).mul(c).mul(u).add(l(.01).mul(k(1).sub(c))), n
}

function Ut(t, n) {
    let r = new e;
    r.name = `alley-shops`;
    let i = H(`aP`, `vec4`),
        o = H(`aCol`, `vec3`),
        s = a(),
        c = i.x,
        u = i.y,
        f = i.z,
        m = i.w,
        h = (e, t) => X(O(e, t)),
        g = K(n, O(s.x.mul(f).div(1.8).add(u.mul(.37)), s.y)).rgb.mul(It(t, U, Dt)).mul(1.3),
        _ = z(.03, d(s.x.mul(P(k(1), j(f.div(1.1)))))),
        v = d(s.y.mul(6)),
        y = j(s.y.mul(6)),
        b = I(k(.15), k(1), q(.08, .16, v)).mul(k(1).sub(q(.85, 1, v).mul(.6))),
        x = O(j(s.x.mul(f).mul(7)), y),
        S = X(x.add(u)),
        C = l(p(S.mul(Bt)), p(S.add(.33).mul(Bt)), p(S.add(.67).mul(Bt))).mul(.65).add(.35),
        w = z(.18, d(s.x.mul(f).mul(7))).mul(z(.3, v)),
        T = q(.78, 1, s.y),
        E = z(.8, Nt(O(s.x.mul(f).mul(1.5).add(u.mul(5)), .3))).mul(z(s.y, .72)).mul(z(.05, s.y)),
        D = k(.55).add(q(.2, .9, s.y.add(Ke(s.x.mul(f).mul(1.7).add(u)).mul(.3))).mul(.45)),
        A = j(s.x.mul(f).mul(2.2).add(u)),
        ee = l(h(A, 1), h(A, 2), h(A, 3)),
        M = I(l(o).mul(.5), l(o).mul(C).mul(1.3), w.mul(z(.25, X(x.add(3))))).mul(m).mul(k(.55).add(T.mul(1.2))).mul(b).mul(_).mul(k(1).sub(E.mul(.75))).mul(z(.04, s.y)).mul(k(1).sub(D.mul(.6))).mul(.35).add(l(.012, .014, .02).mul(D)).add(ee.mul(ee).mul(.05).mul(q(.25, 1, s.y)).mul(z(.55, h(A, 7)))).mul(k(1).sub(z(.5, h(u, 5)).mul(z(.6, d(s.x.mul(f).mul(9)))).mul(.7))),
        N = d(s.x.mul(4)),
        te = z(.06, N).mul(z(.45, s.y)),
        F = z(.4, N).mul(z(N, .6)).mul(z(.62, s.y)).mul(z(s.y, .86)).mul(z(.5, X(O(j(s.x.mul(4)), j(s.y.mul(12))).add(u)))),
        L = s.y.div(.45),
        ne = q(.55, .6, L).mul(k(1).sub(q(.66, .7, L))),
        re = z(.62, Nt(O(s.x.mul(f).mul(2.2).add(u.mul(3)), .5))).mul(z(L, .9)).mul(z(.12, L)),
        ie = z(.8, d(s.x.mul(f).mul(3).add(u))).mul(z(L, .45)).mul(z(.05, L)),
        ae = l(1, .62, .32).mul(m).mul(k(.05).add(q(.55, 1, L).mul(.3)).add(ne.mul(.25))).mul(k(1).sub(P(re, ie).mul(.85))).mul(k(1).sub(z(.45, s.y))).mul(z(.03, s.y)),
        oe = l(o).mul(m).mul(.22).mul(k(.75).add(Nt(s.mul(O(8, 30))).mul(.25))).mul(k(.7).add(q(.45, .6, s.y).mul(.3))),
        se = I(I(ae, oe, te), l(.85, .82, .78).mul(m).mul(.25), F.mul(te)),
        ce = z(.02, d(s.x.mul(P(k(1), j(f.div(1.4)))))),
        le = k(.55).add(z(.5, d(s.y.mul(5))).mul(.45)),
        ue = k(.5).add(Nt(O(s.x.mul(f).mul(12), j(s.y.mul(5)).mul(3).add(u))).mul(.5)),
        de = l(.92, .96, 1).mul(m).mul(le).mul(ue).mul(ce).mul(z(.04, s.y)).mul(.7),
        fe = z(.08, s.x).mul(z(s.x, .92)).mul(z(.42, s.y)).mul(z(s.y, .93)),
        pe = O(s.x.sub(.08).div(.84), s.y.sub(.42).div(.51)),
        B = O(j(pe.x.mul(8)), j(pe.y.mul(4))),
        me = d(O(pe.x.mul(8), pe.y.mul(4))),
        he = z(.2, me.x).mul(z(me.x, .8)).mul(z(.18, me.y)).mul(z(me.y, .78)),
        ge = X(B.add(u)),
        _e = l(p(ge.mul(Bt)), p(ge.add(.33).mul(Bt)), p(ge.add(.67).mul(Bt))).mul(.5).add(.5),
        V = l(o).mul(.9).mul(k(.8).add(Nt(s.mul(30)).mul(.2))),
        ve = z(.72, s.x).mul(z(s.x, .86)).mul(z(.2, s.y)).mul(z(s.y, .3)),
        ye = I(I(V, l(.03), ve), I(l(1.1, 1.12, 1.15), _e.mul(1.4), he), fe).mul(m),
        be = R(c.lessThan(.5), g, R(c.lessThan(1.5), M, R(c.lessThan(2.5), se, R(c.lessThan(3.5), de, ye)))),
        xe = z(.025, s.x).mul(z(s.x, .975)).mul(z(s.y, .965));
    return r.colorNode = I(l(.008, .008, .01), be, R(c.greaterThan(3.5), k(1), xe)), r
}

function Wt(t, r, i) {
    let o = new e;
    o.name = `alley-props`;
    let s = H(`aAlb`, `vec3`),
        c = H(`aPm`, `vec4`),
        u = U,
        d = Dt,
        f = b(d),
        p = R(f.x.greaterThan(.5), u.zy, R(f.z.greaterThan(.5), u.xy, u.xz)),
        m = K(r, p.div(.9)).rgb.mul(1.7),
        h = a(),
        g = K(i, h.mul(O(.5, 1))).rgb,
        _ = K(i, h.mul(O(.5, 1)).add(O(.5, 0))).rgb,
        v = c.x,
        x = R(v.lessThan(.5), l(1), R(v.lessThan(1.5), m, R(v.lessThan(2.5), g, _))),
        C = l(s).mul(x),
        w = V(y.sub(u)),
        T = Ue(k(1).sub(S(n(d, w), 0, 1)), 4),
        E = l(t.fogCol).mul(6).add(l(t.key).mul(t.keyGain).mul(.03)).mul(T).mul(c.y);
    return o.colorNode = C.mul(It(t, u, d)).add(E).add(l(s).mul(c.z)), o
}

function Gt(t, n) {
    let r = new e;
    r.name = `alley-lanterns`;
    let i = H(`aP`, `vec4`),
        o = H(`aCol`, `vec3`),
        s = a(),
        c = K(t, O(s.x.mul(2).add(i.y.mul(.31)), s.y)).rgb,
        u = Ue(P(Ke(s.y.mul(Math.PI)), 0), 2),
        d = I(l(1), l(o).div(P(P(o.r, o.g), P(o.b, .001))), .55);
    return r.colorNode = c.mul(d).mul(i.w).mul(k(.8).add(u.mul(1.4))).mul(n), r
}

function Kt(t) {
    let n = new e({
        side: 1,
        depthWrite: !1
    });
    n.name = `alley-sky`, n.fog = !1;
    let r = V(Be).y;
    return n.colorNode = I(l(.05, .03, .09), l(.004, .006, .02), q(0, .6, r)).add(l(.09, .03, .06).mul(f(P(r, 0).mul(-9)))).add(l(t.key).mul(t.keyGain).mul(.012).mul(f(P(r, 0).mul(-6)))), n
}

function qt() {
    let t = new e;
    t.name = `alley-towers`;
    let n = U,
        r = R(b(Dt.x).greaterThan(.5), n.zy, n.xy).mul(O(1.6, 1.1)),
        i = j(r),
        a = d(r),
        o = z(.25, a.x).mul(z(a.x, .8)).mul(z(.3, a.y)).mul(z(a.y, .8)),
        s = z(.72, X(i.add(3))),
        c = I(l(1, .75, .45), l(.7, .85, 1), z(.5, X(i.add(9))));
    return t.colorNode = l(.006, .006, .012).add(c.mul(o).mul(s).mul(.35)), t
}

function Jt() {
    return {
        refl: D(1),
        ripple: D(1),
        puddle: D(1),
        time: D(0)
    }
}
var Yt = {
    alb: .549,
    rough: .604,
    wet: .124
};

function Xt(t, n, r, i, a) {
    let o = ue({
            resolutionScale: i,
            generateMipmaps: !0,
            samples: 0
        }),
        s = new e;
    s.name = `alley-floor`;
    let c = U,
        u = c.xz,
        p = u.div(1.4),
        m = K(a.albedo, p).r,
        g = K(a.rough, p).r,
        _ = K(a.normal, p).xy.mul(2).sub(1),
        v = K(r, u.mul(.37).add(.5)).r,
        x = k(1).sub(q(0, .35, b(c.x).sub(1.35))).mul(.07),
        C = K(r, u.mul(.07).add(O(.3, .1))).r.mul(.72).add(K(r, u.mul(.23)).g.mul(.28)).add(x).add(K(a.wet, u.mul(.075).add(.3)).r.sub(Yt.wet).mul(.16)),
        w = q(.52, .58, C).mul(n.puddle),
        T = q(.42, .52, C).mul(k(1).sub(w)),
        E = K(r, u.mul(O(.35, .11))).r,
        D = I(S(k(.74).sub(E.mul(.22)).add(g.sub(Yt.rough).mul(.85)), .2, .92).mul(k(1).sub(T.mul(.55))), k(.03), w),
        A = m.mul(.0475 / Yt.alb).mul(I(k(.75).add(v.mul(.45)), k(.3), w)).mul(k(1).sub(T.mul(.45))),
        ee = It(t, c, l(0, 1, 0)).mul(A);
    return s.colorNode = G(() => {
        let e = O(0).toVar();
        for (let [t, r] of [
                [2.6, 0],
                [4.1, 17.31]
            ]) {
            let i = u.mul(t).add(r),
                a = j(i),
                o = X(a.add(r * .2)),
                s = a.add(O(X(a.add(3.1)), X(a.add(7.7))).mul(.6).add(.2)),
                c = k(.55).add(o.mul(.6)),
                l = d(n.time.div(c).add(o)).mul(c),
                p = i.sub(s),
                m = h(p),
                g = m.sub(l.mul(1.1)),
                _ = Ke(g.mul(34)).mul(f(g.mul(g).mul(-60)));
            e.addAssign(p.div(P(m, .001)).mul(_).mul(f(l.mul(-4))).mul(q(.5, 0, m)))
        }
        let t = o.uvNode.add(e.mul(n.ripple).mul(k(.25).add(w.mul(.75))).mul(.035)).add(_.mul(.0099).mul(k(1).sub(w))).toVar(),
            r = o.sample(t).rgb,
            i = k(1.5).add(D.mul(3)),
            a = (e, n) => o.sample(t.add(O(0, e * .012).mul(k(.5).add(D)))).level(i).rgb.mul(n),
            s = a(-1.5, .7).add(a(-.5, 1)).add(a(.5, 1)).add(a(1.5, .7)).add(a(2.5, .4)).div(3.8),
            l = k(1).sub(D),
            p = I(s.mul(.85), r, q(.75, .97, l)),
            m = V(y.sub(c)),
            g = k(.04).add(Ue(k(1).sub(S(m.y, 0, 1)), 5).mul(.96)),
            v = q(40, 8, h(u.sub(y.xz))),
            b = I(I(k(.16), k(.34), w), k(1), g).mul(I(k(.7), k(1), w)).mul(n.refl).mul(v).mul(k(.45).add(l.mul(.55)));
        return ee.add(p.mul(b))
    })(), {
        material: s,
        refl: o
    }
}

function Zt() {
    return {
        shoeL: D(new W(-.15, 0, 0)),
        shoeR: D(new W(.15, 0, 0)),
        shadow: D(.85),
        hot: D(1)
    }
}

function Qt(t, r, i) {
    let a = new e;
    a.name = `stage-top`;
    let o = U,
        s = o.xz,
        c = h(s).div(.85),
        u = l(.009, .009, .011).add(It(t, o, l(0, 1, 0)).mul(.015)),
        d = V(y.sub(o)),
        p = k(.05).add(Ue(k(1).sub(S(d.y, 0, 1)), 4).mul(.9)),
        m = l(i.ringCol).mul(i.ringI).mul(f(o.z.add(.55).mul(o.z.add(.55)).mul(-5))).mul(.22).mul(p).add(l(i.ledCol).mul(i.ledI).mul(q(.72, .98, c)).mul(.06)).add(l(.9, .93, 1).mul(r.hot).mul(f(n(s.sub(O(0, -.42)), s.sub(O(0, -.42))).mul(-7))).mul(.5)),
        g = s.sub(r.shoeL.xz).mul(O(1, .75)),
        _ = s.sub(r.shoeR.xz).mul(O(1, .75)),
        v = S(f(n(g, g).div(-.012)).mul(f(P(r.shoeL.y.sub(.05), 0).div(-.05))).add(f(n(_, _).div(-.012)).mul(f(P(r.shoeR.y.sub(.05), 0).div(-.05)))).mul(.9).add(f(n(s, s).div(-.2)).mul(.3)), 0, 1).mul(r.shadow);
    return a.colorNode = u.add(m).mul(k(1).sub(v)), a
}

function $t() {
    return {
        ringCol: D(new B(.6, 1, .1)),
        ring2Col: D(new B(1, .1, .4)),
        ledCol: D(new B(1, .1, .4)),
        ringI: D(2.2),
        ring2I: D(1.6),
        ledI: D(2.2),
        chase: D(0),
        chaseAmt: D(8)
    }
}

function en(r) {
    let i = new e;
    i.name = `neon-tubes`;
    let a = H(`aTube`, `vec4`).x,
        o = S(b(n(V(Le), se)), 0, 1),
        s = R(a.lessThan(.5), l(r.ringCol), R(a.lessThan(1.5), l(r.ring2Col), l(r.ledCol))),
        c = R(a.lessThan(.5), r.ringI, R(a.lessThan(1.5), r.ring2I, r.ledI)),
        u = t(U.z, U.x),
        d = w(u.sub(r.chase).add(Math.PI), Bt).sub(Math.PI),
        p = f(d.mul(d).mul(-50)).add(f(P(d, 0).mul(-2.5)).mul(.4).mul(z(0, d))),
        m = z(1.5, a);
    return i.colorNode = s.mul(k(.9).add(o.mul(1.6))).mul(c).add(l(1).mul(Ue(o, 4)).mul(.9).mul(c)).add(l(1).mul(p).mul(r.chaseAmt).mul(.25).mul(m).mul(N(c, 1))), i
}

function tn(t, n, r) {
    let i = new e({
        transparent: !0,
        depthWrite: !1,
        blending: 2
    });
    i.name = `neon-gate`, i.fog = !1;
    let o = K(n, a()).r.mul(255).sub(128).div(2),
        s = b(o),
        c = q(4.2, 1.4, s),
        u = q(1.6, .2, s),
        d = f(s.div(-7)).mul(.5).add(f(s.div(-24)).mul(.18)),
        p = z(o, 0).mul(.05);
    return i.colorNode = l(t.key).mul(t.keyGain).mul(c.mul(2.4).add(d).add(p)).add(l(1).mul(u).mul(1.5)).mul(r).mul(zt(t, U)), i
}

function nn(e, t, n, r, i, o) {
    let s = new ie({
        transparent: !0,
        depthWrite: !1,
        blending: 2
    });
    s.name = `backlight`, s.fog = !1;
    let c = a().mul(2).sub(1),
        u = h(c),
        d = f(u.mul(u).mul(-10)).mul(1.4).add(f(u.mul(-5)).mul(.35)).add(f(u.mul(u).mul(-70)).mul(3.5)),
        p = I(l(e), l(t), f(u.mul(u).mul(-40))).mul(d).mul(n).mul(q(1, .7, u)),
        m = l(r).mul(i).mul(q(o, o * .9, u));
    return s.colorNode = p.add(m).mul(q(-.02, .2, U.y)), s
}

function rn(e) {
    let t = [],
        n = [],
        r = [];
    for (let i = 0; i < e; i++) t.push(new Je(0, -50, 0, 0)), n.push(new Je(0, 0, 0, 1)), r.push(new Je);
    return {
        pos: Tt(t, `vec4`),
        rot: Tt(n, `vec4`),
        col: Tt(r, `vec4`),
        posArr: t,
        rotArr: n,
        colArr: r
    }
}
var an = (e, t) => t.add(v(e.xyz, v(e.xyz, t).add(t.mul(e.w))).mul(2));

function on(t, r, i) {
    let o = new e({
        transparent: !0,
        depthWrite: !1,
        blending: 2,
        side: 2
    });
    o.name = `beams`, o.fog = !1;
    let s = kt(H(`aBeam`, `float`)),
        c = r.rot.element(s),
        l = r.pos.element(s),
        u = r.col.element(s);
    o.positionNode = l.xyz.add(an(c, Be));
    let d = qe(an(c, Mt)),
        p = U,
        m = V(y.sub(p)),
        h = Ue(b(n(V(d), m)), 2.2),
        g = a(),
        _ = k(1).sub(g.y),
        v = f(_.mul(-1.3)).mul(q(0, .8, p.y)),
        x = K(i, O(g.x.mul(4), g.y.mul(1.5).sub(t.time.mul(.04)))).r.mul(.7).add(.3);
    return o.colorNode = u.xyz.mul(u.w).mul(h).mul(v).mul(x).mul(zt(t, p)), o
}

function sn() {
    return {
        time: D(0),
        H: D(9),
        len: D(.26),
        width: D(.0024),
        pxW: D(7e-4),
        box0: D(new W(-1.85, 0, -12)),
        box1: D(new W(1.85, 9, 22)),
        wind: D(new re(.6, .2)),
        gain: D(1),
        base: D(new B(.06, .08, .13))
    }
}

function cn(t, r) {
    let i = new e({
        transparent: !0,
        depthWrite: !1,
        blending: 2,
        side: 2
    });
    i.name = `rain`, i.fog = !1;
    let o = H(`aR`, `vec4`),
        s = a(),
        c = k(8.5).add(o.w.mul(2.5)),
        u = r.box0.y.add(w(o.y.mul(r.H).sub(r.time.mul(c)), r.H)),
        d = u.sub(r.box0.y).mul(.02),
        f = l(I(r.box0.x, r.box1.x, o.x).add(r.wind.x.mul(d)), u, I(r.box0.z, r.box1.z, o.z).add(r.wind.y.mul(d))),
        p = V(l(r.wind.x.mul(.02), -1, r.wind.y.mul(.02))),
        m = V(y.sub(f)),
        g = V(v(p, m)),
        _ = h(y.sub(f)),
        x = P(r.width, _.mul(r.pxW));
    i.positionNode = f.add(g.mul(s.x.sub(.5)).mul(x)).add(p.mul(s.y.sub(.5)).mul(r.len));
    let S = k(1).sub(b(s.x.mul(2).sub(1))).mul(q(0, .25, s.y)).mul(q(1, .6, s.y)),
        C = _.sub(Lt(t, f.sub(y).div(P(_, .001)), _)),
        T = r.width.div(x).mul(q(.25, 1, C)).mul(q(26, 10, C)).mul(zt(t, f)),
        E = l(r.base);
    for (let e = 0; e < 4; e++) {
        let r = t.fp.element(e).xyz.sub(f);
        E = E.add(t.fc.element(e).xyz.mul(e === 0 ? .16 : .07).div(n(r, r).mul(.6).add(.4)))
    }
    return i.colorNode = qe(E.mul(T)).mul(S).mul(r.gain), i
}

function ln(e, t) {
    let n = new Float32Array(e * 4 * 3),
        r = new Float32Array(e * 4 * 2),
        i = new Float32Array(e * 4 * 4),
        a = new Uint32Array(e * 6);
    for (let n = 0; n < e; n++) {
        let e = [t(), t(), t(), t()];
        for (let t = 0; t < 4; t++) {
            let a = n * 4 + t;
            r[a * 2] = t & 1, r[a * 2 + 1] = t >> 1, i.set(e, a * 4)
        }
        a.set([n * 4, n * 4 + 1, n * 4 + 2, n * 4 + 2, n * 4 + 1, n * 4 + 3], n * 6)
    }
    let o = new Ve;
    return o.setAttribute(`position`, new xe(n, 3)), o.setAttribute(`uv`, new xe(r, 2)), o.setAttribute(`aR`, new xe(i, 4)), o.setIndex(new xe(a, 1)), o.boundingSphere = new Se(new W(0, 4.5, 5), 30), o
}
var un = {
    tube: [.85, 5.5, 1.6],
    box: [.62, .55, 1.6],
    chan: [1, 2.6, 1.4],
    stand: [.8, 1.4, 1.5]
};

function dn(t, i, o, c) {
    let [l, u] = o, d = t.length, f = [];
    for (let e = 0; e < d; e++) f.push(new Je(1, 1, 0, 0));
    let p = {
            si: Tt(f, `vec4`),
            siArr: f,
            gain: {
                value: 1
            }
        },
        m = new ut({
            aAtlas: 4,
            aGain: 4,
            aSign: 4,
            aFlick: 4,
            aPage: 1
        });
    for (let e of t) {
        let t = e.M,
            [n, i, a, o] = t.atlas,
            s = [n / l, 1 - (i + o) / u, a / l, o / u],
            [c, d, f] = un[t.kind] ? ? un.box,
            p = t.kind === `tube` ? .72 : 0,
            h = t.kind === `tube` || t.kind === `chan`,
            g = e.flick ? .rect ? ? [2, 2, 2, 2];
        for (let n of e.faces)
            for (let i of h ? [0, 1] : [0]) {
                let a = new F(e.W, e.H),
                    o = i ? t.kind === `chan` ? .09 : .016 : 0,
                    l = new r().compose(n.c.clone().add(new W(0, 0, o).applyQuaternion(n.q)), n.q, new W(1, 1, 1));
                m.add(a, {
                    aAtlas: s,
                    aGain: [c, d, f, p],
                    aSign: [e.index, i, .342, .71],
                    aFlick: g,
                    aPage: [t.page ? ? 0]
                }, l)
            }
    }
    let h = m.build(),
        g = H(`aAtlas`, `vec4`),
        _ = H(`aGain`, `vec4`),
        v = H(`aSign`, `vec4`),
        y = H(`aFlick`, `vec4`),
        b = H(`aPage`, `float`),
        x = a(),
        S = g.xy.add(x.mul(g.zw)),
        C = I(K(i[0], S), K(i[1] ? ? i[0], S), z(.5, b)),
        w = C.rgb,
        T = P(w.r, P(w.g, w.b)),
        E = q(v.z, v.w, T),
        D = v.y,
        O = n(w, s(.2126, .7152, .0722, 0).xyz),
        A = p.si.element(Ne(v.x)),
        j = z(y.x, x.x).mul(z(x.x, y.z)).mul(z(y.y, x.y)).mul(z(x.y, y.w)),
        M = w.mul(_.x.add(_.y.mul(Ue(P(O, 0), _.z)))).mul(I(k(1).sub(_.w.mul(E)), k(1), D)).mul(I(k(1), A.y, j)),
        N = new e({
            side: 0
        });
    N.name = `neon-signs`, N.colorNode = M.mul(A.x), N.opacityNode = C.a.mul(I(k(1), E, D)), N.alphaTest = c.msaa ? .04 : .3, N.alphaToCoverage = c.msaa;
    let te = new ee(h, N);
    return te.name = `signs`, te.frustumCulled = !1, {
        mesh: te,
        U: p,
        dispose() {
            h.dispose(), N.dispose()
        }
    }
}
var fn = new W,
    pn = new W,
    mn = new W,
    hn = new W,
    gn = new W,
    _n = new W;

function vn(e, t, n = 30) {
    let r = -1,
        i = n;
    fn.copy(t.origin), pn.copy(t.direction);
    for (let t of e)
        for (let e of t.faces) {
            mn.set(0, 0, 1).applyQuaternion(e.q);
            let n = pn.dot(mn);
            if (n >= -1e-4) continue;
            let a = hn.copy(e.c).sub(fn).dot(mn) / n;
            if (a <= 0 || a >= i) continue;
            hn.copy(fn).addScaledVector(pn, a).sub(e.c), gn.set(1, 0, 0).applyQuaternion(e.q), _n.set(0, 1, 0).applyQuaternion(e.q);
            let o = hn.dot(gn) / t.W + .5,
                s = hn.dot(_n) / t.H + .5,
                [c, l, u, d] = t.M.body;
            o < c || o > c + u || s < l || s > l + d || (r = t.index, i = a)
        }
    return r
}
var yn = .0115,
    bn = [.16, 1, .28],
    xn = {
        happy: [`....#....`, `...#.#...`, `..#...#..`, `.#.....#.`, `#.......#`],
        open: [`..#####..`, `.#######.`, `#########`, `#########`, `#########`, `.#######.`, `..#####..`],
        blink: [`#########`],
        heart: [`.##...##.`, `####.####`, `#########`, `#########`, `.#######.`, `..#####..`, `...###...`, `....#....`],
        star: [`....#....`, `...###...`, `#########`, `.#######.`, `..#####..`, `.##...##.`, `#.......#`],
        gt: [`##.......`, `.###.....`, `...###...`, `.....####`, `...###...`, `.###.....`, `##.......`],
        lt: [`.......##`, `.....###.`, `...###...`, `####.....`, `...###...`, `.....###.`, `.......##`],
        bang: [`...###...`, `...###...`, `...###...`, `...###...`, `....#....`, `.........`, `...###...`],
        bolt: [`.....###.`, `....###..`, `...###...`, `..#######`, `....###..`, `...###...`, `..##.....`, `.#.......`],
        boltR: [`.###.....`, `..###....`, `...###...`, `#######..`, `..###....`, `...###...`, `.....##..`, `.......#.`],
        note: [`...#####.`, `...#...#.`, `...#...#.`, `...#...#.`, `.###..##.`, `####.###.`, `.##..##..`],
        x: [`#.......#`, `.#.....#.`, `..#...#..`, `...#.#...`, `....#....`, `...#.#...`, `..#...#..`, `.#.....#.`, `#.......#`],
        wide: [`.#######.`, `#########`, `###...###`, `###...###`, `#########`, `.#######.`],
        half: [`.#######.`, `#########`, `.#######.`]
    };

function Sn() {
    let t = new Uint8Array(4480),
        i = new Ge(t, 40, 28, T);
    i.minFilter = i.magFilter = A, i.generateMipmaps = !1, i.needsUpdate = !0;
    let o = {
            ledMat: D(new r),
            gain: D(2.2),
            off: D(.02),
            time: D(0),
            glitch: D(0),
            projD: D(.392),
            projC: D(new re)
        },
        c = new Float32Array(3360),
        u = qe(o.ledMat.mul(s(U, 1)).xyz),
        p = o.projC.add(u.xy.sub(o.projC).mul(o.projD).div(P(o.projD.sub(u.z), .001))),
        m = q(.035, .06, a().x).mul(q(.965, .94, a().x)).mul(q(.56, .59, a().y)),
        g = j(p.y.div(yn).add(14)),
        v = d(Ke(g.mul(91.7).add(j(o.time.mul(24)).mul(7.1))).mul(43758.5453)).sub(.5).mul(o.glitch).mul(6),
        y = p.div(yn).add(O(20, 14)).add(O(v.mul(z(.6, d(g.mul(.37).add(o.time.mul(3))))), 0)),
        x = j(y),
        S = d(y).sub(.5),
        C = z(0, x.x).mul(z(0, x.y)).mul(z(x.x, 39)).mul(z(x.y, 27)),
        w = K(i, x.add(.5).div(O(40, 28))).rgb.mul(2).mul(C),
        E = P(_(y.x), _(y.y)),
        ee = b(S).sub(.27),
        M = h(P(ee, O(0))).add(N(P(ee.x, ee.y), 0)).sub(.12),
        te = q(.3, .7, E),
        F = I(k(1).sub(q(E.mul(-.7), E.mul(.7), M)), k(.62), te),
        L = f(n(S, S).div(-.018)),
        ne = q(-.12, 0, M).mul(k(1).sub(te)),
        R = d(Ke(n(x, O(12.9898, 78.233))).mul(43758.5453)),
        ie = w.mul(k(.9).add(R.mul(.16))).mul(I(k(1), k(.25), z(.985, R))),
        ae = P(ie.r, P(ie.g, ie.b)),
        oe = I(ie, l(ae), .35),
        se = ie.mul(k(.8).add(ne.mul(.25))).add(oe.mul(.9).mul(I(L, k(.25), te))).mul(o.gain).mul(F),
        ce = l(.01, .012, .011).mul(o.off).mul(50).mul(F).mul(k(1).sub(ae)),
        le = new e;
    le.name = `led`, le.colorNode = se.add(ce).mul(m);
    let ue = {
        material: le,
        tex: i,
        u: o,
        clear() {
            c.fill(0)
        },
        set(e, t, n, r = 1) {
            let i = Math.round(e + 20),
                a = Math.round(t + 14);
            if (i < 0 || a < 0 || i >= 40 || a >= 28) return;
            let o = (a * 40 + i) * 3;
            c[o] = Math.max(c[o], n[0] * r), c[o + 1] = Math.max(c[o + 1], n[1] * r), c[o + 2] = Math.max(c[o + 2], n[2] * r)
        },
        glyph(e, t, n, r, i = 1, a = [0, 0]) {
            let o = e.length,
                s = e[0].length;
            for (let c = 0; c < o; c++)
                for (let l = 0; l < s; l++) e[c][l] === `#` && ue.set(t + l - (s - 1) / 2 + a[0], n + (o - 1) / 2 - c + a[1], r, i)
        },
        eyes(e, t, n, r = 1, i = [0, 0]) {
            ue.glyph(xn[e], -10, 1, n, r, i), ue.glyph(xn[t], 10, 1, n, r, i)
        },
        boot(e, t, n, r) {
            if (e <= 0) return;
            if (e < .45) {
                let t = Math.round(7 * Math.min(1, e / .3));
                for (let e of [-10, 10])
                    for (let n = -t / 2; n <= t / 2; n++) ue.set(e + n, 1, r, 1.2);
                return
            }
            let i = (e - .45) / .55,
                a = Math.round(i * 5),
                o = new Float32Array(c);
            c.fill(0), ue.eyes(t, n, r, 1);
            for (let e = 0; e < 28; e++)
                if (Math.abs(e - 14 - 1) > a)
                    for (let t = 0; t < 40; t++) {
                        let n = (e * 40 + t) * 3;
                        c[n] = c[n + 1] = c[n + 2] = 0
                    }
            for (let e = 0; e < c.length; e++) c[e] = Math.max(c[e], o[e])
        },
        upload() {
            for (let e = 0; e < 1120; e++) t[e * 4] = Math.min(255, c[e * 3] * 127.5), t[e * 4 + 1] = Math.min(255, c[e * 3 + 1] * 127.5), t[e * 4 + 2] = Math.min(255, c[e * 3 + 2] * 127.5), t[e * 4 + 3] = 255;
            i.needsUpdate = !0
        },
        dispose() {
            i.dispose(), le.dispose()
        }
    };
    return ue
}
var Cn = .633;

function wn() {
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

function Tn(e, t, n = 1) {
    let r = e,
        i = t;
    for (let e of Object.keys(r)) {
        let t = r[e],
            a = i[e];
        if (typeof t == `number`) r[e] = t + (a || 0) * n;
        else
            for (let e of Object.keys(t)) t[e] += ((a ? .[e] ? ? +(e === `scale`)) - +(e === `scale`)) * n
    }
    return e
}
var En = Math.PI * 2,
    Dn = (e, t, n) => {
        let r = C((n - e) / (t - e));
        return r * r * (3 - 2 * r)
    },
    On = (e, t = 1.70158) => {
        let n = e - 1;
        return 1 + n * n * ((t + 1) * n + t)
    };

function kn(e, t = 1) {
    let n = wn(),
        r = e / g,
        i = r - Math.floor(r),
        a = Math.exp(-i / .07),
        o = Math.sin(Math.PI * i) ** .7,
        s = Math.sin(Math.PI * r - .6),
        c = Math.floor(r) % 2 ? 1 : -1;
    n.upper.y = (o * .07 - a * .045) * t, n.upper.squash = (a * .22 - o * .08) * t, n.upper.x = s * .05 * t, n.upper.roll = -s * .15 * t, n.upper.yaw = s * .3 * t, n.upper.pitch = (a * .15 - .04 + Math.sin(En * 2 * r) * .035) * t;
    let l = o * .1 * t,
        u = c > 0 ? n.shoeL : n.shoeR,
        d = c > 0 ? n.shoeR : n.shoeL;
    return u.y = l, u.pitch = -l * 3.2, u.x = c * .025 * o * t, u.z = .03 * o * t, d.pitch = a * .12 * t, d.yaw = c * .12 * t, n.root.yaw = s * .12 * t, n.antenna = (Math.sin(En * r) * .4 + a * .3) * t, n
}

function An(e, t = 1, n = .2) {
    let r = wn(),
        i = Dn(0, .16, e),
        a = Ye(.16, .9, e),
        o = Math.sin(Math.PI * a);
    return r.root.y = o * n, r.root.yaw = ve.inOut(a) * En * t, r.upper.squash = e < .16 ? i * .22 : e > .9 ? .2 * Math.sin(Ye(.9, 1, e) * Math.PI) : -.13 * o, r.upper.pitch = -.15 * o, r.shoeL.y = r.shoeR.y = o * .06, r.shoeL.pitch = r.shoeR.pitch = o * .5, r.shoeL.x = -o * .035, r.shoeR.x = o * .035, r.antenna = -.7 * o, r
}

function jn(e) {
    let t = wn();
    return t.upper.roll = -.16 * e, t.upper.yaw = .16 * e, t.upper.pitch = -.08 * e, t.upper.x = .03 * e, t.shoeL.z = .09 * e, t.shoeL.x = -.015 * e, t.shoeL.pitch = -.4 * e, t.shoeL.yaw = -.18 * e, t.shoeR.yaw = .35 * e, t.shoeR.z = -.03 * e, t.root.yaw = -.06 * e, t
}

function Mn(e, t = 1) {
    let n = wn(),
        r = Math.sin(Math.PI * C(e / .8));
    n.root.y = r * .08, n.upper.roll = t * .28 * r, n.upper.x = -t * .05 * r, n.upper.squash = -.08 * r + .18 * Math.exp(-e / .06);
    let i = t > 0 ? n.shoeR : n.shoeL;
    return i.x = t * .12 * r, i.y = .1 * r, i.roll = -t * .5 * r, i.pitch = -.3 * r, n.antenna = .5 * r, n
}

function Nn(e, t) {
    let n = wn(),
        r = Ye(.12, .78, e),
        i = Math.sin(Math.PI * r);
    return n.root.z = ve.inOut(r) * t, n.root.y = i * .1, n.upper.squash = e < .12 ? Dn(0, .12, e) * .14 : e > .78 ? Math.sin(Ye(.78, 1, e) * Math.PI) * .16 : -.08 * i, n.upper.pitch = .1 * i, n.shoeL.pitch = n.shoeR.pitch = .4 * i, n.shoeL.y = n.shoeR.y = i * .03, n.antenna = -.5 * i + .3 * Math.sin(Ye(.78, 1, e) * Math.PI * 3), n
}
var Pn = new W,
    Fn = new L,
    In = new E,
    Ln = new W,
    Rn = class {
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
                    a = new L,
                    o = new W;
                e.decompose(i, a, o);
                let s = new L;
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
            Pn.set(t.x || 0, t.y || 0, t.z || 0).applyQuaternion(r.pqi).divide(r.ps), e.position.copy(r.p).add(Pn), Fn.setFromEuler(In.set(t.pitch || 0, t.yaw || 0, t.roll || 0, `YXZ`)), e.quaternion.copy(r.q).premultiply(r.pqi.clone().multiply(Fn).multiply(r.pq));
            let i = 1 - n,
                a = 1 / Math.sqrt(Math.max(.2, i)),
                o = [a, a, a];
            o[r.axis] = i, e.scale.copy(r.s).multiply(Ln.set(o[0], o[1], o[2])).multiplyScalar(t.scale || 1)
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
    },
    zn = e => e.replace(/\.\d+$/, ``);
async function Bn(e, t) {
    let n = (await e.loadGLTF(t.lod === `high` ? `gen/models/funkun_8000.glb` : `gen/models/funkun_3000.glb`)).scene,
        r = new o;
    r.name = `FUNKUN`, n.position.y = Cn, r.add(n);
    let i = e => n.getObjectByName(e),
        s = {
            rotation: i(`FUNCO_ROTATION`),
            upper: i(`FUNCO_UPPER_BODY`),
            shoeL: i(`LEFT_SHOE`),
            shoeR: i(`RIGHT_SHOE`),
            spinner: i(`VisorSpinner_Mesh01`),
            antennaL: i(`AntennaLeft_Mesh01`),
            antennaR: i(`AntennaRight_Mesh01`)
        },
        c = [],
        l = new Map,
        u = (e, n) => {
            let r = {
                envMap: t.env,
                envMapIntensity: 1,
                ...n
            };
            t.detail || (delete r.clearcoat, delete r.clearcoatRoughness);
            let i = new de(r);
            return i.name = `neon-` + e, i.fog = !1, c.push(i), i
        },
        d = (n, r) => {
            if (l.has(n) && n !== `MOUTH_PLASTIC`) return l.get(n);
            let i;
            switch (n) {
                case `DARK_PLASTIC`:
                    i = u(n, {
                        color: 328966,
                        roughness: .28,
                        specularIntensity: .6,
                        clearcoat: 1,
                        clearcoatRoughness: .03
                    });
                    break;
                case `GLOSSY_PLASTIC`:
                    i = u(n, {
                        color: 263173,
                        roughness: .2,
                        specularIntensity: .7,
                        clearcoat: 1,
                        clearcoatRoughness: .03
                    });
                    break;
                case `MOUTH_PLASTIC`:
                    i = u(n, {
                        color: 16777215,
                        map: e.adopt(r.map ? ? null),
                        roughness: .3,
                        clearcoat: 1,
                        clearcoatRoughness: .05
                    });
                    break;
                case `PLASTIC_GLOSSY`:
                    i = u(n, {
                        color: 16730644,
                        roughness: .24,
                        clearcoat: 1,
                        clearcoatRoughness: .06,
                        emissive: 16722440,
                        emissiveIntensity: .1
                    });
                    break;
                case `GLOSSY_RUBBER`:
                    i = u(n, {
                        color: 789517,
                        roughness: .45
                    });
                    break;
                case `PLASTIC_NORMAL`:
                    i = u(n, {
                        color: 657931,
                        roughness: .34,
                        specularIntensity: .6,
                        clearcoat: .8,
                        clearcoatRoughness: .06
                    });
                    break;
                case `ROUGH_PLASTIC`:
                    i = u(n, {
                        color: 1052690,
                        roughness: .6,
                        specularIntensity: .5
                    });
                    break;
                case `METALLIC_PLASTIC`:
                    i = u(n, {
                        color: 1710622,
                        metalness: .6,
                        roughness: .3,
                        clearcoat: .6,
                        clearcoatRoughness: .1
                    });
                    break;
                case `Fiberglass Orange`:
                    i = u(n, {
                        color: 14829082,
                        roughness: .3,
                        clearcoat: .9,
                        clearcoatRoughness: .08
                    });
                    break;
                case `GLASS`:
                case `GLASS_ROUGH`:
                    {
                        let e = u(`glass`, {
                            color: 0,
                            roughness: n === `GLASS` ? .03 : .08,
                            metalness: 0,
                            clearcoat: 1,
                            clearcoatRoughness: .02,
                            transparent: !0,
                            depthWrite: !1,
                            blending: 2,
                            envMapIntensity: 1.6
                        });t.smudge && (e.roughnessNode = k(.22).mul(K(t.smudge, a()).r)),
                        i = e;
                        break
                    }
                case `PLASTIC_EYES`:
                    i = u(n, {
                        color: 131587,
                        roughness: .3
                    });
                    break;
                case `SCREEN_EYES_V06`:
                    i = t.led.material;
                    break;
                default:
                    i = u(n, {
                        color: 1842204,
                        roughness: .5
                    })
            }
            return l.set(n, i), i
        },
        f = [],
        p;
    n.traverse(e => {
        let t = e;
        if (!t.isMesh) return;
        f.push(t);
        let n = t.material,
            r = zn(n.name || ``);
        r === `SCREEN_EYES_V06` && (p = t);
        let i = d(r, n);
        t.material = i, t.renderOrder = r === `GLASS` || r === `GLASS_ROUGH` ? 3 : 2, t.frustumCulled = !1, n !== i && n.dispose()
    });
    let m = new Rn(s, r);
    return {
        object: r,
        inner: n,
        nodes: s,
        meshes: f,
        screen: p,
        rig: m,
        setEnv(e) {
            for (let t of c) t.envMap = e
        },
        dispose() {
            for (let e of c) e.dispose();
            for (let e of f) e.geometry.dispose();
            l.get(`MOUTH_PLASTIC`) ? .map ? .dispose()
        }
    }
}
var Z = [{
        id: `green`,
        label: `GREEN`,
        sfx: `neon_green`,
        key: `#9CFF2A`,
        accent: `#FF3E9A`,
        ring: `#D2FF1C`,
        ring2: `#FF3E9A`,
        led: `#FF3E9A`,
        fog: [.006, .01, .016],
        beams: [`#D2FF1C`, `#FF3E9A`, `#7CFF3A`, `#E6FF00`]
    }, {
        id: `orange`,
        label: `ORANGE`,
        sfx: `neon_orange`,
        key: `#FF4A12`,
        accent: `#FFB21A`,
        ring: `#FF5A1C`,
        ring2: `#FFC21A`,
        led: `#FFB020`,
        fog: [.014, .008, .01],
        beams: [`#FF6424`, `#FFB21A`, `#FF3E2A`, `#FF8A1A`]
    }, {
        id: `blue`,
        label: `BLUE`,
        sfx: `neon_blue`,
        key: `#3C4BFF`,
        accent: `#22D3FF`,
        ring: `#4A58FF`,
        ring2: `#22D3FF`,
        led: `#22D3FF`,
        fog: [.006, .008, .024],
        beams: [`#4A58FF`, `#22D3FF`, `#7A5CFF`, `#3140FF`]
    }],
    Q = (e, t = 1) => new B(e).multiplyScalar(t);

function Vn(e) {
    let t = e.perf.settings,
        n = t.tier === `low`;
    return {
        lod: t.lod,
        detail: t.detail,
        msaa: t.msaa > 0,
        mirror: t.mirror,
        env: t.env,
        rain: n ? 1600 : t.tier === `medium` ? 3800 : 6e3,
        lights: n ? 8 : 10,
        fogLights: n ? 4 : 5,
        atlas: e.assets.halfFor(`gen/neon/signs_4k_0.webp`) ? `2k` : `4k`
    }
}

function Hn(e, t, n = 3) {
    let r = e - t;
    if (r < 0) return 0;
    if (r < .14) {
        let e = Math.sin(Math.floor(r * 60) * 91.7 + t * 13.1) * 43758.5453;
        return e - Math.floor(e) > .45 ? .95 : .12
    }
    return 1 - Math.exp(-(r - .1) * n * 6) * .3
}
var Un = e => {
        let t = Math.sin(e * 127.1 + 311.7) * 43758.5453;
        return t - Math.floor(t)
    },
    Wn = new W,
    Gn = new W,
    Kn = new r,
    $ = new L,
    qn = new E,
    Jn = new B,
    Yn = new W(0, -1, 0),
    Xn = class t {
        scene = new ze;
        U;
        T = $t();
        F = Jt();
        S = Zt();
        R = sn();
        gateI = D(0);
        auraCol = D(Q(`#C8D4FF`));
        auraCore = D(Q(`#FFFFFF`));
        auraI = D(.5);
        discCol = D(Q(`#EEF2FF`));
        discI = D(30);
        lanternGain = D(1);
        signs = [];
        spill = [];
        fk;
        led;
        refl = null;
        signFx;
        textures = [];
        disposables = [];
        envs = [];
        beams = [];
        B = rn(5);
        lights;
        hidden = [];
        bakeOnly = [];
        aura;
        ledRest = null;
        releaseReflector = null;
        lease = null;
        smudge = null;
        warmed = !1;
        opts;
        look = 0;
        cur = {
            key: Q(Z[0].key),
            accent: Q(Z[0].accent),
            ring: Q(Z[0].ring),
            ring2: Q(Z[0].ring2),
            led: Q(Z[0].led),
            fog: new B(...Z[0].fog),
            beams: Z[0].beams.map(e => Q(e))
        };
        lookAt = -10;
        surgeAt = -10;
        ringOnAt = -100;
        gateOnAt = -100;
        liftAt = -100;
        introAt = -100;
        dance = {
            at: -10,
            move: -1,
            dir: 1,
            face: 0
        };
        energy = 0;
        groove = 1;
        restFace = `happy`;
        hoverAt;
        lastT = -1;
        lastClock = -1;
        reduced = !1;
        constructor(e) {
            this.opts = e, this.U = Ft(e.lights, e.fogLights), this.hoverAt = new Float32Array(64).fill(-10)
        }
        static async create(e, n, r = () => {}) {
            let i = new t(n);
            return await i.build(e, r), i
        }
        async build(t, n) {
            let i = this.lease = t.assets.lease(),
                a = performance.now(),
                o = async e => {
                    try {
                        performance.measure(`neon · build ` + e, {
                            start: a
                        })
                    } catch {}
                    n(), await Ze(), a = performance.now()
                },
                s = this.scene;
            s.background = new B(0), s.fogNode = Rt(this.U);
            let c = t.backend === `webgpu` ? 8 : 4,
                l = async (e, t = {}) => {
                    let n = await i.texture(`gen/neon/` + e, { ...t,
                        anisotropy: c
                    });
                    return this.textures.push(n), n
                },
                u = {
                    srgb: !1,
                    channels: 1,
                    repeat: !0
                },
                [d, f, p, m, h, g, _, v, y, b, x, S, C] = await Promise.all([i.json(`gen/neon/signs.json`), l(`signs_${this.opts.atlas}_0.webp`), l(`signs_${this.opts.atlas}_1.webp`), l(`b02.webp`, {
                    repeat: !0
                }), l(`b04.webp`, {
                    repeat: !0
                }), l(`b05.webp`, {
                    repeat: !0
                }), l(`b06.webp`, {
                    repeat: !0
                }), l(`logo_sdf.png`, {
                    srgb: !1,
                    channels: 1
                }), l(`asphalt_albedo.webp`, { ...u,
                    half: !0
                }), l(`asphalt_rough.webp`, { ...u,
                    half: !0
                }), l(`asphalt_normal.webp`, {
                    srgb: !1,
                    channels: 2,
                    repeat: !0,
                    half: !0
                }), l(`wet_breakup.webp`, u), l(`smudge.webp`, u)]);
            this.smudge = C, g.wrapT = we, a = performance.now();
            let w = await Pt(256, 3);
            a = performance.now();
            let T = Zn();
            this.textures.push(w, T);
            let E = this.U,
                O = Object.fromEntries(d.signs.map(e => [e.id, e])),
                k = at();
            this.signs = ct(st(k, O), O), this.spill = lt(this.signs, this.opts.lights - 2);
            let A = it(7);
            await o(`layout`);
            let j = e => (s.add(e), e),
                M = (e, t, n) => {
                    let r = new ee(e, t);
                    return r.name = n, r.frustumCulled = !1, this.disposables.push(e, t), j(r)
                },
                N = M(new He(120, 32, 16), Kt(E), `sky`);
            N.renderOrder = -10; {
                let e = new ut,
                    t = it(11);
                for (let n = 0; n < 9; n++) {
                    let r = 5 + t() * 7,
                        i = 30 + t() * 45;
                    e.add(ht(new W(-26 + n * 6.5 + t() * 3, i / 2, -32 - t() * 25), new W(r, i, r)))
                }
                M(e.build(), qt(), `towers`).layers.set(6)
            }
            await o(`sky`); {
                let e = new ut({
                    aWall: 4,
                    aTint: 3
                });
                k.forEach((t, n) => {
                    let r = new B().setHSL(.6 + t.hue * .15, .08, .5).multiplyScalar(t.tint * .9 + .1),
                        i = t.end ? ht(new W(0, t.h / 2, Qe - 2), new W(20, t.h, 4)) : ht(new W(t.x + t.side * 2.5, t.h / 2, (t.z0 + t.z1) / 2), new W(5, t.h, t.z0 - t.z1));
                    e.add(i, {
                        aWall: [t.type, n * .37, 0, 0],
                        aTint: [r.r, r.g, r.b]
                    })
                }), M(e.build(), Vt(E, w, h), `walls`)
            }
            await o(`walls`); {
                let e = new ut({
                        aP: 4,
                        aCol: 3
                    }),
                    t = it(21),
                    n = [`#FFB36B`, `#9EC2FF`, `#FF7AC8`].map(e => Q(e)),
                    r = (r, i, a, o) => {
                        let s = t(),
                            c = +(s < .34),
                            l = s < .2 ? n[0] : s < .27 ? n[1] : n[2],
                            u = new F(a, o);
                        e.add(u, {
                            aP: [c, s * 97.1, s > .12 ? .8 : .2, .35 + s * .8],
                            aCol: [l.r, l.g, l.b]
                        }, Kn.compose(r, $.setFromEuler(qn.set(0, i, 0)), Wn.set(1, 1, 1)))
                    };
                for (let e of k) {
                    if (e.end) {
                        for (let t = 3.4; t < e.h - 1.5; t += 3)
                            for (let e = -9; e < 9; e += 1.6) Math.abs(e) < 4.4 && t > 3 && t < 9.5 || r(new W(e, t + 1.1, Qe + .02), 0, 1, 1.3);
                        continue
                    }
                    let t = 1.25;
                    for (let n = 3.2; n < e.h - 1.2; n += 2.9)
                        for (let i = e.z1 + .6; i < e.z0 - .9; i += 1.6 + (e.hue > .5 ? .25 : 0)) r(new W(e.x - e.side * .02, n + 1, i + t / 2), -e.side * Math.PI / 2, t, 1.35)
                }
                M(e.build(), Ht(E), `windows`).layers.set(6)
            }
            await o(`windows`); {
                let e = new ut({
                        aP: 4,
                        aCol: 3
                    }),
                    t = it(31),
                    n = [`#FFB36B`, `#FF5A3C`, `#FFD08A`, `#B8D0FF`, `#FF4FA3`];
                for (let r of k) {
                    if (r.end) continue;
                    let i = r.z1 + .25;
                    for (; i < r.z0 - 1;) {
                        let a = Math.min(r.z0 - .25 - i, 1.4 + t() * 1.8);
                        if (a < .9) break;
                        let o = t(),
                            s = t(),
                            c = o < .35 ? 0 : o < .72 ? 1 : o < .9 ? 2 : 3,
                            l = Q(c === 2 ? s < .5 ? `#B3121B` : `#1B2A6B` : n[Math.floor(s * n.length)]);
                        e.add(new F(a, 2.2), {
                            aP: [c, s * 31.7, a, c === 3 ? .4 : c === 1 ? .26 : .5],
                            aCol: [l.r, l.g, l.b]
                        }, Kn.compose(new W(r.x - r.side * .015, 1.12, i + a / 2), $.setFromEuler(qn.set(0, -r.side * Math.PI / 2, 0)), Wn.set(1, 1, 1))), i += a + .3
                    }
                }
                for (let [t, n] of [
                        [5.4, `#D9262C`],
                        [6.35, `#2E36FF`],
                        [-8.2, `#D9262C`]
                    ]) {
                    let r = Q(n);
                    e.add(new F(.86, 1.78), {
                        aP: [4, t * 7.3, 1, 1],
                        aCol: [r.r, r.g, r.b]
                    }, Kn.compose(new W(-J + .4 + .362, .915, t), $.setFromEuler(qn.set(0, Math.PI / 2, 0)), Wn.set(1, 1, 1)))
                }
                M(e.build(), Ut(E, g), `shops`)
            }
            await o(`shops`); {
                let e = new ut({
                        aAlb: 3,
                        aPm: 4
                    }),
                    t = (t, n, r = 0, i = .3, a = 0) => {
                        let o = typeof n == `string` ? Q(n) : n;
                        e.add(t, {
                            aAlb: [o.r, o.g, o.b],
                            aPm: [r, i, a, 0]
                        })
                    },
                    n = `#6a6a6e`;
                for (let e of this.signs) t(ht(e.P.clone().addScaledVector(e.nrm, e.twoSided ? 0 : -e.depth / 2), new W(e.BW, e.BH, e.depth), $.setFromEuler(qn.set(0, e.rotY, 0)).clone()), `#9a9a9a`, 1, .5), this.signHardware(e, e => t(e, n, 1, .6), e => t(e, `#0a0a0b`, 0, .8));
                for (let e of k) {
                    if (e.end) continue;
                    let n = -e.side * Math.PI / 2,
                        r = $.setFromEuler(qn.set(0, n, 0)).clone(),
                        i = Math.floor((e.z0 - e.z1) * .6 + A() * 2);
                    for (let n = 0; n < i; n++) {
                        let n = 3.2 + A() * Math.min(7, e.h - 4),
                            i = e.z1 + .6 + A() * (e.z0 - e.z1 - 1.2);
                        t(ht(new W(e.x - e.side * .16, n, i), new W(.78, .58, .3), r), `#8a8680`, 2, .2)
                    }
                    let a = 1 + Math.floor(A() * 2.5);
                    for (let n = 0; n < a; n++) {
                        let n = .03 + A() * .035,
                            r = new ne(n, n, e.h, 10, 1, !0);
                        r.translate(e.x - e.side * (.07 + A() * .05), e.h / 2, e.z1 + .2 + A() * (e.z0 - e.z1 - .4)), t(r, `#3a3b3e`, 1, .9)
                    }
                    for (let n = 2.95; n < e.h - .5; n += 2.9 + (e.hue > .6 ? .3 : 0)) {
                        let r = .2 + e.hue * 7 % 1 * .15;
                        t(ht(new W(e.x - e.side * .1, n, (e.z0 + e.z1) / 2), new W(r, .12, e.z0 - e.z1 - .02)), `#2a2a2e`, 0, .3)
                    }
                }
                for (let [e, n] of [
                        [-1, 2.2],
                        [1, -1.2],
                        [-1, -3.4],
                        [1, 6.2],
                        [-1, 11.6],
                        [1, -5.2]
                    ]) {
                    let r = 2 + Math.floor(A() * 3);
                    for (let i = 0; i < r; i++) t(ht(new W(e * (J - .3), .15 + i * .3, n + (A() - .5) * .05), new W(.45, .3, .36), $.setFromEuler(qn.set(0, (A() - .5) * .2, 0)).clone()), `#7a6a6a`, 3, .2)
                }
                for (let [e, n] of [
                        [-1, 2.75],
                        [-1, 2.95],
                        [1, -.5],
                        [1, 5.6],
                        [-1, -5.3],
                        [1, 9.4],
                        [-1, 8]
                    ]) {
                    let r = .2 + A() * .1,
                        i = new He(1, 16, 12);
                    i.applyMatrix4(Kn.compose(new W(e * (J - .28 - A() * .1), r * .75, n), $.identity(), Wn.set(r, r * .85, r * 1.1))), t(i, `#040405`, 0, 1.2)
                }
                for (let e = 0; e < 22; e++) {
                    let n = 20 - e * 1.55 + A() * .8,
                        r = n + (A() - .5) * 2.2,
                        i = 4.4 + A() * 5,
                        a = i + (A() - .5) * 1.5,
                        o = .3 + A() * .7,
                        s = [];
                    for (let e = 0; e <= 12; e++) {
                        let t = e / 12;
                        s.push(new W(-J + t * 2 * J, i + (a - i) * t - o * 4 * t * (1 - t), n + (r - n) * t))
                    }
                    t(_t(s, .008 + A() * .01, 20), `#08080a`, 0, .6)
                }
                for (let [e, n] of [
                        [10.8, 3.05],
                        [4.6, 2.95],
                        [-7.6, 3]
                    ]) t(_t(vt(new W(-J, n + .25, e), new W(J, n + .25, e), .2, 12), .006), `#08080a`, 0, .6);
                for (let e of [5.4, 6.35, -8.2]) t(ht(new W(-J + .4, .915, e), new W(.72, 1.83, .9)), `#8f9398`, 0, .4);
                t(new ne($e, $e + .03, et, 96, 1, !0).translate(0, et / 2, 0), `#0b0b0d`, 0, 1);
                let r = rt.pos;
                t(ht(new W(r.x, r.y, r.z - .08), new W(3.7, 1.5, .12)), `#0d0d10`, 1, .4);
                for (let e of [-1, 1]) t(gt(new W(e * 1.85, r.y + .45, r.z - .1), new W(e * J, r.y + .45, r.z - .1), .045), n, 1, .6), t(gt(new W(e * 1.85, r.y - .45, r.z - .1), new W(e * J, r.y - .45, r.z - .1), .045), n, 1, .6), t(gt(new W(e * 1.6, r.y + .75, r.z - .1), new W(e * J, r.y + 2.3, r.z - .1), .007, !0), n, 1, .6);
                M(e.build(), Wt(E, m, T), `props`).layers.set(6)
            }
            await o(`props`); {
                let e = new ut({
                    aP: 4,
                    aCol: 3
                });
                for (let [t, n] of [
                        [10.8, 3.05],
                        [4.6, 2.95],
                        [-7.6, 3]
                    ])
                    for (let r = 0; r < 7; r++) {
                        let i = -1.5 + r * .5,
                            a = Q(r % 3 == 1 ? `#FFD28A` : `#FF3B20`);
                        e.add(new He(1, 20, 14), {
                            aP: [0, r + t, 0, 2.2],
                            aCol: [a.r, a.g, a.b]
                        }, Kn.compose(new W(i, n - .12 * (1 - (i / 1.5) ** 2), t), $.identity(), Wn.set(.17, .26, .17)))
                    }
                M(e.build(), Gt(_, this.lanternGain), `lanterns`)
            } {
                let e = Xt(E, this.F, w, this.opts.mirror, {
                    albedo: y,
                    rough: b,
                    normal: x,
                    wet: S
                });
                this.refl = e.refl;
                let t = e.refl.reflector;
                this.releaseReflector = t.dispose.bind(t), t.dispose = () => {};
                let n = M(new F(24, 70), e.material, `floor`);
                n.rotation.x = -Math.PI / 2, n.position.z = 4, n.add(e.refl.target), this.hidden.push(n);
                let r = M(new je($e, 96), Qt(E, this.S, this.T), `stage-top`);
                r.rotation.x = -Math.PI / 2, r.position.y = et
            } {
                let e = new ut({
                    aTube: 4
                });
                e.add(new Te(tt.r, .022, 12, 256).translate(0, tt.y, tt.z), {
                    aTube: [0, 0, 0, 0]
                }), e.add(new Te(tt.r + .085, .011, 8, 256).translate(0, tt.y, tt.z - .05), {
                    aTube: [1, 0, 0, 0]
                }), e.add(new Te($e + .004, .009, 8, 256).rotateX(Math.PI / 2).translate(0, et - .008, 0), {
                    aTube: [2, 0, 0, 0]
                }), M(e.build(), en(this.T), `tubes`)
            } {
                let e = rt.width * 1024 / 928,
                    t = e * 471 / 1024,
                    n = M(new F(e, t), tn(E, v, this.gateI), `gate`);
                n.position.copy(rt.pos), n.renderOrder = 4
            }
            await o(`lanterns, floor, stage, tubes, gate`); {
                let e = this.aura = new pe(nn(this.auraCol, this.auraCore, this.auraI, this.discCol, this.discI, .075));
                e.scale.set(2.6, 2.6, 1), e.position.copy(nt), e.renderOrder = 5, e.frustumCulled = !1, s.add(e), this.disposables.push(e.material), this.hidden.push(e);
                let t = new ut({
                        aBeam: 1
                    }),
                    n = (e, t) => {
                        let n = new ne(.05, t, e, 24, 6, !0);
                        return n.translate(0, -e / 2, 0), n
                    };
                [-1.2, -.4, .4, 1.2].forEach((e, r) => {
                    t.add(n(9, .32), {
                        aBeam: [r]
                    }), this.beams.push({
                        i: r,
                        x: e
                    })
                }), t.add(n(34, 4.2), {
                    aBeam: [4]
                }), this.beams.push({
                    i: 4,
                    x: 0,
                    search: !0
                });
                let r = M(t.build(), on(E, this.B, w), `beams`);
                r.renderOrder = 6, r.layers.set(6), this.hidden.push(r)
            }
            if (this.opts.rain > 0) {
                let e = M(ln(this.opts.rain, it(99)), cn(E, this.R), `rain`);
                e.layers.set(6), e.renderOrder = 7, this.hidden.push(e)
            }
            await o(`shafts, rain`), this.signFx = dn(this.signs, [f, p], d.pageSize, {
                msaa: this.opts.msaa
            }), s.add(this.signFx.mesh), this.disposables.push(this.signFx), await o(`signs`); {
                let e = new le(Q(`#EEF2FF`), 40, 0, .55, .7, 2);
                e.position.copy(nt), e.target.position.set(0, 1.25, 4);
                let t = new te(16777215, 6, 6, 2);
                t.position.set(-1.35, 1.1, -1.1);
                let n = new te(16777215, 6, 6, 2);
                n.position.set(1.45, 1.1, -1);
                let r = new le(16777215, 0, 0, .45, .7, 2);
                r.position.set(.2, 3.6, .8), r.target.position.set(0, .4, 0);
                let i = new be(Q(`#2a2350`), Q(`#050507`), .35);
                s.add(e, e.target, t, n, r, r.target, i), this.lights = {
                    back: e,
                    rimL: t,
                    rimR: n,
                    top: r,
                    hemi: i
                }
            } {
                let r = (t, n, r) => {
                        let i = new e({
                            side: 2
                        });
                        i.fog = !1;
                        let a = D(t);
                        i.colorNode = a;
                        let o = new ee(new F(r[0], r[1]), i);
                        return o.position.set(...n), o.lookAt(0, .62, 0), s.add(o), this.bakeOnly.push(o), this.disposables.push(o.geometry, i), a
                    },
                    i = r(new B, [-1.5, 1, -1.2], [.28, 2.4]),
                    a = r(new B, [1.55, 1, -1.1], [.28, 2.4]);
                r(Q(`#FFE9F4`, 3), [-1.6, 2.4, 1.2], [.22, 1.6]);
                let c = new ee(new F(40, 40), (() => {
                    let t = new e;
                    return t.colorNode = D(Q(`#06060a`)), t
                })());
                c.rotation.x = -Math.PI / 2, c.position.y = .001, s.add(c), this.bakeOnly.push(c), this.disposables.push(c.geometry, c.material);
                let l = new Ie(t.renderer);
                for (let e of this.hidden) e.visible = !1;
                await o(`lights, bake cards`);
                for (let e of [f, p, h, v, g, m, _, w, T, y, b, x, S, C]) {
                    let r = performance.now();
                    t.renderer.initTexture(e);
                    try {
                        performance.measure(`neon · upload ${e.image?.width??`?`}px`, {
                            start: r
                        })
                    } catch {}
                    n(), await Ze()
                }
                let u = new W(0, .72, .25);
                this.applyLook(0, !0), this.updateLights(0, 0, 1);
                let d = null,
                    E = performance.now();
                await Ce(t.renderer, () => {
                    d = l.fromScene(s, 0, .05, 140, {
                        size: this.opts.env,
                        position: u,
                        renderTarget: d
                    })
                }, {
                    pmrem: !0
                });
                try {
                    performance.measure(`neon · build shaders (bake)`, {
                        start: E
                    })
                } catch {}
                n(), await Ze();
                let O = [];
                for (let e = 0; e < Z.length; e++) {
                    let t = performance.now();
                    this.applyLook(e, !0), this.ringOnAt = this.gateOnAt = -100, this.updateLights(0, 0, 1), i.value.copy(Q(Z[e].key, 16)), a.value.copy(Q(Z[e].accent, 12)), O.push(l.fromScene(s, 0, .05, 140, {
                        size: this.opts.env,
                        position: u,
                        renderTarget: e === 0 ? d : null
                    }));
                    try {
                        performance.measure(`neon · bake ${Z[e].id}`, {
                            start: t
                        })
                    } catch {}
                    n(), await Ze()
                }
                l.dispose();
                for (let e of O) We(t.renderer, e);
                for (let e of O) this.envs.push(await Xe(t.renderer, e, {
                    frame: Ze
                })), n();
                for (let e of this.hidden) e.visible = !0;
                for (let e of this.bakeOnly) e.visible = !1;
                this.applyLook(0, !0)
            }
            a = performance.now(), this.led = Sn(), this.fk = await Bn(i, {
                lod: this.opts.lod,
                detail: this.opts.detail,
                led: this.led,
                env: this.envs[0].texture,
                smudge: this.smudge
            });
            let P = this.fk;
            if (P.object.updateMatrixWorld(!0), P.screen) {
                let e = new W(0, Math.sin(12 * Math.PI / 180), Math.cos(12 * Math.PI / 180)),
                    t = new W(0, .628, .226),
                    n = new W(1, 0, 0),
                    i = new W().crossVectors(e, n).normalize(),
                    a = new r().makeBasis(n, i, e).setPosition(t);
                this.ledRest = {
                    LrestInv: a.clone().invert(),
                    Mrest: P.screen.matrixWorld.clone()
                }
            }
            P.object.position.y = et, s.add(P.object), await o(`Funくん`)
        }
        signHardware(e, t, n) {
            let {
                P: r,
                right: i,
                up: a,
                nrm: o,
                BW: s,
                BH: c,
                depth: l,
                wallX: u
            } = e, d = (e, t, n) => new W(e, t, n);
            if (e.mount === `project`) {
                let e = r.x + Math.sign(u - r.x) * s / 2;
                for (let n of [.38, -.38]) t(gt(d(e, r.y + n * c, r.z), d(u, r.y + n * c, r.z), .04));
                t(gt(d(e, r.y - .38 * c, r.z), d(u, r.y + .1 * c, r.z), .028)), n(_t(vt(d(e, r.y + c / 2 + .02, r.z + .03), d(u, r.y + c / 2 + .35, r.z + .03), .12)))
            } else if (e.mount === `wall` || e.mount === `end`) {
                let u = r.clone().addScaledVector(o, -l);
                for (let [e, n] of [
                        [-.42, .38],
                        [.42, .38],
                        [-.42, -.38],
                        [.42, -.38]
                    ]) {
                    let r = u.clone().addScaledVector(i, e * s).addScaledVector(a, n * c);
                    t(gt(r, r.clone().addScaledVector(o, -.06), .011, !0))
                }
                if (e.mount === `wall`) {
                    let e = u.clone().addScaledVector(i, .44 * s).addScaledVector(a, -.5 * c).addScaledVector(o, .01);
                    n(_t([e, e.clone().add(d(0, -.15, 0)).addScaledVector(o, -.03), e.clone().add(d(0, -.6, 0)).addScaledVector(o, -.05), d(e.x, Math.max(.05, e.y - 1.6), e.z).addScaledVector(o, -.055)], .008))
                }
            } else if (e.mount === `hang`) {
                let n = r.y + (1 - (e.M.body[1] + e.M.body[3])) * e.H + e.M.body[3] * e.H / 2 + .01;
                t(gt(d(r.x - Math.sign(u - r.x) * (s / 2 + .05), n, r.z), d(u, n, r.z), .035)), t(gt(d(u, n - .28, r.z), d(r.x + Math.sign(u - r.x) * .1 * s, n, r.z), .025))
            } else if (e.mount === `arch`) {
                for (let n of [-1, 1]) {
                    let a = r.clone().addScaledVector(i, n * s / 2),
                        o = n * (e.span ? ? 1.95);
                    for (let e of [.3, -.3]) t(gt(d(a.x, r.y + e * c, r.z), d(o, r.y + e * c, r.z), .045));
                    t(gt(a.clone().add(d(0, c / 2, 0)), d(o, r.y + c / 2 + 1.3, r.z), .007, !0))
                }
                n(_t(vt(r.clone().add(d(s * .3, c / 2 + .01, 0)), d(e.span ? ? 1.95, r.y + c / 2 + .7, r.z + .05), .25), .012))
            } else if (e.mount === `ground`) {
                let e = r.clone().addScaledVector(o, -l / 2 - .01).setY(.03),
                    t = d(u, .03, r.z + .35);
                n(new me(new fe([e, e.clone().lerp(t, .35).add(d(.05, 0, .12)), e.clone().lerp(t, .7).add(d(-.04, 0, -.08)), t, t.clone().setY(.4)]), 24, .01, 6, !1))
            }
        }
        setLook(e, t, n) {
            this.look = (e % Z.length + Z.length) % Z.length, this.lookAt = t, this.surgeAt = n, this.fk ? .setEnv(this.envs[this.look].texture)
        }
        intro(e, t) {
            let n = Math.ceil((e + .45) / g) * g;
            this.introAt = e, this.ringOnAt = n, this.gateOnAt = n + g, this.liftAt = n + g, this.surgeAt = t
        }
        settle(e) {
            this.introAt = e - 10, this.ringOnAt = this.gateOnAt = this.liftAt = e - 8
        }
        danceMove(e, t, n = 1) {
            this.dance = {
                at: t,
                move: e,
                dir: n,
                face: e
            }
        }
        hover(e, t) {
            e >= 0 && e < this.hoverAt.length && t - this.hoverAt[e] > .6 && (this.hoverAt[e] = t)
        }
        pick(e) {
            return vn(this.signs, e)
        }
        lookDef() {
            return Z[this.look]
        }
        applyLook(e, t = !1) {
            let n = Z[e],
                r = this.cur,
                i = {
                    key: Q(n.key),
                    accent: Q(n.accent),
                    ring: Q(n.ring),
                    ring2: Q(n.ring2),
                    led: Q(n.led),
                    fog: new B(...n.fog)
                };
            t && (r.key.copy(i.key), r.accent.copy(i.accent), r.ring.copy(i.ring), r.ring2.copy(i.ring2), r.led.copy(i.led), r.fog.copy(i.fog), n.beams.forEach((e, t) => r.beams[t].copy(Q(e)))), this.look = e
        }
        update(e, t, n) {
            if (e === this.lastT && t === this.lastClock) return;
            this.lastT = e, this.lastClock = t;
            let r = this.U;
            r.time.value = e, r.clock.value = t, this.F.time.value = e, this.R.time.value = e;
            let i = Z[this.look],
                a = this.cur,
                o = 1 - Math.exp(-Math.max(n, 0) * 14);
            a.key.lerp(Jn.set(i.key), o), a.accent.lerp(Jn.set(i.accent), o), a.ring.lerp(Jn.set(i.ring), o), a.ring2.lerp(Jn.set(i.ring2), o), a.led.lerp(Jn.set(i.led), o), a.fog.lerp(Jn.setRGB(...i.fog), o), i.beams.forEach((e, t) => a.beams[t].lerp(Jn.set(e), o)), n <= 0 && this.applyLook(this.look, !0), r.key.value.copy(a.key), r.accent.value.copy(a.accent), r.fogCol.value.copy(a.fog);
            let s = t >= this.lookAt ? Math.exp(-(t - this.lookAt) / .18) : 0;
            r.keyGain.value = 1 + .9 * s, this.updateLights(e, t, n), this.updateSigns(e, t), this.performance(e, t)
        }
        updateLights(e, t, n) {
            let r = this.U,
                i = this.T,
                a = this.cur,
                o = this.reduced,
                s = (t / g % 1 + 1) % 1,
                c = Math.exp(-s * g / .08),
                l = C(this.energy) * (o ? .4 : 1),
                u = t >= this.ringOnAt,
                d = u ? 1 + 2.2 * Math.exp(-(t - this.ringOnAt) / .08) : .35 + (o ? 0 : .1 * Math.sin(e * 40)),
                f = t > this.gateOnAt + g,
                p = f ? 1 + .25 * c : d,
                m = u ? Hn(t, this.ringOnAt, 2.2) : .15 + .1 * Hn(t, this.ringOnAt - g + .1, 5),
                h = t >= this.lookAt ? Math.exp(-(t - this.lookAt) / .14) : 0;
            i.ringCol.value.copy(a.ring), i.ring2Col.value.copy(a.ring2), i.ledCol.value.copy(a.led), i.ringI.value = 2.2 * m * (1 + (u ? .8 * Math.exp(-(t - this.ringOnAt) / .1) : 0)) * (1 + .6 * h) * (1 + (.15 + .6 * l) * c) * (1 + .15 * l), i.ring2I.value = 1.6 * m * (1 + .4 * h), i.ledI.value = 2.2 * (.5 + .5 * m);
            let _ = t - this.introAt;
            i.chase.value = -Math.PI / 2 - (_ < 1.3793103448275863 ? _ / .5 : t / Pe % 1) * Math.PI * 2, i.chaseAmt.value = 8 + (_ >= 0 && _ < 3 ? 40 * Math.exp(-_ / .6) : 0);
            let v = Hn(t, this.gateOnAt, 3.3) * (1 + (t >= this.gateOnAt ? .6 * Math.exp(-(t - this.gateOnAt) / .12) : 0));
            this.gateI.value = v * (1 + .3 * h), this.discCol.value.copy(Jn.set(`#EEF2FF`)), this.discI.value = 9 * p, this.S.hot.value = .6 * p, this.auraCol.value.copy(Jn.set(`#C8D4FF`)).lerp(a.key, .35), this.auraI.value = .4 * p, this.lights.back.intensity = 30 * p, this.lights.rimL.color.copy(a.key), this.lights.rimL.intensity = 5 * (.55 + .45 * Math.min(p, 1.6)) * (1 + (.8 + 1.2 * l) * c * !!f), this.lights.rimR.color.copy(a.accent), this.lights.rimR.intensity = 4 * (.55 + .45 * Math.min(p, 1.6)) * (1 + (.4 + 1.2 * l) * c * !!f);
            let y = (t - this.dance.at) / g;
            this.lights.top.color.copy(a.key), this.lights.top.intensity = y >= 0 && y < 2 ? 30 * Math.exp(-y * g / .12) : 0, this.lanternGain.value = 1 + .12 * c;
            let b = u ? 1 : M(this.ringOnAt - g, this.ringOnAt, t) * .7;
            for (let t of this.beams) {
                let n = this.B.posArr[t.i],
                    r = this.B.rotArr[t.i],
                    i = this.B.colArr[t.i];
                if (t.search) {
                    Gn.set(2.5, 19, -24);
                    let t = Wn.set(-.3 + Math.sin(e * .8) * .35, 0, -1.6 + Math.cos(e * .6) * .3);
                    $.setFromUnitVectors(Yn, t.sub(Gn).normalize()), n.set(Gn.x, Gn.y, Gn.z, 0), r.set($.x, $.y, $.z, $.w), i.set(.73, .79, 1, .025 * (.55 + .45 * b));
                    continue
                }
                let s = o ? 0 : Math.sin(e * 2.4 + t.i * 1.9);
                n.set(t.x * 1.1, 7.8, -6.2 + t.i * .35, 0), $.setFromUnitVectors(Yn, Wn.set(-t.x * .08 + s * (.12 + .1 * l), -1, .12 + .05 * Math.cos(e * 1.7 + t.i)).normalize()), r.set($.x, $.y, $.z, $.w);
                let u = a.beams[t.i];
                i.set(u.r, u.g, u.b, .06 * b * (1 + .8 * h) * (f ? .8 + (.4 + 1.1 * l) * c : 1) * (1 + .6 * l))
            }
            let x = this.spill.length;
            r.lpArr[x].set(0, 1, tt.z + .1, 6), r.lcArr[x].set(a.key.r, a.key.g, a.key.b, 0).multiplyScalar(1.6 * m * (1 + .6 * h)), r.lpArr[x + 1].set(nt.x, nt.y, nt.z, 5), r.lcArr[x + 1].set(.9, .93, 1, 0).multiplyScalar(.25 * p), r.pool.value.set(0, .9, -1.6), r.poolK.value = .1 * (.3 + .7 * m) * (1 + .5 * h), r.fpArr[0].set(nt.x, nt.y, nt.z, .02), r.fcArr[0].set(.675 + a.key.r * .25, .6975 + a.key.g * .25, .75 + a.key.b * .25, 0).multiplyScalar(.45 * p), r.fpArr[1].set(0, tt.y, tt.z, .6), r.fcArr[1].set(a.ring.r, a.ring.g, a.ring.b, 0).multiplyScalar(.28 * m * (1 + .5 * h)), r.fpArr[2].set(rt.pos.x, rt.pos.y, rt.pos.z, 1), r.fcArr[2].set(a.key.r, a.key.g, a.key.b, 0).multiplyScalar(.18 * v)
        }
        updateSigns(e, t) {
            let n = this.signFx.U.siArr,
                r = this.U,
                i = this.reduced,
                a = t / g,
                o = Math.floor(a),
                s = a - o,
                c = Math.exp(-s * g / .08),
                l = t > this.gateOnAt,
                u = C(this.energy) * (i ? .4 : 1),
                d = new Float32Array(this.signs.length);
            for (let t of this.signs) {
                let r = t.stand ? .72 : 1,
                    a = this.surgeAt + Math.max(0, 17 - t.P.z) / 45;
                e >= a && (r *= 1 + 1.1 * Math.exp(-(e - a) / .09)), e - this.surgeAt < .6 && !l && (r *= .4 + .6 * C((e - a + .25) / .25)), t.bad && Un(Math.floor(e * 12) + t.seed * 7) < t.bad && (r *= .15), l && (t.group === (o % 3 + 3) % 3 ? r *= 1 + (.5 + .9 * u) * c : r *= .86 - .2 * u + (.14 + .2 * u) * (1 - c), !i && (t.seed * 7.13 + o * 3.1) % 1 < .05 && (r *= .12));
                let s = e - this.hoverAt[t.index];
                s >= 0 && s < .5 && (r *= Un(Math.floor(s * 30) + t.index * 13.7) > .45 ? 1.2 : i ? .6 : .06);
                let f = 1;
                if (t.flick) {
                    let n = Un(Math.floor(e * t.flick.rate + t.seed * 7.1) * .731 + t.seed * 4.1);
                    f = t.flick.mode === `band` ? n < .35 ? .55 + .3 * (n * 13.7 % 1) : 1 : n < .5 ? .04 + .12 * (n * 7.3 % 1) : n < .62 ? .5 : 1, i && (f = .5 + .5 * f)
                }
                n[t.index].set(r, f, 0, 0), d[t.index] = r * (t.flick ? 1 - Math.min(1, (t.flick.rect[2] - t.flick.rect[0]) * (t.flick.rect[3] - t.flick.rect[1]) / Math.max(.001, t.M.body[2] * t.M.body[3])) * (1 - f) : 1)
            }
            this.spill.forEach((e, t) => {
                r.lpArr[t].set(e.pos.x, e.pos.y, e.pos.z, 7), r.lcArr[t].set(e.col.r, e.col.g, e.col.b, 0).multiplyScalar(e.base * d[e.sign] * .05)
            });
            for (let e = 3; e < r.nF; e++) {
                let t = this.spill[e - 3];
                if (!t) {
                    r.fcArr[e].set(0, 0, 0, 0);
                    continue
                }
                r.fpArr[e].set(t.pos.x, t.pos.y, t.pos.z, .4), r.fcArr[e].set(t.col.r, t.col.g, t.col.b, 0).multiplyScalar(t.base * d[t.sign] * .015)
            }
        }
        performance(e, t) {
            let n = this.fk;
            if (!n) return;
            let r = this.dance,
                a = (t - r.at) / g,
                o = a >= -.02 && a < 1.25,
                s = wn();
            s.upper.y = Math.sin(e * 2.3) * .01, s.upper.squash = Math.sin(e * 2.3) * .012, s.upper.roll = Math.sin(e * .9) * .02, s.antenna = Math.sin(e * 5.3) * .06, Tn(s, kn(t, (this.reduced ? .25 : o ? r.move === 1 ? .25 : .55 : .6) * (1 + (this.reduced ? .2 : .55) * C(this.energy)) * C(this.groove)), 1);
            let c = {
                l: this.restFace,
                r: this.restFace,
                power: 1,
                glitch: 0,
                blink: !1
            };
            if (t < this.liftAt + .4) {
                let e = On(C((t - this.liftAt) / .3), 2.2);
                s.upper.pitch += i(.26, -.03, e), t >= this.ringOnAt && t < this.ringOnAt + .3 && (s.upper.squash += .08 * Math.exp(-(t - this.ringOnAt) / .07));
                let n = this.liftAt - .04;
                c.power = t < n ? .25 * M(this.ringOnAt, this.ringOnAt + .1, t) : C(.45 + (t - n) / .16 * .55, 0, 1), c.l = c.r = t < this.liftAt + .14 ? `open` : `happy`
            }
            if (o && a >= 0) {
                let e = C(a);
                r.move === 0 ? Tn(s, Mn(e, r.dir), 1) : r.move === 1 ? Tn(s, An(e, 1, .22), 1) : r.move === 2 ? Tn(s, jn(On(C(a / .2), 1.8) * (1 - M(.9, 1.25, a))), 1) : (Tn(s, Nn(e, 0), 1), s.root.y += .08 * Math.sin(Math.PI * C(a / .8))), s.upper.squash += .12 * Math.exp(-a * g / .06)
            }
            let l = (t - r.at) / g;
            if (l >= 0 && l < 2.2) {
                let e = [
                    [`heart`, `heart`],
                    [`bolt`, `boltR`],
                    [`gt`, `lt`],
                    [`star`, `star`]
                ];
                [c.l, c.r] = e[r.face] ? ? e[0], c.glitch = Math.exp(-l * g / .05) * .8
            }
            e % 3.7 > 3.52 && c.power >= 1 && c.l === this.restFace && (c.blink = !0), s.visor = -2.25, n.rig.apply(s), n.object.updateMatrixWorld(!0), n.nodes.shoeL ? .getWorldPosition(this.S.shoeL.value), n.nodes.shoeR ? .getWorldPosition(this.S.shoeR.value), this.S.shoeL.value.y -= .1, this.S.shoeR.value.y -= .1;
            let u = this.led;
            u.clear(), u.u.time.value = e, u.u.glitch.value = this.reduced ? 0 : c.glitch, c.power < 1 ? u.boot(c.power, c.l, c.r, bn) : c.blink ? u.eyes(`blink`, `blink`, bn, 1, [0, -2]) : u.eyes(c.l, c.r, bn, 1 + (.3 + .5 * C(this.energy)) * Math.exp(-(t / g % 1) * g / .09)), u.upload(), this.ledRest && n.screen && u.u.ledMat.value.copy(this.ledRest.LrestInv).multiply(this.ledRest.Mrest).multiply(Kn.copy(n.screen.matrixWorld).invert())
        }
        attachCamera(e) {
            e.layers.enable(6), this.refl ? .reflector ? .getVirtualCamera(e).layers.disable(6)
        }
        async warmPipelines(e, t, n, r) {
            if (this.warmed) return;
            let i = performance.now();
            await Ce(e, t, {
                cancelled: r
            });
            try {
                performance.measure(n, {
                    start: i
                })
            } catch {}
            this.warmed = !r()
        }
        detachCamera(e) {
            let t = this.refl ? .reflector,
                n = t ? .virtualCameras ? .get(e);
            t && n && (t.renderTargets ? .get(n) ? .dispose(), t.renderTargets ? .delete(n), t.virtualCameras ? .delete(e))
        }
        prepare(e, t, n) {
            this.R.pxW.value = 2 * Math.tan(e.fov * Math.PI / 360) / Math.max(1, t);
            let r = Math.max(0, e.position.y - 1) / Math.max(.5, e.position.distanceTo(nt));
            this.aura.material.opacity = 1 - .85 * M(.2, .7, r), this.refl && (this.refl.reflector.resolutionScale = n)
        }
        dispose() {
            this.fk ? .dispose(), this.led ? .dispose();
            for (let e of this.envs) e.dispose();
            for (let e of this.disposables) e.dispose();
            for (let e of this.textures) {
                e.dispose();
                let t = e.image;
                typeof ImageBitmap < `u` && t instanceof ImageBitmap && t.close()
            }
            this.releaseReflector ? .(), this.lease ? .release(), this.scene.clear()
        }
    };

function Zn() {
    let e = document.createElement(`canvas`);
    e.width = 512, e.height = 256;
    let t = e.getContext(`2d`);
    t.fillStyle = `#d8d2c4`, t.fillRect(0, 0, 256, 256), t.fillStyle = `#2a2a2a`, t.beginPath(), t.arc(92.16, 128, 76.8, 0, Math.PI * 2), t.fill(), t.strokeStyle = `#8c877c`, t.lineWidth = 3;
    for (let e = 0; e < 9; e++) t.beginPath(), t.arc(92.16, 128, 7.68 * e + 4, 0, Math.PI * 2), t.stroke();
    t.fillStyle = `#b9b2a3`;
    for (let e = 0; e < 10; e++) t.fillRect(184.32, 51.2 + e * 256 * .06, 51.2, 6.4);
    t.fillStyle = `#c41a1a`, t.fillRect(256, 0, 256, 256), t.fillStyle = `#5a0808`;
    for (let e = 0; e < 4; e++)
        for (let n = 0; n < 3; n++) t.fillRect(272 + e * 60, 20 + n * 76, 44, 56);
    t.fillStyle = `#f2f2f2`, t.fillRect(336, 4, 96, 12);
    let n = new ce(e);
    return n.colorSpace = Ae, n.generateMipmaps = !0, n.minFilter = m, n
}
var Qn = null,
    $n = null,
    er = 0,
    tr = {
        look: 0,
        visited: !1
    };
async function nr(e, t) {
    if (er++, !$n) {
        let n = performance.now();
        $n = Xn.create(e, Vn(e), t).then(e => {
            try {
                performance.measure(`neon · alley build`, {
                    start: n
                })
            } catch {}
            if (er <= 0) throw e.dispose(), Qn = null, $n = null, Error(`alley released while loading`);
            return Qn = e, e.setLook(tr.look, -10, -10), e
        }), $n.catch(() => {
            $n = null
        })
    }
    try {
        return await $n
    } catch (e) {
        throw er = Math.max(0, er - 1), e
    }
}

function rr() {
    er = Math.max(0, er - 1), er === 0 && Qn && (Qn.dispose(), Qn = null, $n = null)
}
var ir = {
        s16: {
            pos: [.12, .34, 2.75],
            target: [0, .68, 0],
            fov: 40,
            roll: 0
        },
        s4: {
            pos: [-1.05, .2, 1.95],
            target: [.05, .8, -.3],
            fov: 50,
            roll: -.12
        },
        s5: {
            pos: [-.3, 4.6, 4],
            target: [0, .2, -.6],
            fov: 50,
            roll: .2
        },
        s6: {
            pos: [-2.2, .48, .5],
            target: [0, .62, .05],
            fov: 34,
            roll: -.05
        },
        s7: {
            pos: [0, .6, 2.3],
            target: [0, .5, 0],
            fov: 34,
            roll: 0
        },
        tv: {
            pos: [0, .6, 2.18],
            target: [0, .5, 0],
            fov: 33,
            roll: 0
        }
    },
    ar = new W(0, .55, 0),
    or = new W,
    sr = new W;

function cr(e) {
    let t = or.copy(e).sub(ar),
        n = t.length();
    return {
        r: n,
        az: Math.atan2(t.x, t.z),
        el: Math.asin(Math.max(-1, Math.min(1, t.y / n)))
    }
}

function lr(e, t, n, r) {
    let i = cr(sr.set(...e.pos)),
        a = cr(sr.set(...t.pos)),
        o = a.az - i.az;
    o > Math.PI && (o -= 2 * Math.PI), o < -Math.PI && (o += 2 * Math.PI);
    let s = i.r + (a.r - i.r) * n,
        c = i.az + o * n,
        l = i.el + (a.el - i.el) * n;
    return r.pos.set(Math.sin(c) * Math.cos(l) * s, Math.sin(l) * s, Math.cos(c) * Math.cos(l) * s).add(ar), r.target.set(...e.target).lerp(sr.set(...t.target), n), r.fov = e.fov + (t.fov - e.fov) * n, r.roll = e.roll + (t.roll - e.roll) * n, r
}
var ur = l(.2126, .7152, .0722);

function dr() {
    return {
        toe: D(new W(-.035, .024, .055)),
        mid: D(new W(.032, -.02, .03)),
        top: D(new W(.03, .012, -.03)),
        split: D(1)
    }
}

function fr(e, t, r, i) {
    return G(() => {
        let a = P(e.rgb, l(0)),
            o = R(t.tonemap.lessThan(.5), Oe(a, t.exposure), ye(a, t.exposure)),
            c = Ee(S(o, 0, 1)).toVar(),
            u = n(c, ur);
        c.assign(I(l(u), c, t.saturation)), c.assign(c.sub(.5).mul(t.contrast).add(.5)), c.addAssign(t.shadowTint.mul(k(1).sub(q(0, .55, u))).add(t.highTint.mul(q(.45, 1, u))));
        let f = n(S(c, 0, 1), ur),
            p = P(c.r, P(c.g, c.b)),
            m = N(c.r, N(c.g, c.b)),
            g = p.sub(m).div(P(p, .001)),
            _ = k(1).sub(q(.35, .9, g).mul(.7)),
            v = q(.025, .1, f).mul(k(1).sub(q(.14, .42, f))),
            y = q(.3, .55, f).mul(k(1).sub(q(.6, .85, f))),
            b = q(.65, .98, f);
        c.addAssign(r.toe.mul(v).add(r.mid.mul(y)).add(r.top.mul(b)).mul(_).mul(r.split));
        let x = q(1.05, .25, h(i.sub(.5).mul(O(t.aspect, 1))).mul(.95));
        c.mulAssign(I(k(1), x, t.vignette));
        let C = n(S(c, 0, 1), ur);
        c.assign(I(c, I(l(t.impactA), l(t.impactB), z(t.impactThr, C)), t.impact)), c.addAssign(l(t.flashColor).mul(t.flash)), c.assign(I(c, l(t.fadeColor), t.fade));
        let w = he.xy,
            T = d(t.time.mul(23.17)).mul(719),
            E = ke(w.add(T)).add(ke(w.mul(.5).add(T.mul(.46)))).sub(1),
            D = I(k(1.55), k(.35), q(.08, .85, C)).mul(k(.55).add(q(0, .035, C).mul(.45)));
        return c.addAssign(E.mul(t.grain).mul(D).mul(k(1).sub(t.fade))), s(Me(S(c, 0, 1)), 1)
    })()
}

function pr(e, t, r, i) {
    let o = new De,
        u = dr(),
        d = {
            ca: D(.0026),
            light: D(new re(.5, .45)),
            rays: D(.05),
            rayThr: D(10),
            rayOn: D(1),
            rayRadius: D(.22),
            aspect: D(16 / 9),
            halation: D(.22),
            halTint: D(new B(1, .32, .16))
        },
        f = i.scale ? ? 1,
        p = ae(t.scene, r, {
            samples: i.samples
        });
    f !== 1 && p.setResolutionScale(f);
    let m = p.getTextureNode(),
        g = ge(m, a(), d.ca),
        _ = Ot(G(() => {
            let e = a(),
                t = m.sample(e).rgb,
                n = e.sub(d.light).mul(O(d.aspect, 1)),
                r = q(d.rayRadius, d.rayRadius.mul(.25), h(n));
            return s(N(P(t.sub(d.rayThr), l(0)), l(3)).mul(r), 1)
        })(), null, null, {
            resolutionScale: .25 * f
        }),
        v = Ot(G(() => {
            let e = a().toVar(),
                t = i.rayTaps,
                n = d.light.sub(e).mul(.9 / t);
            e.addAssign(n.mul(jt(he)));
            let r = l(0).toVar(),
                o = k(1).toVar();
            return c(t, () => {
                e.addAssign(n), r.addAssign(_.sample(e).rgb.mul(o)), o.mulAssign(.955)
            }), s(r.div(t), 1)
        })(), null, null, {
            resolutionScale: .25 * f
        }),
        y = g.add(v.rgb.mul(d.rays).mul(d.rayOn).mul(2.5)),
        b = Re(y, .36, .5, .9);
    b.setResolutionScale(i.bloom * f);
    let x = l(d.halTint).mul(n(b.rgb, l(.3, .5, .2))).mul(d.halation),
        S = fr(y.add(b.rgb).add(x), o, u, a()),
        C = new Fe(e, S);
    o.grade({
        contrast: 1.17,
        saturation: 1.06,
        vignette: .36,
        grain: .042
    });
    let w = new W;
    return {
        look: o,
        G: u,
        C: d,
        glow: b,
        scenePass: p,
        pipe: C,
        mask: _,
        rays: v,
        track(e, t) {
            w.copy(t).project(e);
            let n = w.z < 1 && w.z > -1 ? 1 - mr(Math.max(Math.abs(w.x), Math.abs(w.y)) - .9, .5) : 0;
            d.light.value.set(w.x * .5 + .5, w.y * .5 + .5), d.rayOn.value = n, d.aspect.value = e.aspect, o.aspect.value = e.aspect
        },
        render(e) {
            C.renderTo(e)
        },
        dispose() {
            C.dispose(), b.dispose(), p.dispose(), _.dispose ? .(), v.dispose ? .()
        }
    }
}
var mr = (e, t) => {
    let n = Math.min(1, Math.max(0, e / t));
    return n * n * (3 - 2 * n)
};
export {
    tr as a, Z as c, nt as d, tt as f, nr as i, Cn as l, ar as n, lr as o, et as p, ir as r, rr as s, pr as t, jt as u
};