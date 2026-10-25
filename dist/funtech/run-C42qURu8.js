import {
    $t as e,
    An as t,
    Bn as n,
    Bt as r,
    D as i,
    Dn as a,
    Fn as o,
    Ft as s,
    It as c,
    Jt as l,
    Lt as u,
    Mn as d,
    On as f,
    Ot as p,
    Pt as m,
    Qn as h,
    Rn as g,
    Rt as _,
    Sn as ee,
    Un as v,
    Vn as y,
    Xt as b,
    Yn as x,
    Zn as S,
    _n as C,
    _r as te,
    a as w,
    cn as ne,
    en as T,
    hn as E,
    i as re,
    in as ie,
    jt as D,
    m as ae,
    mr as O,
    n as oe,
    nn as k,
    pr as se,
    qn as ce,
    qt as le,
    rn as A,
    rr as ue,
    s as de,
    sn as fe,
    sr as pe,
    t as me,
    tn as j,
    tt as he,
    ur as ge,
    v as M,
    vn as N,
    vr as P,
    y as _e,
    yr as ve
} from "./post-DJ5SZDIO.js";
import {
    c as ye,
    d as be,
    l as xe,
    s as Se,
    u as F
} from "./index-BSu4tWCh.js";
import {
    t as Ce
} from "./pmrem-B-AQRfYD.js";
import {
    a as we
} from "./target-DNdmBkK8.js";
var {
    Fn: I,
    If: Te,
    Loop: Ee,
    Discard: De,
    Break: Oe,
    uniform: L,
    attribute: ke,
    varying: Ae,
    texture: R,
    textureLoad: je,
    float: z,
    int: Me,
    uint: Ne,
    vec2: B,
    vec3: V,
    vec4: H,
    ivec2: Pe,
    color: Fe,
    mat3: Ie,
    sin: Le,
    cos: Re,
    tan: ze,
    atan: Be,
    acos: Ve,
    asin: He,
    fract: U,
    floor: W,
    ceil: Ue,
    round: We,
    mod: Ge,
    mix: G,
    smoothstep: K,
    clamp: Ke,
    abs: q,
    exp: qe,
    exp2: Je,
    log2: Ye,
    pow: Xe,
    sqrt: Ze,
    sign: Qe,
    dot: $e,
    cross: et,
    length: J,
    distance: tt,
    normalize: nt,
    reflect: rt,
    step: Y,
    max: X,
    min: it,
    select: Z,
    fwidth: at,
    dFdx: ot,
    dFdy: st,
    saturate: ct,
    oneMinus: lt,
    negate: ut,
    uv: Q,
    positionWorld: dt,
    positionLocal: ft,
    positionGeometry: pt,
    positionView: mt,
    normalView: ht,
    normalWorld: gt,
    normalLocal: _t,
    positionViewDirection: vt,
    cameraPosition: yt,
    cameraViewMatrix: bt,
    cameraProjectionMatrix: xt,
    modelWorldMatrix: St,
    modelViewMatrix: Ct,
    reflectVector: wt,
    equirectUV: Tt,
    screenUV: Et,
    screenSize: Dt,
    screenCoordinate: Ot,
    instanceIndex: kt,
    frontFacing: At,
    output: jt,
    sRGBTransferOETF: Mt,
    sRGBTransferEOTF: Nt,
    luminance: Pt,
    neutralToneMapping: Ft,
    agxToneMapping: It,
    renderOutput: Lt,
    mx_noise_float: Rt,
    reflector: zt,
    pmremTexture: Bt
} = p;

function Vt(e) {
    let t = typeof e == `number` ? e : parseInt(e.replace(`#`, ``), 16);
    return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (t & 255) / 255]
}
var $ = e => {
        let [t, n, r] = Vt(e);
        return V(t, n, r)
    },
    Ht = I(([e]) => {
        let t = U(V(e.x, e.y, e.x).mul(.1031)).toVar();
        return t.addAssign($e(t, t.yzx.add(33.33))), U(t.x.add(t.y).mul(t.z))
    });
I(([e]) => {
    let t = U(V(e.x, e.y, e.x).mul(V(.1031, .103, .0973))).toVar();
    return t.addAssign($e(t, t.yzx.add(33.33))), U(t.xx.add(t.yz).mul(t.zy))
});
var Ut = I(([e]) => {
        let t = U(e.mul(.1031)).toVar();
        return t.mulAssign(t.add(33.33)), t.mulAssign(t.add(t)), U(t)
    }),
    Wt = I(([e]) => {
        let t = W(e),
            n = U(e),
            r = n.mul(n).mul(z(3).sub(n.mul(2))),
            i = Ht(t),
            a = Ht(t.add(B(1, 0))),
            o = Ht(t.add(B(0, 1))),
            s = Ht(t.add(B(1, 1)));
        return G(G(i, a, r.x), G(o, s, r.x), r.y)
    });
I(([e]) => Wt(e).mul(.55).add(Wt(e.mul(2.03).add(17.1)).mul(.3)).add(Wt(e.mul(4.1).add(3.7)).mul(.15)));
var Gt = e => Ke(q(U(V(e, e, e).add(V(0, 2 / 3, 1 / 3))).mul(6).sub(3)).sub(1), 0, 1),
    Kt = (e, t, n) => {
        let r = nt(V(e.x, 0, e.z)),
            i = V(r.z.negate(), 0, r.x);
        return nt(r.mul(Re(t)).add(i.mul(Le(t))).mul(Re(n)).add(V(0, Le(n), 0)))
    };

function qt(e, t, n, r, i, a = z(0)) {
    let o = Math.cos(n),
        s = Math.sin(n),
        c = B(e.x.mul(o).add(e.y.mul(s)), e.y.mul(o).sub(e.x.mul(s))).div(r),
        l = W(c),
        u = U(c).sub(.5),
        d = l.add(.5).mul(r),
        f = Ke(i(B(d.x.mul(o).sub(d.y.mul(s)), d.x.mul(s).add(d.y.mul(o))).div(t)), 0, 1),
        p = Ze(f).mul(.564).add(K(.55, 1, f).mul(.2)),
        m = J(u).add(a),
        h = z(.75).div(r);
    return K(p.add(h), p.sub(h), m).mul(Y(.015, f))
}
var Jt = I(([e]) => {
        let t = Ge(W(e.x), 2),
            n = Ge(W(e.y), 2),
            r = Ge(W(e.x.mul(.5)), 2),
            i = Ge(W(e.y.mul(.5)), 2),
            a = q(t.sub(n)).mul(2).add(n),
            o = q(r.sub(i)).mul(2).add(i);
        return a.mul(4).add(o).add(.5).div(16)
    }),
    Yt = (e, t, n) => {
        let r = q(e).sub(t).add(n);
        return J(X(r, B(0))).add(it(X(r.x, r.y), 0)).sub(n)
    },
    Xt = (e, t) => {
        let n = q(e).sub(t);
        return J(X(n, B(0))).add(it(X(n.x, n.y), 0))
    },
    Zt = (e, t) => {
        let n = q(e).div(X(at(e), 1e-5));
        return z(1).sub(K(z(t).sub(.5), z(t).add(.5), n))
    },
    Qt = .0115,
    $t = [.16, 1, .28],
    en = {
        happy: [`....#....`, `...#.#...`, `..#...#..`, `.#.....#.`, `#.......#`],
        open: [`..#####..`, `.#######.`, `#########`, `#########`, `#########`, `.#######.`, `..#####..`],
        blink: [`#########`],
        dizzy: [`#.......#`, `.#.....#.`, `..#...#..`, `...#.#...`, `....#....`, `...#.#...`, `..#...#..`, `.#.....#.`, `#.......#`],
        gt: [`##.......`, `..###....`, `.....###.`, `........#`, `.....###.`, `..###....`, `##.......`],
        lt: [`.......##`, `....###..`, `.###.....`, `#........`, `.###.....`, `....###..`, `.......##`],
        wide: [`.#######.`, `#########`, `#########`, `#########`, `#########`, `#########`, `.#######.`]
    };

function tn(e, t) {
    let r = new Uint8Array(4480),
        i = new N(r, 40, 28, h);
    i.minFilter = i.magFilter = v, i.generateMipmaps = !1, i.needsUpdate = !0;
    let a = new Float32Array(1120),
        o = new n;
    if (e) {
        t.updateMatrixWorld(!0);
        let r = t.matrixWorld.clone().invert(),
            i = e.matrixWorld.clone().premultiply(r),
            a = new P(0, Math.sin(12 * Math.PI / 180), Math.cos(12 * Math.PI / 180)),
            s = new P(0, .628, .226),
            c = new P(1, 0, 0),
            l = new P().crossVectors(a, c).normalize(),
            u = new n().makeBasis(c, l, a).setPosition(s);
        o.copy(u).invert().multiply(i)
    }
    let s = {
        mat: L(o),
        gain: L(2),
        pulse: L(1)
    };

    function c() {
        let e = Ae(s.mat.mul(H(ft, 1)).xyz),
            t = z(.392),
            n = e.xy.mul(t).div(X(t.sub(e.z), .001)),
            r = K(.035, .06, Q().x).mul(K(.965, .94, Q().x)).mul(K(.56, .59, Q().y)),
            a = n.div(Qt).add(B(20, 14)),
            o = W(a),
            c = U(a).sub(.5),
            l = Y(0, o.x).mul(Y(0, o.y)).mul(Y(o.x, 39)).mul(Y(o.y, 27)),
            u = R(i, o.add(.5).div(B(40, 28))).r.mul(l),
            d = X(at(a.x), at(a.y)),
            f = q(c).sub(.27),
            p = J(X(f, B(0))).add(it(X(f.x, f.y), 0)).sub(.12),
            m = K(.3, .7, d);
        return {
            on: u,
            cov: G(z(1).sub(K(d.mul(-.7), d.mul(.7), p)), z(.62), m),
            f: c,
            far: m,
            face: r,
            cell: o
        }
    }

    function l() {
        let e = c(),
            t = U(Le($e(e.cell, B(12.9898, 78.233))).mul(43758.5453)),
            n = qe($e(e.f, e.f).div(-.018)),
            r = V(...$t).mul(e.on).mul(z(.9).add(t.mul(.16))),
            i = G(r, V(e.on), .35),
            a = V(.012, .014, .013).mul(e.cov).mul(z(1).sub(e.on));
        return r.mul(.8).add(i.mul(.9).mul(G(n, z(.25), e.far))).mul(s.gain).mul(s.pulse).mul(e.cov).add(a).mul(e.face)
    }

    function u() {
        let e = c();
        return e.on.mul(e.cov).mul(e.face)
    }
    let d = {
        tex: i,
        u: s,
        hdr: l,
        mask: u,
        clear() {
            a.fill(0)
        },
        set(e, t, n = 1) {
            let r = Math.round(e + 20),
                i = Math.round(t + 14);
            r < 0 || i < 0 || r >= 40 || i >= 28 || (a[i * 40 + r] = Math.max(a[i * 40 + r], n))
        },
        glyph(e, t, n, r = 1) {
            let i = e.length,
                a = e[0].length;
            for (let o = 0; o < i; o++)
                for (let s = 0; s < a; s++) e[o][s] === `#` && d.set(t + s - (a - 1) / 2, n + (i - 1) / 2 - o, r)
        },
        expr(e, t = 1, n = [0, 0]) {
            if (d.clear(), e === `off`) return;
            if (e === `charge`) {
                d.glyph(en.gt, -10 + n[0], 1 + n[1], t), d.glyph(en.lt, 10 + n[0], 1 + n[1], t);
                return
            }
            let r = en[e];
            d.glyph(r, -10 + n[0], 1 + n[1], t), d.glyph(r, 10 + n[0], 1 + n[1], t)
        },
        upload() {
            for (let e = 0; e < 1120; e++) {
                let t = Math.min(255, a[e] * 255);
                r[e * 4] = t, r[e * 4 + 1] = t, r[e * 4 + 2] = t, r[e * 4 + 3] = 255
            }
            i.needsUpdate = !0
        },
        dispose() {
            i.dispose()
        }
    };
    return d
}
var nn = .633,
    rn = {
        black: .2,
        metal: .3,
        rough: .36,
        rubber: .46,
        orange: .62,
        mouth: .74,
        glass: .2,
        face: .9
    };

function an(e) {
    let t = e.replace(/\.\d+$/, ``);
    return t === `SCREEN_EYES_V06` ? `face` : t === `MOUTH_PLASTIC` ? `mouth` : t === `GLASS` || t === `GLASS_ROUGH` ? `glass` : t === `PLASTIC_GLOSSY` || t.startsWith(`Fiberglass Orange`) ? `orange` : t === `GLOSSY_RUBBER` ? `rubber` : t === `METALLIC_PLASTIC` ? `metal` : t === `ROUGH_PLASTIC` ? `rough` : `black`
}

function on() {
    let e = nt(V(-.42, .62, .66)),
        t = ht,
        n = vt;
    return {
        ndl: $e(t, e),
        spec: Xe(X($e(t, nt(e.add(n))), 0), 42),
        fres: z(1).sub(q($e(t, n)))
    }
}
var sn = e => V((e >> 16 & 255) / 255, (e >> 8 & 255) / 255, (e & 255) / 255);

function cn(t, n, r) {
    let i = new e;
    i.name = `run-toon-` + t;
    let {
        ndl: a,
        spec: o
    } = on(), s, c = z(0), l = Y(.5, o);
    switch (t) {
        case `orange`:
            c = z(.92).mul(z(1).sub(l)), s = z(.5).mul(z(1).sub(K(-.25, .2, a))).mul(z(1).sub(l));
            break;
        case `rubber`:
            s = z(.82).sub(K(.2, 1, a).mul(.3));
            break;
        case `mouth`:
            {
                let e = R(r, Q()).rgb;s = Ke(z(1).sub(X(e.r, X(e.g, e.b)).mul(1.4)), 0, 1),
                c = Ke(e.r.sub(e.b).mul(1.6), 0, 1);
                break
            }
        case `face`:
            s = z(.97).mul(z(1).sub(n.mask()));
            break;
        default:
            s = z(.97).sub(K(.3, 1, a).mul(.34)).mul(z(1).sub(l.mul(.97)))
    }
    return i.fragmentNode = H(s, c, z(rn[t]), 1), i
}

function ln(t, n, r) {
    let i = new e;
    i.name = `run-ascii-` + t;
    let {
        ndl: a,
        spec: o,
        fres: s
    } = on(), c;
    switch (t) {
        case `orange`:
            c = z(.5).add(K(-.2, 1, a).mul(.45)).add(o.mul(.9));
            break;
        case `mouth`:
            {
                let e = R(r, Q()).rgb;c = X(e.r, X(e.g, e.b)).mul(.9).add(.1);
                break
            }
        case `face`:
            c = z(.06).add(n.mask().mul(1.3));
            break;
        default:
            c = z(.16).add(K(-.15, 1, a).mul(.5)).add(o.mul(1.1)).add(s.mul(s).mul(.25))
    }
    return i.fragmentNode = H(c, 1, 0, 1), i
}

function un(t, n, r) {
    let i = new e;
    i.name = `run-bit8-` + t;
    let {
        ndl: a,
        spec: o
    } = on(), s, c = (e, t, n) => Z(a.lessThan(.05), e, Z(a.lessThan(.62), t, n));
    switch (t) {
        case `orange`:
            s = c(sn(9185810), sn(14964526), sn(16757310));
            break;
        case `rubber`:
            s = Z(a.lessThan(.4), sn(1118481), sn(3816004));
            break;
        case `mouth`:
            s = Mt(R(r, Q()).rgb);
            break;
        case `face`:
            s = G(sn(1118481), sn(6094634), Y(.35, n.mask()));
            break;
        default:
            s = Z(a.lessThan(.45), sn(1118481), sn(3816004))
    }
    return t !== `face` && t !== `mouth` && (s = G(s, sn(16777215), Y(.6, o))), i.fragmentNode = H(s, 1), i
}

function dn(t, n, r, i) {
    let a = new e({
            transparent: !0,
            depthWrite: !1,
            blending: 2
        }),
        o = Bt(t, vt.negate().reflect(ht).normalize().transformDirection(bt), z(r)),
        s = z(.04).add(z(.96).mul(Xe(z(1).sub(Ke($e(ht, vt), 0, 1)), 5)));
    return a.colorNode = o.rgb.mul(s).mul(n), a.name = i, {
        material: a,
        env: o
    }
}

function fn(e, t, n, r) {
    let i = r => {
        let i = { ...r
        };
        n || (delete i.clearcoat, delete i.clearcoatRoughness);
        let a = new T(i);
        return a.envNode = t, a.name = `run-vinyl-${e}`, a.userData.buildAsync = !0, a
    };
    switch (e) {
        case `orange`:
            return i({
                color: 14829082,
                roughness: .3,
                clearcoat: .9,
                clearcoatRoughness: .08,
                emissive: 16722440,
                emissiveIntensity: .1
            });
        case `rubber`:
            return i({
                color: 789517,
                roughness: .45
            });
        case `metal`:
            return i({
                color: 1710622,
                metalness: .6,
                roughness: .3,
                clearcoat: .6,
                clearcoatRoughness: .1
            });
        case `rough`:
            return i({
                color: 1052690,
                roughness: .6,
                specularIntensity: .5
            });
        case `mouth`:
            return i({
                color: 16777215,
                map: r,
                roughness: .3,
                clearcoat: 1,
                clearcoatRoughness: .05
            });
        default:
            return i({
                color: 328966,
                roughness: .28,
                specularIntensity: .6,
                clearcoat: 1,
                clearcoatRoughness: .04
            })
    }
}

function pn(e, t, n) {
    let r = n => {
        let r = new j({
            envMap: t,
            ...n
        });
        return r.name = `run-chrome-` + e, r.userData.buildAsync = !0, r
    };
    switch (e) {
        case `orange`:
            return r({
                color: 16761466,
                metalness: 1,
                roughness: .08,
                envMapIntensity: 1.2
            });
        case `rubber`:
            return r({
                color: 10131112,
                metalness: 1,
                roughness: .22
            });
        case `mouth`:
            return r({
                color: 16777215,
                map: n,
                metalness: .3,
                roughness: .15
            });
        default:
            return r({
                color: 16777215,
                metalness: 1,
                roughness: .05,
                envMapIntensity: 1.25
            })
    }
}

function mn(e, t) {
    let r = new n().copy(t.matrixWorld).invert(),
        i = new fe,
        a = new P,
        o = new n;
    return e.updateMatrixWorld(!0), e.traverse(e => {
        let t = e;
        if (!t.isMesh) return;
        o.multiplyMatrices(r, t.matrixWorld);
        let n = t.geometry.attributes.position,
            s = Math.max(1, Math.floor(n.count / 3e3));
        for (let e = 0; e < n.count; e += s) i.expandByPoint(a.fromBufferAttribute(n, e).applyMatrix4(o))
    }), i
}
async function hn(t, n) {
    let r = await t.loadGLTF(n.lod === `high` ? `gen/models/funkun_8000.glb` : `gen/models/funkun_3000.glb`),
        i = performance.now(),
        o = r.scene,
        s = new a;
    s.name = `FUNKUN`, o.position.y = nn, s.add(o), s.updateMatrixWorld(!0);
    let c = e => o.getObjectByName(e),
        l = {
            upper: c(`FUNCO_UPPER_BODY`),
            shoeL: c(`LEFT_SHOE`),
            shoeR: c(`RIGHT_SHOE`),
            antL: c(`AntennaLeft_Mesh01`),
            antR: c(`AntennaRight_Mesh01`)
        },
        u = [],
        d = new Map,
        f, p = null;
    o.traverse(e => {
        let n = e;
        if (!n.isMesh) return;
        let r = n.material,
            i = an(r.name || ``);
        i === `face` && (f = n), i === `mouth` && r.map && (p = t.adopt(r.map)), d.set(n, i), u.push(n), n.frustumCulled = !1
    });
    let m = tn(f, s),
        h = new a;
    h.name = `runner`;
    let g = new a;
    g.name = `lift`, h.add(g), g.add(s), h.updateMatrixWorld(!0);
    let _ = mn(l.upper, s),
        ee = mn(l.shoeL, s),
        v = mn(l.shoeR, s),
        y = _.getCenter(new P),
        b = new a;
    b.name = `pivU`, b.position.set(0, y.y, y.z), s.add(b), s.updateMatrixWorld(!0), b.attach(l.upper);
    let x = (e, t, n) => {
            let r = e.getCenter(new P),
                i = new a;
            return i.name = t, i.position.set(r.x, e.min.y, r.z), s.add(i), s.updateMatrixWorld(!0), i.attach(n), {
                piv: i,
                rest: i.position.clone(),
                heel: e.min.z - r.z,
                toe: e.max.z - r.z
            }
        },
        S = x(ee, `pivL`, l.shoeL),
        C = x(v, `pivR`, l.shoeR),
        te = [];
    for (let [e, t] of [
            [l.antL, `pivAL`],
            [l.antR, `pivAR`]
        ]) {
        if (!e) {
            te.push(null);
            continue
        }
        let n = mn(e, b),
            r = new a;
        r.name = t, r.position.set((n.min.x + n.max.x) / 2, n.min.y, (n.min.z + n.max.z) / 2), b.add(r), b.updateMatrixWorld(!0), r.attach(e), te.push(r)
    }
    let w = b.position.clone(),
        ne = y.y;
    g.position.y = ne * .8, s.position.y = -ne * .8;

    function T(e) {
        g.position.set(e.root.x, ne * .8 + e.root.y, e.root.z), g.rotation.set(e.root.pitch, e.root.yaw, e.root.roll, `YXZ`);
        let t = 1 + (e.root.s || 0),
            n = 1 / Math.sqrt(Math.max(.3, t));
        g.scale.set(n, n, t);
        let r = e.body;
        b.position.set(w.x + r.x, w.y + r.y, w.z + r.z), b.rotation.set(r.pitch, r.yaw, r.roll, `YXZ`);
        let i = 1 - r.sq,
            a = 1 / Math.sqrt(Math.max(.3, i));
        b.scale.set(a, i, a);
        for (let [t, n] of [
                [e.footL, S],
                [e.footR, C]
            ]) {
            let e = t.pitch > 0 ? n.toe : n.heel,
                r = Math.cos(t.pitch),
                i = Math.sin(t.pitch);
            n.piv.position.set(n.rest.x + t.x, n.rest.y + t.y + e * i, n.rest.z + t.z + (e - e * r)), n.piv.rotation.set(t.pitch, t.yaw, t.roll, `YXZ`)
        }
        te[0] && te[0].rotation.set(e.antL, 0, -e.antL * .25, `YXZ`), te[1] && te[1].rotation.set(e.antR, 0, e.antR * .25, `YXZ`)
    }
    let E = new e;
    E.name = `run-led`, E.colorNode = m.hdr();
    let re = {
            toon: new Map,
            ascii: new Map,
            bit8: new Map,
            beauty: new Map,
            chrome: new Map,
            charge: new Map
        },
        ie = new Set([E]),
        D = (e, t, n) => {
            for (let r of t) re[e].set(r, n);
            ie.add(n)
        },
        ae = [`black`, `metal`, `rough`];
    D(`toon`, ae, cn(`black`, m, null)), D(`toon`, [`rubber`], cn(`rubber`, m, null)), D(`toon`, [`orange`], cn(`orange`, m, null)), D(`toon`, [`mouth`], cn(`mouth`, m, p)), D(`toon`, [`face`], cn(`face`, m, null)), D(`ascii`, [...ae, `rubber`], ln(`black`, m, null)), D(`ascii`, [`orange`], ln(`orange`, m, null)), D(`ascii`, [`mouth`], ln(`mouth`, m, p)), D(`ascii`, [`face`], ln(`face`, m, null)), D(`bit8`, ae, un(`black`, m, null)), D(`bit8`, [`rubber`], un(`rubber`, m, null)), D(`bit8`, [`orange`], un(`orange`, m, null)), D(`bit8`, [`mouth`], un(`mouth`, m, p)), D(`bit8`, [`face`], un(`face`, m, null));
    let O = Bt(n.env.beauty),
        oe = dn(n.env.beauty, 1.6, .03, `run-vinyl-glass`);
    for (let e of [`black`, `metal`, `rough`, `rubber`, `orange`, `mouth`]) {
        let t = fn(e, O, n.detail, p);
        D(`beauty`, [e], t), D(`charge`, [e], t)
    }
    D(`beauty`, [`glass`], oe.material), D(`charge`, [`glass`], oe.material), D(`beauty`, [`face`], E), D(`charge`, [`face`], E);
    let k = e => {
        O.value !== e && (O.value = e, oe.env.value = e)
    };
    D(`chrome`, ae, pn(`black`, n.env.chrome, null)), D(`chrome`, [`rubber`], pn(`rubber`, n.env.chrome, null)), D(`chrome`, [`orange`], pn(`orange`, n.env.chrome, null)), D(`chrome`, [`mouth`], pn(`mouth`, n.env.chrome, p)), D(`chrome`, [`glass`], dn(n.env.chrome, 1.2, .02, `run-chrome-glass`).material), D(`chrome`, [`face`], E);
    let se = new Set;
    for (let e of u) {
        let t = e.material;
        for (let e of Object.values(t)) e && e.isTexture && e !== p && se.add(e);
        t.dispose()
    }
    let ce = p ? .image;
    for (let e of se) {
        let t = e.image;
        t && t !== ce && typeof ImageBitmap < `u` && t instanceof ImageBitmap && t.close(), e.dispose()
    }
    let le = null;

    function A(e) {
        if (k(e === `charge` ? n.env.charge : n.env.beauty), e !== le) {
            le = e;
            for (let t of u) {
                let n = re[e].get(d.get(t));
                t.visible = !!n, n && (t.material = n), t.renderOrder = d.get(t) === `glass` ? 3 : 1
            }
        }
    }
    A(`toon`);
    try {
        performance.measure(`run · funkun setup`, {
            start: i,
            end: performance.now()
        })
    } catch {}
    return {
        runner: h,
        object: s,
        led: m,
        meshes: u,
        textures: [m.tex, ...p ? [p] : []],
        bodyCentreY: ne,
        apply: T,
        setLook: A,
        look: () => le,
        dispose() {
            for (let e of ie) e.dispose();
            for (let e of u) e.geometry.dispose();
            p ? .dispose(), m.dispose()
        }
    }
}
var gn = [`beauty`, `chrome`, `charge`],
    _n = new P(0, .6, 0);

