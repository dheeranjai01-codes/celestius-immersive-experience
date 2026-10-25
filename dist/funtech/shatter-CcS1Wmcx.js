import {
    $t as e,
    An as t,
    At as n,
    B as r,
    Bt as i,
    Ct as a,
    Dn as o,
    Dt as s,
    Et as c,
    Fn as l,
    Ft as u,
    G as d,
    H as f,
    Ht as p,
    I as m,
    J as h,
    Jt as g,
    Lt as _,
    M as v,
    On as ee,
    Ot as y,
    P as b,
    Pt as x,
    St as S,
    Tt as te,
    U as C,
    Vn as ne,
    Wt as w,
    Xt as re,
    Y as T,
    Yn as ie,
    Z as E,
    _r as D,
    an as O,
    at as ae,
    bn as oe,
    bt as k,
    dn as se,
    hn as ce,
    in as le,
    it as A,
    jt as ue,
    kn as de,
    lt as fe,
    m as pe,
    n as me,
    or as he,
    qn as ge,
    qt as _e,
    r as ve,
    rr as j,
    s as ye,
    sr as be,
    t as M,
    un as xe,
    ut as N,
    vr as P,
    vt as F,
    w as I,
    xt as Se,
    yr as Ce,
    yt as L
} from "./post-DJ5SZDIO.js";
import {
    d as we
} from "./index-BSu4tWCh.js";
import {
    a as Te,
    c as Ee,
    i as R,
    l as De,
    o as Oe,
    r as ke,
    s as Ae
} from "./kit-D_lqBZ3L.js";
import {
    a as z,
    i as je,
    o as Me,
    r as Ne,
    s as Pe,
    t as Fe
} from "./shards-Bvh-kNQZ.js";
import {
    a as B,
    i as V,
    n as Ie,
    o as H,
    r as U,
    s as Le,
    t as Re
} from "./plates-CXqkOo0_.js";
import {
    i as ze,
    n as Be,
    r as Ve,
    t as He
} from "./white-ClVCx_SB.js";
var Ue = [`.ui-top`, `#hints`, `#gate`],
    W = `st-shatter-hud`,
    We = !1;

function Ge() {
    if (We) return;
    We = !0;
    let e = document.createElement(`style`);
    e.textContent = `
  body.${W} .ui-top, body.${W} .ui-logo, body.${W} .ui-logo-ring, body.${W} #hints, body.${W} #gate { opacity: 0 !important; transition: none !important; }
  body.${W} .ui-logo { pointer-events: none !important; }
  body.${W}-in .ui-top, body.${W}-in .ui-logo, body.${W}-in #gate { transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) !important; }`, document.head.appendChild(e)
}

function Ke(e) {
    Ge();
    let t = document.body;
    e ? (t.classList.remove(W + `-in`), t.classList.add(W)) : t.classList.contains(W) && (t.classList.add(W + `-in`), t.classList.remove(W), window.setTimeout(() => t.classList.remove(W + `-in`), 1200))
}

function qe(e) {
    let t = e.match(/rgba?\(([^)]+)\)/);
    if (!t) return null;
    let n = t[1].split(/[\s,/]+/).filter(Boolean).map(Number);
    return [n[0], n[1], n[2], n.length > 3 ? n[3] : 1]
}

function Je(e, t, n, r, i, a) {
    let o = Math.max(0, Math.min(a, r / 2, i / 2));
    e.beginPath(), e.moveTo(t + o, n), e.lineTo(t + r - o, n), e.arcTo(t + r, n, t + r, n + o, o), e.lineTo(t + r, n + i - o), e.arcTo(t + r, n + i, t + r - o, n + i, o), e.lineTo(t + o, n + i), e.arcTo(t, n + i, t, n + i - o, o), e.lineTo(t, n + o), e.arcTo(t, n, t + o, n, o), e.closePath()
}

function Ye(e, t = {}) {
    let n = e.width,
        r = e.height,
        i = e.getContext(`2d`);
    i.setTransform(1, 0, 0, 1, 0, 0), t.clear !== !1 && i.clearRect(0, 0, n, r), i.setTransform(n / Math.max(1, innerWidth), 0, 0, r / Math.max(1, innerHeight), 0, 0);
    let a = 0,
        o = (e, t) => {
            let n = getComputedStyle(e);
            if (n.display === `none` || n.visibility === `hidden`) return;
            let r = t * parseFloat(n.opacity || `1`);
            if (r < .01) return;
            let s = e.getBoundingClientRect();
            if (s.width <= 0 && s.height <= 0 && e.children.length === 0) return;
            let c = qe(n.backgroundColor),
                l = parseFloat(n.borderTopLeftRadius) || 0;
            c && c[3] > .01 && s.width > 0 && s.height > 0 && (i.globalAlpha = r * c[3], i.fillStyle = `rgb(${c[0]},${c[1]},${c[2]})`, Je(i, s.left, s.top, s.width, s.height, l), i.fill(), a++);
            let u = parseFloat(n.borderTopWidth) || 0,
                d = qe(n.borderTopColor);
            u > 0 && d && d[3] > .01 && n.borderTopStyle !== `none` && (i.globalAlpha = r * d[3], i.strokeStyle = `rgb(${d[0]},${d[1]},${d[2]})`, i.lineWidth = u, Je(i, s.left + u / 2, s.top + u / 2, s.width - u, s.height - u, l), i.stroke(), a++);
            let f = qe(n.color) ? ? [255, 255, 255, 1];
            for (let t of e.childNodes) {
                if (t.nodeType !== Node.TEXT_NODE) continue;
                let e = t.textContent ? ? ``;
                if (!e.trim()) continue;
                let o = document.createRange();
                o.selectNodeContents(t);
                let s = o.getClientRects();
                if (!s.length) continue;
                let c = s[0];
                i.globalAlpha = r * f[3], i.fillStyle = `rgb(${f[0]},${f[1]},${f[2]})`, i.font = `${n.fontStyle} ${n.fontWeight} ${n.fontSize} ${n.fontFamily}`, i.letterSpacing = n.letterSpacing === `normal` ? `0px` : n.letterSpacing, i.textBaseline = `middle`, i.textAlign = `left`;
                let l = e.split(`
`);
                l.length > 1 && s.length >= l.length ? l.forEach((e, t) => i.fillText(e, s[t].left, s[t].top + s[t].height / 2)) : i.fillText(e, c.left, c.top + c.height / 2), a++
            }
            for (let t of e.children) o(t, r)
        },
        s = t.roots ? ? Ue.flatMap(e => [...document.querySelectorAll(e)]);
    for (let e of s) o(e, 1);
    return i.globalAlpha = 1, a
}
var G = null;

