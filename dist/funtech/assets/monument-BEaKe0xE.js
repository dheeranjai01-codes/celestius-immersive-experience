import {
    $t as e,
    A as t,
    An as n,
    At as r,
    B as i,
    Bn as a,
    Bt as o,
    C as s,
    Ct as c,
    Dn as l,
    Et as u,
    Ft as d,
    H as f,
    Hn as p,
    Ht as m,
    I as h,
    J as g,
    Jt as _,
    Lt as v,
    O as y,
    Pt as b,
    St as x,
    T as S,
    Tt as C,
    U as w,
    Vn as T,
    W as E,
    Wt as D,
    Xn as O,
    Y as k,
    Yn as A,
    Z as j,
    Zn as ee,
    _n as M,
    _t as N,
    an as P,
    ar as te,
    bt as F,
    dr as ne,
    en as re,
    hn as I,
    it as L,
    j as R,
    jt as z,
    kn as B,
    ln as V,
    lr as ie,
    lt as H,
    m as ae,
    mr as oe,
    o as se,
    ot as ce,
    pn as le,
    q as ue,
    qn as de,
    rr as fe,
    sr as pe,
    st as U,
    t as me,
    tn as he,
    un as W,
    ut as ge,
    vr as G,
    vt as K,
    w as q,
    xt as _e,
    yr as ve,
    yt as ye
} from "./post-DJ5SZDIO.js";
import {
    d as be,
    u as xe
} from "./index-BSu4tWCh.js";
import {
    a as Se
} from "./target-DNdmBkK8.js";
import {
    A as J,
    B as Y,
    C as X,
    D as Ce,
    E as we,
    G as Te,
    H as Ee,
    J as De,
    L as Oe,
    N as ke,
    O as Ae,
    P as je,
    T as Me,
    W as Ne,
    a as Pe,
    c as Fe,
    d as Ie,
    f as Le,
    h as Re,
    i as ze,
    j as Be,
    k as Ve,
    l as He,
    n as Ue,
    p as We,
    q as Ge,
    r as Ke,
    s as qe,
    t as Je,
    u as Ye,
    v as Xe,
    w as Ze,
    y as Qe,
    z as $e
} from "./bronze-Cu6bvcqL.js";
var Z = {
    r: 6.6,
    ceil: 8.4,
    oculus: 1.5,
    plinth: {
        w: 5.6,
        h: 1,
        d: 1.7
    },
    scale: 1.3
};

function et(n, r) {
    let i = J(r),
        a = new l;
    a.name = `rotunda`;
    let o = Math.asin(2.6 / Z.r),
        s = n.wall(new T(Qe(new M(Z.r, Z.r, Z.ceil, 96, 1, !0, o, Math.PI * 2 - 2 * o)), n.wallM), 2631724, Z.ceil);
    s.position.y = Z.ceil / 2, s.receiveShadow = !0, a.add(s);
    let d = new T(new te(Z.oculus, Z.r + .05, 96, 1), n.ceil);
    d.rotation.x = Math.PI / 2, d.position.y = Z.ceil, a.add(d);
    let f = [1, 2, 3, 4].map(e => new oe(Z.oculus + (Z.r - Z.oculus) * e / 4.6, .06, 6, 96));
    for (let e of f) {
        let t = new T(e, n.ceil);
        t.rotation.x = Math.PI / 2, t.position.y = Z.ceil - .06, a.add(t)
    }
    let p = new he({
        color: 789518,
        roughness: .8
    });
    p.name = `monument-shaft`;
    let m = new T(Qe(new M(Z.oculus, Z.oculus, 1.2, 64, 1, !0)), p);
    m.position.y = Z.ceil + .6, m.receiveShadow = !0, a.add(m);
    let _ = {
            time: x(0),
            storm: x(0),
            flash: x(0),
            white: x(0),
            glow: x(1)
        },
        v = new e;
    v.name = `monument-sky`, v.colorNode = q(() => {
        let e = c().sub(.5),
            n = g(e).mul(2),
            r = j(u(.3, .38, .55), u(.08, .1, .17), n).mul(_.glow).toVar(),
            a = E(c().mul(240));
        r.addAssign(u(.8, .85, 1).mul(F(.997, se(a))).mul(se(a.add(3.1))).mul(1.5).mul(w(1).sub(_.storm)));
        let o = t(e.y, e.x).add(_.time.mul(.25).mul(_.storm)).add(n.mul(1.5)),
            s = C(h(o), K(o)).mul(n).mul(3).add(C(_.time.mul(.12), 0)),
            l = i.fbm(s.mul(1.3)).mul(.7).add(i.fbm(s.mul(3.1).add(5)).mul(.3)),
            d = j(u(.03, .035, .05), u(.3, .32, .4), l);
        return r.assign(j(r, d, ye(0, 1, _.storm).mul(ye(.35, .6, l.add(.25))))), r.addAssign(u(.75, .85, 1).mul(_.flash).mul(w(.4).add(ye(.45, .8, l).mul(1.6)))), j(r, u(4), _.white)
    })();
    let y = new T(new le(Z.oculus * 1.6, 64), v);
    y.rotation.x = Math.PI / 2, y.position.y = Z.ceil + 1.2, a.add(y);
    let b = new he({
        roughness: .5,
        metalness: 0
    });
    b.name = `monument-stone`;
    let S = i.fbm3(H.mul(3)).mul(.5).add(i.fbm3(H.mul(17)).mul(.3)).add(i.vn3(H.mul(90)).mul(.2));
    b.colorNode = u(.0116, .0116, .0137).mul(S.mul(.45).add(.75)).mul(F(.985, se(E(H.xz.add(H.y).mul(300)))).mul(.5).add(1)), b.roughnessNode = w(.4).add(i.fbm3(H.mul(6)).mul(.35));
    let {
        w: D,
        h: O,
        d: k
    } = Z.plinth, A = new T(new Ve(D, O, k, 4, .02), b);
    A.position.y = O / 2, A.receiveShadow = !0, a.add(A);
    let ee = new T(new Ve(D + .5, .14, k + .5, 3, .015), b);
    return ee.position.y = .07, ee.receiveShadow = !0, a.add(ee), {
        group: a,
        sky: y,
        U: _,
        stone: b,
        dispose() {
            a.traverse(e => {
                let t = e;
                t.geometry && t.geometry.dispose()
            });
            for (let e of [p, v, b]) e.dispose()
        }
    }
}
var tt = `WE ARE FUNTECH.`,
    nt = {
        height: .27,
        res: 180,
        prefixes: [`WE`, `WE ARE`, `WE ARE FUN`, `WE ARE FUNTECH.`]
    };