function vn(e) {
    let t = new pe,
        n = [];
    return e(t, n), {
        scene: t,
        dispose() {
            for (let e of n) e.dispose()
        }
    }
}

function yn(t, n, r) {
    let i = new e({
        transparent: !0,
        blending: 2,
        depthWrite: !1,
        side: 2
    });
    i.name = `run-env-card`;
    let a = Q().mul(2).sub(1),
        o = n.soft ? ? .3,
        s = K(0, o, z(1).sub(q(a.x))).mul(K(0, o, z(1).sub(q(a.y))));
    i.colorNode = V(L(new E(n.c).multiplyScalar(n.k))).mul(s);
    let c = new y(new x(1, 1), i);
    c.position.set(...n.p), c.scale.set(n.s[0], n.s[1], 1), c.lookAt(_n), c.renderOrder = 10, t.add(c), r.push(c.geometry, i)
}

function bn(t, n, r) {
    let i = new e({
        side: 1,
        depthWrite: !1
    });
    i.name = `run-env-dome`, i.colorNode = n;
    let a = new y(new ge(30, 48, 24), i);
    return a.position.copy(_n), a.renderOrder = -1, t.add(a), r.push(a.geometry, i), a
}

function xn(e) {
    let t = nt(ft);
    return {
        beauty: vn((n, r) => {
            let i = bn(n, R(e, Tt(t)).rgb.mul(.32).add(V(.02, .025, .12).mul(K(.2, -.4, t.y))), r);
            i.rotation.y = 5;
            for (let e of [{
                    p: [-2, 1.8, .4],
                    s: [.5, 1.9],
                    c: `#fff4ea`,
                    k: 20
                }, {
                    p: [1.9, 1, .6],
                    s: [.35, 1.6],
                    c: `#eef2ff`,
                    k: 8
                }, {
                    p: [0, 2.6, .3],
                    s: [1.6, .9],
                    c: `#ffffff`,
                    k: 5
                }, {
                    p: [-1.4, 1, -1.5],
                    s: [.22, 1.9],
                    c: `#ffffff`,
                    k: 12
                }, {
                    p: [1.5, .9, -1.3],
                    s: [.22, 1.9],
                    c: `#ff5a2a`,
                    k: 14
                }, {
                    p: [0, .2, 2],
                    s: [3, .6],
                    c: `#2e36ff`,
                    k: 3
                }]) yn(n, e, r)
        }),
        chrome: vn((e, n) => {
            let r = t.y,
                i = G(V(.95, .12, .62), V(.16, .03, .42), K(0, .6, r)),
                a = Gt(r.mul(-6).add(.2)),
                o = K(.02, 0, q(r.sub(.06))).add(K(.1, 0, q(r.sub(.06))).mul(.4)),
                s = Y(.5, U(W(t.x.div(r.abs().add(.05)).mul(3)).add(W(t.z.div(r.abs().add(.05)).mul(3))).mul(.5)));
            bn(e, G(G(V(.05, .02, .12), V(.55, .5, .75), s).mul(K(0, -.5, r).mul(.9).add(.1)), i, K(-.02, .02, r)).add(a.mul(o).mul(2.2)).add(V(1, .8, 1).mul(Xe(Ke(Le(t.x.mul(9)).mul(.5).add(.5), 0, 1), 60).mul(K(.15, .4, r)).mul(3))), n);
            for (let t of [{
                    p: [-2.2, 1.6, .8],
                    s: [.3, 2.4],
                    c: `#ffffff`,
                    k: 16
                }, {
                    p: [2.1, 1.2, .9],
                    s: [.3, 2.2],
                    c: `#9ff4ff`,
                    k: 12
                }, {
                    p: [0, 2.8, .2],
                    s: [2.2, .5],
                    c: `#ffffff`,
                    k: 8
                }, {
                    p: [.8, .4, 2.2],
                    s: [1.6, .3],
                    c: `#ff5ad2`,
                    k: 8
                }, {
                    p: [-1.2, .8, -2],
                    s: [.3, 1.8],
                    c: `#fff36a`,
                    k: 10
                }]) yn(e, t, n)
        }),
        charge: vn((n, r) => {
            let i = bn(n, R(e, Tt(t)).rgb.mul(.06), r);
            i.rotation.y = 2;
            for (let e of [{
                    p: [-1.5, 1, -1.2],
                    s: [.24, 2],
                    c: `#ff2a10`,
                    k: 46
                }, {
                    p: [1.5, .9, -1.2],
                    s: [.24, 2],
                    c: `#ff2a10`,
                    k: 40
                }, {
                    p: [0, .65, -2.2],
                    s: [4, .12],
                    c: `#f5ff00`,
                    k: 18,
                    soft: .5
                }, {
                    p: [-1.8, 1.9, .6],
                    s: [.5, 1.2],
                    c: `#fff4ea`,
                    k: 9
                }, {
                    p: [.6, 2.3, 1.4],
                    s: [.2, .2],
                    c: `#ffffff`,
                    k: 10
                }]) yn(n, e, r)
        })
    }
}
async function Sn(e, t, n, r) {
    let i = new A(e),
        a = xn(t),
        o = {
            size: n,
            position: _n
        },
        s = {},
        c = !1;
    try {
        for (let t of gn) {
            if (r.cancelled()) return null;
            let o = null;
            await ae(e, () => {
                o = i.fromScene(a[t].scene, 0, .05, 60, {
                    size: n,
                    position: _n,
                    renderTarget: o
                })
            }, {
                pmrem: !0,
                cancelled: r.cancelled
            }), o ? .dispose(), await r.frame()
        }
        for (let t of gn) {
            if (r.cancelled()) return null;
            s[t] = i.fromScene(a[t].scene, 0, .05, 60, o), M(e, s[t]), await r.frame()
        }
        if (r.cancelled()) return null;
        c = !0
    } finally {
        for (let e of gn) a[e].dispose();
        if (i.dispose(), !c)
            for (let e of Object.values(s)) e ? .dispose()
    }
    let l = {};
    for (let t of gn) l[t] = await Ce(e, s[t], {
        frame: r.frame
    });
    return {
        beauty: l.beauty.texture,
        chrome: l.chrome.texture,
        charge: l.charge.texture,
        dispose() {
            for (let e of gn) l[e].dispose()
        }
    }
}
var Cn = {
        cut: 0,
        scan: 1,
        blocks: 2,
        window: 3,
        iris: 4,
        tear: 5,
        tvoff: 6,
        flash: 7
    },
    wn = .4,
    Tn = class {
        renderer;
        scene;
        low;
        prev;
        quad;
        copyMat;
        copySrc;
        w = 0;
        h = 0;
        lw = 0;
        lh = 0;
        constructor(e, t) {
            this.renderer = e;
            let n = {
                type: f,
                generateMipmaps: !1,
                minFilter: o,
                magFilter: o
            };
            this.scene = new ue(16, 16, { ...n,
                samples: he(e, t),
                depthBuffer: !0,
                ...i
            }), this.scene.texture.name = `run-scene`, this.low = new ue(16, 16, { ...n,
                minFilter: v,
                magFilter: v,
                depthBuffer: !0
            }), this.low.texture.name = `run-low`, this.prev = new ue(16, 16, { ...n,
                ...me,
                depthBuffer: !1
            }), this.prev.texture.name = `run-prev`, this.copySrc = R(this.prev.texture, Q()), this.copyMat = new k, this.copyMat.name = `run-copy`, this.copyMat.fragmentNode = H(this.copySrc.rgb, 1), this.copyMat.depthTest = !1, this.copyMat.depthWrite = !1, this.quad = new ie(this.copyMat)
        }
        resize(e, t, n) {
            (e !== this.w || t !== this.h) && (this.w = e, this.h = t, this.scene.setSize(e, t), this.prev.setSize(e, t));
            let r = Math.max(1, 5 * n),
                i = Math.max(32, Math.round(e / r)),
                a = Math.max(32, Math.round(t / r));
            (i !== this.lw || a !== this.lh) && (this.lw = i, this.lh = a, this.low.setSize(i, a))
        }
        capture(e) {
            this.copySrc.value = e.texture, this.draw(this.copyMat, this.prev)
        }
        drawScene(e, t, n) {
            let r = this.renderer;
            r.setRenderTarget(n ? this.low : this.scene), r.render(e, t)
        }
        draw(e, t) {
            let n = this.renderer;
            this.quad.material = e, n.setRenderTarget(t), this.quad.render(n)
        }
        rawMat = null;
        raw(e, t) {
            this.rawMat || (this.rawMat = new k, this.rawMat.fragmentNode = H(R(this.scene.texture, Q()).rgb, 1)), t || this.draw(this.rawMat, e)
        }
        wrap(e, t, n) {
            let r = new k;
            return r.name = `run-out-` + e, r.fragmentNode = H(En(t, n, this.prev.texture), 1), r.depthTest = !1, r.depthWrite = !1, r
        }
        targets() {
            return [this.scene, this.low, this.prev]
        }
        dispose() {
            this.scene.dispose(), this.low.dispose(), this.prev.dispose(), this.copyMat.dispose()
        }
    };

function En(e, t, n) {
    return I(() => {
        let r = Q(),
            i = Ke(t.wipeP, 0, 1),
            a = r.mul(t.res),
            o = t.wipeType,
            s = t.res.x.div(t.res.y),
            c = t.unit.mul(54),
            l = Ut(W(a.y.div(c)).add(t.wipeSeed.mul(13.1))),
            u = Y(4.5, o).mul(Y(o, 5.5)),
            d = l.sub(.5).mul(.5).mul(K(0, .7, i)).mul(u),
            f = Y(5.5, o).mul(Y(o, 6.5)),
            p = X(z(1).sub(i.mul(2.6)), .004),
            m = G(r.y, r.y.sub(.5).div(p).add(.5), f),
            h = G(z(1), Y(q(r.y.sub(.5)), p.mul(.5)), f),
            g = R(n, B(r.x.add(d), m)).rgb.mul(h).mul(z(1).add(f.mul(K(.1, .38, i)).mul(6))),
            _ = Y(r.y, i.mul(1.12).sub(.06)),
            ee = t.unit.mul(48),
            v = Y(Ht(W(a.div(ee)).add(t.wipeSeed)), i.mul(1.05)),
            y = r.sub(.5).mul(B(s, 1)),
            b = Xt(y, B(s, 1).mul(.5).mul(i.mul(1.08))),
            x = Y(b, 0),
            S = Y(J(y), i.mul(1.15)),
            C = Y(l.mul(.7), i.mul(1.2).sub(.15)),
            te = K(.38, .55, i),
            w = Z(o.lessThan(.5), Y(1e-4, i), Z(o.lessThan(1.5), _, Z(o.lessThan(2.5), v, Z(o.lessThan(3.5), x, Z(o.lessThan(4.5), S, Z(o.lessThan(5.5), C, Z(o.lessThan(6.5), te, Y(1e-4, i)))))))),
            ne = qe(q(r.y.sub(i.mul(1.12).sub(.06))).mul(t.res.y).div(t.unit.mul(-6))).mul(Y(.5, o)).mul(Y(o, 1.5)),
            T = Y(b, 0).mul(Y(b.negate(), t.unit.mul(6).div(t.res.y))).mul(Y(2.5, o)).mul(Y(o, 3.5)),
            E = Y(6.5, o).mul(qe(i.mul(-7))),
            re = Y(i, .999),
            ie = G(g, e, w).toVar();
        return ie.addAssign(V(.55, 1, .7).mul(ne).mul(re).mul(1.4)), ie.assign(G(ie, V(.012), T.mul(re))), ie.addAssign(V(E).mul(re)), ie.addAssign(V(t.flash)), it(ie, V(4))
    })()
}
var Dn = [`toon`, `ascii`, `bit8`, `desktop`, `y2k`, `glitch`, `overload`, `charge`],
    On = [`toon`, `ascii`, `bit8`, `desktop`, `y2k`, `glitch`];

function kn() {
    return {
        time: L(0),
        clock: L(0),
        beat: L(0),
        res: L(new te(1920, 1080)),
        unit: L(1),
        lowRes: L(new te(384, 216)),
        portrait: L(0),
        reduced: L(0),
        speed: L(1),
        runner: L(new P),
        shadow: L(new ve(0, 0, .42, 1)),
        sunDir: L(new P(-.4, .3, -.85).normalize()),
        camFwd: L(new P(0, 0, -1)),
        panel: L(new ve(0, 0, 1, 1)),
        wipeP: L(1),
        wipeType: L(0),
        wipeSeed: L(0),
        flash: L(0),
        shake: L(0),
        energy: L(0),
        air: L(0),
        hitAge: L(10),
        glitch: L(1)
    }
}

function An(e, t = 400) {
    let n = new x(t, t, 1, 1);
    n.rotateX(-Math.PI / 2);
    let r = new y(n, e);
    return r.frustumCulled = !1, r.renderOrder = -5, r
}

function jn(e, t = 350) {
    let n = new ge(t, 48, 24),
        r = new y(n, e);
    return e.side = 1, e.depthWrite = !1, r.frustumCulled = !1, r.renderOrder = -10, r
}

function Mn(e) {
    let t = e >>> 0;
    return () => {
        t = t + 1831565813 >>> 0;
        let e = t;
        return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296
    }
}
var Nn = class {
    mesh;
    baseX;
    period;
    place;
    m = new n;
    constructor(e, t, n, r) {
        this.mesh = e, this.baseX = t, this.period = n, this.place = r, e.frustumCulled = !1
    }
    update(e) {
        let t = this.period;
        for (let n = 0; n < this.baseX.length; n++) {
            let r = this.baseX[n] + Math.round((e - this.baseX[n]) / t) * t;
            this.place(n, r, this.m), this.mesh.setMatrixAt(n, this.m)
        }
        this.mesh.instanceMatrix.needsUpdate = !0
    }
};

function Pn(e) {
    e.traverse(e => {
        let t = e;
        t.geometry && t.geometry.dispose();
        let n = t.material;
        Array.isArray(n) ? n.forEach(e => e.dispose()) : n ? .dispose()
    })
}
var Fn = [`gogogo`, `baribari`, `guooo`, `waaa`, `zyan`, `dodon`, `gif19`],
    In = class {
        max;
        atlas;
        meta;
        U;
        mesh;
        cellA;
        rectA;
        mats = new Map;
        constructor(e, n, r, i) {
            this.max = e, this.atlas = n, this.meta = r, this.U = i;
            let a = new x(1, 1);
            a.translate(0, .5, 0), this.cellA = new t(new Float32Array(e * 4), 4), this.rectA = new t(new Float32Array(e * 4), 4), a.setAttribute(`aCell`, this.cellA), a.setAttribute(`aRect`, this.rectA), this.mesh = new d(a, this.material(`color`), e), this.mesh.frustumCulled = !1, this.mesh.count = 0, this.mesh.renderOrder = 2
        }
        sample() {
            let e = this.meta,
                t = ke(`aCell`, `vec4`),
                n = ke(`aRect`, `vec4`),
                r = W(Ge(this.U.time.mul(t.z).add(t.w), t.y)),
                i = t.x.add(r),
                a = Ge(i, e.cols),
                o = W(i.div(e.cols)),
                s = G(n.xy, n.zw, Q()),
                c = B(a, z(e.rows - 1).sub(o)).add(s).div(B(e.cols, e.rows));
            return R(this.atlas, c)
        }
        material(t) {
            let n = this.mats.get(t);
            if (n) return n;
            let r = new e({
                side: 2
            });
            return r.name = `run-sticker-` + t, r.fragmentNode = I(() => {
                let e = this.sample();
                e.a.lessThan(.5).discard();
                let n = e.rgb,
                    r = $e(Mt(n), V(.2126, .7152, .0722));
                if (t === `toon`) {
                    let e = Mt(n),
                        t = Ke(z(1).sub(r.mul(1.3)), 0, 1);
                    return H(t, Ke(e.r.sub(e.b).mul(1.7).sub(.15), 0, 1).mul(z(1).sub(t)), .95, 1)
                }
                return t === `ascii` ? H(r.mul(1.05).add(.04), 1, 0, 1) : H(t === `bit8` ? Mt(n) : t === `glitch` ? n.mul(V(.7, 1.05, 1.15)) : n.mul(.92), 1)
            })(), this.mats.set(t, r), r
        }
        set(e, t, n) {
            this.cellA.setXYZW(e, t.cell, t.n, t.fps, n), this.rectA.setXYZW(e, t.rect[0], t.rect[1], t.rect[2], t.rect[3]), this.cellA.needsUpdate = !0, this.rectA.needsUpdate = !0
        }
        dispose() {
            this.mesh.geometry.dispose();
            for (let e of this.mats.values()) e.dispose()
        }
    },
    Ln = class {
        max;
        mesh;
        data;
        mats = new Map;
        constructor(e, n) {
            this.max = e;
            let r = new x(1, 1);
            this.data = new t(new Float32Array(e * 4), 4), r.setAttribute(`aPuff`, this.data), this.mesh = new d(r, this.material(`color`), e), this.mesh.frustumCulled = !1, this.mesh.count = 0, this.mesh.renderOrder = 3
        }
        material(t) {
            let n = this.mats.get(t);
            if (n) return n;
            let r = new e({
                side: 2,
                depthWrite: !1
            });
            return r.name = `run-puff-` + t, r.fragmentNode = I(() => {
                let e = ke(`aPuff`, `vec4`),
                    n = e.x,
                    r = e.y,
                    i = e.z,
                    a = Q().sub(.5).mul(2),
                    o = z(.55).add(n.mul(.35)),
                    s = J(a.sub(B(-.32, -.1))),
                    c = J(a.sub(B(.28, -.05))),
                    l = J(a.sub(B(0, .25))),
                    u = X(X(Y(s, o.mul(.62)), Y(c, o.mul(.55))), Y(l, o.mul(.6))),
                    d = a.x.abs(),
                    f = a.y.abs(),
                    p = Y(d.mul(f).mul(22).add(d.add(f).mul(.6)), z(.62).sub(n.mul(.4))),
                    m = Z(i.greaterThan(.5), p, u),
                    h = Ot.xy,
                    g = z(1).sub(K(.35, 1, n));
                if (m.mul(Y(Ht(W(h.div(2)).add(r.mul(91))), g)).lessThan(.5).discard(), t === `toon`) {
                    let e = Y(o.mul(.62).sub(.12), s).mul(Y(o.mul(.55).sub(.12), c)).mul(Y(o.mul(.6).sub(.12), l));
                    return H(Z(i.greaterThan(.5), z(1), G(z(.22), z(1), e)), 0, 0, 0)
                }
                return t === `ascii` ? H(Z(i.greaterThan(.5), z(1.1), z(.45)), 1, 0, 0) : H(t === `bit8` ? Z(i.greaterThan(.5), V(.96, 1, 0), V(.94, .92, .89)) : t === `glitch` ? Z(i.greaterThan(.5), V(.4, 3, 3.2), V(.5, .9, 1)) : Z(i.greaterThan(.5), V(3.2, 2.8, 3.6), V(.85, .82, .9)), 0)
            })(), this.mats.set(t, r), r
        }
        dispose() {
            this.mesh.geometry.dispose();
            for (let e of this.mats.values()) e.dispose()
        }
    };

function Rn(e, t) {
    let n = e.y,
        r = G(G(V(1, .35, .8), V(.45, .12, .9), K(0, .35, n)), V(.08, .02, .25), K(.35, .9, n)),
        i = G(V(.25, .1, .45), V(.03, .01, .08), K(0, -.6, n)),
        a = qe(q(n.sub(.02)).mul(-40)).mul(2.5),
        o = Xe(Ke(Le(Be(e.z, e.x).mul(5)).mul(.5).add(.5), 0, 1), 30).mul(K(.1, .5, n)).mul(3),
        s = G(i, r, K(-.03, .03, n)).add(V(1, .85, 1).mul(a.add(o)));
    return G(s, s.zyx.mul(V(.6, 1.1, 1.2)), t)
}

