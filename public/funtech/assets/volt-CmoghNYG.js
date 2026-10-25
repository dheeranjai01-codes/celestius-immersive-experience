import {
    $t as e,
    A as t,
    An as n,
    At as r,
    B as i,
    Bn as a,
    Bt as o,
    Ct as s,
    Dn as c,
    Dt as l,
    Et as u,
    Fn as d,
    Ft as f,
    G as p,
    Gn as m,
    Gt as h,
    H as g,
    Ht as _,
    I as v,
    In as y,
    It as b,
    J as x,
    Jt as S,
    K as C,
    Lt as w,
    M as T,
    O as ee,
    On as te,
    Ot as E,
    P as D,
    Pt as O,
    Q as k,
    Qn as A,
    R as j,
    Rt as M,
    Sn as N,
    St as P,
    T as F,
    Tt as I,
    U as L,
    Un as ne,
    V as re,
    Vn as R,
    W as ie,
    Wt as ae,
    X as oe,
    Xt as se,
    Y as z,
    Yn as ce,
    Z as B,
    Zn as V,
    _n as H,
    _r as le,
    _t as ue,
    a as de,
    at as fe,
    bt as U,
    dn as pe,
    dt as me,
    en as he,
    gt as ge,
    hn as _e,
    i as ve,
    ir as ye,
    it as be,
    j as xe,
    jn as Se,
    jt as Ce,
    ln as we,
    lr as Te,
    lt as Ee,
    m as De,
    mn as Oe,
    n as ke,
    ot as Ae,
    p as je,
    pn as Me,
    qn as Ne,
    qt as Pe,
    r as Fe,
    rn as Ie,
    rr as Le,
    s as Re,
    sr as ze,
    st as W,
    t as Be,
    tr as Ve,
    un as He,
    ur as Ue,
    ut as We,
    v as Ge,
    vn as Ke,
    vr as G,
    vt as qe,
    w as K,
    wn as Je,
    wt as Ye,
    xn as Xe,
    xt as Ze,
    yt as q,
    z as Qe
} from "./post-DJ5SZDIO.js";
import {
    i as $e,
    r as et,
    s as tt,
    u as nt
} from "./index-BSu4tWCh.js";
import {
    t as rt
} from "./pmrem-B-AQRfYD.js";
var it = E,
    at = it.reflectVector,
    ot = it.normalWorld;
it.frontFacing, it.sign;
var st = it.asin,
    ct = it.sqrt;
it.reflect, it.round, it.positionView, it.cameraViewMatrix, it.oneMinus, it.saturate, it.negate;
var lt = it.materialEmissive;
it.instanceIndex, it.textureSize;
var J = {
    a: Array.from({
        length: 4
    }, () => P(new G(0, -50, 0))),
    b: Array.from({
        length: 4
    }, () => P(new G(0, -50, 0))),
    i: Array.from({
        length: 4
    }, () => P(0)),
    ground: Array.from({
        length: 4
    }, () => P(0)),
    glow: P(0),
    any: P(0),
    volt: P(new _e(`#E6FF00`))
};

function ut(e, t) {
    let n = J.a[e],
        r = J.b[e].sub(n),
        a = D(i(t.sub(n), r).div(z(i(r, r), 1e-4)), 0, 1);
    return n.add(r.mul(a))
}
var dt = K(([e, t]) => {
        let n = L(0);
        for (let r = 0; r < 4; r++) {
            let i = x(e.sub(ut(r, e))).div(t);
            n = n.add(J.i[r].div(i.mul(i).add(1)))
        }
        return n
    }),
    ft = K(([e, t, n, r]) => {
        let a = be(t.mul(i(t, n).mul(2)).sub(n)),
            o = L(0);
        for (let n = 0; n < 4; n++) {
            let s = J.a[n].sub(e),
                c = J.b[n].sub(J.a[n]),
                l = i(a, c),
                u = D(i(a, s).mul(l).sub(i(s, c)).div(z(i(c, c).sub(l.mul(l)), 1e-4)), 0, 1),
                d = s.add(c.mul(u)),
                f = x(d),
                p = We(z(i(a, d.div(z(f, 1e-4))), 0), r),
                m = L(1).div(L(1).add(f.mul(f).mul(.02))),
                h = z(i(t, d.div(z(f, 1e-4))), 0).mul(m).mul(.012);
            o = o.add(J.i[n].mul(p.mul(m).add(h)))
        }
        return o
    });

function pt(e) {
    let t = e >>> 0;
    return () => {
        t = t + 1831565813 >>> 0;
        let e = t;
        return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296
    }
}
var mt = new G,
    ht = new G,
    gt = new G;

function _t(e, t, n, r, i) {
    let a = [t.clone(), n.clone()];
    gt.subVectors(n, t);
    let o = gt.length();
    gt.normalize(), mt.set(0, 1, 0).cross(gt), mt.lengthSq() < 1e-4 && mt.set(1, 0, 0).cross(gt), mt.normalize(), ht.crossVectors(gt, mt).normalize();
    let s = i * o;
    for (let t = 0; t < r; t++) {
        let t = [a[0]];
        for (let n = 0; n < a.length - 1; n++) {
            let r = a[n].clone().add(a[n + 1]).multiplyScalar(.5);
            r.addScaledVector(mt, (e() - .5) * 2 * s).addScaledVector(ht, (e() - .5) * 2 * s * .6), t.push(r, a[n + 1])
        }
        a = t, s *= .52
    }
    return a
}

function vt({
    capacity: t = 8
} = {}) {
    let n = 6144,
        r = n * 3,
        i = new Float32Array(n * 3),
        a = new Float32Array(n),
        o = new Float32Array(n),
        s = new Uint16Array(r),
        c = new He,
        l = new we(i, 3).setUsage(Xe),
        d = new we(a, 1).setUsage(Xe),
        f = new we(o, 1).setUsage(Xe),
        p = new we(s, 1).setUsage(Xe);
    c.setAttribute(`position`, l), c.setAttribute(`aSide`, d), c.setAttribute(`aAlpha`, f), c.setIndex(p), c.boundingSphere = new Te(new G(0, 3, -2), 40);
    let m = P(1),
        h = new e({
            transparent: !0,
            depthWrite: !1,
            blending: 2,
            side: 2
        });
    h.name = `volt-bolt`;
    let _ = ee(xe(`aSide`, `float`)),
        v = xe(`aAlpha`, `float`),
        y = g(_.mul(_).mul(-16)),
        b = g(_.mul(_).mul(-4.5)),
        x = g(_.mul(_).mul(-1.4)).mul(L(1).sub(q(.75, 1, _)));
    h.colorNode = u(J.volt).mul(b.mul(3.4).add(x.mul(1.1))).add(u(1, 1, .94).mul(y).mul(13)).mul(v).mul(m);
    let S = new R(c, h);
    S.frustumCulled = !1, S.renderOrder = 8;
    let C = [],
        w = 0,
        T = 0,
        te = new G,
        E = new G,
        D = new G,
        O = new G,
        k = .001;

    function A(e, t, c, l) {
        let u = e.length;
        if (w + u * 2 > n || T + (u - 1) * 6 > r) return;
        let d = w;
        for (let n = 0; n < u; n++) {
            let r = e[n],
                s = e[Math.max(0, n - 1)],
                d = e[Math.min(u - 1, n + 1)];
            E.subVectors(d, s), D.subVectors(te, r);
            let f = D.length();
            O.crossVectors(E, D).normalize();
            let p = n / (u - 1),
                m = Math.min(1, p / l[0], (1 - p) / (1 - l[1])),
                h = t * (.25 + .75 * Math.max(0, Math.min(1, m))) * .5 * k * f;
            for (let e = 0; e < 2; e++) {
                let t = w + e,
                    n = e ? 1 : -1;
                i[t * 3] = r.x + O.x * h * n, i[t * 3 + 1] = r.y + O.y * h * n, i[t * 3 + 2] = r.z + O.z * h * n, a[t] = n, o[t] = c
            }
            w += 2
        }
        for (let e = 0; e < u - 1; e++) {
            let t = d + e * 2;
            s[T++] = t, s[T++] = t + 1, s[T++] = t + 2, s[T++] = t + 1, s[T++] = t + 3, s[T++] = t + 2
        }
    }
    return {
        mesh: S,
        material: h,
        gain: m,
        get strikes() {
            return C
        },
        add(e) {
            C.push(e), C.length > t && (C = C.slice(-t))
        },
        clear() {
            C = []
        },
        update(e, t, n, r) {
            w = 0, T = 0, te.setFromMatrixPosition(t.matrixWorld), k = 2 * Math.tan(t.fov * Math.PI / 360) / 1080 * (1080 / Math.max(1, n)) * (n / 1080);
            let i = [];
            C = C.filter(t => e - t.t0 < t.life + .05);
            for (let t of C) {
                let n = e - t.t0;
                if (n < 0 || n >= t.life) continue;
                let a = n / t.life,
                    o = Math.floor(n * 30),
                    s = pt(t.seed * 7919),
                    c = pt(t.seed * 131 + o)(),
                    l = o === 0 ? 1 : r ? .7 : c > .35 ? .55 + .45 * pt(t.seed * 17 + o * 3)() : .14,
                    u = Math.exp(-n / (t.big ? .14 : .1)) * .8 + .2 * (1 - a),
                    d = Math.min(1.5, u * l * t.gain);
                t.coarse || = _t(s, t.A, t.B, 4, t.amp);
                let f = pt(t.seed * 31 + o * 7 + 1),
                    p = [];
                for (let e = 0; e < t.coarse.length - 1; e++) {
                    let n = _t(f, t.coarse[e], t.coarse[e + 1], 2, .22);
                    for (let t = +!!e; t < n.length; t++) p.push(n[t])
                }
                d > .01 && A(p, t.width, d, [.08, .92]);
                let m = pt(t.seed * 53 + (o >> 1) * 11 + 5);
                for (let e = 0; e < t.branches; e++) {
                    let e = p[Math.floor((.12 + m() * .62) * (p.length - 1))],
                        n = new G().subVectors(t.B, t.A),
                        r = n.length() * (.16 + m() * .24);
                    n.normalize().applyAxisAngle(new G(m() - .5, m() - .5, m() - .5).normalize(), (m() < .5 ? -1 : 1) * (.45 + m() * .5));
                    let i = _t(m, e, e.clone().addScaledVector(n, r), 3, .2);
                    d > .01 && A(i, t.width * .45, d * (.5 + m() * .3), [.02, .6])
                }
                let h = Math.exp(-n / .07) * (o === 0 ? 1 : .6) * l;
                i.push({
                    s: t,
                    age: n,
                    flash: h,
                    intensity: (1 - a) * l
                })
            }
            return l.needsUpdate = !0, d.needsUpdate = !0, f.needsUpdate = !0, p.needsUpdate = !0, c.setDrawRange(0, T), S.visible = T > 0, i
        },
        dispose() {
            c.dispose(), h.dispose()
        }
    }
}
var yt = 990 / 362.89,
    Y = {
        cx: .3,
        cz: -1.6,
        radius: 9,
        y0: -.5,
        height: 11,
        rows: 7
    },
    X = {
        time: P(0),
        scroll: P(0),
        red: P(new _e(`#FF4122`)),
        bg: P(new _e(`#070708`)),
        base: P(.005),
        cap: P(.1),
        amb: P(.032),
        poolK: P(.06),
        bgGain: P(.45),
        refl: P(.62),
        rough: P(.28),
        shadow: P(.85),
        shoeL: P(new G(-.15, 0, 0)),
        shoeR: P(new G(.15, 0, 0)),
        body: P(new G(0, 0, 0)),
        sil: P(0)
    },
    bt = {};

function xt(e, t = 2048) {
    let n = Math.round(t / yt),
        r = bt.logo;
    if (!r || r.width !== t) {
        r = document.createElement(`canvas`), r.width = t, r.height = n;
        let i = r.getContext(`2d`, {
            willReadFrequently: !0
        });
        i.fillStyle = `#fff`, i.fillRect(0, 0, t, n), i.drawImage(e, 0, 0, t, n);
        let a = i.getImageData(0, 0, t, n),
            o = a.data;
        for (let e = 0; e < o.length; e += 4) {
            let t = 255 - (o[e] * .299 + o[e + 1] * .587 + o[e + 2] * .114);
            o[e] = o[e + 1] = o[e + 2] = 255, o[e + 3] = t
        }
        i.putImageData(a, 0, 0), bt.logo = r
    }
    let i = new pe(r);
    return i.colorSpace = ``, i.generateMipmaps = !0, i.minFilter = y, i.magFilter = d, i.anisotropy = 8, i.wrapS = i.wrapT = Oe, i
}

function St(e = 128) {
    if (bt.noise && bt.noise.length === e * e * 4) return Ct(bt.noise.slice(), e);
    let t = new Uint8Array(e * e * 4),
        n = (e, t, n) => {
            let r = Math.sin(e * 127.1 + t * 311.7 + n * 74.7) * 43758.5453;
            return r - Math.floor(r)
        },
        r = (e, t, r, i) => {
            let a = Math.floor(e),
                o = Math.floor(t),
                s = e - a,
                c = t - o,
                l = s * s * (3 - 2 * s),
                u = c * c * (3 - 2 * c),
                d = n(a % i, o % i, r),
                f = n((a + 1) % i, o % i, r),
                p = n(a % i, (o + 1) % i, r),
                m = n((a + 1) % i, (o + 1) % i, r);
            return d + (f - d) * l + (p - d) * u + (d - f - p + m) * l * u
        };
    for (let i = 0; i < e; i++)
        for (let a = 0; a < e; a++) {
            let o = (i * e + a) * 4,
                s = 0,
                c = .5,
                l = 8;
            for (let t = 0; t < 4; t++) s += r(a / e * l, i / e * l, t, l) * c, c *= .5, l *= 2;
            t[o] = Math.round(s * 255), t[o + 1] = Math.round(r(a / e * 32, i / e * 32, 9, 32) * 255), t[o + 2] = Math.round(n(a, i, 3) * 255), t[o + 3] = 255
        }
    return bt.noise = t.slice(), Ct(t, e)
}

function Ct(e, t) {
    let n = new Ke(e, t, t, A);
    return n.wrapS = n.wrapT = ye, n.generateMipmaps = !0, n.minFilter = y, n.magFilter = d, n.needsUpdate = !0, n
}
var wt = e => p(qe(e.mul(91.345)).mul(47453.5453));

function Tt(e, n) {
    let r = n.x.sub(Y.cx),
        i = n.z.sub(Y.cz),
        a = t(r, i.negate()).mul(-Y.radius),
        o = n.y.sub(Y.y0),
        s = Y.height / Y.rows,
        c = 1.06,
        l = o.add(qe(a.mul(.33).add(X.time.mul(1.1))).mul(.12)),
        u = ie(l.div(s)),
        d = p(l.div(s)),
        f = ue(k(u, 2).lessThan(1), L(1), L(-1)),
        m = a.div(s * yt * c).add(d.mul(.12).mul(f)).add(X.scroll.mul(f)).add(wt(u).mul(7)),
        h = p(m.div(1.07)).mul(1.07),
        g = d.sub(.5).mul(c).add(.5),
        _ = I(m.div(1.07), l.div(s)),
        v = j(_).mul(I(1.07, c)),
        y = Qe(_).mul(I(1.07, c)),
        b = U(h, 1).mul(U(0, g)).mul(U(g, 1));
    return Ze(e, I(h, g)).grad(v, y).a.mul(b)
}