function Xe() {
    if (G) return G;
    let e = document.querySelector(`#ui-logo svg`);
    if (!e) return null;
    let t = e.cloneNode(!0);
    t.setAttribute(`xmlns`, `http://www.w3.org/2000/svg`), t.setAttribute(`width`, `895`), t.setAttribute(`height`, `308`), t.querySelector(`[mask]`) ? .setAttribute(`fill`, `#fff`);
    let n = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(t)], {
        type: `image/svg+xml`
    }));
    return G = new Image, G.onload = () => URL.revokeObjectURL(n), G.src = n, G
}

function Ze(e) {
    let t = e.getContext(`2d`);
    t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, e.width, e.height);
    let n = document.getElementById(`ui-logo`),
        r = Xe();
    if (!n || !r || !r.complete || !r.naturalWidth) return null;
    let i = getComputedStyle(n);
    if (i.display === `none` || i.visibility === `hidden` || parseFloat(i.opacity || `1`) < .01) return null;
    let a = n.getBoundingClientRect(),
        o = qe(i.color);
    if (a.width <= 0 || a.height <= 0 || !o) return null;
    t.drawImage(r, 0, 0, e.width, e.height);
    let s = Math.max(1, innerWidth),
        c = Math.max(1, innerHeight);
    return {
        rect: [a.left / s, 1 - a.bottom / c, a.right / s, 1 - a.top / c],
        ink: [o[0] / 255, o[1] / 255, o[2] / 255]
    }
}
var Qe = Math.PI * 2,
    $e = y,
    et = $e.instanceIndex,
    tt = $e.instancedBufferAttribute;

function nt() {
    return {
        imp: S(new D(.5, .46)),
        aspect: S(16 / 9),
        rr: S(0),
        rc: S(0),
        crack: S(1),
        haze: S(0),
        flash: S(0),
        envK: S(0),
        fall: S(0),
        burst: S(0),
        tFly: S(0),
        plRev: S(new D(0, 0)),
        impW: S(new P(0, 0, -2)),
        right: S(new P(1, 0, 0)),
        up: S(new P(0, 1, 0)),
        time: S(0)
    }
}

function rt(e, t) {
    let {
        w: n,
        h: r,
        ix: i,
        iy: a
    } = e, o = t.getContext(`2d`), s = t.width, c = t.height, l = s / n, u = c / r;
    o.setTransform(1, 0, 0, 1, 0, 0), o.globalCompositeOperation = `source-over`, o.fillStyle = `#000`, o.fillRect(0, 0, s, c), o.lineCap = `round`, o.lineJoin = `round`, o.globalCompositeOperation = `lighter`;
    let d = Math.max(s, c) / 1536 * 1.7;
    for (let t of e.edges) {
        if (t.keep === !1) continue;
        let e = t.radial > .62;
        if (!z(t.a, t.b, i, a, 9)) continue;
        let n = Math.exp(-t.dMin / .18),
            r = d * t.w * (.7 + 1.5 * n) * (e ? 1 : .8),
            s = Math.round(255 * Math.min(1, t.br * (.75 + .5 * n))),
            c = t => e ? `rgba(${s},0,0,${t})` : `rgba(0,${s},0,${t})`;
        o.strokeStyle = c(.18), o.lineWidth = r * 3.2, o.beginPath(), o.moveTo(t.a[0] * l, t.a[1] * u), o.lineTo(t.b[0] * l, t.b[1] * u), o.stroke(), o.strokeStyle = c(1), o.lineWidth = r, o.beginPath(), o.moveTo(t.a[0] * l, t.a[1] * u), o.lineTo(t.b[0] * l, t.b[1] * u), o.stroke()
    }
    o.globalCompositeOperation = `source-over`
}

function it(e) {
    let t = (e, t, n) => {
        let r = Math.sin(e * 127.1 + t * 311.7 + n * 74.7) * 43758.5453;
        return r - Math.floor(r)
    };
    for (let n of e.edges) n.keep = n.radial > .62 || t(n.i, n.j, 5) < .9 * Math.exp(-n.dMin / .22) + .05
}
var K = e => d(F(e.mul(12.9898)).mul(43758.5453)),
    q = S(V(`web`, 2300, .9)),
    J = S(B(`web`)),
    at = S(V(`dust`, 3e3, -.7)),
    ot = S(B(`dust`)),
    st = S(V(`burst`, 1900, .3)),
    Y = S(B(`burst`));

