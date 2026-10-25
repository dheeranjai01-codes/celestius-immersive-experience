import {
    $t as e,
    An as t,
    At as n,
    B as r,
    Bn as i,
    Bt as a,
    C as o,
    Ct as s,
    Dn as c,
    Dt as l,
    En as u,
    Et as d,
    Fn as f,
    Ft as p,
    G as m,
    H as h,
    Hn as g,
    Ht as _,
    I as ee,
    In as v,
    It as y,
    J as b,
    Jt as x,
    K as S,
    Lt as C,
    O as w,
    On as te,
    P as T,
    Pn as E,
    Pt as D,
    Qn as ne,
    Qt as re,
    St as O,
    T as ie,
    Tn as ae,
    Tt as k,
    U as A,
    Un as oe,
    Vn as j,
    W as se,
    Wt as M,
    X as N,
    Xn as ce,
    Y as le,
    Yn as ue,
    Z as P,
    Zn as de,
    _r as F,
    _t as I,
    an as fe,
    bt as pe,
    cn as L,
    ct as me,
    dn as R,
    dr as he,
    en as z,
    er as ge,
    hn as _e,
    it as ve,
    j as ye,
    jn as B,
    jt as be,
    kn as xe,
    ln as Se,
    lr as Ce,
    lt as V,
    m as we,
    o as Te,
    or as Ee,
    ot as De,
    p as Oe,
    q as H,
    qn as ke,
    rr as Ae,
    rt as je,
    sn as Me,
    sr as Ne,
    st as Pe,
    t as Fe,
    tn as Ie,
    tr as Le,
    un as Re,
    ut as ze,
    vn as Be,
    vr as Ve,
    vt as He,
    w as Ue,
    xt as We,
    yr as Ge,
    yt as U
} from "./post-DJ5SZDIO.js";
import {
    a as Ke,
    l as qe,
    o as Je,
    s as Ye,
    u as W
} from "./index-BSu4tWCh.js";
import {
    a as Xe,
    i as Ze
} from "./target-DNdmBkK8.js";
import {
    A as Qe,
    B as G,
    C as $e,
    D as et,
    E as tt,
    F as K,
    G as nt,
    I as rt,
    J as it,
    K as at,
    L as ot,
    M as st,
    O as ct,
    R as q,
    S as lt,
    T as ut,
    U as dt,
    V as ft,
    W as pt,
    Y as mt,
    _ as ht,
    a as gt,
    b as _t,
    c as vt,
    d as yt,
    g as bt,
    h as xt,
    i as St,
    j as Ct,
    k as wt,
    l as Tt,
    m as J,
    n as Et,
    o as Dt,
    p as Ot,
    q as kt,
    r as At,
    t as jt,
    x as Mt,
    z as Nt
} from "./bronze-Cu6bvcqL.js";
var Pt = [`clay`, `tin`, `chrome`, `gold`, `bronze`, `plaster`, `wood`, `porcelain`, `marble`, `vinyl`, `ice`, `neon`, `wax`, `holo`, `terracotta`],
    Ft = e => Pt.includes(e),
    Y = Object.fromEntries(Pt.map((e, t) => [e, t])),
    It = {
        clay: [`CLAY`, `粘土`, `PLASTICINE ON ARMATURE`],
        tin: [`TIN TOY`, `ブリキ`, `LITHOGRAPHED TINPLATE`],
        chrome: [`CHROME`, `クローム`, `CHROME-PLATED RESIN`],
        gold: [`GOLD`, `金`, `GILDED BRONZE`],
        bronze: [`BRONZE`, `ブロンズ`, `CAST BRONZE, VERDIGRIS`],
        plaster: [`PLASTER`, `石膏`, `PLASTER CAST`],
        wood: [`WOOD`, `木彫`, `CARVED LIME WOOD`],
        porcelain: [`PORCELAIN`, `染付磁器`, `PORCELAIN, COBALT`],
        marble: [`MARBLE`, `大理石`, `CARRARA MARBLE`],
        vinyl: [`SOFT VINYL`, `ソフビ`, `GLOSS VINYL, HAND PAINTED`],
        ice: [`ICE`, `氷`, `CLEAR ICE`],
        neon: [`NEON`, `ネオン`, `NEON ON BLACK ACRYLIC`],
        wax: [`WAX`, `蝋`, `WAX, PIGMENT`],
        holo: [`HOLOGRAM`, `ホログラム`, `IRIDESCENT FOIL`],
        terracotta: [`TERRACOTTA`, `テラコッタ`, `FIRED TERRACOTTA`],
        points: [`POINT CLOUD`, `点群`, `POINTS, PHOTO COLOUR`],
        voxel: [`VOXEL`, `ボクセル`, `VOXELS, 16 PX GRID`]
    },
    Lt = {
        clay: .55,
        tin: .9,
        chrome: 1,
        gold: .85,
        bronze: .8,
        plaster: .5,
        wood: .6,
        porcelain: 1,
        marble: .9,
        vinyl: 1.1,
        ice: 1.1,
        neon: .6,
        wax: .7,
        holo: 1.35,
        terracotta: .45
    },
    Rt = {
        clay: 2.6,
        tin: 2.2,
        chrome: 1.3,
        gold: 1.1,
        bronze: .9,
        plaster: .6,
        wood: 1,
        porcelain: 1.6,
        marble: 1.5,
        vinyl: 2.6,
        ice: 1.2,
        neon: 2,
        wax: 1.9,
        holo: 1.2,
        terracotta: .6
    },
    zt = {
        clay: `material_clay`,
        tin: `material_chrome`,
        chrome: `material_chrome`,
        gold: `material_gold`,
        bronze: `material_bronze`,
        plaster: `material_marble`,
        wood: `material_clay`,
        porcelain: `material_marble`,
        marble: `material_marble`,
        vinyl: `material_clay`,
        ice: `material_ice`,
        neon: `material_hologram`,
        wax: `material_clay`,
        holo: `material_hologram`,
        terracotta: `material_clay`,
        points: `material_voxel`,
        voxel: `material_voxel`
    },
    Bt = (e, t, n) => {
        let r = new _e().setRGB(e, t, n, Ee);
        return d(r.r, r.g, r.b)
    },
    Vt = (e, t, n) => e > t ? A(1).sub(U(t, e, n)) : U(e, t, n),
    Ht = e => r(e, d(.2126, .7152, .0722)),
    Ut = (e, t) => le(d(0), P(d(Ht(e)), e, t)),
    Wt = d(.95, 1.25, .9);

function Gt(e) {
    return {
        maps: e,
        kindA: 0,
        kindB: 0,
        zap: new Ge(0, 0, 0, -1),
        role: 0,
        rolePoints: 0,
        roleVoxel: 0,
        arc: 0,
        arcT: 0,
        time: 0,
        inflate: 1,
        glow: 0,
        flick: 1,
        tinZ: new Ve(.32, -.3, -.78),
        seamX: 0,
        vis: 1
    }
}

function Kt() {
    let e = (e, t, n, r = !1) => {
        let i = new Be(new Uint8Array([e, t, n, 255]), 1, 1);
        return i.magFilter = f, i.minFilter = f, r && (i.colorSpace = Ee), i.needsUpdate = !0, mt(i), i
    };
    return {
        map0: e(128, 128, 255),
        map1: e(128, 128, 0),
        fg: e(160, 150, 140, !0),
        toon: e(160, 150, 140, !0)
    }
}

function qt() {
    let e = (e, t) => O(e).onObjectUpdate(({
        object: e
    }) => {
        let n = e.userData.bu;
        return n ? t(n) : void 0
    });
    return {
        kindA: e(0, e => e.kindA),
        kindB: e(0, e => e.kindB),
        zap: e(new Ge(0, 0, 0, -1), e => e.zap),
        role: e(0, e => e.role),
        rolePoints: e(0, e => e.rolePoints),
        roleVoxel: e(0, e => e.roleVoxel),
        arc: e(0, e => e.arc),
        arcT: e(0, e => e.arcT),
        time: e(0, e => e.time),
        inflate: e(1, e => e.inflate),
        glow: e(0, e => e.glow),
        flick: e(1, e => e.flick),
        tinZ: e(new Ve(.32, -.3, -.78), e => e.tinZ),
        seamX: e(0, e => e.seamX),
        vis: e(1, e => e.vis),
        ENV: G(Pt.map(e => Lt[e]), `float`),
        NB: G(Pt.map(e => Rt[e]), `float`)
    }
}

function Jt(e) {
    let t = [`map0`, `map1`, `fg`, `toon`],
        n = {
            map0: [],
            map1: [],
            fg: [],
            toon: []
        },
        r = { ...e
        },
        i = e => t => {
            let i = We(r[e], t);
            return n[e].push(i), i
        },
        a = O(0).onObjectUpdate(({
            object: i
        }) => {
            let a = i.userData.bu ? .maps ? ? e;
            for (let e of t) {
                let t = a[e];
                if (r[e] !== t) {
                    r[e] = t;
                    for (let r of n[e]) r.value = t
                }
            }
            return 0
        });
    return {
        map0: i(`map0`),
        map1: i(`map1`),
        fg: i(`fg`),
        toon: i(`toon`),
        driver: a
    }
}

function Yt(e, t, n, i) {
    let a = Qe(n),
        c = i.detail ? new z : new Ie;
    c.name = `statue-core`, c.userData.buildAsync = !0, i.env && (c.envMap = i.env, c.envMapIntensity = 1);
    let l = ye(`side`, `float`);
    c.positionNode = d(De.x.add(e.driver.mul(0)), De.y, De.z.mul(t.inflate));
    let u = e.map0(s()),
        f = a.vn(s().mul(k(150, 144))).mul(.8).add(Te(se(s().mul(k(420, 400)))).mul(.2));
    c.maskNode = u.b.greaterThanEqual(.5).and(f.lessThan(t.vis.mul(1.04).sub(.02)));
    let p = d(.8).toVar(`stCol`),
        g = A(.5).toVar(`stRough`),
        _ = A(0).toVar(`stMetal`),
        v = A(0).toVar(`stCC`),
        y = A(.1).toVar(`stCCR`),
        x = d(0).toVar(`stSheen`),
        S = A(.5).toVar(`stSheenR`),
        C = d(0).toVar(`stEmit`),
        te = A(1).toVar(`stOcc`),
        E = A(1).toVar(`stEnvK`),
        D = A(0).toVar(`stNy`),
        ne = t.ENV,
        re = t.NB,
        O = e => I(t.zap.w.greaterThanEqual(0).and(b(e.sub(t.zap.xyz)).lessThan(t.zap.w)), t.kindB, t.kindA),
        ae = (t, n) => {
            let i = e.map0(t).bias(re.element(H(T(n, 0, Pt.length - 1)))).rg.mul(2).sub(1);
            return d(i, ot(le(A(0), A(1).sub(r(i, i)))))
        };
    if (c.colorNode = Ue(() => {
            let n = s().toVar(),
                i = e.map1(n).toVar(),
                c = e.fg(n).rgb.toVar(),
                re = e.toon(n).rgb.toVar(),
                O = A(1).sub(pe(.5, l)).toVar(),
                oe = u.b.toVar(),
                j = P(A(.5), i.r, O).toVar(),
                M = P(A(.5), i.g, O).toVar(),
                N = i.b.toVar(),
                ce = Pe.toVar(),
                ue = I(t.zap.w.greaterThanEqual(0), b(ce.sub(t.zap.xyz)).sub(t.zap.w), A(1e3)).toVar();
            ie(t.role.greaterThan(.5).and(t.role.lessThan(1.5)).and(ue.lessThan(0)), () => {
                o()
            }), ie(t.role.greaterThan(1.5).and(ue.greaterThanEqual(0)), () => {
                o()
            });
            let de = I(ue.lessThan(0), t.kindB, t.kindA).toVar();
            E.assign(ne.element(H(T(de, 0, Pt.length - 1)))), D.assign(ae(n, de).y), p.assign(d(.8)), g.assign(.5), _.assign(0), v.assign(0), y.assign(.1), x.assign(d(0)), S.assign(.5), C.assign(d(0));
            let F = A(1).toVar(),
                fe = w(r(je, me)).toVar(),
                L = [];
            L[Y.clay] = () => {
                p.assign(Ut(re, 1.2).mul(.88).add(.018).mul(a.fbm(n.mul(38)).mul(.1).add(.95))), g.assign(A(.62).add(a.fbm(n.mul(50)).mul(.25))), x.assign(Bt(1, .886, .784).mul(.6)), S.assign(.45), F.assign(1.25)
            }, L[Y.tin] = () => {
                let e = re.toVar(),
                    r = Ht(re).toVar(),
                    i = Ht(c).toVar(),
                    a = I(ce.y.greaterThan(t.tinZ.x), Bt(.08, .08, .1), I(ce.y.greaterThan(t.tinZ.y), Bt(.84, .12, .09), I(ce.y.greaterThan(t.tinZ.z), Bt(.1, .2, .55), Bt(.95, .72, .16)))),
                    o = e.r.greaterThan(e.b.mul(1.6)).and(r.greaterThan(.08)),
                    s = I(r.lessThan(.035), a, e).toVar();
                ie(o, () => {
                    s.assign(Bt(.98, .74, .58))
                }), ie(o.not().and(r.greaterThanEqual(.035)).and(e.b.greaterThan(e.r.mul(1.4))), () => {
                    s.assign(Bt(.3, .62, .98))
                });
                let l = n.mul(k(1, .955)).mul(150),
                    u = k(l.x.sub(l.y), l.x.add(l.y)).mul(.7071),
                    f = T(A(1).sub(i.div(.12)), 0, 1).mul(pe(r, .035)).add(T(A(.5).sub(i), 0, .5).mul(I(o, A(1), A(0)))),
                    ee = Vt(.03, -.03, b(m(u).sub(.5)).sub(f.mul(.42)));
                s.assign(P(s, s.mul(.25), ee.mul(.8))), s.assign(P(s, Bt(.05, .05, .07), U(.3, .75, N).mul(O)));
                let x = U(.66, .84, j).mul(.9),
                    S = h(w(ce.x.sub(t.seamX)).negate().div(.004)).mul(pe(.3, oe)).mul(O);
                p.assign(P(s, d(.86, .87, .88), x).mul(A(1).sub(S.mul(.6))));
                let C = A(1).sub(x);
                g.assign(P(A(.14), A(.3), C)), _.assign(P(A(1), A(.55), C)), v.assign(.7), y.assign(.1), F.assign(.8)
            }, L[Y.chrome] = () => {
                p.assign(d(.97, .975, .99)), g.assign(A(.035).add(A(1).sub(M).mul(.05))), _.assign(1), F.assign(.6)
            }, L[Y.gold] = () => {
                let e = d(1, .72, .3);
                p.assign(P(e.mul(d(.5, .33, .15)), e, U(.18, .5, M).mul(U(.26, .48, j)))), g.assign(A(.16).add(Vt(.5, .2, M).mul(.25)).add(a.fbm(n.mul(90)).mul(.05))), _.assign(1), F.assign(1)
            }, L[Y.bronze] = () => {
                let e = a.fbm(n.mul(22).add(4)),
                    t = a.fbm(n.mul(k(60, 5)).add(2)),
                    r = T(Vt(.57, .38, M.add(e.sub(.5).mul(.2))).add(Vt(.5, .33, j).mul(.8)).add(U(.56, .78, t).mul(Vt(.6, .44, M)).mul(.85)), 0, 1).toVar(),
                    i = U(.54, .72, j.add(M.sub(.5).mul(.4))),
                    o = P(d(.36, .2, .09), d(.78, .5, .24), i);
                p.assign(P(o, P(d(.12, .34, .27), d(.36, .6, .5), a.fbm(n.mul(40))), r)), g.assign(P(A(.36).sub(U(.54, .72, j).mul(.16)), A(.92), r)), _.assign(A(1).sub(r)), F.assign(1.3)
            }, L[Y.plaster] = () => {
                p.assign(d(.93, .915, .88).mul(a.fbm(n.mul(180)).mul(.06).add(.96))), g.assign(.95), F.assign(1.5)
            }, L[Y.wood] = () => {
                let e = a.fbm(k(ce.y.mul(.8), ce.x.mul(2))).mul(1.6).add(a.fbm(ce.xy.mul(k(6, .7))).mul(.35)),
                    t = b(k(ce.x.add(.15), ce.z.add(1.6))).mul(14).add(e.mul(3)),
                    r = ze(w(He(t.mul(Math.PI))), .35),
                    i = a.fbm(k(ce.x.mul(180), ce.y.mul(9)));
                p.assign(P(d(.36, .2, .09), d(.64, .42, .22), r.mul(.75).add(i.mul(.25)))), g.assign(A(.5).add(a.fbm(n.mul(40)).mul(.2))), v.assign(.2), y.assign(.45), F.assign(1.5)
            }, L[Y.porcelain] = () => {
                let e = Ht(c),
                    t = a.fbm(n.mul(30)),
                    r = Vt(.16, .03, e.add(t.sub(.5).mul(.08))),
                    i = Vt(.34, .08, e).mul(.55),
                    o = U(.2, .6, N).mul(O);
                p.assign(P(d(.93, .95, .97), P(d(.3, .42, .72), d(.02, .07, .42), r), le(le(r, i), o))), g.assign(.18), v.assign(1), y.assign(.05), F.assign(.9)
            }, L[Y.marble] = () => {
                let e = ce.mul(2.2),
                    t = e.x.mul(1.3).add(e.y.mul(.8)).add(a.fbm3(e.mul(1.7)).mul(5)),
                    n = w(He(t.mul(2.2))),
                    r = T(Vt(.14, 0, n).mul(.85).add(Vt(.45, 0, n).mul(.22)).add(Vt(.05, 0, w(He(t.mul(5.3).add(1.7)))).mul(.35)), 0, 1);
                p.assign(P(d(.94, .93, .9).mul(a.fbm3(e.mul(6)).mul(.05).add(.96)), d(.42, .43, .47), r)), g.assign(.22), v.assign(.35), y.assign(.2), x.assign(Bt(1, .957, .918).mul(.3)), S.assign(.4), F.assign(1)
            }, L[Y.vinyl] = () => {
                p.assign(Ut(re, 1.25).mul(.95)), g.assign(.28), v.assign(1), y.assign(.06), F.assign(.9)
            }, L[Y.ice] = () => {
                let e = a.fbm(n.mul(18).add(3)),
                    t = T(Vt(.45, .25, M).mul(.8).add(U(.55, .85, e).mul(.55)).add(U(.35, .9, N).mul(.35)).add(A(1).sub(oe).mul(.8)), 0, 1).toVar(),
                    r = pe(.985, Te(se(n.mul(k(260, 248))))),
                    i = d(.16, .3, .42);
                p.assign(P(P(i, d(.86, .93, 1), t), d(1), r)), g.assign(P(A(.04), A(.5), t)), v.assign(.5), y.assign(.05);
                let o = ze(A(1).sub(fe), 2.5);
                C.assign(d(.25, .55, .9).mul(A(1).sub(t).mul(.18).add(o.mul(.35))).add(d(.6, .8, 1).mul(t).mul(.05))), F.assign(.4)
            }, L[Y.neon] = () => {
                p.assign(d(.012, .013, .018)), g.assign(.3), _.assign(.2), v.assign(1), y.assign(.1);
                let e = U(.08, .75, N),
                    r = P(P(d(1, .16, .04), d(1, .1, .55), U(-.6, .9, ce.y)), d(.2, .75, 1), U(.55, .95, a.fbm(n.mul(3).add(2)))),
                    i = U(.02, .3, N);
                C.assign(r.mul(e.mul(ze(e, 3).mul(3).add(4.5)).add(i.mul(.35))).mul(t.flick)), F.assign(1)
            }, L[Y.wax] = () => {
                let e = Ut(P(c, re, .35), .9).mul(d(1.05, .98, .93));
                p.assign(e), g.assign(.34), v.assign(.3), y.assign(.3), x.assign(Bt(1, .84, .753).mul(.7)), S.assign(.3), C.assign(e.mul(d(1, .45, .32)).mul(M.add(.5).mul(.07))), F.assign(.8)
            }, L[Y.holo] = () => {
                let e = T(a.fbm(n.mul(7).add(t.time.mul(.1))).mul(.8).add(j.mul(.5)).sub(.1), 0, 1),
                    r = m(e.mul(1.6).add(A(1).sub(fe).mul(1.3))),
                    i = d(.55).add(d(.45).mul(ee(r.add(d(0, .33, .67)).mul(Math.PI * 2))));
                p.assign(d(.86, .87, .9).mul(P(d(1), i, .75))), g.assign(.14), _.assign(1), C.assign(i.mul(ze(A(1).sub(fe), 3)).mul(.06)), F.assign(.7)
            }, L[Y.terracotta] = () => {
                let e = d(.6, .29, .17).mul(a.fbm(n.mul(70)).mul(.2).add(.9)),
                    t = T(U(.1, .7, D).mul(.45).add(U(.55, .8, j).mul(.25)), 0, 1);
                p.assign(P(e, d(.78, .6, .47), t)), g.assign(.92), F.assign(1.5)
            };
            let R = ie(de.lessThan(.5), L[0]);
            for (let e = 1; e < L.length; e++) R = R.ElseIf(de.lessThan(e + .5), L[e]);
            let he = T(i.g.sub(.5).mul(F.mul(1.6)).add(.5), 0, 1),
                z = T(i.r.sub(.5).mul(F.mul(1.2)).add(.5), 0, 1);
            return te.assign(P(A(1), U(0, .62, he).mul(U(0, .6, z)), T(oe, 0, 1).mul(O))), p.mulAssign(P(A(1), te, .35)), ie(t.zap.w.greaterThanEqual(0), () => {
                let e = w(ue);
                C.addAssign(Wt.mul(h(e.negate().div(.012)).mul(5).add(a.arcs(ce, t.arcT.mul(1.3), 14).mul(h(e.negate().div(.08))).mul(9))))
            }), ie(t.arc.greaterThan(.001), () => {
                C.addAssign(Wt.mul(a.arcs(ce, t.arcT, 14)).mul(t.arc.mul(4)))
            }), C.addAssign(d(.5, .8, 1.6).mul(t.glow)), ie(t.vis.lessThan(.999), () => {
                C.addAssign(Wt.mul(Vt(.06, 0, t.vis.mul(1.04).sub(.02).sub(f))).mul(4))
            }), p
        })(), c.roughnessNode = g, c.metalnessNode = _, c.emissiveNode = C, c.aoNode = te.mul(E), i.detail) {
        let e = c;
        e.clearcoatNode = v, e.clearcoatRoughnessNode = y, e.sheenNode = x, e.sheenRoughnessNode = S
    }
    return c.normalNode = Ue(() => {
        let e = s(),
            n = A(1).sub(pe(.5, l)),
            r = Pe,
            i = O(r),
            o = ae(e, i).toVar();
        ie(i.lessThan(.5), () => {
            let t = e.mul(k(1, .955)).mul(16),
                n = se(t),
                r = m(t).sub(.5),
                i = k(Te(n), Te(n.add(7.3))).sub(.5).mul(.4),
                s = r.sub(i),
                c = b(s.mul(k(1, 1.35))),
                l = He(c.mul(95)).mul(Vt(.46, .08, c)).mul(pe(.35, Te(n.add(3.1))).mul(.6).add(.4)),
                u = k(a.fbm(e.mul(7)), a.fbm(e.mul(7).add(5))).sub(.5);
            o.addAssign(d(k(a.fbm(e.mul(70)), a.fbm(e.mul(70).add(9))).sub(.5).mul(.08).add(ve(s.add(1e-4)).mul(l.mul(.07))).add(u.mul(.22)), 0))
        }), ie(i.greaterThan(4.5).and(i.lessThan(5.5)), () => {
            o.addAssign(d(k(a.fbm(e.mul(260)), a.fbm(e.mul(260).add(5))).sub(.5).mul(.06), 0))
        }), ie(i.greaterThan(5.5).and(i.lessThan(6.5)), () => {
            o.addAssign(d(a.fbm(k(r.x.mul(180), r.y.mul(9))).sub(.5).mul(.12), 0, 0))
        }), ie(i.greaterThan(13.5), () => {
            o.addAssign(d(k(a.fbm(e.mul(200)), a.fbm(e.mul(200).add(3))).sub(.5).mul(.09), 0))
        });
        let c = Nt(ve(P(d(0, 0, 1), o, T(t.inflate, 0, 1))));
        return ve(P(rt, c, n))
    })(), c
}

