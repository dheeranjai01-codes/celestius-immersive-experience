import {
    $t as e,
    At as t,
    B as n,
    Bn as r,
    Ct as i,
    Dn as a,
    Dt as o,
    Et as s,
    G as c,
    Gn as l,
    H as u,
    I as d,
    J as f,
    Jt as p,
    Lt as m,
    M as h,
    O as g,
    On as _,
    P as v,
    Pt as y,
    Q as b,
    Qn as x,
    St as S,
    T as C,
    Tt as w,
    U as T,
    Vn as E,
    W as ee,
    X as D,
    Xn as O,
    Y as k,
    Yn as A,
    Z as j,
    Zn as M,
    _r as N,
    _t as te,
    at as ne,
    bn as re,
    bt as P,
    dr as ie,
    hn as F,
    ht as ae,
    it as I,
    kn as L,
    lt as oe,
    mt as R,
    n as se,
    p as ce,
    pt as le,
    qn as ue,
    r as de,
    rr as fe,
    s as pe,
    sr as me,
    st as he,
    t as ge,
    tn as _e,
    ut as z,
    v as ve,
    vn as ye,
    vr as B,
    vt as V,
    w as H,
    wt as U,
    xt as W,
    yr as be,
    yt as G,
    zn as xe
} from "./post-DJ5SZDIO.js";
import {
    c as Se,
    g as Ce,
    h as we,
    l as Te,
    n as Ee,
    r as De,
    s as Oe
} from "./kit-D_lqBZ3L.js";
import {
    a as K,
    i as ke,
    n as Ae,
    o as je,
    r as q,
    s as Me,
    t as Ne
} from "./plates-CXqkOo0_.js";
import {
    d as Pe,
    i as Fe,
    p as Ie,
    s as Le,
    t as Re
} from "./post-BUOiK4aL.js";
var ze = `#F4F1EA`,
    Be = `#FF4D1F`,
    Ve = new F(.07, .08, .2);

function He(e) {
    let t = new F(e),
        n = new F(ze);
    return new F(t.r / n.r, t.g / n.g, t.b / n.b)
}
var Ue = 4096 / 2731;
async function We(e) {
    let t = {
            srgb: !1,
            channels: 1,
            repeat: !0,
            anisotropy: 8,
            half: !0
        },
        [n, r, i, a] = await Promise.all([`paper`, `riso_ink`, `riso_grain`, `riso_fibre`].map(n => e.texture(`gen/breakout/${n}.webp`, t)));
    return {
        paper: n,
        ink: r,
        grain: i,
        fibre: a
    }
}

function Ge() {
    return {
        inkT: S(He(Be)),
        ink2T: S(Ve.clone()),
        paper: S(new F(ze)),
        level: S(1),
        lightVP: S(new r),
        lightPos: S(new B),
        lightDir: S(new B(0, 0, -1)),
        lightNear: S(10),
        lightRange: S(20),
        shadowTexel: S(1 / 1024),
        shadowAmt: S(1),
        dotPitch: S(.027),
        time: S(0)
    }
}

function Ke(t) {
    let r = new e;
    return r.colorNode = s(n(oe.sub(t.lightPos), t.lightDir).sub(t.lightNear).div(t.lightRange)), r.side = 2, r
}

function qe(e, t, r, i = .03) {
    return H(() => {
        let a = e.lightVP.mul(o(r, 1)),
            s = w(a.x.div(a.w).mul(.5).add(.5), a.y.div(a.w).mul(.5).add(.5)),
            c = n(r.sub(e.lightPos), e.lightDir).sub(e.lightNear).sub(i).div(e.lightRange),
            l = T(0).toVar();
        for (let n = -1; n <= 1; n++)
            for (let r = -1; r <= 1; r++) l.addAssign(P(W(t, s.add(w(r, n).mul(e.shadowTexel.mul(1.6)))).r, c));
        let u = P(0, s.x).mul(P(s.x, 1)).mul(P(0, s.y)).mul(P(s.y, 1));
        return l.div(9).mul(u)
    })()
}

function Je(e, t, n, r, i, a) {
    return H(() => {
        let o = n.r,
            l = n.g,
            u = W(t.paper, r).r.div(.94),
            d = s(e.paper).mul(u),
            p = W(t.fibre, r.mul(1.9).add(.13)).r.sub(.5),
            m = W(t.ink, r.mul(.7).add(.31)).r.sub(.5),
            h = W(t.grain, r.mul(2.3).add(.57)).r.sub(.5),
            g = G(.32, .68, o.add(p.mul(.3))),
            _ = v(T(.965).sub(u).mul(9), 0, 1),
            y = v(T(1.03).add(m.mul(.16)).add(h.mul(.06)).sub(_.mul(.6)), 0, 1),
            b = T(1).sub(g).mul(y),
            x = d.mul(j(s(1), s(e.inkT), b)).toVar(),
            S = G(.3, .7, l.add(p.mul(.36))).mul(y).mul(T(1).sub(g));
        x.mulAssign(j(s(1), s(e.inkT), S.mul(.8)));
        let C = .7854,
            E = a.div(e.dotPitch),
            ee = w(E.x.mul(Math.cos(C)).sub(E.y.mul(Math.sin(C))), E.x.mul(Math.sin(C)).add(E.y.mul(Math.cos(C)))),
            D = c(ee).sub(.5),
            O = v(i.mul(e.shadowAmt), 0, 1),
            A = O.sqrt().mul(.62),
            M = G(A.add(.07), A.sub(.07), f(D).add(p.mul(.06))),
            N = G(.93, 1, O);
        return x.mulAssign(j(s(1), s(e.ink2T), k(M.mul(P(.02, O)), N).mul(.92).mul(y))), x.mul(e.level)
    })()
}