function zn(r, i, o, s) {
    let {
        U: c
    } = r, l = L(0), u = new a;
    u.name = `y2k`;
    let f = new e;
    f.name = `run-y2k-skyM`, f.fragmentNode = I(() => {
        let e = nt(dt.sub(yt)),
            t = e.y,
            n = G(G(V(.62, .06, .42), V(.16, .025, .4), K(0, .16, t)), V(.018, .004, .07), K(.16, .7, t)),
            r = qe(q(t.sub(.012)).mul(-70)).mul(1.1),
            i = K(.6, 0, J(e.sub(nt(V(c.sunDir.x.mul(-.5), .5, c.sunDir.z.mul(.7)))))).mul(.22),
            a = W(e.mul(160)),
            o = Ht(B(a.x.add(a.z.mul(57.1)), a.y)),
            s = z(.55).add(Le(c.time.mul(3).add(o.mul(40))).mul(.45)),
            u = Y(.992, o).mul(Y(.03, t)).mul(s).mul(1.3),
            d = n.add(V(1, .45, .85).mul(r)).add(V(.45, .15, .85).mul(i)).add(V(u));
        return H(G(d, d.zyx.mul(V(.5, 1, 1.1)), l), 0)
    })();
    let p = jn(f);
    u.add(p);
    let m = new e;
    m.name = `run-y2k-gM`, m.fragmentNode = I(() => {
        let e = dt,
            t = J(e.xz.sub(yt.xz)),
            n = q(U(e.x.div(3)).sub(.5)),
            r = q(U(e.z.div(3)).sub(.5)),
            i = X(K(.47, .5, n), K(.47, .5, r)).mul(K(70, 5, t)).mul(.35),
            a = K(1.35, 1.25, q(e.z)),
            o = e.z.add(1.3).div(2.6),
            s = Gt(o.mul(.85).add(.02)).mul(1.05).add(.08),
            u = qe(q(e.z.add(1.05)).mul(-10)).mul(2.2),
            d = Xe(U(e.x.mul(.12).sub(c.time.mul(.9)).add(o.mul(.3))), 18).mul(2.5),
            f = Y(.92, U(o.mul(7))).mul(.4),
            p = s.mul(z(.7).add(d)).add(V(u)).add(f),
            m = K(1, .3, J(e.xz.sub(B(c.shadow.x, c.shadow.y)).div(B(c.shadow.z.mul(1.3), c.shadow.z.mul(.7))))).mul(c.shadow.w).mul(.8),
            h = G(G(V(.03, .008, .08), V(.2, .06, .4), qe(t.mul(-.03)).mul(.25)).add(V(.5, .25, .9).mul(i)), p, a).mul(z(1).sub(m));
        return H(G(h, h.zyx.mul(V(.6, 1, 1.1)), l), 0)
    })();
    let h = An(m);
    u.add(h);
    let g = new a;
    u.add(g);
    let _ = new e;
    _.name = `run-y2k-earthM`, _.fragmentNode = I(() => {
        let e = nt(ft),
            t = c.time.mul(.05),
            n = V(e.x.mul(Re(t)).sub(e.z.mul(Le(t))), e.y, e.x.mul(Le(t)).add(e.z.mul(Re(t)))),
            r = K(.02, .1, Rt(n.mul(2.4)).add(Rt(n.mul(5.1)).mul(.35))),
            i = K(.78, .88, q(e.y)),
            a = K(.25, .55, Rt(n.mul(4.2).add(V(c.time.mul(.03), 0, 0)))),
            o = G(G(V(.05, .35, 1), V(.2, .85, .35), r), V(1), X(i, a.mul(.8))),
            s = ht,
            u = vt,
            d = Ke($e(s, nt(V(-.6, .5, .6))), 0, 1).mul(.9).add(.12),
            f = Xe(z(1).sub(q($e(s, u))), 3).mul(1.4),
            p = o.mul(d).add(V(.4, .7, 1.4).mul(f));
        return H(G(p, p.zyx, l), 1)
    })();
    let ee = new y(new ge(1, 48, 24), _);
    ee.frustumCulled = !1, g.add(ee);
    let v = new e({
        transparent: !0,
        blending: 2,
        depthWrite: !1,
        side: 2
    });
    v.name = `run-y2k-arcM`, v.fragmentNode = I(() => {
        let e = Q().y,
            t = Gt(e.mul(.8)).mul(K(0, .2, e).mul(K(1, .8, e))).mul(.9);
        return H(G(t, t.zyx, l), 1)
    })();
    let b = new y(new O(1.6, .18, 12, 64, Math.PI), v);
    b.frustumCulled = !1, g.add(b);
    let S = new e({
        transparent: !1,
        side: 2
    });
    S.name = `run-y2k-logoM`, S.fragmentNode = I(() => {
        let e = B(Q().x, z(1).sub(Q().y)),
            t = e => R(s, e).level(2.2).r;
        R(s, e).level(.8).r.lessThan(.4).discard();
        let n = B(2.5 / 512, 2.5 / 200),
            r = t(e.add(B(n.x, 0))).sub(t(e.sub(B(n.x, 0)))),
            i = t(e.add(B(0, n.y))).sub(t(e.sub(B(0, n.y)))),
            a = nt(V(r.mul(-6), i.mul(6), z(.35))),
            o = nt(ht.add(V(a.x, a.y, 0).mul(1.4)));
        return H(Rn(rt(vt.negate(), o), l).mul(1.1).add(V(.9, .8, 1).mul(Xe(Ke($e(a, nt(V(-.4, .6, .7))), 0, 1), 24).mul(3))), 1)
    })();
    let C = new y(new x(1, 400 / 1024), S);
    C.frustumCulled = !1, g.add(C);
    let ne = new x(1, 1),
        T = new t(new Float32Array(36), 2);
    ne.setAttribute(`aSpark`, T);
    let E = Mn(26);
    for (let e = 0; e < 18; e++) T.setXY(e, E() * 10, e < 12 ? 0 : 1);
    let ie = new e({
        transparent: !0,
        blending: 2,
        depthWrite: !1,
        side: 2
    });
    ie.name = `run-y2k-sM`, ie.fragmentNode = I(() => {
        let e = ke(`aSpark`, `vec2`),
            t = Q().sub(.5).mul(2),
            n = q(t.x),
            r = q(t.y),
            i = Xe(Le(c.time.mul(2.3).add(e.x.mul(7))).mul(.5).add(.5), 3),
            a = qe(n.mul(r).mul(-90)).mul(qe(J(t).mul(-2.2))).mul(2.2).add(qe(J(t).mul(-9)).mul(1.5)),
            o = B(n.mul(.866).add(r.mul(.5)), r),
            s = X(o.x, o.y),
            u = K(.9, .86, s).mul(.08).add(K(.03, 0, q(s.sub(.88))).mul(.12)),
            d = Z(e.y.lessThan(.5), a.mul(i), u),
            f = Z(e.y.lessThan(.5), V(1, .85, 1), V(.6, .4, 1)).mul(d);
        return H(G(f, f.zyx, l), 1)
    })();
    let D = new d(ne, ie, 18);
    D.frustumCulled = !1;
    let ae = Array.from({
        length: 18
    }, (e, t) => new P((E() - .3) * 9, .6 + E() * 3.4, -1.5 - E() * 7 - (t >= 12 ? 3 : 0)));
    u.add(D);
    let k = new oe;
    k.grade({
        contrast: 1.1,
        saturation: 1.15,
        shadowTint: [.01, 0, .03],
        highTint: [.02, 0, .02],
        vignette: .45,
        grain: .035,
        exposure: .95
    }), k.ca.value = .004;
    let se = L(new te(.8, .25)),
        ce = R(r.rt.scene.texture),
        le = re(ce, Q(), k.ca),
        A = de(H(le, 1), .42, .45, .82);
    A.setResolutionScale(r.settings.bloom);
    let ue = I(() => {
            let e = Q(),
                t = c.res.x.div(c.res.y),
                n = e.sub(se).mul(B(t, 1)),
                r = qe(q(n.y).mul(-160)).mul(qe(q(n.x).mul(-1.6))).mul(.9),
                i = qe(J(n).mul(-22)).mul(1.2),
                a = qe(q(J(n).sub(.16)).mul(-60)).mul(.12);
            return V(1, .7, 1).mul(r.add(i)).add(V(.5, .8, 1).mul(a))
        })(),
        fe = w(le.add(A.rgb).add(ue), k, Q()),
        pe = r.wrap(`y2k`, fe.rgb);
    k.aspect.value = 16 / 9;
    let me = new P,
        j = new P,
        he = new P(0, 1, 0),
        M = new P,
        N = !1;
    return {
        id: `y2k`,
        look: `chrome`,
        groups: [u],
        sticker: i.material(`color`),
        puff: o.material(`color`),
        output: pe,
        variant: l,
        post: () => pe,
        update(e) {
            l.value = 0;
            let t = e.camera;
            p.position.copy(t.position), h.position.set(Math.round(t.position.x / 3) * 3, 0, Math.round(t.position.z / 3) * 3), t.getWorldDirection(me), me.y = 0, me.normalize(), j.crossVectors(me, he).normalize(), g.position.set(t.position.x, 0, t.position.z), M.copy(me).multiplyScalar(70).addScaledVector(j, N ? 9 : 25).add(new P(0, N ? 22 : 9, 0)), ee.position.copy(M), ee.scale.setScalar(N ? 6 : 6.5), b.position.copy(M).addScaledVector(me, 6), b.scale.setScalar(N ? 8 : 9), b.lookAt(t.position), M.copy(me).multiplyScalar(40).addScaledVector(j, N ? -2 : -14).add(new P(0, (N ? 12.5 : 4.2) + Math.sin(e.t * 1.1) * .3, 0)), C.position.copy(M), C.scale.setScalar(N ? 17 : 15), C.lookAt(t.position), C.rotateZ(Math.sin(e.t * .7) * .05);
            let r = new n,
                i = t.quaternion,
                a = new P;
            for (let t = 0; t < 18; t++) {
                let n = ae[t],
                    o = e.x + ((n.x - e.x * .25) % 12 + 12) % 12 - 3,
                    s = t < 12 ? .55 + t % 4 * .2 : 1.8 + t % 3 * .8;
                r.compose(M.set(o, n.y, n.z), i, a.set(s, s, s)), D.setMatrixAt(t, r)
            }
            D.instanceMatrix.needsUpdate = !0, M.copy(t.position).addScaledVector(me, 80).addScaledVector(j, N ? 10 : 34).add(new P(0, N ? 14 : 9, 0)).project(t), se.value.set(M.x * .5 + .5, .5 - M.y * .5), k.aspect.value = t.aspect, k.time.value = e.t
        },
        layout(e) {
            N = e
        },
        dispose() {
            Pn(u), pe.dispose(), A.dispose()
        }
    }
}
var Bn = {
        toon: `toon`,
        ascii: `ascii`,
        bit8: `bit8`,
        desktop: `desktop`,
        y2k: `y2k`,
        glitch: `glitch`,
        overload: `toon`,
        charge: `charge`
    },
    Vn = [-.7, .4, .45],
    Hn = class {
        max;
        U;
        mesh;
        data;
        mats = new Map;
        constructor(e, n) {
            this.max = e, this.U = n;
            let r = new ne(1, 1, 1);
            r.translate(0, .5, 0), this.data = new t(new Float32Array(e * 4).fill(1), 4), r.setAttribute(`aBlk`, this.data), this.mesh = new d(r, this.material(`toon`), e), this.mesh.name = `run-blocks`, this.mesh.frustumCulled = !1, this.mesh.count = 0, this.mesh.renderOrder = 2
        }
        material(t) {
            let n = this.mats.get(t);
            if (n) return n;
            let r = new e;
            r.name = `run-block-` + t;
            let i = this.U;
            return r.fragmentNode = I(() => {
                let e = ke(`aBlk`, `vec4`),
                    n = ke(`normal`, `vec3`),
                    r = pt,
                    a = Q(),
                    o = Y(.5, n.y),
                    s = Y(n.y, -.5),
                    c = z(1).sub(o).sub(s),
                    l = Z(q(n.x).greaterThan(.5), B(e.z, e.y), Z(q(n.y).greaterThan(.5), B(e.x, e.z), B(e.x, e.y))),
                    u = it(a, B(1).sub(a)),
                    d = u.mul(l),
                    f = it(u.x.div(X(at(a.x), 1e-5)), u.y.div(X(at(a.y), 1e-5))),
                    p = Y($e(gt, nt(V(...Vn))), .05),
                    m = X(Y(it(d.x, d.y), .085), Y(it(q(a.x.sub(a.y)), q(a.x.add(a.y).sub(1))).mul(it(l.x, l.y)).mul(.7071), .045).mul(c));
                if (t === `toon`) {
                    let e = z(1).sub(K(1.3, 2.8, f)),
                        t = Z(o.greaterThan(.5), z(.12), G(z(.4), z(.7), p)).mul(z(1).sub(m));
                    return H(Z(e.greaterThan(.02), e.add(1), t), m.mul(.95), Z(m.greaterThan(.5), z(.58), z(.52)), 1)
                }
                if (t === `ascii`) {
                    let e = z(1).sub(K(1.2, 3.2, f)),
                        t = Z(o.greaterThan(.5), z(.5), G(z(.3), z(.2), p));
                    return H(X(X(e.mul(1.1), m.mul(.85)), t), 1, 0, 1)
                }
                if (t === `bit8`) {
                    let e = Z(o.greaterThan(.5), $(15723492), Z(p.greaterThan(.5), $(3816004), $(9078400))).toVar(),
                        t = z(1).sub(a.y).mul(l.y),
                        n = a.x.mul(l.x),
                        r = X(Y(t, .06), Y(n, .06)).mul(c),
                        i = X(Y(a.y.mul(l.y), .06), Y(l.x.sub(n), .06)).mul(c);
                    e.assign(G(e, $(15723492), r.mul(z(1).sub(p)))), e.assign(G(e, $(3816004), i));
                    let s = Y(J(q(a.sub(.5)).mul(l).sub(l.mul(.5).sub(.13))), .04).mul(c);
                    return e.assign(G(e, $(3816004), s)), H(G(e, $(1118481), Y(f, 1.1)), 1)
                }
                if (t === `desktop`) {
                    let e = a.x.mul(l.x),
                        t = z(1).sub(a.y).mul(l.y),
                        n = it(z(.15), l.y.mul(.28)),
                        r = $(15723492).toVar(),
                        i = Y(t, n).mul(c);
                    r.assign(G(r, $(1118481), i));
                    let s = Y(q(e.sub(.09)), .035).mul(Y(q(t.sub(n.mul(.5))), .035)).mul(i);
                    r.assign(G(r, $(16121600), s));
                    let u = Y(q(e.sub(l.x.sub(.09))), .04).mul(Y(q(t.sub(n.mul(.5))), .035)).mul(i);
                    r.assign(G(r, $(15723492), u));
                    let d = n.add(l.y.sub(n).mul(.46)),
                        m = B(e.sub(.17), t.sub(d)),
                        h = J(m),
                        g = Y(h, .085).mul(c).mul(Y(n, t)),
                        _ = Y(it(q(m.x.sub(m.y)), q(m.x.add(m.y))), .016).mul(Y(h, .05));
                    r.assign(G(r, G($(14964526), $(16777215), _), g));
                    let ee = Y(.3, e).mul(Y(e, l.x.sub(.08))),
                        v = X(Y(q(t.sub(d.sub(.035))), .013), Y(q(t.sub(d.add(.035))), .013).mul(Y(e, l.x.mul(.75))));
                    r.assign(G(r, $(9078400), v.mul(ee).mul(c).mul(Y(.42, l.x)))), r.assign(G(r, $(14209994), o));
                    let y = .028,
                        b = X(Y(t, y), Y(e, y)),
                        x = X(Y(a.y.mul(l.y), y), Y(l.x.sub(e), y));
                    return r.assign(G(r, $(16777215), b.mul(z(1).sub(i)).mul(.9))), r.assign(G(r, $(3816004), x)), r.assign(G(r, $(3816004), Y(f, 1))), H(Nt(r.mul(G(z(1), z(.8), p))), 1)
                }
                if (t === `y2k`) {
                    let t = V(r.x.mul(e.x), r.y.sub(.5).mul(e.y), r.z.mul(e.z)),
                        i = V(e.x, e.y, e.z).mul(.5).sub(q(t)),
                        a = Qe(t).mul(z(1).sub(Ke(i.div(.09), 0, 1))).mul(V(1).sub(q(n))),
                        o = nt(n.add(a.mul(.9))),
                        s = nt(rt(nt(dt.sub(yt)), o).add(V(0, .24, 0))),
                        c = Xe(X($e(s, nt(V(-.4, .6, .7))), 0), 24).mul(3),
                        l = Rn(s, z(0)).mul(1.2).add(V(1, .9, 1).mul(c)),
                        u = z(1).sub(K(.8, 2.2, f)).mul(.9);
                    return H(l.add(V(1, .55, 1.1).mul(u)), 1)
                }
                if (t === `glitch`) {
                    let e = W(a.mul(l).div(.12)),
                        t = Ge(e.x.add(e.y), 2),
                        n = G(V(.015, 0, .02), V(1.5, .04, 1.3), t),
                        r = z(1).sub(K(1, 2.6, f));
                    return H(G(n, V(.15, 1.7, 1.9), r), 1)
                }
                let h = Y(Yt(Z(q(n.x).greaterThan(.5), B(r.z.mul(e.z), r.y.sub(.5).mul(e.y)), B(r.x.mul(e.x), r.y.sub(.5).mul(e.y))), Z(q(n.x).greaterThan(.5), B(e.z, e.y), B(e.x, e.y)).mul(.5).sub(.07), .05), 0).mul(c),
                    g = W(i.time.mul(30)),
                    _ = Ht(W(Ot.xy.div(i.unit.mul(2.5))).add(g.mul(13.1))),
                    ee = z(.8).add(Y(.5, U(Ot.y.div(i.unit.mul(3)))).mul(.2)),
                    v = V(.3, .33, .32).add(V(_.mul(_).mul(.9))).mul(ee).mul(1.1),
                    y = Z(o.greaterThan(.5), V(.05, .045, .05), V(.018, .017, .02)),
                    b = z(1).sub(K(.8, 2.6, f)).mul(z(.8).add(Le(i.time.mul(21)).mul(.2)));
                return H(G(y, v, h).add(V(2.4, .28, .1).mul(b)), 1)
            })(), this.mats.set(t, r), r
        }
        set(e, t, n, r, i) {
            this.data.setXYZW(e, t, n, r, i)
        }
        dispose() {
            this.mesh.geometry.dispose();
            for (let e of this.mats.values()) e.dispose()
        }
    },
    Un = e => Ke(Y(q(e.x.add(.12)), .1).mul(Y(q(e.y), .42)).add(Y(q(e.y.sub(.33)), .09).mul(Y(q(e.x.sub(.06)), .28))).add(Y(q(e.y.sub(.02)), .08).mul(Y(q(e.x.sub(.02)), .22))), 0, 1),
    Wn = class {
        max;
        mesh;
        mats = new Map;
        constructor(e) {
            this.max = e;
            let t = new C(.22, .22, .06, 28, 1);
            t.rotateX(Math.PI / 2), this.mesh = new d(t, this.material(`toon`), e), this.mesh.name = `run-coins`, this.mesh.frustumCulled = !1, this.mesh.count = 0, this.mesh.renderOrder = 2
        }
        material(t) {
            let n = this.mats.get(t);
            if (n) return n;
            let r = new e;
            return r.name = `run-coin-` + t, r.fragmentNode = I(() => {
                let e = ke(`normal`, `vec3`),
                    n = Y(.5, q(e.z)),
                    r = B(pt.x.mul(Qe(e.z)), pt.y).div(.22),
                    i = J(r),
                    a = Un(r).mul(Y(i, .7)).mul(n),
                    o = Y(.74, i).mul(Y(i, .86)).mul(n),
                    s = Y(.05, $e(gt, nt(V(...Vn))));
                if (t === `toon`) return H(Z(n.greaterThan(.5), X(a, o).mul(2), z(.55)), n.mul(z(1).sub(X(a, o))).mul(.95), .66, 1);
                if (t === `ascii`) return H(Z(n.greaterThan(.5), G(z(1.15), z(.35), a), z(.7)), .35, 0, 1);
                let c = G(G($(16121600), $(16757310), o), $(9185810), a),
                    l = Z(n.greaterThan(.5), c, G($(9185810), $(16757310), s));
                return H(t === `bit8` ? l : t === `desktop` ? Nt(l) : t === `glitch` ? Z(a.greaterThan(.5), V(.9, .05, .8), V(.15, 1.7, 1.8)).mul(Z(n.greaterThan(.5), z(1), z(.6))) : Nt(l).mul(t === `y2k` ? 1.8 : 1.5), 1)
            })(), this.mats.set(t, r), r
        }
        dispose() {
            this.mesh.geometry.dispose();
            for (let e of this.mats.values()) e.dispose()
        }
    },
    Gn = 5.8,
    Kn = Gn * l,
    qn = 24 * Kn,
    Jn = .62,
    Yn = 1.25;
Gn * Jn / 2;
var Xn = .16,
    Zn = .1,
    Qn = .06,
    $n = .2,
    er = .45,
    tr = {
        S: {
            w: .62,
            h: .46,
            d: .9
        },
        M: {
            w: .74,
            h: .6,
            d: .9
        },
        W: {
            w: 1.3,
            h: .44,
            d: .9
        },
        T: {
            w: .5,
            h: .72,
            d: .72
        }
    };

function nr(e, t = 3) {
    return (t === 3 ? [-.62, 0, .62] : [-1.25, -.62, 0, .62, 1.25]).map(t => {
        let n = .5 + t / (Gn * Jn);
        return [e + t / Kn, Yn * 4 * n * (1 - n) + er]
    })
}
var rr = (e, t, n = .5) => Array.from({
        length: t
    }, (t, r) => [e + r * n, er]),
    ir = [{
        blocks: [
            [7, `M`],
            [13, `S`],
            [19, `M`]
        ],
        coins: [...rr(3, 3), ...nr(13), ...rr(15.5, 3)]
    }, {
        blocks: [
            [6, `S`],
            [11, `M`],
            [15.5, `W`],
            [20, `M`]
        ],
        coins: [...rr(2.5, 3), ...nr(11), ...rr(17.4, 2), ...nr(20)]
    }, {
        blocks: [
            [6, `M`],
            [10, `S`],
            [14, `M`],
            [17.5, `S`],
            [21, `W`]
        ],
        coins: [...rr(2, 5), ...nr(10, 5), ...rr(15.4, 2), ...nr(17.5, 5)]
    }, {
        blocks: [
            [6, `W`],
            [10, `M`],
            [13.5, `M`],
            [17, `T`],
            [21, `S`]
        ],
        coins: [...rr(2.5, 3), ...nr(10), ...nr(13.5), ...rr(18.9, 2)]
    }, {
        blocks: [
            [5.5, `M`],
            [9, `S`],
            [11.5, `S`],
            [15, `M`],
            [18, `W`],
            [21, `S`]
        ],
        coins: [...rr(2.5, 3), ...nr(9), ...nr(11.5), ...rr(16.4, 2), ...nr(21)]
    }, {
        blocks: [
            [6, `M`],
            [9, `T`],
            [13, `S`],
            [15.5, `S`],
            [19, `M`],
            [21.5, `S`]
        ],
        coins: [...rr(2.5, 3), ...nr(9), ...nr(15.5), ...rr(16.9, 2)]
    }, {
        blocks: [
            [5, `S`],
            [8, `M`],
            [11, `W`],
            [14, `S`],
            [16.5, `M`],
            [19.5, `T`],
            [22, `S`]
        ],
        coins: [...nr(8), ...nr(14), ...rr(17.7, 2), ...nr(22)]
    }, {
        blocks: [
            [6, `M`],
            [10, `W`],
            [14, `M`],
            [18, `S`]
        ],
        coins: [...rr(2.5, 3), ...nr(10, 5), ...nr(18), ...rr(20.5, 3)]
    }],
    ar = ir.map(e => e.coins.length).reduce((e, t) => e + t, 0);
ir.map(e => e.blocks.length);
var or = e => e * qn;

function sr(e) {
    let t = ir[Math.max(0, Math.min(7, e))],
        n = or(e);
    return {
        stage: e,
        x0: n,
        blocks: t.blocks.map(([t, r], i) => ({
            x: n + t * Kn,
            ...tr[r],
            size: r,
            seed: e * 17 + i * 3.7,
            st: `in`,
            hitT: -10,
            spin: 0
        })),
        coins: t.coins.map(([e, t]) => ({
            x: n + e * Kn,
            y: t,
            taken: -1
        }))
    }
}