function rt(e, t) {
    let n = Ce(tt, { ...nt,
            depth: .03,
            bevel: .006
        }),
        r = t ? new re({
            color: 16762218,
            metalness: 1,
            roughness: .2,
            clearcoat: .3
        }) : new he({
            color: 16762218,
            metalness: 1,
            roughness: .22
        });
    r.name = `monument-letters`, r.userData.buildAsync = !0, e && (r.envMap = e, r.envMapIntensity = 1.2);
    let i = {
            sweep: x(-10),
            lit: x(new ve(-99, -99, 0, 0))
        },
        a = H,
        o = F(a.x, i.lit.x),
        s = o.mul(F(i.lit.y, a.x));
    r.emissiveNode = u(1, .82, .5).mul(f(ge(a.x.add(a.y.mul(.5)).sub(i.sweep).div(.08), 2).negate())).mul(5).add(u(1, .7, .32).mul(o.mul(i.lit.w).add(s.mul(i.lit.z))));
    let c = new T(n.geo, r),
        l = Z.plinth.w,
        d = Math.min(1, (l - .55) / n.width);
    c.scale.setScalar(d), c.position.set(0, Z.plinth.h * .58, Z.plinth.d / 2 + .002);
    let p = [n.start, ...n.marks].map(e => e * d),
        m = Ze((e, t) => {
            e.clearRect(0, 0, t, 110), e.fillStyle = `#b89a62`, e.font = Me(X.body(600), 64), e.letterSpacing = `22px`, e.textAlign = `center`, e.fillText(`FUNTECH — CREATIVE AGENCY — TOKYO — MMXXVI`, t / 2 + 11, 78)
        }, 4096, 110),
        h = new he({
            map: m.texture,
            transparent: !0,
            metalness: .6,
            roughness: .4
        });
    h.name = `monument-subtitle`;
    let g = new T(new A(l - .8, (l - .8) / m.aspect), h);
    return g.position.set(0, Z.plinth.h * .26, Z.plinth.d / 2 + .003), {
        mesh: c,
        subMesh: g,
        U: i,
        words: p,
        lettersY: Z.plinth.h * .58,
        dispose() {
            n.geo.dispose(), r.dispose(), m.texture.dispose(), g.geometry.dispose(), h.dispose()
        }
    }
}
var it = () => new Promise(e => requestAnimationFrame(() => e())),
    at = u(.95, 1.25, .9);

function ot(e, t) {
    let n = [-10];
    for (let r = 1; r < 8; r++) n.push(e + (t - e) * r / 8);
    return n.push(10), {
        lo: Y([, , , , ].fill(10), `float`),
        hi: Y([, , , , ].fill(-10), `float`),
        gLo: Y([, , , , ].fill(0), `float`),
        gHi: Y([, , , , ].fill(0), `float`),
        glow: x(0),
        frontT: x(0),
        bnd: Y(n, `float`),
        settle: Y(Array(8).fill(0), `float`),
        jit: Y(Array(8).fill(0), `float`),
        burst: Y(Array(8).fill(0), `float`),
        arc: x(0),
        arcT: x(0),
        hot: x(0),
        strike: x(new G),
        tau: x(-1),
        fx0: e,
        fx1: t
    }
}

function st(e, t, n) {
    return ye(e.bnd.element(n).sub(.03), e.bnd.element(n).add(.03), t).sub(ye(e.bnd.element(n + 1).sub(.03), e.bnd.element(n + 1).add(.03), t))
}