function ct(e, t, n, i, a, o) {
    return I(() => {
        let l = t.uvp,
            u = te(l.x, C(1).sub(l.y)),
            d = u.sub(e.imp).mul(te(e.aspect, 1)),
            p = h(d),
            g = t.sid,
            _ = C(1).sub(L(e.rc.sub(.02), e.rc.add(.02), t.cellv)),
            ee = _.max(C(1).sub(L(C(0), e.rr, t.cellv)).mul(.3).mul(k(t.cellv, e.rr))),
            y = K(g.add(1.3)).mul(Qe),
            x = K(g.add(7.1)).mul(.9).add(.45),
            S = f(p.negate().div(.12)).mul(1.6).add(1),
            ne = te(m(y), F(y)).mul(x).mul(S).mul(9e-4).mul(ee).mul(C(1).sub(e.fall)),
            w = A(v.sub(fe)),
            re = A(t.normal),
            ie = re.mul(k(C(0), r(re, w)).mul(2).sub(1)),
            D = b(r(ie, w), 0, 1),
            O = ie.xy,
            ae = O.mul(.0055).mul(e.fall),
            oe = H(d, q, J),
            se = H(d, at, ot),
            ce = U(o.web, oe),
            le = U(o.dust, se),
            ue = Le(e.plRev.x, p),
            de = Le(e.plRev.y, p).mul(.85),
            pe = C(1).sub(e.fall),
            me = T(ce.mul(ue), le.mul(de)).mul(pe),
            he = Ie(o.web, oe, q, J).mul(ue).add(Ie(o.dust, se, at, ot).mul(de)).mul(pe),
            ge = ne.add(ae).add(te(he.x, he.y.negate()).mul(.006)),
            _e = ne.mul(C(.5).add(ee.mul(.5))).add(O.mul(N(C(1).sub(D), 2).mul(3).add(1)).mul(9e-4).mul(e.fall)),
            ve = c(n(l.add(ge).add(_e)).r, n(l.add(ge)).g, n(l.add(ge).sub(_e)).b),
            j = c(i(ve, l.add(ge))).toVar(),
            ye = A(c(ne.x.mul(60), ne.y.mul(-60), 1)),
            be = A(E(ye, ie, e.fall)),
            M = w.negate().reflect(be),
            xe = C(.04).add(N(C(1).sub(b(r(be, w), 0, 1)), 5).mul(.96)),
            P = A(c(-.42, .5, .76)),
            I = L(.82, .94, r(M, P)),
            Ce = L(.955, .99, r(M, A(c(.62, .18, .76)))),
            we = E(c(.05, .05, .055), c(.12, .12, .13), L(-.4, .6, M.y)).add(c(1, .96, .9).mul(I.mul(1.4))).add(c(.66, .74, 1).mul(Ce.mul(.7)));
        j.addAssign(we.mul(xe).mul(e.envK).mul(_).mul(C(1).sub(e.fall)));
        let Te = N(T(r(M, P), 0), 600).mul(_).mul(K(g.add(3.7)).add(.25));
        j.addAssign(c(1, .96, .9).mul(Te).mul(.98).mul(C(1).sub(e.fall)));
        let Ee = Se(a, u),
            R = L(e.rr, e.rr.sub(.01), p),
            De = L(e.rc, e.rc.sub(.01), p),
            Oe = T(Ee.r.mul(R), Ee.g.mul(De)),
            ke = te(.0011, 0),
            Ae = Se(a, u.add(ke)),
            z = Se(a, u.sub(ke)),
            je = T(Ae.r.mul(R), Ae.g.mul(De)),
            Me = T(z.r.mul(R), z.g.mul(De)),
            Ne = F(r(M, c(23, 19, 11)).mul(6).add(K(g.add(5.3)).mul(41)).add(e.time.mul(3))).mul(.5).add(.5),
            Pe = c(.92, .97, 1).mul(Oe).mul(C(.55).add(Ne.mul(.9))).mul(1.5).add(c(je.sub(Oe), 0, Me.sub(Oe)).mul(.8));
        j.addAssign(Pe.mul(e.crack).mul(C(1).sub(ue.mul(.4))));
        let Fe = A(c(he.x.mul(-6), he.y.mul(6), 1)),
            B = N(T(r(w.negate().reflect(Fe), P), 0), 36),
            V = L(.03, .45, me);
        j.assign(E(j, j.mul(.7).add(c(.05, .055, .06)), V.mul(.45))), j.addAssign(c(.9, .95, 1).mul(N(me, 1.25).mul(1.3).mul(C(.7).add(Ne.mul(.6))).add(B.mul(V).mul(3 * 1.4)))), j.addAssign(c(.85, .9, 1).mul(e.haze).mul(f(p.mul(-14))).mul(C(1).sub(e.fall))), j.addAssign(c(.9, 1, .95).mul(e.flash).mul(f(p.mul(-4))));
        let Re = c(.45, .62, .58).mul(.72),
            ze = E(j, Re, t.side),
            Be = E(c(.62), c(.97), L(-.4, .6, M.y)).add(c(.5).mul(I)),
            Ve = m(c(0, .33, .67).add(xe.mul(1.6)).add(D.mul(.4)).mul(Qe)).mul(.5).mul(C(1).sub(t.side)),
            He = E(ze, Be, b(xe.mul(.9).mul(E(C(1), C(.45), t.side)), 0, 1)).add(Ve.mul(xe).mul(.25)).add(c(1, .98, .95).mul(N(T(r(M, P), 0), 300).mul(1.2))).add(c(.95, .97, 1).mul(N(T(r(M, P), 0), 14).mul(.22))).add(c(.75, 1, .95).mul(t.side).mul(.12)).add(c(.85, .92, 1).mul(N(T(ce.mul(Le(C(1.4), p)), le.mul(Le(C(.62), p)).mul(.9)), 1.2).mul(1.1)));
        return s(b(E(j, He, e.fall), 0, 1), 1)
    })()
}

function lt(e, t, n, r) {
    let i = te(t.x, C(1).sub(t.y)).sub(e.imp).mul(te(n, 1));
    return L(.14, .85, U(r, H(i, st, Y))).mul(e.burst)
}

function ut(e, n) {
    let i = new Float32Array((n + 7) * 4),
        o = 9,
        l = () => (o = o * 16807 % 2147483647, o / 2147483647);
    for (let e = 0; e < n + 7; e++) i[e * 4] = l(), i[e * 4 + 1] = l(), i[e * 4 + 2] = l(), i[e * 4 + 3] = l();
    let u = new t(i, 4),
        d = new O({
            transparent: !0,
            depthWrite: !1,
            depthTest: !1
        });
    d.name = `shatter-glitter`, d.blending = 5, d.blendSrc = 201, d.blendDst = 201, d.blendSrcAlpha = 200, d.blendDstAlpha = 201, d.premultipliedAlpha = !1;
    let p = tt(u),
        h = k(C(n).sub(.5), C(et)),
        g = T(e.tFly.sub(p.w.mul(.02)), 0),
        _ = p.x.mul(Qe),
        v = p.y.mul(3.4).add(.3),
        ee = p.z.mul(.16),
        y = e.right.mul(m(_)).add(e.up.mul(F(_))),
        x = e.impW.add(y.mul(ee)).add(y.mul(v).mul(g)).add(c(0, 0, C(1).add(p.w.mul(4.5))).mul(g)).add(c(0, C(-9.8 * .2), 0).mul(g.mul(g))),
        S = C(et).sub(n).div(7).mul(Qe).add(.4),
        te = A(e.right.mul(m(S)).add(e.up.mul(F(S).mul(.7))).add(c(0, 0, .6))),
        w = e.impW.add(te.mul(C(.05).add(e.tFly.mul(1.6))));
    d.positionNode = E(x, w, h), d.scaleNode = E(C(.0075).mul(F(e.time.mul(90).add(p.x.mul(40))).mul(.4).add(1)), C(.2).add(p.z.mul(.16)).mul(.6).add(e.tFly.mul(1.3)), h), d.colorNode = I(() => {
        let t = a().sub(.5).mul(2),
            n = E(f(r(t, t).mul(-9)), f(r(t, t).mul(-4)), h),
            i = b(C(1.2).sub(e.tFly.div(.75)), 0, 1).mul(k(e.tFly, .9)),
            o = C(.45).mul(b(C(1).sub(e.tFly.div(.6)), 0, 1)).mul(b(e.tFly.div(.01), 0, 1)),
            l = E(c(.92, .99, 1).mul(p.y.mul(2).add(1.2)).mul(i), c(.87, .92, 1).mul(.22).mul(o), h);
        return s(l.mul(n).mul(k(1e-4, e.tFly)), 0)
    })();
    let re = new ie(1, 1),
        D = new ne(re, d);
    return D.count = n, D.frustumCulled = !1, D.renderOrder = 4, {
        mesh: D,
        material: d,
        dispose() {
            d.dispose(), re.dispose()
        }
    }
}
var dt = {
        shatter: [`page_shatter`],
        pi: [`pi`],
        land: [`land`],
        hop: [`jump`]
    },
    ft = .45,
    pt = [.5, .46],
    mt = 2.8,
    ht = 2,
    gt = 40,
    _t = (e, t, n) => {
        let r = Math.sin(e * 127.1 + t * 311.7 + n * 74.7) * 43758.5453;
        return r - Math.floor(r)
    },
    X = null,
    vt = !1;