function cr(e, t, n, r) {
    let i = r ? Qn : Xn,
        a = r ? $n : Zn;
    return Math.abs(t - e.x) < e.w / 2 + i && n < e.h - a
}
var lr = (e, t) => t - e.x > e.w / 2 + Xn,
    ur = (e, t, n) => Math.abs(e.x - t) < .46 && e.y > n - .12 && e.y < n + 1.05,
    dr = e => e <= 0 || e >= 1 ? 0 : Yn * 4 * e * (1 - e),
    fr = {
        toon: `1-1 TOON`,
        ascii: `1-2 ASCII`,
        bit8: `1-3 8BIT`,
        desktop: `1-4 DESKTOP`,
        y2k: `1-5 Y2K CG`,
        glitch: `1-6 GLITCH`,
        overload: `?-? OVERLOAD`,
        charge: `CH 31`
    },
    pr = {
        toon: `TOON`,
        ascii: `ASCII`,
        bit8: `8BIT`,
        desktop: `DESKTOP`,
        y2k: `Y2K CG`,
        glitch: `GLITCH`,
        overload: `OVERLOAD`,
        charge: `CHARGE`
    },
    mr = `#$%&@▒■□?!/\\01`,
    hr = class {
        root;
        stageEl;
        wname;
        coinEl;
        bar;
        term;
        termLines = [];
        footer;
        volBars = [];
        taskStage;
        taskCoin;
        taskClock;
        pops;
        ding;
        big;
        bigPre;
        bigMain;
        bigSub;
        cue;
        cueKey;
        links;
        dlgs;
        linkEls = [];
        world = ``;
        top;
        reduced = matchMedia(`(prefers-reduced-motion: reduce)`).matches;
        shown = {
            stage: ``,
            coins: -1,
            bar: ``,
            wname: ``,
            big: ``,
            cue: !1,
            cueHot: !1
        };
        onLink = () => {};
        constructor(e, t, n) {
            this.root = c(`div`, `rh`), this.root.innerHTML = `
      <div class="rh__top" aria-hidden="true">
        <p class="rh__cell rh__lives"><b>STAGE</b><span class="rh__stage">1/8</span></p>
        <p class="rh__cell rh__world"><b>WORLD</b><span class="rh__wname">1-1 TOON</span></p>
        <p class="rh__cell rh__fun"><b>COIN</b><span><i class="rh__coin"></i><em>×000</em></span></p>
        <p class="rh__cell rh__bar"><b>174 BPM ▶</b><span>BAR 24</span></p>
        <i class="rh__screen" aria-hidden="true"></i><span class="rh__page">P.24</span>
      </div>
      <div class="rh__y2kt" aria-hidden="true"><p class="rh__y2kt-sh">WORLD<br><em>1-5 Y2K CG</em></p><p class="rh__y2kt-fg"><b>WORLD</b><br><em>1-5 Y2K CG</em></p></div>
      <div class="rh__term" aria-hidden="true"></div>
      <p class="rh__ding" aria-hidden="true">*DING*</p>
      <p class="rh__footer" aria-hidden="true">RENDERING... RAYTRACE 640x480 <i></i> CHROME.MAT ✦ BEST VIEWED AT 800x600 ✦ 174 BPM</p>
      <div class="rh__chan" aria-hidden="true"><b>CH 31</b><span>▶▶ NO SIGNAL</span></div>
      <div class="rh__vol" aria-hidden="true"><b>VOL</b><span class="rh__volbars"></span></div>
      <div class="rh__task" aria-hidden="true"><span class="rh__start"><i></i><span data-en="Start">スタート</span></span><span class="rh__tasks"><em>FUNKUN.EXE</em><em class="rh__tstage">STAGE 4/8</em></span><span class="rh__tray"><em class="rh__tfun">COIN ×000</em><em class="rh__tclock">174 BPM</em></span></div>
      <div class="rh__pops" aria-hidden="true"></div>
      <nav class="rh__links" aria-label="FunTech の実績（funtech.inc で開く）" data-en-aria="FunTech’s work (opens funtech.inc)"></nav>
      <div class="rh__dlgs" aria-hidden="true"></div>
      <div class="rh__cue" aria-hidden="true"><p class="rh__cue-in"><b>JUMP!</b><span></span></p></div>
      <div class="rh__big" aria-hidden="true"><p class="rh__big-pre"></p><p class="rh__big-main"></p><p class="rh__big-sub"></p></div>`;
            let r = e => this.root.querySelector(e);
            this.top = r(`.rh__top`), this.stageEl = r(`.rh__stage`), this.wname = r(`.rh__wname`), this.coinEl = r(`.rh__fun em`), this.bar = r(`.rh__bar span`), this.term = r(`.rh__term`);
            for (let e = 0; e < 4; e++) {
                let e = c(`p`);
                this.term.appendChild(e), this.termLines.push(e)
            }
            this.footer = r(`.rh__footer`);
            let i = r(`.rh__volbars`);
            for (let e = 0; e < 24; e++) {
                let e = c(`i`);
                i.appendChild(e), this.volBars.push(e)
            }
            this.taskStage = r(`.rh__tstage`), this.taskCoin = r(`.rh__tfun`), this.taskClock = r(`.rh__tclock`), this.pops = r(`.rh__pops`), this.ding = r(`.rh__ding`), this.links = r(`.rh__links`), this.dlgs = r(`.rh__dlgs`), this.big = r(`.rh__big`), this.bigPre = r(`.rh__big-pre`), this.bigMain = r(`.rh__big-main`), this.bigSub = r(`.rh__big-sub`), this.cue = r(`.rh__cue`), this.cueKey = r(`.rh__cue-in span`), this.cueKey.textContent = n ? `TAP` : `SPACE`;
            for (let e of t) {
                let t = c(`a`, `rh__link`);
                t.target = `_blank`, t.rel = `noopener`, t.dataset.ui = ``, t.hidden = !0, t.innerHTML = `<span>${e.label} ↗</span>`, t.addEventListener(`click`, () => {
                    this.onLink(e.n), window.setTimeout(() => t.blur(), 0)
                }), this.links.appendChild(t), this.linkEls.push(t)
            }
            let a = () => t.forEach((e, t) => {
                let n = this.linkEls[t];
                n.href = xe(e.page, e.page.replace(`funtech.inc/ja/`, `funtech.inc/en/`)), n.setAttribute(`aria-label`, xe(`${e.title} — ${e.client}（${e.tag.join(` / `)}）を funtech.inc で開く`, `Open ${e.title} — ${e.client} (${e.tag.join(` / `)}) on funtech.inc`))
            });
            a(), this.offLang = ye(a), Se(this.root), e.appendChild(this.root)
        }
        offLang;
        setWorld(e) {
            e !== this.world && (this.world = e, this.root.dataset.world = e, this.reduced || this.top.animate([{
                transform: `translateY(-0.3em)`,
                opacity: .2
            }, {
                transform: `translateY(0.12em)`,
                opacity: 1,
                offset: .6
            }, {
                transform: `none`,
                opacity: 1
            }], {
                duration: 240,
                easing: `steps(3)`
            }), this.shown.wname = ``, this.footer.innerHTML = e === `glitch` ? `I-FRAME DROPPED ▸ P 64 &nbsp;MV 28.5px &nbsp;SRC=Y2K` : `RENDERING... RAYTRACE 640x480 <i></i> CHROME.MAT ✦ BEST VIEWED AT 800x600 ✦ 174 BPM`, e === `ascii` && (this.reduced ? this.ding.style.opacity = `1` : this.ding.animate([{
                opacity: 0,
                transform: `rotate(-5deg) scale(1.6)`
            }, {
                opacity: 1,
                transform: `rotate(-5deg) scale(0.92)`,
                offset: .08
            }, {
                opacity: 1,
                transform: `rotate(-5deg) scale(1)`,
                offset: .14
            }, {
                opacity: 1,
                transform: `rotate(-5deg) scale(1)`,
                offset: .82
            }, {
                opacity: 0,
                transform: `rotate(-5deg) scale(1)`
            }], {
                duration: 2200,
                easing: `steps(12)`
            })))
        }
        layout(e) {
            this.root.classList.toggle(`is-portrait`, e)
        }
        show(e) {
            this.root.classList.toggle(`is-on`, e)
        }
        tick(e) {
            let t = this.shown,
                n = `${e.stage}/${e.stages}`;
            if (n !== t.stage && (t.stage = n, this.stageEl.textContent = n, this.taskStage.textContent = `STAGE ${n}`), e.coins !== t.coins) {
                let n = e.coins > t.coins && t.coins >= 0;
                t.coins = e.coins;
                let r = `×${String(e.coins).padStart(3,`0`)}`;
                this.coinEl.textContent = r, this.taskCoin.textContent = `COIN ${r}`, n && !this.reduced && this.coinEl.animate([{
                    transform: `scale(1.35)`
                }, {
                    transform: `none`
                }], {
                    duration: 160,
                    easing: `ease-out`
                })
            }
            let r = `BAR ${String(e.bar).padStart(2,`0`)}`;
            r !== t.bar && (t.bar = r, this.bar.textContent = r, this.taskClock.textContent = `${String(Math.floor(e.bar/4)%24).padStart(2,`0`)}:${String(e.bar*15%60).padStart(2,`0`)} · 174 BPM`);
            let i = fr[this.world || `toon`],
                a = e.glitch ? gr(i, e.time) : i;
            if (a !== t.wname && (t.wname = a, this.wname.textContent = a), this.world === `charge`) {
                let t = Math.round(e.energy * this.volBars.length);
                this.volBars.forEach((e, n) => e.classList.toggle(`is-on`, n < t))
            }
        }
        message(e, t = ``, n = ``, r = ``) {
            let i = `${e}|${t}|${n}|${r}`;
            if (i === this.shown.big) return;
            let a = this.shown.big.split(`|`)[0];
            if (this.shown.big = i, !e) {
                this.big.classList.remove(`is-on`);
                return
            }
            this.big.dataset.kind = e, this.bigMain.textContent !== t && (this.bigMain.textContent = t), this.bigSub.textContent !== n && (this.bigSub.textContent = n), this.bigPre.textContent !== r && (this.bigPre.textContent = r), this.bigSub.hidden = !n, this.bigPre.hidden = !r, this.big.classList.add(`is-on`), !this.reduced && (e === `count` || e === `go` || e === `miss` || e === `goal` || a !== e) && this.bigMain.animate(e === `miss` ? [{
                transform: `translateX(-0.12em) rotate(-4deg) scale(1.3)`,
                opacity: .4
            }, {
                transform: `translateX(0.08em) rotate(3deg)`,
                opacity: 1,
                offset: .35
            }, {
                transform: `none`,
                opacity: 1
            }] : [{
                transform: `scale(1.7)`,
                opacity: 0
            }, {
                transform: `scale(0.92)`,
                opacity: 1,
                offset: .55
            }, {
                transform: `none`,
                opacity: 1
            }], {
                duration: e === `title` ? 320 : 240,
                easing: `cubic-bezier(0.16, 1, 0.3, 1)`
            })
        }
        jumpCue(e, t = 0, n = 0, r = !1) {
            e !== this.shown.cue && (this.shown.cue = e, this.cue.classList.toggle(`is-on`, e)), e && (this.cue.style.transform = `translate(calc(${t.toFixed(1)} * var(--u)), calc(${n.toFixed(1)} * var(--u)))`, r !== this.shown.cueHot && (this.shown.cueHot = r, this.cue.classList.toggle(`is-hot`, r)))
        }
        terminal(e) {
            for (let t = 0; t < this.termLines.length; t++) {
                let n = e[t] ? ? ``;
                this.termLines[t].textContent !== n && (this.termLines[t].textContent = n)
            }
        }
        pop(e, t, n, r = ``) {
            this.pops.childElementCount > 14 && this.pops.firstElementChild ? .remove();
            let i = c(`span`, `rh__pop` + (r ? ` rh__pop--` + r : ``));
            i.textContent = e, i.style.setProperty(`--x`, t.toFixed(1)), i.style.setProperty(`--y`, n.toFixed(1)), this.pops.appendChild(i), window.setTimeout(() => i.remove(), 900)
        }
        placeLinks(e, t) {
            this.links.classList.toggle(`is-on`, t);
            for (let n = 0; n < this.linkEls.length; n++) {
                let r = this.linkEls[n],
                    i = e[n];
                if (!t || !i) {
                    r.hidden || = !0;
                    continue
                }
                r.hidden && = !1, r.style.transform = `translate(calc(${i.x.toFixed(1)} * var(--u)), calc(${i.y.toFixed(1)} * var(--u)))`, r.style.width = `calc(${i.w.toFixed(1)} * var(--u))`, r.style.height = `calc(${i.h.toFixed(1)} * var(--u))`
            }
        }
        dispose() {
            this.offLang(), this.root.remove()
        }
    };

function gr(e, t) {
    let n = Math.floor(t * 16),
        r = ``;
    for (let t = 0; t < e.length; t++) {
        let i = Math.abs(Math.sin((t + 1) * 91.7 + n * 12.3)) * 1e3 % 1;
        r += e[t] !== ` ` && i < .18 ? mr[Math.floor(i * 1e3) % 14] : e[t]
    }
    return r
}
var _r = [{
        kind: `warn`,
        title: `FUN95`,
        text: `楽しさがオーバーフローしました。`,
        en: `FUN has overflowed.`
    }, {
        kind: `warn`,
        title: `FUNKUN.EXE`,
        text: `174 BPM は速すぎます。`,
        en: `174 BPM is too fast.`
    }, {
        kind: `err`,
        title: `FUNKUN.EXE`,
        text: `WORLD 1-7 が見つかりません。`,
        en: `WORLD 1-7 not found.`
    }, {
        kind: `err`,
        title: `FATAL`,
        text: `致命的なエラー： FUN > 100%`,
        en: `Fatal error: FUN > 100%`
    }, {
        kind: `info`,
        title: `FUN95`,
        text: `WORLD 1-6 へジャンプしますか？`,
        en: `Jump to WORLD 1-6?`,
        yes: !0
    }, {
        kind: `warn`,
        title: `SIGNAL`,
        text: `信号がありません。`,
        en: `No signal.`
    }, {
        kind: `err`,
        title: `FUNKUN.EXE`,
        text: `応答していません。`,
        en: `Not responding.`
    }],
    vr = class {
        root;
        reduced;
        list = [];
        on = !1;
        t0 = 0;
        count = 0;
        r = Mn(174);
        constructor(e, t) {
            this.root = e, this.reduced = t
        }
        start(e) {
            this.stop(), this.on = !0, this.t0 = e, this.count = 0, this.r = Mn(174)
        }
        stop() {
            this.on = !1;
            for (let e of this.list) e.el.remove();
            this.list.length = 0
        }
        update(e, t, n) {
            if (!this.on || !t) return;
            let r = e - this.t0,
                i = Math.floor((r * 1.8 + r * r * .55) * (this.reduced ? .25 : 1)),
                a = 0;
            for (; this.count < i && a++ < 2;) this.spawn(n)
        }
        spawn(e) {
            let t = this.r,
                n = this.count++,
                r = e ? 1080 : 1920,
                i = n === 9,
                a = n % 6 == 4,
                o = _r[Math.floor(t() * _r.length)],
                s = i ? e ? 760 : 900 : a ? e ? 600 : 700 : (e ? 500 : 480) + Math.floor(t() * 100),
                l = i ? e ? 330 : 300 : a ? 230 : 190,
                u = e ? 380 : 230,
                d = e ? 900 : 520,
                f = i ? (r - s) / 2 : 20 + t() * (r - s - 40),
                p = i ? u + 10 : u + t() * Math.max(0, d - l - u),
                m = c(`div`, `rd` + (i ? ` rd--hero` : ``) + (a ? ` rd--error` : ``) + (this.reduced ? ` is-calm` : ``)),
                h = i ? `FUN95` : a ? `FUNKUN.EXE` : o.title,
                g = i ? `Hello?` : a ? `ERROR` : xe(o.text, o.en);
            m.style.setProperty(`--x`, f.toFixed(0)), m.style.setProperty(`--y`, p.toFixed(0)), m.style.setProperty(`--w`, s.toFixed(0)), m.style.setProperty(`--h`, l.toFixed(0)), m.style.zIndex = String(10 + n), m.innerHTML = `<div class="rd__bar"><i></i><span></span><b><i></i><i></i><i></i></b></div><div class="rd__body"><i class="rd__ico rd__ico--${i||a?`err`:o.kind}"></i><p></p></div><div class="rd__btns"></div>`, m.querySelector(`.rd__bar span`).textContent = h, m.querySelector(`.rd__body p`).textContent = g;
            let _ = m.querySelector(`.rd__btns`),
                ee = !!o.yes && !i && !a;
            for (let e of ee ? [xe(`はい`, `Yes`), xe(`いいえ`, `No`)] : [`OK`]) {
                let t = c(`span`, `rd__ok`);
                t.textContent = e, _.appendChild(t)
            }
            this.root.appendChild(m), this.list.push({
                el: m,
                born: n
            });
            let v = this.reduced ? 5 : e ? 7 : 11;
            for (; this.list.length > v;) this.list.shift() ? .el.remove()
        }
        dispose() {
            this.stop()
        }
    },
    yr = 15723492,
    br = 1118481,
    xr = 14964526,
    Sr = 4;
async function Cr(e) {
    let t = {
            srgb: !1,
            channels: 1,
            repeat: !0,
            half: !0
        },
        [n, r, i, a] = await Promise.all([e.texture(`gen/breakout/paper.webp`, { ...t,
            anisotropy: 8
        }), e.texture(`gen/run/art/print_grain.webp`, t), e.texture(`gen/run/art/print_fiber.webp`, t), e.texture(`gen/run/art/print_show.webp`, t)]);
    return {
        paper: n,
        grain: r,
        fiber: i,
        show: a
    }
}
var wr = [.29, .63];