function Ye(e, t, r, i) {
    return H(() => {
        let a = Ce.rgb.mul(T(1).sub(r.mul(.55))),
            l = n(a, s(.2126, .7152, .0722)),
            u = ae.xy,
            p = .2618,
            m = w(u.x.mul(d(p)).sub(u.y.mul(V(p))), u.x.mul(V(p)).add(u.y.mul(d(p)))),
            h = c(m.div(t)).sub(.5),
            g = v(l.sub(.02).div(.5), 0, 1),
            _ = T(1).sub(g).sqrt().mul(.7),
            y = G(_.add(.08), _.sub(.08), f(h)),
            b = s(new F(e).r, new F(e).g, new F(e).b),
            x = a.div(k(l, .001)).mul(D(k(l.mul(1.6), .25), 1.05)).mul(.9).add(.03),
            S = j(x, b, y).toVar();
        return S.assign(j(S, b, G(.08, 0, g))), o(S.mul(i), Ce.a)
    })()
}

function Xe(e) {
    e.updateMatrixWorld(!0);
    let t = e.geometry,
        n = t.attributes.position,
        r = t.attributes.normal,
        i = t.attributes.uv,
        a = e.matrixWorld,
        o = new xe().getNormalMatrix(a),
        s = [],
        c = [],
        l = [],
        u = new B;
    for (let e = 0; e < n.count; e++) {
        let t = new B().fromBufferAttribute(n, e).applyMatrix4(a),
            d = new B().fromBufferAttribute(r, e).applyMatrix3(o).normalize();
        s.push(t), c.push(d), l.push([i.getX(e), i.getY(e)]), u.add(d)
    }
    u.normalize(), u.z < 0 && u.negate();
    let d = u.clone(),
        f = new B(1, 0, 0).sub(d.clone().multiplyScalar(d.x)).normalize(),
        p = new B().crossVectors(d, f).normalize(),
        m = -1 / 0,
        h = 1 / 0,
        g = -1 / 0,
        _ = 1 / 0,
        v = -1 / 0,
        y = new B;
    s.forEach(e => y.add(e)), y.multiplyScalar(1 / s.length);
    for (let e of s) {
        let t = e.clone().sub(y);
        m = Math.max(m, t.dot(d)), h = Math.min(h, t.dot(f)), g = Math.max(g, t.dot(f)), _ = Math.min(_, t.dot(p)), v = Math.max(v, t.dot(p))
    }
    let b = y.clone().add(d.clone().multiplyScalar(m + .004)),
        x = 1.04,
        S = b.clone().add(f.clone().multiplyScalar(h * x)).add(p.clone().multiplyScalar(_ * x)),
        C = b.clone().add(f.clone().multiplyScalar(g * x)).add(p.clone().multiplyScalar(_ * x)),
        w = b.clone().add(f.clone().multiplyScalar(h * x)).add(p.clone().multiplyScalar(v * x)),
        T = b.clone().add(f.clone().multiplyScalar((h + g) / 2)).add(p.clone().multiplyScalar((_ + v) / 2)),
        E = t.index.array;

    function ee(e, t) {
        let n = null,
            r = -1 / 0;
        for (let i = 0; i < E.length; i += 3) {
            let a = l[E[i]],
                o = l[E[i + 1]],
                s = l[E[i + 2]],
                c = o[0] - a[0],
                u = o[1] - a[1],
                d = s[0] - a[0],
                f = s[1] - a[1],
                p = e - a[0],
                m = t - a[1],
                h = c * f - d * u;
            if (Math.abs(h) < 1e-12) continue;
            let g = (p * f - d * m) / h,
                _ = (c * m - p * u) / h,
                v = 1 - g - _,
                y = Math.min(v, g, _);
            if (y > r && (r = y, n = [i, v, g, _]), y >= 0) break
        }
        let [i, a, o, u] = n;
        return [new B().addScaledVector(s[E[i]], a).addScaledVector(s[E[i + 1]], o).addScaledVector(s[E[i + 2]], u), new B().addScaledVector(c[E[i]], a).addScaledVector(c[E[i + 1]], o).addScaledVector(c[E[i + 2]], u).normalize()]
    }
    let D = 1.565,
        O = (e, t) => ee(.005 + .99 * e / D, .34 + .655 * t),
        k = 9,
        A = -9,
        j = 9,
        M = -9;
    for (let e of l) k = Math.min(k, e[0]), A = Math.max(A, e[0]), j = Math.min(j, e[1]), M = Math.max(M, e[1]);
    let N = (e, t) => {
            let n = 0,
                r = 1 / 0;
            return l.forEach((i, a) => {
                let o = (i[0] - e) ** 2 + (i[1] - t) ** 2;
                o < r && (r = o, n = a)
            }), s[n].clone()
        },
        te = N((k + A) / 2, (j + M) / 2),
        ne = N(A, (j + M) / 2).sub(N(k, (j + M) / 2)).normalize(),
        re = new B().crossVectors(d, ne).normalize(),
        P = re.y < 0 ? re.negate() : re;
    return {
        wp: s,
        wn: c,
        wu: l,
        idx: E,
        vn: d,
        vr: f,
        vu: p,
        SC: T,
        pc0: b,
        pa: S,
        pb: C,
        pcc: w,
        screenH: v - _,
        screenW: g - h,
        scC: te,
        scX: ne,
        scY: P,
        uvToWorld: ee,
        domToWorld: O,
        FW: D
    }
}
var Ze = class {
    f;
    coord;
    far;
    camera;
    VP = new r;
    vr2;
    vu2;
    vn2;
    rotM;
    trueProj = new r;
    constructor(e, t, n = 60) {
        this.f = e, this.coord = t, this.far = n, this.camera = new ue, this.camera.updateProjectionMatrix = () => {}, this.camera.coordinateSystem = t, this.vr2 = new B().subVectors(e.pb, e.pa).normalize(), this.vu2 = new B().subVectors(e.pcc, e.pa).normalize(), this.vn2 = new B().crossVectors(this.vr2, this.vu2).normalize(), this.rotM = new r().makeBasis(this.vr2, this.vu2, this.vn2)
    }
    offAxis(e, t, n, r, i) {
        let a = e.clone().sub(r),
            o = t.clone().sub(r),
            s = n.clone().sub(r),
            c = -a.dot(this.vn2),
            l = Math.max(.01, c),
            u = this.far,
            d = this.vr2.dot(a) * l / c,
            f = this.vr2.dot(o) * l / c,
            p = this.vu2.dot(a) * l / c,
            m = this.vu2.dot(s) * l / c;
        return this.camera.near = l, this.camera.far = u, i.makePerspective(d, f, m, p, l, u, this.coord)
    }
    update(e, t = 1, n = 0) {
        let r = this.f,
            i = this.camera;
        i.position.copy(e), i.quaternion.setFromRotationMatrix(this.rotM), i.updateMatrixWorld(!0), this.offAxis(r.pa, r.pb, r.pcc, e, this.trueProj);
        let a = 1 / t,
            o = r.SC.clone().addScaledVector(this.vu2, -n);
        this.offAxis(o.clone().lerp(r.pa, a), o.clone().lerp(r.pb, a), o.clone().lerp(r.pcc, a), e, i.projectionMatrix), i.projectionMatrixInverse.copy(i.projectionMatrix).invert(), this.VP.multiplyMatrices(this.trueProj, i.matrixWorldInverse)
    }
};