function Xt(e, t) {
    let n = new Ie({
        roughness: .55,
        metalness: 0
    });
    n.name = `statue-print`;
    let r = Pe,
        i = b(r.sub(t.origin)).add(Te(se(r.xy.mul(300))).sub(.5).mul(.03));
    return n.colorNode = Ue(() => {
        ie(t.burn.greaterThan(0).and(i.lessThan(t.burn)), () => {
            o()
        });
        let n = We(e, s()).r;
        return Bt(.96, .93, .86).mul(ze(n, 1.15)).mul(.92)
    })(), n.emissiveNode = I(t.burn.greaterThan(0), d(1, .55, .2).mul(h(i.sub(t.burn).negate().div(.012)).mul(6)).add(d(.5, .75, 1.5).mul(h(i.sub(t.burn).negate().div(.004)).mul(8))), d(0)), n
}

function Zt(e, t) {
    let n = new fe({
        transparent: !0,
        depthWrite: !1
    });
    n.name = `statue-points`;
    let i = ye(`iPos`, `vec3`),
        a = ye(`iUv`, `vec2`),
        o = m(He(r(i.xy, k(127.1, 311.7))).mul(43758.5)),
        c = d(o, m(o.mul(7.1)), m(o.mul(3.3))).sub(.5).mul(.003).mul(He(t.time.mul(7).add(o.mul(40)))),
        l = I(t.zap.w.greaterThanEqual(0), b(i.sub(t.zap.xyz)).sub(t.zap.w), A(1e3)),
        u = I(t.rolePoints.greaterThan(.5).and(t.rolePoints.lessThan(1.5)), pe(0, l), I(t.rolePoints.greaterThan(1.5), A(1).sub(pe(0, l)), A(1))),
        f = T(e.map0(a).level(0).b.sub(.35).mul(3), 0, 1);
    n.positionNode = i.add(c).add(e.driver.mul(0)), n.scaleNode = A(.0048).mul(u).mul(pe(.02, f)).mul(pe(o, t.vis.mul(1.02).sub(.01)));
    let p = h(w(m(i.y.mul(.35).sub(t.time.mul(.6))).sub(.5)).mul(-28)),
        g = s().sub(.5).mul(2),
        _ = A(1).sub(U(.5, 1, r(g, g)));
    return n.colorNode = e.fg(a).level(0).rgb.mul(2.2).add(d(.045, .1, .16)).add(d(.25, .55, .8).mul(p).mul(.35)), n.opacityNode = _.mul(f), n
}

function Qt(e, n, r) {
    let i = new B;
    i.setIndex(e.getIndex());
    for (let t of [`position`, `normal`, `uv`]) {
        let n = e.getAttribute(t);
        n && i.setAttribute(t, n)
    }
    for (let [e, [r, a]] of Object.entries(n)) i.setAttribute(e, new t(r, a));
    return i.instanceCount = r, i
}

function $t(e, t) {
    return Qt(new ue(1, 1), {
        iPos: [e, 3],
        iUv: [t, 2]
    }, t.length / 2)
}

function en(e, t) {
    let n = [],
        r = [],
        i = 11,
        a = () => (i = i * 1664525 + 1013904223 >>> 0, i / 4294967296),
        o = e.pos;
    for (let t = 0; t < e.gh - 1; t++)
        for (let i = 0; i < e.gw - 1; i++) {
            let s = e.at[t * e.gw + i],
                c = e.at[t * e.gw + i + 1],
                l = e.at[(t + 1) * e.gw + i],
                u = e.at[(t + 1) * e.gw + i + 1];
            if (!(s < 0 || c < 0 || l < 0 || u < 0))
                for (let t = 0; t < 3; t++) {
                    let t = a(),
                        i = a(),
                        d = (e, n, r) => (n[s * r + e] * (1 - t) + n[c * r + e] * t) * (1 - i) + (n[l * r + e] * (1 - t) + n[u * r + e] * t) * i;
                    n.push(d(0, o, 3), d(1, o, 3), d(2, o, 3)), r.push(d(0, e.uv, 2), d(1, e.uv, 2))
                }
        }
    let s = $t(new Float32Array(n), new Float32Array(r)),
        c = new j(s, t);
    return c.frustumCulled = !1, {
        object: c,
        dispose() {
            s.dispose()
        }
    }
}

function tn(e, t) {
    let n = new Ie({
        roughness: .38,
        metalness: 0
    });
    n.name = `statue-voxel`;
    let i = ye(`vc`, `vec3`),
        a = ye(`vs`, `vec3`),
        o = ye(`vcol`, `vec3`);
    return n.positionNode = Ue(() => {
        let n = I(t.zap.w.greaterThanEqual(0), b(i.xy.sub(t.zap.xy)).sub(t.zap.w), A(1e3)),
            o = I(t.roleVoxel.greaterThan(.5).and(t.roleVoxel.lessThan(1.5)), pe(0, n), I(t.roleVoxel.greaterThan(1.5), A(1).sub(pe(0, n)), A(1))),
            s = m(He(r(i.xy, k(127.1, 311.7))).mul(43758.5));
        return De.mul(a).mul(o).mul(pe(s, t.vis.mul(1.02).sub(.01))).add(i).add(e.driver.mul(0))
    })(), n.colorNode = Ue(() => {
        let e = w(De).mul(2),
            t = le(N(e.x, e.y), le(N(e.y, e.z), N(e.x, e.z)));
        return o.mul(A(1).sub(U(.82, 1, t).mul(.45)))
    })(), n
}

function nn(e, t, n) {
    return Qt(new L(1, 1, 1), {
        vc: [e, 3],
        vs: [t, 3],
        vcol: [n, 3]
    }, e.length / 3)
}

function rn(e, t, n) {
    let r = t.vox ? .cell ? ? .034,
        i = new Float32Array(e.n * 3),
        a = new Float32Array(e.n * 3),
        o = new Float32Array(e.n * 3),
        s = new _e;
    for (let t = 0; t < e.n; t++) {
        let n = e.b[t] + Math.max(1, Math.round((e.f[t] - e.b[t]) / r)) * r;
        i[t * 3] = e.x[t], i[t * 3 + 1] = e.y[t], i[t * 3 + 2] = (n + e.b[t]) / 2, a[t * 3] = r * .96, a[t * 3 + 1] = r * .96, a[t * 3 + 2] = n - e.b[t], s.setRGB(Math.min(1, e.rgb[t * 3] * 1.25 + .03), Math.min(1, e.rgb[t * 3 + 1] * 1.25 + .03), Math.min(1, e.rgb[t * 3 + 2] * 1.25 + .035), Ee), o[t * 3] = s.r, o[t * 3 + 1] = s.g, o[t * 3 + 2] = s.b
    }
    let c = nn(i, a, o),
        l = new j(c, n);
    return l.frustumCulled = !1, {
        object: l,
        dispose() {
            c.dispose()
        }
    }
}
var an = (e, t) => {
        e.userData.gallery = t;
        let n = e.customProgramCacheKey.bind(e);
        return e.customProgramCacheKey = () => `${n()}|gallery-${t}`, e
    },
    on = {
        kPos: 0,
        kDir: 1,
        kCol: 2,
        rPos: 3,
        rDir: 4,
        rCol: 5,
        lane: 6
    },
    sn = 16,
    cn = 7,
    ln = new Ve,
    un = class extends E {
        isGalleryLight = !0;
        data = new Float32Array(448);
        texture = new Be(this.data, sn, cn, ne, ae);
        dirty = !0;
        constructor() {
            super(16777215, 1), this.type = `GalleryLight`;
            let e = this.texture;
            e.magFilter = e.minFilter = oe, e.generateMipmaps = !1, e.needsUpdate = !0;
            for (let e = 0; e < 16; e++) this.put(on.lane, e, -1e4, 0, -1e4, 0)
        }
        put(e, t, n, r, i, a) {
            let o = (e * sn + t) * 4,
                s = this.data;
            (s[o] !== n || s[o + 1] !== r || s[o + 2] !== i || s[o + 3] !== a) && (s[o] = n, s[o + 1] = r, s[o + 2] = i, s[o + 3] = a, this.dirty = !0)
        }
        setBays(e) {
            let t = Array.from({
                    length: 16
                }, () => [-1e4, 0, -1e4, 0]),
                n = (n, r) => {
                    for (let [i, a] of [
                            [0, e.filter(e => e.x < 0)],
                            [1, e.filter(e => e.x >= 0)]
                        ]) {
                        let e = [...a].sort((e, t) => r(t) - r(e)).slice(0, 8);
                        for (let a = 0; a < 8; a++) {
                            let o = e[Math.min(a, e.length - 1)],
                                s = t[i * 8 + a];
                            s[n] = a < e.length ? r(o) : -1e4, s[n + 1] = o ? o.slot : 0
                        }
                    }
                };
            n(0, e => e.z), n(2, e => e.zPool), t.forEach((e, t) => this.put(on.lane, t, e[0], e[1], e[2], e[3]))
        }
        write(e, t, n, r) {
            ln.subVectors(n.target, n.pos).normalize(), this.put(e, t, n.pos.x, n.pos.y, n.pos.z, Math.cos(n.angle)), this.put(e + 1, t, ln.x, ln.y, ln.z, Math.cos(n.angle * (1 - n.penumbra))), this.put(e + 2, t, n.color.r * n.intensity * r, n.color.g * n.intensity * r, n.color.b * n.intensity * r, 0)
        }
        setKey(e, t, n = 1) {
            this.write(on.kPos, e, t, n)
        }
        setRim(e, t, n = 1) {
            this.write(on.rPos, e, t, n)
        }
        commit() {
            this.dirty && = (this.texture.needsUpdate = !0, !1)
        }
        dispose() {
            this.texture.dispose(), super.dispose()
        }
    };

function dn(e, t, n, i = null) {
    let a = t => q(e, K(n, H(t))),
        o = a(t),
        s = a(t + 1),
        c = a(t + 2),
        u = o.xyz.sub(V),
        d = le(b(u), 1e-4),
        f = u.div(d),
        p = U(o.w, s.w, r(f.negate(), s.xyz)),
        m = c.xyz.mul(p).div(le(d.mul(d), .01));
    return i && (m = m.mul(i)), {
        lightDirection: ve(st.mul(l(f, 0)).xyz),
        lightColor: m
    }
}
var fn = class extends re {
    light;
    static get type() {
        return `GalleryLightNode`
    }
    constructor(e) {
        super(), this.light = e
    }
    getHash() {
        return this.light.uuid
    }
    setup(e) {
        let t = e.material ? .userData ? .gallery ? ? `pool`;
        if (t === `none`) return;
        let n = this.light.texture,
            r = V,
            i = e => q(n, K(e, H(on.lane))),
            a = e => t === `pool` ? e.z : e.x,
            o = e => H(t === `pool` ? e.w : e.y),
            s = I(r.x.lessThan(0), H(0), H(8)),
            c = H(0);
        for (let e = 0; e < 8; e++) c = c.add(H(pe(r.z, a(i(s.add(H(e)))))));
        let l = i(s.add(le(c.sub(1), H(0)))),
            u = i(s.add(N(c, H(7)))),
            d = o(l),
            f = o(u),
            p = e.lightsNode;
        if (t === `pool`) {
            p.setupDirectLight(e, this, dn(n, on.kPos, d)), p.setupDirectLight(e, this, dn(n, on.kPos, f, I(d.equal(f), A(0), A(1))));
            return
        }
        let m = I(w(r.z.sub(a(l))).lessThanEqual(w(r.z.sub(a(u)))), d, f);
        p.setupDirectLight(e, this, dn(n, on.kPos, m)), t === `statue` && p.setupDirectLight(e, this, dn(n, on.rPos, m))
    }
};

function pn(e) {
    let t = e.library;
    t.getLightNodeClass(un) || t.addLight(fn, un)
}
var mn = [`map0`, `map1`, `fg`, `toon`],
    hn = () => new Promise(e => requestAnimationFrame(() => e())),
    gn = typeof location > `u` || new URLSearchParams(location.search).get(`museumpace`) !== `0`;