function ct(e, t, n, r, a, o) {
    let l = J(a),
        {
            gw: d,
            gh: p,
            n: m
        } = e,
        h = o.lowres ? 2 : 1,
        _ = new Float32Array(m * 3),
        v = new Float32Array(m * 2),
        b = new Float32Array(m);
    for (let t = 0; t < m; t++) _[t * 3] = e.x[t], _[t * 3 + 1] = e.y[t], _[t * 3 + 2] = e.hF[t], v[t * 2] = e.u[t], v[t * 2 + 1] = e.v[t], b[t] = e.hU[t];
    let x = new Uint32Array(Math.ceil(d / h) * Math.ceil(p / h) * 6),
        E = 0,
        D = (t, n) => t < d && n < p ? e.at[n * d + t] : -1;
    for (let t = 0; t + h < p; t += h)
        for (let n = 0; n + h < d; n += h) {
            let r = D(n, t),
                i = D(n + h, t),
                a = D(n, t + h),
                o = D(n + h, t + h);
            if (r < 0 || i < 0 || a < 0 || o < 0) continue;
            let s = e.vF[r] && e.vF[i] && e.vF[a] && e.vF[o],
                c = e.vU[r] && e.vU[i] && e.vU[a] && e.vU[o];
            (s || c) && (x[E++] = r, x[E++] = a, x[E++] = i, x[E++] = i, x[E++] = a, x[E++] = o)
        }
    let O = new W;
    O.setAttribute(`position`, new V(_, 3)), O.setAttribute(`uv`, new V(v, 2)), O.setAttribute(`hU`, new V(b, 1)), O.setIndex(new V(x.slice(0, E), 1));
    let A = new Float32Array(m * 3);
    for (let e = 2; e < A.length; e += 3) A[e] = 1;
    O.setAttribute(`normal`, new V(A, 3));
    let {
        planeW: ee,
        planeH: M,
        center: N
    } = t.up;
    O.boundingSphere = new ie(new G(N[0], N[1], 0), Math.hypot(ee, M) / 2 + .5);
    let P = o.detail ? new re : new he;
    P.name = `monument-statue`, P.userData.buildAsync = !0, o.env && (P.envMap = o.env, P.envMapIntensity = .75);
    let te = R(`hU`, `float`),
        ne = e => l.vn(C(e.mul(7), r.frontT.mul(2.3))).sub(.5).mul(.09).add(l.vn(C(e.mul(29), r.frontT.mul(7))).sub(.5).mul(.03)),
        I = e => {
            let t = w(0);
            for (let n = 0; n < 4; n++) t = k(t, F(r.lo.element(n), e).mul(F(e, r.hi.element(n))));
            return t
        };
    P.positionNode = q(() => {
        let e = ce.toVar(),
            t = I(e.x),
            n = w(0).toVar(),
            i = w(0).toVar();
        for (let t = 0; t < 8; t++) {
            let a = st(r, e.x, t);
            n.addAssign(a.mul(r.settle.element(t))), i.addAssign(a.mul(r.jit.element(t)))
        }
        return e.z.assign(j(e.z, te, t).add(t.mul(n.add(i.mul(K(e.y.mul(90).add(e.x.mul(40)))))))), e
    })();
    let z = w(1).toVar(`moOcc`),
        B = w(.5).toVar(`moRough`),
        H = w(1).toVar(`moMetal`),
        ae = u(0).toVar(`moEmit`);
    P.colorNode = q(() => {
        let e = c().toVar(),
            t = U.toVar(),
            i = t.x.sub(ne(t.y)).toVar(),
            a = I(i).toVar(),
            d = _e(n.F, e).toVar(),
            p = _e(n.U, e).toVar(),
            m = _e(n.X, e).toVar(),
            h = j(m.b, _e(n.A, e).r, a);
        S(h.lessThan(.5), () => {
            s()
        });
        let _ = j(m.r, m.g, a).toVar(),
            v = j(d.b, p.b, a).toVar(),
            b = Je(l, e, _, v, o.stock, t);
        B.assign(b.rough), H.assign(b.metal), z.assign(Ue(v, _));
        let x = w(0).toVar();
        for (let e = 0; e < 8; e++) x.addAssign(st(r, t.x, e).mul(r.burst.element(e)));
        let C = at.mul(l.arcs(t, r.arcT, 26)).mul(r.arc.add(x)).mul(5).toVar();
        S(r.glow.greaterThan(0), () => {
            let e = w(0).toVar(),
                n = w(0).toVar();
            for (let t = 0; t < 4; t++) {
                let a = y(i.sub(r.lo.element(t))),
                    o = y(i.sub(r.hi.element(t)));
                e.addAssign(f(a.negate().div(.018)).mul(r.gLo.element(t)).add(f(o.negate().div(.018)).mul(r.gHi.element(t)))), n.addAssign(f(a.negate().div(.1)).mul(r.gLo.element(t)).add(f(o.negate().div(.1)).mul(r.gHi.element(t))))
            }
            C.addAssign(u(.85, .95, 1).mul(e).mul(6).add(at.mul(l.arcs(t, r.arcT.mul(1.3), 26)).mul(n).mul(8)))
        });
        let T = g(t.sub(r.strike));
        return C.addAssign(u(1, .95, .85).mul(f(T.negate().div(.12))).mul(8).add(u(1, .45, .12).mul(f(T.negate().div(.5))).mul(1.5)).mul(r.hot)), ae.assign(C), b.col.mul(j(w(1), z, .35))
    })(), P.roughnessNode = B, P.metalnessNode = H, P.emissiveNode = ae, P.aoNode = z, P.normalNode = q(() => {
        let e = c(),
            t = U,
            r = I(t.x.sub(ne(t.y))),
            a = _e(n.F, e).rg.mul(2).sub(1),
            o = _e(n.U, e).rg.mul(2).sub(1),
            s = j(a, o, r),
            l = u(s, Oe(k(w(0), w(1).sub(i(s, s)))));
        return L($e(l))
    })();
    let oe = new T(O, P);
    return oe.frustumCulled = !1, {
        mesh: oe,
        geo: O,
        mat: P,
        dispose() {
            O.dispose(), P.dispose()
        }
    }
}
async function lt(e, t, n, r, a) {
    let o = J(r),
        {
            gw: s,
            gh: l
        } = e,
        d = .24,
        p = Ye(1717),
        m = new Map,
        _ = (e, t) => {
            let n = e * 1e3 + t,
                r = m.get(n);
            return r || (r = [(e + .15 + .7 * p()) * d, (t + .15 + .7 * p()) * d], m.set(n, r)), r
        },
        v = (e, t) => {
            let n = Math.floor(e / d),
                r = Math.floor(t / d),
                i = 1e9,
                a = 0;
            for (let o = -1; o <= 1; o++)
                for (let s = -1; s <= 1; s++) {
                    let [c, l] = _(n + o, r + s), u = (c - e) ** 2 + (l - t) ** 2;
                    u < i && (i = u, a = (n + o) * 1e3 + (r + s))
                }
            return a
        },
        y = a.stride,
        b = new Int32Array(Math.ceil(s / y) * Math.ceil(l / y) * 6),
        x = 0,
        S = (t, n) => t < s && n < l ? e.at[n * s + t] : -1;
    for (let t = 0; t + y < l; t += y)
        for (let n = 0; n + y < s; n += y) {
            let r = S(n, t),
                i = S(n + y, t),
                a = S(n, t + y),
                o = S(n + y, t + y);
            r < 0 || i < 0 || a < 0 || o < 0 || !(e.vU[r] && e.vU[i] && e.vU[a] && e.vU[o]) || (b[x * 3] = r, b[x * 3 + 1] = a, b[x * 3 + 2] = i, x++, b[x * 3] = i, b[x * 3 + 1] = a, b[x * 3 + 2] = o, x++)
        }
    let C = new Int32Array(x),
        E = 12e3;
    for (let t = 0; t < x; t += E) {
        if (await it(), a.cancelled ? .()) return null;
        for (let n = t; n < Math.min(x, t + E); n++) {
            let t = b[n * 3],
                r = b[n * 3 + 1],
                i = b[n * 3 + 2];
            C[n] = v((e.x[t] + e.x[r] + e.x[i]) / 3, (e.y[t] + e.y[r] + e.y[i]) / 3)
        }
    }
    if (await it(), a.cancelled ? .()) return null;
    let D = new Map,
        O = new Int32Array(e.n).fill(-2);
    for (let t = 0; t < x; t++) {
        let n = C[t],
            r = D.get(n);
        r || (r = [0, 0, 0, 0], D.set(n, r));
        for (let i = 0; i < 3; i++) {
            let a = b[t * 3 + i];
            r[0] += e.x[a], r[1] += e.y[a], r[2] += e.hU[a], r[3]++;
            let o = O[a];
            o === -2 ? O[a] = n : o !== n && (O[a] = -1)
        }
    }
    let A = Ye(99),
        ee = new Map;
    for (let e of D.keys()) ee.set(e, [A(), A(), A(), A()]);
    if (await it(), a.cancelled ? .()) return null;
    let M = x * 3,
        P = new Float32Array(M * 3),
        te = new Float32Array(M * 2),
        F = new Float32Array(M * 3),
        ne = new Float32Array(M * 4),
        re = new Float32Array(M),
        I = new Float32Array(M * 3);
    for (let t = 0, n = 0; t < x; t++) {
        let r = C[t],
            i = D.get(r),
            a = ee.get(r);
        for (let r = 0; r < 3; r++, n++) {
            let o = b[t * 3 + r];
            P[n * 3] = e.x[o], P[n * 3 + 1] = e.y[o], P[n * 3 + 2] = e.hU[o], te[n * 2] = e.u[o], te[n * 2 + 1] = e.v[o], F[n * 3] = i[0] / i[3], F[n * 3 + 1] = i[1] / i[3], F[n * 3 + 2] = i[2] / i[3], ne[n * 4] = a[0], ne[n * 4 + 1] = a[1], ne[n * 4 + 2] = a[2], ne[n * 4 + 3] = a[3], re[n] = +(O[o] === -1)
        }
        let o = t * 9,
            s = o + 3,
            c = o + 6,
            l = P[c] - P[s],
            u = P[c + 1] - P[s + 1],
            d = P[c + 2] - P[s + 2],
            f = P[o] - P[s],
            p = P[o + 1] - P[s + 1],
            m = P[o + 2] - P[s + 2],
            h = u * m - d * p,
            g = d * f - l * m,
            _ = l * p - u * f,
            v = Math.hypot(h, g, _) || 1;
        h /= v, g /= v, _ /= v;
        for (let e = 0; e < 3; e++) I[o + e * 3] = h, I[o + e * 3 + 1] = g, I[o + e * 3 + 2] = _
    }
    let z = new W;
    z.setAttribute(`position`, new V(P, 3)), z.setAttribute(`normal`, new V(I, 3)), z.setAttribute(`uv`, new V(te, 2)), z.setAttribute(`aC`, new V(F, 3)), z.setAttribute(`aR`, new V(ne, 4)), z.setAttribute(`aB`, new V(re, 1)), z.boundingSphere = new ie(new G(0, 1, 0), 60);
    let B = new he({
        side: 2
    });
    B.name = `monument-debris`, B.userData.buildAsync = !0, a.env && (B.envMap = a.env, B.envMapIntensity = .75);
    let H = R(`aC`, `vec3`),
        ae = R(`aR`, `vec4`),
        oe = R(`aB`, `float`),
        se = (e, t, n) => {
            let r = L(t),
                a = h(n),
                o = K(n);
            return e.mul(a).add(r.cross(e).mul(o)).add(r.mul(i(r, e)).mul(w(1).sub(a)))
        };
    B.positionNode = q(() => {
        let e = k(n.tau, 0),
            t = L(H.sub(n.strike).mul(u(1, .7, 1)).add(u(0, .25, .55)).add(ae.xyz.sub(.5).mul(.7))),
            r = w(1.4).add(ae.w.mul(3.4)),
            i = t.mul(r).mul(e).add(u(0, -3.2, 0).mul(e).mul(e)),
            a = ae.xyz.sub(.5).add(u(.001)),
            o = w(3).add(ae.w.mul(9)).mul(e);
        return H.add(se(ce.sub(H), a, o)).add(i)
    })(), B.normalNode = q(() => {
        let e = k(n.tau, 0),
            t = ae.xyz.sub(.5).add(u(.001)),
            r = w(3).add(ae.w.mul(9)).mul(e);
        return L($e(se(L(R(`normal`, `vec3`)), t, r)))
    })();
    let le = u(0).toVar(`dbEmit`);
    B.colorNode = q(() => {
        let e = c().toVar(),
            r = _e(t.U, e).toVar(),
            i = _e(t.X, e).toVar(),
            s = ce,
            l = Je(o, e, i.g, r.b, a.stock, s),
            d = g(s.sub(n.strike)),
            p = ye(.35, 1, oe).mul(w(1).sub(ye(n.tau.mul(6).sub(.1), n.tau.mul(6).add(.1), d.sub(.02)))),
            m = j(u(1, .4, .08), u(1, .9, .6), p).mul(p).mul(6).mul(f(k(n.tau.sub(.05), 0).mul(-2.5))).toVar();
        return m.addAssign(u(1, .95, .85).mul(f(d.negate().div(.12))).mul(8).add(u(1, .45, .12).mul(f(d.negate().div(.5))).mul(1.5)).mul(n.hot)), m.addAssign(at.mul(o.arcs(s, n.arcT, 26)).mul(n.arc).mul(5)), le.assign(m), N(ke, l.col, l.col.mul(.35))
    })(), B.emissiveNode = le, B.roughnessNode = w(.45), B.metalnessNode = w(.85);
    let ue = new T(z, B);
    return ue.frustumCulled = !1, ue.visible = !1, {
        mesh: ue,
        dispose() {
            z.dispose(), B.dispose()
        }
    }
}