function Qe() {
    return {
        portalVP: S(new r),
        portalRes: S(new N(1024, 654)),
        time: S(0),
        crt: S(1),
        bright: S(1.4),
        glass: S(1),
        curve: S(.08),
        noise: S(1),
        flash: S(0),
        ripple: S(0),
        rippleT: S(1),
        haze: S(0),
        crack: S(1),
        lines: S(220),
        impact: S(new N(.5, .36)),
        tint: S(new B(.78, 1.05, .86)),
        keyDir: S(new B(-.4, .5, .75)),
        keyCol: S(new F(1, .96, .9).multiplyScalar(1.4)),
        envLo: S(new F(`#FF4D1F`).multiplyScalar(.22)),
        envHi: S(new F(`#FF4D1F`).multiplyScalar(.08)),
        refr: S(0),
        k0: S(new be(0, 0, 0, 0)),
        k1: S(new be(0, 0, 0, 0)),
        k2: S(new be(0, 0, 0, 0)),
        scrR: S(new B(1, 0, 0)),
        scrU: S(new B(0, 1, 0)),
        scrN: S(new B(0, 0, 1)),
        finger: S(1)
    }
}
var J = [0, 1, 2].map(e => ({
        w: S(ke(`web`, 2800, .4 + 2.1 * e)),
        d: S(ke(`dust`, 3600, -.7 + 1.7 * e))
    })),
    Y = S(K(`web`)),
    $e = S(K(`dust`));