function _n(e, t, n, r) {
    let i = at(r.get(`map0`)) ? .[1] ? ? 1024,
        a = r;
    return {
        height: Math.round(i * n),
        drop() {
            a = null
        },
        async maps(r) {
            let i = a ? ? await it(e, t),
                o = 1 / 2 ** r,
                s = r > 0,
                [c, l, u, d] = await Promise.all([kt(i.get(`map0`), {
                    scale: n * o,
                    box: s
                }), kt(i.get(`map1`), {
                    scale: n * o,
                    box: s
                }), kt(i.get(`fg`), {
                    scale: n * o,
                    srgb: !0,
                    box: s
                }), kt(i.get(`toon`), {
                    scale: o,
                    srgb: !0,
                    box: s
                })]);
            return {
                map0: c,
                map1: l,
                fg: u,
                toon: d
            }
        }
    }
}
var X = null;

function vn(e) {
    let t = e.image;
    !X && typeof OffscreenCanvas < `u` && (X = new OffscreenCanvas(1, 1), X.getContext(`2d`) ? .fillRect(0, 0, 1, 1)), X && (e.image = X), e.dispose();
    try {
        t ? .close ? .()
    } catch {}
}
var yn = e => {
        let t = 0;
        if (e)
            for (let n of mn) {
                let r = e[n].image;
                t += (r ? .width ? ? 0) * (r ? .height ? ? 0) * 4 * (4 / 3)
            }
        return t
    },
    bn = class {
        renderer;
        show;
        off;
        e = new Map;
        busy = !1;
        hold = !1;
        log = [];
        disposed = !1;
        released = new Set;
        freeMaps(e) {
            if (e)
                for (let t of mn) vn(e[t]), this.released.add(e[t])
        }
        constructor(e, t, n = !1) {
            this.renderer = e, this.show = t, this.off = n
        }
        async add(e, t, n) {
            this.off && (n = 0);
            let r = this.off ? null : await t.maps(2),
                i = n === 2 ? r : await t.maps(n),
                a = !0;
            for (let e of new Set([r, i]))
                if (e)
                    for (let t of mn) {
                        if (!a && gn && await hn(), a = !1, this.disposed) break;
                        this.renderer.initTexture(e[t])
                    }
            if (this.disposed) return this.freeMaps(r), i !== r && this.freeMaps(i), null;
            let o = [null, null, r];
            return o[n] = i, this.e.set(e, {
                src: t,
                levels: o,
                shown: n,
                want: n,
                job: null
            }), i
        }
        level(e) {
            return this.e.get(e) ? .shown ? ? null
        }
        update(e, t) {
            if (this.disposed || this.off) return;
            let n = null;
            for (let [r, i] of this.e) {
                let a = e(r);
                i.want = a.level, !this.hold && i.shown !== i.want && i.levels[i.want] && (this.log.push({
                    i: r,
                    from: i.shown,
                    to: i.want,
                    t
                }), this.log.length > 200 && this.log.shift(), i.shown = i.want, this.show(r, i.levels[i.shown], i.shown));
                for (let e of [0, 1]) i.levels[e] && e !== i.shown && e !== i.want && i.job ? .level !== e && (this.freeMaps(i.levels[e]), i.levels[e] = null);
                if (!i.job && !i.levels[i.want]) {
                    let e = (i.want < i.shown ? 0 : 1e3) + a.d;
                    (!n || e < n.key) && (n = {
                        i: r,
                        x: i,
                        lv: i.want,
                        key: e
                    })
                }
            }
            if (n && !this.busy) {
                let {
                    x: e,
                    lv: t
                } = n, r = {
                    level: t,
                    maps: null,
                    left: []
                };
                e.job = r, this.busy = !0, e.src.maps(t).then(t => {
                    if (this.busy = !1, this.disposed || e.job !== r) {
                        this.freeMaps(t);
                        return
                    }
                    r.maps = t, r.left = mn.map(e => t[e])
                }, t => {
                    this.busy = !1, e.job === r && (e.job = null), console.warn(`[museum] map level failed`, t)
                })
            }
            for (let e of this.e.values()) {
                let t = e.job;
                if (!t ? .maps) continue;
                let n = t.left.shift();
                if (n && (this.renderer.initTexture(n), t.left.length)) break;
                t.left.length || (e.levels[t.level] ? this.freeMaps(t.maps) : e.levels[t.level] = t.maps, e.job = null);
                break
            }
        }
        sleep() {
            if (!this.off)
                for (let [e, t] of this.e) {
                    t.shown !== 2 && (t.shown = 2, this.show(e, t.levels[2], 2)), t.want = 2;
                    for (let e of [0, 1]) this.freeMaps(t.levels[e]), t.levels[e] = null;
                    t.job && = (this.freeMaps(t.job.maps), null)
                }
        }
        stats() {
            let e = 0,
                t = {},
                n = [];
            for (let [r, i] of this.e) {
                for (let t of i.levels) e += yn(t);
                t[r] = i.shown, i.want !== i.shown && i.levels[i.want] && n.push({
                    i: r,
                    from: i.shown,
                    to: i.want
                })
            }
            return {
                mb: +(e / 1048576).toFixed(1),
                shown: t,
                ready: n,
                jobs: [...this.e.values()].filter(e => e.job).length
            }
        }
        dispose() {
            this.disposed = !0;
            for (let e of this.e.values()) {
                for (let t of e.levels) this.freeMaps(t);
                e.job && this.freeMaps(e.job.maps)
            }
            this.e.clear();
            for (let e of this.released) e.dispose();
            this.released.clear()
        }
    },
    xn = `400 {px}px ui-monospace, 'SF Mono', Menlo, Consolas, monospace`;

function Sn(e, t, n, r) {
    e.fillStyle = `#b8914e`, e.fillRect(0, 0, t, n);
    for (let r = 0; r < 90; r++) e.fillStyle = `rgba(255,240,210,${.02+.03*(r*37%7)/7})`, e.fillRect(0, r * 53 % n, t, 1 + r % 3);
    e.fillStyle = `#16120c`, e.strokeStyle = `#16120c`, e.textBaseline = `alphabetic`;
    let i = t * .055,
        a = t * .945,
        o = `No.${String(r.no).padStart(2,`0`)}`;
    e.font = ut(xn, Math.round(n * .085)), e.letterSpacing = `6px`, e.fillText(o, i, n * .2);
    let s = e.measureText(o).width;
    e.lineWidth = Math.max(2, n * .008), e.beginPath(), e.moveTo(i + s + t * .02, n * .2 - n * .026), e.lineTo(a, n * .2 - n * .026), e.stroke();
    let c = Math.round(n * .3);
    for (e.font = ut($e.key(800), c), e.letterSpacing = `0px`; e.measureText(r.label).width > t * .56 && c > n * .13;) c -= 4, e.font = ut($e.key(800), c);
    e.fillText(r.label, i - 4, n * .52);
    let l = i + e.measureText(r.label).width + t * .025,
        u = Math.round(n * .18);
    for (e.font = ut($e.jp(800), u), e.letterSpacing = `3px`; l + e.measureText(r.nick).width > a && u > n * .08;) u -= 3, e.font = ut($e.jp(800), u);
    e.fillText(r.nick, l, n * .52), e.font = ut($e.body(700), Math.round(n * .12)), e.letterSpacing = `8px`;
    let d = `${r.en}  ／  `;
    e.fillText(d, i, n * .745);
    let f = e.measureText(d).width;
    e.font = ut($e.jp(700), Math.round(n * .11)), e.letterSpacing = `4px`, e.fillText(r.ja, i + f, n * .745), e.font = ut(xn, Math.round(n * .066)), e.letterSpacing = `3px`, e.fillText(`${r.cap}  ·  FUNTECH 2026`, i, n * .905)
}

function Cn() {
    let e = new Be(new Uint8Array([184, 145, 78, 255]), 1, 1);
    e.colorSpace = Ee, e.magFilter = e.minFilter = f, e.needsUpdate = !0;
    let t = We(e, s()),
        n = O(0).onObjectUpdate(({
            object: n
        }) => {
            let r = n.userData.plaqueTex ? ? e;
            return t.value !== r && (t.value = r), 0
        }),
        r = new Ie({
            roughness: .38,
            metalness: .6
        });
    return r.name = `statue-plaque`, r.colorNode = t.rgb.add(n.mul(0)), r.emissiveNode = t.rgb.mul(d(.22, .2, .17)), {
        material: r,
        dispose() {
            r.dispose(), e.dispose()
        }
    }
}
var wn = 512,
    Tn = class {
        w;
        h;
        mesh;
        canvas;
        tex;
        key = ``;
        constructor(e, t, n, r = n * .44) {
            this.w = n, this.h = r;
            let i = wn,
                a = Math.round(i * this.h / this.w);
            this.canvas = document.createElement(`canvas`), this.canvas.width = i, this.canvas.height = a, this.tex = new R(this.canvas), this.tex.colorSpace = Ee, this.tex.anisotropy = 8, this.tex.generateMipmaps = !0, this.tex.minFilter = v, this.tex.userData.reupload = !0, this.set(e), this.mesh = new j(new wt(this.w, this.h, .005, 2, .0018), t), this.mesh.name = `plaque`, this.mesh.receiveShadow = !0, this.mesh.userData.plaqueTex = this.tex
        }
        set(e) {
            let t = JSON.stringify(e);
            if (t === this.key) return;
            this.key = t;
            let n = this.canvas.getContext(`2d`),
                r = this.canvas.width / 1024;
            n.setTransform(r, 0, 0, r, 0, 0), Sn(n, 1024, this.canvas.height / r, e), n.setTransform(1, 0, 0, 1, 0, 0), this.tex.needsUpdate = !0
        }
        dispose() {
            this.mesh.geometry.dispose(), this.tex.dispose()
        }
    },
    En = .17,
    Dn = {
        cut: 1.4,
        stand: 1.15
    },
    On = {
        margin: .02,
        minW: .44,
        minD: .4,
        standW: .5
    },
    kn = {
        faceY: 1.95,
        tight: 1.15
    },
    An = e => e === `v6` || e === `plinths` ? e : `v3`,
    jn = (e, t) => t === `v3` && e ? kn.tight : 1,
    Mn = (e, t, n) => n === `v6` ? e : Math.max(e, Math.round((kn.faceY - t) * 100) / 100);

function Nn(e, t, n) {
    let r = e.type === `stand`,
        i = r ? (t.l + t.r) / 2 : (e.x0 + e.x1) / 2,
        a = 2 * (Math.max(Math.abs(e.x0 - i), Math.abs(e.x1 - i)) * n + On.margin);
    return r && (a = Math.max(a, On.standW * (t.r - t.l) * n)), {
        w: Math.max(On.minW, a),
        d: Math.max(On.minD, (e.zF - e.zB) * n + 2 * On.margin)
    }
}
var Pn = {
        id: `member_07`,
        kinds: [`clay`, `tin`, `chrome`],
        pos: [-1.55, 0, 2.2],
        scale: 1.36,
        plinthH: .92,
        shot: {
            az: 14,
            pitch: 3,
            fill: .62,
            fov: 34
        }
    },
    Fn = [{
        id: `member_02`,
        kind: `bronze`,
        ph: .86,
        tight: !0
    }, {
        id: `member_10`,
        kind: `marble`,
        ph: .6,
        zap: !0,
        tight: !0
    }, {
        id: `member_01`,
        kind: `porcelain`,
        ph: .6
    }, {
        id: `member_12`,
        kind: `wood`,
        ph: .76,
        tight: !0
    }, {
        id: `member_05`,
        kind: `wax`,
        ph: .6
    }, {
        id: `member_09`,
        kind: `gold`,
        ph: .68,
        tight: !0
    }, {
        id: `member_04`,
        kind: `ice`,
        ph: .84,
        zap: !0,
        tight: !0
    }, {
        id: `member_00`,
        kind: `neon`,
        ph: .5
    }, {
        id: `member_03`,
        kind: `voxel`,
        ph: .86,
        bx: 1.75
    }, {
        id: `member_14`,
        kind: `terracotta`,
        ph: .3
    }, {
        id: `member_13`,
        kind: `holo`,
        ph: .8
    }, {
        id: `member_11`,
        kind: `points`,
        ph: .42
    }, {
        id: `member_06`,
        kind: `vinyl`,
        ph: .74,
        tight: !0
    }, {
        id: `member_08`,
        kind: `plaster`,
        ph: .85,
        tight: !0
    }],
    In = e => -1.3 - 1.5 * e,
    Ln = e => e % 2 ? 1 : -1,
    Rn = .7,
    zn = {
        k: .55,
        max: 40
    },
    Bn = Fn.length + 2 - 1,
    Vn = e => Math.min(Bn, Math.max(0, 1 + (.7 - e) / 1.5)),
    Hn = [`bronze`, `marble`, `porcelain`, `wood`, `wax`, `gold`, `ice`, `neon`, `voxel`, `terracotta`, `holo`, `points`, `vinyl`, `plaster`, `clay`, `tin`, `chrome`],
    Un = e => Hn[(Hn.indexOf(e) + 1) % Hn.length],
    Wn = 1.55,
    Gn = -19.9,
    Kn = -21.7,
    qn = {
        fwd: 1.45,
        back: .85,
        accel: 4.2,
        turn: 78 * n,
        turnAccel: 9,
        follow: 22
    },
    Jn = {
        lo: -24 * n,
        hi: 18 * n
    },
    Yn = 4 * n,
    Xn = .62,
    Zn = [
        [
            [-.2, 1.35],
            [1.6, .45],
            [1.6, 3.95],
            [-.2, 3.05]
        ],
        [
            [-.62, -.9],
            [Xn, -.9],
            [1.6, .45],
            [-.2, 1.35]
        ],
        [
            [-.62, Kn],
            [Xn, Kn],
            [Xn, -.9],
            [-.62, -.9]
        ]
    ],
    Qn = [
        [.9, 2.75],
        [.55, .85],
        [0, -1.25],
        [0, -21.2]
    ];

function $n(e, t, n) {
    let r = 0;
    for (let i = 0; i < e.length; i++) {
        let [a, o] = e[i], [s, c] = e[(i + 1) % e.length], l = (s - a) * (n - o) - (c - o) * (t - a);
        if (Math.abs(l) < 1e-12) continue;
        let u = l > 0 ? 1 : -1;
        if (r === 0) r = u;
        else if (u !== r) return !1
    }
    return !0
}

function er(e, t, n, r, i, a, o) {
    let s = n - e,
        c = r - t,
        l = s * s + c * c,
        u = l > 0 ? D(((i - e) * s + (a - t) * c) / l) : 0;
    return o[0] = e + s * u, o[1] = t + c * u, (o[0] - i) ** 2 + (o[1] - a) ** 2
}
var tr = [0, 0];

function nr(e, t, n = [0, 0]) {
    for (let r of Zn)
        if ($n(r, e, t)) return n[0] = e, n[1] = t, n;
    let r = 1 / 0;
    for (let i of Zn)
        for (let a = 0; a < i.length; a++) {
            let [o, s] = i[a], [c, l] = i[(a + 1) % i.length], u = er(o, s, c, l, e, t, tr);
            u < r && (r = u, n[0] = tr[0], n[1] = tr[1])
        }
    return n
}
var rr = (e, t) => Zn.some(n => $n(n, e, t)),
    ir = class {
        pts;
        cum = [0];
        length;
        constructor(e) {
            this.pts = e;
            for (let t = 1; t < e.length; t++) this.cum.push(this.cum[t - 1] + Math.hypot(e[t][0] - e[t - 1][0], e[t][1] - e[t - 1][1]));
            this.length = this.cum[this.cum.length - 1]
        }
        project(e, t) {
            let n = 1 / 0,
                r = 0;
            for (let i = 0; i + 1 < this.pts.length; i++) {
                let [a, o] = this.pts[i], [s, c] = this.pts[i + 1], l = er(a, o, s, c, e, t, tr);
                l < n && (n = l, r = this.cum[i] + Math.hypot(tr[0] - a, tr[1] - o))
            }
            return r
        }
        at(e, t = {
            x: 0,
            z: 0,
            dx: 0,
            dz: -1
        }) {
            e = D(e, 0, this.length);
            let n = 0;
            for (; n + 2 < this.pts.length && this.cum[n + 1] < e;) n++;
            let [r, i] = this.pts[n], [a, o] = this.pts[n + 1], s = this.cum[n + 1] - this.cum[n] || 1, c = D((e - this.cum[n]) / s);
            return t.x = r + (a - r) * c, t.z = i + (o - i) * c, t.dx = (a - r) / s, t.dz = (o - i) / s, t
        }
    },
    ar = (e, t) => Math.atan2(-e, -t),
    or = e => e - 2 * Math.PI * Math.floor((e + Math.PI) / (2 * Math.PI));