function Tr(r, i, o, s, c) {
    let {
        U: l
    } = r, u = new a;
    u.name = `toon`;
    let f = L(new te(.8, .5)),
        p = L(.7),
        m = new e;
    m.name = `run-toon-skyM`, m.fragmentNode = I(() => {
        let e = nt(dt.sub(yt));
        return H(0, K(0, .45, e.y).mul(.62).add(K(.3, .85, e.y).mul(.3)).add(.06), 0, 0)
    })();
    let h = jn(m);
    u.add(h);
    let _ = new e;
    _.name = `run-toon-gM`, _.fragmentNode = I(() => {
        let e = dt,
            t = J(e.xz.sub(yt.xz)),
            n = K(16, 48, t).mul(.3),
            r = X(Zt(e.z.add(1.7), 1.4), Zt(e.z.sub(1.7), 1.4)).toVar();
        r.assign(X(r, Y(.55, U(e.x.div(1.8))).mul(Zt(e.z, 1.1)))), r.assign(X(r, Zt(e.z.add(9), 1.2).mul(K(40, 8, t))));
        let i = e.xz.sub(B(l.shadow.x, l.shadow.y)).div(B(l.shadow.z.mul(1.25), l.shadow.z.mul(.62)));
        return r.assign(X(r, K(1.03, .97, J(i)).mul(l.shadow.w))), H(Z(r.greaterThan(.02), r.add(1), n), 0, 0, 0)
    })();
    let v = An(_);
    u.add(v);
    let y = new ne(1, 1, 1);
    y.translate(0, .5, 0);
    let b = new e;
    b.name = `run-toon-bM`, b.fragmentNode = I(() => {
        let e = gt,
            t = dt,
            n = z(0).toVar(),
            r = Y($e(e, nt(V(-.7, .4, .45))), .05);
        n.assign(G(n, z(.34), r)), n.assign(Z(e.y.greaterThan(.5), z(.07), n));
        let i = it(Q(), B(1).sub(Q())),
            a = i.x.div(X(at(Q().x), 1e-5)),
            o = i.y.div(X(at(Q().y), 1e-5)),
            s = z(1).sub(K(1, 2.4, it(a, o))),
            c = Z(q(e.x).greaterThan(.5), B(t.z, t.y), B(t.x, t.y)),
            l = U(c.div(B(.62, .82))),
            u = Y(.28, l.x).mul(Y(l.x, .72)).mul(Y(.26, l.y)).mul(Y(l.y, .74)).mul(Y(.9, t.y)).mul(Y(e.y, .5)),
            d = Y(.5, Ht(W(c.div(B(.62, .82)))));
        n.assign(X(n, u.mul(d).mul(.55)));
        let f = X(s, u.mul(z(1).sub(d)));
        return H(Z(f.greaterThan(.02), f.add(1), n), 0, .05, 1)
    })();
    let C = new d(y, b, 26),
        w = Mn(22),
        T = new Float32Array(26),
        E = [];
    for (let e = 0; e < 26; e++) T[e] = e * 3.3 + w() * 1.2, E.push([1.8 + w() * 2.2, 2.4 + w() * 5.5, 1.8 + w() * 1.8, -8 - w() * 9]);
    let re = new Nn(C, T, 85.8, (e, t, n) => {
        let [r, i, a, o] = E[e];
        n.compose(new P(t, 0, o), new S, new P(r, i, a))
    });
    u.add(C);
    let ie = new d(y, b, 14),
        D = new Float32Array(14),
        ae = [];
    for (let e = 0; e < 14; e++) D[e] = e * 5.2 + w() * 2, ae.push([1.8 + w() * 1.6, 3 + w() * 6, 5.5 + w() * 4]);
    let O = new Nn(ie, D, 72.8, (e, t, n) => {
        let [r, i, a] = ae[e];
        n.compose(new P(t, 0, a), new S, new P(r, i, 2))
    });
    u.add(ie);
    let oe = new x(1, 320 / 512),
        k = new t(new Float32Array(4), 1);
    oe.setAttribute(`aWord`, k);
    let se = new e({
        side: 2
    });
    se.name = `run-toon-sfxM`, se.fragmentNode = I(() => {
        let e = R(s, B(ke(`aWord`, `float`).add(Q().x).div(Sr), z(1).sub(Q().y)));
        e.a.lessThan(.5).discard();
        let t = Y(.5, e.r),
            n = Y(.5, e.g).mul(z(1).sub(t));
        return H(Z(t.greaterThan(.5), z(2), z(0)), n, .97, 1)
    })();
    let ce = new d(oe, se, 4);
    ce.frustumCulled = !1, ce.count = 0, u.add(ce);
    let le = [],
        A = R(r.rt.scene.texture),
        ue = I(() => {
            let e = Q(),
                t = l.res,
                n = e.mul(t),
                r = l.unit,
                i = W(l.time.mul(12)),
                a = n.div(r.mul(38)).add(i.mul(3.71)),
                o = B(Wt(a), Wt(a.add(17.3))).sub(.5).mul(r).mul(2.2),
                s = e => A.sample(e.div(t)),
                u = s(n.add(o)),
                d = u.a,
                m = u.b,
                h = r.mul(2.1),
                g = r.mul(5.5),
                _ = z(0).toVar(),
                ee = z(0).toVar();
            for (let e = 0; e < 8; e++) {
                let t = e / 8 * Math.PI * 2,
                    r = B(Math.cos(t), Math.sin(t)),
                    i = s(n.add(o).add(r.mul(h)));
                _.assign(X(_, q(i.a.sub(d)))), _.assign(X(_, Y(.05, q(i.b.sub(m))).mul(d).mul(i.a)));
                let a = s(n.add(r.mul(g)));
                ee.assign(X(ee, a.a))
            }
            ee.assign(ee.mul(z(1).sub(d)));
            let v = f.mul(t),
                y = n.sub(v),
                b = Be(y.y, y.x),
                x = J(y).div(t.y),
                S = b.mul(150),
                C = W(S),
                te = W(l.time.mul(12)),
                w = Ht(B(C, te)),
                ne = Y(q(U(S).sub(.5)), Ht(B(C.add(7.7), te)).mul(.18).add(.06)),
                T = z(.24).add(Ht(B(C.add(3.1), te)).mul(.2)),
                E = Y(.62, w).mul(ne).mul(K(T, T.add(.06), x)).mul(p).mul(z(1).sub(d)).mul(z(1).sub(ee)),
                re = n.div(r),
                ie = B(2.2, -1.3),
                D = B(wr[0], wr[1]),
                ae = t.y.greaterThan(t.x),
                O = Z(ae, re.yx, re).mul(B(1.35 / 4096, 1.35 / 2731)),
                oe = R(c.paper, O.add(B(.07, .11))).r.div(.94),
                k = R(c.paper, O.mul(2.7).add(B(.31, .2))).r.div(.94),
                se = re.add(ie),
                ce = R(c.fiber, re.div(2048).add(D)).r,
                le = R(c.fiber, se.div(2048).add(B(.41, .27)).add(D)).r,
                ue = R(c.grain, re.div(9e3).add(.13).add(D)).r.sub(.5).mul(.12),
                de = k.sub(1).mul(.9).add(ce.sub(.5).mul(.35)).add(ue).mul(.27),
                fe = k.sub(1).mul(.7).add(le.sub(.5).mul(.28)).add(ue).mul(.27),
                pe = Ke(u.r.sub(1), 0, 1).mul(z(1).sub(ee)),
                me = Ke(u.r, 0, 1).mul(z(1).sub(ee)),
                j = r.mul(6.8),
                he = X(qt(n, t, Math.PI / 4, j, e => it(A.sample(e).r, 1).mul(z(1).sub(ee)), de), X(Y(.93, me).mul(Y(u.r, 1.001)), K(.2, .7, pe))).toVar();
            he.assign(X(he, K(.35, .7, _))), he.assign(X(he, E));
            let ge = qt(n.add(ie.mul(r)), t, 15 * Math.PI / 180, j, e => A.sample(e).g.mul(z(1).sub(ee)), fe).mul(z(1).sub(K(.35, .7, _))),
                M = l.panel,
                N = Y(M.x, e.x).mul(Y(e.x, M.z)),
                P = Y(M.y, e.y).mul(Y(e.y, M.w)),
                _e = N.mul(P),
                ve = r.mul(3.6).div(t),
                ye = _e.mul(z(1).sub(Y(M.x.add(ve.x), e.x).mul(Y(e.x, M.z.sub(ve.x))).mul(Y(M.y.add(ve.y), e.y)).mul(Y(e.y, M.w.sub(ve.y)))));
            he.assign(X(he.mul(_e), ye));
            let be = R(c.grain, re.div(680).add(D)).r,
                xe = R(c.grain, se.div(680).add(B(.37, .61)).add(D)).r,
                Se = Ke(z(1).sub(K(.74, .97, be).mul(.34 * .85)).sub(be.sub(.5).mul(.16 * .34)), 0, 1).mul(z(1).sub(K(.2, .05, ce).mul(.3 * .34))),
                F = Ke(z(1).sub(K(.62, .9, xe).mul(.34 * .9)).sub(xe.sub(.5).mul(.068)), 0, 1),
                Ce = he.mul(Se),
                we = ge.mul(_e).mul(F),
                I = R(c.show, Z(ae, e.yx, e).add(D.mul(.37))).r,
                Te = $(yr).mul(G(z(1), oe, .85)).mul(z(1).sub(z(1).sub(I).mul(.05))),
                Ee = $(br),
                De = $(xr);
            return Nt(Ke(Te.mul(G(V(1), Ee.div($(yr)), Ce)).mul(G(V(1), De.div($(yr)), we)), 0, 1))
        })(),
        de = r.wrap(`toon`, ue);
    de.userData.buildAsync = !0;
    let fe = new P,
        pe = new n,
        me = new S,
        j = new ee,
        he = new P,
        ge = !1,
        M = 0;
    return {
        sfx(e, t) {
            le.push({
                word: e,
                t0: M,
                pos: t.clone(),
                tilt: (Math.random() - .5) * .3
            }), le.length > 4 && le.shift()
        },
        id: `toon`,
        look: `toon`,
        groups: [u],
        sticker: i.material(`toon`),
        puff: o.material(`toon`),
        output: de,
        update(e) {
            let t = e.camera;
            h.position.copy(t.position), v.position.set(Math.round(t.position.x / 4) * 4, 0, Math.round(t.position.z / 4) * 4), re.update(t.position.x), ie.visible = ge, ge && O.update(t.position.x), fe.set(e.x + 60, .6, 0).project(t), f.value.set(g.clamp(fe.x * .5 + .5, -.5, 1.5), g.clamp(fe.y * .5 + .5, -.5, 1.5)), p.value = (r.reduced ? .35 : .75) * g.clamp(e.speed / 5.8 - .3, .3, 1.2), M = e.t;
            let n = 0;
            for (let r of le) {
                let i = e.t - r.t0;
                if (i < 0 || i > .62) continue;
                let a = Math.min(1, i / .12),
                    o = (a < 1 ? a * (1.25 - .25 * a) : 1 + .06 * Math.sin(i * 30) * Math.exp(-i * 6)) * 1.25;
                j.set(0, Math.atan2(t.position.x - r.pos.x, t.position.z - r.pos.z), r.tilt), me.setFromEuler(j), pe.compose(fe.set(r.pos.x, r.pos.y + i * .35, r.pos.z), me, he.set(o, o, o)), ce.setMatrixAt(n, pe), k.setX(n, r.word), n++
            }
            ce.count = n, ce.instanceMatrix.needsUpdate = !0, k.needsUpdate = !0
        },
        warm(e) {
            ce.count = +!!e
        },
        layout(e) {
            ge = e
        },
        dispose() {
            Pn(u), de.dispose()
        }
    }
}
var Er = 4,
    Dr = 5;

function Or(t, r, i, s) {
    let {
        U: c
    } = t, l = new a;
    l.name = `ascii`;
    let u = new e;
    u.name = `run-ascii-skyM`, u.fragmentNode = I(() => {
        let e = nt(dt.sub(yt)),
            t = Kt(c.camFwd, Z(c.portrait.greaterThan(.5), z(-.08), z(-.22)), Z(c.portrait.greaterThan(.5), z(.12), z(.035))),
            n = K(.145, .14, J(e.sub(t))),
            r = e.y.sub(t.y),
            i = Y(.58, U(r.mul(-70))).mul(Y(r, .02)).mul(K(.02, -.12, r).mul(.9).add(.1)),
            a = n.mul(z(1).sub(i)).mul(G(z(.42), z(.8), K(-.12, .12, r))),
            o = qe(q(e.y).mul(-30)).mul(.16),
            s = Y(.9965, Ht(W(e.xz.div(e.y.abs().add(.3)).mul(90)))).mul(Y(.05, e.y)).mul(.5);
        return H(X(X(a, o), s), 0, 0, 0)
    })();
    let p = jn(u);
    l.add(p);
    let m = new e;
    m.name = `run-ascii-gM`, m.fragmentNode = I(() => {
        let e = dt,
            t = J(e.xz.sub(yt.xz)),
            n = q(U(e.x.div(2)).sub(.5)).mul(2),
            r = q(U(e.z.div(2)).sub(.5)).mul(2),
            i = X(z(1).sub(K(0, at(e.x.div(2)).mul(2.2), z(1).sub(n))), z(1).sub(K(0, at(e.z.div(2)).mul(2.2), z(1).sub(r)))).mul(K(90, 10, t)),
            a = X(Zt(e.z.add(1.3), 1.2), Zt(e.z.sub(1.3), 1.2)),
            o = K(1, .6, J(e.xz.sub(B(c.shadow.x, c.shadow.y)).div(B(c.shadow.z.mul(1.2), c.shadow.z.mul(.6))))).mul(c.shadow.w);
        return H(X(i.mul(.95), a).mul(z(1).sub(o.mul(.9))).add(z(.03)), 0, 0, 0)
    })();
    let h = An(m);
    l.add(h);
    let g = new ne(1, 1, 1);
    g.translate(0, .5, 0);
    let _ = new e;
    _.name = `run-ascii-tM`, _.fragmentNode = I(() => {
        let e = it(Q(), B(1).sub(Q())),
            t = e.x.div(X(at(Q().x), 1e-5)),
            n = e.y.div(X(at(Q().y), 1e-5)),
            r = z(1).sub(K(1.2, 3, it(t, n))),
            i = gt,
            a = dt,
            o = Z(q(i.x).greaterThan(.5), B(a.z, a.y), B(a.x, a.y)),
            s = U(o.div(B(.7, .9))),
            c = Y(.35, s.x).mul(Y(s.x, .65)).mul(Y(.3, s.y)).mul(Y(s.y, .7)).mul(Y(i.y, .5)),
            l = Y(.45, Ht(W(o.div(B(.7, .9))))),
            u = Z(i.y.greaterThan(.5), z(.22), z(.07).add(q(i.x).mul(.05)));
        return H(X(X(r.mul(.95), c.mul(l).mul(.5)), u), 0, 0, 1)
    })();
    let v = new d(g, _, 14),
        y = Mn(23),
        b = new Float32Array(14),
        x = [];
    for (let e = 0; e < 14; e++) b[e] = e * 7.2 + y() * 3, x.push([1.4 + y() * 1.8, 1.8 + y() * y() * 7, 1.4 + y() * 1.8, (y() < .25 ? 1 : -1) * (12 + y() * 22)]);
    let C = new Nn(v, b, 100.8, (e, t, n) => {
        let [r, i, a, o] = x[e];
        n.compose(new P(t, 0, fe || o < 0 ? o : -o), new S, new P(r, i, a))
    });
    l.add(v);
    let w = new ne(1, 1, 1),
        T = new e;
    T.name = `run-ascii-cM`, T.fragmentNode = I(() => {
        let e = it(Q(), B(1).sub(Q())),
            t = e.x.div(X(at(Q().x), 1e-5)),
            n = e.y.div(X(at(Q().y), 1e-5));
        return H(X(z(1).sub(K(1.2, 3, it(t, n))), z(.05)), 0, 0, 1)
    })();
    let E = new d(w, T, 6);
    E.frustumCulled = !1, l.add(E);
    let re = new ue(16, 16, {
            type: f,
            depthBuffer: !1,
            generateMipmaps: !1,
            minFilter: o,
            magFilter: o
        }),
        D = L(new te(8, 15)),
        ae = L(new te(240, 72)),
        O = R(t.rt.scene.texture),
        oe = new k;
    oe.name = `run-ascii-cells`, oe.fragmentNode = I(() => {
        let e = W(Q().mul(ae)),
            t = [],
            n = z(0),
            r = z(0);
        for (let i = 0; i < 3; i++)
            for (let a = 0; a < 2; a++) {
                let o = e.add(B((a + .5) / 2, (i + .5) / 3)).mul(D).div(c.res),
                    s = e.add(B((a + .25) / 2, (i + .7) / 3)).mul(D).div(c.res),
                    l = O.sample(o),
                    u = O.sample(s);
                t.push(Xe(Ke(l.r.add(u.r).mul(.5), 0, 1), .62)), n = n.add(l.g), r = r.add(l.a)
            }
        let i = t.map(e => W(Ke(e, 0, 1).mul(4).add(.5))),
            a = i[0].add(i[1].mul(Dr)).add(i[2].mul(25)),
            o = i[3].add(i[4].mul(Dr)).add(i[5].mul(25));
        return H(W(je(s.lut, Pe(a, o)).r.mul(255).add(.5)), t.reduce((e, t) => e.add(t), z(0)).div(6), n.div(6), r.div(6))
    })();
    let se = new ie(oe),
        ce = R(s.glyphs),
        le = R(re.texture),
        A = I(() => {
            let e = Q().sub(.5),
                t = c.res.x.div(c.res.y),
                n = z(.045),
                r = e.mul(z(1).add($e(e.mul(B(t, 1)), e.mul(B(t, 1))).mul(n))).add(.5),
                i = r.mul(c.res),
                a = W(i.div(D)),
                o = U(i.div(D)),
                s = je(re.texture, Pe(Ke(a, B(0), ae.sub(1)))),
                l = W(s.r.add(.5)),
                u = W(l.div(16)),
                d = B(l.sub(u.mul(16)).add(o.x), u.add(o.y)).div(B(16, Er)),
                f = ce.sample(d).r,
                p = Ke(s.b.mul(1.4), 0, 1),
                m = V(.22, 1, .36),
                h = V(.88, 1, .9),
                g = G(m, h, p),
                _ = Ke(s.g, 0, 1.2),
                ee = g.mul(f).mul(z(.8).add(_.mul(.9))).add(g.mul(_.mul(_).mul(.1))),
                v = B(1.6).div(ae),
                y = le.sample(r).g.mul(.4).add(le.sample(r.add(B(v.x, 0))).g.mul(.15)).add(le.sample(r.sub(B(v.x, 0))).g.mul(.15)).add(le.sample(r.add(B(0, v.y))).g.mul(.15)).add(le.sample(r.sub(B(0, v.y))).g.mul(.15)),
                b = G(m, h, p.mul(.6)).mul(y.mul(y).mul(1.1).add(y.mul(.16))),
                x = z(.82).add(z(.18).mul(Y(.5, U(i.y.div(c.unit.mul(3)))))),
                S = z(1).add(qe(q(U(r.y.mul(.7).sub(c.time.mul(.23))).sub(.5)).mul(-24)).mul(.08)),
                C = z(1).add(Le(c.time.mul(377)).mul(.012)),
                te = K(.004, -.004, Yt(e.mul(B(t, 1)), B(t.mul(.5).sub(.022), .47), .09)),
                w = K(.95, .3, J(e.mul(1.1)));
            return Nt(Ke(ee.add(b).mul(x).mul(S).mul(C).mul(G(z(.55), z(1), w)).add(V(.004, .012, .006)).mul(te), 0, 1))
        })(),
        de = t.wrap(`ascii`, A),
        fe = !1,
        pe = new n,
        me = new S,
        j = new ee,
        he = new P,
        ge = new P;
    return {
        id: `ascii`,
        look: `ascii`,
        groups: [l],
        sticker: r.material(`ascii`),
        puff: i.material(`ascii`),
        output: de,
        pre(e) {
            let t = c.unit.value,
                n = Math.max(4, 8 * t),
                r = Math.max(7.5, 15 * t),
                i = Math.ceil(c.res.value.x / n),
                a = Math.ceil(c.res.value.y / r);
            (re.width !== i || re.height !== a) && re.setSize(i, a), D.value.set(n, r), ae.value.set(i, a), e.setRenderTarget(re), se.render(e)
        },
        update(e) {
            let t = e.camera;
            p.position.copy(t.position), h.position.set(Math.round(t.position.x / 2) * 2, 0, Math.round(t.position.z / 2) * 2), C.update(t.position.x);
            for (let n = 0; n < 6; n++) {
                let r = Math.round((t.position.x - n * 9) / 54) * 54 + n * 9 + 6;
                j.set(e.t * (.4 + n * .1), e.t * .6 + n, 0), me.setFromEuler(j), pe.compose(he.set(r, 4.5 + n % 3 * 1.8 + Math.sin(e.t + n) * .3, -9 - n % 2 * 6), me, ge.setScalar(.9 + n % 3 * .4)), E.setMatrixAt(n, pe)
            }
            E.instanceMatrix.needsUpdate = !0
        },
        layout(e) {
            fe = e
        },
        dispose() {
            Pn(l), de.dispose(), oe.dispose(), re.dispose()
        }
    }
}
var kr = [1118481, 3816004, 9078400, 15723492, 16777215, 1448046, 3028735, 9081087, 6958024, 16121600, 16757310, 14964526, 16728354, 9185810, 6094634, 1997354];

function Ar(t, r, i) {
    let {
        U: o
    } = t, s = new a;
    s.name = `bit8`;
    let c = new e;
    c.name = `run-bit8-skyM`, c.fragmentNode = I(() => {
        let e = nt(dt.sub(yt)),
            t = e.y,
            n = G(G($(9081087), $(3028735), K(.02, .2, t)), $(1448046), K(.2, .55, t)).toVar();
        n.assign(G(n, $(1448046), Y(t, -.02)));
        let r = nt(V(o.sunDir.x, .06, o.sunDir.z)),
            i = Y(J(e.sub(r)), .3),
            a = t.sub(r.y),
            s = Y(.5, U(a.mul(-40))).mul(Y(a, 0)).mul(Y(-.2, a)),
            c = G($(16757310), $(15723492), K(-.12, .12, a));
        n.assign(G(n, c, i.mul(z(1).sub(s))));
        let l = W(e.xz.div(X(t, .08)).mul(60)),
            u = Y(.992, Ht(l)).mul(Y(.12, t)).mul(Y(.4, U(Ht(l.add(3.1)).add(o.time.mul(.7)))));
        return n.assign(G(n, $(16777215), u)), H(n, 0)
    })();
    let l = jn(c);
    s.add(l);
    let u = new e;
    u.name = `run-bit8-gM`, u.fragmentNode = I(() => {
        let e = dt;
        e.z.greaterThan(1.3).and(o.portrait.lessThan(.5)).discard();
        let t = Y(q(e.z), 1.25),
            n = W(e.z.mul(4)),
            r = U(e.x.mul(2).add(n.mul(.5))),
            i = U(e.z.mul(4)),
            a = X(Y(r, .07), Y(i, .1)),
            s = G(G($(16757310), $(14964526), Y(.72, Ht(B(W(e.x.mul(2).add(n.mul(.5))), n)))), $(9185810), a),
            c = Y(.5, U(W(e.x).add(W(e.z)).mul(.5))),
            l = J(e.xz.sub(yt.xz)),
            u = G(G($(6094634), $(1997354), c), $(1997354), Y(38, l)),
            d = Y(q(q(e.z).sub(1.25)), .06),
            f = G(u, s, t).toVar();
        f.assign(G(f, $(1118481), d));
        let p = e.xz.sub(B(o.shadow.x, o.shadow.y)).div(B(o.shadow.z.mul(1.2), o.shadow.z.mul(.6)));
        return f.assign(G(f, $(9185810), Y(J(p), .9).mul(t).mul(o.shadow.w))), H(f, 0)
    })();
    let f = An(u);
    s.add(f);
    let p = new x(400, 6);
    p.translate(0, -3, 1.25);
    let m = new e;
    m.name = `run-bit8-wM`, m.fragmentNode = I(() => {
        let e = dt,
            t = W(e.y.mul(4)),
            n = U(e.x.mul(2).add(t.mul(.5))),
            r = U(e.y.mul(4)),
            i = X(Y(n, .07), Y(r, .12));
        return H(G(G(G($(14964526), $(16757310), Y(.5, r)), $(9185810), i), $(1448046), Y(e.y, -2.2)), 0)
    })();
    let h = new y(p, m);
    h.frustumCulled = !1, s.add(h);
    let g = new ne(1, 1, 1);
    g.translate(0, .5, 0);
    let _ = new e;
    _.name = `run-bit8-cM`, _.fragmentNode = I(() => {
        let e = gt,
            t = dt,
            n = Z(q(e.x).greaterThan(.5), B(t.z, t.y), B(t.x, t.y)),
            r = W(n.div(B(.9, 1.1))),
            i = U(n.div(B(.9, 1.1))),
            a = Y(.3, i.x).mul(Y(i.x, .7)).mul(Y(.35, i.y)).mul(Y(i.y, .75)).mul(Y(e.y, .5)).mul(Y(.35, Ht(r)));
        return H(G(Z(e.y.greaterThan(.5), $(9081087), Z(q(e.x).greaterThan(.5), $(1448046), $(6958024))), Z(Ht(r.add(9.1)).greaterThan(.5), $(16757310), $(16121600)), a), 1)
    })();
    let ee = new d(g, _, 18),
        v = Mn(24),
        b = new Float32Array(18),
        C = [];
    for (let e = 0; e < 18; e++) b[e] = e * 5.5 + v() * 2, C.push([2.4 + v() * 3, 1.6 + v() * v() * 5, 2 + v() * 2, -17 - v() * 18]);
    let te = new Nn(ee, b, 99, (e, t, n) => {
        let [r, i, a, o] = C[e];
        n.compose(new P(t, 0, o), new S, new P(r, i, a))
    });
    s.add(ee);
    let w = new d(g, _, 40);
    w.frustumCulled = !1;
    let T = new a;
    T.add(w); {
        let e = new n,
            t = new S;
        for (let n = 0; n < 40; n++) {
            let r = n / 40 * Math.PI * 2 + v() * .08,
                i = 110 + v() * 25;
            t.setFromAxisAngle(new P(0, 1, 0), -r), e.compose(new P(Math.cos(r) * i, -1, Math.sin(r) * i), t, new P(8 + v() * 10, 6 + v() * 16, 6)), w.setMatrixAt(n, e)
        }
    }
    s.add(T);
    let E = R(t.rt.low.texture),
        re = kr.map(e => $(e)),
        ie = I(() => {
            let e = o.lowRes,
                t = W(Q().mul(e)),
                n = E.sample(t.add(.5).div(e)).rgb.add(Jt(t).sub(.5).mul(.16)),
                r = re[0],
                i = $e(n.sub(re[0]), n.sub(re[0]));
            for (let e = 1; e < re.length; e++) {
                let t = n.sub(re[e]),
                    a = $e(t, t);
                r = Z(a.lessThan(i), re[e], r), i = it(a, i)
            }
            return Nt(r)
        })(),
        D = t.wrap(`bit8`, ie);
    return {
        id: `bit8`,
        look: `bit8`,
        groups: [s],
        sticker: r.material(`bit8`),
        puff: i.material(`bit8`),
        output: D,
        low: !0,
        update(e) {
            let t = e.camera;
            l.position.copy(t.position), f.position.set(Math.round(t.position.x / 2) * 2, 0, Math.round(t.position.z / 2) * 2), h.position.x = Math.round(t.position.x / 2) * 2, te.update(t.position.x), T.position.set(t.position.x, 0, t.position.z)
        },
        dispose() {
            Pn(s), Pn(T), D.dispose()
        }
    }
}
var jr = 512,
    Mr = 352,
    Nr = 4,
    Pr = 5,
    Fr = 2.6,
    Ir = Mr / jr * Fr;