function et(t, r, a, l) {
    let d = new e;
    d.name = `crt`;
    let p = U(we);
    return d.colorNode = H(() => {
        let e = i(),
            d = w(e.x.sub(.005).div(.99), e.y.sub(.34).div(.655)),
            m = W(a, d),
            _ = t.glass,
            y = t.portalVP.mul(o(oe, 1)),
            x = y.xy.div(y.w),
            S = w(x.x.mul(.5).add(.5), x.y.mul(-.5).add(.5)).toVar(),
            E = S.sub(.5);
        S.assign(E.mul(T(1).sub(t.curve.mul(n(E, E)).mul(_))).add(.5));
        let D = d.sub(w(t.impact.x, t.impact.y)).mul(w(1.565, 1)),
            O = f(D),
            A = t.ripple.mul(V(O.mul(70).sub(t.rippleT.mul(55)))).mul(u(O.mul(-5))).mul(u(t.rippleT.mul(-9))),
            M = D.div(k(O, 1e-4));
        S.addAssign(M.mul(A).mul(.012).mul(_));
        let N = T(0).toVar(),
            ne = w(0).toVar(),
            re = T(0).toVar();
        for (let [e, n] of [t.k0, t.k1, t.k2].entries()) C(n.z.greaterThan(0), () => {
            let t = d.sub(n.xy).mul(w(1.565, 1)),
                r = f(t),
                i = je(t, J[e].w, Y),
                a = je(t, J[e].d, $e),
                o = Me(n.z, r),
                s = Me(n.w, r).mul(.85);
            N.assign(k(N, k(q(l.web, i).mul(o), q(l.dust, a).mul(s)))), ne.addAssign(Ae(l.web, i, J[e].w, Y).mul(o)), re.assign(k(re, o))
        });
        N.mulAssign(_), S.addAssign(ne.mul(.006).mul(_));
        let P = 1.5 / 1024,
            ie = W(a, d.add(w(P, 0))).r.sub(W(a, d.sub(w(P, 0))).r),
            F = W(a, d.add(w(0, P))).r.sub(W(a, d.sub(w(0, P))).r);
        S.addAssign(w(ie, F).mul(t.refr).mul(_));
        let L = W(r, S).rgb.toVar(),
            R = W(r, S.add(w(2.5, 0).div(t.portalRes))).rgb.add(W(r, S.sub(w(2.5, 0).div(t.portalRes))).rgb).mul(.5);
        L.assign(j(L, k(L, R), _.mul(.6))), L.mulAssign(j(s(1), s(t.tint), _.mul(t.crt)));
        let se = t.crt.mul(_),
            ce = c(d.y.mul(t.lines)).sub(.5),
            le = n(L, s(.3, .5, .2)),
            ue = u(ce.mul(ce).negate().div(T(.018).add(v(le, 0, 1.5).mul(.08))));
        L.mulAssign(j(T(1), T(.3).add(ue), se));
        let de = b(ee(ae.x), 3),
            fe = s(te(de.lessThan(.5), T(1), T(.72)), te(de.greaterThan(.5).and(de.lessThan(1.5)), T(1), T(.72)), te(de.greaterThan(1.5), T(1), T(.72)));
        L.mulAssign(j(s(1), fe, se.mul(.4))), L.mulAssign(j(T(1), t.bright, _).mul(T(1).sub(se.mul(.03).mul(V(t.time.mul(377))))));
        let pe = c(V(n(ee(d.mul(w(640, 400))), w(12.9898, 78.233)).add(c(t.time.mul(7.1)))).mul(43758.5453));
        L.addAssign(se.mul(t.noise).mul(pe.sub(.5)).mul(.05));
        let me = g(d.sub(.5)).mul(2),
            he = G(1.3, .55, k(me.x, me.y.mul(1.04)).add(n(me, me).mul(.25)));
        L.mulAssign(j(T(1), he, _.mul(.6).mul(t.crt)));
        let ge = I(h.sub(oe)),
            _e = I(p),
            ve = T(.04).add(z(T(1).sub(v(n(_e, ge), 0, 1)), 5).mul(.96)),
            ye = ge.negate().reflect(_e),
            B = j(s(t.envLo), s(t.envHi), G(-.4, .6, ye.y)).add(s(t.keyCol).mul(G(.82, .94, n(ye, I(t.keyDir))))),
            H = W(l.finger, w(d.x, T(1).sub(d.y)).mul(w(1, .75)).add(.1)).r;
        L.addAssign(B.mul(ve).mul(_).mul(j(T(1), T(.65).add(H.mul(.7)), t.finger))), L.addAssign(s(.9, .95, 1).mul(H.mul(.012)).mul(t.finger).mul(_));
        let U = m.r,
            be = V(n(ye, s(23, 19, 11)).add(U.mul(41))).mul(.5).add(.5);
        L.addAssign(s(.92, .97, 1).mul(U).mul(t.crack).mul(T(.55).add(be.mul(.9))).mul(1.5).mul(T(1).sub(re.mul(.4))));
        let xe = I(s(t.scrN).add(s(t.scrR).mul(ne.x.mul(-6))).add(s(t.scrU).mul(ne.y.mul(6)))),
            Se = z(k(n(ge.negate().reflect(xe), I(t.keyDir)), 0), 36),
            Ce = G(.03, .45, N);
        return L.assign(j(L, L.mul(.7).add(s(.05, .055, .06)), Ce.mul(.45))), L.addAssign(s(.9, .95, 1).mul(z(N, 1.25).mul(1.3).mul(T(.7).add(be.mul(.6))).add(Se.mul(Ce).mul(3).mul(t.keyCol.r)))), L.addAssign(s(.85, .9, 1).mul(t.haze).mul(u(O.mul(-14))).mul(_)), L.addAssign(s(.9, 1, .95).mul(t.flash).mul(u(O.mul(-4))).mul(T(.15).add(_.mul(.85)))), k(L, s(0))
    })(), d
}
var tt = 8.16,
    nt = Math.tan(11 * t),
    rt = .395,
    it = 1.3,
    at = 16 / 9,
    ot = 9 / 16,
    st = new B(-.55, .75, .9).normalize(),
    ct = .45,
    lt = .315,
    ut = [.067, .067, .067],
    dt = [1, .282, .106],
    ft = (e, t, n) => {
        let r = Math.sin(e * 127.1 + t * 311.7 + n * 74.7) * 43758.5453;
        return r - Math.floor(r)
    },
    X = {
        key: 3.2,
        hemi: .9,
        dot: 5,
        bloom: .35,
        ca: .0012,
        saturation: 1.04,
        curve: .08,
        bright: 1.4,
        portalZoom: 1.6,
        portalDrop: .06,
        idleRate: 1.6,
        back: .12,
        squash: .02
    };

function pt(e, n) {
    let r = n ? rt : nt,
        i = n ? ot : at,
        a = e < i ? r * i / e : r;
    return 2 * Math.atan(a) / t
}

function mt() {
    return {
        amt: S(0),
        c: S(new N(.5, .5)),
        face: S(new B(-9, -9, .01))
    }
}
var ht = S(ke(`burst`, 1900, .3)),
    gt = S(K(`burst`));