function ut(e, t, r = 5) {
    let a = [],
        o = [],
        s = Ye(4242);
    for (let t = 0; t < e.n; t += r) e.vU[t] && (a.push(e.x[t], e.y[t], e.hU[t]), o.push(s(), s(), s(), s()));
    let l = a.length / 3,
        d = new n(new Float32Array(a), 3),
        p = new n(new Float32Array(o), 4),
        m = new P({
            transparent: !0,
            depthWrite: !1,
            blending: 2
        });
    m.name = `monument-embers`;
    let h = je(d),
        g = je(p),
        _ = k(t.tau, 0),
        v = L(h.sub(t.strike).mul(u(1, .7, 1)).add(u(0, .35, .6)).add(g.xyz.sub(.5).mul(1.1))),
        y = w(1.2).add(g.w.mul(4.5));
    m.positionNode = h.add(v.mul(y).mul(_)).add(u(0, -2.2, 0).mul(_).mul(_));
    let b = w(.6).add(g.x.mul(1.4)),
        x = w(1).sub(ye(b.mul(.4), b, _)).mul(F(1e-4, _));
    m.scaleNode = w(.012).add(g.y.mul(.018)).mul(x);
    let S = c().sub(.5).mul(2);
    m.colorNode = j(u(1, .45, .12), u(1, .85, .55), g.z).mul(f(i(S, S).mul(-3.5))).mul(x).mul(3);
    let C = Le(m, l);
    return C.visible = !1, {
        object: C,
        dispose() {
            m.dispose(), C.geometry.dispose()
        }
    }
}

function dt(e, t, r, a, o = 220) {
    let s = Ye(31),
        l = [],
        d = [],
        {
            planeW: p,
            planeH: m,
            center: h
        } = t.up,
        g = (t, n) => {
            let r = Math.round(((t - h[0]) / p + .5) * (e.gw - 1)),
                i = Math.round((.5 - (n - h[1]) / m) * (e.gh - 1));
            if (r < 0 || i < 0 || r >= e.gw || i >= e.gh) return null;
            let a = e.at[i * e.gw + r];
            return a >= 0 && e.vU[a] ? e.hU[a] : null
        };
    for (let e = 0; e < 8; e++) {
        let t = r + (a - r) * e / 8,
            n = r + (a - r) * (e + 1) / 8,
            i = 0,
            c = 0;
        for (; i < o && c++ < o * 6;) {
            let r = t + (n - t) * s(),
                a = 1 + .85 * s(),
                o = g(r, a);
            o !== null && (l.push(r, a, o + .02), d.push(e, s(), s(), s()), i++)
        }
    }
    let _ = l.length / 3,
        v = new n(new Float32Array(l), 3),
        y = new n(new Float32Array(d), 4),
        b = Y(Array(8).fill(-100), `float`),
        S = x(0),
        C = new P({
            transparent: !0,
            depthWrite: !1,
            blending: 2
        });
    C.name = `monument-dust`;
    let T = je(v),
        E = je(y),
        D = b.element(ue(E.x)).add(E.y.mul(.18)),
        O = S.sub(D),
        A = w(1.2).add(E.z.mul(1.4)),
        j = F(0, O).mul(w(1).sub(F(A, O))),
        ee = w(.9).add(E.w.mul(.8)).mul(O.sub(w(1).sub(f(O.mul(-4))).div(4)));
    C.positionNode = u(T.x.add(K(O.mul(5).add(E.z.mul(6.28))).mul(.03).mul(O)), k(T.y.sub(ee), w(.02)), T.z.add(O.mul(.08).mul(E.w))), C.scaleNode = w(.006).mul(j);
    let M = c().sub(.5).mul(2);
    C.colorNode = u(.55, .47, .36).mul(w(1).sub(O.div(A))).mul(E.w.mul(.8).add(.6)).mul(f(i(M, M).mul(-3))).mul(j).mul(1.4);
    let N = Le(C, _);
    return {
        object: N,
        ev: b,
        time: S,
        dispose() {
            C.dispose(), N.geometry.dispose()
        }
    }
}
var ft = [Ke],
    Q = (e = 0, t = 0, n = 0) => new G(e, t, n),
    $ = -1e9,
    pt = () => new Promise(e => requestAnimationFrame(() => e())),
    mt = 5,
    ht = 4,
    gt = [
        [Q(-1.566, 1.648, -.037), Q(-1.129, 1.694, -.165)],
        [Q(-.827, 1.498, -.098), Q(-.53, 1.768, -.266)],
        [Q(.033, 1.61, -.199), Q(.311, 1.74, -.248), Q(.59, 1.573, -.182), Q(.813, 1.721, -.253)],
        [Q(1.055, 1.563, -.18), Q(1.264, 1.675, -.161), Q(1.473, 1.585, -.066)]
    ],
    _t = [0, 1, 2, 3],
    vt = [gt[0][0], gt[1][1], gt[2][1], gt[3][1]],
    yt = {
        dx: -140,
        dy: -93,
        flip: !0
    },
    bt = {
        dx: 30,
        dy: -120,
        attach: `edge`
    },
    xt = xe(`クリックで落雷`, `Click for lightning`),
    St = xe(`タップで落雷`, `Tap for lightning`),
    Ct = {
        label: xe(`ドラッグで回り込む`, `Drag to circle around`),
        touchLabel: xe(`横にドラッグで回り込む`, `Drag sideways to circle around`)
    },
    wt = e => ({
        kind: `count`,
        text: xt,
        touchText: St,
        count: [e, mt],
        unit: `回`,
        progress: e / mt,
        marks: `bolt`,
        lead: yt,
        leadP: bt,
        move: `glide`
    }),
    Tt = 6.5;