function sr(e, t, r) {
    let i = t + 2 * n + .45 * Math.abs(r),
        o = D(82 * n - i, 25 * n, 70 * n),
        s = M(.8, -.9, e);
    return [a(-110 * n, -o, s), a(160 * n, o, s)]
}
var cr = class {
        x = 0;
        z = 0;
        eye = Wn;
        yaw = 0;
        pitch = 0;
        yawT = 0;
        pitchT = 0;
        vx = 0;
        vz = 0;
        turnV = 0;
        lookIdle = 10;
        idle = 10;
        stuck = 0;
        moved = 0;
        place(e, t, n, r = Yn) {
            let [i, a] = nr(e, t);
            this.x = i, this.z = a, this.yaw = this.yawT = n, this.pitch = this.pitchT = r, this.vx = this.vz = this.turnV = 0, this.lookIdle = 10, this.idle = 0
        }
        get speed() {
            return Math.hypot(this.vx, this.vz)
        }
        get fwdSpeed() {
            return -Math.sin(this.yaw) * this.vx - Math.cos(this.yaw) * this.vz
        }
        step(e, t, n, r) {
            if (e <= 0) return;
            let i = Math.abs(t.fwd) > .02 || Math.abs(t.turn) > .02 || t.dragYaw !== 0 || t.dragPitch !== 0;
            this.idle = i ? 0 : this.idle + e, (t.dragYaw !== 0 || t.dragPitch !== 0) && (this.yawT += t.dragYaw, this.pitchT += t.dragPitch, this.lookIdle = 0), this.turnV = p(this.turnV, t.turn * qn.turn, qn.turnAccel, e), this.yawT += this.turnV * e, this.yawT += (t.nudgeYaw ? ? 0) * e, this.pitchT += (t.nudgePitch ? ? 0) * e, Math.abs(t.turn) > .05 && (this.lookIdle = 0), this.lookIdle += e;
            let a = this.fwdSpeed;
            if (this.stuck = t.fwd > .5 && this.speed < .25 ? this.stuck + e : 0, r !== null && (a > .25 && this.lookIdle > 1.4 || this.stuck > .5 && this.lookIdle > .5)) {
                let t = this.stuck > .5 ? 1.8 : .9 * D(a / qn.fwd) * M(1.4, 2.4, this.lookIdle);
                this.yawT = p(this.yawT, this.yawT + or(r - this.yawT), t, e), this.pitchT = p(this.pitchT, Yn, 1.2 * t, e)
            }
            let [o, s] = sr(this.z, n, this.pitch);
            this.yawT = D(this.yawT, o, s), this.pitchT = D(this.pitchT, Jn.lo, Jn.hi), this.yaw = D(p(this.yaw, this.yawT, qn.follow, e), o, s), this.pitch = p(this.pitch, this.pitchT, qn.follow, e);
            let c = t.fwd > 0 ? t.fwd * qn.fwd : t.fwd * qn.back,
                l = -Math.sin(this.yaw),
                u = -Math.cos(this.yaw);
            this.vx = p(this.vx, l * c, qn.accel, e), this.vz = p(this.vz, u * c, qn.accel, e);
            let d = this.x + this.vx * e,
                f = this.z + this.vz * e,
                [m, h] = nr(d, f);
            (m !== d || h !== f) && (this.vx = (m - this.x) / e, this.vz = (h - this.z) / e), this.moved += Math.hypot(m - this.x, h - this.z), this.x = m, this.z = h
        }
    },
    lr = {
        KeyW: [1, 0],
        ArrowUp: [1, 0],
        KeyS: [-1, 0],
        ArrowDown: [-1, 0],
        KeyA: [0, 1],
        ArrowLeft: [0, 1],
        KeyD: [0, -1],
        ArrowRight: [0, -1]
    },
    ur = 8,
    dr = new Set([`Enter`, `NumpadEnter`, `Space`, ` `]),
    fr = `button, a[href], summary, [role="button"], [role="link"], [data-ui]`,
    pr = e => {
        let t = e.target;
        return !!t ? .closest ? .(`input, textarea, select, dialog[open], [contenteditable]`) || dr.has(e.code || e.key) && !!t ? .closest ? .(fr)
    },
    mr = class {
        enabled = !1;
        held = new Set;
        dragX = 0;
        dragY = 0;
        dragTotal = 0;
        dragging = !1;
        clicks = [];
        onGesture = () => {};
        look = {
            id: -1,
            x: 0,
            y: 0,
            x0: 0,
            y0: 0,
            t0: 0
        };
        offs = [];
        constructor(e) {
            let t = (e, t, n, r) => {
                e.addEventListener(t, n, r), this.offs.push(() => e.removeEventListener(t, n, r))
            };
            t(window, `keydown`, e => {
                if (e.metaKey || e.ctrlKey || e.altKey || pr(e)) return;
                let t = e.code || e.key;
                lr[t] && this.held.add(t), this.enabled && (lr[t] || t === `Space`) && (e.preventDefault(), this.onGesture())
            }), t(window, `keyup`, e => {
                this.held.delete(e.code || e.key)
            }), t(window, `blur`, () => {
                this.held.clear(), this.look.id = -1, this.dragging = !1
            }), t(e, `pointerdown`, e => {
                !this.enabled || this.look.id !== -1 || e.pointerType === `mouse` && e.button !== 0 || (this.look = {
                    id: e.pointerId,
                    x: e.clientX,
                    y: e.clientY,
                    x0: e.clientX,
                    y0: e.clientY,
                    t0: performance.now()
                }, this.dragging = !1)
            }), t(window, `pointermove`, e => {
                let t = this.look;
                if (e.pointerId === t.id && (!this.dragging && Math.hypot(e.clientX - t.x0, e.clientY - t.y0) > ur && (this.dragging = !0, t.x = t.x0, t.y = t.y0), this.dragging)) {
                    let n = e.clientX - t.x,
                        r = e.clientY - t.y;
                    this.dragX += n, this.dragY += r, this.dragTotal += Math.hypot(n, r), t.x = e.clientX, t.y = e.clientY
                }
            });
            let n = (e, t) => {
                let n = this.look;
                e.pointerId === n.id && (!t && !this.dragging && performance.now() - n.t0 < 600 && this.enabled && this.clicks.push({
                    x: e.clientX,
                    y: e.clientY
                }), n.id = -1, this.dragging = !1)
            };
            t(window, `pointerup`, e => n(e, !1)), t(window, `pointercancel`, e => n(e, !0))
        }
        keys() {
            let e = 0,
                t = 0;
            for (let n of this.held) {
                let r = lr[n];
                r && (e += r[0], t += r[1])
            }
            return [D(e, -1, 1), D(t, -1, 1)]
        }
        takeDrag() {
            let e = [this.dragX, this.dragY];
            return this.dragX = this.dragY = 0, e
        }
        reset() {
            this.dragX = this.dragY = 0, this.clicks.length = 0, this.look.id = -1, this.dragging = !1
        }
        dispose() {
            for (let e of this.offs) e();
            this.offs = []
        }
    },
    hr = `<svg viewBox="-16 -22 32 44" aria-hidden="true"><path class="halo" d="M8 -16 L-6 0 L8 16"/><path d="M8 -16 L-6 0 L8 16"/></svg>`,
    gr = new WeakMap,
    _r = class {
        root;
        x = 0;
        y = 0;
        held = !1;
        onGesture = () => {};
        base;
        knob;
        arrows;
        id = -1;
        on = !1;
        knobAt = ``;
        lit = -1;
        offs = [];
        iris;
        constructor(e, t) {
            this.root = y(`div`, `mu-pad${t?` is-touch`:``}`), this.root.dataset.ui = ``, this.root.dataset.gateClear = ``, this.root.setAttribute(`role`, `group`), this.root.setAttribute(`aria-label`, `移動パッド（上：前へ 下：後ろへ 左右：向きを変える）`), this.root.dataset.enAria = `Movement pad (up: forward, down: back, left / right: turn)`, this.root.innerHTML = `<div class="mu-pad__base"><i class="mu-pad__a is-u"></i><i class="mu-pad__a is-d"></i><i class="mu-pad__a is-l"></i><i class="mu-pad__a is-r"></i><b class="mu-pad__knob"></b></div>` + (t ? `` : `<p class="mu-pad__keys"><kbd>WASD</kbd><span>/</span><kbd>↑←↓→</kbd></p>`), this.base = this.root.querySelector(`.mu-pad__base`), this.knob = this.root.querySelector(`.mu-pad__knob`), this.arrows = [...this.root.querySelectorAll(`.mu-pad__a`)], Ye(this.root), e.appendChild(this.root);
            let n = this.base,
                r = e => {
                    let t = n.getBoundingClientRect(),
                        r = t.width / 2,
                        i = (e.clientX - (t.left + r)) / (r * .62),
                        a = -(e.clientY - (t.top + r)) / (r * .62),
                        o = Math.hypot(i, a);
                    o > 1 && (i /= o, a /= o), this.x = i, this.y = a
                },
                i = e => {
                    if (!(!this.on || this.id !== -1 || e.pointerType === `mouse` && e.button !== 0)) {
                        this.id = e.pointerId;
                        try {
                            n.setPointerCapture(e.pointerId)
                        } catch {}
                        this.held = !0, this.root.classList.add(`is-held`), r(e), e.preventDefault(), this.onGesture()
                    }
                },
                a = e => {
                    e.pointerId === this.id && r(e)
                },
                o = e => {
                    e.pointerId === this.id && (this.id = -1, this.held = !1, this.x = this.y = 0, this.root.classList.remove(`is-held`))
                },
                s = (e, t) => {
                    n.addEventListener(e, t), this.offs.push(() => n.removeEventListener(e, t))
                };
            s(`pointerdown`, i), s(`pointermove`, a), s(`pointerup`, o), s(`pointercancel`, o), s(`lostpointercapture`, o), s(`contextmenu`, e => e.preventDefault()), this.iris = Ke(n), gr.set(e, this)
        }
        way(e) {
            this.iris.heading(e === 0 ? null : e > 0 ? Math.PI / 2 : -Math.PI / 2)
        }
        release() {
            this.id = -1, this.held = !1, this.x = this.y = 0, this.root.classList.remove(`is-held`)
        }
        show(e) {
            e !== this.on && (this.on = e, this.root.classList.toggle(`is-on`, e), e || this.release())
        }
        draw(e, t) {
            let n = .3,
                r = `translate(${(e*n*100).toFixed(1)}%, ${(-t*n*100).toFixed(1)}%)`;
            r !== this.knobAt && (this.knobAt = r, this.knob.style.transform = r);
            let i = t > .3 | (t < -.3 ? 2 : 0) | (e < -.3 ? 4 : 0) | (e > .3 ? 8 : 0);
            i !== this.lit && (this.lit = i, this.arrows.forEach((e, t) => e.classList.toggle(`is-lit`, !!(i & 1 << t))))
        }
        dispose() {
            for (let e of this.offs) e();
            this.offs = [], this.iris.detach(), this.root.remove()
        }
    },
    vr = class {
        l;
        r;
        side = 0;
        pad;
        constructor(e) {
            let t = t => {
                let n = y(`div`, `mu-way ${t}`, `<i>${hr}</i><span>記念碑へ</span>`);
                return n.setAttribute(`aria-hidden`, `true`), e.appendChild(n), n
            };
            this.l = t(`mu-way--l`), this.r = t(`mu-way--r`), this.pad = gr.get(e) ? ? null
        }
        set(e) {
            e !== this.side && (this.side = e, this.pad ? .way(e), this.l.classList.toggle(`is-on`, e > 0), this.r.classList.toggle(`is-on`, e < 0))
        }
        dispose() {
            this.l.remove(), this.r.remove()
        }
    },
    yr = new _e(16730139),
    br = class {
        mesh;
        u = {
            s: O(0),
            time: O(0),
            gain: O(0),
            pulse: O(1)
        };
        geo;
        mat;
        constructor(n, i = {}) {
            let a = i.spacing ? ? .95,
                o = i.from ? ? .7,
                c = n.length - (i.to ? ? .2),
                l = [],
                u = [],
                f = {
                    x: 0,
                    z: 0,
                    dx: 0,
                    dz: -1
                };
            for (let e = o; e <= c; e += a) {
                n.at(e, f);
                let t = n.at(e + .35, {
                        x: 0,
                        z: 0,
                        dx: 0,
                        dz: -1
                    }),
                    r = t.x - f.x || f.dx,
                    i = t.z - f.z || f.dz,
                    a = Math.hypot(r, i) || 1;
                l.push(f.x, f.z, r / a, i / a), u.push(e)
            }
            let p = new ue(1, 1),
                m = new B;
            m.setIndex(p.getIndex()), m.setAttribute(`position`, p.getAttribute(`position`)), m.setAttribute(`uv`, p.getAttribute(`uv`)), m.setAttribute(`iA`, new t(new Float32Array(l), 4)), m.setAttribute(`iS`, new t(new Float32Array(u), 1)), m.instanceCount = u.length, this.geo = m;
            let g = new e({
                transparent: !0,
                depthWrite: !1,
                blending: 2
            });
            g.name = `museum-guide`, g.forceSinglePass = !0;
            let _ = ye(`iA`, `vec4`),
                v = ye(`iS`, `float`),
                y = .44,
                x = .3,
                C = De.xy,
                te = _.zw,
                E = k(te.y.negate(), te.x),
                D = _.xy.add(E.mul(C.x.mul(y))).add(te.mul(C.y.mul(x)));
            g.positionNode = d(D.x, A(.004), D.y);
            let ne = this.u;
            g.colorNode = Ue(() => {
                let e = s().sub(.5).mul(k(y, x)),
                    t = k(0, x * .3),
                    n = k(y * .42, -.09),
                    i = k(w(e.x), e.y).sub(t),
                    a = n.sub(t),
                    o = T(r(i, a).div(r(a, a)), 0, 1),
                    c = b(i.sub(a.mul(o))),
                    l = le(S(c), .002),
                    u = A(1).sub(U(A(.034).sub(l), A(.034).add(l), c)),
                    f = v.sub(ne.s),
                    p = U(.45, 1.3, f).mul(A(1).sub(U(6.5, 10.5, f))),
                    m = ee(f.mul(Math.PI * 2 / 3.6).sub(ne.time.mul(Math.PI * 2 * .75))).mul(.5).add(.5),
                    g = m.mul(m).mul(m).mul(m).mul(ne.pulse),
                    _ = p.mul(ne.gain).mul(A(.55).add(g.mul(1.9)));
                return d(yr.r, yr.g, yr.b).mul(1.35).add(d(1, .55, .35).mul(g.mul(.35))).mul(_).mul(u).mul(N(A(1), h(f.negate().mul(.02)).add(.5)))
            })(), this.mat = g, this.mesh = new j(m, g), this.mesh.name = `museum-guide`, this.mesh.frustumCulled = !1, this.mesh.renderOrder = 5
        }
        update(e, t, n, r) {
            this.u.s.value = e, this.u.time.value = t, this.u.gain.value = n, this.u.pulse.value = r, this.mesh.visible = n > .002
        }
        dispose() {
            this.geo.dispose(), this.mat.dispose()
        }
    },
    xr = [At],
    Sr = new _e(1.005, .066, 5e-4),
    Cr = new _e(.028, .002, 2e-4),
    wr = [`WE`, `ARE`],
    Tr = {
        height: 1.22,
        lineGap: .2,
        res: 240
    },
    Er = new _e(16765857),
    Dr = new _e(11125503),
    Or = 4.7,
    kr = 3.5,
    Ar = 3.5,
    jr = .02,
    Mr = {
        apex: new Ve(.25, J.rot.ceil + 4, J.rot.cz + .6),
        at: new Ve(0, 1, J.rot.cz),
        color: new _e(.8, .88, 1)
    },
    Nr = W(`記念碑まで歩く`, `Walk to the monument`),
    Pr = W(`ドラッグで見回す`, `Drag to look around`),
    Fr = {
        label: W(`クリックで素材を変える`, `Click to change the material`),
        touchLabel: W(`タップで素材を変える`, `Tap to change the material`)
    },
    Ir = -29.48,
    Lr = -22.31,
    Rr = {
        dx: 244,
        dy: -200,
        flip: !0
    },
    zr = {
        dx: -26,
        dy: -64.5,
        attach: `edge`
    },
    Br = new Ve(1.2, 1.3, Ir),
    Vr = new Ve(2, 2.3, Ir),
    Hr = new Ve(1, 3.45, Lr),
    Ur = new Ve,
    Wr = 1,
    Gr = e => (e.layers.set(Wr), e),
    Z = (e = 0, t = 0, n = 0) => new Ve(e, t, n),
    Q = Z(),
    Kr = Z(),
    qr = Z(),
    Jr = Z(),
    Yr = new de,
    Xr = new i,
    Zr = new i,
    Qr = new ge,
    $r = new u,
    ei = new F,
    ti = new Le,
    ni = Array.from({
        length: 8
    }, () => new Ve);

function ri(e, t, n) {
    for (let n = 0; n < 8; n++) ni[n].set(n & 1 ? e.max.x : e.min.x, n & 2 ? e.max.y : e.min.y, n & 4 ? e.max.z : e.min.z).applyMatrix4(t);
    for (let e of n.planes) {
        let t = 0;
        for (let n of ni) e.distanceToPoint(n) < 0 && t++;
        if (t === 8) return !1
    }
    return !0
}
var ii = .3,
    ai = 5,
    oi = () => new Promise(e => requestAnimationFrame(() => e())),
    si = e => e ? .portrait ? D(2 * Math.atan(Math.tan(21 * n) / e.aspect) / n, 56, 74) : 50;