function _t(e, t, n, r) {
    return H(() => {
        let a = i(),
            s = a.sub(t.c).mul(w(r, 1)).mul(w(1, -1)),
            c = G(.14, .85, q(n, je(s, ht, gt))).toVar();
        c.mulAssign(j(T(.25), T(1), G(t.face.z.mul(.55), t.face.z, f(a.sub(t.face.xy).mul(w(r, 1))))));
        let l = R(e.rgb);
        return o(le(T(1).sub(T(1).sub(l).mul(T(1).sub(c.mul(t.amt))))), 1)
    })()
}
async function vt(e, t) {
    let n = [],
        r = () => {
            for (let e of n) try {
                e.dispose()
            } catch {}
            n.length = 0
        };
    try {
        return await Dt(e, t, n, r)
    } catch (e) {
        throw r(), e
    }
}
var yt = () => new Promise(e => requestAnimationFrame(() => e())),
    bt = e => e ? `gen/breakout/poster_p.webp` : `gen/breakout/poster_l.webp`,
    xt = {
        srgb: !1,
        channels: 2,
        half: !0,
        anisotropy: 8
    },
    St = (e, t) => {
        try {
            performance.measure(e, {
                start: t,
                end: performance.now()
            })
        } catch {}
    },
    Ct = e => {
        let t = e >> 10 & 31,
            n = e & 1023;
        return (e & 32768 ? -1 : 1) * (t === 0 ? 2 ** -14 * (n / 1024) : t === 31 ? 1 / 0 : 2 ** (t - 15) * (1 + n / 1024))
    };
async function wt(e, t) {
    try {
        let n = await e.readRenderTargetPixelsAsync(t, t.width / 2 - 16, t.height / 2 - 16, 32, 32);
        for (let e = 0; e < 1024; e++)
            if ((n instanceof Uint16Array ? Ct(n[e * 4]) : Number(n[e * 4])) < 100) return !0;
        return !1
    } catch {
        return !0
    }
}
var Tt = Promise.resolve();