function yt(e) {
    if (!X) {
        let e = document.createElement(`canvas`);
        e.width = e.height = 128;
        let t = e.getContext(`2d`),
            n = t.createImageData(128, 128),
            r = new Uint32Array(n.data.buffer),
            i = 7,
            a = () => (i = i * 16807 % 2147483647, i / 2147483647);
        for (let e = 0; e < 16384; e++) {
            let t = 40 + a() * 150 | 0;
            r[e] = 4278190080 | Math.min(255, t * 1.02 | 0) << 16 | t << 8 | t
        }
        t.putImageData(n, 0, 0);
        let o = document.createElement(`canvas`);
        o.width = 960, o.height = 540;
        let s = o.getContext(`2d`);
        s.fillStyle = s.createPattern(e, `repeat`), s.fillRect(0, 0, 960, 540), s.fillStyle = `rgba(0,0,0,0.35)`, s.fillRect(0, 0, 960, 540), X = o
    }
    if (e && !vt) {
        vt = !0;
        let e = X.getContext(`2d`);
        e.fillStyle = `#39ff5a`, e.font = `700 34px ui-monospace, Menlo, monospace`, e.textBaseline = `top`, e.fillText(`CH 31  ▶▶  NO SIGNAL`, 48, 44), e.fillText(`FUNKUN ×3   FUN ×∞`, 48, 470), e.fillRect(620, 482, 18, 22), e.fillRect(644, 482, 18, 22), e.fillRect(668, 482, 18, 22), e.globalAlpha = .3, e.fillRect(692, 482, 18, 22), e.fillRect(716, 482, 18, 22), e.globalAlpha = 1
    }
    return X
}
var Z = null,
    bt = e => e <= 0 ? e : (Z ? ? = R([
        [.03, 1],
        [.1, .3],
        [.55, .3],
        [.85, 1]
    ], {
        t0: 0,
        t1: 6
    })).tau(e),
    xt = .764,
    St = 1.25,
    Ct = () => new Promise(e => requestAnimationFrame(() => e()));