function ci(t) {
    let i, l, u, m = null,
        h, ee, v = null,
        b = null,
        S = null,
        T = !1,
        E = null,
        ne = null,
        re = null,
        ae = null,
        k = null,
        oe = null,
        se, N = [],
        F = null,
        I = null,
        fe = O(1),
        pe = null,
        L = null,
        me, R = null,
        z, ge, ye, B, V = !1,
        Te = !1,
        De = [],
        H = {
            detail: !0,
            shadows: !0,
            texScale: 1
        },
        je = `v3`,
        Pe = () => Pn.scale * jn(!0, je),
        Le = !1,
        ze = !1,
        He = !1,
        Ke = !0,
        Ye = null,
        W = null,
        G = new cr,
        $e = new ir(Qn),
        K = null,
        rt = null,
        at = null,
        st = null,
        q = `walk`,
        ut = 0,
        wt = Qn[0][1],
        At = 50,
        Pt = 1,
        Lt = Wn,
        Rt = !0,
        Bt = !1,
        Vt = ``,
        Ht = null,
        Ut = [0, 0],
        Wt = 0,
        Qt = 0,
        on = 0,
        sn = null,
        cn = null,
        ln = null,
        dn = 0,
        fn = 0,
        mn = null,
        hn = !1,
        gn = 0,
        X = 0,
        vn = 0,
        yn = new de,
        xn = Z(),
        Sn = 0,
        wn = 0,
        On = 0,
        kn = -1,
        Hn = `done`,
        qn = !1,
        Xn = 0,
        $n = -10,
        er = 0,
        tr = -1,
        lr = [],
        ur = [];

    function dr(e) {
        let t = se.statues[e.id],
            [n, r, i] = It[e.kind];
        return {
            no: e.i + 1,
            label: t ? .label ? ? e.id,
            nick: t ? .nickname ? ? ``,
            en: n,
            ja: r,
            cap: i
        }
    }

    function fr(e) {
        let t = e === 0,
            r = t ? null : Fn[e - 1],
            i = t ? Pn.id : r.id,
            a = se.statues[i],
            o = t ? -1 : Ln(e - 1),
            s = new c;
        s.name = `bay-` + i;
        let u = t ? Math.PI / 2 : -o * 40 * n;
        t ? s.position.set(...Pn.pos) : s.position.set(o * (r.bx ? ? 1.7), 0, In(e - 1)), s.rotation.y = u, l.add(s);
        let d = a.base,
            f = a.bbox,
            p = d.type === `stand`,
            m = t ? Pe() : 1,
            g = En * (t ? m : Dn[p ? `stand` : `cut`] * jn(!!r.tight, je)) / (a ? .faceH || .45),
            _ = a.head ? ? [0, (f.t + d.y) / 2 + .4],
            ee = Mn(t ? Pn.plinthH : r.ph, (_[1] - d.y) * g, je),
            v, y;
        t ? v = y = .48 * Math.max(1, m * .92) : {
            w: v,
            d: y
        } = Nn(d, f, g);
        let b = Mt(h, {
            w: v,
            d: y,
            h: ee,
            scale: m,
            socle: t
        });
        s.add(b.group);
        let x = new c;
        x.scale.setScalar(g);
        let S = p ? (f.l + f.r) / 2 : (d.x0 + d.x1) / 2,
            C = (d.zF + d.zB) / 2;
        x.position.set(-S * g, ee - d.y * g - .004, -C * g), s.add(x), s.updateWorldMatrix(!0, !0);
        let w = x.localToWorld(Z((f.l + f.r) / 2, (f.t + d.y) / 2, .05)),
            te = x.localToWorld(Z(_[0], _[1], .12)),
            T = Z(_[0], f.t - .06, .12),
            E = x.localToWorld(T.clone()),
            D = (f.t - d.y) * g,
            ne = s.position.z,
            re = t ? Z(1, J.vest.ceil - .14, 3.35) : Z(o * .35, J.ceil - .14, ne + 1.45),
            O = t ? Z(-2.9, J.vest.ceil - .2, .9) : Z(o * 2.35, J.ceil - .14, ne - 1.1),
            ie = _t(h);
        ie.group.position.copy(re), ie.group.lookAt(t ? te : w), l.add(ie.group);
        let ae = t ? `clay` : r.kind,
            k = Gt(W.ph);
        a.head && (k.seamX = a.head[0]), t && k.tinZ.set(.42, -9, -9);
        let A = new j(W.placeholder, t ? W.coreHero : W.core);
        A.name = `statue-` + i, Gr(A), A.castShadow = !0, A.receiveShadow = !0, A.userData.bu = k, A.visible = !1, x.add(A);
        let oe = {
                i: e,
                id: i,
                first: t,
                side: o,
                kind0: ae,
                zapBay: !!r ? .zap,
                group: s,
                stat: x,
                s: g,
                h: D,
                plinthTop: ee,
                rot0: u,
                rot: u,
                rotV: 0,
                centerL: s.worldToLocal(w.clone()),
                headL: s.worldToLocal(te.clone()),
                topL: s.worldToLocal(E.clone()),
                center: w,
                head: te,
                top: E,
                topObj: T,
                centerRest: w.clone(),
                box: new Me(Z(f.l, d.y, -.7), Z(f.r, f.t, .7)),
                keyPos: re,
                rimPos: O,
                fixture: ie,
                plaque: null,
                socle: b.socle,
                state: `idle`,
                bu: k,
                core: A,
                kind: ae,
                from: ae,
                zapAt: -10,
                crackleAt: -10,
                lod: 0,
                theta: 0,
                inView: !1
            },
            M = Math.min(.36, v - .08);
        return oe.plaque = new Tn(dr(oe), W.plaque.material, M, M * .44), oe.plaque.mesh.position.set(0, ee - .06 - M * .22, y / 2 + .003), Gr(oe.plaque.mesh), s.add(oe.plaque.mesh), oe
    }

    function pr(e, t) {
        let n = e.geo,
            r = e.header,
            i = se.statues[e.id];
        if (!n || !r || !t ? .width || typeof OffscreenCanvas > `u`) return;
        let a = i ? .faceH || .45,
            o = i.bbox,
            {
                planeW: s,
                planeH: c
            } = r.frame,
            l = t.width,
            u = t.height,
            d = e => (e / s + .5) * l,
            f = e => (.5 - e / c) * u,
            p = e.topObj.x,
            m = (i.head ? i.head[1] : o.t - a) + a * .3,
            h = Math.max(0, Math.floor(d(p - a * .25))),
            g = Math.min(l, Math.ceil(d(p + a * .25))),
            _ = Math.max(0, Math.floor(f(o.t + .02))),
            ee = Math.min(u, Math.ceil(f(m))),
            v = g - h,
            y = ee - _;
        if (v < 8 || y < 8) return;
        let b;
        try {
            let e = new OffscreenCanvas(v, y).getContext(`2d`, {
                willReadFrequently: !0
            });
            if (!e) return;
            e.drawImage(t, h, _, v, y, 0, 0, v, y), b = e.getImageData(0, 0, v, y).data
        } catch {
            return
        }
        let x = (e, t) => e >= 0 && t >= 0 && e < v && t < y && b[(t * v + e) * 4 + 2] >= 128,
            S = [];
        for (let e = 0; e < v; e++)
            for (let t = 0; t < y; t++)
                if (x(e, t)) {
                    S.push(t);
                    break
                }
        if (!S.length) return;
        S.sort((e, t) => e - t);
        let C = a / c * u,
            w = Math.max(2, Math.round(C * .04)),
            te = Math.max(1, w >> 1),
            T = Math.round(d(p)) - h,
            E = -1;
        for (let e = S[S.length >> 1] + Math.round(C * .05); e < y - w && E < 0; e++) {
            let t = !0;
            for (let n = -w; n <= w && t; n += te)
                for (let r = 0; r <= w && t; r += te) t = x(T + n, e + r);
            t && (E = e)
        }
        if (E < 0) return;
        let D = (.5 - (_ + E + .5) / u) * c,
            ne = 1 / 0,
            re = e.topObj.z;
        for (let e = 0; e < n.nv; e++) {
            let t = (n.pos[e * 3] - p) ** 2 + (n.pos[e * 3 + 1] - D) ** 2;
            t < ne && (ne = t, re = n.pos[e * 3 + 2])
        }
        e.topObj.set(p, D, re), e.stat.updateMatrix(), e.topL.copy(e.topObj).applyMatrix4(e.stat.matrix), e.top.copy(e.topL).applyMatrix4(e.group.matrixWorld)
    }
    let hr = Z(),
        gr = Z(),
        yr = Z(),
        xr = Z(),
        Ir = !1,
        ci = () => Ir ? hr.copy(u.position) : hr.set(Qn[0][0], Wn, Qn[0][1]);

    function li(e) {
        let t = ci(),
            r = gr.copy(t).addScaledVector(xr, .8),
            a = e.center,
            o = Math.min(t.distanceTo(a), r.distanceTo(a)),
            s = e.lv ? ? 2,
            c = i.stage.info,
            l = e.texH ? ? 1024,
            d = (e.header ? .frame.planeH ? ? 2) * e.s,
            f = Math.min(Ir ? u.fov : 90, si(c)) * n,
            p = d * c.cssH * i.perf.cap / (2 * Math.tan(f / 2) * l),
            m = 2 * p * 1.25,
            h = 4 * p * 1.25,
            g = o < (s === 0 ? m + 1.2 : m) ? 0 : o < (s <= 1 ? h + 1.2 : h) ? 1 : 2;
        return t.z < -.9 && a.z > Math.max(t.z, r.z) + .3 ? g = 2 : (e.kind === `points` || e.from === `points` && X - e.zapAt < .4) && g === 2 && (g = 1), e.lv = g, {
            level: g,
            d: o
        }
    }

    function ui(e) {
        S && (Ir && e > 0 && (Q.copy(u.position).sub(yr).divideScalar(e), Q.length() > 3 && Q.set(0, 0, 0), xr.lerp(Q, Math.min(1, e * 6))), yr.copy(u.position), Ir = !0, S.update(e => li(N[e]), X))
    }

    function di(e) {
        e.group.rotation.y = e.rot, e.group.updateMatrixWorld(!0), e.center.copy(e.centerL).applyMatrix4(e.group.matrixWorld), e.head.copy(e.headL).applyMatrix4(e.group.matrixWorld), e.top.copy(e.topL).applyMatrix4(e.group.matrixWorld)
    }
    async function fi(e) {
        if (e.state === `idle`) {
            e.state = `loading`;
            try {
                let t = se.statues[e.id],
                    n = await it(i.assets, `gen/museum/` + t.file);
                if (V) return;
                let r = n.header,
                    a = await nt(n.get(`geo`));
                if (V || (await oi(), V)) return;
                let o = ft(a, r);
                if (await oi(), V) {
                    o.geo.dispose();
                    return
                }
                let s = H.texScale,
                    l = _n(i.assets, `gen/museum/` + t.file, s, n);
                e.header = r, e.texH = l.height;
                let u = await S.add(e.i, l, li(e).level),
                    d = u && !V ? await kt(n.get(`map0`), {
                        scale: s * .5
                    }) : null;
                if (l.drop(), V || !u) {
                    pt(d), o.geo.dispose();
                    return
                }
                if (e.geo = o, e.maps = u, pr(e, d.image), pt(d), r.vox && (e.voxData = dt(await nt(n.get(`vox`)))), e.bu.maps = e.maps, e.core.geometry = o.geo, o.geo.boundingBox && e.box.copy(o.geo.boundingBox).expandByScalar(.02), e.first && r.print) {
                    let t = r.print,
                        a = await kt(n.get(`print`));
                    if (V) {
                        pt(a);
                        return
                    }
                    i.renderer.initTexture(a);
                    let o = t.w * t.upp,
                        s = t.h * t.upp,
                        l = new ue(o, s),
                        u = l.attributes.uv;
                    for (let e = 0; e < u.count; e++) u.setY(e, 1 - u.getY(e));
                    e.printU = {
                        burn: O(-1),
                        origin: O(Z(0, 0, 0))
                    };
                    let d = new j(l, an(Xt(a, e.printU), `own`)),
                        f = new c;
                    f.position.y = e.plinthTop + (J.socleH - .012) * Pe(), f.scale.setScalar(Pe()), e.group.add(f), d.position.set((t.w / 2 - t.uc) * t.upp, (t.vb - t.h / 2) * t.upp, -.004), d.castShadow = !0, d.receiveShadow = !0, Gr(d), d.visible = !1, f.add(d), f.updateWorldMatrix(!0, !0), e.printU.origin.value.copy(d.worldToLocal(e.top.clone())).setZ(0), e.print = d, e.printTex = a
                }
                if (await oi(), V) return;
                gi(e, e.kind, !0), e.state = `ready`
            } catch (t) {
                console.error(`[museum] statue failed`, e.id, t), e.state = `error`
            }
        }
    }

    function pi(e, t) {
        return !e.geo || !e.header || !W ? null : t === `points` ? (e.points || (e.points = en(e.geo, W.points), Gr(e.points.object).visible = !1, e.points.object.userData.bu = e.bu, e.stat.add(e.points.object)), e.points.object) : t === `voxel` ? (e.voxel || (e.voxel = rn(e.voxData ? ? mi(e), e.header, W.voxel), Gr(e.voxel.object).visible = !1, e.voxel.object.castShadow = !0, e.voxel.object.userData.bu = e.bu, e.stat.add(e.voxel.object)), e.voxel.object) : null
    }

    function mi(e) {
        let t = e.geo,
            n = [],
            r = [],
            i = [],
            a = [],
            o = [];
        for (let e = 0; e + 4 < t.gh; e += 4)
            for (let s = 0; s + 4 < t.gw; s += 4) {
                let c = t.at[e * t.gw + s];
                if (c < 0) continue;
                n.push(t.pos[c * 3]), r.push(t.pos[c * 3 + 1]), i.push(t.pos[c * 3 + 2]), a.push(t.pos[(c + t.nv) * 3 + 2]);
                let l = .35 + .3 * ((s * 7 + e * 13) % 5) / 5;
                o.push(l, l * .95, l * .9)
            }
        return {
            n: n.length,
            x: new Float32Array(n),
            y: new Float32Array(r),
            f: new Float32Array(i),
            b: new Float32Array(a),
            rgb: new Float32Array(o)
        }
    }

    function hi(e, t) {
        return Ft(t) ? e.geo ? e.core : null : pi(e, t)
    }

    function gi(e, t, n = !1) {
        if (!e.geo) return;
        e.kind = t, e.from = t;
        let r = e.bu;
        r.zap.w = -1, r.role = 0, r.rolePoints = 0, r.roleVoxel = 0;
        for (let t of [e.core, e.points ? .object, e.voxel ? .object]) t && (t.visible = !1);
        let i = hi(e, t);
        i && (i.visible = !0), Ft(t) && (r.kindA = Y[t], r.kindB = Y[t]), e.plaque.set(dr(e))
    }

    function _i(e, t, n) {
        if (!e.geo) return;
        e.zapAt > X - ii && gi(e, e.kind), e.from = e.kind, e.kind = t, e.zapAt = n;
        let r = e.bu,
            i = e.from,
            a = t;
        Ft(i) && Ft(a) ? (r.kindA = Y[i], r.kindB = Y[a]) : (Ft(i) && (r.kindA = r.kindB = Y[i]), Ft(a) && (r.kindA = r.kindB = Y[a]), pi(e, i), pi(e, a)), e.plaque.set(dr(e)), vi(e, n, .28)
    }

    function vi(e, t, n) {
        lr.push({
            a: e.keyPos.clone().add(Z(0, .02, 0)),
            b: e.top.clone(),
            seed: Math.round(t * 1e3) % 1e5,
            amp: 1,
            width: .012,
            jag: .09,
            branch: .6,
            t0: t
        });
        let r = e.top.clone();
        ur.push({
            t0: t,
            n: 220,
            speed: 2.4,
            seed: Math.round(t * 977) % 1e5,
            life: .45,
            color: new _e(.95, 1, .7),
            origin: (e, t) => {
                let i = t() * Math.PI * 2,
                    a = t() * n;
                return {
                    p: Z(r.x + Math.cos(i) * a * .8, r.y - t() * .5, r.z + Math.sin(i) * a * .3),
                    n: Z(Math.cos(i) * .5, .6, Math.sin(i) * .5),
                    delay: a / 3.4
                }
            }
        }), $n = t
    }

    function yi(e) {
        if (!e || e.state !== `ready` || q === `exit` || e.first && Hn !== `done`) return !1;
        let t = Un(e.kind),
            n = i.audio.play([zt[t]], {
                quantize: `16th`
            });
        return _i(e, t, X + (n > 0 ? Math.max(0, n - vn) : 0)), er++, !0
    }
    let bi = e => B && B.portrait === e ? B.aspect : e ? 9 / 19.5 : 16 / 10;

    function xi(e) {
        let t = N[0],
            r = Pn.shot,
            i = e ? r.fov + 16 : r.fov,
            a = bi(e),
            o = Math.tan(i * n / 2),
            s = se.statues[t.id].bbox,
            c = (s.r - s.l) * t.s,
            l = t.h / (e ? r.fill * .86 : r.fill) / (2 * o);
        l = Math.max(l, c / ((e ? .84 : .9) * 2 * o * a));
        let u = t.rot0 + t.side * r.az * n,
            d = je === `v6` ? r.pitch * n : Math.asin(D((Wn - t.centerRest.y) / l, -.6, .6)),
            f = t.centerRest.clone().add(Z(Math.sin(u) * l * Math.cos(d), l * Math.sin(d), Math.cos(u) * l * Math.cos(d)));
        return f.x = D(f.x, J.vest.x0 + .3, J.vest.x1 - .3), f.z = D(f.z, J.vest.z0 + .3, J.vest.z1 - .3), f.y = D(f.y, .25, J.ceil - .3), {
            pos: f,
            look: t.centerRest.clone(),
            fov: i,
            roll: 0
        }
    }
    let Si, Ci, wi, Ti, Ei = 0;

    function Di() {
        let e = N[0].centerRest;
        Si = {
            pos: Z(1.55, 1.5, 2.98),
            look: Z(-3.2, 2.3, 3.6).lerp(e, .45),
            fov: 38,
            roll: 0
        }, Ci = {
            pos: Z(.55, 1.45, .75),
            look: Z(-3.2, 2.3, 3.7).lerp(e, .38).add(Z(0, -.42, 0)),
            fov: 62,
            roll: 0
        }, wi = xi(!1), Ti = xi(!0), Ei = B ? .aspect ? ? 0
    }
    let Oi = -1,
        ki = () => Oi >= 0 ? be.inOut(D((X - Oi - x * .5) / (x * 4.5))) : +(Hn === `done`),
        Ai = (e, t, n) => n.setFromRotationMatrix(Xr.lookAt(e, t, Z(0, 1, 0)));

    function ji(e) {
        let t = B ? .portrait ? Ci : Si,
            n = B ? .portrait ? Ti : wi,
            r = ki();
        u.position.lerpVectors(t.pos, n.pos, r), Q.lerpVectors(t.look, n.look, r), Ai(u.position, Q, Yr), u.quaternion.copy(Yr), u.fov = a(t.fov, n.fov, r), Ni(e, .005)
    }

    function Mi(e) {
        e > 0 && (Pt = Math.min(1, Pt + e / 1.2));
        let t = be.inOut(Pt);
        G.eye = a(Lt, Wn, t), u.position.set(G.x, G.eye, G.z), u.rotation.set(G.pitch, G.yaw, 0, `YXZ`), u.fov = a(At, si(B), t), Ni(e, .0025)
    }

    function Ni(e, t) {
        if (i.reducedMotion || (u.translateX(C(X * .7, 3) * t), u.translateY(C(X * .7, 8) * t), u.rotateZ(C(X * .5, 11) * .004 + _(X, $n, .01, 9, 11)), u.rotateX(_(X, $n + .01, .008, 10, 13))), u.aspect = B ? .aspect ? ? 16 / 9, u.near = .05, u.far = 60, u.updateProjectionMatrix(), u.updateMatrixWorld(), m) {
            let t = 0,
                n = 0,
                r = 0;
            if (e > 0 && !i.reducedMotion) {
                Q.set(0, 0, -1).applyQuaternion(yn).add(u.position), Q.project(u);
                let e = q === `intro` ? .55 : .3;
                t = -Q.x * .5 * e, n = -Q.y * .5 * e, Kr.set(0, 0, -1).applyQuaternion(u.quaternion), r = q === `intro` ? D(-Q.subVectors(u.position, xn).dot(Kr) * .25, -.15, .15) : 0
            }
            Sn = p(Sn, Math.abs(t) < .002 ? 0 : D(t, -.06, .06), 30, e), wn = p(wn, Math.abs(n) < .002 ? 0 : D(n, -.06, .06), 30, e), On = p(On, Math.abs(r) < .002 ? 0 : r, 30, e), m.U.blur.value.set(Sn, wn), m.U.zoom.value = On
        }
        yn.copy(u.quaternion), xn.copy(u.position)
    }
    let Pi = () => Math.atan(Math.tan(u.fov * n / 2) * u.aspect);

    function Fi() {
        return B ? .portrait ? Ti : wi
    }

    function Ii(e) {
        let t = Fi();
        e ? (Q.set(0, 0, -1).applyQuaternion(u.quaternion), G.place(u.position.x, u.position.z, ar(Q.x, Q.z), Math.asin(D(Q.y, -1, 1))), Lt = u.position.y, At = u.fov, Pt = 0) : (Q.subVectors(t.look, t.pos).normalize(), G.place(t.pos.x, t.pos.z, ar(Q.x, Q.z), Math.asin(D(Q.y, -1, 1))), Lt = Wn, At = si(B), Pt = 1), G.pitch = G.pitchT = D(G.pitch, Jn.lo, Jn.hi), wt = G.z, q = `walk`, ut = 0, Rt = !0, Bt = !1, K ? .reset()
    }

    function Li() {
        q = `exit`, zi({
            kind: `walk`,
            text: Nr,
            progress: 1
        }), K ? .reset(), rt ? .show(!1), at ? .set(0), Bt || (Bt = !0, i.advance())
    }

    function Ri(e) {
        if (e <= 0) return;
        let t = G,
            n = Math.atan2(1.75 - t.eye, t.z - (J.rot.cz + .1));
        t.yaw = p(t.yaw, t.yaw + or(0 - t.yaw), 2.6, e), t.yawT = t.yaw, t.pitch = p(t.pitch, n, 2.6, e), t.pitchT = t.pitch, t.x = p(t.x, 0, 1.4, e);
        let r = -1.05 * M(Kn + .25, Kn + 1.9, t.z);
        t.vz = p(t.vz, r, 2.4, e), t.vx = 0, t.z = Math.max(Kn + .2, t.z + t.vz * e)
    }

    function zi(e) {
        e && = Bi(e);
        let t = e ? `${e.kind}|${e.text}|${e.progress.toFixed(3)}|${e.target?`${Math.round(e.target[0]*2)},${Math.round(e.target[1]*2)}`:e.offscreen??``}|${e.map?`${e.map.x.toFixed(2)},${e.map.z.toFixed(2)},${e.map.yaw.toFixed(2)}`:``}|${e.keepClear?.map(e=>e.map(e=>Math.round(e/4)).join(`,`)).join(`;`)??``}` : ``;
        t !== Vt && (Vt = t, i.gate(e))
    }

    function Bi(e) {
        B ? .portrait ? Ur.copy(Hr) : Ur.lerpVectors(Br, Vr, D((-1 - G.z) / 16.4));
        let t = q === `intro` ? null : Xe(i.stage, u, Ur, Ut),
            n = t ? null : Ze(u, Ur);
        return !Ht && N.length && (Ht = {
            z0: 3.95,
            z1: J.corrEnd,
            halfWidth: 2.6,
            dots: N.map(e => [e.group.position.x, e.group.position.z]),
            exit: Lr,
            exitHalf: 1.05
        }), { ...e,
            target: t ? [t[0], t[1]] : null,
            offscreen: n,
            lead: Rr,
            leadP: zr,
            unit: `m`,
            left: Math.max(0, G.z - Gn),
            map: Ht ? {
                plan: Ht,
                x: G.x,
                z: G.z,
                yaw: G.yaw
            } : void 0,
            keepClear: q === `intro` ? void 0 : Hi()
        }
    }
    let Vi = [];

    function Hi() {
        Vi.length = 0;
        for (let e of N) {
            if (!e.inView || e.state !== `ready` || e.bu.vis < .5) continue;
            let t = u.position.distanceTo(e.head);
            (e === sn || e.first || t < 4.5) && Vi.push({
                d: t,
                s: e
            })
        }
        Vi.sort((e, t) => e.d - t.d);
        let e = [];
        for (let {
                s: t
            } of Vi) {
            let n = Gi(t);
            if (n && e.push(n), e.length >= 4) break
        }
        return e
    }
    let Ui = Z(),
        Wi = [0, 0];

    function Gi(e) {
        let t = se.statues[e.id],
            n = t.faceH || .45,
            r = t.bbox,
            a = t.head ? ? [0, (r.t + t.base.y) / 2 + .4],
            o = 1 / 0,
            s = 1 / 0,
            c = -1 / 0,
            l = -1 / 0;
        for (let t = 0; t < 4; t++) {
            if (Ui.set(a[0] + (t & 1 ? .9 : -.9) * n, t & 2 ? r.t : a[1] - .9 * n, .12).applyMatrix4(e.stat.matrixWorld), !Xe(i.stage, u, Ui, Wi)) return null;
            o = Math.min(o, Wi[0]), s = Math.min(s, Wi[1]), c = Math.max(c, Wi[0]), l = Math.max(l, Wi[1])
        }
        return [o, s, c, l]
    }
    let Ki = {
        x: 0,
        z: 0,
        dx: 0,
        dz: -1
    };

    function qi() {
        return $e.at(on + 5, Ki), ar(Ki.x - G.x, Ki.z - G.z)
    }
    let Ji = () => D((wt - G.z) / (wt - Gn));

    function Yi(e, t, r) {
        let i = Math.atan2(t - e.group.position.x, r - e.group.position.z),
            a = e.first ? zn.k : Rn,
            o = (e.first ? zn.max : 50) * n;
        return e.rot0 + D(a * or(i - e.rot0), -o, o)
    }

    function Xi(e, t = !1) {
        let n = 2 / ai,
            r = G.x + G.vx * n,
            i = G.z + G.vz * n;
        for (let n of N) {
            let a = q === `intro` && (n.first || !t) || He && !t,
                o = a ? n.rot : Yi(n, r, i);
            if (t) n.rot = o, n.rotV = 0;
            else if (e > 0 && !a) {
                let t = Math.min(e, 1 / 30);
                n.rotV += (25 * (o - n.rot) - 10 * n.rotV) * t, n.rot += n.rotV * t
            }
            di(n)
        }
    }

    function Zi(e) {
        Zr.multiplyMatrices(u.projectionMatrix, u.matrixWorldInverse), $r.setFromProjectionMatrix(Zr, u.coordinateSystem);
        let t = 0;
        for (let r of N) {
            Q.subVectors(u.position, r.center);
            let i = Q.length() || 1,
                a = Math.acos(D((Q.x * Math.sin(r.rot) + Q.z * Math.cos(r.rot)) / i, -1, 1)) / n;
            r.theta = a, r.inView = ri(r.box, r.stat.matrixWorld, $r);
            let o = r.inView && (r.core.visible || !!r.points ? .object.visible || !!r.voxel ? .object.visible),
                s = 1;
            q !== `intro` && !He && o && (a > 36 || r.bu.vis < .5 && a > 34) && (s = 0), r.bu.vis = e > 0 ? p(r.bu.vis, s, 12, e) : s, r.bu.vis > .995 ? r.bu.vis = 1 : r.bu.vis < .005 && (r.bu.vis = 0), Ye !== null && (r.bu.vis = Ye), o && r.bu.vis > .5 && (t = Math.max(t, a))
        }
        fn = t
    }

    function Qi(e, t, r, i) {
        let a = 0,
            o = 0;
        for (let n of N) {
            if (!n.inView || n.theta < 28 || n.bu.vis < .5) continue;
            let i = M(28, 35, n.theta);
            Q.subVectors(n.center, e.position), a -= Math.sign(or(ar(Q.x, Q.z) - t)) * i, o -= Math.sign(r - Yn) * i * .7
        }
        return i.yaw = D(a, -1, 1) * 50 * n, i.pitch = D(o, -1, 1) * 36 * n, i
    }
    let $i = {
        yaw: 0,
        pitch: 0
    };

    function ea() {
        if (q === `intro`) {
            sn = N[0];
            return
        }
        qr.set(0, 0, -1).applyQuaternion(u.quaternion);
        let e = e => {
                if (!e || e.state !== `ready` || e.bu.vis < .5) return 0;
                Q.subVectors(e.center, u.position);
                let t = Q.length();
                if (t > 6.5) return 0;
                let n = Q.dot(qr) / t;
                return n < .55 ? 0 : n ** 6 / (1 + (t / 3) ** 2)
            },
            t = null,
            n = 0;
        for (let r of N) {
            let i = e(r);
            i > n && (n = i, t = r)
        }
        let r = e(sn);
        (!sn || r <= 0 || n > r * 1.35) && (sn = t)
    }

    function ta(e, t) {
        let n = i.stage.info;
        ei.set(e / n.cssW * 2 - 1, 1 - t / n.cssH * 2), ti.setFromCamera(ei, u);
        let r = null,
            a = 7.5;
        for (let e of N) {
            if (e.state !== `ready` || e.bu.vis < .5) continue;
            Xr.copy(e.stat.matrixWorld).invert(), Qr.copy(ti.ray).applyMatrix4(Xr);
            let t = Qr.intersectBox(e.box, Q);
            if (!t) continue;
            let n = t.applyMatrix4(e.stat.matrixWorld).distanceTo(u.position);
            n < a && (a = n, r = e)
        }
        return r
    }
    let na = {
            pos: Z(),
            target: Z(),
            angle: .3,
            penumbra: .6,
            color: Er,
            intensity: 0
        },
        ra = {
            pos: Z(),
            target: Z(),
            angle: .45,
            penumbra: .6,
            color: Dr,
            intensity: 0
        };

    function ia(e) {
        return na.pos.copy(e.keyPos), e.first ? (na.target.copy(e.head), na.target.y -= .1, na.angle = .36) : (na.target.copy(e.center), na.target.y += .04, na.angle = D(Math.atan(e.h * .62 / e.keyPos.distanceTo(e.center)), .27, .42)), na.intensity = (e.first ? kr : Or) * na.pos.distanceToSquared(na.target), na
    }

    function aa(e) {
        return ra.pos.copy(e.rimPos), ra.target.copy(e.first ? e.head : e.center), ra.target.y += .12, ra.intensity = Ar * ra.pos.distanceToSquared(ra.target), ra
    }

    function oa(e, t) {
        let n = q === `exit` || !R ? null : sn;
        ln === n ? dn = t > 0 ? p(dn, +!!ln, 5, t) : +!!ln : (dn = t > 0 ? p(dn, 0, 10, t) : 0, dn < .02 && (ln = n, dn = 0)), dn > .995 && (dn = 1);
        for (let e of N) {
            let t = ia(e),
                n = e === ln ? dn : 0;
            me.setKey(e.i, t, 1 - n), me.setRim(e.i, aa(e)), R && e === ln && (R.position.copy(t.pos), R.target.position.copy(t.target), R.angle = t.angle, R.penumbra = t.penumbra, R.intensity = t.intensity * n), k ? .set(e.i, t.pos, t.target, t.angle * 1.02, Ke ? jr : 0, Er), e.fixture.lens.value = 9
        }
        R && !ln && (R.intensity = 0), R && !R.shadow.autoUpdate && (R.shadow.needsUpdate = R.intensity > 0), me.commit();
        let r = M(Bn - 2.5, Bn - .5, e),
            i = Math.max(r, .4 * M(1, 1.6, e));
        return E && (E.monLit.value = M(1, 1.6, e)), e >= 1 ? (z.position.set(.25, J.rot.ceil + 4, J.rot.cz + .6), z.target.position.set(0, 1, J.rot.cz), z.angle = .2, z.penumbra = .5, z.color.setHex(13229311), z.intensity = 832 * i) : (z.position.set(.5, 4.5, 3.4), z.target.position.set(J.vest.x0, 2.3, 3.4), z.angle = .75, z.penumbra = .9, z.color.setHex(16773340), z.intensity = 22 * (1 - M(.3, 1, e))), h.led.value = .22 + .1 * r, i
    }

    function sa() {
        if (!ne) return;
        let e = [];
        for (let t = lr.length - 1; t >= 0; t--) {
            let n = lr[t],
                r = X - n.t0;
            if (r > .4) {
                lr.splice(t, 1);
                continue
            }
            if (r < -.04) continue;
            let a = r < 0 ? .25 * (1 + r / .04) : Math.exp(-r / .065) * (.55 + .45 * (Math.floor(r * 40) % 2));
            e.push({ ...n,
                seed: n.seed + Math.floor(Math.max(0, r) * 40) * 7,
                amp: a * (i.reducedMotion ? .6 : 1)
            })
        }
        for (let e = ur.length - 1; e >= 0; e--) X - ur[e].t0 > 1.2 && ur.splice(e, 1);
        let t = yt(X, ur);
        ne.update(u, e, t);
        let n = 0;
        for (let t of e) n = Math.max(n, t.amp);
        ye.intensity = n * 30, e.length && ye.position.copy(e[e.length - 1].b).add(Z(0, .45, .25))
    }

    function ca() {
        for (let e of N) {
            if (!e.geo) continue;
            let t = e.bu;
            t.time = X, t.arcT = X;
            let n = X - e.zapAt;
            if (n >= 0 && n < ii) {
                t.zap.set(e.topObj.x, e.topObj.y, e.topObj.z, n / ii * 2.9);
                let r = e.from,
                    i = e.kind,
                    a = hi(e, r),
                    o = hi(e, i);
                Ft(r) && Ft(i) ? (t.role = 0, a && (a.visible = !0)) : (a && (a.visible = !0), o && (o.visible = !0), la(e, r, 1), la(e, i, 2))
            } else n >= ii && t.zap.w >= 0 && gi(e, e.kind);
            t.arc = n >= 0 ? Math.exp(-n / .13) * .8 : 0;
            let r = X - e.crackleAt;
            t.glow = r >= 0 ? .35 * Math.exp(-r / .08) : 0, r >= 0 && (t.arc = Math.max(t.arc, 1.6 * Math.exp(-r / .22))), t.flick = .92 + .08 * Math.sin(X * 37) * Math.sin(X * 13);
            let i = u.position.distanceTo(e.center) > 5 || Le && e !== sn ? 1 : 0;
            i !== e.lod && e.geo && (e.lod = i, e.geo.geo.setDrawRange(...e.geo.lod[i]))
        }
    }

    function la(e, t, n) {
        let r = e.bu;
        Ft(t) ? r.role = n : t === `points` ? r.rolePoints = n : r.roleVoxel = n
    }

    function ua(e) {
        let t = N[0];
        if (!t || !t.geo || !t.print || !t.printU) return;
        let n = t.bu;
        if (Hn === `print`) {
            if (n.inflate = 0, t.print.visible = !0, t.socle && (t.socle.visible = !0), t.core.visible = !1, t.printU.burn.value = -1, e.arrive >= 1 && e.active && kn < 0) {
                let e = i.audio.play([`material_clay`], {
                        quantize: `beat`
                    }),
                    n = X + (e > 0 ? Math.max(0, e - vn) : Math.max(.05, x - vn / x % 1 * x));
                kn = Oi = n, Hn = `playing`, _i(t, `clay`, n)
            }
            return
        }
        if (Hn === `playing`) {
            let e = X - kn;
            t.core.visible = e >= 0;
            let r = e < 0 ? 0 : 1 + (be.out(D(e / .3)) - 1) + _(e, .02, .25, 7, 3.2);
            if (n.inflate = D(r, 0, 1.25), t.print.visible = e < .3, t.socle && (t.socle.visible = e < .025), t.printU.burn.value = e < 0 ? -1 : e * 3.2, e >= .33793103448275863 && t.kind === `clay` && !t._tin) {
                t._tin = !0;
                let e = i.audio.play([zt.tin], {
                    quantize: `16th`
                });
                _i(t, `tin`, X + (e > 0 ? Math.max(0, e - vn) : 0))
            }
            if (e >= .6827586206896552 && t.kind === `tin` && !t._chrome) {
                t._chrome = !0;
                let e = i.audio.play([zt.chrome], {
                    quantize: `16th`
                });
                _i(t, `chrome`, X + (e > 0 ? Math.max(0, e - vn) : 0))
            }
            e > .8620689655172414 && (Hn = `done`, n.inflate = 1, t.print.visible = !1, t.socle && (t.socle.visible = !1))
        }
    }

    function da() {
        Hn = `done`, Oi = -1;
        let e = N[0];
        e && (e.socle && (e.socle.visible = !1), e.print && (e.print.visible = !1), e.bu.inflate = 1, e.geo && e.kind === `clay` && gi(e, `chrome`))
    }
    let fa = ``;

    function pa(e, t = !1) {
        let n = ``;
        if (t) n = qe(`展示室 02 — 記念碑 WE ARE FUNTECH.`, `Gallery 02 — the monument: WE ARE FUNTECH.`);
        else if (e) {
            let t = dr(e);
            n = `No.${String(t.no).padStart(2,`0`)} ${t.label}（${t.nick}）— ${t.en} ${t.ja}`
        }
        n && n !== fa && oe && (fa = n, oe.lang = t ? Je() : `ja`, oe.textContent = n)
    }

    function ma() {
        let e = et(wr, { ...Tr,
                depth: .1,
                bevel: .012
            }),
            t = new Ie({
                roughness: .78,
                metalness: 0
            });
        t.name = `museum-we-are`, t.color.copy(Cr), t.emissiveNode = d(Sr.r, Sr.g, Sr.b).mul(fe), I = t, F = new j(e.geo, t), F.castShadow = !0, F.receiveShadow = !0, F.rotation.y = Math.PI / 2, F.position.set(J.vest.x0 + .001, 2.28, 5.3 - e.width / 2), l.add(F), pe = lt();
        let n = new Ie({
            map: pe.texture,
            transparent: !0,
            roughness: .6,
            emissive: 16777215,
            emissiveMap: pe.texture,
            emissiveIntensity: .05
        });
        n.name = `museum-title`, L = new j(new ue(2, 2 / pe.aspect), n), L.rotation.y = Math.PI / 2, L.position.set(J.vest.x0 + .004, 3.95, .98), l.add(L)
    }
    let $ = null,
        ha = `idle`,
        ga = null;

    function _a() {
        let t = (e, t = !1) => {
                let n = new Be(new Uint8Array(e), 1, 1);
                return n.magFilter = n.minFilter = f, t && (n.colorSpace = Ee), n.needsUpdate = !0, mt(n)
            },
            n = t([128, 128, 128, 255]),
            i = t([0, 0, 0, 255]),
            a = t([128, 128, 128, 255], !0),
            c = t([128, 128, 128, 255], !0),
            u = We(n),
            p = We(i),
            m = We(a),
            h = We(c),
            g = O(new Ge(0, 0, 1, 1)),
            _ = Qe(ee),
            y = A(1).toVar(`glOcc`),
            b = A(.5).toVar(`glRough`),
            x = A(1).toVar(`glMetal`),
            S = new Ie;
        S.name = `museum-glimpse`, S.userData.buildAsync = !0, an(S, `none`), v && (S.envMap = v.get(`museum`), S.envMapIntensity = .35), S.colorNode = Ue(() => {
            let e = s().toVar(),
                t = p.sample(e);
            ie(t.b.lessThan(.5), () => {
                o()
            });
            let n = t.r.max(.42).min(.58).toVar(),
                r = u.sample(e).b.max(.44).min(.56).toVar(),
                i = d(g.x.add(e.x.sub(.5).mul(g.z)), g.y.add(A(.5).sub(e.y).mul(g.w)), 0),
                a = jt(_, e, n, r, {
                    verd: m,
                    bronze: h
                }, i, .6);
            return b.assign(a.rough), x.assign(a.metal), y.assign(Et(r, n)), a.col.mul(P(A(1), y, .35)).mul(P(A(1), A(.25), U(.3, .95, e.y)))
        })(), S.roughnessNode = b, S.metalnessNode = x, S.aoNode = y, S.normalNode = Ue(() => {
            let e = u.sample(s()).rg.mul(2).sub(1);
            return ve(Nt(d(e, ot(le(A(0), A(1).sub(r(e, e)))))))
        })();
        let C = new ue(1, 1),
            te = C.attributes.uv;
        for (let e = 0; e < te.count; e++) te.setY(e, 1 - te.getY(e));
        let T = new j(C, S);
        T.position.set(0, 1.9, J.rot.cz + .12), T.scale.set(4.9, 3, 1), l.add(T);
        let E = O(0),
            D = new e({
                transparent: !0,
                depthWrite: !1
            });
        D.name = `museum-glimpse-shade`, D.colorNode = d(0), D.opacityNode = E.mul(A(1).sub(U(0, 1, s().y))).mul(A(1).sub(U(.82, 1, w(s().x.sub(.5)).mul(2))));
        let ne = new j(new ue(4.8, .6), D);
        ne.rotation.x = -Math.PI / 2, ne.position.set(0, 1.003, J.rot.cz + .12 + .3), l.add(ne), $ = {
            mesh: T,
            tF: u,
            tX: p,
            sV: m,
            sB: h,
            frame: g,
            shade: ne,
            shadeOn: E,
            ph: [n, i, a, c],
            maps: []
        }
    }
    async function va() {
        if (ha === `idle` && se.monument && $) {
            ha = `loading`;
            try {
                let e = await it(i.assets, `gen/museum/` + se.monument.file),
                    t = e.header,
                    n = ga ? ? = i.assets.lease(),
                    [r, a, o, s] = await Promise.all([kt(e.get(`monF`), {
                        scale: .5
                    }), kt(e.get(`monX`), {
                        scale: .5
                    }), ...[`bronze`, `verdigris`].map(e => n.texture(`gen/museum/${e}.webp`, {
                        anisotropy: 8,
                        half: !0
                    }))]);
                if (V || !$) {
                    pt(r), pt(a);
                    return
                }
                for (let e of [o, s]) e.wrapS = e.wrapT = g;
                for (let e of [r, a, o, s])
                    if (i.renderer.initTexture(e), await oi(), V || !$) {
                        pt(r), pt(a);
                        return
                    }
                let c = 1.3;
                $.mesh.scale.set(t.front.planeW * c, t.front.planeH * c, 1), $.mesh.position.set(t.front.center[0] * c, 1 - .046 * c + t.front.center[1] * c, J.rot.cz + .12), $.frame.value.set(t.up.center[0], t.up.center[1], t.up.planeW, t.up.planeH), $.tF.value = r, $.tX.value = a, $.sV.value = s, $.sB.value = o, $.shadeOn.value = .6, $.maps = [r, a], ha = `ready`
            } catch (e) {
                console.info(`[museum] monument glimpse skipped`, e), ha = `error`
            }
        }
    }

    function ya() {
        let e = new Re;
        return e.setAttribute(`position`, new Se(new Float32Array([-.2, 0, 0, .2, 0, 0, 0, .4, 0]), 3)), e.setAttribute(`uv`, new Se(new Float32Array([0, 1, 1, 1, .5, 0]), 2)), e.setAttribute(`side`, new Se(new Float32Array([0, 0, 0]), 1)), e.setAttribute(`normal`, new Se(new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]), 3)), e.setIndex(new Se(new Uint16Array([0, 1, 2]), 1)), e.boundingSphere = new Ce(new Ve(0, .2, 0), .5), e
    }
    async function ba() {
        let e = E ? .group.children.find(e => e.material === h.wallM);
        if (!e) return;
        let t = i.renderer,
            n = new j(e.geometry, h.wallM);
        n.receiveShadow = e.receiveShadow, n.frustumCulled = !1;
        let r = new Ae(8, 8, {
            type: te
        });
        try {
            await Oe(t, () => {
                let e = l.children.filter(e => e.visible && !e.isLight);
                for (let t of e) t.visible = !1;
                l.add(n);
                let i = t.getRenderTarget(),
                    a = t.shadowMap.enabled;
                t.shadowMap.enabled = H.shadows;
                try {
                    t.setRenderTarget(r), t.render(l, u)
                } finally {
                    t.setRenderTarget(i), t.shadowMap.enabled = a, l.remove(n);
                    for (let t of e) t.visible = !0
                }
            })
        } finally {
            r.dispose()
        }
    }

    function xa() {
        let e = new c;
        e.position.copy(N[0].center).add(Z(.25, -.35, .1)), e.rotation.y = Math.PI / 2;
        let t = Gt(W.ph),
            n = (n, r, i = !1, a = !1) => (n.position.x = r, n.userData.bu = t, n.frustumCulled = !1, n.castShadow = i, n.receiveShadow = a, Gr(n), e.add(n), n);
        n(new j(W.placeholder, W.core), -.3, !0, !0), n(new j(W.placeholder, W.coreHero), -.1, !0, !0);
        let r = $t(new Float32Array([0, .2, 0]), new Float32Array([.5, .5]));
        n(new j(r, W.points), .25);
        let i = nn(new Float32Array([0, .2, 0]), new Float32Array([.05, .05, .05]), new Float32Array([.5, .5, .5]));
        n(new j(i, W.voxel), .4, !0, !1);
        let a = new j(new ue(.1, .05), W.plaque.material);
        return n(a, .55, !1, !0), l.add(e), {
            hide() {
                e.visible = !1
            },
            dispose() {
                l.remove(e), r.dispose(), i.dispose(), a.geometry.dispose()
            }
        }
    }
    let Sa = e => +(e / n).toFixed(2),
        Ca = {
            vestibule: {
                x: .75,
                z: 1.4,
                yaw: 8
            },
            corridor: {
                x: 0,
                z: -1,
                yaw: 0
            },
            "mid-left": {
                x: -.2,
                z: -5.6,
                face: 5
            },
            "mid-right": {
                x: .25,
                z: -6.9,
                face: 6
            },
            "mid-look": {
                x: .1,
                z: -9.4,
                yaw: 0
            },
            "near-exit": {
                x: .1,
                z: -17.4,
                yaw: 0
            },
            exit: {
                x: 0,
                z: Gn + .35,
                yaw: 0
            }
        };

    function wa(e) {
        let t = N[e];
        t && (Q.subVectors(t.center, u.position.set(G.x, G.eye, G.z)), G.yaw = G.yawT = ar(Q.x, Q.z), G.pitch = G.pitchT = D(Math.atan2(Q.y, Math.hypot(Q.x, Q.z)), Jn.lo, Jn.hi))
    }

    function Ta(e) {
        q === `intro` && da(), Ii(!1), G.place(e.x, e.z, (e.yaw ? ? 0) * n, e.pitch === void 0 ? Yn : e.pitch * n), G.eye = Wn, Pt = 1, At = si(B), wt = Fi().pos.z, Xi(0, !0), e.face !== void 0 && wa(e.face), G.yawT = G.yaw, G.pitchT = G.pitch, ut = 10, gn = 0
    }

    function Ea(e = {}) {
        let t = e.walks ? ? 40,
            r = e.seconds ? ? 24,
            i = (e.seed ? ? 7) >>> 0,
            a = () => (i = i * 1664525 + 1013904223 >>> 0, i / 4294967296),
            o = {
                w: { ...G
                },
                rots: N.map(e => [e.rot, e.rotV, e.theta, +!!e.inView]),
                mode: q
            },
            s = u.clone(),
            c = 0,
            l = 0,
            d = 0,
            f = {
                x: 0,
                z: 0,
                yaw: 0,
                pitch: 0,
                slot: -1,
                theta: 0
            },
            p = Array(10).fill(0);
        q = `walk`;
        for (let i = 0; i < t; i++) {
            G.place(Qn[0][0] + (a() - .5) * .6, Qn[0][1] + (a() - .5) * .6, (40 + a() * 60) * n, Yn), Xi(0, !0);
            let t = 1,
                i = 0,
                o = 0,
                m = 0,
                h = 0;
            for (let g = 0; g < r * 60; g++) {
                let r = 1 / 60,
                    _ = g * r;
                if (_ >= o) {
                    o = _ + .4 + a() * 1.6;
                    let r = a();
                    t = r < .62 ? 1 : r < .72 ? -1 : r < .8 ? .4 : 0, i = a() < .5 ? 0 : (a() - .5) * 2, m = a() < .45 ? (a() - .5) * (e.drag ? ? 6) * n : 0, h = a() < .3 ? (a() - .5) * 2 * n : 0
                }
                s.fov = si(B), s.aspect = B ? .aspect ? ? 16 / 9, s.updateProjectionMatrix();
                let ee = Math.atan(Math.tan(s.fov * n / 2) * s.aspect),
                    v = e.nudge === !1 ? {
                        yaw: 0,
                        pitch: 0
                    } : Qi(s, G.yaw, G.pitch, $i);
                G.step(r, {
                    fwd: t,
                    turn: i,
                    dragYaw: m,
                    dragPitch: h,
                    nudgeYaw: v.yaw,
                    nudgePitch: v.pitch
                }, ee, a() < .5 ? 0 : null), Xi(r), s.position.set(G.x, Wn, G.z), s.rotation.set(G.pitch, G.yaw, 0, `YXZ`), s.updateMatrixWorld(), Zr.multiplyMatrices(s.projectionMatrix, s.matrixWorldInverse), $r.setFromProjectionMatrix(Zr, u.coordinateSystem);
                let y = 0,
                    b = -1;
                for (let e of N) {
                    Q.subVectors(s.position, e.center);
                    let t = Q.length() || 1,
                        r = Math.acos(D((Q.x * Math.sin(e.rot) + Q.z * Math.cos(e.rot)) / t, -1, 1)) / n;
                    e.theta = r, e.inView = ri(e.box, e.stat.matrixWorld, $r), e.inView && r > y && (y = r, b = e.i)
                }
                d++, p[Math.min(9, Math.floor(y / 5))]++, y > 36 && l++, y > c && (c = y, Object.assign(f, {
                    x: +G.x.toFixed(2),
                    z: +G.z.toFixed(2),
                    yaw: Sa(G.yaw),
                    pitch: Sa(G.pitch),
                    slot: b,
                    theta: +y.toFixed(1)
                }))
            }
        }
        return Object.assign(G, o.w), N.forEach((e, t) => {
            e.rot = o.rots[t][0], e.rotV = o.rots[t][1], e.theta = o.rots[t][2], e.inView = !!o.rots[t][3], di(e)
        }), q = o.mode, {
            frames: d,
            worst: +c.toFixed(1),
            worstAt: f,
            fadeFrames: l,
            fadeShare: +(l / d).toFixed(5),
            histogram5deg: p,
            limit: 36,
            aspect: +(B ? .aspect ? ? 0).toFixed(3)
        }
    }
    let Da = {
        id: t.id,
        async load(e) {
            i = e;
            let t = performance.now(),
                r = e => {
                    try {
                        performance.measure(`museum · ${e}`, {
                            start: t,
                            end: performance.now()
                        })
                    } catch {}
                    t = performance.now()
                },
                a = i.perf.settings;
            je = An(i.params.get(`museumh`)), T = i.params.get(`museumshadow`) === `each`, H.detail = a.detail, H.shadows = a.tier !== `low`, H.texScale = a.tier === `low` ? .6 : 1, l = new Ne, l.background = new _e(65794), u = new ke(38, 16 / 9, .05, 60), u.layers.enable(Wr), B = i.stage.info, oe = y(`p`, `mu-sr`), oe.setAttribute(`aria-live`, `polite`), i.layer.append(oe);
            let o = await Ct(256);
            if (V) {
                o.dispose();
                return
            }
            if (ee = o, h = xt(ee), an(h.plaster, `own`), an(h.gap, `own`), an(h.socle, `own`), an(h.ceil, `none`), an(h.can, `none`), an(h.stone, `none`), r(`setup`), se = await i.assets.json(`gen/museum/museum.json`), V) return;
            let s = await Ot(i.renderer, [`museum`, `volt`], a.env);
            if (V) {
                s.dispose();
                return
            }
            if (v = s, h.socle.envMap = v.get(`museum`), h.can.envMap = v.get(`museum`), r(`environments`), await oi(), V) return;
            let c = Kt(),
                d = Jt(c),
                f = qt();
            W = {
                ph: c,
                T: d,
                U: f,
                core: Yt(d, f, ee, {
                    env: v.get(`museum`),
                    detail: H.detail
                }),
                coreHero: Yt(d, f, ee, {
                    env: v.get(`volt`),
                    detail: H.detail
                }),
                points: Zt(d, f),
                voxel: tn(d, f),
                plaque: Cn(),
                placeholder: ya()
            };
            for (let e of [W.core, W.coreHero, W.voxel]) an(e, `statue`);
            if (an(W.plaque.material, `own`), E = bt(h, ee, {
                    mirror: a.tier === `high` ? .36 : a.tier === `medium` ? .25 : i.params.get(`museummirror`) === `0` ? 0 : .2
                }), E.refl ? .reflector ? .getVirtualCamera ? .(u) ? .layers.disable(Wr), l.add(E.group), await oi(), V || (await tt(), V)) return;
            for (let e = 0; e < Fn.length + 1; e++) N.push(fr(e));
            if (Di(), S = new bn(i.renderer, (e, t) => {
                    let n = N[e];
                    n && (n.maps = t, n.bu.maps = t)
                }, i.params.get(`museumstream`) === `0`), await oi(), V || (pn(i.renderer), me = new un, me.setBays(N.map(e => {
                    let t = ia(e),
                        n = t.pos.y / Math.max(.1, t.pos.y - t.target.y);
                    return {
                        slot: e.i,
                        x: e.group.position.x,
                        z: e.group.position.z,
                        zPool: t.pos.z + (t.target.z - t.pos.z) * n
                    }
                })), l.add(me), ge = new xe(10132128, 1709330, .035), l.add(ge), H.shadows && (R = new he(Er, 0, 0, .3, .6, 2), R.castShadow = !0, R.shadow.mapSize.set(a.tier === `high` ? 1024 : 768, a.tier === `high` ? 1024 : 768), R.shadow.bias = -2e-4, R.shadow.normalBias = .012, R.shadow.camera.near = .6, R.shadow.camera.far = 9, T || R.shadow.camera.layers.enable(Wr), l.add(R, R.target)), z = new he(16773340, 0, 0, .75, .9, 2), z.position.set(.5, 4.5, 3.4), z.target.position.set(J.vest.x0, 2.3, 3.4), l.add(z, z.target), ye = new ce(14217416, 0, 6, 2), l.add(ye), re = Tt(), ae = new gt(ee, re), l.add(ae.mesh), k = new Dt(ee, N.length), l.add(k.mesh), ne = new vt(5e3), l.add(ne.mesh), st = new br($e), Gr(st.mesh), l.add(st.mesh), await oi(), V) || (m = St(i.renderer, l, u, {
                    samples: a.msaa,
                    bloomScale: a.bloom,
                    bloom: [.22, .45, .95]
                }), m.look.grade({
                    contrast: 1.1,
                    saturation: .98,
                    shadowTint: [-.004, .002, .014],
                    highTint: [.014, .008, -.004],
                    vignette: .42,
                    grain: .032
                }), m.look.ca.value = .002, _a(), r(`scene`), ct(wr, Tr), await oi(), V)) return;
            ma(), r(`type`), rt = new _r(i.layer, i.ui.touch), at = new vr(i.layer), K = new mr(i.renderer.domElement);
            let p = () => {
                i.layer.hidden || i.audio.unlock()
            };
            if (rt.onGesture = p, K.onGesture = p, De.push(i.perf.onTier(e => {
                    m ? .glow.setResolutionScale(e.bloom)
                })), De.push(i.input.onTap(p)), i.audio.preloadShots([`material_clay`, `material_chrome`, `material_bronze`, `material_marble`, `material_gold`, `material_ice`, `material_hologram`, `material_voxel`, `chant_we_are`, `zap_small`]), await fi(N[0]), await oi(), await fi(N[1]), V || (r(`first statues`), await ba(), V)) return;
            b = xa(), Ii(!1), Xi(0, !0), Mi(0), oa(0, 0), R && (R.position.copy(N[0].keyPos), R.target.position.copy(N[0].head), R.intensity = 30), st.update(3, 0, 1, 1);
            let g = N[0];
            g.print && (g.print.visible = !0), g.core.visible = !0;
            let _ = [];
            l.traverse(e => {
                e.frustumCulled && = (_.push(e), !1)
            }), ae && (ae.mesh.visible = !0, ae.u.k.value = 1e-4);
            let x = new Ae(64, 64, { ...Fe,
                    depthBuffer: !1
                }),
                C = E.refl,
                w = C ? .reflector ? .resolutionScale ? ? 0;
            m.lowRes(!0), C ? .reflector && (C.reflector.resolutionScale = .02);
            try {
                let e = i.renderer.backend.isWebGLBackend === !0,
                    t = e => i.own ? i.own(e) : e();
                await we(i.renderer, () => t(() => Da.render(x)), {
                    cancelled: () => V,
                    maxFirstDraws: e ? 2 : void 0
                })
            } finally {
                x.dispose(), m ? .lowRes(!1), C ? .reflector && (C.reflector.resolutionScale = w)
            }
            for (let e of _) e.frustumCulled = !0;
            V || (R && !T && (R.shadow.autoUpdate = !1), b.hide(), st.update(0, 0, 0, 1), gi(g, g.kind), g.print && (g.print.visible = !1), Te = !0, r(`warm-up`), (async () => {
                for (let e of N.slice(2)) {
                    if (V) return;
                    await fi(e), await oi()
                }
            })(), Object.assign(window, {
                __museum: {
                    get ready() {
                        return Te
                    },
                    get loaded() {
                        return N.filter(e => e.state === `ready`).length
                    },
                    get intro() {
                        return Hn
                    },
                    get mode() {
                        return q
                    },
                    get t() {
                        return X
                    },
                    get visitor() {
                        return {
                            x: +G.x.toFixed(3),
                            z: +G.z.toFixed(3),
                            eye: +G.eye.toFixed(3),
                            yaw: Sa(G.yaw),
                            pitch: Sa(G.pitch),
                            speed: +G.speed.toFixed(3),
                            s: +Qt.toFixed(3),
                            progress: +Ji().toFixed(4),
                            fov: +u.fov.toFixed(2)
                        }
                    },
                    get worst() {
                        return +fn.toFixed(1)
                    },
                    get focus() {
                        return sn ? .i ? ? -1
                    },
                    get statues() {
                        return N.map(e => ({
                            i: e.i,
                            id: e.id,
                            kind: e.kind,
                            rot: Sa(e.rot),
                            rest: Sa(e.rot0),
                            theta: +e.theta.toFixed(1),
                            inView: e.inView,
                            vis: +e.bu.vis.toFixed(2),
                            lod: e.lod
                        }))
                    },
                    slots: N,
                    scene: l,
                    camera: u,
                    poses: Object.keys(Ca),
                    region: Zn,
                    path: Qn,
                    EXIT_Z: Gn,
                    defaultPitch: Sa(Yn),
                    heights: je,
                    stream: {
                        stats: () => S ? .stats(),
                        hold: e => (S && (S.hold = e), e),
                        log: () => S ? .log.slice() ? ? []
                    },
                    layout: () => N.map(e => ({
                        i: e.i,
                        id: e.id,
                        ph: e.plinthTop,
                        h: +e.h.toFixed(3),
                        s: +e.s.toFixed(4),
                        faceY: +e.head.y.toFixed(3),
                        topY: +(e.plinthTop + e.h).toFixed(3)
                    })),
                    pose: e => {
                        let t = typeof e == `string` ? Ca[e] : e;
                        return t && Ta(t), !!t
                    },
                    face: e => (wa(e), Sa(G.yaw)),
                    closeup: (e, t, r = 1.6) => {
                        let i = N[e];
                        if (!i) return null;
                        He = !0;
                        let a = i.rot + t * n,
                            o = i.center.x + Math.sin(a) * r,
                            s = i.center.z + Math.cos(a) * r;
                        return q === `intro` && da(), q = `walk`, ut = 10, G.x = o, G.z = s, G.eye = Wn, G.vx = G.vz = 0, Pt = 1, At = si(B), wa(e), {
                            x: +o.toFixed(2),
                            z: +s.toFixed(2)
                        }
                    },
                    free: e => (He = e, e),
                    fade: e => (Ye = e, e),
                    widest: (e, t = !0) => {
                        let r = N[e];
                        if (!r) return null;
                        let i = [r.rot, r.rotV],
                            a = u.clone();
                        a.fov = si(B), a.aspect = B ? .aspect ? ? 16 / 9, a.updateProjectionMatrix();
                        let o = Math.atan(Math.tan(a.fov * n / 2) * a.aspect),
                            s = null;
                        for (let e = -2; e <= 2; e += .05)
                            for (let i = r.group.position.z - 3.5; i <= r.group.position.z + 4; i += .05) {
                                if (!rr(e, i)) continue;
                                r.rot = Yi(r, e, i), di(r), Q.set(e, Wn, i);
                                let [c, l] = sr(i, o, 0), d = ar(r.center.x - e, r.center.z - i), f = D(Math.atan2(r.center.y - Wn, Math.hypot(r.center.x - e, r.center.z - i)), Jn.lo, Jn.hi), p = D(d, c, l);
                                if (a.position.copy(Q), a.rotation.set(f, p, 0, `YXZ`), a.updateMatrixWorld(), Zr.multiplyMatrices(a.projectionMatrix, a.matrixWorldInverse), $r.setFromProjectionMatrix(Zr, u.coordinateSystem), t) {
                                    let e = !0;
                                    for (let t = 0; t < 8 && e; t++) ni[t].set(t & 1 ? r.box.max.x : r.box.min.x, t & 2 ? r.box.max.y : r.box.min.y, t & 4 ? r.box.max.z : r.box.min.z).applyMatrix4(r.stat.matrixWorld), e = $r.containsPoint(ni[t]);
                                    if (!e) continue
                                } else if (!ri(r.box, r.stat.matrixWorld, $r)) continue;
                                Kr.subVectors(Q, r.center);
                                let m = Math.acos(D((Kr.x * Math.sin(r.rot) + Kr.z * Math.cos(r.rot)) / Kr.length(), -1, 1)) / n;
                                (!s || m > s.theta) && (s = {
                                    x: +e.toFixed(2),
                                    z: +i.toFixed(2),
                                    yaw: Sa(p),
                                    pitch: Sa(f),
                                    theta: +m.toFixed(1)
                                })
                            }
                        return r.rot = i[0], r.rotV = i[1], di(r), s
                    },
                    kind: (e, t) => {
                        let n = N[e];
                        n ? .geo && _i(n, t, X)
                    },
                    click: e => yi(e === void 0 ? sn : N[e] ? ? null),
                    replayIntro: () => {
                        let e = N[0];
                        return e ? .geo ? (Hn = `print`, kn = -1, Oi = -1, qn = !1, q = `intro`, Xn = 0, delete e._tin, delete e._chrome, gi(e, `clay`), e.rot = e.rot0, e.rotV = 0, di(e), zi(null), !0) : !1
                    },
                    exit: () => q === `walk` && (G.place(G.x, Gn - .01, G.yaw, G.pitch), !0),
                    audit: Ea,
                    inRegion: rr,
                    clampToRegion: nr,
                    yawRange: e => sr(e, Pi(), G.pitch).map(Sa),
                    perfToggle: e => {
                        if (e.fewLights !== void 0)
                            for (let t of [z, ye, ge]) t.visible = !e.fewLights;
                        if (e.dom !== void 0)
                            for (let t of [i.layer, document.querySelector(`.hints`)]) t && (t.style.visibility = e.dom ? `` : `hidden`);
                        if (e.layer !== void 0 && (i.layer.style.visibility = e.layer ? `` : `hidden`), e.hints !== void 0) {
                            let t = document.querySelector(`.hints`);
                            t && (t.style.visibility = e.hints ? `` : `hidden`)
                        }
                        e.bloom !== void 0 && m && (m.glow.strength.value = e.bloom ? .22 : 0), e.grain !== void 0 && m && (m.look.grain.value = e.grain ? .032 : 0);
                        let t = e.statues ? ? e.busts;
                        if (t !== void 0)
                            for (let e of N) e.group.visible = t;
                        return e.scene !== void 0 && (l.visible = e.scene), e.skip !== void 0 && (ze = e.skip), e.arch !== void 0 && E && (E.group.visible = e.arch), e.floor !== void 0 && E && (E.floor.visible = e.floor), e.shadows !== void 0 && (H.shadows = e.shadows), e.beams !== void 0 && (Ke = e.beams), e.lodAll !== void 0 && (Le = e.lodAll), e.guide !== void 0 && st && (st.mesh.visible = e.guide), !0
                    }
                }
            }))
        },
        enter(e) {
            let t = N[0];
            qn = !1, Oi = -1, tr = -1, sn = null, ln = null, dn = 0, Bt = !1, Rt = !0, e === `monument` ? (da(), Ii(!1), G.place(0, Gn + 1.2, 0, Yn), Rt = !1) : !i.reducedMotion && t ? .geo && e ? (Ii(!1), q = `intro`, Hn = `print`, kn = -1, Xn = 0, delete t._tin, delete t._chrome, gi(t, `clay`)) : (da(), Ii(!1)), Xi(0, !0), q === `intro` && (t.rot = t.rot0, t.rotV = 0, di(t));
            for (let e of N) e.bu.vis = 1;
            zi(q === `intro` ? null : {
                kind: `walk`,
                text: Nr,
                progress: Ji()
            });
            let n = i.renderer.domElement;
            mn === null && (mn = n.style.touchAction, n.style.touchAction = `none`)
        },
        update(e) {
            let t = e.dt;
            if (X += t, vn = e.clock, !m) return;
            if (hn = e.active, !qn && e.arrive > .6 && e.leave < .01 && q === `intro` && Hn === `print`) {
                qn = !0;
                let e = i.audio.play([`chant_we_are`], {
                    quantize: `beat`
                });
                I._chantAt = e > 0 ? X + Math.max(0, e - vn) : X
            }
            let r = I ? ._chantAt ? ? -10;
            fe.value = 1 + (X >= r ? .7 * Math.exp(-(X - r) / .12) + (X >= r + .3448275862068966 ? .7 * Math.exp(-(X - r - x) / .12) : 0) : 0), q === `intro` && (ua(e), e.arrive >= 1 && t > 0 && (Xn += t), !N[0] ? .print || Xn > 12 ? (da(), Ii(!1), zi({
                kind: `walk`,
                text: Nr,
                progress: 0
            })) : Hn === `done` && ki() >= 1 && (Ii(!0), zi({
                kind: `walk`,
                text: Nr,
                progress: 0
            })));
            let a = q === `walk` && e.active && Te;
            if (K && (K.enabled = a), q === `walk`) {
                t > 0 && (ut += t);
                let r = 0,
                    o = 0,
                    s = 0,
                    c = 0;
                if (a && K && rt) {
                    let [e, t] = K.keys(), a = e => Math.abs(e) < .16 ? 0 : Math.sign(e) * ((Math.abs(e) - .16) / .84) ** 1.4;
                    r = D(e + a(rt.y), -1, 1), o = D(t - a(rt.x), -1, 1);
                    let [l, d] = K.takeDrag(), f = i.stage.info;
                    s = l / f.cssW * 2 * Pi(), c = d / f.cssH * u.fov * n, rt.draw(D(-t + rt.x, -1, 1), D(e + rt.y, -1, 1));
                    for (let e of K.clicks.splice(0)) {
                        let t = ta(e.x, e.y);
                        t && yi(t) && i.ui.dismissHint(`museum-click`)
                    }(K.dragTotal > 90 || ut > 10) && i.ui.dismissHint(`museum-look`)
                } else K ? .takeDrag();
                on = $e.project(G.x, G.z);
                let l = qi();
                He || (Qi(u, G.yaw, G.pitch, $i), G.step(t, {
                    fwd: r,
                    turn: o,
                    dragYaw: s,
                    dragPitch: c,
                    nudgeYaw: $i.yaw,
                    nudgePitch: $i.pitch
                }, Pi(), ut > 1.5 ? l : null)), a && e.input.pressed(`Space`, `Enter`, `NumpadEnter`) && yi(sn) && i.ui.dismissHint(`museum-click`), !Rt && G.z > -19.9 + .8 && (Rt = !0), a && Rt && !He && G.z <= -19.9 && Li()
            } else q === `exit` && (Ri(t), K ? .takeDrag());
            q === `intro` ? ji(t) : Mi(t), q === `walk` && zi({
                kind: `walk`,
                text: Nr,
                progress: Math.round(Ji() * 200) / 200
            }), Xi(t), Zi(t), ea(), ui(t), Qt = q === `intro` ? 0 : Vn(G.z);
            let o = q === `walk` && e.active && ut > .35 && e.arrive >= 1;
            rt ? .show(o), o || rt ? .draw(0, 0);
            let s = 0,
                c = $e.at(on),
                l = G.vx * c.dx + G.vz * c.dz;
            if (q === `walk` && e.active && ut > .8) {
                let e = or(qi() - G.yaw);
                gn = Math.abs(e) > Pi() + 3 * n ? gn + t : 0, gn > (ut < 6 || l < -.2 ? .05 : 2.2) && (s = e > 0 ? 1 : -1)
            } else gn = 0;
            if (at ? .set(s), st) {
                let e = G.idle > 2.5 || l < -.2 || s !== 0,
                    n = q === `walk` && Te ? e ? 1 : .42 : 0;
                Wt = t > 0 ? p(Wt, n, q === `walk` ? 2.2 : 4, t) : n, st.update(on, X, Wt, +!i.reducedMotion)
            }
            let d = e.input.p;
            cn = q === `walk` && e.active && !d.touch && d.presence > .5 && !K ? .dragging ? ta(d.cx, d.cy) : null;
            let f = Math.round(Qt);
            if (q === `walk` && Math.abs(Qt - f) < .3 && f !== tr) {
                tr = f;
                let t = N[f];
                if (t && f > 0 && f < Bn && e.active && t.state === `ready`) {
                    if (i.audio.play([zt[t.kind]], {
                            quantize: `16th`,
                            gain: .5,
                            minGap: .25
                        }), t.zapBay && X - t.crackleAt > 3) {
                        let e = i.audio.play([`zap_small`], {
                                quantize: `8th`
                            }),
                            n = X + .22 + (e > 0 ? Math.max(0, e - vn - .22) : 0);
                        t.crackleAt = n, vi(t, n, .32)
                    }
                    pa(t)
                }
                f >= Bn && pa(null, !0)
            }
            let h = oa(Qt, t);
            ca(), sa(), k && (k.u.time.value = X, k.commit()), ae && (ae.u.time.value = X, ae.set(Mr.apex, Mr.at, .2, Ke ? .09 * h : 0, Mr.color)), ha === `idle` && (G.z < -6 || N.every(e => e.state !== `idle` && e.state !== `loading`)) && va();
            let g = m.look;
            if (g.time.value = vn, g.aspect.value = u.aspect, g.impact.value = 0, g.flash.value = 0, !i.reducedMotion)
                for (let e of lr) {
                    let t = X - e.t0;
                    t >= .5 / 60 && t < 2.5 / 60 && (g.impact.value = .85, g.impactThr.value = .3, g.impactA.value.setRGB(.067, .067, .067), g.impactB.value.setRGB(.902, 1, 0))
                }
            for (let e of lr) {
                let t = X - e.t0;
                t >= 0 && t < .2 && (g.flash.value = Math.max(g.flash.value, .05 * Math.exp(-t / .05)))
            }
            m.glow.strength.value = .22 + g.flash.value * 2
        },
        render(e) {
            let t = i.renderer;
            if (!m || ze) {
                t.setRenderTarget(e), t.setClearColor(0, 1), t.clear(), t.setRenderTarget(null);
                return
            }
            let n = t.shadowMap.enabled;
            t.shadowMap.enabled = H.shadows, m.render(e), t.shadowMap.enabled = n
        },
        layout(e) {
            B = e, m && (m.look.aspect.value = e.aspect), N.length && Math.abs(e.aspect - Ei) > .01 && Di()
        },
        exit() {
            rt ? .show(!1), at ? .set(0), S ? .sleep(), K && (K.enabled = !1, K.reset()), zi(null);
            let e = i.renderer.domElement;
            mn !== null && (e.style.touchAction = mn, mn = null)
        },
        dispose() {
            V = !0;
            for (let e of De) e();
            K ? .dispose(), rt ? .dispose(), at ? .dispose(), mn !== null && (i.renderer.domElement.style.touchAction = mn, mn = null), m ? .dispose(), S ? .dispose();
            for (let e of N) e.geo ? .geo.dispose(), e.points ? .dispose(), e.voxel ? .dispose(), e.print && (e.print.geometry.dispose(), e.print.material.dispose()), pt(e.printTex), e.plaque ? .dispose(), e.fixture.dispose();
            if (b ? .dispose(), W) {
                for (let e of [W.core, W.coreHero, W.points, W.voxel]) e.dispose();
                W.plaque.dispose(), W.placeholder.dispose();
                for (let e of [W.ph.map0, W.ph.map1, W.ph.fg, W.ph.toon]) e.dispose()
            }
            if (ae ? .dispose(), k ? .dispose(), re ? .dispose(), ne ? .dispose(), st ? .dispose(), E ? .dispose(), ht(), F && (F.geometry.dispose(), I ? .dispose()), $) {
                $.mesh.geometry.dispose(), $.mesh.material.dispose(), $.shade.geometry.dispose(), $.shade.material.dispose();
                for (let e of $.maps) pt(e);
                for (let e of $.ph) e.dispose()
            }
            ga ? .release(), pe ? .texture.dispose(), L && (L.geometry.dispose(), L.material.dispose());
            for (let e of [h ? .wallM, h ? .ceil, h ? .plaster, h ? .gap, h ? .socle, h ? .can, h ? .stone, h ? .ledMat]) e ? .dispose();
            for (let e of [R, z]) e ? .shadow ? .dispose ? .();
            me ? .dispose(), v ? .dispose(), ee ? .dispose(), oe ? .remove(), delete window.__museum
        },
        pending: () => N.filter(e => e.state === `idle` || e.state === `loading`).length,
        hints() {
            if (!Te || q !== `walk` || ut < 1.2 || !hn) return [];
            if (!i.ui.isDismissed(`museum-look`)) return [{
                id: `museum-look`,
                kind: `drag`,
                at: [1380, 610],
                p: [700, 1560],
                label: Pr,
                touchLabel: Pr
            }];
            let e = sn;
            if (i.ui.isDismissed(`museum-click`) || !e || e.state !== `ready` || !e.inView || e.bu.vis < 1 || u.position.distanceTo(e.center) > 3.4) return [];
            let t = i.stage.info,
                n = Jr.copy(e.top).project(u);
            if (n.z > 1 || Math.abs(n.x) > .92 || Math.abs(n.y) > .9) return [];
            let r = i.stage.toLogical((n.x * .5 + .5) * t.cssW, (.5 - n.y * .5) * t.cssH),
                a = r[0] < t.W / 2 ? 1 : -1;
            return [{
                id: `museum-click`,
                kind: `click`,
                point: !0,
                at: r,
                p: r,
                lead: {
                    dx: a * 96,
                    dy: -36
                },
                leadP: {
                    dx: a * 30,
                    dy: -56,
                    attach: `edge`
                },
                ...Fr
            }]
        },
        cursor: () => q === `walk` ? K ? .dragging ? `grabbing` : cn ? `pointer` : `grab` : `default`,
        hud: () => `light`
    };
    return Da
}
export {
    ci as
    default, xr as transitions
};