function Et(e) {
    let t = Tt.then(e, e);
    return Tt = t.catch(() => void 0), t
}
async function Dt(n, i, c, u) {
    let d = n.renderer,
        f = n.perf.settings,
        p = i.cancelled,
        m = n.stage.info.portrait,
        h = n.assets.lease();
    c.push(h);
    let g = Fe(n, () => n.perf.restart(2)),
        v = new ue(33, 16 / 9, .05, 140);
    v.updateProjectionMatrix = () => {};
    let b = null;
    c.push({
        dispose() {
            g.then(e => {
                e.detachCamera(v), b ? .dispose(), Le()
            }, () => {})
        }
    });
    let [C, T, ee, D, k, j] = await Promise.all([h.loadGLTF(n.assets.halfFor(`gen/poster/ft220_2k.glb`) ? `gen/poster/ft220_1k.glb` : `gen/poster/ft220_2k.glb`), h.loadTexture(bt(m), xt), n.assets.json(`gen/breakout/prints.json`), g, We(h), Promise.all([Ne(h, `web`), Ne(h, `dust`), h.texture(`gen/breakout/fingerprint.webp`, {
        srgb: !1,
        channels: 1,
        repeat: !0,
        anisotropy: 4,
        half: !0
    }), i.burst ? Ne(h, `burst`) : null]).then(([e, t, n, r]) => ({
        web: e,
        dust: t,
        finger: n,
        burst: r
    }))]), te = new Set, P = [];
    if (C.scene.traverse(e => {
            let t = e;
            t.isMesh && P.push(t.geometry);
            let n = t.material;
            for (let e of Array.isArray(n) ? n : n ? [n] : [])
                for (let t of Object.values(e)) t && t.isTexture && te.add(t)
        }), c.push(...te, T, ...P), p()) return u(), null;
    let ae = {
        l: m ? null : T,
        p: m ? T : null
    };
    c.push(k.paper, k.ink, k.grain, k.fibre, j.web, j.dust, j.finger), j.burst && c.push(j.burst);
    let I = new me;
    I.background = new F(Be);
    let R = C.scene;
    R.scale.setScalar(8), R.rotation.y = Math.PI, I.add(R), R.updateMatrixWorld(!0);
    let le, z;
    R.traverse(e => {
        let t = e;
        t.isMesh && (e.name.includes(`screen`) ? z = t : le = t)
    });
    let V = Xe(z),
        H = le.material,
        U = new _e({
            map: h.adopt(H.map),
            normalMap: h.adopt(H.normalMap),
            roughnessMap: h.adopt(H.roughnessMap),
            metalnessMap: h.adopt(H.metalnessMap),
            roughness: 1,
            metalness: 1
        }),
        G = [...new Set([U.map, U.normalMap, U.roughnessMap, U.metalnessMap])].filter(e => !!e);
    U.envMapIntensity = 0, H.dispose(), le.material = U, c.push(U);
    let xe = V.vn.clone(),
        Ce = V.scC.clone().addScaledVector(xe, tt),
        we = V.scC.clone().addScaledVector(xe, tt * .978),
        Te = new M().setFromRotationMatrix(new r().lookAt(Ce, V.scC, new B(0, 1, 0))),
        K = Te.clone().multiply(new M().setFromAxisAngle(new B(1, 0, 0), -.035)),
        ke = new B(0, 0, -1).applyQuaternion(K),
        Ae = new B(0, 1, 0).applyQuaternion(K),
        je = new B(1, 0, 0).applyQuaternion(K),
        q = new re(16777215, X.key);
    q.position.copy(V.scC).addScaledVector(st, 16), q.target.position.copy(V.scC), I.add(q, q.target);
    let Me = new L(14673663, new F(Be), X.hemi);
    I.add(Me);
    let ze = new ie(11123967, 0, 10, .6, .8, 1.4);
    ze.position.set(2.8, 2.2, -1.1), ze.target.position.set(0, .8, .6), I.add(ze, ze.target);
    let Ve = new O(16726570, 0, 5, 1.6);
    Ve.position.set(-.3, .9, .62), I.add(Ve);
    let He = new O(3076808, 0, 5, 1.6);
    He.position.set(.3, .75, .62), I.add(He);
    let J = Ge(),
        Y = new l(-3.2, 3.2, 3.2, -3.2, .4, 40);
    Y.position.copy(q.position), Y.lookAt(V.scC), Y.updateMatrixWorld(!0), Y.updateProjectionMatrix(), J.lightVP.value.multiplyMatrices(Y.projectionMatrix, Y.matrixWorldInverse), J.lightPos.value.copy(Y.position), J.lightDir.value.copy(V.scC).sub(Y.position).normalize(), J.lightNear.value = 12, J.lightRange.value = 8;
    let $e = async () => {
            let e = new fe(1024, 1024, {
                type: _,
                depthBuffer: !0
            });
            e.texture.userData.keep = !0;
            let t = Ke(J),
                n = new me;
            n.overrideMaterial = t;
            let r = R.clone();
            n.add(r);
            let a = () => {
                    let t = d.getRenderTarget(),
                        r = d.getClearColor(new F),
                        i = d.getClearAlpha();
                    d.setRenderTarget(e), d.setClearColor(new F().setRGB(1e4, 1e4, 1e4), 1), d.clear(), d.render(n, Y), d.setRenderTarget(t), d.setClearColor(r, i)
                },
                o = performance.now(),
                s = !1;
            try {
                await Et(async () => {
                    if (!p()) {
                        await ce(d, a);
                        for (let t = 0; t < 90 && !p() && (a(), !await wt(d, e)); t++) await yt();
                        s = !p()
                    }
                })
            } finally {
                t.dispose()
            }
            if (St(`${i.label} · distance map`, o), !s) throw e.dispose(), Error(`distance map cancelled`);
            return ve(d, e), e
        },
        ct;
    try {
        ct = await h.share(`breakout-rest-distance:1024`, $e)
    } catch {
        if (p()) return u(), null;
        ct = await h.share(`breakout-rest-distance:1024`, $e)
    }
    if (c.push(ct), p()) return u(), null;
    J.shadowTexel.value = 1 / 1024;
    let ft = {
        dot: S(X.dot),
        shade: S(0),
        level: S(1)
    };
    U.outputNode = Ye(new F(`#0B0B0D`), ft.dot, qe(J, ct.texture, oe, .05).mul(ft.shade), ft.level), U.needsUpdate = !0;
    let pt = S(new r),
        ht = e => {
            let t = 2 * e * nt;
            return {
                h: t,
                w: t * at
            }
        },
        gt = 10.88,
        vt = ht(gt),
        Ct = new A(vt.w * it * 4, vt.h * it * 5),
        Tt = new e,
        Dt = pt.mul(o(oe, 1)),
        Ot = Dt.xy.div(Dt.w),
        kt = w(Ot.x.mul(.5).div(it).add(.5), Ot.y.mul(.5).div(it).add(.5)),
        At = W(T, kt),
        jt = he.xy;
    Tt.colorNode = Je(J, k, At, w(jt.x.mul(.92 / vt.w).add(.46 * it), jt.y.mul(.92 * Ue / vt.w).add(.46 * it * Ue / at)), qe(J, ct.texture, oe, .02), jt);
    let Mt = new E(Ct, Tt);
    Mt.position.copy(Ce).addScaledVector(ke, gt), Mt.quaternion.copy(K), I.add(Mt), c.push(Ct, Tt);
    let Nt = new Ze(V, d.coordinateSystem, 140),
        Pt = f.tier === `high` ? 1280 : f.tier === `medium` ? 1024 : 768,
        Ft = Math.round(Pt / V.FW),
        It = new fe(Pt, Ft, { ...ge,
            depthBuffer: !1
        });
    It.texture.userData.sleeps = !0, c.push(It);
    let Z = Qe();
    Z.portalRes.value.set(Pt, Ft);
    let Lt = V.SC.y - Oe,
        Rt = V.pc0.z,
        zt = Rt - lt - .035,
        Bt = Rt - lt + .004,
        Vt = new B(0, Ie - Lt, X.back - zt),
        Q = new a;
    Q.name = `breakout-in-alley`, Q.position.copy(Vt), Q.updateMatrixWorld(!0);
    let Ht = new B().subVectors(V.pb, V.pa).normalize().cross(new B().subVectors(V.pcc, V.pa).normalize()).normalize(),
        Ut = new be(Ht.x, Ht.y, Ht.z, Ht.dot(V.pa.clone().add(Vt)));
    D.reduced = n.reducedMotion, D.attachCamera(v);
    let Wt = new N,
        Gt = () => (d.getDrawingBufferSize(Wt), y(Math.max(960 / Math.max(1, Wt.x), 540 / Math.max(1, Wt.y)), .2, 1)),
        Kt = Re(d, D, v, {
            samples: f.msaa,
            bloom: .5,
            rayTaps: 12,
            scale: Gt()
        });
    Kt.look.grade({
        vignette: .2
    }), b = Kt;
    let qt = performance.now(),
        Jt = await h.share(`breakout-rest-env:${f.env}`, () => Ee(d, {
            top: `#1a1412`,
            bottom: `#ff4d1f`,
            horizon: `#3a1a10`,
            k: .55,
            size: f.env,
            center: [0, .8, .6],
            floor: `#b8381a`,
            cards: [{
                type: `rect`,
                position: [-3, 3.4, 3.1],
                size: [2.4, 1.7],
                color: `#fff1e2`,
                intensity: 6,
                softness: .3
            }, {
                type: `strip`,
                position: [-2.2, 1.3, -1.8],
                size: [.3, 2.6],
                color: `#ff3a2a`,
                intensity: 10,
                gradient: .15
            }, {
                type: `strip`,
                position: [2.3, 1.2, -2.2],
                size: [.3, 2.6],
                color: `#2ef2c8`,
                intensity: 9,
                gradient: .15
            }, {
                type: `strip`,
                position: [0, 2.8, -2.8],
                size: [3.5, .2],
                color: `#e6ff00`,
                intensity: 4,
                gradient: 0
            }, {
                type: `strip`,
                position: [3.4, .5, 1.7],
                size: [.35, 1.4],
                color: `#ffb070`,
                intensity: 6,
                gradient: .3
            }]
        }));
    if (St(`${i.label} · env bake`, qt), c.push(Jt), p()) return u(), null;
    let Yt = await Se(h, {
        lod: f.lod,
        detail: f.detail,
        env: Jt.texture,
        envIntensity: 1
    });
    if (c.push(Yt), p()) return u(), null;
    let Xt = new a,
        Zt = new a;
    Xt.add(Zt), Zt.position.y = -.45, Zt.add(Yt.object), Q.add(Xt);
    for (let e of Yt.mats) e.fog = !1;
    if (await yt(), p()) return u(), null;
    let Qt = [V.FW * .5, .5 - .14 / V.screenH],
        $t = i.crack ? i.crack(V, Qt) : new ye(new Uint8Array([0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255, 0, 0, 0, 255]), 2, 2, x);
    i.crack || ($t.colorSpace = ``, $t.needsUpdate = !0), c.push($t), Z.impact.value.set(Qt[0] / V.FW, Qt[1]), Z.keyDir.value.copy(new B(-3, 3.4, 4).sub(V.SC).normalize()), Z.scrR.value.copy(V.vr), Z.scrU.value.copy(V.vu), Z.scrN.value.copy(V.vn);
    let en = et(Z, It.texture, $t, j);
    z.material.dispose(), z.material = en, c.push(en), Z.glass.value = 1, Z.crt.value = 1;
    let tn = Z.tint.value.clone(),
        nn = new ue(22, 16 / 9, .03, 200),
        rn = ne(I, nn, {
            samples: f.msaa
        }),
        an = rn.getTextureNode(),
        on = pe(an, X.bloom, .3, 1.3);
    on.setResolutionScale(f.bloom);
    let $ = new se;
    $.grade({
        contrast: 1.03,
        saturation: X.saturation,
        vignette: .16,
        grain: .03
    }), $.ca.value = X.ca, $.impactThr.value = .5, $.impactA.value.setRGB(...ut), $.impactB.value.setRGB(...dt);
    let sn = S(0),
        cn = mt(),
        ln = De(i.post ? i.post(an, on) : s(an).add(on), $, sn),
        un = new de(d, j.burst ? _t(ln, cn, j.burst, $.aspect) : ln);
    c.push(un, rn, on);
    let dn = null,
        fn = !1;

    function pn(e) {
        m = e.portrait;
        let n = m ? ae.p : ae.l;
        if (n) At.value = n;
        else if (!dn) {
            let e = m;
            dn = h.loadTexture(bt(e), xt).then(t => {
                if (dn = null, fn) {
                    t.dispose();
                    return
                }
                c.push(t), e ? ae.p = t : ae.l = t, m === e && (At.value = t)
            }).catch(() => {
                dn = null
            })
        }
        let r = new ue(2 * Math.atan(m ? rt : nt) / t, m ? ot : at, .05, 200);
        r.position.copy(Ce), r.quaternion.copy(K), r.updateMatrixWorld(!0), r.updateProjectionMatrix(), pt.value.multiplyMatrices(r.projectionMatrix, r.matrixWorldInverse), $.aspect.value = e.aspect, Kt.scenePass.setResolutionScale(Gt())
    }
    pn(n.stage.info);
    let mn = new B,
        hn = new B,
        gn = new be(0, 0, 1, 1e4),
        _n = .3;

    function vn(e, t = X.portalZoom, n = X.portalDrop) {
        Nt.update(e, t, n * V.screenH), Z.portalVP.value.copy(Nt.VP)
    }

    function yn(e) {
        let n = Nt.camera,
            r = n.projectionMatrix.elements;
        v.position.copy(n.position).add(Vt), v.quaternion.copy(n.quaternion), v.updateMatrixWorld(!0), v.projectionMatrix.copy(n.projectionMatrix), v.projectionMatrixInverse.copy(n.projectionMatrixInverse), v.near = n.near, v.far = n.far, v.fov = 2 * Math.atan(1 / r[5]) / t, v.aspect = r[5] / r[0], d.getDrawingBufferSize(Wt), D.prepare(v, Math.round(Wt.y * Gt()), y(270 / Math.max(1, Wt.y), .08, .5)), Kt.track(v, Pe), Kt.look.time.value = $.time.value;
        let i = D.fk.object,
            a = i.visible,
            o = D.S;
        mn.copy(o.shoeL.value), hn.copy(o.shoeR.value), Xt.parent === Q ? (Yt.nodes.shoeL ? .getWorldPosition(o.shoeL.value), Yt.nodes.shoeR ? .getWorldPosition(o.shoeR.value), o.shoeL.value.y -= .1, o.shoeR.value.y -= .1) : (o.shoeL.value.set(0, 100, 0), o.shoeR.value.set(0, 100, 0)), i.visible = !1;
        let s = D.lights,
            c = [s.back.intensity, s.rimL.intensity, s.rimR.intensity, s.top.intensity];
        s.back.intensity *= _n, s.rimL.intensity *= _n, s.rimR.intensity *= _n, s.top.intensity *= _n, D.U.glass.value.copy(Ut), D.scene.add(Q);
        try {
            e()
        } finally {
            D.scene.remove(Q), i.visible = a, [s.back.intensity, s.rimL.intensity, s.rimR.intensity, s.top.intensity] = c, o.shoeL.value.copy(mn), o.shoeR.value.copy(hn), D.U.glass.value.copy(gn)
        }
    }
    let bn = () => yn(() => Kt.render(It));
    if (!D.warmed) {
        Q.remove(Xt);
        let e = e => n.own ? n.own(e) : e();
        try {
            await D.warmPipelines(d, () => e(() => {
                vn(we), bn()
            }), `${i.label} · warm alley`, p)
        } finally {
            Q.add(Xt)
        }
        if (p()) return u(), null
    }
    return {
        scene: I,
        inner: Q,
        camera: nn,
        vt: R,
        body: le,
        scr: z,
        f: V,
        IMP: Qt,
        TINT: tn,
        prints: ee,
        print: k,
        plates: j,
        frames: {
            endPos: Ce,
            restPos: we,
            axisQuat: Te,
            endQuat: K,
            fwdC: ke,
            upC: Ae,
            rightC: je,
            restDist: tt * .978,
            dBack: gt
        },
        key: q,
        hemi: Me,
        rim: ze,
        spillA: Ve,
        spillB: He,
        PU: J,
        bodyU: ft,
        shadowRT: ct,
        backP: Mt,
        designVP: pt,
        maskNode: At,
        portal: Nt,
        portalRT: It,
        C: Z,
        yIn: Lt,
        zG: Rt,
        zRest: zt,
        zHit: Bt,
        env: Jt,
        fk: Yt,
        fA: Xt,
        fB: Zt,
        alley: D,
        off: Vt,
        glass: Ut,
        alleyPost: Kt,
        scenePass: rn,
        glow: on,
        look: $,
        tmNeutral: sn,
        pipe: un,
        burst: cn,
        layout: pn,
        textures: () => [...G, ae.l, ae.p, k.paper, k.ink, k.grain, k.fibre, j.web, j.dust, j.finger, j.burst].filter(e => !!e),
        updatePortal: vn,
        renderInner: bn,
        render(e) {
            un.renderTo(e)
        },
        dispose() {
            fn = !0, u(), I.clear(), Q.clear()
        }
    }
}
var Ot = new B;