function wt(t) {
    let d, f, m = !1,
        h = !1,
        v = [],
        y = [],
        T, O, A, fe, N, F, I, L, R, z, B, V, Ie, H, U = null,
        Le = null,
        Ue, W, We, Ge, qe, Je, G, Qe, $e, et = [],
        tt = new me,
        K = nt(),
        q, J, at = null,
        ot, st, Y = {
            intact: S(1),
            hudOn: S(0),
            crackR: S(0),
            impact: S(0),
            flash: S(0),
            fade: S(0),
            logoOn: S(0),
            logoRect: S(new Ce(0, 0, 1, 1)),
            logoInk: S(new ce(1, 1, 1)),
            impA: S(new ce(.067, .067, .067)),
            impB: S(new ce(.902, 1, 0)),
            aspect: S(16 / 9),
            pageFade: S(1),
            copyFlip: S(1)
        },
        X = `armed`,
        Z = 0,
        wt = 0,
        Tt = !1,
        Et = !1,
        Dt = 0,
        Ot = 1e9,
        kt = 1e9,
        Q = 1e9,
        At = 1e9,
        jt = -10,
        Mt = -10,
        Nt = -10,
        Pt = null,
        Ft = 0,
        It = new D(.5, .5),
        Lt = 0,
        Rt = 0,
        zt = -10,
        Bt = 2,
        Vt = [0, 0],
        Ht = !1,
        Ut = !1,
        Wt = !0,
        Gt = !1,
        Kt = !1,
        qt = !1,
        Jt = 1e9,
        Yt = !1,
        Xt = ``;
    async function Zt() {
        let t = d.renderer,
            n = d.perf.settings,
            i = d.assets.lease();
        v.push(i), T = new be, T.background = new ce(1, 1, 1), O = new ge(30, 16 / 9, .05, 80);
        let u = await He(t, we(n));
        if (h) {
            u.dispose();
            return
        }
        v.push(u);
        let f = new oe(16777215, 1.6),
            p = new P(-2.2, 3.6, 2.4);
        f.position.copy(p), f.target.position.set(0, .4, 0), T.add(f, f.target), T.add(new de(16777215, 15790318, .9)), F = Ve({
            dir: p.clone().normalize(),
            center: new P(0, .4, 0),
            halfSize: 1.6,
            distance: 6,
            res: n.tier === `low` ? 512 : 1024
        }), v.push(F), I = Be(4);
        let g = ze({
            shadow: F,
            ao: I,
            shadowAmt: S(.3)
        });
        T.add(g.mesh), v.push(g);
        let [_, y, x, w] = await Promise.all([Ee(i, {
            lod: n.lod,
            detail: n.detail,
            env: u.texture,
            envIntensity: 1
        }), Re(i, `web`), Re(i, `dust`), Re(i, `burst`)]);
        if (A = _, ot = {
                web: y,
                dust: x,
                burst: w
            }, v.push(y, x, w), h) {
            A.dispose();
            return
        }
        fe = new o, N = new o, fe.add(N), N.position.y = -.45, N.add(A.object), T.add(fe), A.shadowProxies(2), L = new be, R = new ge(gt, 16 / 9, .05, 50);
        let re = { ...M,
            depthBuffer: !1,
            generateMipmaps: !1,
            minFilter: l,
            magFilter: l
        };
        z = new j(16, 16, re), v.push(z), B = document.createElement(`canvas`);
        let D = Math.min(2, Math.max(1, t.domElement.width / Math.max(1, innerWidth)));
        B.width = Math.min(3840, Math.round(Math.max(innerWidth, 640) * D)), B.height = Math.min(3840, Math.round(Math.max(innerHeight, 360) * D)), B.getContext(`2d`).clearRect(0, 0, B.width, B.height), V = new se(B), V.colorSpace = he, V.generateMipmaps = !1, V.minFilter = l, v.push(V), Xe(), Ie = document.createElement(`canvas`), Ie.width = 512, Ie.height = 176, Ie.getContext(`2d`).clearRect(0, 0, 512, 176), H = new se(Ie), H.generateMipmaps = !1, H.minFilter = l, v.push(H), Je = new se(yt(!1)), Je.colorSpace = he, v.push(Je), q = document.createElement(`canvas`); {
            let e = n.tier === `low` ? 1024 : 1536,
                t = d.stage.info.aspect || 16 / 9;
            q.width = t >= 1 ? e : Math.round(e * t), q.height = t >= 1 ? Math.round(e / t) : e
        }
        q.getContext(`2d`).fillRect(0, 0, q.width, q.height), J = new se(q), J.colorSpace = ``, J.flipY = !1, J.generateMipmaps = !1, J.minFilter = l, v.push(J);
        for (let e of [V, H, Je, J]) e.userData.reupload = !0;
        let ue = new e,
            me = a();
        qe = Se(z.texture, te(me.x, E(me.y, C(1).sub(me.y), Y.copyFlip))), ue.colorNode = qe.rgb, We = new le(ue);
        let _e = new e;
        _e.colorNode = Se(Je).rgb, Ge = new le(_e), v.push(ue, _e);
        let Ce = (e, t) => {
                let n = Y.logoRect,
                    r = t.sub(n.xy).div(n.zw.sub(n.xy)),
                    i = k(0, r.x).mul(k(r.x, 1)).mul(k(0, r.y)).mul(k(r.y, 1)),
                    a = Se(H, r).a.mul(i).mul(Y.logoOn),
                    o = E(e, Y.logoInk, a),
                    s = Se(V, t);
                return E(o, s.rgb, s.a.mul(Y.hudOn))
            },
            De = e => Ce(Se(z.texture, e).rgb, e);
        G = je(1024), v.push(G);
        let Ae = Ne(G);
        Ue = new e({
            side: 2
        }), Ue.name = `shatter-glass`, Ue.positionNode = Ae.position, Ue.colorNode = ct(K, Ae, e => Se(z.texture, e).rgb, Ce, J, ot), st = ut(K, n.tier === `low` ? 300 : n.tier === `medium` ? 500 : 700), st.mesh.count = (n.tier === `low` ? 300 : n.tier === `medium` ? 500 : 700) + (n.tier === `high` ? 7 : 0), L.add(st.mesh), v.push(st), Le = new ne(new xe, Ue), Le.frustumCulled = !1, L.add(Le);
        let Me = new e;
        if (Me.colorNode = De(a()), W = new ne(new ie(1, 1), Me), W.position.z = -2, L.add(W), v.push(Me, W.geometry), await Ct(), h || (nn(.5, .5, 16 / 9, !0), Qt = (e, t, n) => nn(e, t, n), await Ct(), h)) return;
        let Pe = ae(T, O, {
            samples: n.msaa
        });
        et.push(Pe);
        let Fe = Pe.getTextureNode();
        $e = ye(Fe, .25, .3, 1.2), $e.setResolutionScale(n.bloom * (d.backend === `webgl2` && n.tier === `high` ? .5 : 1)), tt.grade({
            contrast: 1.02,
            saturation: 1,
            vignette: 0,
            grain: .022
        });
        let U = ke(c(Fe).add($e), tt, C(1), a(), C(1)),
            Ke = ae(L, R, {
                samples: n.msaa
            });
        et.push(Ke);
        let Ye = Ke.getTextureNode();
        Y.copyFlip.value = 1;
        let Ze = (() => {
            let e = a(),
                t = U.rgb.mul(C(1).sub(Ye.a)).add(Ye.rgb);
            t = E(t, U.rgb, Y.fade);
            let n = lt(K, e, Y.aspect, ot.burst);
            t = t.add(c(1).sub(t).mul(n));
            let i = t.max(c(0)).pow(c(1 / 2.2)),
                o = r(i, c(.2126, .7152, .0722)),
                l = E(c(Y.impA), c(Y.impB), k(.55, o)).pow(c(2.2));
            return t = E(t, l, Y.impact), t = E(t, c(1), Y.flash), s(b(t, 0, 1), 1)
        })();
        Qe = new ve(t, Ze);
        let nt = new j(64, 64, { ...M,
            depthBuffer: !1
        });
        Y.intact.value = 0, Q = -1, Z = .5, ln(.016), K.tFly.value = .2, st.mesh.visible = !0, await Oe(t, [V, H, Je, J, ot.web, ot.dust, ot.burst, ...Te(A.mats)], () => h);
        let rt = new j(16, 16, {
            type: ee,
            depthBuffer: !1
        });
        qe.value = rt.texture;
        for (let e of [...A.mats, g.material, Ue]) e.transparent || (e.userData.buildAsync = !0);
        let it = e => d.own ? d.own(e) : e();
        await pe(t, () => it(() => {
            F.render(t, T), Qe.renderTo(nt);
            let e = t.getRenderTarget();
            t.setRenderTarget(z), We.render(t), Ge.render(t), t.setRenderTarget(e)
        }), {
            cancelled: () => h,
            maxFirstDraws: d.backend === `webgl2` ? 1 : void 0
        }), qe.value = z.texture, nt.dispose(), rt.texture.dispose(), rt.dispose(), rn(), m = !0
    }
    let Qt = () => {},
        $t = (e, t, n) => ({
            w: n,
            h: 1,
            ix: e * n,
            iy: t,
            seed: 3207,
            rays: 14,
            r0: .035,
            growth: 1.42,
            branch: [2, 4, 7],
            jitterR: .5,
            core: 9
        }),
        $ = null;

    function en(e) {
        if (!$ || $.fr) return;
        let t = performance.now(),
            n = $.gen.next();
        for (; !n.done && performance.now() - t < e;) n = $.gen.next();
        n.done && ($.fr = n.value), performance.measure(`shatter · fracture`, {
            start: t,
            end: performance.now()
        })
    }

    function tn() {
        if (!$ ? .fr || at === $.fr) return;
        let e = performance.now();
        it($.fr), rt($.fr, q), J.needsUpdate = !0, at = $.fr, performance.measure(`shatter · web`, {
            start: e,
            end: performance.now()
        })
    }

    function nn(e, t, r, i = !1) {
        U ? .dispose();
        let a = r,
            o;
        i ? o = Pe({
            w: a,
            h: 1,
            ix: e * a,
            iy: t,
            seed: 3207,
            rays: 5,
            r0: .3,
            growth: 3,
            branch: [],
            core: 0
        }) : ((!$ || $.ix !== e || $.iy !== t || $.aspect !== r) && ($ = {
            ix: e,
            iy: t,
            aspect: r,
            gen: Me($t(e, t, r)),
            fr: null
        }), en(1 / 0), tn(), o = $.fr, $ = null);
        let s = 4 * Math.tan(gt * n / 2),
            c = s * r,
            l = Fe(o.cells, (e, t) => [new P((e / a - .5) * c, (.5 - t / 1) * s, -2), new P(0, 0, 1)], (e, t) => [e / a, 1 - t / 1], e => Math.min(.032, Math.sqrt(e.area) * s * .3), () => !0, e => e.dMin, G),
            u = s / xt,
            d = ht / St;
        for (let e of l.bodies) {
            let t = e.cell,
                n = t.c[0] - o.ix,
                r = t.c[1] - o.iy,
                i = Math.hypot(n, r) || 1,
                a = Math.exp(-i / .3),
                s = Math.sqrt(t.area) * xt,
                c = _t(t.id, 1, 3),
                l = _t(t.id, 2, 3),
                f = _t(t.id, 3, 3),
                p = (a + 2.4 * c + .2 * (1 - x((s - .03) / .12))) / 3.6,
                m = .3 + 6.2 * p ** 2.3,
                h = .22 + .48 * (1 - a) + .2 * (1 - p),
                g = m * h * (.8 + .4 * l),
                _ = m * Math.sqrt(1 - h * h) * (.85 + .3 * f);
            e.data.vx = n / i * g * u, e.data.vy = (-(r / i) * g + .08) * u, e.data.vz = _ * d;
            let v = new P(_t(t.id, 5, 3) - .5, _t(t.id, 6, 3) - .5, _t(t.id, 7, 3) - .5).normalize(),
                ee = (2 + 7 * p) * (_t(t.id, 9, 3) < .5 ? -1 : 1) * (.6 + _t(t.id, 8, 3) * .8);
            e.data.wx = v.x * ee, e.data.wy = v.y * ee, e.data.wz = v.z * ee, e.delay = i * .03, e.data.pulver = +(i < .05 && s < .03), e.visible = !0
        }
        l.upload(), U = l, Le.geometry = l.geometry
    }

    function rn() {
        if (X = `armed`, Jt = 1e9, Yt = !1, Ot = kt = Q = At = 1e9, jt = Mt = Nt = -10, Pt = null, $ = null, Ht = !1, Ut = !1, Y.intact.value = 1, Y.hudOn.value = 0, Y.logoOn.value = 0, Y.crackR.value = 0, Y.impact.value = 0, Y.flash.value = 0, Y.fade.value = 0, K.rr.value = 0, K.rc.value = 0, K.haze.value = 0, K.flash.value = 0, K.envK.value = 0, K.fall.value = 0, K.crack.value = 1, K.burst.value = 0, K.tFly.value = 0, K.plRev.value.set(0, 0), st && (st.mesh.visible = !1), U) {
            U.reset();
            for (let e of U.bodies) e.visible = !0;
            U.upload()
        }
        Wt || = (Ke(!1), !0)
    }

    function an(e, t) {
        if (X !== `armed` || !m || Pt) return;
        let n = d.audio.play(dt.shatter, {
                quantize: `beat`
            }),
            r = n > 0 ? Math.max(.02, n - wt) : .05;
        Pt = {
            x: e,
            y: t
        }, Ft = Z + r, n > 0 && d.audio.bed(0, .03, n), $ = {
            ix: e,
            iy: t,
            aspect: f.aspect,
            gen: Me($t(e, t, f.aspect)),
            fr: null
        }
    }

    function on() {
        if (!Pt) return;
        let {
            x: e,
            y: t
        } = Pt;
        Pt = null;
        let n = performance.now();
        Ye(B, {
            clear: !Gt
        }), V.needsUpdate = !0;
        let r = Ze(Ie);
        r && (Y.logoRect.value.set(...r.rect), Y.logoInk.value.setRGB(...r.ink, he), H.needsUpdate = !0), Y.logoOn.value = +!!r;
        let i = performance.now();
        Ke(!0), Wt = !1, Y.hudOn.value = 1, It.set(e, t), Qt(e, t, f.aspect);
        let a = performance.now();
        performance.measure(`shatter · hud raster`, {
            start: n,
            end: i
        }), performance.measure(`shatter · shards`, {
            start: i,
            end: a
        }), X = `impact`, Ot = Z, kt = Z + g, Q = Z + _e, At = Q + 2 * re, Jt = Z + (d.clock.next(`bar`, mt, wt + _e) - wt), Y.intact.value = 0
    }

    function sn() {
        return Jt > 1e8 ? 0 : x(Z / Math.max(.1, Jt))
    }

    function cn() {
        let e = +sn().toFixed(3),
            t = String(Math.round(e * 200));
        if (t === Xt) return;
        Xt = t;
        let n = {
            kind: `auto`,
            text: ``,
            progress: e
        };
        d.gate(n)
    }

    function ln(e) {
        let t = A.rig.idle(Z * 1.4),
            r = wt / g % 1,
            a = d.reducedMotion,
            o = 0,
            s = 0,
            c = 0,
            l = 0;
        if (Z < Q) {
            let e = .85,
                n = x((Z - (Q - e)) / e);
            o = a ? 0 : 3.4 * (1 - n * n), s = -.08 * n, t.antenna = -.6 * n
        } else {
            let e = Z - Q;
            s = a ? 0 : .24 * Math.exp(-e * 9) * Math.cos(e * 24), t.upper.squash += .08 * Math.exp(-e * 8) * Math.cos(e * 20 + .6) + .018 * Math.exp(-r / .08), t.antenna = .5 * Math.exp(-e * 5) * Math.sin(e * 26) + .12 * Math.exp(-r / .1);
            let n = Z - jt;
            n >= 0 && n < .6 && !a && (o += .22 * Math.sin(Math.PI * x(n / .42)), s += .12 * p(n, 0, 1, 7, 3) * (n > .42 ? 1 : .3)), c = Vt[0] * .06, l = -Vt[1] * .05, t.upper.yaw += Vt[0] * .08, t.upper.pitch += -Vt[1] * .05
        }
        A.rig.apply(t), fe.position.set(0, o + ft, 0), fe.rotation.set(l, c, 0, `YXZ`);
        let u = 1 - s,
            m = 1 / Math.sqrt(Math.max(.3, u));
        N.scale.set(m, u, m), fe.updateMatrixWorld(!0), A.syncLed();
        let h = Math.max(0, o),
            v = x(1 - h / 2.5);
        I.vals[0].set(-.11, .03, .14 + h * .1, .62 * v), I.vals[1].set(.11, .03, .14 + h * .1, .62 * v), I.vals[2].set(0, .01, .34 + h * .25, .3 * v), I.vals[3].set(0, -.02, .62 + h * .3, .12 * v);
        let ee = !!f ? .portrait,
            y = f ? .aspect ? ? 16 / 9,
            b = ue.inOut(x((Z - Q) / (_e * 2))),
            S = i(3.3, 2.5, b) * (y < 1 ? 1.12 : 1),
            te = new P(0, i(.5, .58, b), 0);
        O.position.set(Math.sin(Lt) * S, i(.28, .42, b) + Rt * .4, Math.cos(Lt) * S), a || (O.position.x += _(Z * .5, 3) * .01, O.position.y += _(Z * .5, 7) * .01), O.lookAt(te), a || O.rotateZ(p(Z, Q, .012, 9, 11)), O.fov = ee || y < 1.25 ? Math.min(62, 2 * Math.atan(Math.tan(30 * n / 2) * (16 / 9) * .55 / y) / n) : y < 16 / 9 ? 2 * Math.atan(Math.tan(30 * n / 2) * (16 / 9) / y) / n : 30, O.aspect = y, O.updateProjectionMatrix(), O.updateMatrixWorld(!0)
    }

    function un() {
        let e = A.led;
        if (e.clear(), e.u.time.value = Z, e.u.scan.value = 0, Z < At) {
            e.upload();
            return
        }
        let t = Z - At;
        if (t < .12) {
            let n = Math.round(i(0, 17, t / .12));
            for (let t = -n; t <= n; t++) e.set(t, 0, De, 1.6);
            e.u.scan.value = 1, e.upload();
            return
        }
        let n = Z > Bt && Z < Bt + .09;
        if (Z > Bt + .09 && (Bt = Z + 2.4 + _t(Math.floor(Z * 7), 1, 1) * 2.4), Z - Nt < 1.1) {
            let t = n ? `blink` : `happy`;
            e.eyes(t, De, 1, t === `blink` ? [0, -2] : [Math.round(Vt[0]), Math.round(Vt[1])])
        } else {
            let t = Math.max(0, Z - Math.max(At + .12, Mt)),
                n = Math.floor(t / (re * .75));
            e.text4(`HELLO,`, 4, De, 1.05, n), e.text4(`WORLD.`, -4, De, 1.05, Math.max(0, n - 6)), t < .5 && (e.u.scan.value = 1 - t / .5)
        }
        e.upload()
    }
    return {
        id: t.id,
        async load(e) {
            d = e, f = d.stage.info, d.audio.preloadShots([...dt.shatter, ...dt.pi, ...dt.land, ...dt.hop]), await Zt(), h || cn(), y.push(d.input.onTap(() => {
                d.layer.hidden || d.audio.unlock()
            }), d.input.onKey(e => {
                !d.layer.hidden && (e.code === `Space` || e.code === `Enter` || e.code === `NumpadEnter`) && d.audio.unlock()
            })), qt = d.params.get(`stay`) === `1`, Object.assign(window, {
                __shatter: {
                    get phase() {
                        return X
                    },
                    get ready() {
                        return m
                    },
                    get t() {
                        return Z
                    },
                    get captured() {
                        return Et
                    },
                    get endAt() {
                        return Jt
                    },
                    get impactAt() {
                        return Ot
                    },
                    get fallAt() {
                        return kt
                    },
                    get progress() {
                        return sn()
                    },
                    get advanced() {
                        return Yt
                    },
                    trigger: (e = pt[0], t = pt[1]) => an(e, t),
                    reset: rn,
                    set hold(e) {
                        Kt = e
                    },
                    set stay(e) {
                        qt = e
                    }
                }
            })
        },
        enter(e) {
            !e && !vt && (yt(!0), Je.needsUpdate = !0), rn(), Z = 0, Dt = 0, Xt = ``, Tt = !!e, Et = !1, Gt = !1;
            let t = B.getContext(`2d`);
            t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, B.width, B.height);
            let n = e ? document.querySelector(`#station-layer > .station[data-station="${e}"]`) : null;
            if (n && n.childElementCount) {
                let e = n.hidden;
                n.hidden = !1;
                try {
                    Gt = Ye(B, {
                        roots: [n]
                    }) > 0
                } finally {
                    n.hidden = e
                }
            }
            V.needsUpdate = !0, Y.hudOn.value = +!!Gt
        },
        update(e) {
            let t = e.dt;
            if (Z += t, wt = e.clock, !m) return;
            let r = e.input.p;
            X === `armed` && !Pt && !Kt && e.arrive >= 1 && Z - Dt > .05 && (Et || !Tt) && an(pt[0], pt[1]), Pt && Z < Ft && (en(3), tn()), Pt && Z >= Ft && on(), e.active && X === `white` && (r.clicked || e.input.pressed(`Space`, `Enter`, `NumpadEnter`)) && (jt = Z, Mt = Z + .2, Nt = Z, d.audio.play(dt.hop, {
                quantize: `none`
            }), d.audio.play(dt.pi, {
                quantize: `16th`
            })), r.down && (zt = Z);
            let i = d.reducedMotion;
            X === `impact` && Z >= kt && (X = `fall`), X === `fall` && Z >= Q && (X = `white`), Z >= Q && !Ut && (Ut = !0, d.audio.play(dt.land, {
                quantize: `none`
            })), Z >= At && !Ht && (Ht = !0, d.audio.play(dt.pi, {
                quantize: `none`
            })), !Wt && Z > Q + .4 && (Ke(!1), Wt = !0), Z >= Jt && !Yt && !qt && e.active && (Yt = !0, d.advance()), cn();
            let a = Z - Ot;
            Y.crackR.value = a < 0 ? 0 : 2.6 * (1 - 2 ** (-10 * x(a / .07))), Y.impact.value = +(!i && a >= 0 && a < 2 / 60 + 1e-4), Y.flash.value = a >= 0 ? (i ? .2 : .35) * Math.exp(-a / .04) : 0, Y.fade.value = i ? w(.15, .75, Z - kt) : 0; {
                let e = e => e >= 1 ? 1 : 1 - 2 ** (-10 * x(e)),
                    t = e => 1 - (1 - x(e)) ** 3,
                    r = a >= 0,
                    o = g / 2,
                    s = +(a >= o);
                K.rr.value = r ? .06 + 1.1 * e(a / .07) + 1.2 * e((a - o) / .06) : 0, K.rc.value = r ? .03 + .2 * t(a / .12) + .36 * e((a - o) / .08) : 0, K.haze.value = r ? (.4 + .2 * s) * e(a / .05) : 0, K.flash.value = s && !i ? .45 * Math.exp(-(a - o) / .025) : 0, K.envK.value = +!!r;
                let c = (t, n, r) => a < t ? n : n + (r - n) * e((a - t) / .1);
                K.plRev.value.set(r ? c(0, 0, .5) + c(o, 0, .9) : 0, r ? c(0, 0, .3) + c(o, 0, .4) : 0);
                let l = Z - kt;
                K.fall.value = i ? 0 : w(0, .06, l), K.crack.value = 1 - w(.02, .14, l), K.burst.value = !i && l >= 0 && l < .07 ? .95 * (1 - w(.042, .064, l)) : 0, K.tFly.value = l > 0 ? bt(l) : 0, K.imp.value.copy(It), K.aspect.value = f.aspect, K.time.value = Z;
                let u = 4 * Math.tan(gt * n / 2);
                K.impW.value.set((It.x - .5) * u * f.aspect, (.5 - It.y) * u, -2), st.mesh.visible = !i && l > 0 && K.tFly.value < 1
            }
            if (U && X !== `armed`) {
                let e = -2.45 * (4 * Math.tan(gt * n / 2)) / xt;
                for (let t of U.bodies) {
                    let n = bt(Z - kt) - bt(t.delay);
                    if (n <= 0 || i) {
                        t.p.copy(t.p0), t.q.identity(), t.visible = !(i && Z > kt + .8);
                        continue
                    }
                    t.p.set(t.p0.x + t.data.vx * n, t.p0.y + t.data.vy * n + .5 * e * n * n, t.p0.z + t.data.vz * n);
                    let r = Math.hypot(t.data.wx, t.data.wy, t.data.wz) || 1;
                    t.q.setFromAxisAngle(new P(t.data.wx / r, t.data.wy / r, t.data.wz / r), r * n), t.visible = t.p.z < -.08 && n < 3 && !(t.data.pulver && n > .012)
                }
                U.upload()
            }
            let o = a >= 0 && Z < kt + .3 && !i ? .05 * Math.exp(-a / .12) + .02 * w(0, g, a) : 0;
            R.fov = gt * (1 - o), R.position.set(i ? 0 : p(Z, Ot, .012, 11, 9), i ? 0 : p(Z, Ot, .01, 11, 13), 0), R.aspect = f.aspect, R.updateProjectionMatrix(), R.updateMatrixWorld(!0);
            let s = 4 * Math.tan(gt * n / 2);
            W.scale.set(s * f.aspect, s, 1), W.visible = X === `armed`, Le && (Le.visible = X !== `armed`);
            let c = r.touch ? r.down || Z - zt < 1.5 ? 1 : 0 : r.presence,
                l = new P(0, Ae, 0).project(O),
                h = c > .3 && e.active ? x((r.nx - l.x) * 7, -3, 3) : Math.sin(Z * .7) * 1.2,
                _ = c > .3 && e.active ? x((r.ny - l.y) * 5, -2, 2) : Math.sin(Z * .43 + 1) * .6;
            Vt[0] = u(Vt[0], h, 12, t), Vt[1] = u(Vt[1], _, 12, t), Lt = u(Lt, e.active && X === `white` ? r.nx * c * .22 : 0, 3, t), Rt = u(Rt, e.active && X === `white` ? r.ny * c * .2 : 0, 3, t), ln(t), un(), T.visible = X !== `armed`, tt.time.value = wt, tt.aspect.value = f.aspect
        },
        render(e) {
            let t = d.renderer;
            if (!m) {
                t.setRenderTarget(e), t.setClearColor(16777215, 1), t.clear(), t.setRenderTarget(null);
                return
            }
            if (Tt && e.width > 64) {
                Tt = !1, Et = !0, z.setSize(e.width, e.height), qe.value = e.texture;
                let n = t.getRenderTarget();
                t.setRenderTarget(z), We.render(t), t.setRenderTarget(n)
            } else if (!Et && z.width !== e.width && e.width > 64) {
                z.setSize(e.width, e.height);
                let n = t.getRenderTarget();
                t.setRenderTarget(z), Ge.render(t), t.setRenderTarget(n)
            }
            T.visible && F.render(t, T);
            let n = t.getClearAlpha();
            t.setClearAlpha(0), Qe.renderTo(e), t.setClearAlpha(n)
        },
        layout(e) {
            f = e
        },
        exit() {
            Wt || = (Ke(!1), !0), d.audio.bed(1, .25)
        },
        dispose() {
            h = !0;
            for (let e of y) e();
            Wt || Ke(!1), Qe ? .dispose(), $e ? .dispose();
            for (let e of et) e.dispose();
            U ? .dispose(), A ? .dispose(), Ue ? .dispose();
            for (let e of v) e.dispose()
        },
        hints: () => [],
        cursor: () => X === `white` ? `pointer` : `default`,
        hud: () => X === `armed` || X === `impact` ? `keep` : `dark`
    }
}
export {
    wt as
    default
};