function Et(e) {
    return X.base.add(D(dt(e, L(3.6)).mul(X.poolK).add(X.amb.mul(J.glow)), 0, X.cap))
}

function Dt(e) {
    return K(([t, n]) => {
        let r = t.x.sub(Y.cx),
            i = t.z.sub(Y.cz),
            a = z(n.x.mul(n.x).add(n.z.mul(n.z)), 1e-4),
            o = r.mul(n.x).add(i.mul(n.z)).mul(2),
            s = r.mul(r).add(i.mul(i)).sub(Y.radius * Y.radius),
            c = o.negate().add(ct(z(o.mul(o).sub(a.mul(s).mul(4)), 0))).div(a.mul(2)),
            l = t.add(n.mul(c)),
            d = q(Y.y0, Y.y0 + .4, l.y).mul(q(Y.y0 + Y.height, Y.y0 + Y.height - .4, l.y));
        return u(X.red).mul(Tt(e, l)).mul(Et(l)).mul(d)
    })
}

function Ot(t) {
    let n = new e({
        side: 1
    });
    n.name = `volt-rows`;
    let r = Ee,
        i = q(-.3, 1.2, r.y),
        a = u(X.bg).mul(X.bgGain).mul(L(.55).add(i.mul(.45))).add(u(.004, .0055, .007).mul(g(ee(r.y.sub(1.4)).mul(-.45))));
    return n.colorNode = K(() => {
        let e = r.toVar(),
            n = u(a).toVar();
        return F(J.any.greaterThan(.5), () => {
            let r = u(X.red).mul(Et(e)).mul(L(.6).add(i.mul(.4)));
            n.assign(B(a, r, Tt(t, e)))
        }), B(n, u(3.5), X.sil)
    })(), n
}

function kt(t, n) {
    let r = new e;
    r.name = `volt-floor`;
    let a = Ee.xz,
        o = Ze(t, a.mul(.21)).r,
        s = Ze(t, a.mul(.043).add(.31)).g,
        c = u(.007, .007, .008),
        l = a.sub(X.shoeL.xz).mul(I(1, .75)),
        d = a.sub(X.shoeR.xz).mul(I(1, .75)),
        f = a.sub(X.body.xz),
        p = D(g(i(l, l).div(-.012)).mul(g(z(X.shoeL.y, 0).div(-.05))).add(g(i(d, d).div(-.012)).mul(g(z(X.shoeR.y, 0).div(-.05)))).mul(.9).add(g(i(f, f).div(-.25)).mul(.35)), 0, 1).mul(X.shadow),
        m = n.uvNode,
        h = I(1).div(ge),
        _ = X.rough.mul(L(.6).add(s.mul(.8))).mul(14),
        v = (e, t) => n.sample(m.add(I(e, t).mul(h).mul(_))).rgb,
        y = n.sample(m).rgb.mul(.36).add(v(1, .3).mul(.16)).add(v(-.3, 1).mul(.16)).add(v(-1, -.3).mul(.16)).add(v(.3, -1).mul(.16)),
        b = be(T.sub(Ee)),
        S = L(.04).add(L(.96).mul(We(L(1).sub(D(b.y, 0, 1)), 5))),
        C = y.mul(X.refl).mul(L(.25).add(S.mul(.75))).mul(L(.85).add(o.mul(.3))),
        w = K(() => {
            let e = u(0).toVar();
            return F(J.any.greaterThan(.5), () => {
                let t = u(0);
                for (let e = 0; e < 4; e++) {
                    let n = x(a.sub(J.b[e].xz)).div(.9),
                        r = J.ground[e].mul(J.i[e]);
                    t = t.add(u(J.volt).mul(r).mul(g(n.mul(n).mul(-18)).mul(.9).add(g(n.mul(-3)).mul(.12)))).add(u(1, 1, .9).mul(r).mul(g(n.mul(n).mul(-160))).mul(1.5))
                }
                e.assign(t)
            }), e
        })();
    return r.colorNode = B(c.mul(L(1).sub(p)).add(C.mul(L(1).sub(p.mul(.6)))).add(w), u(3.5), X.sil), r
}

function At(e, t, n) {
    let r = new c;
    r.name = `volt-storm`;
    let i = new H(Y.radius, Y.radius, Y.height, 160, 1, !0);
    i.translate(0, Y.height / 2 + Y.y0, 0);
    let a = new R(i, Ot(e));
    a.position.set(Y.cx, 0, Y.cz), a.renderOrder = -2, a.frustumCulled = !1;
    let o = me({
            resolutionScale: n.mirror,
            samples: 0
        }),
        s = new R(new Me(Y.radius + .5, 96), kt(t, o));
    return s.rotation.x = -Math.PI / 2, s.position.set(Y.cx, 0, Y.cz), s.add(o.target), r.add(a, s), {
        group: r,
        rotunda: a,
        floor: s,
        refl: o,
        setMirror(e) {
            o.reflector.resolutionScale = e
        },
        dispose() {
            for (let e of [a, s]) e.geometry.dispose(), e.material.dispose();
            o.dispose ? .()
        }
    }
}
var jt = () => new Promise(e => requestAnimationFrame(() => e())),
    Mt = `#ff2a10`,
    Nt = [{
        type: `strip`,
        position: [-2, 1.75, .15],
        size: [.42, 1.9],
        gradient: .45,
        color: `#fff4ea`,
        k: 26
    }, {
        type: `strip`,
        position: [1.85, .95, .35],
        size: [.28, 1.6],
        gradient: .35,
        color: `#eef2ff`,
        k: 5
    }, {
        type: `rect`,
        position: [0, 2.55, .35],
        size: [1.6, .9],
        softness: .35,
        color: `#ffffff`,
        k: 5
    }, {
        type: `strip`,
        position: [-1.35, 1, -1.45],
        size: [.2, 1.9],
        gradient: .3,
        color: Mt,
        k: 42
    }, {
        type: `strip`,
        position: [1.45, .95, -1.3],
        size: [.2, 1.9],
        gradient: .3,
        color: Mt,
        k: 36
    }, {
        type: `rect`,
        position: [0, .55, -1.9],
        size: [2.6, .7],
        softness: .45,
        color: Mt,
        k: 7
    }, {
        type: `dot`,
        position: [.6, 2.2, 1.35],
        size: [.18, .18],
        color: `#ffffff`,
        k: 9
    }],
    Pt = [{
        type: `rect`,
        position: [0, 9, 6.5],
        size: [16, 1.6],
        softness: .2,
        color: `#ffffff`,
        k: 7
    }, {
        type: `strip`,
        position: [-11, 2, 3],
        size: [1.2, 10],
        gradient: .2,
        color: `#f4f6ff`,
        k: 4.9
    }, {
        type: `strip`,
        position: [11, 1.5, 2],
        size: [1.2, 10],
        gradient: .2,
        color: `#fff4ea`,
        k: 3.85
    }, {
        type: `rect`,
        position: [3, 11, -3],
        size: [6, 6],
        softness: .5,
        color: `#ffffff`,
        k: 2.45
    }, {
        type: `rect`,
        position: [0, 7.5, -9.5],
        size: [20, .7],
        softness: .2,
        color: `#eef3ff`,
        k: 6.3
    }, {
        type: `rect`,
        position: [0, -.6, -11],
        size: [22, .45],
        softness: .3,
        color: `#E6FF00`,
        k: .7
    }];

function Ft(t) {
    let n = new e({
            transparent: !0,
            blending: 2,
            depthWrite: !1,
            side: 2
        }),
        r = s().mul(2).sub(1),
        i;
    if (t.type === `dot`) i = We(L(1).sub(q(0, 1, x(r))), 1.6);
    else {
        let e = t.softness ? ? .25,
            n = L(1).sub(ee(r.x)),
            a = L(1).sub(ee(r.y));
        i = q(0, e, n).mul(q(0, e * (t.type === `strip` ? .35 : 1), a)).mul(L(.82).add(L(.18).mul(L(1).sub(r.x.mul(r.x))))), t.type === `strip` && (i = i.mul(L(1).sub(L(t.gradient ? ? .4).mul(L(1).sub(r.y.add(1).mul(.5))))))
    }
    return n.colorNode = u(P(new _e(t.color).multiplyScalar(t.k))).mul(i), n
}

function Z(t, n, r) {
    let i = new ze,
        a = [],
        o = new R(new Ue(30, 48, 24), new e({
            side: 1,
            depthWrite: !1
        })),
        s = be(W),
        c = Ze(t, re(s)).rgb;
    if (o.material.colorNode = n === `funkun` ? c.mul(.3) : oe(c, u(8)).mul(B(L(.015), L(.22), q(-.12, .25, s.y))), o.rotation.y = n === `funkun` ? 5 : 2.6, o.position.copy(r), o.renderOrder = -1, i.add(o), a.push(o.geometry, o.material), n === `funkun`) {
        let t = new H(3.5, 3.5, 7, 48, 1, !0);
        t.translate(0, 3.45, 0);
        let n = new e({
            side: 1
        });
        n.colorNode = u(.004, .004, .0045);
        let r = new Me(3.6, 48);
        r.rotateX(-Math.PI / 2);
        let o = new e;
        o.colorNode = u(.012, .012, .013), i.add(new R(t, n), new R(r, o)), a.push(t, n, r, o)
    }
    for (let e of n === `funkun` ? Nt : Pt) {
        let t = Ft(e),
            o = new R(new ce(1, 1), t);
        o.position.set(e.position[0] + (n === `logo` ? r.x : 0), e.position[1] + (n === `logo` ? r.y : 0), e.position[2] + (n === `logo` ? r.z : 0)), o.scale.set(e.size[0], e.size[1], 1), o.lookAt(r), o.renderOrder = 10, i.add(o), a.push(o.geometry, t)
    }
    return {
        scene: i,
        center: r,
        dispose() {
            for (let e of a) e.dispose()
        }
    }
}
async function It(e, t, n, r) {
    let i = new Ie(e),
        a = {
            funkun: Z(t, `funkun`, new G(0, .63, 0)),
            logo: Z(t, `logo`, r)
        };
    for (let t of [`funkun`, `logo`]) await je(e, () => i.fromScene(a[t].scene, 0, .05, 60, {
        size: n,
        position: a[t].center
    }).dispose(), {
        pmrem: !0
    }), await jt();
    let o = i.fromScene(a.funkun.scene, 0, .05, 60, {
        size: n,
        position: a.funkun.center
    });
    await jt();
    let s = i.fromScene(a.logo.scene, 0, .05, 60, {
        size: n,
        position: a.logo.center
    });
    Ge(e, o), Ge(e, s), a.funkun.dispose(), a.logo.dispose(), i.dispose();
    let c = await rt(e, o, {
            frame: jt
        }),
        l = await rt(e, s, {
            frame: jt
        });
    return {
        funkun: c.texture,
        logo: l.texture,
        dispose() {
            c.dispose(), l.dispose()
        }
    }
}
var Lt = .0115,
    Rt = [.16, 1, .28],
    zt = [.8, 1, 0],
    Bt = {
        happy: [`....#....`, `...#.#...`, `..#...#..`, `.#.....#.`, `#.......#`],
        open: [`..#####..`, `.#######.`, `#########`, `#########`, `#########`, `.#######.`, `..#####..`],
        blink: [`#########`],
        wide: [`.#######.`, `#########`, `#########`, `#########`, `#########`, `#########`, `.#######.`],
        dizzy: [`#.......#`, `.#.....#.`, `..#...#..`, `...#.#...`, `....#....`, `...#.#...`, `..#...#..`, `.#.....#.`, `#.......#`],
        star: [`....#....`, `....#....`, `..#####..`, `#########`, `..#####..`, `....#....`, `....#....`],
        squint: [`#........`, `.##......`, `...##....`, `.....##..`, `...##....`, `.##......`, `#........`]
    },
    Vt = [`.............####.....`, `............####......`, `...........####.......`, `..........####........`, `.........####.........`, `........############..`, `......############....`, `.....############.....`, `....############......`, `...############.......`, `..........###.........`, `.........###..........`, `.........##...........`, `........##............`, `.......#..............`],
    Ht = [-11, 11];

function Ut() {
    let t = new Uint8Array(4480),
        n = new Ke(t, 40, 28, A);
    n.minFilter = n.magFilter = ne, n.generateMipmaps = !1, n.needsUpdate = !0;
    let r = {
            ledMat: P(new a),
            gain: P(2),
            off: P(.02),
            time: P(0),
            flash: P(0),
            projD: P(.392),
            projC: P(new le)
        },
        o = new Float32Array(3360),
        c = new e;
    c.name = `volt-led`; {
        let e = Ye(r.ledMat.mul(l(Ee, 1)).xyz),
            t = r.projC.add(e.xy.sub(r.projC).mul(r.projD).div(z(r.projD.sub(e.z), .001))),
            a = q(.035, .06, s().x).mul(q(.965, .94, s().x)).mul(q(.56, .59, s().y)),
            o = t.div(Lt).add(I(20, 14)),
            d = ie(o),
            f = p(o).sub(.5),
            m = U(0, d.x).mul(U(0, d.y)).mul(U(d.x, 39)).mul(U(d.y, 27)),
            h = Ze(n, d.add(.5).div(I(40, 28))).rgb.mul(2).mul(m),
            _ = z(C(o.x), C(o.y)),
            v = ee(f).sub(.27),
            y = x(z(v, I(0))).add(oe(z(v.x, v.y), 0)).sub(.12),
            b = q(.3, .7, _),
            S = B(L(1).sub(q(_.mul(-.7), _.mul(.7), y)), L(.62), b),
            w = g(i(f, f).div(-.018)),
            T = q(-.12, 0, y).mul(L(1).sub(b)),
            te = p(qe(i(d, I(12.9898, 78.233))).mul(43758.5453)),
            E = h.mul(L(.9).add(te.mul(.16))).mul(B(L(1), L(.25), U(.985, te))),
            D = z(E.r, z(E.g, E.b)),
            O = B(E, u(D), .35),
            k = E.mul(L(.8).add(T.mul(.25))).add(O.mul(.9).mul(B(w, L(.25), b))).mul(r.gain).mul(S),
            A = u(.01, .012, .011).mul(r.off).mul(50).mul(S).mul(L(1).sub(D));
        c.colorNode = k.add(A).mul(a).add(u(.85, 1, .3).mul(r.flash).mul(a).mul(.5))
    }
    let d = {
        material: c,
        tex: n,
        u: r,
        clear() {
            o.fill(0)
        },
        set(e, t, n, r = 1) {
            let i = Math.round(e + 20),
                a = Math.round(t + 14);
            if (i < 0 || a < 0 || i >= 40 || a >= 28) return;
            let s = (a * 40 + i) * 3;
            o[s] = Math.max(o[s], n[0] * r), o[s + 1] = Math.max(o[s + 1], n[1] * r), o[s + 2] = Math.max(o[s + 2], n[2] * r)
        },
        glyph(e, t, n, r, i = 1, a = [0, 0], o = !1) {
            let s = e.length,
                c = e[0].length;
            for (let l = 0; l < s; l++)
                for (let u = 0; u < c; u++) e[l][o ? c - 1 - u : u] === `#` && d.set(t + u - (c - 1) / 2 + a[0], n + (s - 1) / 2 - l + a[1], r, i)
        },
        eyes(e, t, n = 1, r = [0, 0]) {
            d.glyph(Bt[e], -10, 1, t, n, r), d.glyph(Bt[e], 10, 1, t, n, r, e === `squint`)
        },
        bolt(e = 1) {
            for (let t = 0; t < Vt.length; t++)
                for (let n = 0; n < Vt[0].length; n++) Vt[t][n] === `#` && d.set(n + Ht[0], Ht[1] - t, zt, e)
        },
        upload() {
            for (let e = 0; e < 1120; e++) t[e * 4] = Math.min(255, o[e * 3] * 127.5), t[e * 4 + 1] = Math.min(255, o[e * 3 + 1] * 127.5), t[e * 4 + 2] = Math.min(255, o[e * 3 + 2] * 127.5), t[e * 4 + 3] = 255;
            n.needsUpdate = !0
        },
        dispose() {
            n.dispose(), c.dispose()
        }
    };
    return d
}
var Wt = .633;