function kt(e, t, n) {
    return n.copy(e.scX).multiplyScalar(m(t * .5, 21) * .0012 * 8 * 3).addScaledVector(e.scY, m(t * .5, 27) * 8e-4 * 8 * 3)
}

function At(e, t, n, r = e.frames.restDist) {
    t.near = .03, t.far = 200, t.position.copy(e.f.scC).addScaledVector(e.f.vn, r), t.quaternion.copy(e.frames.endQuat), t.position.add(kt(e.f, n, Ot))
}

function jt(e, t, n, r, i, a, o, s) {
    e.fk.rig.apply(t), e.fA.position.set(n, r + ct, i), e.fA.rotation.set(a, o, 0, `YXZ`);
    let c = 1 - s,
        l = 1 / Math.sqrt(Math.max(.3, c));
    e.fB.scale.set(l, c, l), e.fA.updateMatrixWorld(!0), e.fk.syncLed()
}

function Mt(e, t, n) {
    let r = e.fk.rig.idle(t * X.idleRate);
    r.antenna = 0, jt(e, r, 0, e.yIn, e.zRest - X.back, 0, 0, X.squash * Math.exp(-(n / p % 1) / .08))
}

function Nt(e, t, n, r = [0, 0]) {
    let i = e.fk.led;
    i.clear(), i.u.time.value = t, i.eyes(n, Te, 1, n === `blink` ? [0, -2] : [Math.round(r[0]), Math.round(r[1])]), i.upload()
}