function Et(e) {
    let t, n, i, s = null,
        c, u, f = null,
        h = null,
        g = null,
        y = null,
        x = null,
        S = null,
        C = null,
        w = null,
        E = null,
        k = null,
        A = null,
        j = null,
        M = null,
        N, P = null,
        te = null,
        F = null,
        re = [],
        L, R, V, ie, H = [],
        oe, se, ce, ue = !1,
        U = !1,
        he = [],
        W = 0,
        ge = 0,
        G = 0,
        K = 0,
        q = 0,
        _e = 0,
        ve = Array(8).fill($),
        ye = [],
        xe = Array.from({
            length: 4
        }, () => ({
            at: $,
            x: 0,
            lo: 10,
            hi: -10
        })),
        J = $,
        Y = !1,
        X = $,
        Ce = !1,
        Oe = 2,
        ke = $,
        je = 0,
        Me = 1,
        Le = !1,
        Ve = [],
        Ue = 0,
        Ke = 0,
        Je = 0,
        Ze = $,
        Qe = 0,
        $e = 0,
        it = 0,
        at = [],
        st = [],
        ft = () => Z.plinth.h + 1.55 * Z.scale,
        yt = Q(),
        bt = [0, 0],
        xt = Q(),
        St = [0, 0],
        Et = ``,
        Dt = () => _t.filter(e => !ye.some(t => t.pair === e));

    function Ot() {
        if (!N || !M) return;
        let e = Dt()[0];
        yt.copy(e === void 0 ? At : vt[e]), N.localToWorld(yt);
        let n = Se(t.stage, i, yt, bt),
            r = kt(),
            a = e => Math.round(e / 2),
            o = `${Ue}|${n?`${a(n[0])},${a(n[1])}`:``}|${r?r.map(a).join(`,`):``}`;
        o !== Et && (Et = o, t.gate({ ...wt(Ue),
            target: n ? [n[0], n[1]] : null,
            spot: e ? ? `strike`,
            keepClear: r ? [r] : void 0
        }))
    }

    function kt() {
        if (!M) return null;
        let e = 1 / 0,
            n = 1 / 0,
            r = -1 / 0,
            a = -1 / 0;
        for (let o = 0; o < 8; o++) xt.set(o & 1 ? M.fx1 - .1 : M.fx0 + .1, o & 2 ? 1.84 : .35, o & 4 ? .1 : -.3), N.localToWorld(xt), Se(t.stage, i, xt, St) && (e = Math.min(e, St[0]), n = Math.min(n, St[1]), r = Math.max(r, St[0]), a = Math.max(a, St[1]));
        return r > e ? [e, n, r, a] : null
    }
    let At = Q(.1, 1.75, .15),
        jt = {
            L: [{
                pos: Q(.55, .66, 6.3),
                look: Q(0, 1.75, 0),
                fov: 42
            }, {
                pos: Q(-1.55, .5, 4.3),
                look: Q(-.1, 2.45, 0),
                fov: 40
            }, {
                pos: Q(.9, .42, 5.3),
                look: Q(0, 4.7, 0),
                fov: 56
            }],
            P: [{
                pos: Q(.4, .95, 7.9),
                look: Q(0, 1.75, 0),
                fov: 62
            }, {
                pos: Q(-1.2, .6, 6.4),
                look: Q(-.1, 2.6, 0),
                fov: 64
            }, {
                pos: Q(.6, .45, 6.6),
                look: Q(0, 5.4, 0),
                fov: 72
            }]
        },
        Mt = Q(),
        Nt = Q(),
        Pt = new a;
    new ee;

    function Ft(e) {
        let n = ce ? .portrait ? jt.P : jt.L,
            a = b($e, 0, ht) / ht * 2,
            s = Math.min(1, Math.floor(a)),
            c = a - s,
            l = n[s],
            u = n[s + 1];
        Mt.lerpVectors(l.pos, u.pos, c), Nt.lerpVectors(l.look, u.look, c);
        let d = o(l.fov, u.fov, c);
        if (ce ? .portrait && a < 1) {
            let e = 2 * Math.atan(2.4 / (Math.max(1, Mt.z - .87) * Math.max(.3, ce.aspect))) / r;
            d = Math.max(d, o(e, d, c))
        }
        let f = W - X;
        if (X > $ / 2 && f > 0) {
            let e = z.out(b(f / (_ * 1.6)));
            Mt.lerp(Q(Mt.x * .8, Mt.y + .15, Mt.z * .78), e * .9);
            let t = D(_ * 1.6, _ * 3.6, f);
            Nt.y = o(Nt.y, 11, t), d = o(d, d + 14, t)
        }
        Mt.applyAxisAngle(Q(0, 1, 0), K), i.position.copy(Mt), i.quaternion.setFromRotationMatrix(Pt.lookAt(Mt, Nt, Q(0, 1, 0)));
        let p = .006;
        i.translateX(v(W * .7, 3) * p), i.translateY(v(W * .7, 8) * p);
        let h = v(W * .5, 11) * .004,
            g = 0,
            y = 0;
        if (!t.reducedMotion) {
            for (let e = 0; e < 8; e++) g += m(W, ve[e], .0045, 11, 12);
            for (let e of at) h += m(W, e.at, .014, 6, 9), g += m(W, e.at + .004, .01, 7, 13);
            X > $ / 2 && (h += m(W, X, .06, 4.5, 9), g += m(W, X + .004, .05, 5, 13), y += m(W, X + .008, .035, 5, 7))
        }
        i.rotateY(y), i.rotateZ(h), i.rotateX(g), i.fov = d, i.aspect = ce ? .aspect ? ? 16 / 9, i.near = .05, i.far = 80, i.updateProjectionMatrix(), i.updateMatrixWorld()
    }
    let It = e => {
        let t = M.fx0,
            n = M.fx1,
            r = e => t + (n - t) * e / 8;
        return [e === 0 ? t - .3 : r(2 * e), e === 3 ? n + .3 : r(2 * e + 2)]
    };

    function Lt(e, t) {
        let n = xe[e];
        n.at = W, n.x = t, n.lo = t, n.hi = t;
        let r = t < M.fx0 + (M.fx1 - M.fx0) * (2 * e + 1) / 8 ? 2 * e : 2 * e + 1;
        for (let t of [2 * e, 2 * e + 1]) ve[t] = W + .03 + (t === r ? 0 : .07), C && (C.ev.array[t] = ve[t])
    }

    function Rt(e) {
        if (!M) return;
        let t = M.lo.array,
            n = M.hi.array,
            r = M.gLo.array,
            i = M.gHi.array;
        M.frontT.value = W;
        let a = 0;
        for (let e = 0; e < 8; e++) {
            let t = W - ve[e];
            ve[e] > $ / 2 && t >= 0 && t < .35 && (a = Math.max(a, Math.exp(-t / .12)))
        }
        let o = 0,
            s = e => e >= 0 && e < 4 && xe[e].at > $ / 2;
        for (let c = 0; c < 4; c++) {
            let l = xe[c];
            if (!s(c)) {
                t[c] = 10, n[c] = -10, r[c] = i[c] = 0;
                continue
            }
            let [u, f] = It(c);
            l.lo = d(l.lo, u, 13, e), l.hi = d(l.hi, f, 13, e), t[c] = l.lo, n[c] = l.hi;
            let p = Math.abs(l.lo - u) > .004,
                m = Math.abs(l.hi - f) > .004;
            r[c] = p ? .95 + 1.6 * a : c > 0 && !s(c - 1) ? .35 : 0, i[c] = m ? .95 + 1.6 * a : c < 3 && !s(c + 1) ? .35 : 0, o = Math.max(o, r[c], i[c])
        }
        M.glow.value = o;
        let c = M.settle.array,
            l = M.jit.array,
            u = M.burst.array;
        for (let e = 0; e < 8; e++) {
            let t = W - ve[e],
                n = ve[e] > $ / 2 && t >= 0;
            c[e] = n ? .035 * Math.exp(-t * 3.2) * Math.cos(t * 14) : 0, l[e] = n && t < .3 ? .0035 * Math.sin(2 * Math.PI * 38 * t) * Math.exp(-t / .08) : 0, u[e] = n ? 2.4 * Math.exp(-t / .18) : 0
        }
        let f = D(.3, 1, G),
            p = .7 + .3 * Math.sin(W * 67) * Math.sin(W * 23);
        M.arc.value = X > $ / 2 ? 0 : f * f * 1.3 * p + .25 * je, M.arcT.value = W
    }

    function zt(e) {
        if (!h) return;
        let t = D(.15, 1, G);
        if (h.U.time.value = W, h.U.storm.value = t, t > .35 && W > Oe && X < $ / 2) {
            let e = Ye(Math.floor(W * 100));
            ke = W, je = .3 + .7 * t * e(), Me = Math.floor(e() * 1e3), Le = e() < .5 * t, Oe = W + 1.1 + e() * 2.2 * (1.3 - t)
        }
        let n = W - ke,
            r = n >= 0 && n < .35 ? je * Math.exp(-n / .07) * (.6 + .4 * (Math.floor(n * 45) % 2)) : 0;
        if (je = r, Le && n >= 0 && n < .18) {
            let t = Ye(Me),
                i = Q((t() - .5) * 6, Z.ceil + 5 + t() * 4, -2 - t() * 3),
                a = Q((t() - .5) * 2.4, Z.ceil + 1.6, (t() - .5) * 1.5);
            e.push({
                a: i,
                b: a,
                seed: Me * 13 + Math.floor(n * 40),
                amp: r,
                width: .02,
                jag: .12,
                branch: .7
            })
        }
        return r
    }

    function Bt(e = null) {
        !ue || Ue >= mt || (Ue++, Ue < mt && ye.push(Vt(e)), Ot(), W < Ze || Je > 0 ? Je++ : Ht())
    }

    function Vt(e) {
        let n = Dt();
        if (!e) return {
            pair: n[0],
            crown: vt[n[0]]
        };
        let r = {
                pair: n[0],
                crown: vt[n[0]]
            },
            a = 1 / 0;
        for (let o of n)
            for (let s of gt[o]) {
                if (N.localToWorld(xt.copy(s)), !Se(t.stage, i, xt, St)) continue;
                let [c, l] = t.stage.toCss(St[0], St[1]), u = Math.hypot(c - e[0], l - e[1]) - (s === vt[n[0]] ? 48 : 0);
                u < a && (a = u, r = {
                    pair: o,
                    crown: s
                })
            }
        return r
    }

    function Ht() {
        Ke++;
        let e = Ke;
        if (e >= mt) {
            Gt(), Ze = X;
            return
        }
        let n = t.audio.play([`zap_small`], {
            quantize: `beat`,
            minGap: .05
        });
        t.audio.play([`sub_hit`], {
            quantize: `beat`,
            gain: .7,
            minGap: .05
        });
        let r = n > 0 ? Math.max(0, n - ge) : _ - ge / _ % 1 * _;
        Ze = W + r, st.push({
            at: W + r,
            fn: () => {
                Ut(e), Je > 0 && (Je--, Ht())
            }
        })
    }

    function Ut(e) {
        if (!M) return;
        Qe = Math.max(Qe, e);
        let t = ye[e - 1] ? ? {
                pair: _t[e - 1],
                crown: vt[_t[e - 1]]
            },
            n = Q(t.crown.x, t.crown.y + .04, .18);
        Lt(t.pair, t.crown.x), at.push({
            at: W,
            p: n,
            seed: 131 * e + 7
        });
        let r = N;
        Ve.push({
            t0: W,
            n: 160,
            speed: 3.2,
            seed: 500 + e,
            life: .55,
            color: new I(.85, .95, 1),
            origin: (e, t) => {
                let i = n.clone().add(Q((t() - .5) * .5, (t() - .5) * .25, .05));
                return r.localToWorld(i), {
                    p: i,
                    n: Q((t() - .5) * 1.4, .4 + t(), .7),
                    delay: t() * .04
                }
            }
        })
    }

    function Wt(e) {
        if (!h) return 0;
        let t = 0;
        for (let n = at.length - 1; n >= 0; n--) {
            let r = at[n],
                i = W - r.at;
            if (i > 1) {
                at.splice(n, 1);
                continue
            }
            let a = i < 0 ? 0 : Math.exp(-i / .12) * (.55 + .45 * (Math.floor(i * 40) % 2));
            if (t = Math.max(t, a), a > .02 && i < .4) {
                let t = r.p.clone();
                N.localToWorld(t);
                let n = r.seed + Math.floor(i * 40) * 7;
                e.push({
                    a: Q(t.x * .3 - .3, Z.ceil + 12, -1),
                    b: t,
                    seed: n,
                    amp: a * 2.2,
                    width: .05,
                    jag: .08,
                    branch: .8
                })
            }
        }
        return t
    }

    function Gt() {
        if (X > $ / 2 || !ue) return;
        let e = t.audio.play([`strike_big`], {
                quantize: `beat`
            }),
            n = e > 0 ? Math.max(0, e - ge) : _ - ge / _ % 1 * _;
        X = W + n, Ce = !1;
        let r = N;
        Ve.push({
            t0: X,
            n: 900,
            speed: 5.5,
            seed: 777,
            life: .9,
            color: new I(1, .72, .35),
            origin: (e, t) => {
                let n = Q((t() - .5) * 3.6, .9 + t() * .9, .1 + t() * .2);
                return r.localToWorld(n), {
                    p: n,
                    n: Q((t() - .5) * 1.2, .5 + t(), .8),
                    delay: t() * .06
                }
            }
        })
    }

    function Kt() {
        X = $, Ce = !1, y && (y.mesh.visible = !0), x && (x.mesh.visible = !1), S && (S.object.visible = !1), M && (M.tau.value = -1, M.hot.value = 0), Ve.length = 0
    }

    function qt(e) {
        if (!M || !s || !h) return {
            swell: 0,
            a: -1
        };
        let n = s.look,
            r = W - X;
        if (n.impact.value = 0, n.fade.value = 0, n.exposure.value = 1, n.fadeColor.value.setRGB(1, 1, 1), n.impactA.value.setRGB(.067, .067, .067), n.impactB.value.setRGB(.902, 1, 0), n.impactThr.value = .3, X < $ / 2) return {
            swell: 0,
            a: -1
        };
        let i = Q(-.4, Z.ceil + 14, -1.2),
            a = At.clone();
        N.localToWorld(a);
        let o = r < 0 ? r > -.05 ? .25 * (1 + r / .05) : 0 : Math.exp(-r / .16) * (.55 + .45 * (Math.floor(r * 40) % 2));
        if (o > .01 && r < .6) {
            let t = Math.floor((X + Math.max(0, r)) * 40) * 7 + 911;
            if (e.push({
                    a: i,
                    b: a,
                    seed: t,
                    amp: o * 3,
                    width: .07,
                    jag: .07,
                    branch: 1
                }), o > .05)
                for (let n = 0; n < 3; n++) e.push({
                    a: i.clone().add(Q((n - 1) * .9, 0, .3 * n)),
                    b: Q((n - 1) * 1.6, ft() - .3, .2),
                    seed: t + 91 * (n + 1),
                    amp: o * .55,
                    width: .02,
                    jag: .12,
                    branch: .4
                })
        }
        let c = r >= 1.2 / 60;
        y.mesh.visible = !c, x.mesh.visible = c, S.object.visible = c;
        let l = r < 0 ? -1 : r < .3448275862068966 ? r * .16 : _ * .16 + (r - _) * 2.3;
        if (M.tau.value = c ? l : -1, M.hot.value = r >= 0 ? 2.5 * Math.exp(-Math.max(0, r - .05) / .35) : 0, M.arc.value = r >= 0 ? 1.4 * Math.exp(-r / .25) : M.arc.value, r >= 0 && r < 5.5 / 60 && !t.reducedMotion) {
            let e = Math.floor(r * 60);
            e === 0 || e === 4 ? n.fade.value = e === 0 ? 1 : .75 : e === 1 || e === 2 ? n.impact.value = 1 : (n.impact.value = 1, n.impactA.value.setRGB(.902, 1, 0), n.impactB.value.setRGB(.067, .067, .067))
        }
        r >= 0 && (n.exposure.value = 1 + 1.4 * Math.exp(-r / .12));
        let u = D(2 * _ - .05, 4 * _ - .1, r);
        return n.exposure.value += 2.2 * u, n.fade.value = Math.max(n.fade.value, D(2.7 * _, 4 * _ - 4.4 / 60, r), r >= 0 && r < .2 && t.reducedMotion ? .6 * Math.exp(-r / .08) : 0), r >= 1.3793103448275863 - 4.4 / 60 && (n.fade.value = 1, n.grain.value = 0), h.U.white.value = u, r >= .9993103448275864 && !Ce && (Ce = !0, t.advance()), {
            swell: u,
            a: r
        }
    }

    function Jt(e, t) {
        let n = D(.2, 1, G),
            r = +(t.a >= 0);
        L.intensity = 640 * (1 - .45 * n) * (1 + e * 2.2) * 1 * (r ? 1.6 + 14 * t.swell : 1), L.angle = .19 + .08 * t.swell;
        let i = W - J,
            a = e => J > $ / 2 && i >= e ? 1 + 1.6 * Math.exp(-(i - e) / .07) : .25,
            o = (1 - .35 * n) * (r ? .25 : 1);
        R.intensity = 150 * a(_) * o, V.intensity = 120 * a(2 * _ - .08) * o, ie.intensity = 70 * (J > $ / 2 && i >= .6096551724137932 ? 1 : .25) * o, H.forEach(t => {
            t.intensity = 160 * (1 + .6 * n + 3 * e) * (r ? .4 : 1), t.color.setRGB(.66 + .2 * n, .76 + .1 * n, 1)
        }), h.U.flash.value = e + (t.a >= 0 ? 4 * Math.exp(-t.a / .15) : 0), re[0].set(L.position, L.target.position, L.angle * 1.02, .05 * (1 + e * 1.5) * (r ? 1 + 3 * t.swell : 1), new I(.81, .88, 1)), re[1].set(R.position, R.target.position, R.angle, .012 * R.intensity / 150, new I(1, .81, .6)), re[2].set(V.position, V.target.position, V.angle, .012 * V.intensity / 120, new I(1, .81, .6));
        for (let e of re) e.u.time.value = W;
        te ? .set([{
            apex: L.position,
            axis: Q().subVectors(L.target.position, L.position).normalize(),
            cos: Math.cos(L.angle),
            range: 16,
            color: new I(.81, .88, 1),
            k: L.intensity * .0022
        }]), te && (te.u.time.value = W, te.u.origin.value.set(0, 2.5, 0))
    }
    return {
        id: e.id,
        async load(e) {
            t = e;
            let r = performance.now(),
                a = e => {
                    try {
                        performance.measure(`monument · ${e}`, {
                            start: r,
                            end: performance.now()
                        })
                    } catch {}
                    r = performance.now()
                },
                o = t.perf.settings;
            o.detail, n = new pe, n.background = new I(65794), i = new de(44, 16 / 9, .05, 80), ce = t.stage.info;
            let d = await Be(256);
            if (U) {
                d.dispose();
                return
            }
            u = d, c = Re(u), a(`setup`);
            let m = await t.assets.json(`gen/museum/museum.json`),
                _ = await De(t.assets, `gen/museum/` + m.monument.file);
            if (U) return;
            let v = _.header,
                b = await Te(_.get(`geo`));
            if (U) return;
            let D = Ee(b, v);
            a(`decode`);
            let ee = o.tier === `low` ? .6 : 1,
                [z, ge, G, q] = await Promise.all([`monF`, `monU`, `monX`, `monA`].map(e => Ge(_.get(e), {
                    scale: ee
                })));
            if (U) {
                for (let e of [z, ge, G, q]) Ne(e);
                return
            }
            k = {
                F: z,
                U: ge,
                X: G,
                A: q
            };
            let _e = j = t.assets.lease(),
                [ve, Se] = await Promise.all([`bronze`, `verdigris`].map(e => _e.texture(`gen/museum/${e}.webp`, {
                    anisotropy: 8,
                    half: !0
                })));
            for (let e of [ve, Se]) e.wrapS = e.wrapT = p;
            if (A = {
                    bronze: ve,
                    verd: Se
                }, U) {
                ve.dispose(), Se.dispose();
                return
            }
            for (let e of [z, ge, G, q, ve, Se])
                if (t.renderer.initTexture(e), await pt(), U) return;
            let J = await We(t.renderer, [`rotunda`], be(o), Q(0, 2, 0));
            if (U) {
                J.dispose();
                return
            }
            f = J;
            let Y = f.get(`rotunda`);
            if (a(`environment`), await pt(), U || (h = et(c, u), n.add(h.group), a(`rotunda`), await pt(), U) || (E = Xe(u, o.tier === `high` ? .36 : 0), w = new T(new le(Z.r + .2, 96), E.m), w.rotation.x = -Math.PI / 2, E.refl && w.add(E.refl.target), n.add(w), await we(), U) || (Ae(tt, nt), await pt(), U)) return;
            g = rt(Y, o.detail), n.add(g.mesh, g.subMesh), a(`floor + letters`);
            let Ce = Math.min(v.front.left, v.up.left) - .06,
                Oe = Math.max(v.front.right, v.up.right) + .06;
            if (M = ot(Ce, Oe), M.strike.value.copy(At), N = new l, N.scale.setScalar(Z.scale), N.position.set(0, Z.plinth.h - .046 * Z.scale, .05), n.add(N), await pt(), U || (y = ct(D, v, k, M, u, {
                    env: Y,
                    detail: o.detail,
                    lowres: o.tier === `low`,
                    stock: A
                }), N.add(y.mesh), a(`statue`), await pt(), U)) return;
            let ke = await lt(D, k, M, u, {
                env: Y,
                stride: o.tier === `low` ? 3 : 2,
                cancelled: () => U,
                stock: A
            });
            if (U || !ke) {
                ke ? .dispose();
                return
            }
            if (x = ke, N.add(x.mesh), a(`debris`), await pt(), U) return;
            S = ut(D, M, o.tier === `low` ? 9 : 5), N.add(S.object), C = dt(D, v, Ce, Oe, o.tier === `low` ? 120 : 220), N.add(C.object), a(`embers + dust`), oe = new B(10132128, 1709330, .035), n.add(oe), L = new ne(13623551, 0, 0, .19, .45, 2), L.position.set(.3, Z.ceil + 5.2, .9), L.target.position.set(0, 1.6, 0), n.add(L, L.target), R = new ne(16764824, 0, 0, .36, .6, 2), R.position.set(-3.4, Z.ceil - .3, 4.2), R.target.position.set(-.4, 2.2, 0), n.add(R, R.target), V = new ne(16764824, 0, 0, .36, .6, 2), V.position.set(3.6, Z.ceil - .3, 4), V.target.position.set(.5, 2.2, 0), n.add(V, V.target), ie = new ne(16769200, 0, 0, .28, .6, 2), ie.position.set(1.6, 3.2, 4.2), ie.target.position.set(0, .56, .85), n.add(ie, ie.target), H = [-1, 1].map(e => {
                let t = new ne(11125503, 0, 0, .35, .7, 2);
                return t.position.set(e * 4.5, 6.5, -4.5), t.target.position.set(0, 2.4, 0), n.add(t, t.target), t
            }), se = new O(14217416, 0, 30, 2), n.add(se), F = He();
            for (let e = 0; e < 3; e++) {
                let e = new Pe(u, F);
                re.push(e), n.add(e.mesh)
            }
            te = new qe(o.tier === `low` ? 500 : 1100), te.u.size.value.set(5, 9, 5), n.add(te.object), P = new Fe(6e3), n.add(P.mesh), s = ze(t.renderer, n, i, {
                samples: o.msaa,
                bloomScale: o.bloom,
                bloom: [.25, .5, .92]
            }), s.look.grade({
                contrast: 1.1,
                saturation: .98,
                shadowTint: [-.004, .002, .014],
                highTint: [.014, .008, -.004],
                vignette: .42,
                grain: .032
            }), s.look.ca.value = .002, he.push(t.perf.onTier(e => {
                s ? .glow.setResolutionScale(e.bloom)
            })), he.push(t.input.onTap(() => {
                t.layer.hidden || t.audio.unlock()
            })), t.audio.preloadShots([`strike_big`, `zap_small`, `sub_hit`, `chant_we_are`]), t.gate(wt(0)), Et = ``, a(`scene`), x.mesh.visible = !0, S.object.visible = !0;
            for (let e of re) e.mesh.visible = !0, e.u.k.value = 1e-4;
            let je = [];
            n.traverse(e => {
                e.frustumCulled && = (je.push(e), !1)
            }), Ft(0);
            let Me = new fe(64, 64, { ...me,
                    depthBuffer: !1
                }),
                Ie = E.refl,
                Le = Ie ? .reflector ? .resolutionScale ? ? 0;
            s.lowRes(!0), Ie ? .reflector && (Ie.reflector.resolutionScale = .02);
            try {
                let e = t.renderer.backend.isWebGLBackend === !0,
                    n = e => t.own ? t.own(e) : e();
                await ae(t.renderer, () => n(() => {
                    s.render(Me)
                }), {
                    cancelled: () => U,
                    maxFirstDraws: e ? 2 : void 0
                })
            } finally {
                Me.dispose(), s ? .lowRes(!1), Ie ? .reflector && (Ie.reflector.resolutionScale = Le)
            }
            for (let e of je) e.frustumCulled = !0;
            U || (x.mesh.visible = !1, S.object.visible = !1, ue = !0, a(`warm-up`), Object.assign(window, {
                __monument: {
                    get ready() {
                        return ue
                    },
                    get strikeAt() {
                        return X
                    },
                    get t() {
                        return W
                    },
                    scene: n,
                    camera: i,
                    get clicks() {
                        return Ue
                    },
                    total: mt,
                    get steps() {
                        return Qe
                    },
                    get cam() {
                        return $e
                    },
                    get pairs() {
                        return ye.map(e => e.pair)
                    },
                    get woken() {
                        return xe.map(e => e.at > $ / 2)
                    },
                    click: (e, n) => Bt(e === void 0 || n === void 0 ? null : [e * t.stage.info.cssW, n * t.stage.info.cssH]),
                    strike: () => {
                        for (; Ue < mt;) Bt()
                    },
                    get yaw() {
                        return K
                    },
                    set yaw(e) {
                        K = e
                    }
                }
            }))
        },
        enter() {
            Kt(), J = $, Y = !1, Ue = 0, Ke = 0, Je = 0, Ze = $, Qe = 0, $e = 0, it = 0, G = 0, K = 0, q = 0, ve.fill($), at.length = 0, st.length = 0, ye.length = 0;
            for (let e of xe) e.at = $, e.lo = 10, e.hi = -10;
            C && C.ev.array.fill(-100), t.gate(wt(0)), Et = ``
        },
        update(e) {
            let n = e.dt;
            if (W += n, ge = e.clock, !s || !ue) return;
            for (let e = 0; e < st.length; e++) st[e].at <= W && st.splice(e--, 1)[0].fn();
            it += (Tt * Tt * (Qe - $e) - 2 * Tt * it) * n, $e += it * n, G = b($e / ht);
            let a = e.input.p;
            if (J < $ / 2 && e.arrive > .85) {
                let e = t.clock.next(`beat`, .05, ge);
                J = W + (e - ge)
            }
            if (!Y && J > $ / 2 && e.active && (Y = !0, t.audio.play([`chant_we_are`], {
                    quantize: `beat`,
                    gain: .8
                })), e.active && a.down && a.dragging) {
                let e = a.touch ? .006 : .0042;
                q = q * .5 + -a.dragCx * e / Math.max(n, .001) * .5, _e += Math.abs(a.dragCx), _e > 60 && t.ui.dismissHint(`monument-drag`)
            }
            K += q * n, q *= Math.exp(-n * 3.2), X > $ / 2 && (K = d(K, 0, 2.2, n));
            let c = 25 * r;
            K > c && (K = d(K, c, 12, n), q = Math.min(q, 0)), K < -c && (K = d(K, -c, 12, n), q = Math.max(q, 0)), e.active && a.clicked ? Bt([a.cx, a.cy]) : e.active && e.input.pressed(`Space`, `Enter`, `NumpadEnter`) && Bt(), Rt(n);
            let l = [],
                u = Wt(l),
                f = Math.max(zt(l) ? ? 0, u),
                p = qt(l);
            if (Ft(n), Ot(), Jt(f, p), g) {
                let e = g.words,
                    t = W - J,
                    n = -1;
                for (let e = 0; e < 4; e++) J > $ / 2 && t >= e * .3448275862068966 - .01 && (n = e);
                if (n < 0) g.U.lit.value.set(-99, -99, 0, 0);
                else {
                    let r = t - n * _;
                    g.U.lit.value.set(e[n + 1] + .01, e[n] - .01, 2.2 * Math.exp(-Math.max(0, r) / .12), .18 * (1 - .6 * D(.3, 1, G)) + (p.a >= 0 ? 1.2 * Math.exp(-p.a / .2) : 0))
                }
                g.U.sweep.value = J > $ / 2 ? o(e[0] - .4, e[4] + .4, z.inOut(b((t - 2 * _) / (2 * _)))) + (t > 1.3793103448275863 ? 20 : 0) : -10
            }
            for (let e = Ve.length - 1; e >= 0; e--) W - Ve[e].t0 > 2 && Ve.splice(e, 1);
            let m = Ie(W, Ve);
            P.update(i, l, m);
            let h = 0;
            if (se.position.copy(At).applyMatrix4(N.matrixWorld).add(Q(0, 1.2, 1.2)), p.a >= 0 && p.a < .3) h = 2200 * Math.exp(-p.a / .12) * (.7 + .3 * (Math.floor(p.a * 50) % 2));
            else if (u > .01) {
                let e = at[at.length - 1];
                e && se.position.copy(e.p).applyMatrix4(N.matrixWorld).add(Q(0, 1.1, 1.4)), h = 140 * u
            }
            se.intensity = h, C && (C.time.value = W);
            let v = s.look;
            v.time.value = ge, v.aspect.value = i.aspect, s.glow.strength.value = .25 + (p.a >= 0 ? .5 * Math.exp(-p.a / .3) + .8 * p.swell : 0) + f * .3
        },
        render(e) {
            let n = t.renderer;
            if (!s) {
                n.setRenderTarget(e), n.setClearColor(0, 1), n.clear(), n.setRenderTarget(null);
                return
            }
            s.render(e)
        },
        layout(e) {
            ce = e, s && (s.look.aspect.value = e.aspect)
        },
        exit() {},
        dispose() {
            U = !0;
            for (let e of he) e();
            s ? .dispose(), y ? .dispose(), x ? .dispose(), S ? .dispose(), C ? .dispose(), k && (Ne(k.F), Ne(k.U), Ne(k.X), Ne(k.A)), A ? .bronze.dispose(), A ? .verd.dispose(), j ? .release(), h ? .dispose(), g ? .dispose(), w ? .geometry.dispose(), E ? .m.dispose(), E ? .refl ? .dispose ? .();
            for (let e of re) e.dispose();
            F ? .dispose(), P ? .dispose(), te ? .dispose();
            for (let e of [c ? .wallM, c ? .ceil, c ? .plaster, c ? .gap, c ? .socle, c ? .can, c ? .stone, c ? .ledMat]) e ? .dispose();
            f ? .dispose(), u ? .dispose(), delete window.__monument
        },
        hints() {
            return !ue || Ue >= mt || Qe !== 2 || t.ui.isDismissed(`monument-drag`) ? [] : [{
                id: `monument-drag`,
                kind: `drag`,
                at: [960, 1e3],
                p: [540, 1790],
                ...Ct
            }]
        },
        cursor: () => t ? .input.p.dragging ? `grabbing` : `pointer`,
        hud: () => X > $ / 2 && W - X >= .8620689655172414 ? `dark` : `light`
    }
}
export {
    Et as
    default, ft as transitions
};