function Gt() {
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
var Kt = new G,
    qt = new V,
    Jt = new N,
    Yt = new G,
    Xt = class {
        n;
        rest = new Map;
        constructor(e, t) {
            this.n = e, t.updateMatrixWorld(!0);
            let n = t.matrixWorld.clone().invert(),
                r = new G(0, 1, 0);
            for (let t of Object.values(e)) {
                if (!t || !t.parent) continue;
                let e = t.parent.matrixWorld.clone().premultiply(n),
                    i = new G,
                    a = new V,
                    o = new G;
                e.decompose(i, a, o);
                let s = new V;
                t.matrixWorld.clone().premultiply(n).decompose(new G, s, new G);
                let c = 1,
                    l = -1;
                for (let e = 0; e < 3; e++) {
                    let t = Math.abs(new G(+(e === 0), +(e === 1), +(e === 2)).applyQuaternion(s).dot(r));
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
            Kt.set(t.x || 0, t.y || 0, t.z || 0).applyQuaternion(r.pqi).divide(r.ps), e.position.copy(r.p).add(Kt), qt.setFromEuler(Jt.set(t.pitch || 0, t.yaw || 0, t.roll || 0, `YXZ`)), e.quaternion.copy(r.q).premultiply(r.pqi.clone().multiply(qt).multiply(r.pq));
            let i = 1 - n,
                a = 1 / Math.sqrt(Math.max(.2, i)),
                o = [a, a, a];
            o[r.axis] = i, e.scale.copy(r.s).multiply(Yt.set(o[0], o[1], o[2])).multiplyScalar(t.scale || 1)
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
            let t = Gt();
            return t.upper.y = Math.sin(e * 2.1) * .012, t.upper.squash = Math.sin(e * 2.1) * .015, t.upper.roll = Math.sin(e * .9) * .03, t.antenna = Math.sin(e * 5.3) * .08, t
        }
    },
    Zt = null;

function Qt() {
    let e = e => {
        let t = new Ke(e, 128, 128, A);
        return t.wrapS = t.wrapT = ye, t.generateMipmaps = !0, t.minFilter = y, t.magFilter = d, t.needsUpdate = !0, t
    };
    if (Zt) {
        let t = e(Zt.nd.slice()),
            n = e(Zt.rd.slice());
        return t.repeat.set(6, 6), n.repeat.set(2, 2), {
            normal: t,
            rough: n
        }
    }
    let t = (e, t, n) => {
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
        r = (e, t) => {
            let r = 0,
                i = 1,
                a = 1;
            for (let o = 0; o < 3; o++) r += i * n(e * a / 128 * 16, t * a / 128 * 16, o, 16 * a), i *= .5, a *= 2;
            return r
        },
        i = new Uint8Array(65536),
        a = new Uint8Array(65536);
    for (let e = 0; e < 128; e++)
        for (let t = 0; t < 128; t++) {
            let o = r((t + 1) % 128, e) - r((t - 1 + 128) % 128, e),
                s = r(t, (e + 1) % 128) - r(t, (e - 1 + 128) % 128),
                c = new G(-o * 2.2, -s * 2.2, 1).normalize(),
                l = (e * 128 + t) * 4;
            i[l] = (c.x * .5 + .5) * 255, i[l + 1] = (c.y * .5 + .5) * 255, i[l + 2] = (c.z * .5 + .5) * 255, i[l + 3] = 255;
            let u = 150 + (n(t / 128 * 6, e / 128 * 6, 9, 6) * .7 + n(t / 128 * 23, e / 128 * 23, 4, 23) * .3 - .5) * 120;
            a[l] = a[l + 1] = a[l + 2] = u, a[l + 3] = 255
        }
    Zt = {
        nd: i.slice(),
        rd: a.slice()
    };
    let o = e(i),
        s = e(a);
    return o.repeat.set(6, 6), s.repeat.set(2, 2), {
        normal: o,
        rough: s
    }
}
var $t = e => e.replace(/\.\d+$/, ``);

function en(e, t) {
    let n = e.customProgramCacheKey.bind(e);
    return Object.defineProperty(e, "customProgramCacheKey", {
        value: () => `${n()}|env${t.id}`,
        configurable: !0,
        writable: !0,
        enumerable: !1
    }), e
}

function tn(e, t) {
    return K(() => {
        let n = Ee.toVar(),
            r = ot.toVar(),
            a = at.toVar(),
            o = be(T.sub(n)).toVar(),
            s = u(0).toVar();
        return F(J.any.greaterThan(.5), () => {
            let c = We(L(1).sub(D(i(r, o), 0, 1)), 3).mul(.92).add(.08),
                l = ft(n, r, o, L(t.shine)),
                d = u(J.volt).mul(l).mul(t.glint).mul(c.add(.25));
            s.assign(t.rows > 0 ? d.add(e(n, a).mul(c).mul(t.rows)) : d)
        }), s
    })()
}
async function nn(e, t) {
    let n = (await e.loadGLTF(t.lod === `high` ? `gen/models/funkun_8000.glb` : `gen/models/funkun_3000.glb`)).scene,
        r = new c;
    r.name = `FUNKUN`, n.position.y = Wt, r.add(n);
    let i = e => n.getObjectByName(e),
        a = {
            rotation: i(`FUNCO_ROTATION`),
            upper: i(`FUNCO_UPPER_BODY`),
            body: i(`BODY`),
            helmet: i(`HELMET`),
            visor: i(`VISOR`),
            shoes: i(`SHOES`),
            shoeL: i(`LEFT_SHOE`),
            shoeR: i(`RIGHT_SHOE`),
            spinner: i(`VisorSpinner_Mesh01`),
            antennaL: i(`AntennaLeft_Mesh01`),
            antennaR: i(`AntennaRight_Mesh01`)
        },
        o = t.maps,
        s = tn(t.rows, {
            glint: .9,
            rows: 0,
            shine: 90
        }),
        l = tn(t.rows, {
            glint: 1.6,
            rows: 5,
            shine: 160
        }),
        u = new Map,
        d = [],
        f = (n, r) => {
            if (u.has(n) && n !== `MOUTH_PLASTIC`) return u.get(n);
            let i = (e, r = !0) => {
                    let i = {
                        envMap: t.env,
                        ...e
                    };
                    t.detail || (delete i.clearcoat, delete i.clearcoatRoughness);
                    let a = new he(i);
                    return o && (a.normalMap = o.normal, a.normalScale = new le(.12, .12), t.detail && (a.clearcoatNormalMap = o.normal, a.clearcoatNormalScale = new le(.07, .07)), a.roughnessMap = o.rough, a.roughness = Math.max(a.roughness, .25)), r && (a.emissiveNode = lt.add(s)), a.name = `volt-` + n, d.push(a), en(a, t.env)
                },
                a;
            switch (n) {
                case `DARK_PLASTIC`:
                    a = i({
                        color: 328966,
                        roughness: .3,
                        specularIntensity: .6,
                        clearcoat: 1,
                        clearcoatRoughness: .035
                    });
                    break;
                case `GLOSSY_PLASTIC`:
                    a = i({
                        color: 263173,
                        roughness: .22,
                        specularIntensity: .7,
                        clearcoat: 1,
                        clearcoatRoughness: .03
                    });
                    break;
                case `MOUTH_PLASTIC`:
                    a = i({
                        color: 16777215,
                        map: e.adopt(r.map ? ? null),
                        roughness: .3,
                        clearcoat: 1,
                        clearcoatRoughness: .05
                    }, !1);
                    break;
                case `PLASTIC_GLOSSY`:
                    a = i({
                        color: 16730644,
                        roughness: .24,
                        clearcoat: 1,
                        clearcoatRoughness: .06,
                        emissive: 16722440,
                        emissiveIntensity: .12
                    });
                    break;
                case `GLOSSY_RUBBER`:
                    a = i({
                        color: 789517,
                        roughness: .45
                    }, !1);
                    break;
                case `PLASTIC_NORMAL`:
                    a = i({
                        color: 657931,
                        roughness: .34,
                        specularIntensity: .6,
                        clearcoat: .8,
                        clearcoatRoughness: .06
                    });
                    break;
                case `ROUGH_PLASTIC`:
                    a = i({
                        color: 1052690,
                        roughness: .6,
                        specularIntensity: .5
                    }, !1);
                    break;
                case `METALLIC_PLASTIC`:
                    a = i({
                        color: 1710622,
                        metalness: .6,
                        roughness: .3,
                        clearcoat: .6,
                        clearcoatRoughness: .1
                    });
                    break;
                case `Fiberglass Orange`:
                    a = i({
                        color: 14829082,
                        roughness: .3,
                        clearcoat: .9,
                        clearcoatRoughness: .08
                    });
                    break;
                case `GLASS`:
                case `GLASS_ROUGH`:
                    {
                        let e = new he({
                            envMap: t.env,
                            color: 0,
                            roughness: n === `GLASS` ? .02 : .05,
                            metalness: 0,
                            clearcoat: 1,
                            clearcoatRoughness: .02,
                            transparent: !0,
                            depthWrite: !1,
                            blending: 2,
                            envMapIntensity: 1.4
                        });e.emissiveNode = l,
                        e.name = `volt-glass`,
                        d.push(e),
                        a = en(e, t.env);
                        break
                    }
                case `PLASTIC_EYES`:
                    a = i({
                        color: 131587,
                        roughness: .3
                    }, !1);
                    break;
                case `SCREEN_EYES_V06`:
                    a = t.led.material;
                    break;
                default:
                    a = i({
                        color: 1842204,
                        roughness: .5
                    }, !1)
            }
            return u.set(n, a), a
        },
        p = [],
        m;
    n.traverse(e => {
        let t = e;
        if (!t.isMesh) return;
        p.push(t);
        let n = t.material,
            r = $t(n.name || ``);
        r === `SCREEN_EYES_V06` && (m = t);
        let i = f(r, n);
        t.material = i, t.renderOrder = r === `GLASS` || r === `GLASS_ROUGH` ? 3 : 2, n !== i && n.dispose()
    });
    let h = new Xt(a, r);
    return {
        object: r,
        inner: n,
        nodes: a,
        meshes: p,
        screen: m,
        rig: h,
        dispose() {
            for (let e of d) e.dispose();
            for (let e of p) e.geometry.dispose();
            u.get(`MOUTH_PLASTIC`) ? .map ? .dispose()
        }
    }
}
async function rn(e, t) {
    if (typeof DecompressionStream < `u`) {
        let n = await e.binary(`gen/volt/${t}.pack`),
            r = new Uint8Array(n, 0, 2);
        return r[0] !== 31 || r[1] !== 139 ? n : new Response(new Blob([n]).stream().pipeThrough(new DecompressionStream(`gzip`))).arrayBuffer()
    }
    return e.binary(`gen/volt/${t}.bin`)
}
var an = (e, t, n, r) => {
    let i = e / 32767,
        a = t / 32767,
        o = 1 - Math.abs(i) - Math.abs(a);
    if (o < 0) {
        let e = i;
        i = (1 - Math.abs(a)) * Math.sign(e || 1), a = (1 - Math.abs(e)) * Math.sign(a || 1)
    }
    let s = Math.hypot(i, a, o) || 1;
    n[r] = i / s, n[r + 1] = a / s, n[r + 2] = o / s
};
async function on(e, t) {
    let [n, r, i, a] = await Promise.all([e.json(`gen/volt/letters.json`), rn(e, `letters`), e.json(`gen/volt/decals.json`), rn(e, `decals`)]), o = n.min, l = n.max, d = new he({
        envMap: t.env,
        color: 328966,
        roughness: .16,
        metalness: 0,
        specularIntensity: .55,
        envMapIntensity: 1.5,
        ...t.detail ? {
            clearcoat: 1,
            clearcoatRoughness: .03
        } : {}
    });
    d.name = `volt-logo-vinyl`, en(d, t.env), t.normal && (d.normalMap = t.normal, d.normalScale = new le(.05, .05), t.detail && (d.clearcoatNormalMap = t.normal, d.clearcoatNormalScale = new le(.035, .035))), t.rough && (d.roughnessMap = t.rough), d.emissiveNode = tn(t.rows, {
        glint: 1.4,
        rows: 4,
        shine: 120
    });
    let f = new c;
    f.name = `volt-logo`;
    let p = [];
    for (let e of n.parts) {
        let t = new Int16Array(r, e.pos, e.v * 3),
            n = new Int16Array(r, e.nor, e.v * 2),
            i = new Int16Array(r, e.idx, e.i),
            a = new Float32Array(e.v * 3),
            s = new Float32Array(e.v * 3);
        for (let r = 0; r < e.v; r++) {
            for (let n = 0; n < 3; n++) a[r * 3 + n] = o[n] + (t[r * 3 + n] + 32768) / 65535 * (l[n] - o[n]) - e.center[n];
            let i = n[r * 2] / 32767,
                c = n[r * 2 + 1] / 32767,
                u = 1 - Math.abs(i) - Math.abs(c);
            if (u < 0) {
                let e = i;
                i = (1 - Math.abs(c)) * Math.sign(e || 1), c = (1 - Math.abs(e)) * Math.sign(c || 1)
            }
            let d = Math.hypot(i, c, u) || 1;
            s[r * 3] = i / d, s[r * 3 + 1] = c / d, s[r * 3 + 2] = u / d
        }
        let u = new Uint16Array(e.i),
            m = 0;
        for (let t = 0; t < e.i; t++) {
            let e = i[t],
                n = e & 1 ? -(e + 1 >> 1) : e >> 1;
            m += n, u[t] = m
        }
        let h = new He;
        h.setAttribute(`position`, new we(a, 3)), h.setAttribute(`normal`, new we(s, 3));
        let g = new Float32Array(e.v * 2);
        for (let t = 0; t < e.v; t++) g[t * 2] = (a[t * 3] + e.center[0]) * 3, g[t * 2 + 1] = (a[t * 3 + 1] + a[t * 3 + 2] * .5 + e.center[1]) * 3;
        h.setAttribute(`uv`, new we(g, 2)), h.setIndex(new we(u, 1)), h.computeBoundingSphere(), h.computeBoundingBox();
        let _ = new R(h, d);
        _.renderOrder = 1;
        let v = new c;
        v.position.set(e.center[0], e.center[1], e.center[2]), v.add(_), f.add(v), p.push({
            id: e.id,
            pivot: v,
            mesh: _,
            center: new G(...e.center),
            y: 0,
            vy: 0,
            rz: 0,
            vrz: 0,
            sq: 0,
            vsq: 0,
            kick: 0
        })
    }
    p.sort((e, t) => e.id - t.id);
    let m = new he({
        envMap: t.env,
        roughness: .42,
        metalness: 0,
        specularIntensity: .8,
        envMapIntensity: 1.25,
        ...t.detail ? {
            clearcoat: .85,
            clearcoatRoughness: .1
        } : {},
        transparent: !0,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2
    });
    m.name = `volt-logo-stickers`, en(m, t.env); {
        let e = Ze(t.stickers.art, s()),
            n = s(1),
            r = Ze(t.stickers.cut, n).r.sub(.5).mul(t.stickers.sdfK),
            [i, a] = t.stickers.cutCell,
            o = z(z(C(n.x).div(i), C(n.y).div(a)), 1e-5),
            c = D(r.div(o).add(.5), 0, 1),
            l = oe(e.rgb, u(e.a)),
            d = z(e.a, c);
        m.colorNode = l.add(u(.86, .86, .84).mul(c).mul(L(1).sub(e.a))).div(z(d, .001)), m.opacityNode = d, m.emissiveNode = tn(t.rows, {
            glint: .6,
            rows: 0,
            shine: 60
        })
    }
    let h = [],
        g = i.min,
        _ = i.max;
    for (let e of i.parts) {
        let t = p.find(t => t.id === e.owner);
        if (!t) continue;
        let n = new Int16Array(a, e.pos, e.v * 3),
            r = new Int16Array(a, e.nor, e.v * 2),
            i = new Uint16Array(a, e.uv, e.v * 2),
            o = new Uint16Array(a, e.idx, e.i),
            s = new Uint16Array(a, e.uv1, e.v * 2),
            c = new Float32Array(e.v * 3),
            l = new Float32Array(e.v * 3);
        for (let i = 0; i < e.v; i++) {
            for (let e = 0; e < 3; e++) c[i * 3 + e] = g[e] + (n[i * 3 + e] + 32768) / 65535 * (_[e] - g[e]) - t.center.getComponent(e);
            an(r[i * 2], r[i * 2 + 1], l, i * 3)
        }
        let u = new Uint16Array(e.i),
            d = 0;
        for (let t = 0; t < e.i; t++) {
            let e = o[t];
            d += e & 1 ? -(e + 1 >> 1) : e >> 1, u[t] = d
        }
        let f = new He;
        f.setAttribute(`position`, new we(c, 3)), f.setAttribute(`normal`, new we(l, 3)), f.setAttribute(`uv`, new we(new Uint16Array(i), 2, !0)), f.setAttribute(`uv1`, new we(new Uint16Array(s), 2, !0)), f.setIndex(new we(u, 1)), f.computeBoundingSphere();
        let v = new R(f, m);
        v.renderOrder = 2, t.pivot.add(v), h.push(f)
    }
    let v = new G;
    return {
        root: f,
        letters: p,
        material: d,
        step(e) {
            let t = Math.min(e, 1 / 30);
            for (let e of p) {
                e.vy += (-e.y * 260 - e.vy * 11) * t, e.y += e.vy * t, e.vrz += (-e.rz * 220 - e.vrz * 10) * t, e.rz += e.vrz * t, e.vsq += (-e.sq * 420 - e.vsq * 13) * t, e.sq += e.vsq * t, e.pivot.position.set(e.center.x, e.center.y + e.y, e.center.z), e.pivot.rotation.set(0, 0, e.rz);
                let n = Math.max(-.4, Math.min(.4, e.sq));
                e.pivot.scale.set(1 + n * .5, 1 - n, 1 + n * .5)
            }
        },
        kick(e, t, n = 0, r = 0) {
            let i = p[e];
            i && (i.vy += t, i.vrz += n, i.vsq += r)
        },
        nearest(e) {
            let t = -1,
                n = 1 / 0;
            for (let r of p) {
                r.pivot.getWorldPosition(v);
                let i = v.distanceTo(e);
                i < n && (n = i, t = r.id)
            }
            return {
                index: t,
                dist: n
            }
        },
        dispose() {
            for (let e of p) e.mesh.geometry.dispose();
            for (let e of h) e.dispose();
            d.dispose(), m.dispose()
        }
    }
}
var sn = 24;

function cn(e) {
    let t = new Uint8Array(576);
    for (let n = 0; n < e.length; n++) {
        let r = parseInt(e[n], 16);
        for (let e = 0; e < 4; e++) t[n * 4 + e] = r >> 3 - e & 1
    }
    return t
}

function ln(e, t, n) {
    return t < 0 || n < 0 || t >= 1 || n >= 1 ? 0 : e.mask[Math.floor((1 - n) * sn) * sn + Math.floor(t * sn)]
}

function un(e) {
    let t = e >>> 0;
    return () => {
        t = t + 1831565813 >>> 0;
        let e = t;
        return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296
    }
}

function dn(e, t, n = 7) {
    let r = pn(e, t, n);
    for (;;) {
        let e = r.next();
        if (e.done) return e.value
    }
}
async function fn(e, t, n = 7, r = 5, i = () => !1) {
    let a = pn(e, t, n),
        o = performance.now();
    for (;;) {
        let e = a.next();
        if (e.done) return e.value;
        if (performance.now() - o > r) {
            if (await new Promise(e => requestAnimationFrame(() => e())), i()) return null;
            o = performance.now()
        }
    }
}

function* pn(e, t, n, r = [.015, .335]) {
    let i = un(n),
        a = 1 / 72,
        o = Math.ceil(e / a) + 2,
        s = new Uint8Array(o * 74),
        c = e => (e - .5) * a,
        l = e => (e - .5) * a,
        u = Math.min(1, e),
        d = t.map((e, t) => e.kind === `sfx` ? t : -1).filter(e => e >= 0),
        f = t.map((e, t) => e.kind === `static` ? t : -1).filter(e => e >= 0),
        p = [`baribari`, `dodon`, `zyan`, `gogogo`].map(e => t.findIndex(t => t.key === e)).filter(e => e >= 0),
        m = [],
        h = () => {
            if (!m.length) {
                let e = [...f, ...f.slice(0, 4), ...d.slice(0, 3)];
                for (let t = e.length - 1; t > 0; t--) {
                    let n = Math.floor(i() * (t + 1));
                    [e[t], e[n]] = [e[n], e[t]]
                }
                m.push(...e)
            }
            return m.pop()
        },
        g = new Float32Array(o * 74),
        _ = () => {
            for (let e = 0; e < o * 74; e++) g[e] = s[e] ? 0 : 1e6;
            let e = 1.4142;
            for (let t = 0; t < 74; t++)
                for (let n = 0; n < o; n++) {
                    let r = t * o + n,
                        i = g[r];
                    i && (n > 0 && (i = Math.min(i, g[r - 1] + 1)), t > 0 && (i = Math.min(i, g[r - o] + 1), n > 0 && (i = Math.min(i, g[r - o - 1] + e)), n < o - 1 && (i = Math.min(i, g[r - o + 1] + e))), g[r] = i)
                }
            for (let t = 73; t >= 0; t--)
                for (let n = o - 1; n >= 0; n--) {
                    let r = t * o + n,
                        i = g[r];
                    i && (n < o - 1 && (i = Math.min(i, g[r + 1] + 1)), t < 73 && (i = Math.min(i, g[r + o] + 1), n < o - 1 && (i = Math.min(i, g[r + o + 1] + e)), n > 0 && (i = Math.min(i, g[r + o - 1] + e))), g[r] = i)
                }
            let t = -1,
                n = 0;
            for (let e = 0; e < o * 74; e++) {
                let r = g[e] + i() * .8;
                !s[e] && r > n && (n = r, t = e)
            }
            return {
                best: t,
                radius: n
            }
        },
        v = e => {
            let n = t[e.cell],
                r = e.size * .72,
                i = Math.max(0, Math.floor((e.x - r) / a)),
                u = Math.min(o - 1, Math.ceil((e.x + r) / a) + 1),
                d = Math.max(0, Math.floor((e.y - r) / a)),
                f = Math.min(73, Math.ceil((e.y + r) / a) + 1),
                p = Math.cos(-e.rot),
                m = Math.sin(-e.rot),
                h = 0;
            for (let t = d; t <= f; t++)
                for (let r = i; r <= u; r++) {
                    let i = t * o + r;
                    if (s[i]) continue;
                    let a = c(r) - e.x,
                        u = l(t) - e.y;
                    ln(n, (a * p - u * m) / e.size + .5, (a * m + u * p) / e.size + .5) && (s[i] = 1, h++)
                }
            return h
        },
        y = [],
        b = [
            [.24, .7],
            [.74, .3],
            [.78, .76],
            [.22, .26]
        ];
    for (let n = 0; n < 320; n++) {
        let r;
        if (n < p.length) {
            let [t, a] = b[n];
            r = {
                cell: p[n],
                x: t * e,
                y: a,
                size: .5 * u,
                rot: (i() - .5) * .5,
                at: 0
            }
        } else {
            let {
                best: e,
                radius: n
            } = _();
            if (e < 0) break;
            let s = h(),
                d = t[s],
                f = O(n * a * 3, .15 * u, .42 * u) * (.92 + i() * .16),
                p = (i() - .5) * 1.1,
                m = (d.anchor[0] - .5) * f,
                g = (d.anchor[1] - .5) * f,
                v = Math.cos(p),
                y = Math.sin(p),
                b = c(e % o),
                x = l(Math.floor(e / o));
            r = {
                cell: s,
                x: b - (m * v - g * y),
                y: x - (m * y + g * v),
                size: f,
                rot: p,
                at: 0
            }
        }(v(r) > 0 || n < p.length) && y.push(r), yield
    }
    let x = y.length;
    return y.forEach((e, t) => {
        e.at = r[0] + (r[1] - r[0]) * (t / Math.max(1, x - 1)) ** .8
    }), y
}
var mn = .6,
    hn = .06,
    gn = 420;

function _n(e, t) {
    let n = Math.abs(e) + Math.abs(t);
    return {
        L: n,
        xmin: -n / 2
    }
}
async function vn(e, t, n, r = !1) {
    return {
        t: await e.texture(t, {
            srgb: n,
            anisotropy: 4,
            channels: r ? 1 : void 0
        }),
        close: () => {}
    }
}
async function yn(e, t) {
    let n = await e.json(`gen/volt/stickers.json`),
        r = t.half ? n.pages.find(e => e.still && e.stillSize) : void 0,
        i = r ? { ...n,
            pages: n.pages.map(e => e === r ? { ...e,
                file: e.still,
                size: e.stillSize
            } : e),
            cells: n.cells.map(e => n.pages[e.page] === r ? { ...e,
                frames: e.frames.slice(0, 1),
                ms: 0
            } : e)
        } : n,
        [a, o, s] = await Promise.all([...i.pages.map((i, a) => vn(e, `gen/volt/` + (t.half && n.pages[a] !== r ? i.half : i.file), !0)), vn(e, `gen/volt/` + i.cut.file, !1, !0)]),
        c = [a.t, o.t],
        l = s.t;
    return bn(c, l, i.cells.map(e => {
        let t = cn(e.mask),
            n = [.5, .5],
            r = 1 / 0;
        for (let e = 0; e < sn; e++)
            for (let i = 0; i < sn; i++)
                if (t[e * sn + i]) {
                    let t = (i + .5) / sn,
                        a = 1 - (e + .5) / sn,
                        o = (t - .5) ** 2 + (a - .5) ** 2;
                    o < r && (r = o, n = [t, a])
                }
        return {
            key: e.key,
            kind: e.kind,
            page: e.page,
            frames: e.frames,
            ms: e.ms,
            cut: e.cut,
            mask: t,
            anchor: n
        }
    }), i, () => {
        a.close(), o.close(), s.close()
    })
}

function bn(t, r, a, o, s) {
    let c = o.artf,
        f = 2 * o.sdf,
        p = o.pages.map(e => [e.art / e.size[0], e.art / e.size[1]]),
        [h, _] = o.cut.size,
        y = o.cut.cell,
        b = [y / h, y / _],
        S = new Se;
    S.setAttribute(`position`, new Je([-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0], 3)), S.setIndex([0, 1, 2, 0, 2, 3]);
    let C = () => {
            let e = new n(new Float32Array(gn * 4), 4);
            return e.setUsage(Xe), e
        },
        w = C(),
        T = C(),
        E = C(),
        O = C(),
        k = C();
    S.setAttribute(`iA`, w), S.setAttribute(`iB`, T), S.setAttribute(`iC`, E), S.setAttribute(`iD`, O), S.setAttribute(`iE`, k), S.instanceCount = 0, S.boundingSphere = new Te(new G(1, .5, 0), 10);
    let A = P(0),
        M = new e({
            transparent: !0,
            depthTest: !1,
            depthWrite: !1,
            side: 2
        });
    M.name = `volt-stickers`, M.blending = 5, M.blendSrc = 201, M.blendDst = 205, M.blendSrcAlpha = 201, M.blendDstAlpha = 205, M.premultipliedAlpha = !1, M.forceSinglePass = !0; {
        let e = xe(`iA`, `vec4`),
            n = xe(`iB`, `vec4`),
            a = xe(`iC`, `vec4`),
            o = xe(`iD`, `vec4`),
            s = xe(`iE`, `vec4`),
            d = L(1.16).add(U(5e-4, n.z).mul(.36)),
            m = Ae.xy.mul(d),
            h = a.w,
            _ = m.mul(I(L(1).add(h), L(1).sub(h))).mul(e.z),
            y = v(e.w),
            S = qe(e.w);
        M.positionNode = u(_.x.mul(y).sub(_.y.mul(S)).add(e.x), _.x.mul(S).add(_.y.mul(y)).add(e.y), 0);
        let C = Ye(m);
        M.fragmentNode = K(() => {
            let d = C,
                m = j(d).toVar(),
                h = Qe(d).toVar(),
                _ = z(z(x(m), x(h)), 1e-5).toVar(),
                y = s.x.toVar(),
                S = I(n.x, n.y).toVar(),
                w = I(s.z, s.w).toVar(),
                T = B(I(p[0][0], p[0][1]), I(p[1][0], p[1][1]), y).toVar(),
                te = I(b[0], b[1]),
                E = e => S.add(e.div(c).add(.5).mul(T)),
                O = e => w.add(e.add(.5).mul(te)),
                k = m.div(c).mul(T).toVar(),
                M = h.div(c).mul(T).toVar(),
                N = m.mul(te).toVar(),
                P = h.mul(te).toVar(),
                ne = e => U(-.5, e.x).mul(U(e.x, .5)).mul(U(-.5, e.y)).mul(U(e.y, .5)),
                re = u(o.x, o.y, o.z),
                R = e => {
                    let t = Ze(r, O(e)).grad(N, P).r.sub(.5).mul(f);
                    return D(t.div(_).add(.5), 0, 1).mul(ne(e))
                },
                ie = e => {
                    let n = E(e),
                        r = ue(y.lessThan(.5), Ze(t[0], n).grad(k, M), Ze(t[1], n).grad(k, M));
                    return l(oe(r.rgb, u(r.a)), r.a).mul(ne(e.div(c)))
                },
                ae = (e, t) => {
                    let n = ie(e),
                        r = R(e),
                        a = g(i(e, I(.62, .78)).sub(o.w.sub(.5).mul(.7)).div(.07).pow(2).negate()).mul(.07),
                        s = n.rgb.add(re.mul(r).mul(L(1).sub(n.a))).mul(t).add(u(a).mul(r));
                    return l(s, z(n.a, r))
                },
                se = (e, t) => {
                    let n = R(e);
                    return l(u(.82, .81, .78).mul(t).mul(n), n)
                },
                ce = (e, t) => e.add(t.mul(L(1).sub(e.a))),
                V = l(0).toVar(),
                H = n.z,
                le = n.w,
                de = I(v(le), qe(le)),
                fe = ee(de.x).add(ee(de.y)),
                pe = i(d, de).add(fe.mul(.5)),
                me = H.mul(fe.add(Math.PI * hn));
            F(H.lessThan(5e-4), () => {
                V.assign(ae(d, L(1)))
            }).Else(() => {
                F(pe.greaterThanEqual(me), () => {
                    let e = me.mul(2).sub(pe).sub(Math.PI * hn),
                        t = se(d.add(de.mul(e.sub(pe))), L(.68).add(q(0, .4, pe.sub(me)).mul(.26))).mul(U(0, e)),
                        n = L(1).sub(g(pe.sub(me).div(-.054)).mul(.35));
                    V.assign(ce(t, ae(d, n)))
                }).ElseIf(pe.greaterThan(me.sub(hn)), () => {
                    let e = st(D(me.sub(pe).div(hn), 0, 1)),
                        t = L(Math.PI).sub(e),
                        n = me.sub(t.mul(hn)),
                        r = me.sub(e.mul(hn)),
                        i = L(.62).add(v(t).negate().mul(.38)).add(g(t.sub(2.35).div(.3).pow(2).negate()).mul(.4)),
                        a = se(d.add(de.mul(n.sub(pe))), i).mul(U(0, n)),
                        o = ae(d.add(de.mul(r.sub(pe))), L(.55).add(v(e).mul(.45))).mul(U(0, r));
                    V.assign(ce(a, o))
                })
            });
            let he = a.y,
                ge = I(.012, -.018).mul(L(1).add(he.mul(3))),
                _e = v(e.w),
                ve = qe(e.w),
                ye = I(ge.x.mul(_e).add(ge.y.mul(ve)), ge.y.mul(_e).sub(ge.x.mul(ve))).div(e.z),
                be = d.sub(ye),
                xe = L(.035).add(he.mul(.06)),
                Se = Ze(r, O(be)).grad(N, P).r.sub(.5).mul(f),
                Ce = i(be, de).add(fe.mul(.5)),
                we = q(xe.negate(), xe, Se.add(.01)).mul(ne(be.mul(.97))).mul(ue(H.lessThan(5e-4), L(1), U(me.sub(hn), Ce))),
                Te = me.mul(2).sub(Ce).sub(Math.PI * hn),
                Ee = be.sub(ye).add(de.mul(Te.sub(Ce))),
                De = Ze(r, O(Ee)).grad(N, P).r.sub(.5).mul(f),
                Oe = q(-.06, .06, De).mul(ne(Ee.mul(.97))).mul(U(0, Te)).mul(U(me, Ce)).mul(U(5e-4, H)).mul(.8),
                ke = z(we, Oe).mul(L(.42).add(he.mul(.1))),
                Ae = a.z.add(A);
            return ce(l(V.rgb.mul(L(1).add(Ae.mul(.9))).add(u(.85, 1, .35).mul(A).mul(V.a).mul(.12)), V.a), l(0, 0, 0, ke)).mul(a.x)
        })()
    }
    let N = new R(S, M);
    N.frustumCulled = !1;
    let ne = new ze;
    ne.add(N);
    let re = new m(0, 16 / 9, 1, 0, -1, 1),
        ie = new Le(1, 1, {
            type: te,
            depthBuffer: !1,
            generateMipmaps: !1,
            minFilter: d,
            magFilter: d
        });
    ie.texture.name = `volt-sticker-layer`, ie.texture.userData.sleeps = !0;
    let ae = (e, t) => {
            let n = a[e],
                r = o.pages[n.page],
                i = n.frames[t % n.frames.length];
            return [i[0] / r.size[0], 1 - (i[1] + r.art) / r.size[1]]
        },
        se = e => {
            let t = a[e];
            return [t.cut[0] / h, 1 - (t.cut[1] + y) / _]
        },
        ce = {
            static: [.86, .86, .84],
            sfx: [.66, .84, 0]
        },
        V = 0,
        H = w.array,
        le = T.array,
        de = E.array,
        fe = O.array,
        pe = k.array;

    function me(e, t, n, r, i, o, s, c, l, u, d, f, p) {
        if (V >= gn || l <= .002) return;
        let [m, h] = ae(e, t), [g, _] = se(e), v = V * 4;
        H[v] = n, H[v + 1] = r, H[v + 2] = i, H[v + 3] = o, le[v] = m, le[v + 1] = h, le[v + 2] = Math.min(mn, Math.max(0, s)), le[v + 3] = c, de[v] = Math.min(1, l), de[v + 1] = u, de[v + 2] = d, de[v + 3] = f;
        let y = a[e].kind === `sfx` ? ce.sfx : ce.static;
        fe[v] = y[0], fe[v + 1] = y[1], fe[v + 2] = y[2], fe[v + 3] = p, pe[v] = a[e].page, pe[v + 1] = 0, pe[v + 2] = g, pe[v + 3] = _, V++
    }
    let he = -1,
        ge = new _e;
    return {
        cells: a,
        rt: ie,
        flash: A,
        material: M,
        pages: t,
        art: t[0],
        cut: r,
        cutCell: b,
        sdfK: f,
        get count() {
            return V
        },
        begin(e) {
            V = 0, re.right = e, re.updateProjectionMatrix()
        },
        push: me,
        frameOf(e, t, n = !1) {
            let r = a[e];
            if (r.kind !== `sfx` || r.ms <= 0) return 0;
            let i = Math.floor(t * 1e3 / r.ms),
                o = r.frames.length;
            return n ? (-i % o + o) % o : i % o
        },
        render(e, t, n) {
            if ((ie.width !== t || ie.height !== n) && (ie.setSize(t, n), he = -1), V === 0 && he === 0) return;
            for (let e of [w, T, E, O, k]) e.needsUpdate = !0;
            S.instanceCount = V, N.visible = V > 0;
            let r = e.getRenderTarget(),
                i = e.getClearColor(ge),
                a = e.getClearAlpha();
            e.setRenderTarget(ie), e.setClearColor(0, 0), V > 0 ? e.render(ne, re) : e.clear(), e.setClearColor(i, a), e.setRenderTarget(r), he = V
        },
        dispose() {
            S.dispose(), M.dispose();
            for (let e of t) e.dispose();
            r.dispose(), ie.dispose(), s()
        }
    }
}

function xn(e, t, n, r) {
    let i = n - t.x,
        a = r - t.y,
        o = Math.cos(-t.rot),
        s = Math.sin(-t.rot),
        c = (i * o - a * s) / t.size + .5,
        l = (i * s + a * o) / t.size + .5;
    if (c < -.05 || l < -.05 || c > 1.05 || l > 1.05) return !1;
    let u = e[t.cell],
        d = 1 / sn;
    return !!(ln(u, c, l) || ln(u, c + d, l) || ln(u, c - d, l) || ln(u, c, l + d) || ln(u, c, l - d))
}

function Sn(e, t, n, r) {
    let i = n - e.x,
        a = r - e.y,
        o = Math.cos(-e.rot),
        s = Math.sin(-e.rot),
        c = (i * o - a * s) / e.size,
        l = (i * s + a * o) / e.size,
        u = t - e.rot,
        d = Math.cos(u),
        f = Math.sin(u),
        {
            xmin: p
        } = _n(d, f);
    return c * d + l * f - p
}

function Cn(e, t, n) {
    let r = t - n,
        {
            L: i
        } = _n(Math.cos(r), Math.sin(r));
    return e / (i + Math.PI * hn)
}

function wn(e, t, n) {
    let r = e - t;
    if (r < -.1) return [1, 0, 0, 0];
    if (r < 0) {
        let e = (r + .1) / .1;
        return [1 + .45 * (1 - e) * (1 - e), ae(0, .6, e), 0, 0]
    }
    return [1, 1, n ? 0 : _(e, t, .13, 8, 6.5), Math.exp(-r / .09)]
}

function Tn(e, t, n, r, a) {
    let o = new ke,
        c = {
            ca: P(.0018),
            halation: P(.16),
            halTint: P(new _e(1, .26, .1)),
            stickers: P(1)
        },
        d = fe(t, n, {
            samples: a.samples,
            glSamples: 4
        }),
        f = ve(d.getTextureNode(), s(), c.ca),
        p = Re(f, .5, .36, .85);
    p.setResolutionScale(a.bloomScale);
    let m = u(c.halTint).mul(i(p.rgb, u(.3, .5, .2))).mul(c.halation),
        h = de(u(f).add(p.rgb).add(m), o, s()),
        g = Ze(r, s()),
        _ = l(h.rgb.mul(L(1).sub(g.a.mul(c.stickers))).add(g.rgb.mul(c.stickers)), 1),
        v = new Fe(e, _);
    return o.grade({
        contrast: 1.12,
        saturation: 1.06,
        shadowTint: [0, .002, .008],
        highTint: [.01, .004, 0],
        vignette: .52,
        grain: .045
    }), {
        look: o,
        U: c,
        glow: p,
        scenePass: d,
        pipe: v,
        setBloomScale(e) {
            p.setResolutionScale(e)
        },
        render(e) {
            v.renderTo(e)
        },
        dispose() {
            v.dispose(), p.dispose(), d.dispose()
        }
    }
}
var En = class {
        root;
        on = !0;
        onStrike = () => {};
        onSticker = () => {};
        constructor(e) {
            this.root = b(`div`, `va is-on`), this.root.setAttribute(`role`, `group`), this.root.setAttribute(`aria-label`, `VOLT の操作`), this.root.dataset.enAria = `VOLT controls`, this.root.innerHTML = `
      <button type="button" class="va__btn" data-ui data-act="strike" aria-label="落雷（Enter）" data-en-aria="Lightning (Enter)"><span data-en="Lightning">落雷</span><kbd aria-hidden="true">Enter</kbd></button>
      <button type="button" class="va__btn" data-ui data-act="sticker" aria-label="ステッカーを貼る（S）" data-en-aria="Slap on a sticker (S)"><span data-en="Slap on a sticker">ステッカーを貼る</span><kbd aria-hidden="true">S</kbd></button>`, tt(this.root);
            for (let e of this.root.querySelectorAll(`.va__btn`)) e.addEventListener(`click`, () => {
                e.dataset.act === `strike` ? this.onStrike() : this.onSticker()
            });
            e.appendChild(this.root)
        }
        show(e) {
            e !== this.on && (this.on = e, this.root.classList.toggle(`is-on`, e))
        }
        dispose() {
            this.root.remove()
        }
    },
    Dn = new Ke(new Uint8Array(4), 1, 1, A);
Dn.needsUpdate = !0;
var On = Ze(Dn),
    kn = {
        valid: P(0),
        calm: P(0)
    };

function An(e, t = !1) {
    On.value = e ? ? Dn, kn.valid.value = +!!e, kn.calm.value = +!!t
}
var jn = Vt[0].length,
    Mn = Vt.length,
    Nn = 7,
    Pn = (() => {
        let e = new Uint8Array(jn * Mn * 4);
        for (let t = 0; t < Mn; t++)
            for (let n = 0; n < jn; n++) {
                let r = ((Mn - 1 - t) * jn + n) * 4;
                e[r] = Vt[t][n] === `#` ? 255 : 0, e[r + 1] = Math.min(255, Math.abs(t - Nn) * 20), e[r + 2] = Math.floor((Math.sin(n * 12.9898 + t * 78.233) * 43758.5453 % 1 + 1) % 1 * 255), e[r + 3] = 255
            }
        let t = new Ke(e, jn, Mn, A);
        return t.minFilter = t.magFilter = ne, t.generateMipmaps = !1, t.needsUpdate = !0, t
    })(),
    Fn = u(.8, 1, 0),
    In = u(1, .165, .063),
    Ln = 60 / 174 / 4;

function Rn(e, t) {
    let n = ee(e).sub(.27),
        r = x(z(n, I(0))).add(oe(z(n.x, n.y), 0)).sub(.12);
    return {
        cov: L(1).sub(q(t.negate(), t, r)),
        die: g(i(e, e).div(-.018))
    }
}
var zn = [{
        name: `led`,
        duration: 1.25,
        build: ({
            a: e,
            b: t,
            uv: n,
            p: r,
            res: a,
            time: o
        }) => K(() => {
            let s = kn.calm,
                c = q(0, .34, r),
                l = oe(a.y.div(16), a.x.div(23)),
                d = q(.5, .62, r).mul(L(1).sub(s.mul(.7))),
                f = B(L(2), l, c.mul(c)).mul(L(1).add(d.mul(.1))),
                m = n.mul(a).sub(a.mul(.5)),
                h = m.div(f),
                _ = ie(h.add(I(0, .5))),
                v = h.add(I(0, .5)).sub(_).sub(.5),
                {
                    cov: y,
                    die: b
                } = Rn(v, L(1.2).div(f)),
                S = _.sub(I(0, .5)).add(.5).mul(f).add(a.mul(.5)).div(a),
                C = e(D(S, 5e-4, .9995)).rgb,
                w = i(C, u(.2126, .7152, .0722)),
                T = B(C, Fn.mul(w.mul(1.6).add(.02)), q(.18, .34, r).mul(.55)).mul(y).mul(L(.85).add(b.mul(.35))),
                ee = e(n).rgb,
                te = B(ee, T, q(.02, .16, c)),
                E = _.x.add(11),
                O = _.y.add(7),
                k = U(0, E).mul(U(E, jn - 1)).mul(U(0, O)).mul(U(O, Mn - 1)),
                A = Ze(Pn, I(E.add(.5).div(jn), O.add(.5).div(Mn))),
                j = q(.34, .46, r).mul(12),
                M = A.r.mul(k).mul(q(0, .8, j.sub(A.g.mul(255 / 20)))),
                N = g(p(o.div(Ln)).mul(-3.5)).mul(.35),
                P = L(.78).add(N.mul(.4)).add(d.mul(1.6)),
                F = L(.88).add(A.b.mul(.2)),
                ne = Fn.mul(M).mul(F).mul(L(.72).add(b.mul(.6))).mul(P).mul(y).add(u(1, 1, .85).mul(M).mul(b).mul(d).mul(.9).mul(y)),
                re = u(.01, .012, .011).mul(L(1).sub(M)).mul(y),
                R = Fn.mul(M).mul(g(i(v, v).mul(-3.2))).mul(.18).mul(L(1).add(d.mul(2))),
                ae = m.div(a.mul(I(.5, .5))),
                se = x(ae.mul(I(.93, 1.02))),
                z = In.mul(g(We(se.sub(1.02).div(.07), 2).negate()).mul(.32).add(q(.7, 1.2, se).mul(.05))),
                ce = ne.add(re).add(R).add(z),
                V = q(.28, .42, r),
                H = We(q(.54, .62, r), L(2)).mul(L(1).sub(s.mul(.8))),
                le = B(te, ce, V),
                de = B(le, u(1, 1, .92), H.mul(.85)),
                fe = g(r.sub(.62).mul(-30)).mul(.6).mul(s),
                pe = t(n).rgb.add(u(1, 1, .9).mul(fe));
            return D(ue(r.lessThan(.62), de, pe), 0, 1)
        })()
    }, {
        name: `peel`,
        duration: 1.7,
        build: ({
            a: e,
            b: t,
            uv: n,
            p: r
        }) => K(() => {
            let i = On.sample(n),
                a = t(n).rgb,
                o = a.mul(L(1).sub(i.a)).add(i.rgb),
                s = $e(B(et(e(n).rgb), et(a), q(.2, .8, r))),
                c = ue(r.lessThan(.4), e(n).rgb, o);
            return D(ue(kn.valid.greaterThan(.5), c, s), 0, 1)
        })()
    }],
    Bn = {
        fillEnd: .34,
        scratch0: .4,
        scratch1: .5,
        rip0: .5,
        rip1: .92
    },
    Vn = 4.4,
    Hn = new G(.45, 1.9756000000000002, -2.5),
    Un = new N(.04, -.06, -.05),
    Wn = {
        zap: [`zap_small`],
        big: [`strike_big`],
        slap: e => [`sticker_slap_${1+e%4}`],
        peel: [`sticker_peel`],
        scratch: [`peel_scratch`]
    },
    Gn = 8,
    Kn = 4,
    qn = [
        [.688, .454],
        [.406, .222],
        [.88, .222],
        [.552, .713],
        [.25, .222],
        [.8125, .861],
        [.5625, .222],
        [.854, .454]
    ],
    Jn = [
        [.372, .278],
        [.872, .178],
        [.128, .278],
        [.628, .178],
        [.128, .178],
        [.872, .278],
        [.372, .178],
        [.628, .278]
    ],
    Yn = {
        l: [-1.32, -.96, .94, .94],
        p: [-1.1, -.9, 1.12, 1.2]
    },
    Xn = {
        dx: 132,
        dy: 56,
        flip: !0
    },
    Zn = {
        dx: 0,
        dy: -64,
        attach: `edge`
    },
    Qn = nt(`ステッカーを貼る`, `Slap on stickers`),
    $n = nt(`タップでステッカーを貼る`, `Tap to slap on stickers`),
    er = (e, t = []) => ({
        kind: `count`,
        text: Qn,
        touchText: $n,
        count: [e, Gn],
        unit: `枚`,
        progress: e / Gn,
        stickers: t,
        lead: Xn,
        leadP: Zn,
        move: `glide`
    }),
    Q = (e, t, n) => new G(e, t, n),
    tr = (e, t, n, r = 0) => ({
        pos: e,
        target: t,
        fov: n,
        roll: r
    }),
    nr = tr(Q(.92, .46, 1.58), Q(.46, 1.02, -1.5), 46, -.02),
    rr = tr(Q(.5, .62, 1.22), Q(.16, .86, -.9), 40, .01),
    ir = tr(Q(.62, .34, 1.14), Q(.4, 1.08, -1.5), 52, .09),
    ar = tr(Q(.15, .55, 2.4), Q(.08, 1.03, -1), 66, 0),
    or = tr(Q(.1, .62, 1.8), Q(.05, .95, -1), 62, 0),
    sr = tr(Q(.3, .4, 1.5), Q(.2, 1.1, -1.5), 70, .06),
    cr = [tr(Q(.36, .05, 1.05), Q(0, 1.1, -.9), 52, -.16), tr(Q(.14, 2.2, .85), Q(0, .32, -.32), 46, .4), tr(Q(1.55, .5, .2), Q(0, .66, .28), 38, 0), tr(Q(.12, .66, .9), Q(0, .64, .12), 24, .06)],
    $ = new G,
    lr = new G,
    ur = new G,
    dr = new a,
    fr = new V,
    pr = new le,
    mr = new Ve,
    hr = new Map,
    gr = new le,
    _r = () => new Promise(e => requestAnimationFrame(() => e()));

function vr(e) {
    let t, n, i, s = null,
        c = null,
        l = null,
        u = null,
        d = null,
        p = null,
        m = null,
        g = null,
        v = null,
        y = null,
        b = null,
        x = null,
        C = null,
        T = null,
        ee = null,
        te = !1,
        E = !1,
        D = [],
        k, A = !1,
        j = 0,
        N = 0,
        P = .016,
        F = 1,
        I = 0,
        L = 1,
        ne = 0,
        re = !1,
        R = 0,
        ie = 0,
        oe = -10,
        z = !1,
        ce = -10,
        B = [],
        V = ``,
        H = 0,
        le = -10,
        ue = 0,
        de = -1,
        fe = -10,
        U = 0,
        pe = -10,
        me = -10,
        he = -10,
        ge = -10,
        ve = -10,
        ye = 2.4,
        be = -10,
        xe = 0,
        Se = 0,
        we = 0,
        Te = 0,
        Ee = -10,
        Oe = [0, 0],
        ke = [0, 0],
        Ae = [0, 0],
        Me = 0,
        Fe = 0,
        Ie = !0,
        Re = [],
        W = [],
        Ve = 0,
        He = 0,
        Ue = 0,
        We = [],
        Ge = 0,
        Ke = .35,
        qe = 0,
        K = null,
        Je = {
            cx: 0,
            cy: 0
        },
        Ye = !1,
        Xe = null,
        Ze = {
            idx: -1,
            at: -1
        },
        q = !1,
        Qe = !1,
        $e = [],
        et = () => k ? .aspect ? ? 16 / 9,
        tt = () => Math.min(1, et()),
        nt = (e, t) => Re.push({
            at: j + e,
            fn: t
        });
    async function rt() {
        let e = t.perf.settings,
            o = T = t.assets.lease(),
            f = () => t.perf.restart(2),
            h = performance.now(),
            g = e => {
                try {
                    performance.measure(`volt · ${e}`, {
                        start: h,
                        end: performance.now()
                    })
                } catch {}
                h = performance.now()
            },
            _ = (...e) => {
                if (E)
                    for (let t of e) t ? .dispose();
                return E
            };
        f();
        let S = t.assets.halfArt,
            [w, D, O] = await Promise.all([t.assets.image(`gen/brand/funtech_pop.svg`), t.assets.loadHDR(`gen/env/studio_256.hdr`), yn(t.assets, {
                half: S
            })]);
        if (_(O, D)) return;
        p = O, x = D, g(`assets`);
        for (let e of [...p.pages, p.cut, x]) {
            if (await _r(), E) return;
            t.renderer.initTexture(e)
        }
        if (g(`textures`), await _r(), E || (y = xt(w, 1024), b = St(128), s = At(y, b, {
                mirror: e.mirror
            }), n.add(s.group), g(`rows + floor`), await _r(), E)) return;
        t.renderer.initTexture(y), t.renderer.initTexture(b), f();
        let k = await It(t.renderer, x, e.env, Hn);
        if (_(k) || (v = k, g(`environments`), f(), await _r(), E)) return;
        let M = Dt(y);
        C = e.detail ? Qt() : null, C && (t.renderer.initTexture(C.normal), t.renderer.initTexture(C.rough)), u = Ut();
        let [N, P] = await Promise.all([nn(o, {
            lod: e.lod,
            detail: e.detail,
            maps: C,
            led: u,
            env: v.funkun,
            rows: M
        }), on(t.assets, {
            env: v.logo,
            detail: e.detail,
            rows: M,
            normal: C ? .normal ? ? null,
            rough: C ? .rough ? ? null,
            stickers: {
                art: p.art,
                cut: p.cut,
                cutCell: p.cutCell,
                sdfK: p.sdfK
            }
        })]);
        if (_(N, P)) return;
        if (c = N, l = P, g(`funkun + letters`), n.add(c.object), l.root.scale.setScalar(Vn), l.root.position.copy(Hn), l.root.rotation.copy(Un), n.add(l.root), c.object.updateMatrixWorld(!0), c.screen) {
            let e = new G(0, Math.sin(12 * r), Math.cos(12 * r)),
                t = new G(0, .628, .226),
                n = new G(1, 0, 0),
                i = new G().crossVectors(e, n).normalize();
            ee = {
                LrestInv: new a().makeBasis(n, i, e).setPosition(t).clone().invert(),
                Mrest: c.screen.matrixWorld.clone()
            }
        }
        if (d = vt({
                capacity: 10
            }), n.add(d.mesh), m = Tn(t.renderer, n, i, p.rt.texture, {
                samples: e.msaa,
                bloomScale: e.bloom
            }), An(p.rt.texture, A), f(), await _r(), E) return;
        Lt(); {
            let e = et().toFixed(2);
            if (!hr.has(e)) {
                let t = await fn(et(), p.cells, 11, 5, () => E);
                if (!t || E) return;
                hr.set(e, t)
            }
        }
        it(!0), g(`storm plan`);
        let F = new Le(64, 64, { ...Be,
            depthBuffer: !1
        });
        try {
            d.add({
                t0: j,
                life: 1,
                A: Q(.5, 8, -2),
                B: Q(.5, 0, -1),
                width: 4,
                branches: 2,
                amp: .1,
                gain: 1,
                light: 1,
                seed: 1,
                ground: !0,
                big: !1
            }), d.update(j + .01, i, 1080, !1), J.any.value = 1;
            let e = () => m.render(F);
            if (await De(t.renderer, () => t.own ? t.own(e) : e(), {
                    cancelled: () => E
                }), E) return;
            g(`warm-up scene`), W.push(pt(.5, .5, j - 1)), W[0].peel = .3, t.renderer.getDrawingBufferSize(pr);
            let n = Math.max(1, pr.x),
                r = Math.max(1, pr.y);
            if (await je(t.renderer, () => {
                    jt(), p.render(t.renderer, n, r)
                }), E || (await _r(), E)) return;
            jt(), p.render(t.renderer, n, r), g(`warm-up stickers`), await _r()
        } finally {
            F.dispose()
        }
        E || (d.clear(), W = [], J.any.value = 0, te = !0, f())
    }

    function it(e = !1) {
        if (!p) return;
        let t = et();
        if (!e && Math.abs(t - Ge) < .01) return;
        Ge = t;
        let n = t.toFixed(2);
        We = hr.get(n) ? ? dn(t, p.cells, 11), hr.set(n, We), $e = p.cells.map((e, t) => t).sort((e, t) => M(e * 3.7 + 1) - M(t * 3.7 + 1))
    }

    function at() {
        return i ? ($.set(0, .6, 0).project(i), [$.x * .5 + .5, $.y * .5 + .5]) : [.35, .3]
    }

    function ot(e, n, r = {}) {
        if (!d) return;
        let i = !!r.big,
            a = t.audio.play(i ? Wn.big : Wn.zap, {
                quantize: r.drop ? `none` : i ? `beat` : `16th`,
                gain: r.auto ? .45 : 1,
                minGap: .03
            }),
            o = a > 0 ? O(a - N, 0, .4) : 0,
            s = j + o,
            c = (H * 97 + 13) % 9973,
            l = e => M(c * 1.37 + e * 7.1),
            u = n === `funkun` ? Q(e.x + (l(1) - .5) * .6, e.y + 8.5, e.z + .2 + l(2) * .4) : Q(e.x + (l(1) - .5) * 3.2, Math.max(e.y + 6.5, 8.5 + l(2) * 2), e.z + (n === `wall` ? .6 : n === `ground` ? (l(3) - .3) * 1.2 : .7 + l(3) * .9)),
            f = {
                t0: s,
                life: i ? .62 : .36,
                A: u,
                B: e.clone(),
                width: i ? 24 : 15,
                branches: i ? 5 : 3,
                amp: .11,
                gain: i ? 1.5 : 1.1,
                light: 1,
                seed: c,
                ground: n === `ground`,
                big: i
            };
        if (d.add(f), i)
            for (let t = 0; t < 2; t++) {
                let r = Q((l(10 + t) - .5) * 5, 0, (l(12 + t) - .8) * 3),
                    i = e.clone().add(r);
                i.y = n === `wall` ? i.y : 0, d.add({
                    t0: s + .035 * (t + 1),
                    life: .4,
                    A: Q(i.x + (l(20 + t) - .5) * 2, 9 + l(30 + t), i.z + .3),
                    B: i,
                    width: 12,
                    branches: 2,
                    amp: .13,
                    gain: .9,
                    light: .6,
                    seed: c + 31 * (t + 1),
                    ground: i.y < .05,
                    big: !1
                })
            }
        H++, Re.push({
            at: s,
            fn: () => st(e, n, i, r.letter ? ? -1, !!r.auto, !!r.drop, !!r.full)
        })
    }

    function st(e, n, r, i, a, o = !1, s = !1) {
        if (!c || !l) return;
        if (i >= 0) l.kick(i, r ? 2.6 : 1.9, (M(H) - .5) * 5, 4.5);
        else
            for (let t of l.letters) {
                t.pivot.getWorldPosition($);
                let n = Math.hypot($.x - e.x, $.z - e.z);
                n < 2.6 && l.kick(t.id, (1 - n / 2.6) * 1.6, (e.x < $.x ? 1 : -1) * (1 - n / 2.6) * 3, 2.5)
            }
        r && l.letters.forEach((e, t) => nt(t * .028, () => l ? .kick(e.id, 1.4, (t % 2 ? 1 : -1) * 1.6, 3)));
        let u = Math.hypot(e.x, e.z);
        if (fe = j, U = O(Math.atan2(e.x, e.z + .001), -1.1, 1.1), n === `funkun` || n === `ground` && u < 1.1) {
            if (pe = j, ve = j + 1.1, !A && d)
                for (let e = 0; e < 3; e++) {
                    let t = e * 2.1 + M(H + e) * 1.2;
                    d.add({
                        t0: j + .02 * e,
                        life: .22,
                        A: Q(Math.cos(t) * .16, .95, Math.sin(t) * .16),
                        B: Q(Math.cos(t + 1) * .45, .45 + .4 * M(e + H), Math.sin(t + 1) * .35),
                        width: 6,
                        branches: 1,
                        amp: .3,
                        gain: .8,
                        light: .3,
                        seed: H * 13 + e,
                        ground: !1,
                        big: !1
                    })
                }
        } else r ? he = j + 1.4 : ge = j + .45;
        A || (be = j, xe = r ? .03 : .012), Se = r ? 1 : .45, we = r ? 1 : a ? .25 : .5, r && !A && !o && (Te = 2, !s && oe < 0 && (Ee = j + .02)), s && nt(.16, () => {
            z || (z = !0, ce = j, qe = 1, t.audio.play(Wn.peel, {
                quantize: `none`,
                minGap: .05,
                gain: .7
            }), t.advance())
        })
    }

    function ct(e, t, n = !1) {
        if (!c || !l || !te || oe >= 0) return;
        if (ue = j, le = j, n) {
            lt(e, t, !0);
            return
        }
        let r = R;
        mt(e / k.cssW, 1 - t / k.cssH), !(R >= Gn) && lt(e, t, R > r && R === Kn)
    }

    function lt(e, t, n) {
        if (!c || !l) return;
        let r = k,
            a = n;
        if (dt(e, t) <= 1) {
            c.nodes.antennaL ? c.nodes.antennaL.getWorldPosition($).y += .12 : $.set(0, 1.05, 0), ot($.clone(), `funkun`, {
                big: a
            });
            return
        }
        gr.set(e / r.cssW * 2 - 1, 1 - t / r.cssH * 2), mr.setFromCamera(gr, i);
        let o = mr.intersectObjects(l.letters.map(e => e.mesh), !1);
        if (o.length) {
            let e = l.letters.findIndex(e => e.mesh === o[0].object);
            ot(o[0].point.clone(), `letter`, {
                big: a,
                letter: l.letters[e] ? .id ? ? -1
            });
            return
        }
        let s = mr.ray.origin,
            u = mr.ray.direction,
            d = -1.25;
        if (u.y < -.01) {
            let e = -s.y / u.y,
                t = s.clone().addScaledVector(u, e);
            if (t.z > d && Math.hypot(t.x - Y.cx, t.z - Y.cz) < Y.radius - .8) {
                ot(t, `ground`, {
                    big: a
                });
                return
            }
        }
        let f = Math.abs(u.z) > 1e-4 ? (d - s.z) / u.z : 3,
            p = s.clone().addScaledVector(u, Math.max(.5, f));
        if (p.y < .25) {
            p.y = 0, ot(p, `ground`, {
                big: a
            });
            return
        }
        p.y = Math.min(p.y, 6), ot(p, `air`, {
            big: a
        })
    }

    function ut() {
        let e = k,
            t = t => (t.project(i), [(t.x * .5 + .5) * e.cssW, (.5 - t.y * .5) * e.cssH]),
            n = t($.set(0, .95, 0)),
            r = t(lr.set(0, .1, 0));
        i.getWorldDirection(ur);
        let a = t($.set(0, .6, 0).addScaledVector(lr.set(-ur.z, 0, ur.x).normalize(), .3)),
            o = t($.set(0, .6, 0));
        return {
            top: n,
            bot: r,
            mid: o,
            r: Math.max(24, Math.hypot(a[0] - o[0], a[1] - o[1]))
        }
    }

    function dt(e, t) {
        let {
            top: n,
            bot: r,
            r: i
        } = ut(), a = r[0] - n[0], o = r[1] - n[1], s = O(((e - n[0]) * a + (t - n[1]) * o) / Math.max(1, a * a + o * o));
        return Math.hypot(e - (n[0] + a * s), t - (n[1] + o * s)) / i
    }

    function ft(e = !1, t = !1) {
        if (!l) return;
        let n = e => M(H * 5.17 + e * 3.3 + j),
            r = n(1);
        if (r < .5) {
            let r = l.letters[Math.floor(n(2) * l.letters.length)];
            r.pivot.getWorldPosition($), ot($.clone().add(Q((n(3) - .5) * .8, .6 + n(4) * .5, .5)), `letter`, {
                big: e,
                letter: r.id,
                auto: t
            })
        } else if (r < .8) {
            let r = (n(5) - .5) * 2.2 + Math.PI;
            ot(Q(Y.cx + Math.sin(r) * Y.radius * .97, 1.5 + n(6) * 4, Y.cz + Math.cos(r) * Y.radius * .97), `wall`, {
                big: e,
                auto: t
            })
        } else {
            let r = (n(7) - .5) * 2.4,
                i = 1.6 + n(8) * 2.5;
            ot(Q(Math.sin(r) * i, 0, -Math.cos(r) * i * .6 - .4), `ground`, {
                big: e,
                auto: t
            })
        }
    }

    function pt(e, t, n, r) {
        let i = r ? ? $e[Ue++ % Math.max(1, $e.length)] ? ? 0,
            a = M(Ve * 3.91 + .7);
        return {
            id: Ve++,
            cell: i,
            u: e,
            v: t,
            sizeK: .3 * (.9 + a * .2),
            rot: (M(Ve * 1.3) - .5) * .9,
            t0: n,
            peel: 0,
            peelAng: 0,
            grab: null,
            settle: -1,
            settleFrom: 0,
            settleTo: 0,
            fly: 0,
            flyT: -1,
            vx: 0,
            vy: 0,
            spin: 0,
            dead: !1,
            seed: a,
            pulse: -10
        }
    }

    function mt(e, n, r = 0, i = !0) {
        if (!p) return null;
        let a = t.audio.play(Wn.slap(He), {
            quantize: `16th`,
            minGap: .02
        });
        He++;
        let o = a > 0 ? O(a - N, 0, .2) : .05,
            s = pt(O(e, .02, .98), O(n, .02, .98), j + Math.max(o, r));
        W.push(s), ue = j;
        let c = W.filter(e => !e.dead && e.flyT < 0);
        c.length > 36 && wt(c[0], 0, .4), i && R < Gn && (R++, B.push(p.cells[s.cell] ? .key ? ? ``), ht(), R === Gn && Ct(s));
        let l = at();
        return Math.hypot((e - l[0]) * et(), n - l[1]) < .45 && (me = s.t0), s
    }

    function ht() {
        if (!te) {
            V !== `x` && (V = `x`, t.gate(er(R, B.slice())));
            return
        }
        let e = Math.min(R, 7),
            n = bt(e),
            r = yt(),
            i = e => Math.round(e / 3),
            a = W.length ? W[W.length - 1] : null,
            o = gt(),
            s = a && R > 0 ? [a.u * k.cssW - o, (1 - a.v) * k.cssH - o, a.u * k.cssW + o, (1 - a.v) * k.cssH + o] : null,
            c = `${R}|${i(n[0])},${i(n[1])}|${r.map(i).join(`,`)}|${s?s.map(i).join(`,`):``}`;
        if (c === V) return;
        V = c;
        let l = e => {
            let [n, r] = t.stage.toLogical(e[0], e[1]), [i, a] = t.stage.toLogical(e[2], e[3]);
            return [n, r, i, a]
        };
        t.gate({ ...er(R, B.slice()),
            target: t.stage.toLogical(n[0], n[1]),
            spot: e,
            keepClear: s ? [l(r), l(s)] : [l(r)]
        })
    }
    let gt = () => .108 * tt() * k.cssH,
        _t = [0, 0, 0, 0];

    function yt() {
        let e = j - Ee;
        if (e >= 0 && e < 1.3793103448275863 && !A && _t[2] > _t[0]) return _t;
        let {
            mid: t,
            r: n
        } = ut(), r = k.portrait ? Yn.p : Yn.l;
        return _t = [t[0] + r[0] * n, t[1] + r[1] * n, t[0] + r[2] * n, t[1] + r[3] * n], _t
    }

    function bt(e) {
        let t = k,
            n = t.portrait ? Jn : qn,
            [r, i] = n[e % n.length],
            a = r * t.cssW,
            o = i * t.cssH,
            s = yt(),
            c = gt() + 6,
            l = [s[0] - c, s[1] - c, s[2] + c, s[3] + c];
        if (a > l[0] && a < l[2] && o > l[1] && o < l[3]) {
            let e = [
                [l[0] - 1, o],
                [l[2] + 1, o],
                [a, l[1] - 1],
                [a, l[3] + 1]
            ].filter(([e, n]) => e > 36 && e < t.cssW - 36 && n > 130 && n < t.cssH - 48);
            e.sort((e, t) => Math.hypot(e[0] - a, e[1] - o) - Math.hypot(t[0] - a, t[1] - o)), e[0] && ([a, o] = e[0])
        }
        return [a, o]
    }

    function Ct(e) {
        oe = e.t0, Re.push({
            at: e.t0,
            fn: () => {
                let t = et();
                for (let n of W) n.dead || n.flyT >= 0 || (n.pulse = j + Math.hypot((n.u - e.u) * t, n.v - e.v) * .32);
                me = j, c ? .nodes.antennaL ? c.nodes.antennaL.getWorldPosition($).y += .12 : $.set(0, 1.05, 0), ot($.clone(), `funkun`, {
                    big: !0,
                    full: !0
                })
            }
        })
    }

    function wt(e, n, r) {
        e.flyT >= 0 || (e.grab = null, e.settle = -1, e.flyT = j, e.vx = n, e.vy = r + .25, e.spin = (e.seed - .5) * 5, e.peel = mn, t.audio.play(Wn.peel, {
            quantize: `none`,
            minGap: .05,
            gain: .8
        }))
    }

    function Tt() {
        let [e, t] = bt(Math.min(R, 7));
        ct(e, t)
    }

    function Et(e, t) {
        return [e / k.cssW * et(), 1 - t / k.cssH]
    }

    function Ot(e) {
        let t = et();
        return {
            cell: e.cell,
            x: e.u * t,
            y: e.v,
            size: e.sizeK * tt(),
            rot: e.rot
        }
    }

    function kt(e) {
        let t = e.input.p;
        if (t.down && !Ye && (Je = {
                cx: t.cx,
                cy: t.cy
            }), Ye = t.down, e.active && t.down && t.dragging) {
            let [e, n] = Et(t.cx, t.cy), r = t.cx - Je.cx, i = t.cy - Je.cy;
            K || = {
                ang: Math.atan2(-i, r),
                grabbed: []
            }, Math.hypot(t.dragCx, t.dragCy) > 1.5 && (K.ang = Math.atan2(-i, r)), ue = j;
            for (let t = W.length - 1; t >= 0; t--) {
                let r = W[t];
                if (!(r.dead || r.flyT >= 0 || r.grab || j < r.t0) && xn(p.cells, Ot(r), e, n)) {
                    r.peelAng = K.ang, r.grab = {
                        x0: Sn(Ot(r), r.peelAng, e, n) - .04
                    }, r.settle = -1, K.grabbed.push(r);
                    break
                }
            }
            for (let r of K.grabbed) {
                if (!r.grab || r.flyT >= 0) continue;
                let i = Math.max(0, Sn(Ot(r), r.peelAng, e, n) - r.grab.x0);
                r.peel = Math.min(mn, Cn(i * 1 + .03, r.peelAng, r.rot)), r.peel >= .599 && wt(r, t.vx / k.H * .9 * (k.W / 1920), -t.vy / k.H * .9)
            }
        }
        if (!t.down && K) {
            for (let e of K.grabbed) !e.grab || e.flyT >= 0 || (e.grab = null, e.settle = j, e.settleFrom = e.peel, e.settleTo = e.peel > .3 ? mn : 0);
            K = null
        }
        for (let e of W) {
            if (e.settle < 0) continue;
            let t = O((j - e.settle) / .14);
            e.peel = o(e.settleFrom, e.settleTo, Ce.out(t)) + (e.settleTo === 0 ? _(j, e.settle + .14, .03, 12, 9) : 0), t >= 1 && (e.settle = -1, e.settleTo > 0 ? wt(e, Math.cos(e.peelAng) * .6, Math.sin(e.peelAng) * .6) : e.peel = 0)
        }
    }

    function jt() {
        if (!p) return;
        let e = et(),
            t = tt();
        p.begin(e);
        let n = I,
            r = n < Bn.scratch0 ? 0 : n < .45 ? ae(Bn.scratch0, .45, n) : n < Bn.scratch1 ? 1 - ae(.45, Bn.scratch1, n) : 0,
            i = n >= .45 && n < Bn.scratch1,
            a = Math.cos(Ke),
            o = Math.sin(Ke),
            s = Math.min(0, e * a) + Math.min(0, o),
            c = Math.max(0, e * a) + Math.max(0, o),
            l = r * .035 * (a >= 0 ? 1 : -1),
            u = e / 2,
            d = .5,
            f = Math.cos(l),
            m = Math.sin(l),
            h = (e, h, g, _, v, y, b, x, S, C, w, T, ee) => {
                if (n > Bn.rip0) {
                    let r = O((g * a + _ * o - s) / Math.max(.001, c - s)),
                        i = Bn.rip0 + .27 * r + .02 * M(e * 1.7 + .3),
                        l = ae(i, i + .06, n);
                    if (l > 0) {
                        C = Math.max(C, mn * l), w = Ke, T = Math.max(T, l);
                        let r = O((n - i - .06) / .07);
                        g += a * r * .45 * t, _ += o * r * .45 * t + .1 * r * t, v *= 1 + .5 * r, y += .7 * r * (M(e) > .5 ? 1 : -1), b *= 1 - ae(.25, 1, r)
                    }
                }
                if (r > 0 && (C = Math.max(C, r * .22), w = Ke, T = Math.max(T, r * .6)), qe > .001 && n < .02 && (C = Math.max(C, qe * .16), w = Ke, T = Math.max(T, qe * .4)), l !== 0) {
                    let e = g - u,
                        t = _ - d;
                    g = u + e * f - t * m + a * r * .02, _ = d + e * m + t * f + o * r * .02, y += l
                }
                let te = p.frameOf(h, j, i);
                p.push(h, te, g, _, v, y, C, w - y, b, T, S, x, ee)
            };
        for (let n of W) {
            if (n.dead) continue;
            let [r, i, a, o] = wn(j, n.t0, A);
            if (i <= 0) continue;
            let s = j - n.pulse;
            s >= 0 && s < 1.2 && (o = Math.max(o, Math.exp(-s / .16)), A || (a += _(j, n.pulse, .12, 7, 6), r *= 1 + .08 * Math.exp(-s / .1)));
            let c = n.u * e,
                l = n.v,
                u = n.sizeK * t * r,
                d = n.rot,
                f = n.grab ? .5 + n.peel : n.peel * .8;
            if (n.flyT >= 0) {
                let e = (j - n.flyT) / .5;
                if (e >= 1) {
                    n.dead = !0;
                    continue
                }
                let r = 1 - Math.exp(-e * 3.2);
                c += n.vx * r * .5 * t + Math.cos(n.peelAng) * r * .15 * t, l += n.vy * r * .5 * t + Math.sin(n.peelAng) * r * .15 * t, u *= 1 + .45 * Ce.out(e), d += n.spin * r * .25, i *= 1 - ae(.35, 1, e), f = 1
            }
            h(n.id, n.cell, c, l, u, d, i, a, o, n.peel, n.peelAng, f, n.seed)
        }
        if (n > 5e-4)
            for (let e = 0; e < We.length; e++) {
                let t = We[e],
                    r = (n - t.at) / .022;
                if (r < 0) break;
                let i = Math.min(1, r),
                    a = 1 + .4 * (1 - i) * (1 - i),
                    o = ae(0, .45, r),
                    s = A || r < 1 ? 0 : .11 * Math.exp(-(r - 1) * 1.4) * Math.sin((r - 1) * 5.5),
                    c = r < 1 ? .6 : Math.exp(-(r - 1) * 1.1) * .6;
                h(1e5 + e, t.cell, t.x, t.y, t.size * a, t.rot, o, s, c, 0, Ke, 0, M(e * 1.9))
            }
        W = W.filter(e => !e.dead)
    }

    function Mt() {
        if (I <= ne || I <= 0) {
            I < Bn.scratch0 && (q = !1), I < Bn.rip0 && (Qe = !1), I <= .001 && (Ze = {
                idx: -1,
                at: -1
            });
            return
        }
        let e = -1;
        for (let t = 0; t < We.length && We[t].at <= I; t++) e = t;
        e > Ze.idx && N - Ze.at > .07758620689655173 && I < Bn.scratch0 && (Ze = {
            idx: e,
            at: N
        }, t.audio.play(Wn.slap(He++), {
            quantize: `16th`,
            minGap: .02,
            gain: .9
        })), !q && I >= Bn.scratch0 - .02 && (q = !0, t.audio.play(Wn.scratch, {
            quantize: `none`,
            minGap: .1
        })), !Qe && I >= Bn.rip0 && (Qe = !0, t.audio.play(Wn.peel, {
            quantize: `none`,
            minGap: .05
        }), nt(.12, () => t.audio.play(Wn.peel, {
            quantize: `none`,
            minGap: .05,
            gain: .7
        })))
    }

    function Nt() {
        if (!c) return;
        let e = c.rig.idle(j),
            t = N / S % 1;
        e.upper.squash += .02 * Math.exp(-t / .08), e.upper.yaw += ke[0], e.upper.pitch += ke[1];
        let n = j - fe;
        n >= 0 && n < 1.2 && (e.upper.yaw += U * .5 * h(n, 0, 3.2, .45) * (1 - ae(.6, 1.2, n)), e.upper.squash += .12 * _(n, 0, 1, 7, 3), e.antenna += .55 * _(n, 0, 1, 6, 5));
        let r = j - pe;
        if (r >= 0 && r < .9) {
            let t = O((r - .05) / .46);
            e.root.y += r < .05 ? r / .05 * -.02 : Math.sin(Math.PI * t) * .2, e.root.yaw += Math.sin(Math.PI * t) * .5 * (U >= 0 ? -1 : 1), e.upper.squash += r < .05 ? .12 : t < 1 ? -.08 * Math.sin(Math.PI * t) : .18 * _(r, .51, 1, 8, 3), e.antenna += .8 * _(r, 0, 1, 5, 7), e.shoeL.y += Math.sin(Math.PI * t) * .05, e.shoeR.y += Math.sin(Math.PI * t) * .07
        }
        let i = j - me;
        i >= 0 && i < .5 && (e.root.y += .035 * Math.sin(Math.PI * i / .5), e.upper.squash += .08 * _(i, 0, 1, 8, 4)), K && (e.root.roll += .06 * Math.cos(K.ang) * -1), c.rig.apply(e), c.object.updateMatrixWorld(!0)
    }

    function Pt() {
        if (!u || !c) return;
        u.clear(), u.u.time.value = j, u.u.flash.value = 0, u.u.gain.value = Ft() ? 7 : 2;
        let e = j > ye && j < ye + .09;
        j > ye + .09 && (ye = j + 2.2 + M(Math.floor(j * 7)) * 2.6);
        let t = [Math.round(Oe[0]), Math.round(Oe[1])];
        if (F < .93) {
            let e = 1 + .35 * Math.exp(-(N % se / .05));
            u.bolt(e)
        } else if (j < ve) u.eyes(`dizzy`, zt, 1.2);
        else if (j < he) u.eyes(`star`, zt, 1.1);
        else if (j < ge) u.eyes(`wide`, Rt, 1, [O(Math.round(U * 3), -3, 3), 0]);
        else if (j - me >= 0 && j - me < .8) u.eyes(`happy`, Rt, 1);
        else {
            let n = e ? `blink` : `open`;
            u.eyes(n, Rt, 1, n === `blink` ? [0, -2] : t)
        }
        u.upload(), ee && c.screen && u.u.ledMat.value.copy(ee.LrestInv).multiply(ee.Mrest).multiply(dr.copy(c.screen.matrixWorld).invert())
    }

    function Ft() {
        return F >= .62 && F < .69 && !A || Te > 0
    }
    let Z = {
        pos: new G,
        target: new G,
        fov: 46,
        roll: 0
    };

    function Lt() {
        Nt(), Pt();
        let e = !!k ? .portrait,
            t = e ? ar : nr,
            n = e ? or : rr,
            a = e ? sr : ir,
            s = .6 * Ce.inOut(O(ie));
        if (Z.pos.lerpVectors(t.pos, n.pos, s), Z.target.lerpVectors(t.target, n.target, s), Z.fov = o(t.fov, n.fov, s), Z.roll = o(t.roll, n.roll, s), F < 1) {
            let e = Ce.out(O((F - .62) / .3));
            Z.pos.lerpVectors(a.pos, Z.pos, e), Z.target.lerpVectors(a.target, Z.target, e), Z.fov = o(a.fov, Z.fov, e), Z.roll = o(a.roll, Z.roll, e)
        }
        let c = j - Ee,
            l = Z.fov,
            u = Z.roll,
            d = .5;
        if (c >= 0 && c < 1.3793103448275863 && !A) {
            let e = Math.floor(c / S),
                t = c - e * S,
                n = cr[e],
                r = h(t, 0, 2.4, .8);
            $.copy(n.pos).sub(n.target).multiplyScalar(o(1.08, 1, r)).add(n.target), Z.pos.copy($), Z.target.copy(n.target), l = e === 3 ? o(n.fov, 32, Ce.inOut(O(t / S))) : n.fov, e === 3 && Z.pos.copy(n.pos).sub(n.target).multiplyScalar(o(1, .62, Ce.inOut(O(t / S)))).add(n.target), u = o(n.roll * 1.6, n.roll, r), d = e === 3 ? .26 : .46
        }
        $.subVectors(Z.pos, Z.target), $.applyAxisAngle(lr.set(0, 1, 0), Me);
        let f = lr.set($.z, 0, -$.x).normalize();
        $.applyQuaternion(fr.setFromAxisAngle(f, -Fe));
        let p = et();
        if (!e && p < 16 / 9 && !(c >= 0 && c < 1.3793103448275863) && (l = 2 * Math.atan(Math.tan(l * r / 2) * (16 / 9) / Math.max(p, 1.25)) / r), p < 1.25 && c >= 0 && c < 1.3793103448275863) {
            let e = $.length(),
                t = Math.min(Math.max(Math.tan(l * r / 2), d / e / p), Math.tan(35 * r));
            l = 2 * Math.atan(t) / r;
            let n = d / (t * p);
            n > e && $.multiplyScalar(n / e)
        }
        i.position.copy(Z.target).add($), i.up.set(0, 1, 0), i.lookAt(Z.target);
        let m = .006;
        i.translateX(w(j * .7, 3) * m), i.translateY(w(j * .7, 8) * m), i.rotateZ(u + w(j * .5, 12) * m * .8);
        let g = j - be;
        g >= 0 && g < .7 && (i.translateX(_(g, 0, xe, 11, 13)), i.translateY(_(g, 0, xe * .8, 11, 17))), i.fov = l, i.aspect = p, i.near = .03, i.far = 60, i.updateProjectionMatrix(), i.updateMatrixWorld()
    }
    return {
        id: e.id,
        async load(e) {
            t = e, A = t.reducedMotion, k = t.stage.info, n = new ze, n.background = new _e(0), i = new Ne(46, 16 / 9, .03, 60), g = new En(t.layer), g.onStrike = () => {
                te && re && (t.audio.unlock(), ft())
            }, g.onSticker = () => {
                te && re && (t.audio.unlock(), Tt())
            }, B = [], V = ``, t.gate(er(0)), D = [t.input.onTap(e => {
                !t.layer.hidden && re && (t.audio.unlock(), Xe = {
                    cx: e.clientX,
                    cy: e.clientY
                })
            }), t.input.onKey(() => {
                !t.layer.hidden && re && t.audio.unlock()
            }), t.perf.onTier(e => {
                s ? .setMirror(e.mirror), m ? .setBloomScale(e.bloom)
            })], t.audio.preloadShots([...Wn.zap, ...Wn.big, ...[0, 1, 2, 3].flatMap(e => Wn.slap(e)), ...Wn.peel, ...Wn.scratch]), Object.assign(window, {
                __volt: {
                    get ready() {
                        return te
                    },
                    get t() {
                        return j
                    },
                    get strikes() {
                        return H
                    },
                    get stickers() {
                        return W.length
                    },
                    get placed() {
                        return R
                    },
                    goal: Gn,
                    get fullAt() {
                        return oe
                    },
                    get cleared() {
                        return z
                    },
                    get storm() {
                        return We.length
                    },
                    get leave() {
                        return I
                    },
                    get arrive() {
                        return F
                    },
                    get camera() {
                        return i
                    },
                    get scene() {
                        return n
                    },
                    funkun: () => {
                        let [e, t] = at();
                        return [e, 1 - t]
                    },
                    zone: (e, t) => dt(e, t),
                    tap: (e, t, n = !1) => ct(e * k.cssW, t * k.cssH, n),
                    spot: () => {
                        let [e, t] = bt(Math.min(R, 7));
                        return [e / k.cssW, t / k.cssH]
                    },
                    spotSlap: () => Tt(),
                    strike: (e = !1) => ft(e),
                    slap: (e, t, n = !0) => mt(e, t, 0, n),
                    peelDrag: (e, t) => {
                        let n = W[e];
                        n && (n.peelAng = .3, n.peel = Math.min(mn, t))
                    }
                }
            }), await Promise.race([rt(), new Promise(e => setTimeout(e, 6e4))])
        },
        enter(e) {
            Ie = e !== `boot`, L = 0, qe = 0, K = null, W = [], R = 0, ie = 0, oe = -10, z = !1, ce = -10, B = [], V = ``, t.gate(er(0))
        },
        update(e) {
            if (P = e.dt, j += P, N = e.clock, L = F, ne = I, F = e.arrive, I = e.leave, re = e.active, ie = f(ie, R / Gn, 2.4, P), !te || !c || !l || !d || !s || !m || !p) return;
            if (k.aspect !== Ge && it(), !Ie && F >= .6 && L < .6) {
                Ie = !0, ot(Q(.15, 0, -.75), `ground`, {
                    big: !0,
                    drop: !0
                });
                let e = l.letters[3];
                e && (e.pivot.getWorldPosition($), ot($.clone().add(Q(.3, .9, .4)), `letter`, {
                    letter: e.id,
                    drop: !0
                })), Ee = -10, Te = 0, he = j + 1.2
            }
            let n = e.input.p;
            if (e.active && (Xe && !K && ct(Xe.cx, Xe.cy), n.longPress && !K && ct(n.cx, n.cy, !0), e.input.pressed(`Enter`, `NumpadEnter`, `KeyL`) && ft(!1), e.input.pressed(`KeyB`) && ft(!0), e.input.pressed(`KeyS`, `Space`) && Tt(), z && j - ce > 1.5 && (ce = j, t.advance())), Xe = null, kt(e), qe = f(qe, 0, 2.5, P), e.active && j - ue > 5 && j - le > 5) {
                if (de < 0) {
                    let e = t.clock.next(`bar`, .05, N),
                        n = Math.round(e / Pe);
                    de = j + (e - N) + (n % 2 ? Pe : 0)
                } else j >= de && (de = -1, ft(!1, !0), le = j - 3)
            } else de = -1;
            for (let e = Re.length - 1; e >= 0; e--)
                if (Re[e].at <= j) {
                    let t = Re[e];
                    Re.splice(e, 1), t.fn()
                }
            let r = $.set(0, .62, .2).project(i),
                a = n.touch ? +!!n.down : n.presence,
                o = [Math.sin(j * .7) * 1.2, Math.sin(j * .43 + 1) * .6],
                u = e.active && a > .3 ? O((n.nx - r.x) * 7, -3, 3) : o[0],
                h = e.active && a > .3 ? O((n.ny - r.y) * 5, -2, 2) : o[1];
            Oe[0] = f(Oe[0], u, 12, P), Oe[1] = f(Oe[1], h, 12, P), ke[0] = f(ke[0], O(u / 3, -1, 1) * .28, 5, P), ke[1] = f(ke[1], O(-h / 2, -1, 1) * .1, 5, P), Ae[0] = f(Ae[0], e.active ? n.nx * n.presence : 0, 3, P), Ae[1] = f(Ae[1], e.active ? n.ny * n.presence : 0, 3, P), Me = A ? 0 : -Ae[0] * .07, Fe = A ? 0 : Ae[1] * .04;
            let _ = N / S,
                v = Math.floor(_),
                y = _ - v;
            X.time.value = N, X.scroll.value = (v + Ce.out(O(y / .6))) * .18 + N * .05, l.root.position.set(Hn.x, Hn.y + Math.sin(j * .9) * .05, Hn.z), l.root.rotation.set(Un.x, Un.y + Math.sin(j * .37) * .015, Un.z + Math.sin(j * .6) * .01), Math.floor((N - P) / .3448275862068966) !== v && !A && l.kick(v % 7, .35, 0, .8), l.step(P), Lt(), ht(), c.nodes.shoeL ? .getWorldPosition(X.shoeL.value), c.nodes.shoeR ? .getWorldPosition(X.shoeR.value), X.shoeL.value.y -= .12, X.shoeR.value.y -= .12, c.nodes.rotation ? .getWorldPosition(X.body.value);
            let b = d.update(j, i, k.cssH, A);
            b.sort((e, t) => t.intensity + t.flash - (e.intensity + e.flash));
            let x = 0;
            for (let e = 0; e < 4; e++) {
                let t = b[e];
                t ? (J.a[e].value.copy(t.s.A), J.b[e].value.copy(t.s.B), J.i[e].value = (.3 * t.intensity + 1.3 * t.flash) * t.s.light * (t.s.big ? 1.6 : 1), J.ground[e].value = +!!t.s.ground, x = Math.max(x, t.flash * (t.s.big ? 1 : .6) + .25 * t.intensity)) : (J.i[e].value = 0, J.a[e].value.set(0, -50, 0), J.b[e].value.set(0, -50, 0))
            }
            J.glow.value = x, J.any.value = +(b.length > 0 || x > .001);
            let C = m.look;
            C.time.value = N, C.aspect.value = et(), Se = f(Se, 0, 9, P), m.U.ca.value = .0018 + .012 * Se, we = f(we, 0, 10, P), C.flash.value = (A ? .04 : .16) * we, C.flashColor.value.setRGB(.8, 1, .3), m.glow.strength.value = .5 + .9 * x, m.glow.threshold.value = .85;
            let w = 0;
            F >= .62 && F < .69 && !A ? w = F < .655 ? 1 : 2 : Te > 0 && (w = Te === 2 ? 1 : 2, Te--), X.sil.value = +!!w, w && (m.glow.strength.value = 0, m.U.ca.value = 0), C.impact.value = +!!w, C.impactThr.value = .55, w === 1 ? (C.impactA.value.setRGB(.02, .02, .022), C.impactB.value.setRGB(1, 1, 1)) : w === 2 && (C.impactA.value.setRGB(.8, 1, 0), C.impactB.value.setRGB(.01, .01, .012)), p.flash.value = .25 * we, jt(), Mt(), g ? .show(e.arrive > .95 && e.leave < .02 && oe < 0)
        },
        render(e) {
            let n = t.renderer;
            if (n.getDrawingBufferSize(pr), p && p.render(n, pr.x, pr.y), !te || !m || F < .6 || I >= Bn.scratch0 + .002) {
                n.setRenderTarget(e), n.setClearColor(0, 1), n.clear(), n.setRenderTarget(null);
                return
            }
            m.render(e)
        },
        layout(e) {
            k = e, m && (m.look.aspect.value = e.aspect), i && (i.aspect = e.aspect, i.updateProjectionMatrix()), te && it()
        },
        exit() {
            K = null;
            for (let e of W) e.grab && (e.grab = null, e.peel = 0)
        },
        reset() {
            if (j = 0, F = 1, I = 0, L = 1, ne = 0, re = !1, R = 0, ie = 0, oe = -10, z = !1, ce = -10, B = [], V = ``, H = 0, le = -10, ue = 0, de = -1, fe = -10, U = 0, pe = -10, me = -10, he = -10, ge = -10, ve = -10, ye = 2.4, be = -10, xe = 0, Se = 0, we = 0, Te = 0, Ee = -10, Oe = [0, 0], ke = [0, 0], Ae = [0, 0], Me = 0, Fe = 0, Ie = !0, Re.length = 0, W = [], Ve = 0, He = 0, Ue = 0, qe = 0, K = null, Je = {
                    cx: 0,
                    cy: 0
                }, Ye = !1, Xe = null, Ze = {
                    idx: -1,
                    at: -1
                }, q = !1, Qe = !1, d ? .clear(), J.any.value = 0, l) {
                for (let e of l.letters) e.y = e.vy = e.rz = e.vrz = e.sq = e.vsq = 0, e.kick = 0;
                l.step(0)
            }
        },
        dispose() {
            E = !0;
            for (let e of D) e();
            D = [], An(null), m ? .dispose(), p ? .dispose(), d ? .dispose(), c ? .dispose(), l ? .dispose(), u ? .dispose(), s ? .dispose(), v ? .dispose(), y ? .dispose(), b ? .dispose(), x ? .dispose(), C ? .normal.dispose(), C ? .rough.dispose(), T ? .release(), g ? .dispose();
            let e = window;
            e.__volt && delete e.__volt
        },
        hints: () => [],
        cursor: () => K ? `grabbing` : `crosshair`,
        hud: () => `light`
    }
}
export {
    vr as
    default, zn as transitions
};