function Lr(r, i, o, s) {
    let {
        U: c
    } = r, l = new a;
    l.name = `desktop`;
    let u = s.worksTex,
        f = s.wallTex,
        p = (e, t) => {
            let n = R(f, t).r,
                r = Ot.xy.div(c.unit.mul(3)),
                i = Y(.5, U(r.x.add(.25))).mul(Y(.5, U(r.y.add(.25)))),
                a = G($(3028735), $(1843384), i.mul(.85).add(.15));
            return G($(3028735), a, Y(.4, n))
        },
        m = new e;
    m.name = `run-desktop-wallM`, m.fragmentNode = I(() => {
        let e = dt;
        return H(Nt(p(e, B(e.x.div(14), e.y.negate().div(7).add(.1)))), 0)
    })();
    let h = new x(400, 60);
    h.translate(0, 26, 0);
    let g = new y(h, m);
    g.frustumCulled = !1, l.add(g);
    let _ = new e;
    _.name = `run-desktop-floorM`, _.fragmentNode = I(() => {
        let e = dt,
            t = p(e, B(e.x.div(14), e.z.div(7))),
            n = e.xz.sub(B(c.shadow.x, c.shadow.y)).div(B(c.shadow.z.mul(1.3), c.shadow.z.mul(.7)));
        return H(Nt(t.mul(z(1).sub(K(1, .4, J(n)).mul(.35)))), 0)
    })();
    let v = An(_);
    v.position.y = -.26, l.add(v);
    let b = new ne(400, .26, 2.4);
    b.translate(0, -.13, 0);
    let C = new e;
    C.name = `run-desktop-barM`, C.fragmentNode = I(() => {
        let e = dt,
            t = gt,
            n = Y(.5, t.y),
            r = Y(q(e.z.sub(-1.2)), .05).add(Y(q(e.y), .02).mul(Y(.5, t.z))),
            i = Y(q(e.z.sub(1.2)), .05).mul(n),
            a = G($(14209994), $(15723492), n).toVar();
        a.assign(G(a, $(16777215), Ke(r, 0, 1))), a.assign(G(a, $(9078400), i)), a.assign(G(a, $(13222840), Y(q(e.z), .02).mul(n).mul(Y(.5, U(e.x.div(1.2))))));
        let o = e.xz.sub(B(c.shadow.x, c.shadow.y)).div(B(c.shadow.z.mul(1.25), c.shadow.z.mul(.62)));
        return a.assign(G(a, $(9078400), K(1, .55, J(o)).mul(n).mul(c.shadow.w).mul(.8))), H(Nt(a), 0)
    })();
    let te = new y(b, C);
    te.frustumCulled = !1, l.add(te);
    let w = s.works.length,
        T = new x(1, 1),
        E = new t(new Float32Array((w + 6) * 2), 2);
    T.setAttribute(`aCell`, E);
    let re = new e({
        side: 2,
        transparent: !1
    });
    re.name = `run-desktop-winM`, re.fragmentNode = I(() => {
        let e = ke(`aCell`, `vec2`),
            t = B(e.x.add(Q().x), e.y.add(z(1).sub(Q().y))).div(B(Nr, Pr)),
            n = R(u, t);
        return n.a.lessThan(.5).discard(), H(n.rgb, 1)
    })();
    let ie = new d(T, re, w + 6);
    ie.frustumCulled = !1;
    for (let e = 0; e < w; e++) E.setXY(e, e % Nr, Math.floor(e / Nr));
    for (let e = 0; e < 6; e++) E.setXY(w + e, e % 3, 4);
    l.add(ie);
    let D = 4.3,
        ae = w * D,
        O = Array.from({
            length: w
        }, (e, t) => ({
            bx: t * D,
            z: t % 2 ? -6.6 : -3.4,
            y: t % 2 ? 1.55 : .32,
            s: t % 2 ? 1.25 : 1
        })),
        oe = Array.from({
            length: 6
        }, (e, t) => ({
            bx: 2.1 + ae / 6 * t,
            z: -2,
            y: 0,
            s: .62
        })),
        k = s.works.map(e => ({
            n: e.n,
            corners: [new P, new P, new P, new P]
        })),
        se = new n,
        ce = new S,
        le = new ee,
        A = new P,
        ue = new P,
        de = R(r.rt.scene.texture),
        fe = I(() => {
            let e = Mt(Ke(de.sample(Q()).rgb, 0, 1)),
                t = Jt(Ot.xy).sub(.5).mul(1.5 / 255);
            return Nt(Ke(e.add(t), 0, 1))
        })(),
        pe = r.wrap(`desktop`, fe),
        me = !1;
    return {
        id: `desktop`,
        look: `beauty`,
        groups: [l],
        sticker: i.material(`color`),
        puff: o.material(`color`),
        output: pe,
        update(e) {
            let t = e.camera,
                n = t.position.x;
            g.position.set(Math.round(n / 14) * 14, -.26, -9), v.position.set(Math.round(n / 14) * 14, -.26, Math.round(t.position.z / 7) * 7), te.position.x = Math.round(n / 2) * 2;
            let r = (e, n) => Math.atan2(t.position.x - e, t.position.z - n);
            for (let t = 0; t < w; t++) {
                let n = O[t],
                    i = n.bx + Math.round((e.x + 6 - n.bx) / ae) * ae,
                    a = Fr * n.s,
                    o = Ir * n.s,
                    s = me ? r(i, n.z) : r(i, n.z) * .35;
                le.set(0, s, 0), ce.setFromEuler(le), se.compose(A.set(i, n.y + o / 2, n.z), ce, ue.set(a, o, 1)), ie.setMatrixAt(t, se);
                let c = k[t].corners;
                for (let e = 0; e < 4; e++) c[e].set(e % 2 ? .5 : -.5, e < 2 ? .5 : -.5, 0).applyMatrix4(se)
            }
            for (let t = 0; t < 6; t++) {
                let n = oe[t],
                    i = n.bx + Math.round((e.x + 6 - n.bx) / ae) * ae;
                le.set(0, r(i, n.z) * (me ? 1 : .4), 0), ce.setFromEuler(le);
                let a = 1.5 * n.s,
                    o = Mr / jr * a;
                se.compose(A.set(i, n.y + o / 2, n.z), ce, ue.set(a, o, 1)), ie.setMatrixAt(w + t, se)
            }
            ie.instanceMatrix.needsUpdate = !0
        },
        layout(e) {
            me = e
        },
        dispose() {
            Pn(l), pe.dispose()
        },
        windows: () => k
    }
}

function Rr(e, t, n, r) {
    let {
        U: i
    } = e, a = {
        type: f,
        depthBuffer: !1,
        generateMipmaps: !1,
        minFilter: o,
        magFilter: o
    }, s = new ue(16, 16, a), c = new ue(16, 16, a), u = L(new te(-.004, 0)), d = L(0), p = L(0), m = R(e.rt.scene.texture), h = R(c.texture), _ = new k;
    _.name = `run-glitch-mosh`, _.fragmentNode = I(() => {
        let e = Q(),
            t = e.mul(i.res),
            n = i.glitch,
            r = i.unit.mul(22),
            a = W(t.div(r)),
            o = Ht(a.add(p.mul(17.3))),
            s = Ht(a.mul(1.7).add(p.mul(5.1)).add(3.3)),
            c = Ut(W(t.y.div(i.unit.mul(12))).add(p.mul(31))),
            l = Y(z(1).sub(n.mul(.05)), c).mul(c.sub(.5)).mul(.06).mul(n),
            f = B(e.x.add(l), e.y),
            g = m.sample(f),
            _ = g.rgb,
            ee = u.mul(z(1).add(s.mul(2.5))),
            v = h.sample(e.add(ee)).rgb,
            y = Y(o, n.mul(.78)).mul(z(1).sub(d)).mul(z(1).sub(g.a.mul(.8))),
            b = _.sub(h.sample(e).rgb).mul(.18),
            x = G(_, v.add(b), y.mul(.94)),
            S = Y(.82, s).mul(n).mul(i.unit.mul(10).div(i.res.x)),
            C = G(x, V(m.sample(f.add(B(S, 0))).r, x.g, m.sample(f.sub(B(S, 0))).b), Y(.82, s)).toVar(),
            te = Y(.988, Ht(a.add(p.mul(3.7)).add(9.9))).mul(Y(.5, n)),
            w = $e(C, V(.3, .55, .15));
        return C.assign(G(C, Z(o.greaterThan(.5), V(.1, 1.6, 1.7), V(1.5, .15, 1.3)).mul(Y(.3, w).mul(.7).add(.3)), te)), H(C, 1)
    })();
    let ee = new ie(_),
        v = new k;
    v.name = `run-glitch-copyM`, v.fragmentNode = H(R(s.texture, Q()).rgb, 1);
    let y = new ie(v),
        b = new oe;
    b.grade({
        contrast: 1.14,
        saturation: 1.25,
        shadowTint: [0, .01, .03],
        highTint: [.02, 0, .02],
        vignette: .5,
        grain: .05,
        exposure: 1.05
    });
    let x = R(s.texture),
        S = I(() => {
            let e = Q(),
                t = x.sample(e).rgb,
                n = Y(.93, Ut(W(e.x.mul(i.res.x).div(i.unit.mul(6))).add(p.mul(7)))).mul(i.glitch),
                r = x.sample(B(e.x, e.y.sub(.04))).rgb;
            return G(t, X(t, r.mul(.85)), n).mul(z(.94).add(Y(.5, U(e.y.mul(i.res.y).div(i.unit.mul(4)))).mul(.06)))
        })(),
        C = w(S, b, Q()),
        ne = e.wrap(`glitch`, C.rgb),
        T = -1,
        E = 0,
        re = 0;
    return {
        id: `glitch`,
        look: `beauty`,
        groups: r.groups,
        sticker: t.material(`glitch`),
        puff: n.material(`glitch`),
        output: ne,
        pre(e) {
            let t = i.res.value.x,
                n = i.res.value.y;
            (s.width !== t || s.height !== n) && (s.setSize(t, n), c.setSize(t, n)), e.setRenderTarget(c), y.render(e), e.setRenderTarget(s), ee.render(e)
        },
        update(e) {
            r.update(e), r.variant.value = 1;
            let t = e.x - E;
            E = e.x, u.value.set(g.clamp(-t * .045, -.02, .02), 0);
            let n = Math.floor(e.clock / l);
            d.value = 0, n !== T && (T = n, n % 4 == 0 && (d.value = 1)), Math.floor(e.t * 12) !== re && (re = Math.floor(e.t * 12), p.value = (p.value + 1.618) % 97), b.time.value = e.t, b.aspect.value = e.camera.aspect
        },
        layout(e) {
            r.layout ? .(e)
        },
        targets: () => [s, c],
        dispose() {
            ne.dispose(), _.dispose(), v.dispose(), s.dispose(), c.dispose()
        }
    }
}
var zr = null;
async function Br(e, t) {
    if (zr) return;
    let n = document.createElement(`canvas`);
    n.width = 2048, n.height = 900;
    let r = n.getContext(`2d`);
    r.fillStyle = `#fff`, r.textAlign = `center`, r.textBaseline = `middle`, r.font = `800 330px elevon, 'Arial Black', 'Helvetica Neue', sans-serif`, r.letterSpacing = `18px`;
    let i = [`SIGNAL`, `LOST`];
    for (let a = 0; a < i.length; a++) {
        r.fillText(i[a], n.width / 2, 230 + a * 420);
        let o = a === i.length - 1,
            s = await createImageBitmap(n, {
                imageOrientation: `flipY`,
                premultiplyAlpha: `none`,
                colorSpaceConversion: `none`
            });
        if (o ? zr = s : s.close(), !o && (await e(), t())) return
    }
}

function Vr() {
    if (!zr) throw Error(`prepareChargeText() first`);
    let e = new se(zr);
    return e.name = `signal-lost`, e.flipY = !1, e.format = _e(1), e.colorSpace = ``, e.anisotropy = 8, e.needsUpdate = !0, e
}

function Hr(t, n, r, i) {
    let {
        U: o
    } = t, s = new a;
    s.name = `charge`;
    let c = L(1),
        l = new e({
            transparent: !0,
            blending: 2,
            depthWrite: !1,
            side: 2
        });
    l.name = `run-charge-tM`, l.fragmentNode = I(() => {
        let e = R(i, Q()).r,
            t = z(.85).add(Y(.5, U(Q().y.mul(90))).mul(.15));
        return H(V(1, .97, .9).mul(e).mul(1.6).mul(c).mul(t), 1)
    })();
    let u = new y(new x(1, 900 / 2048), l);
    u.frustumCulled = !1, s.add(u);
    let d = t.settings.tier === `low` ? null : zt({
            resolutionScale: Math.min(.5, t.settings.mirror),
            samples: 0
        }),
        f = new e;
    f.name = `run-charge-fM`, f.fragmentNode = I(() => {
        let e = dt,
            t = V(.012, .012, .014),
            n = K(1, .2, J(e.xz.sub(B(o.shadow.x, o.shadow.y)).div(B(o.shadow.z.mul(1.2), o.shadow.z.mul(.9))))).mul(.9);
        if (!d) return H(t.add(V(.03, .028, .02).mul(qe(q(e.z.add(3.4)).mul(-.8)))).mul(z(1).sub(n)), 0);
        let r = B(.004, 0),
            i = d.sample(d.uvNode).rgb.mul(.4).add(d.sample(d.uvNode.add(r)).rgb.mul(.3)).add(d.sample(d.uvNode.sub(r)).rgb.mul(.3)),
            a = qe(q(e.z.sub(o.runner.z)).mul(-.12));
        return H(t.add(i.mul(.55).mul(a)).mul(z(1).sub(n)), 0)
    })();
    let p = new y(new x(80, 80), f);
    p.rotation.x = -Math.PI / 2, d && p.add(d.target), p.frustumCulled = !1, s.add(p);
    let m = new e;
    m.name = `run-charge-bM`, m.fragmentNode = H(V(.006, .006, .008), 0);
    let h = new y(new x(200, 60), m);
    h.frustumCulled = !1, h.position.set(0, 20, -30), s.add(h);
    let g = new oe;
    g.grade({
        contrast: 1.16,
        saturation: 1.08,
        shadowTint: [0, .005, .004],
        highTint: [.02, .01, 0],
        vignette: .75,
        grain: .06,
        exposure: 1
    });
    let _ = R(t.rt.scene.texture),
        ee = L(.004),
        v = re(_, Q(), ee),
        b = de(H(v, 1), 1, .6, .55);
    b.setResolutionScale(t.settings.bloom);
    let S = L(.52),
        C = I(() => {
            let e = Q(),
                t = e.mul(o.res),
                n = o.energy,
                r = W(o.time.mul(30)),
                i = Ht(W(t.div(o.unit.mul(2))).add(r.mul(13.1))),
                a = G(z(.08), z(.2), n).mul(G(z(1), z(.5), o.reduced)),
                s = qe(U(o.beat).mul(-6)),
                c = qe(q(e.y.sub(S)).mul(o.res.y).div(o.unit.mul(-9))).mul(qe(q(e.x.sub(.5)).mul(-1.1))).mul(z(.5).add(n.mul(1.6)).add(s.mul(.4))),
                l = qe(q(e.y.sub(S)).mul(-9)).mul(.08).mul(n.add(.3)),
                u = z(.9).add(Y(.5, U(t.y.div(o.unit.mul(3)))).mul(.1));
            return v.add(b.rgb).add(V(1, .92, .25).mul(c.add(l))).mul(u).mul(z(1).sub(a.mul(.5))).add(V(i.mul(i).mul(a.mul(1.4))))
        })(),
        te = w(C, g, Q()),
        ne = t.wrap(`charge`, te.rgb),
        T = new P,
        E = new P;
    return {
        id: `charge`,
        look: `charge`,
        groups: [s],
        sticker: n.material(`color`),
        puff: r.material(`color`),
        output: ne,
        update(e) {
            let n = o.runner.value.x,
                r = e.portrait;
            e.camera.getWorldDirection(E), E.y = 0, E.lengthSq() < 1e-6 && E.set(0, 0, -1), E.normalize();
            let i = r ? 7.5 : 3.6;
            u.position.set(n + E.x * i, r ? 2.3 : 1.75, E.z * i), u.rotation.set(0, Math.atan2(-E.x, -E.z), 0), u.scale.setScalar(r ? 3.4 : 5), p.position.set(n, 0, 0), h.position.set(n, 20, -30);
            let a = o.energy.value;
            c.value = .85 + .15 * Math.sin(e.t * 47) * Math.sin(e.t * 13) + (t.reduced ? 0 : .25 * a * (Math.floor(e.t * 20) % 3 == 0)), ee.value = .003 + .012 * a, g.time.value = e.t, g.aspect.value = e.camera.aspect, T.copy(u.position).setY(u.position.y - .13).project(e.camera), S.value = .5 - T.y * .5
        },
        dispose() {
            Pn(s), ne.dispose(), b.dispose(), d ? .dispose ? .()
        }
    }
}
var Ur = Math.PI * 2,
    Wr = (e, t = 0, n = 1) => Math.min(n, Math.max(t, e)),
    Gr = (e, t, n) => {
        let r = Wr((n - e) / (t - e));
        return r * r * (3 - 2 * r)
    },
    Kr = e => e - Math.floor(e),
    qr = (e, t, n) => Math.exp(-(((e - t) / n) ** 2)),
    Jr = (e, t, n) => e + (t - e) * n,
    Yr = () => ({
        x: 0,
        y: 0,
        z: 0,
        pitch: 0,
        yaw: 0,
        roll: 0
    });

function Xr() {
    return {
        root: { ...Yr(),
            s: 0
        },
        body: { ...Yr(),
            sq: 0
        },
        footL: Yr(),
        footR: Yr(),
        antL: 0,
        antR: 0
    }
}

function Zr(e, t, n) {
    let r = Xr(),
        i = (e, t, r) => {
            let i = e,
                a = t,
                o = r;
            for (let e of Object.keys(i)) i[e] = a[e] + (o[e] - a[e]) * n
        };
    return i(r.root, e.root, t.root), i(r.body, e.body, t.body), i(r.footL, e.footL, t.footL), i(r.footR, e.footR, t.footR), r.antL = e.antL + (t.antL - e.antL) * n, r.antR = e.antR + (t.antR - e.antR) * n, r
}

function Qr(e, t) {
    let n = 0;
    for (; n < e.length - 2 && t > e[n + 1][0];) n++;
    let r = e[Math.max(0, n - 1)],
        i = e[n],
        a = e[n + 1],
        o = e[Math.min(e.length - 1, n + 2)],
        s = Wr((t - i[0]) / (a[0] - i[0])),
        c = [];
    for (let e = 1; e < i.length; e++) {
        let t = r[e],
            n = i[e],
            l = a[e],
            u = o[e],
            d = (l - t) * .5,
            f = (u - n) * .5,
            p = s * s,
            m = p * s;
        c.push((2 * m - 3 * p + 1) * n + (m - 2 * p + s) * d + (-2 * m + 3 * p) * l + (m - p) * f)
    }
    return c
}
var $r = (e, t, n) => [
    [0, -e, 0, .62],
    [.2, -e - .14 * n, t, 1.2],
    [.5, -.02, t * .66, .2],
    [.8, e + .1 * n, t * .4, -.5],
    [1, e, 0, -.36]
];

function ei(e, t) {
    let n = t.c ? ? .28,
        r = t.lift ? ? .26,
        i = t.lean ? ? .3,
        a = t.bob ? ? .05,
        o = t.squash ? ? .17,
        s = t.hover ? ? .075,
        c = t.energy ? ? 1,
        l = Xr(),
        u = Math.min(.42, t.v * n * t.T / 2),
        d = (e, t, i) => {
            let a = Kr(t);
            if (a < n) {
                let t = a / n;
                e.z = u * (1 - 2 * t), e.y = 0, e.pitch = -.36 * (1 - t) ** 3 + .62 * t ** 4
            } else {
                let t = (a - n) / (1 - n),
                    [o, s, l] = Qr($r(u, r, c), t);
                e.z = o, e.y = Math.max(0, s), e.pitch = l, e.x = i * Math.sin(Math.PI * t) * .03
            }
            e.x += -i * .035
        };
    d(l.footL, e, 1), d(l.footR, e + .5, -1);
    let f = Kr(e * 2);
    l.body.y = s - a * .5 * Math.cos(Ur * (f - 2 * n * .4));
    let p = o * (qr(f, .09, .08) + qr(f, 1.09, .08)) - o * .55 * qr(f, 2 * n * .9, .1);
    l.body.sq = p * c, l.body.pitch = i + .06 * (qr(f, .14, .12) + qr(f, 1.14, .12)) - .03 * qr(f, .8, .2), l.body.z = .05, l.body.roll = -.085 * Math.sin(Ur * (e - n * .5)), l.body.yaw = .1 * Math.sin(Ur * (e - .1));
    let m = -.5 + .34 * Math.sin(Ur * (f - n - .25));
    return l.antL = m, l.antR = m * .9 + .03, l
}

function ti(e, t = 5.8, n = -.16) {
    let r = Xr(),
        i = e * t,
        a = (e, t, n) => {
            e.z = Math.cos(Ur * t) * .22, e.y = .1 + Math.sin(Ur * t) * .1, e.pitch = -Ur * t * .15 + Math.sin(Ur * t) * .5, e.x = -n * .03
        };
    return a(r.footL, i, 1), a(r.footR, i + .5, -1), r.body.y = .06 + Math.abs(Math.sin(Ur * i)) * .02, r.body.pitch = n, r.body.sq = .1 + Math.sin(Ur * i * 2) * .035, r.body.roll = Math.sin(Ur * i * 2) * .05, r.body.z = -.03, r.antL = r.antR = .25 + Math.sin(Ur * i * 2) * .3, r
}

function ni(e, t, n = 1) {
    let r = Zr(e, e, 0);
    r.body.sq += .3 * t * n, r.body.y -= .07 * t * n, r.body.pitch += .18 * t, r.antL += .55 * t, r.antR += .5 * t;
    for (let e of [r.footL, r.footR]) e.y *= 1 - .8 * t, e.pitch *= 1 - .6 * t;
    return r
}

function ri(e, t, n = 0) {
    let r = Xr(),
        i = t * 4 * e * (1 - e);
    r.body.sq = -.26 * Math.exp(-e * 9) + .06 * qr(e, .5, .2) - .08 * Gr(.82, 1, e), r.root.s = .22 * Math.exp(-e * 10), r.body.y = .08, r.body.pitch = .34 - .42 * e, r.body.z = .05;
    let a = Gr(.02, .2, e) * (1 - Gr(.7, .96, e));
    for (let [t, n, i] of [
            [r.footL, 1, .07],
            [r.footR, -1, -.07]
        ]) t.z = i + (1 - a) * i * 2 - .02 - .12 * Math.exp(-e * 12), t.y = a * .22, t.pitch = a * .75 - .3 * Gr(.8, 1, e) + .6 * Math.exp(-e * 12), t.x = -n * .03;
    r.root.pitch = n * Gr(.06, .84, e) * Ur;
    let o = -1.05 * Math.exp(-e * 5) + .4 * Math.sin(e * Math.PI * 1.2);
    return r.antL = o, r.antR = o * .9, {
        pose: r,
        y: i
    }
}

function ii(e, t = .3) {
    return e < 0 ? 0 : t * Math.exp(-e / .06) * Math.cos(e * 30)
}

function ai(e, t) {
    if (t < 0 || t > .8) return e;
    let n = Math.exp(-t / .18);
    return e.body.pitch -= .55 * n * Math.cos(t * 14), e.body.sq += .22 * n, e.body.roll += .3 * n * Math.sin(t * 22), e.root.y += .04 * n, e.antL += .9 * n, e.antR += .8 * n, e
}