function Pt(e, t, n) {
    e.alley.update(t, t, n), e.spillA.color.copy(e.alley.U.key.value), e.spillB.color.copy(e.alley.U.accent.value)
}

function Ft(e, t, n) {
    let r = e.C;
    r.glass.value = 1, r.crt.value = 1, r.curve.value = X.curve, r.ripple.value = 0, r.rippleT.value = 1, r.flash.value = 0, r.haze.value = 0, r.bright.value = X.bright, r.refr.value = 0, r.noise.value = 1, r.tint.value.copy(e.TINT), e.PU.level.value = 1, e.bodyU.level.value = 1, e.bodyU.shade.value = 1, e.key.intensity = X.key, e.hemi.intensity = X.hemi, e.rim.intensity = 0, e.spillA.intensity = 0, e.spillB.intensity = 0, e.bodyU.dot.value = X.dot * n / 1080;
    let i = e.look;
    i.time.value = t, i.impact.value = 0, i.flash.value = 0, i.ca.value = X.ca, i.saturation.value = X.saturation, e.glow.strength.value = X.bloom, e.tmNeutral.value = 0
}
export {
    qe as _, kt as a, jt as c, pt as d, Ft as f, Je as g, Ue as h, vt as i, Pt as l, Be as m, ct as n, Nt as o, Mt as p, X as r, ft as s, st as t, At as u
};