function oi(e, t) {
    let n = Xr(),
        r = Kr(e),
        i = t * .018;
    return n.body.sq = .06 * Math.exp(-r / .08) + t * .22 + Math.sin(e * Ur * 4) * i * 3, n.body.y = -.02 * t + Math.sin(e * Ur * 8) * i, n.body.x = Math.sin(e * Ur * 6.3) * i, n.body.pitch = .1 * t, n.footL.x = .02 + t * .03, n.footR.x = -.02 - t * .03, n.footL.z = .02, n.footR.z = -.02, n.antL = Jr(-.2, .7, t) + Math.sin(e * Ur * 4) * .2 * t, n.antR = n.antL * .95, n
}
var si = F(`ゴールまで走る`, `Run to the goal`),
    ci = F(`タップでジャンプ・ゴールまで`, `Tap to jump — reach the goal`),
    li = .46,
    ui = 12,
    di = 24,
    fi = 6,
    pi = {
        toon: Cn.iris,
        ascii: Cn.scan,
        bit8: Cn.blocks,
        desktop: Cn.window,
        y2k: Cn.iris,
        glitch: Cn.tear,
        overload: Cn.flash,
        charge: Cn.tvoff
    },
    mi = {
        jump: [`jump`],
        land: [`land`],
        world: e => e === `charge` ? [`zap_small`] : [`world_${e===`bit8`?`8bit`:e}`],
        hit: e => [`sticker_slap_${1+e%4}`],
        coin: [`eyes_pikon`, `ui_confirm`],
        count: [`pi`],
        rewind: [`rewind`],
        riser: [`world_charge`]
    },
    hi = [`C:\\FUNTECH> run world_1-2.exe --render=ascii`, `[ OK ] glyph match 240x72 @ 8x15 px · 2x3 shape vectors`, `[ OK ] stride lock: 1 step / 8th @ 174 BPM`, `[ .. ] funkun.exe streaming`],
    gi = {
        land: {
            toon: {
                yaw: 8,
                dist: 9.4,
                h: 1,
                fov: 30,
                ahead: 2.65,
                ty: .62,
                shift: -.04
            },
            ascii: {
                yaw: 22,
                dist: 8.4,
                h: .85,
                fov: 32,
                ahead: 2.8,
                ty: .55,
                shift: 0
            },
            bit8: {
                yaw: 0,
                dist: 12.6,
                h: .85,
                fov: 22,
                ahead: 3,
                ty: .8,
                shift: .02
            },
            desktop: {
                yaw: 6,
                dist: 9.4,
                h: 1.05,
                fov: 30,
                ahead: 2.7,
                ty: .85,
                shift: 0
            },
            y2k: {
                yaw: 10,
                dist: 8.6,
                h: .6,
                fov: 34,
                ahead: 2.6,
                ty: .65,
                shift: 0
            },
            glitch: {
                yaw: 8,
                dist: 8.4,
                h: .7,
                fov: 34,
                ahead: 2.6,
                ty: .65,
                shift: 0
            },
            overload: {
                yaw: 18,
                dist: 8.6,
                h: 1,
                fov: 30,
                ahead: 2.7,
                ty: .55,
                shift: 0
            },
            charge: {
                yaw: 16,
                dist: 8.6,
                h: .95,
                fov: 30,
                ahead: 2.7,
                ty: .55,
                shift: 0
            }
        },
        port: {
            toon: {
                yaw: 80,
                dist: 6,
                h: 1.75,
                fov: 52,
                ahead: 1.6,
                ty: .5,
                shift: -.1
            },
            ascii: {
                yaw: 80,
                dist: 6,
                h: 1.6,
                fov: 54,
                ahead: 1.6,
                ty: .5,
                shift: -.08
            },
            bit8: {
                yaw: 80,
                dist: 6.4,
                h: 2,
                fov: 52,
                ahead: 1.4,
                ty: .55,
                shift: -.06
            },
            desktop: {
                yaw: 78,
                dist: 6.4,
                h: 1.6,
                fov: 52,
                ahead: 1.5,
                ty: .8,
                shift: -.08
            },
            y2k: {
                yaw: 80,
                dist: 5.8,
                h: 1.3,
                fov: 54,
                ahead: 1.6,
                ty: .6,
                shift: -.08
            },
            glitch: {
                yaw: 80,
                dist: 5.6,
                h: 1.3,
                fov: 54,
                ahead: 1.5,
                ty: .6,
                shift: -.08
            },
            overload: {
                yaw: 80,
                dist: 6,
                h: 1.6,
                fov: 52,
                ahead: 1.6,
                ty: .55,
                shift: -.08
            },
            charge: {
                yaw: 78,
                dist: 6,
                h: 1.6,
                fov: 52,
                ahead: 1.6,
                ty: .55,
                shift: -.08
            }
        }
    },
    _i = {
        stage: 0,
        coins: 0,
        done: !1
    },
    vi = new P,
    yi = new P,
    bi = new S,
    xi = new n,
    Si = new ee,
    Ci = new P,
    wi = new P(0, 1, 0),
    Ti = () => new Promise(e => requestAnimationFrame(() => e()));

function Ei(e) {
    let t, n, i, a, o = null,
        c = null,
        d = null,
        f = null,
        p = null,
        h = null,
        g = null,
        ee = null,
        v = null,
        y = null,
        x = null,
        S = null,
        C = null,
        w = null,
        ne = null,
        T = new Map,
        re = {},
        ie = [],
        O = kn(),
        oe = !1,
        k = !1,
        se = [],
        A = 0,
        de = 0,
        fe = 1 / 60,
        j = 0,
        he = 0,
        ge = NaN,
        M = `wait`,
        N = _i.stage,
        _e = sr(N),
        ve = 0,
        ye = !0,
        Se = 0,
        F = or(N),
        Ce = 0,
        I = 0,
        Te = -10,
        Ee = -10,
        De = -10,
        Oe = !1,
        L = !1,
        ke = !1,
        Ae = _i.coins,
        R = _i.coins,
        je = 0,
        z = 0,
        Me = 0,
        Ne = -10,
        B = 0,
        V = 0,
        H = 0,
        Pe = -10,
        Fe = -10,
        Ie = -10,
        Le = 0,
        Re = !1,
        ze = -10,
        Be = -10,
        Ve = -10,
        He = 0,
        U = !1,
        W = !1,
        Ue = [],
        We = [],
        Ge = ``,
        G = -10,
        K = 0,
        Ke = !1,
        q = Dn[N] === `overload` ? `toon` : Dn[N],
        qe = q,
        Je = -1,
        Ye = 0,
        Xe = l,
        Ze = 0,
        Qe = 0,
        $e = new P,
        et = new P,
        J = !1,
        tt = 0,
        nt = 30,
        rt = null,
        Y = [],
        X = [],
        it = () => or(N),
        Z = e => it() + Gn * (e - Se),
        at = e => dr((e - Te) / Jn),
        ot = () => j - Te >= Jn,
        st = () => z >= 2,
        ct = () => !!t ? .ui ? .touch,
        lt = () => ct() ? xe(`タップでジャンプ`, `Tap to jump`) : xe(`スペース / クリックでジャンプ`, `Space / click to jump`);

    function ut() {
        !oe || k || t.layer.hidden || (Oe = !0)
    }

    function Q() {
        if (M === `run` || M === `wait` || M === `ready`) {
            if (!ot()) {
                j - Te > .434 && (De = j);
                return
            }
            Te = Math.max(he, j - .02), t.audio.play(mi.jump, {
                quantize: `none`
            }), Tt(3, 0), dt(0, vi.set(F - .2, 1.5, .35))
        }
    }

    function dt(e, t) {
        let n = T.get(`toon`);
        q === `toon` && n ? .sfx ? .(e, t)
    }

    function ft(e, t, n, r = 1) {
        Ue = Ue.filter(t => t.id !== e), Ue.push({
            id: e,
            at: t,
            names: n,
            gain: r
        })
    }

    function pt() {
        for (let e = Ue.length - 1; e >= 0; e--) {
            let n = Ue[e],
                r = n.at - j;
            r > t.clock.latency + .20689655172413793 || (Ue.splice(e, 1), !(r < -.08) && t.audio.play(n.names, {
                quantize: r > t.clock.latency + .015 ? `beat` : `none`,
                gain: n.gain
            }))
        }
    }

    function mt() {
        M = `wait`, _e = sr(N), Ae = R, F = it(), Ce = 0, I = 0, Te = Ee = De = -10, Oe = !1, Ue = [], We = [], Re = !1, O.energy.value = 0, ne ? .stop(), J = !1
    }

    function ht(e) {
        N = e, _i.stage = e, _i.done = !1, Ae = R = _i.coins = 0, je = z = Me = 0, Ct(e, !0), mt()
    }

    function gt() {
        let e = t.clock.next(`bar`, 6 * l + .3, de);
        ve = j + (e - de), ye = !0, M = `ready`;
        for (let e of [3, 2, 1]) ft(`c` + e, ve - 2 * e * l, mi.count, 1.6);
        ft(`go`, ve, mi.world(Dn[N]))
    }

    function _t() {
        M = `run`, ke = !1, Se = ve, ze = A, L = !0, We.push(wt(`gif12`, F + 3.2, -1.6, 1.25)), Tt(4, 0), dt(2, vi.set(F - .4, 1.1, .5)), Dn[N] === `overload` && ne ? .start(A), t.audio.bed(1, .08)
    }

    function vt(e, n, r) {
        M = `miss`, Ne = A, B = n, V = r, Ve = A, e && (e.st = `hit`, e.hitT = A, e.spin = (_(e.seed * 7.7) - .5) * 16), z++, je++, Ue = [], t.audio.play(mi.hit(He++), {
            quantize: `none`
        }), t.audio.bed(.3, .06), Qe = t.reducedMotion ? 0 : 1.1;
        let i = e ? e.x : n + .4,
            a = e ? e.h : .5;
        Tt(4, 1, vi.set(i - .2, a * .8, .1)), q === `toon` ? dt(3, vi.set(i, a + .8, .4)) : $t(i, a + .7, `BONK!`, `hit`);
        let o = t.clock.next(`beat`, .62, de);
        H = j + (o - de), ft(`rewind`, H, mi.rewind)
    }

    function yt() {
        _e = sr(N), Ae = R, F = it(), Ce = 0, I = 0, Te = Ee = De = -10, We = [], G = A, K = t.reducedMotion ? Cn.cut : Cn.iris, Ke = !0, O.wipeSeed.value = (O.wipeSeed.value + 7.31) % 97, J = !1, M = `ready`, ye = !1, ve = H + 2 * l, ft(`go`, ve, mi.world(Dn[N])), ne ? .stop()
    }

    function bt() {
        let e = N + 1;
        Se += qn / Gn, N = e, _i.stage = e, ke = !1, Ct(e), _e = sr(e), R = _i.coins = Ae, z = 0, Be = A;
        let t = Fn;
        We.push(wt(t[e % t.length], F + 7.5, -2.3, 1.1))
    }

    function xt() {
        M = `goal`, Pe = A, Le = F + Gn * .25;
        let e = t.clock.next(`bar`, .55, de);
        Fe = A + (e - de), Ue = [], ft(`riser`, j + (e - de), mi.riser), _i.coins = Ae
    }
    let St = e => t.reducedMotion && pi[e] === Cn.flash ? Cn.cut : pi[e];

    function Ct(e, t = !1) {
        X.push({
            world: Dn[e],
            clock: +de.toFixed(3),
            bar: +(de / le % 1).toFixed(3)
        }), X.length > 32 && X.shift();
        let n = Dn[e];
        t || (G = A, K = St(n), Ke = !0, O.wipeSeed.value = (O.wipeSeed.value + 7.31) % 97), q = n === `overload` ? `toon` : n, Je = -1, w ? .setWorld(n), n === `overload` && M === `run` ? ne ? .start(A) : ne ? .stop()
    }

    function wt(e, t, n, r) {
        let i = re[e] ? ? re.gif12;
        return {
            x: t,
            z: n,
            meta: i,
            w: r * (i ? .aspect ? ? 1),
            h: r,
            born: A
        }
    }

    function Tt(e, t, n) {
        if (!x) return;
        let r = x;
        for (let i = 0; i < e; i++) {
            let e = Et++ % r.max;
            Dt[e] = 0, Ot[e] = t;
            let a = n ? n.x : F - .2 - i * .25,
                o = n ? n.y : .12,
                s = n ? n.z : i % 2 ? .25 : -.25;
            At[e * 3] = a + (_(e + A) - .5) * .3, At[e * 3 + 1] = o + _(e * 3.1 + A) * .15, At[e * 3 + 2] = s, jt[e * 3] = -.6 - _(e * 1.7 + A) * .8, jt[e * 3 + 1] = .3 + _(e * 5.3 + A) * .5, jt[e * 3 + 2] = (_(e * 2.3 + A) - .5) * .6, kt[e] = t ? .35 + _(e) * .25 : .32 + _(e * 9.1) * .22
        }
    }
    let Et = 0,
        Dt = new Float32Array(24).fill(9),
        Ot = new Float32Array(24),
        kt = new Float32Array(24),
        At = new Float32Array(72),
        jt = new Float32Array(72);
    async function Mt() {
        let e = t.perf.settings,
            r = h = t.assets.lease(),
            a = () => t.perf.restart(2),
            s = () => k,
            l = performance.now(),
            u = e => {
                let t = performance.now();
                try {
                    performance.measure(`run · ` + e, {
                        start: l,
                        end: t
                    })
                } catch {}
                Y.push([e, +(t - l).toFixed(1), +t.toFixed(1)]), l = t
            };
        a();
        let m = (e, n) => t.assets.texture(e, n),
            [_, b, te, E, D, se, ce, le, A, de] = await Promise.all([t.assets.loadHDR(`gen/env/studio_256.hdr`), t.assets.json(`gen/run/run.json`), m(`gen/run/stickers.webp`, {
                half: !0
            }), m(`gen/run/art/sfx.webp`, {
                srgb: !1,
                flipY: !1
            }), m(`gen/run/art/glyphs.png`, {
                srgb: !1,
                flipY: !1,
                mips: !1,
                channels: 1
            }), m(`gen/run/art/glyph_lut.png`, {
                srgb: !1,
                flipY: !1,
                nearest: !0,
                channels: 1
            }), m(`gen/run/art/works.webp`, {
                flipY: !1,
                half: !0
            }), m(`gen/run/art/wall.png`, {
                srgb: !1,
                flipY: !1,
                repeat: !0,
                channels: 1
            }), m(`gen/run/art/logo.png`, {
                srgb: !1,
                flipY: !1,
                channels: 1
            }), Cr(r), Lt()]);
        if (f = _, p = te, g = {
                sfx: E,
                glyphs: D,
                lut: se,
                works: ce,
                wall: le,
                logo: A
            }, ee = de, k || (p.anisotropy = 4, g.works.anisotropy = 8, re = b.stickers, ie = b.works, u(`fetch`), await Ti(), k)) return It();
        w = new hr(t.layer, ie, ct()), w.setWorld(Dn[N]), w.layout(n.portrait), w.placeLinks([], !1), ne = new vr(w.dlgs, t.reducedMotion), u(`hud`), await Ti();
        let fe = await Sn(t.renderer, f, be(e), {
            frame: Ti,
            cancelled: s
        });
        if (!fe || k) return fe ? .dispose(), It();
        if (d = fe, u(`env maps (dry run + bake)`), a(), c = await hn(r, {
                lod: e.lod,
                detail: e.detail,
                env: {
                    beauty: d.beauty,
                    chrome: d.chrome,
                    charge: d.charge
                }
            }), k || (i.add(c.runner), u(`funkun`), await Ti(), k)) return It();
        o = new Tn(t.renderer, e.msaa), y = new In(fi, p, b.atlas, O), x = new Ln(24, O), S = new Hn(ui, O), C = new Wn(di), i.add(y.mesh, x.mesh, S.mesh, C.mesh);
        let pe = {
                renderer: t.renderer,
                settings: e,
                U: O,
                reduced: t.reducedMotion,
                rt: {
                    scene: o.scene,
                    low: o.low,
                    prev: o.prev
                },
                wrap: (e, t) => o.wrap(e, t, O)
            },
            j = [
                [`toon`, () => Tr(pe, y, x, g.sfx, ee)],
                [`ascii`, () => Or(pe, y, x, {
                    glyphs: g.glyphs,
                    lut: g.lut
                })],
                [`bit8`, () => Ar(pe, y, x)],
                [`desktop`, () => Lr(pe, y, x, {
                    works: b.works,
                    worksTex: g.works,
                    wallTex: g.wall
                })],
                [`y2k`, () => zn(pe, y, x, g.logo)],
                [`glitch`, () => Rr(pe, y, x, T.get(`y2k`))],
                [`charge`, () => Hr(pe, y, x, v)]
            ];
        for (let [e, t] of j) {
            if (await Ti(), k || e === `charge` && (await Br(Ti, s), k || (v = Vr(), u(`charge text`), await Ti(), k))) return It();
            let n = performance.now(),
                r = t();
            T.set(e, r);
            for (let e of r.groups) e.parent || i.add(e);
            u(`create ${e} (sync ${(performance.now()-n).toFixed(1)} ms)`)
        }
        Pt();
        let he = [p, ...Object.values(g), ...v ? [v] : [], ...c.textures, ...[...T.values()].flatMap(e => e.textures ? .() ? ? [])];
        for (let e of he) {
            if (await Ti(), k) return It();
            t.renderer.initTexture(e), u(`upload ` + (e.name || `${e.image?.width}×${e.image?.height}`))
        }
        a();
        let ge = e => t.own ? t.own(e) : e(),
            M = new ue(64, 36, { ...me,
                depthBuffer: !1
            });
        try {
            for (let e of Dn) {
                if (e === `overload`) continue;
                if (await Ti(), k) return It();
                let n = T.get(e);
                Ht(), $(), Rt(n);
                let r = await ae(t.renderer, () => ge(() => Bt(n, M, !0)), {
                    cancelled: s
                });
                if (k) return It();
                u(`warm ${e} (${r.frames} frames)`), a()
            }
            await ae(t.renderer, () => ge(() => o.capture(M)), {
                cancelled: s
            });
            for (let e of Dn) {
                if (e === `overload`) continue;
                if (await Ti(), k) return It();
                let t = T.get(e);
                $(), Rt(t), ge(() => {
                    Bt(t, M, !0), o.capture(M)
                }), u(`draw ` + e)
            }
        } finally {
            M.dispose()
        }
        zt(T.get(q)), oe = !0, a()
    }
    let Nt = new te;

    function Pt() {
        if (!o) return;
        let e = t.renderer.getDrawingBufferSize(Nt);
        O.res.value.set(e.x, e.y), O.unit.value = n.portrait ? e.x / Math.max(1, n.view.x1 - n.view.x0) : e.y / Math.max(1, n.view.y1 - n.view.y0), o.resize(e.x, e.y, O.unit.value), O.lowRes.value.set(o.lw, o.lh)
    }
    let Ft = () => [...o ? .targets() ? ? [], ...[...T.values()].flatMap(e => e.targets ? .() ? ? [])];

    function It() {
        for (let e of T.values()) e.dispose();
        T.clear(), y ? .dispose(), y = null, x ? .dispose(), x = null, S ? .dispose(), S = null, C ? .dispose(), C = null, c ? .dispose(), c = null, d ? .dispose(), d = null, o ? .dispose(), o = null, f ? .dispose(), f = null, p ? .dispose(), p = null;
        for (let e of Object.values(g ? ? {})) e.dispose();
        g = null, ee = null, v ? .dispose(), v = null, h ? .release(), h = null, w ? .dispose(), w = null, ne ? .dispose(), ne = null
    }
    async function Lt() {
        let e = [new FontFace(`RunPixel`, `url(${t.assets.url(`gen/run/fonts/press-start-2p-latin.woff2`)}) format('woff2')`), new FontFace(`RunDot`, `url(${t.assets.url(`gen/run/fonts/dotgothic16-run.woff2`)}) format('woff2')`)];
        await Promise.race([Promise.all(e.map(async e => {
            try {
                await e.load(), document.fonts.add(e)
            } catch {}
        })), new Promise(e => setTimeout(e, 2500))]), await Promise.race([document.fonts.load(`40px VT323`), new Promise(e => setTimeout(e, 800))])
    }

    function Rt(e) {
        let t = {
            dt: fe,
            t: A,
            clock: de,
            beat: de / l,
            camera: a,
            x: F,
            speed: I,
            portrait: n.portrait
        };
        e.update(t)
    }

    function zt(e) {
        for (let e of T.values())
            for (let t of e.groups) t.visible = !1;
        for (let t of e.groups) t.visible = !0;
        c.setLook(e.look), y.mesh.material = e.sticker, x.mesh.material = e.puff, S.mesh.material = S.material(Bn[e.id]), C.mesh.material = C.material(Bn[e.id])
    }

    function Bt(e, n, r = !1) {
        let s = t.renderer;
        zt(e);
        let c = [y.mesh.count, x.mesh.count, S.mesh.count, C.mesh.count];
        if (r) {
            e.warm ? .(!0);
            for (let e of [y.mesh, x.mesh, S.mesh, C.mesh]) e.count = Math.max(1, e.count)
        }
        let l = s.getClearColor(new E),
            u = s.getClearAlpha();
        s.setClearColor(0, 0), o.drawScene(i, a, !!e.low), e.pre ? .(s), t.params.get(`raw`) === `1` ? o.raw(n, !!e.low) : o.draw(e.output, n), s.setClearColor(l, u), s.setRenderTarget(null), r && (e.warm ? .(!1), [y.mesh.count, x.mesh.count, S.mesh.count, C.mesh.count] = c)
    }

    function Vt(e) {
        return gi[n.portrait ? `port` : `land`][e]
    }

    function $() {
        let e = Dn[N],
            i = Vt(e),
            o = n.aspect,
            c = i.yaw,
            l = i.dist,
            d = i.h,
            f = i.fov,
            p = i.ty,
            h = i.ahead;
        !n.portrait && o < 1.7 && (f = 2 * Math.atan(Math.tan(f * Math.PI / 360) * (1.7 / o) ** .7) * 180 / Math.PI);
        let g = F + h,
            ee = 0;
        if (tt = s(tt, Ce * .22, 6, fe), p += tt, M === `goal` || M === `leap` || M === `done`) {
            let e = D.inOut(m((A - Pe) / (le * .7))),
                t = M === `goal` ? m((A - Fe) / le) : 1;
            c = r(c, 0, e), l = r(l, r(n.portrait ? 6.4 : 5.4, n.portrait ? 3.4 : 2.6, D.in(t)), e), d = r(d, .16, e), f = r(f, n.portrait ? 48 : 30, e), g = r(g, Le, e), ee = 0, p = r(p, .6, e)
        }
        let v = c * Math.PI / 180;
        vi.set(g, p, ee), yi.set(g - Math.sin(v) * l, p + d, ee + Math.cos(v) * l), J || = ($e.copy(yi), et.copy(vi), !0);
        let y = A - G < .02,
            b = y ? 1 : 1 - Math.exp(-fe * 9);
        $e.lerp(yi, b), et.lerp(vi, b), a.position.copy($e), a.up.set(0, 1, 0), a.lookAt(et);
        let x = .006;
        a.translateX(u(A * .6, 3) * x), a.translateY(u(A * .6, 8) * x), !t.reducedMotion && Qe > .001 && (a.translateX((_(A * 97) - .5) * Qe * .12), a.translateY((_(A * 71 + 3) - .5) * Qe * .1), a.rotateZ((_(A * 53) - .5) * Qe * .03)), nt = s(nt, f, 10, fe), a.fov = y ? f : nt, a.aspect = o, a.near = .05, a.far = 600, i.shift ? a.setViewOffset(1e3 * o, 1e3, 0, 1e3 * i.shift, 1e3 * o, 1e3) : a.clearViewOffset(), a.updateProjectionMatrix(), a.updateMatrixWorld(), a.getWorldDirection(vi), O.camFwd.value.copy(vi);
        let S = yi.crossVectors(vi, wi).normalize();
        O.sunDir.value.copy(vi).multiplyScalar(.86).addScaledVector(S, n.portrait ? -.18 : -.42).add(Ci.set(0, n.portrait ? .34 : .22, 0)).normalize()
    }

    function Ht() {
        if (!c) return;
        let e, i = de / l,
            a = Ci.set(F, 0, 0),
            o = Math.PI / 2,
            s = Math.max(I, .8),
            u = (j - Te) / Jn,
            d = u >= 0 && u < 1,
            f = e => {
                if (!d) {
                    let t = j - Ee;
                    return t >= 0 && t < .6 && (e.body.sq += ii(t, .3), e.body.y -= ii(t, .06), e.body.pitch += ii(t, .12)), e
                }
                let t = ri(u, Yn, +(q === `toon` && Me % 3 == 2)),
                    n = Gr(0, .06, u) * (1 - Gr(.985, 1, u)),
                    r = Zr(e, t.pose, n);
                return r.root.s = t.pose.root.s, u < .08 ? ni(r, (1 - u / .08) * .6, .8) : r
            };
        if (M === `wait` || M === `ready`) {
            let t = ve - j,
                n = M === `ready` ? m(1 - t / (ye ? 6 * l : 2 * l)) : 0;
            e = ni(oi(i, 0), .85 * n, .8);
            let r = M === `ready` ? m(1 - t / l) : 0;
            r > 0 && (e = Zr(e, ti(A), Gr(0, .35, r))), e = f(e)
        } else if (M === `run`) {
            e = ei(Ye, {
                v: s,
                T: Xe,
                lean: .32
            });
            let t = j - Se;
            t >= 0 && t < .3 && A - ze < .4 && (e.root.s += .3 * Math.exp(-t / .05), e.body.pitch += .25 * Math.exp(-t / .08)), e = f(e)
        } else if (M === `miss`) {
            let t = A - Ne;
            e = Zr(ei(Ye, {
                v: .8,
                T: Xe
            }), oi(i, 0), Gr(0, .25, t)), e = ai(e, t), e.body.pitch -= .5 * Gr(0, .1, t) * (1 - .5 * Gr(.3, .9, t)), e.antL += .4, e.antR += .35
        } else {
            let s = A - Pe,
                c = O.energy.value,
                l = Gr(0, .12, s) * (1 - Gr(.4, .6, s));
            if (e = oi(i, t.reducedMotion ? c * .5 : c), s < .6 && (e = Zr(ei(Ye, {
                    v: Math.max(.8, I),
                    T: Xe
                }), e, Gr(.1, .6, s)), e.body.pitch -= .6 * l, e.body.sq += .12 * l), o = r(Math.PI / 2, 0, Gr(.08, .5, s)), M !== `goal`) {
                let t = m((A - Ie) / li),
                    i = ri(.12 + t * .3, .6);
                e = Zr(e, i.pose, Gr(0, .12, t)), e.body.sq = r(e.body.sq, -.16, Gr(.02, .25, t)), e.body.pitch = r(e.body.pitch, .06, Gr(.05, .4, t)), e.footL.z = r(e.footL.z, -.34, Gr(.05, .45, t)), e.footR.z = r(e.footR.z, -.24, Gr(.05, .45, t)), e.footL.y = r(e.footL.y, .12, Gr(.05, .45, t)), e.footR.y = r(e.footR.y, .02, Gr(.05, .45, t)), e.antL = e.antR = r(e.antL, -1.1, Gr(.05, .35, t));
                let o = n.portrait ? 3.4 : 2.6;
                a.set(F, .42 * Math.sin(Math.PI * t) * (1 - t) + .1 * t, r(0, o - (n.portrait ? 1.35 : 1.05), D.in(t)))
            }
        }
        c.apply(e), c.runner.position.copy(a), M !== `leap` && M !== `done` && (c.runner.position.y = Ce), c.runner.rotation.set(0, o, 0), c.runner.updateMatrixWorld(!0);
        let p = c.led,
            h = `happy`;
        M === `miss` || A - Ve < .9 ? h = `dizzy` : M === `goal` ? h = A - Pe > .45 ? `charge` : `open` : M === `leap` || M === `done` ? h = `charge` : M === `ready` && ve - j < .3448275862068966 ? h = `wide` : d ? h = `open` : _(Math.floor(A * 1.7)) > .92 && A * 1.7 % 1 < .12 && (h = `blink`), p.expr(h, 1), p.u.pulse.value = M === `goal` ? 1 + .6 * Math.exp(-(de / (l / 2) % 1) * 5) : 1, p.upload(), O.runner.value.set(a.x, Ce, a.z), O.shadow.value.set(a.x, a.z, .4 * (1 - m(Ce / 2.2) * .45), 1 - m(Ce / 2.6) * .55)
    }

    function Ut() {
        if (!y || !x || !S || !C) return;
        let e = a.position,
            t = 0,
            r = n.portrait;
        for (let e of _e.blocks) {
            if (t >= S.max) break;
            if (e.x < F - 16 || e.x > F + 70) continue;
            let n = e.x,
                i = 0,
                a = 0,
                o = 0,
                s = 0,
                c = 1;
            if (!(r && e.st !== `hit` && (c = 1 - m((F - e.x - e.w / 2 - .5) / 1.1), c <= 0))) {
                if (e.st === `hit`) {
                    let t = A - e.hitT;
                    if (t > 1.3) continue;
                    n += t * 3.2, i += t * 3.6 - t * t * 6.5, a += t * 1.4, o = -t * e.spin, s = t * e.spin * .4
                }
                bi.setFromEuler(Si.set(s, 0, o)), xi.compose(vi.set(n, i, a), bi, yi.set(e.w * c, e.h * c, e.d * c)), S.mesh.setMatrixAt(t, xi), S.set(t, e.w, e.h, e.d, e.seed), t++
            }
        }
        S.mesh.count = t, S.mesh.instanceMatrix.needsUpdate = !0, S.data.needsUpdate = !0;
        let i = 0;
        for (let e of _e.coins) {
            if (i >= C.max) break;
            let t = e.taken >= 0 ? A - e.taken : -1;
            if (t > .3 || e.x < F - (r ? 1.6 : 14) || e.x > F + 60) continue;
            let n = t >= 0 ? t * 2.4 : Math.sin(A * 3 + e.x) * .03,
                a = (t >= 0 ? Math.max(.01, 1 - t * 3.2) : 1) * (r ? 1 - m((F - e.x - .5) / 1.1) : 1);
            bi.setFromAxisAngle(wi, A * (t >= 0 ? 14 : 3.2) + e.x * .7), xi.compose(vi.set(e.x, e.y + n, 0), bi, yi.set(a, a, a)), C.mesh.setMatrixAt(i++, xi)
        }
        C.mesh.count = i, C.mesh.instanceMatrix.needsUpdate = !0;
        let o = 0;
        for (let t of We) {
            if (o >= y.max) break;
            if (t.x < F - 14 || t.x > F + 60) continue;
            let n = A - t.born,
                r = t.w,
                i = t.h;
            if (n < .5) {
                let e = m(n / .28),
                    t = e < 1 ? D.out(e) * (1 + .18 * Math.sin(e * Math.PI)) : 1;
                r *= t, i *= t
            }
            bi.setFromEuler(Si.set(0, Math.atan2(e.x - t.x, e.z - t.z), 0, `YXZ`)), xi.compose(vi.set(t.x, 0, t.z), bi, yi.set(r, i, 1)), y.mesh.setMatrixAt(o, xi), y.set(o, t.meta, 0), o++
        }
        y.mesh.count = o, y.mesh.instanceMatrix.needsUpdate = !0;
        let s = 0;
        for (let e = 0; e < x.max; e++) {
            let t = Dt[e];
            if (t >= 1) continue;
            let n = kt[e] * (.6 + t * .9);
            vi.set(At[e * 3], At[e * 3 + 1], At[e * 3 + 2]), bi.copy(a.quaternion), xi.compose(vi, bi, yi.set(n, n, n)), x.mesh.setMatrixAt(s, xi), x.data.setXYZW(s, t, e * 1.37, Ot[e], 0), s++
        }
        x.mesh.count = s, x.mesh.instanceMatrix.needsUpdate = !0, x.data.needsUpdate = !0
    }

    function Wt() {
        if (U && ot()) {
            let e = _e.blocks.find(e => e.st === `in` && e.x - F > .2);
            e && e.x - F <= 1.848 && (Oe = !0)
        }
        Oe && (Oe = !1, Q());
        let e = Z(he),
            n = Z(j),
            r = L ? 1 : Math.min(40, Math.max(1, Math.ceil((n - e) / .1)));
        L = !1;
        for (let e = 1; e <= r; e++) {
            let n = he + (j - he) * e / r,
                i = Z(n),
                a = at(n);
            for (let e of _e.blocks)
                if (e.st === `in`) {
                    if (cr(e, i, a, st())) {
                        F = i, Ce = a, vt(e, i, a);
                        return
                    }
                    lr(e, i) && (e.st = `clear`, Me++, Me === 1 && je === 0 && $t(e.x, e.h + .9, `NICE!`, ``))
                }
            for (let e of _e.coins) e.taken >= 0 || !ur(e, i, a) || (e.taken = A, Ae++, t.audio.play(mi.coin, {
                quantize: `16th`,
                gain: .8,
                minGap: .05
            }), Tt(1, 1, vi.set(e.x, e.y, .2)))
        }
        F = n, Ce = at(j), I = Gn;
        let i = it() + qn,
            a = Se + qn / Gn;
        N < 7 && !ke && (ke = !0, ft(`line`, a, mi.world(Dn[N + 1]))), F >= i && (N < 7 ? bt() : xt())
    }

    function Gt() {
        return M === `goal` || M === `leap` || M === `done` ? 1 : m((N + m((F - it()) / qn)) / 8)
    }
    let Kt = [0, 0];

    function qt() {
        let e = Gt(),
            r = (M === `wait` || M === `ready` && ye) && !n.portrait,
            i = r && oe ? we(t.stage, a, Ci.set(F + .08, .1, 0), Kt) : null,
            o = `${N}|${e>=1?`goal`:Math.round(e*400)}|${+!!r}|${i?`${Math.round(i[0]*2)},${Math.round(i[1]*2)}`:``}`;
        if (o === Ge) return;
        Ge = o;
        let s = {
            kind: `game`,
            text: si,
            touchText: ci,
            progress: +e.toFixed(4),
            count: [N + 1, 8],
            unit: `ステージ`,
            label: r,
            target: i ? [i[0], i[1]] : null,
            lead: {
                dx: 174,
                dy: 130
            }
        };
        t.gate(s)
    }

    function Jt() {
        if (!w) return;
        let e = `STAGE ${N+1}/8  ${pr[Dn[N]]}`;
        if (M === `wait`) w.message(`ready`, `READY?`, lt(), e);
        else if (M === `ready`) {
            let t = (ve - j) / l;
            ye ? t > 6 ? w.message(`ready`, `READY?`, lt(), e) : w.message(`count`, String(Math.min(3, Math.ceil(t / 2))), lt(), e) : w.message(`ready`, `READY`, ``, e)
        } else M === `run` ? A - ze < .55 ? w.message(`go`, `GO!`) : A - Be < 1 ? w.message(`title`, `STAGE ${N+1}`, pr[Dn[N]]) : w.message(``) : M === `miss` ? w.message(`miss`, `MISS!`, st() ? xe(`もういちど！ ジャンプの目印を出します`, `Try again! Here’s where to jump`) : xe(`もういちど！`, `Try again!`)) : M === `goal` && A < Fe + .35 ? w.message(`goal`, `GOAL!`, `COIN ×${Ae} / ${ar}`) : w.message(``);
        let t = !1,
            n = 0,
            r = 0,
            i = !1;
        if (M === `run` && (st() || Me === 0 && N === 0)) {
            let e = _e.blocks.find(e => e.st === `in` && e.x - F > .3);
            e && e.x - F < 9 && ([n, r] = Qt(vi.set(e.x, e.h + .55, 0)), t = !0, i = ot() && Math.abs(e.x - F - 1.798) < .5)
        }
        w.jumpCue(t, n, r, i)
    }

    function Yt(e) {
        let n = Math.max(e.portrait ? 140 : 112, (t.ui.logoBox().bottom + 8 - e.top) / e.u);
        w ? .root.style.setProperty(`--toon-top`, n.toFixed(2));
        let r = e.view,
            i = n + (e.portrait ? 206 : 102),
            a = 26 / (r.x1 - r.x0),
            o = 1 - 26 / (r.x1 - r.x0),
            s = (Math.max(r.y0, 0) + i - r.y0) / (r.y1 - r.y0),
            c = (Math.min(r.y1, e.H) - 26 - r.y0) / (r.y1 - r.y0);
        O.panel.value.set(a, s, o, c)
    }
    let Xt = {
        id: e.id,
        async load(e) {
            t = e, n = t.stage.info, i = new pe, a = new ce(30, 16 / 9, .05, 600), i.add(a), O.reduced.value = +!!t.reducedMotion, O.glitch.value = t.reducedMotion ? .35 : 1, U = t.params.get(`autoplay`) === `1`, W = t.params.get(`hold`) === `1`;
            let r = t.params.get(`world`),
                s = Number(t.params.get(`stage`)),
                c = _i.done ? 0 : _i.stage;
            r && Dn.includes(r) && (c = Dn.indexOf(r)), s >= 1 && s <= 8 && (c = s - 1), (c !== _i.stage || _i.done) && (_i.coins = 0), N = c, R = Ae = _i.coins, q = Dn[N] === `overload` ? `toon` : Dn[N], _e = sr(N), F = it();
            let u = e => {
                !oe || k || t.layer.hidden || (e.pointerType !== `mouse` || e.button === 0) && (e.target ? .closest ? .(`[data-ui], button, a, dialog, input, select, textarea`) || (e.pointerType === `mouse` && t.audio.unlock(), ut()))
            };
            window.addEventListener(`pointerdown`, u, {
                passive: !0
            });
            let d = -1e9,
                f = null,
                p = () => {
                    d = performance.now()
                },
                m = e => {
                    f = performance.now() - d < 800 ? e.target : null
                };
            window.addEventListener(`pointerdown`, p, {
                capture: !0,
                passive: !0
            }), window.addEventListener(`focusin`, m, !0), se.push(() => window.removeEventListener(`pointerdown`, u), () => window.removeEventListener(`pointerdown`, p, !0), () => window.removeEventListener(`focusin`, m, !0), t.input.onTap(() => {
                t.layer.hidden || t.audio.unlock()
            }), t.input.onKey(e => {
                if (t.layer.hidden || !oe || e.code !== `Space` && e.code !== `ArrowUp` && e.code !== `KeyW`) return;
                let n = e.target;
                if (!n ? .closest ? .(`input, textarea, select, dialog`)) {
                    if (n ? .closest ? .(`a, button, [data-ui]`)) {
                        if (e.code !== `Space` || n !== f) return;
                        n.blur ? .()
                    }
                    e.preventDefault(), t.audio.unlock(), e.repeat || ut()
                }
            })), t.audio.preloadShots([...mi.jump, ...mi.land, ...Dn.flatMap(e => mi.world(e)), ...[0, 1, 2, 3].flatMap(e => mi.hit(e)), ...mi.coin, ...mi.count, ...mi.rewind, ...mi.riser]), Object.assign(window, {
                __run: {
                    get ready() {
                        return oe
                    },
                    get phase() {
                        return M
                    },
                    get stage() {
                        return N + 1
                    },
                    get world() {
                        return Dn[N]
                    },
                    get style() {
                        return q
                    },
                    get x() {
                        return F
                    },
                    get y() {
                        return Ce
                    },
                    get coins() {
                        return Ae
                    },
                    coinTotal: ar,
                    get misses() {
                        return je
                    },
                    get stageMisses() {
                        return z
                    },
                    get cleared() {
                        return Me
                    },
                    get progress() {
                        return Gt()
                    },
                    get assist() {
                        return st()
                    },
                    get autoplay() {
                        return U
                    },
                    get course() {
                        return _e
                    },
                    switches: X,
                    loadLog: Y,
                    scene: i,
                    camera: a,
                    U: O,
                    jump: () => ut(),
                    go: e => Zt(e),
                    seek: e => {
                        if (M === `run`) {
                            Se = j - e * l, L = !0, J = !1;
                            for (let e of _e.blocks) e.x < Z(j) && e.st === `in` && (e.st = `clear`)
                        }
                    },
                    miss: () => {
                        M === `run` && vt(_e.blocks.find(e => e.st === `in` && e.x > F) ? ? null, F, Ce)
                    },
                    clear: () => {
                        if (M === `run`) {
                            Se = j - qn / Gn + .001, L = !0;
                            for (let e of _e.blocks) e.st === `in` && (e.st = `clear`)
                        }
                    },
                    goal: () => {
                        Zt(8), Se = j - qn / Gn + .05, L = !0, J = !1;
                        for (let e of _e.blocks) e.st = `clear`
                    },
                    auto: (e = !0) => {
                        U = e
                    },
                    set hold(e) {
                        W = e
                    },
                    lead: () => en(),
                    dbg: {
                        get R() {
                            return o
                        },
                        worlds: T,
                        drawWorld: (e, t) => Bt(T.get(e), t),
                        get target() {
                            return rt
                        }
                    }
                }
            }), await Mt(), k || qt()
        },
        enter(e) {
            _i.done || e === `shatter` || M === `goal` || M === `leap` || M === `done` ? ht(0) : mt(), J = !1, Ge = ``, w ? .show(!0)
        },
        update(e) {
            if (fe = e.dt, A += fe, de = e.clock, Number.isNaN(ge) && (ge = de, j = de, he = j), he = j, j += m(de - ge, 0, .1), ge = de, O.time.value = A, O.clock.value = de, O.beat.value = de / l, !oe || !c) return;
            if (e.active && e.input.p.clicked && e.input.consumeClick(), pt(), M === `wait` ? (Oe && (Oe = !1, Q()), e.active && gt()) : M === `ready` && (Oe && (Oe = !1, Q()), j >= ve && _t()), M === `run`) Wt();
            else if (M === `miss`) {
                Oe = !1;
                let e = A - Ne;
                F = B - .35 * (1 - Math.exp(-e / .07)), Ce = Math.max(0, V + 1.4 * e - 6.5 * e * e), I = 0, j >= H && yt()
            } else if (M === `wait` || M === `ready`) F = it(), I = 0, Ce = at(j);
            else if (M === `goal`) {
                Oe = !1;
                let e = A - Pe;
                I = Gn * Math.max(0, 1 - e / .5), F += I * fe, Ce = 0;
                let n = m((A - Fe) / le);
                O.energy.value = W ? Math.min(n, .75) : n, !W && A - Fe >= 1.3793103448275863 && (M = `leap`, Ie = A, Qe = t.reducedMotion ? 0 : 1.4, t.audio.play(mi.jump, {
                    quantize: `none`
                }))
            } else M === `leap` && A - Ie > li && (M = `done`, _i.done = !0);
            M === `done` && !Re && e.active && (Re = !0, t.advance()), Te > Ee && j - Te >= .62 && (Ee = Te + Jn, (M === `run` || M === `ready` || M === `wait`) && (t.audio.play(mi.land, {
                quantize: `none`
            }), Tt(4, 0), dt(1, vi.set(F + .5, .95, .4)), j - De < .16 && M === `run` && (De = -10, Q()))), O.air.value = m((j - Te) / Jn);
            let r = Math.floor(de / l);
            if (r !== Ze) {
                Ze = r;
                let e = I > 8.4 ? l / 2 : l;
                e !== Xe && (Xe = e)
            }
            if (Ye = de / Xe, O.speed.value = 1, Dn[N] === `overload`) {
                let e = Math.floor(de / (t.reducedMotion ? le : l));
                if (e !== Je) {
                    Je = e;
                    let t = On[Math.floor(_(e * 3.7) * On.length)];
                    t === q && (t = On[(On.indexOf(t) + 1) % On.length]), q = t
                }
            }
            M !== `goal` && (O.energy.value = M === `leap` || M === `done` ? 1 : Dn[N] === `charge` ? .12 : 0), O.wipeP.value = m((A - G) / wn, 0, 1), O.wipeType.value = K, O.flash.value = t.reducedMotion ? 0 : .35 * Math.exp(-(A - Ve) / .06) + (M === `leap` ? .35 * Math.exp(-(A - Ie) / .07) : 0), O.hitAge.value = A - Ve, Qe = s(Qe, 0, 6, fe), O.shake.value = Qe;
            for (let e = 0; e < 24; e++) Dt[e] >= 1 || (Dt[e] += fe / (Ot[e] ? .45 : .6), At[e * 3] += jt[e * 3] * fe, At[e * 3 + 1] += jt[e * 3 + 1] * fe, At[e * 3 + 2] += jt[e * 3 + 2] * fe, jt[e * 3 + 1] *= Math.exp(-fe * 2));
            if (Ht(), $(), Ut(), Rt(T.get(q)), w) {
                if (w.tick({
                        stage: N + 1,
                        stages: 8,
                        coins: Ae,
                        glitch: Dn[N] === `glitch` || Dn[N] === `overload`,
                        energy: O.energy.value,
                        clock: de,
                        time: A,
                        bar: 24 + Math.floor(de / le) % 76
                    }), w.show(e.arrive > .3 && e.leave < .5), Jt(), Dn[N] === `ascii`) {
                    let e = Math.floor((A - G) / b),
                        t = hi.join(`
`),
                        n = t.slice(0, m(e * 6, 0, t.length)).split(`
`),
                        r = Math.min(99, Math.floor(m((F - it()) / qn) * 100));
                    n.length === 4 && (n[3] = hi[3] + ` ` + `█`.repeat(Math.floor(r / 6)) + `░`.repeat(Math.max(0, 16 - Math.floor(r / 6))) + ` ${r}%`), w.terminal(n)
                }
                ne ? .update(A, Dn[N] === `overload` && M === `run`, n.portrait)
            }
            qt()
        },
        render(e) {
            rt = e;
            let n = t.renderer;
            if (!oe || !o || !c) {
                n.setRenderTarget(e), n.setClearColor(0, 1), n.clear(), n.setRenderTarget(null);
                return
            }
            Pt(), Ke && (Ke = !1, o.capture(e));
            let r = T.get(q);
            q !== qe && (qe = q, Rt(r)), Bt(r, e)
        },
        layout(e) {
            n = e, O.portrait.value = +!!e.portrait, w ? .layout(e.portrait);
            for (let t of T.values()) t.layout ? .(e.portrait);
            Yt(e), J = !1
        },
        exit() {
            t.audio.bed(1, .2)
        },
        sleep() {
            for (let e of Ft()) e.dispose()
        },
        wake() {
            if (o) {
                Pt();
                for (let e of Ft()) t.renderer.initRenderTarget(e)
            }
        },
        dispose() {
            k = !0;
            for (let e of se) e();
            It()
        },
        hints: () => [],
        cursor: () => `pointer`,
        hud: () => q === `toon` || q === `bit8` && n.portrait ? `dark` : `light`
    };

    function Zt(e) {
        let n = typeof e == `number` ? e - 1 : Dn.indexOf(e);
        if (n < 0 || n >= 8 || !oe) return;
        Ue = [];
        let r = n === N;
        N = n, _i.stage = n, Ct(n, r && M === `run`), _e = sr(n), R = Ae, z = 0, F = it(), Ce = 0, Te = Ee = De = -10, Se = j, ze = A, Be = A, L = !0, ke = !1, M = `run`, Re = !1, J = !1, Dn[n] === `overload` && ne ? .start(A), t.audio.bed(1, .08)
    }

    function Qt(e) {
        e.project(a);
        let t = n,
            r = (e.x * .5 + .5) * t.cssW,
            i = (.5 - e.y * .5) * t.cssH;
        return [(r - t.left) / t.u, (i - t.top) / t.u]
    }

    function $t(e, t, n, r) {
        if (!w) return;
        let [i, a] = Qt(yi.set(e, t, 0));
        w.pop(n, i, a, r)
    }

    function en() {
        let e = 0;
        for (let t = .5; t < 60 && (vi.set(F + t, .3, 0).project(a), !(Math.abs(vi.x) > .98 || Math.abs(vi.y) > .98 || vi.z > 1)); t += .25) e = t;
        return e
    }
    return Xt
}
export {
    Ei as
    default
};