import {
    $ as e,
    $t as t,
    A as n,
    An as r,
    At as i,
    B as a,
    Bn as o,
    Bt as s,
    C as c,
    Ct as l,
    Dn as u,
    Dt as d,
    Et as f,
    F as p,
    Fn as m,
    Ft as h,
    G as g,
    Gt as _,
    H as v,
    Hn as y,
    Ht as b,
    I as x,
    In as S,
    It as C,
    J as w,
    Jt as T,
    K as E,
    L as D,
    Lt as O,
    M as k,
    N as A,
    O as j,
    P as M,
    Pt as N,
    Q as P,
    Qn as F,
    R as ee,
    Rt as te,
    Sn as ne,
    St as I,
    T as L,
    Tt as R,
    U as z,
    Un as re,
    V as ie,
    Vn as B,
    W as V,
    Wt as H,
    X as ae,
    Xt as oe,
    Y as U,
    Yn as se,
    Z as W,
    Zn as ce,
    Zt as le,
    _n as ue,
    _r as de,
    _t as fe,
    a as pe,
    at as me,
    bt as G,
    ct as he,
    dt as ge,
    en as _e,
    et as ve,
    gt as K,
    hn as ye,
    ht as be,
    ir as xe,
    it as Se,
    j as Ce,
    jn as we,
    jt as Te,
    ln as Ee,
    lr as De,
    lt as q,
    m as Oe,
    mn as ke,
    n as Ae,
    nr as je,
    ot as Me,
    p as Ne,
    pn as Pe,
    pr as Fe,
    qn as Ie,
    qt as Le,
    r as Re,
    rn as ze,
    rr as Be,
    rt as Ve,
    s as He,
    sn as Ue,
    sr as We,
    st as Ge,
    t as Ke,
    tn as qe,
    un as Je,
    ur as Ye,
    ut as Xe,
    v as Ze,
    vn as Qe,
    vr as J,
    vt as $e,
    w as et,
    wt as tt,
    xt as nt,
    yt as Y,
    z as rt
} from "./post-DJ5SZDIO.js";
import {
    l as it,
    s as at,
    t as ot,
    u as st
} from "./index-BSu4tWCh.js";
import {
    t as ct
} from "./pmrem-B-AQRfYD.js";
import {
    a as lt,
    n as ut,
    r as dt,
    t as ft
} from "./target-DNdmBkK8.js";
var pt = `BOOT FUNTECH.EXE`,
    mt = e => e < 95e3 ? `${Math.max(0,Math.round(e/1e3))} KB` : `${(e/1e6).toFixed(1)} MB`;

function ht(e, t) {
    if (e.err && e.total === void 0) return e.label;
    let n = t ? {
            label: 21,
            n: 3,
            cells: 6,
            size: 7
        } : {
            label: 31,
            n: 4,
            cells: 10,
            size: 8
        },
        r = e.label;
    t && (r = r.replace(`compiling shaders `, `shaders `).replace(`loading `, `load `).replace(`decoding `, `decode `));
    let i = r.length + 2 <= n.label ? `${r} ${`.`.repeat(n.label-r.length-1)}` : r.padEnd(n.label);
    if (i += e.total === void 0 ? ` `.repeat(2 + 2 * n.n) : ` ${String(e.n??0).padStart(n.n)}/${String(e.total).padEnd(n.n)}`, e.totalBytes) {
        let t = Math.max(0, Math.min(1, (e.bytes ? ? 0) / e.totalBytes)),
            r = e.done ? n.cells : Math.floor(t * n.cells);
        i += `  [${`#`.repeat(r)}${` `.repeat(n.cells-r)}] ${mt(e.done?e.totalBytes:e.bytes??0).padStart(n.size)}`
    } else e.done && (i += ` `.repeat(n.cells + 5 + n.size));
    return e.done && (i += e.err ? `  ERR` : `  ok`), i
}
var gt = class {
        reduced;
        root;
        button;
        typed;
        tab;
        statusBox;
        logBox;
        readyEl;
        live;
        tc;
        step = -1;
        tcText = ``;
        header = [];
        lines = [];
        printed = new Set;
        headerShown = 0;
        readyShown = !1;
        cmdStart = -1;
        last16 = -1;
        portrait = !1;
        liveAt = 0;
        liveText = ``;
        liveFrac = -1;
        loading = !0;
        startAt = -1;
        constructor(e, t, n = !1, r = `65536M`) {
            this.reduced = n, this.root = C(`div`, `bt is-loading`), this.root.dataset.state = `typing`, this.root.innerHTML = `
      <div class="bt__screen" aria-hidden="true">
        <div class="bt__status">
          <p>FUNTECH OS 26.09  ·  TTY1  ·  (C) 2026 FUNTECH INC.</p>
          <p>CLOCK 174 BPM  ·  GPU ${t} OK  ·  MEM ${r} OK</p>
          <div class="bt__log"></div>
          <p class="bt__ready">READY.</p>
        </div>
        <p class="bt__cmd"><span class="bt__prompt">&gt; </span><span class="bt__typed"></span><span class="bt__tab"></span><span class="bt__cursor"></span></p>
        <div class="bt__foot"><p>F1 HELP&nbsp;&nbsp; F2 PASSES&nbsp;&nbsp; F10 RENDER</p><p class="bt__tc">00:00:00:00</p></div>
      </div>
      <div class="bt__glass" aria-hidden="true"></div>
      <p class="bsr" role="status" aria-live="polite"></p>`, this.button = C(`button`, `bt__go`), this.button.type = `button`, this.button.disabled = !0, this.button.innerHTML = `<span class="bt__go-key">ENTER</span><span class="bt__go-label" data-en="to boot">で起動</span>`, this.button.setAttribute(`aria-label`, `BOOT FUNTECH.EXE を起動する（サウンドが鳴ります）`), this.button.dataset.enAria = `Boot FUNTECH.EXE (with sound)`, at(this.button), this.root.appendChild(this.button), this.typed = this.root.querySelector(`.bt__typed`), this.tab = this.root.querySelector(`.bt__tab`), this.statusBox = this.root.querySelector(`.bt__status`), this.header = [...this.statusBox.querySelectorAll(`:scope > p:not(.bt__ready)`)], this.logBox = this.root.querySelector(`.bt__log`), this.readyEl = this.root.querySelector(`.bt__ready`), this.live = this.root.querySelector(`.bsr`), this.tc = this.root.querySelector(`.bt__tc`), e.appendChild(this.root)
        }
        tick(e, t) {
            this.setLoading(!t.ready);
            let n = Math.floor(e / oe);
            if (this.startAt < 0 && (this.startAt = e), e - this.startAt < .25 && !this.reduced) return this.set(-1, e), -1;
            this.reduced ? (this.headerShown = this.header.length, this.syncLog(t, !0), t.ready && !this.readyShown && (this.readyShown = !0, this.cmdStart = n - 12)) : n !== this.last16 && (this.last16 = n, this.headerShown < this.header.length ? this.headerShown++ : this.readyShown || (this.syncLog(t, !1), t.ready && this.pending(t) === 0 && (this.readyShown = !0, this.cmdStart = n + 1)), this.readyShown && this.syncLog(t, !0)), this.header.forEach((e, t) => e.classList.toggle(`is-on`, t < this.headerShown)), this.readyEl.classList.toggle(`is-on`, this.readyShown), this.speak(t);
            let r = this.cmdStart < 0 ? -1 : n - this.cmdStart;
            return this.set(r, e), r
        }
        pending(e) {
            return e.enabled ? e.items().filter(e => !this.printed.has(e.key)).length : 0
        }
        syncLog(e, t) {
            if (!e.enabled) return;
            let n = e.items(),
                r = n.filter(e => !this.printed.has(e.key));
            if (r.length) {
                if (!t && e.ready && r.length > 2) {
                    let e = r.length,
                        t = r.filter(e => e.key.startsWith(`st:`)).length;
                    this.addLine({
                        key: `fold`,
                        label: `${e} more job${e===1?``:`s`}${t?` (${t} station${t===1?``:`s`} compiled)`:``}`,
                        done: !0,
                        t: performance.now()
                    }, null);
                    for (let e of r) this.printed.add(e.key)
                } else
                    for (let e of t ? r : r.slice(0, 1)) this.addLine(e, e)
            }
            let i = new Map(n.map(e => [e.key, e]));
            for (let e of this.lines) {
                let t = e.item ? i.get(e.key) ? ? e.item : null;
                t && (e.item = t, e.done = t.done);
                let n = t ? ht(t, this.portrait) : e.text;
                n !== e.text && (e.text = n, e.el.textContent = n), e.el.classList.toggle(`is-err`, !!t ? .err), e.el.classList.toggle(`is-run`, !!t && !t.done)
            }
            this.fit()
        }
        addLine(e, t) {
            this.printed.add(e.key);
            let n = C(`p`, `is-on`),
                r = ht(e, this.portrait);
            n.textContent = r, this.logBox.appendChild(n), this.lines.push({
                key: e.key,
                el: n,
                text: r,
                item: t,
                done: e.done
            })
        }
        fit() {
            let e = this.portrait ? 11 : 5,
                t = new Set;
            for (let e of this.lines) e.done || t.add(e);
            for (let n = this.lines.length - 1; n >= 0 && t.size < e; n--) t.add(this.lines[n]);
            for (let e of this.lines) {
                let n = t.has(e);
                e.el.hidden === n && (e.el.hidden = !n)
            }
        }
        speak(e) {
            let t, n = matchMedia(`(pointer: coarse)`).matches;
            if (!e.enabled || e.ready) t = it(`準備ができました。${n?`タップ`:`Enter キーかクリック`}で起動します`, `Ready. ${n?`Tap`:`Press Enter or click`} to boot.`);
            else {
                let n = e.fraction(),
                    r = performance.now();
                if (this.liveText && (r - this.liveAt < 8e3 || n - this.liveFrac < .1)) return;
                this.liveAt = r, this.liveFrac = n;
                let i = Math.round(n * 100);
                t = it(`読み込み中 ${i}%`, `Loading ${i}%`)
            }
            t !== this.liveText && (this.liveText = t, this.live.textContent = t)
        }
        setLoading(e) {
            e !== this.loading && (this.loading = e, this.root.classList.toggle(`is-loading`, e), this.button.disabled = e)
        }
        set(e, t) {
            let n = Math.max(0, Math.floor(e));
            if (n !== this.step) {
                this.step = n;
                let e = this.reduced && this.readyShown ? 9 : n <= 0 ? 0 : Math.min(n, 9);
                this.typed.textContent = pt.slice(0, e), this.tab.textContent = n >= 10 || this.reduced && this.readyShown ? pt.slice(9) : ``, this.tab.classList.toggle(`is-hl`, !this.reduced && (n === 10 || n === 11)), this.root.classList.toggle(`has-foot`, n > 0 || this.headerShown > 0), this.root.dataset.state = n >= 12 ? `ready` : `typing`, n > 0 && n <= 10 && !this.reduced && (this.root.classList.remove(`is-key`), this.root.offsetWidth, this.root.classList.add(`is-key`))
            }
            let r = Math.floor(t * 30),
                i = `00:00:${String(Math.floor(r/30)%60).padStart(2,`0`)}:${String(r%30).padStart(2,`0`)}`;
            i !== this.tcText && (this.tcText = i, this.tc.textContent = i)
        }
        get ready() {
            return this.step >= 12
        }
        complete(e, t) {
            this.headerShown = this.header.length, t && this.syncLog(t, !0), this.readyShown = !0, this.header.forEach(e => e.classList.add(`is-on`)), this.readyEl.classList.add(`is-on`), this.cmdStart = Math.floor(e / oe) - 12, this.set(12, e)
        }
        collapse() {
            this.root.dataset.state = `enter`, this.button.blur()
        }
        hide() {
            this.root.dataset.state = `off`
        }
        show() {
            this.root.dataset.state = `typing`, this.step = -1
        }
        layout(e) {
            if (this.root.classList.toggle(`is-portrait`, e), e !== this.portrait) {
                this.portrait = e;
                for (let t of this.lines) t.item && (t.text = ht(t.item, e), t.el.textContent = t.text)
            }
        }
        dispose() {
            this.root.remove()
        }
    },
    X = [`wire`, `xray`, `holo`, `chrome`, `beauty`],
    _t = {
        wire: `WIREFRAME`,
        xray: `X-RAY`,
        holo: `HOLOGRAM`,
        chrome: `CHROME`,
        beauty: `BEAUTY`
    },
    vt = class {
        root;
        shown = ``;
        constructor(e) {
            this.root = C(`p`, `bsr`), this.root.setAttribute(`aria-live`, `polite`), e.appendChild(this.root)
        }
        set(e) {
            if (e === this.shown) return;
            this.shown = e;
            let t = X.indexOf(e) + 1;
            this.root.textContent = it(`パス ${t} / ${X.length}：${_t[e]}`, `Pass ${t} of ${X.length}: ${_t[e]}`)
        }
        dispose() {
            this.root.remove()
        }
    },
    yt = 990 / 362.89,
    bt = {
        url: `gen/boot/logo_sdf.webp`,
        range: 40
    };

function xt() {
    return {
        fg: I(new ye(`#E6FF00`)),
        bg: I(new ye(`#0C0C0D`)),
        gain: I(.62),
        bgGain: I(1),
        time: I(0),
        scroll: I(0),
        wave: I(1),
        scanY: I(100),
        scanOn: I(0),
        heat: I(1),
        wire: I(new ye(.9, 1, .2)),
        spot: I(new J(0, .9, -2.6)),
        spotK: I(.55),
        cove: I(0),
        focus: I(1.9),
        aperture: I(1),
        dofScale: I(1),
        refl: I(.32),
        rough: I(.55),
        grid: I(1),
        shadow: I(.75),
        shoeL: I(new J(-.15, 0, 0)),
        shoeR: I(new J(.15, 0, 0))
    }
}
var St = new Map,
    Ct = null;

function wt(e = 256) {
    let t = St.get(e) ? ? Tt(e);
    St.set(e, t);
    let n = new Qe(t, e, e, F);
    return n.wrapS = n.wrapT = xe, n.generateMipmaps = !0, n.minFilter = S, n.magFilter = m, n.needsUpdate = !0, n
}

function Tt(e) {
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
            let u = r(a / e * 32, i / e * 32, 9, 32);
            t[o] = Math.round(s * 255), t[o + 1] = Math.round(u * 255), t[o + 2] = Math.round(n(a, i, 3) * 255), t[o + 3] = 255
        }
    return t
}
async function Et(e) {
    Ct ? ? = fetch(e.url(bt.url)).then(e => {
        if (!e.ok) throw Error(`${e.status} ${bt.url}`);
        return e.blob()
    }).then(e => createImageBitmap(e, {
        imageOrientation: `flipY`,
        premultiplyAlpha: `none`,
        colorSpaceConversion: `none`
    }));
    let t = await Ct.catch(e => {
            throw Ct = null, e
        }),
        n = new Fe(t);
    return n.name = `boot-logo-sdf`, n.format = je, n.flipY = !1, n.colorSpace = ``, n.generateMipmaps = !0, n.minFilter = S, n.magFilter = m, n.anisotropy = 8, n.wrapS = n.wrapT = ke, n.needsUpdate = !0, n
}

function Dt({
    rows: e = 9,
    r0: t = 2.3,
    rStep: n = .24,
    flare: r = .045,
    h: i = .64,
    pitch: a = .52,
    y0: o = -.02,
    seg: s = 240,
    hseg: c = 6
} = {}) {
    let l = (e, t) => {
            let n = Math.sin(e * 127.1 + t * 311.7) * 43758.5453;
            return n - Math.floor(n)
        },
        u = [];
    for (let s = 0; s < e; s++) {
        let e = t + s % 2 * n + r * s,
            c = i * .96 * yt,
            d = Math.max(3, Math.round(2 * Math.PI * e / (c * 1.07)));
        u.push({
            R: e,
            ring: [e, o + s * a, i, s % 2 ? -1 : 1],
            param: [d, l(s, 1) * 7, .07 + .07 * l(s, 2), .1 + .06 * l(s, 3)],
            param2: [2 + s % 3, l(s, 4) * 6.28, (s % 2 ? -1 : 1) * (.6 + .5 * l(s, 5)), .02]
        })
    }
    u.sort((e, t) => t.R - e.R);
    let d = e * (s + 1) * (c + 1),
        f = new Float32Array(d * 3),
        p = new Float32Array(d * 2),
        m = new Float32Array(d * 4),
        h = new Float32Array(d * 4),
        g = new Float32Array(d * 4),
        _ = [],
        v = 0;
    for (let e of u) {
        let t = v;
        for (let t = 0; t <= c; t++)
            for (let n = 0; n <= s; n++) {
                let r = n / s,
                    i = t / c,
                    a = r * Math.PI * 2;
                f.set([Math.sin(a) * e.R, e.ring[1] + i * e.ring[2], Math.cos(a) * e.R], v * 3), p.set([r, i], v * 2), m.set(e.ring, v * 4), h.set(e.param, v * 4), g.set(e.param2, v * 4), v++
            }
        for (let e = 0; e < c; e++)
            for (let n = 0; n < s; n++) {
                let r = t + e * (s + 1) + n,
                    i = r + 1,
                    a = r + s + 1,
                    o = a + 1;
                _.push(r, a, i, i, a, o)
            }
    }
    let y = new Je;
    return y.setAttribute(`position`, new Ee(f, 3)), y.setAttribute(`uv`, new Ee(p, 2)), y.setAttribute(`aRing`, new Ee(m, 4)), y.setAttribute(`aParam`, new Ee(h, 4)), y.setAttribute(`aParam2`, new Ee(g, 4)), y.setIndex(_), y.boundingSphere = new De(new J(0, 2, 0), 6), y
}
var Ot = Math.PI * 2;

function kt(e, t) {
    let n = t.sub(e.spot).mul(f(1, .8, 1));
    return W(z(1), z(.35).add(v(a(n, n).div(-5.5)).mul(.95)), e.spotK).mul(z(1).sub(e.spotK.mul(.35).mul(Y(1.8, 4.5, t.y))))
}

function At(e, n, r) {
    let i = new t({
        transparent: !0,
        depthWrite: !1,
        side: 2
    });
    i.name = `way-rings`, i.forceSinglePass = !0;
    let a = Ce(`aRing`, `vec4`),
        o = Ce(`aParam`, `vec4`),
        s = Ce(`aParam2`, `vec4`),
        c = l().x.mul(Ot),
        u = l().y,
        d = a.x.add(s.w.mul(u.sub(.5))),
        p = o.z.mul(e.wave).mul($e(s.x.mul(c).add(s.y).add(e.time.mul(s.z)))).add(o.z.mul(e.wave).mul(.35).mul($e(s.x.add(3).mul(c).sub(s.y.mul(1.7)).sub(e.time.mul(s.z).mul(1.3))))),
        m = o.w.sub(.13).mul(.55).mul(d).mul($e(c.sub(s.y)));
    i.positionNode = f($e(c).mul(d), a.y.add(u.mul(a.z)).add(p).add(m), x(c).mul(d));
    let h = a.w,
        _ = o.x,
        y = .96,
        b = z(1).sub(l().x).mul(_).add(o.y).add(e.scroll.mul(h)).add(u.sub(.5).mul(o.w).mul(h)),
        S = g(b).mul(1.07).sub(.07 / 2),
        C = u.sub(.5).div(y).add(.5),
        T = w(q.sub(k)),
        E = M(j(T.sub(e.focus)).div(T).mul(e.aperture).mul(18), 0, 12),
        D = R(b, u.div(y)),
        O = E.mul(e.dofScale).add(1),
        A = ee(D).mul(R(1.07, 1)),
        N = rt(D).mul(R(1.07, 1)),
        P = n.image,
        F = R(P.width, P.height),
        te = R(S, C),
        ne = U(U(te.negate(), te.sub(1)), R(0)).mul(F),
        I = nt(n, te).grad(A.mul(O), N.mul(O)).r.sub(.5).mul(2 * bt.range).sub(w(ne)),
        L = U(w(A.mul(F)), w(N.mul(F))).mul(z(.5).add(E.mul(E.add(1)).mul(.045).mul(e.dofScale))),
        re = Y(L.negate(), L, I),
        ie = z(1).sub(Y(0, L.mul(3.2), j(I))),
        B = e.scanOn.mul(G(e.scanY, q.y)),
        V = W(re, ie, B),
        H = nt(r, q.xy.mul(.35).add(R(o.y.mul(.13), 0))).r,
        ae = f(e.fg).mul(e.gain).mul(kt(e, q)).mul(W(z(1), z(.3).add(Y(0, .75, q.y).mul(.7)), e.cove)).mul(z(.9).add(u.mul(.16)).add(H.sub(.5).mul(.12))),
        oe = v(j(e.scanY.sub(q.y)).div(-.05)).mul(e.heat).mul(e.scanOn);
    return i.colorNode = W(ae, f(e.wire).mul(.55), B).add(f(1, 1, .9).mul(oe).mul(3).mul(ie)).add(f(e.wire).mul(oe).mul(.8).mul(re).mul(z(1).sub(B))), i.opacityNode = M(V, 0, 1), i
}

function jt(e, n) {
    let r = new t({
        side: 1
    });
    r.name = `way-backdrop`;
    let i = q.y,
        a = Y(-.2, 1.2, i).mul(z(1).sub(Y(2.5, 6, i).mul(.55))),
        o = nt(n, l().mul(R(9, 3))).r,
        s = f(e.bg).mul(e.bgGain).mul(z(.55).add(a.mul(.45))).mul(z(.94).add(o.mul(.12))).mul(kt(e, q)).mul(W(z(1), z(.1).add(Y(0, 1.5, i).mul(.9)), e.cove)),
        c = G(e.scanY, i).mul(e.scanOn),
        u = z(1).sub(Y(0, E(i.mul(4)).mul(1.2), j(g(i.mul(4)).sub(.5)).sub(.47)));
    return r.colorNode = W(s, s.mul(.08), c).add(f(e.wire).mul(.04).mul(u).mul(c)).add(f(1, 1, .9).mul(v(j(e.scanY.sub(i)).div(-.06))).mul(.6).mul(e.heat).mul(e.scanOn)), r
}

function Mt(e, n, r) {
    let i = new t;
    i.name = `mirror-floor`;
    let o = q.xz,
        s = nt(n, o.mul(.21)).r,
        c = nt(n, o.mul(.043).add(.31)).g,
        l = o.mul(4),
        u = E(l),
        d = z(1).sub(Y(R(0), u.mul(1.2), j(g(l).sub(.5)).sub(z(.5).sub(u.mul(.6))))),
        p = U(d.x, d.y).mul(z(1).sub(Y(.05, .18, U(u.x, u.y)))),
        m = v(w(o).div(-1.3)),
        h = f(.012, .012, .014).add(f(.42, .5, .58).mul(p).mul(e.grid).mul(m).mul(.1)).add(f(1, 1, .9).mul(v(U(e.scanY, 0).div(-.03))).mul(p).mul(e.grid).mul(.8).mul(e.scanOn)),
        _ = o.sub(e.shoeL.xz).mul(R(1, .75)),
        y = o.sub(e.shoeR.xz).mul(R(1, .75)),
        b = M(v(a(_, _).div(-.012)).mul(v(U(e.shoeL.y, 0).div(-.05))).add(v(a(y, y).div(-.012)).mul(v(U(e.shoeR.y, 0).div(-.05)))).mul(.9).add(v(a(o, o).div(-.25)).mul(.35)), 0, 1).mul(e.shadow),
        x = r.uvNode,
        S = R(1).div(K),
        C = e.rough.mul(z(.6).add(c.mul(.8))).mul(14),
        T = (e, t) => r.sample(x.add(R(e, t).mul(S).mul(C))).rgb,
        D = r.sample(x).rgb.mul(.36).add(T(1, .3).mul(.16)).add(T(-.3, 1).mul(.16)).add(T(-1, -.3).mul(.16)).add(T(.3, -1).mul(.16)),
        O = Se(k.sub(q)),
        A = z(.04).add(z(.96).mul(Xe(z(1).sub(M(O.y, 0, 1)), 5))),
        N = D.mul(e.refl).mul(z(.25).add(A.mul(.75))).mul(z(.85).add(s.mul(.3)));
    return i.colorNode = h.mul(z(1).sub(b)).add(N.mul(z(1).sub(b.mul(.6)))), i
}

function Nt(e, r) {
    let i = new t({
        transparent: !0,
        depthWrite: !1,
        blending: 2,
        side: 2
    });
    i.forceSinglePass = !0;
    let a = Me.xy,
        o = w(a),
        s = n(a.y, a.x),
        c = o.sub(.47).div(.0028),
        l = o.sub(.53).div(.0016),
        u = o.sub(.505).div(.009),
        d = v(c.mul(c).negate()).mul(3.2).add(v(l.mul(l).negate()).mul(1.4)),
        p = G(.6, g(s.div(Ot).mul(120))).mul(v(u.mul(u).negate())).mul(.9),
        m = Xe(M(x(s.sub(e.mul(11))).mul(.5).add(.5), 0, 1), 30).mul(Y(.47, .08, o)).mul(.35),
        h = Y(.47, 0, o).mul(.03);
    return i.colorNode = f(.75, 1, .95).mul(d.add(p).add(m).add(h)).mul(r), i
}

function Pt(e, t, n) {
    let r = xt(),
        i = new u;
    i.name = `way-rotunda`;
    let a = Dt(),
        o = new B(a, At(r, e, t));
    o.frustumCulled = !1, o.renderOrder = 1;
    let s = new ue(3.5, 3.5, 7, 128, 1, !0);
    s.translate(0, 3.45, 0);
    let c = new B(s, jt(r, t)),
        l = ge({
            resolutionScale: n.mirror,
            samples: 0
        }),
        d = new B(new Pe(3.6, 96), Mt(r, t, l));
    d.rotation.x = -Math.PI / 2, d.add(l.target);
    let f = !0,
        p = !0;
    d.onBeforeRender = () => {
        f || (p = o.visible, o.visible = !1)
    }, d.onAfterRender = () => {
        f || (o.visible = p)
    };
    let m = I(0),
        h = I(0),
        g = new B(new Pe(.6, 128), Nt(m, h));
    return g.rotation.x = -Math.PI / 2, g.renderOrder = 5, g.frustumCulled = !1, i.add(c, o, d, g), {
        U: r,
        group: i,
        rings: o,
        ringGeo: a,
        backdrop: c,
        floor: d,
        scanner: g,
        refl: l,
        scanTime: m,
        scanAmt: h,
        setMirror(e) {
            l.reflector.resolutionScale = e
        },
        setMirrorRows(e) {
            f = e
        },
        dispose() {
            for (let e of [o, c, d, g]) e.geometry.dispose(), e.material.dispose();
            l.dispose ? .()
        }
    }
}
var Ft = .0115,
    It = [.16, 1, .28],
    Lt = [.8, 1, 0],
    Rt = {
        happy: [`....#....`, `...#.#...`, `..#...#..`, `.#.....#.`, `#.......#`],
        open: [`..#####..`, `.#######.`, `#########`, `#########`, `#########`, `.#######.`, `..#####..`],
        blink: [`#########`],
        half: [`.#######.`, `#########`, `.#######.`],
        wide: [`.#######.`, `#########`, `#########`, `#########`, `#########`, `#########`, `.#######.`]
    },
    zt = [`.............####.....`, `............####......`, `...........####.......`, `..........####........`, `.........####.........`, `........############..`, `......############....`, `.....############.....`, `....############......`, `...############.......`, `..........###.........`, `.........###..........`, `.........##...........`, `........##............`, `.......#..............`],
    Bt = [-11, 11];

function Vt() {
    let e = new Uint8Array(4480),
        n = new Qe(e, 40, 28, F);
    n.minFilter = n.magFilter = re, n.generateMipmaps = !1, n.needsUpdate = !0;
    let r = {
            ledMat: I(new o),
            gain: I(2),
            off: I(.02),
            time: I(0),
            scan: I(0),
            flash: I(0),
            projD: I(.392),
            projC: I(new de)
        },
        i = new Float32Array(3360),
        s = () => {
            let e = tt(r.ledMat.mul(d(q, 1)).xyz),
                t = r.projC.add(e.xy.sub(r.projC).mul(r.projD).div(U(r.projD.sub(e.z), .001))),
                i = Y(.035, .06, l().x).mul(Y(.965, .94, l().x)).mul(Y(.56, .59, l().y)),
                o = t.div(Ft).add(R(20, 14)),
                s = V(o),
                c = g(o).sub(.5),
                u = G(0, s.x).mul(G(0, s.y)).mul(G(s.x, 39)).mul(G(s.y, 27)),
                p = nt(n, s.add(.5).div(R(40, 28))).rgb.mul(2).mul(u),
                m = U(E(o.x), E(o.y)),
                h = j(c).sub(.27),
                _ = w(U(h, R(0))).add(ae(U(h.x, h.y), 0)).sub(.12),
                y = Y(.3, .7, m),
                b = W(z(1).sub(Y(m.mul(-.7), m.mul(.7), _)), z(.62), y),
                x = v(a(c, c).div(-.018)),
                S = Y(-.12, 0, _).mul(z(1).sub(y)),
                C = g($e(a(s, R(12.9898, 78.233))).mul(43758.5453)),
                T = p.mul(z(.9).add(C.mul(.16))).mul(W(z(1), z(.25), G(.985, C))),
                D = U(T.r, U(T.g, T.b)),
                O = W(T, f(D), .35),
                k = T.mul(z(.8).add(S.mul(.25))).add(O.mul(.9).mul(W(x, z(.25), y))).mul(r.gain).mul(b),
                A = f(.01, .012, .011).mul(r.off).mul(50).mul(b).mul(z(1).sub(D)),
                M = z(1).add(r.scan.mul(.35).mul(v(j(g(o.y.div(28).sub(r.time.mul(3))).sub(.5)).mul(-18))));
            return k.mul(M).add(A).mul(i).add(f(.6, 1, .7).mul(r.flash).mul(i).mul(.6))
        },
        c = new t;
    c.name = `led`, c.colorNode = s();
    let u = new t({
        transparent: !0,
        depthWrite: !1,
        blending: 2
    });
    u.name = `led-additive`, u.colorNode = s();
    let p = {
        material: c,
        additive: u,
        tex: n,
        u: r,
        clear() {
            i.fill(0)
        },
        set(e, t, n, r = 1) {
            let a = Math.round(e + 20),
                o = Math.round(t + 14);
            if (a < 0 || o < 0 || a >= 40 || o >= 28) return;
            let s = (o * 40 + a) * 3;
            i[s] = Math.max(i[s], n[0] * r), i[s + 1] = Math.max(i[s + 1], n[1] * r), i[s + 2] = Math.max(i[s + 2], n[2] * r)
        },
        glyph(e, t, n, r, i = 1, a = [0, 0]) {
            let o = e.length,
                s = e[0].length;
            for (let c = 0; c < o; c++)
                for (let l = 0; l < s; l++) e[c][l] === `#` && p.set(t + l - (s - 1) / 2 + a[0], n + (o - 1) / 2 - c + a[1], r, i)
        },
        eyes(e, t, n = 1, r = [0, 0]) {
            p.glyph(Rt[e], -10, 1, t, n, r), p.glyph(Rt[e], 10, 1, t, n, r)
        },
        upload() {
            for (let t = 0; t < 1120; t++) e[t * 4] = Math.min(255, i[t * 3] * 127.5), e[t * 4 + 1] = Math.min(255, i[t * 3 + 1] * 127.5), e[t * 4 + 2] = Math.min(255, i[t * 3 + 2] * 127.5), e[t * 4 + 3] = 255;
            n.needsUpdate = !0
        },
        dispose() {
            n.dispose(), c.dispose(), u.dispose()
        }
    };
    return p
}
var Ht = .633;

function Ut() {
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
var Wt = new J,
    Gt = new ce,
    Kt = new ne,
    qt = new J,
    Jt = class {
        n;
        rest = new Map;
        constructor(e, t) {
            this.n = e, t.updateMatrixWorld(!0);
            let n = t.matrixWorld.clone().invert(),
                r = new J(0, 1, 0);
            for (let t of Object.values(e)) {
                if (!t || !t.parent) continue;
                let e = t.parent.matrixWorld.clone().premultiply(n),
                    i = new J,
                    a = new ce,
                    o = new J;
                e.decompose(i, a, o);
                let s = new ce;
                t.matrixWorld.clone().premultiply(n).decompose(new J, s, new J);
                let c = 1,
                    l = -1;
                for (let e = 0; e < 3; e++) {
                    let t = Math.abs(new J(+(e === 0), +(e === 1), +(e === 2)).applyQuaternion(s).dot(r));
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
            Wt.set(t.x || 0, t.y || 0, t.z || 0).applyQuaternion(r.pqi).divide(r.ps), e.position.copy(r.p).add(Wt), Gt.setFromEuler(Kt.set(t.pitch || 0, t.yaw || 0, t.roll || 0, `YXZ`)), e.quaternion.copy(r.q).premultiply(r.pqi.clone().multiply(Gt).multiply(r.pq));
            let i = 1 - n,
                a = 1 / Math.sqrt(Math.max(.2, i)),
                o = [a, a, a];
            o[r.axis] = i, e.scale.copy(r.s).multiply(qt.set(o[0], o[1], o[2])).multiplyScalar(t.scale || 1)
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
            let t = Ut();
            return t.upper.y = Math.sin(e * 2.1) * .012, t.upper.squash = Math.sin(e * 2.1) * .015, t.upper.roll = Math.sin(e * .9) * .03, t.antenna = Math.sin(e * 5.3) * .08, t
        }
    };

function Yt() {
    let e = (e, t, n) => {
            let r = Math.sin(e * 127.1 + t * 311.7 + n * 74.7) * 43758.5453;
            return r - Math.floor(r)
        },
        t = (t, n, r, i) => {
            let a = Math.floor(t),
                o = Math.floor(n),
                s = t - a,
                c = n - o,
                l = s * s * (3 - 2 * s),
                u = c * c * (3 - 2 * c),
                d = e => (e % i + i) % i,
                f = e(d(a), d(o), r),
                p = e(d(a + 1), d(o), r),
                m = e(d(a), d(o + 1), r),
                h = e(d(a + 1), d(o + 1), r);
            return f + (p - f) * l + (m - f) * u + (f - p - m + h) * l * u
        },
        n = (e, n) => {
            let r = 0,
                i = 1,
                a = 1;
            for (let o = 0; o < 3; o++) r += i * t(e * a / 128 * 16, n * a / 128 * 16, o, 16 * a), i *= .5, a *= 2;
            return r
        },
        r = new Uint8Array(65536),
        i = new Uint8Array(65536);
    for (let e = 0; e < 128; e++)
        for (let a = 0; a < 128; a++) {
            let o = n((a + 1) % 128, e) - n((a - 1 + 128) % 128, e),
                s = n(a, (e + 1) % 128) - n(a, (e - 1 + 128) % 128),
                c = new J(-o * 2.2, -s * 2.2, 1).normalize(),
                l = (e * 128 + a) * 4;
            r[l] = (c.x * .5 + .5) * 255, r[l + 1] = (c.y * .5 + .5) * 255, r[l + 2] = (c.z * .5 + .5) * 255, r[l + 3] = 255;
            let u = 150 + (t(a / 128 * 6, e / 128 * 6, 9, 6) * .7 + t(a / 128 * 23, e / 128 * 23, 4, 23) * .3 - .5) * 120;
            i[l] = i[l + 1] = i[l + 2] = u, i[l + 3] = 255
        }
    let a = e => {
            let t = new Qe(e, 128, 128, F);
            return t.wrapS = t.wrapT = xe, t.generateMipmaps = !0, t.minFilter = S, t.magFilter = m, t.needsUpdate = !0, t
        },
        o = a(r),
        s = a(i);
    return o.repeat.set(6, 6), s.repeat.set(2, 2), {
        normal: o,
        rough: s
    }
}
var Xt = {
    time: I(0),
    xray: I(new ye(.35, .85, 1)),
    xrayGain: I(1.7),
    holo: I(new ye(.2, 1, .35))
};

function Zt() {
    let e = new t({
        transparent: !0,
        depthWrite: !1,
        blending: 2,
        side: 2
    });
    e.name = `xray`, e.forceSinglePass = !0;
    let n = Xe(M(z(1).sub(j(a(Ve, he))), 0, 1), 2.8);
    return e.colorNode = f(Xt.xray).mul(n.mul(.8).add(.006)).mul(Xt.xrayGain), e
}

function Qt() {
    let e = new t({
        transparent: !0,
        depthWrite: !1,
        blending: 2,
        side: 2
    });
    e.name = `holo`, e.forceSinglePass = !0;
    let n = Xe(M(z(1).sub(j(a(Ve, he))), 0, 1), 1.7),
        r = z(.35).add(G(.45, g(q.y.mul(110).sub(Xt.time.mul(3)))).mul(.65)),
        i = z(1).add(v(j(g(q.y.mul(1.4).sub(Xt.time.mul(1.2))).sub(.5)).mul(-30)).mul(1.5));
    return e.colorNode = f(Xt.holo).mul(n.mul(.5).add(.015)).mul(r).mul(i), e
}
var $t = e => e.replace(/\.\d+$/, ``);
async function en(e, t) {
    let n = (await e.loadGLTF(t.lod === `high` ? `gen/models/funkun_8000.glb` : `gen/models/funkun_3000.glb`)).scene,
        r = new u;
    r.name = `FUNKUN`, n.position.y = Ht, r.add(n);
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
        o = t.detail ? Yt() : null,
        s = {
            xray: Zt(),
            holo: Qt()
        },
        c = new qe({
            color: 16777215,
            metalness: 1,
            roughness: .05,
            envMap: t.envChrome,
            envMapIntensity: 1.25
        }),
        l = new qe({
            color: 16761466,
            metalness: 1,
            roughness: .08,
            envMap: t.envChrome,
            envMapIntensity: 1.25
        });
    c.name = `chrome`, l.name = `chrome-gold`;
    let d = [],
        f = new Map,
        p = (n, r) => {
            let i = n;
            if (f.has(i) && n !== `MOUTH_PLASTIC`) return f.get(i);
            let a = {
                    envMap: t.envBeauty
                },
                s = e => {
                    let r = { ...a,
                        ...e
                    };
                    t.detail || (delete r.clearcoat, delete r.clearcoatRoughness);
                    let i = new _e(r);
                    return o && n !== `GLASS` && n !== `GLASS_ROUGH` && (i.normalMap = o.normal, i.normalScale = new de(.12, .12), t.detail && (i.clearcoatNormalMap = o.normal, i.clearcoatNormalScale = new de(.07, .07)), i.roughnessMap = o.rough, i.roughness = Math.max(i.roughness, .25)), i.name = `beauty-` + n, i
                },
                c;
            switch (n) {
                case `DARK_PLASTIC`:
                    c = s({
                        color: 328966,
                        roughness: .3,
                        specularIntensity: .6,
                        clearcoat: 1,
                        clearcoatRoughness: .035
                    });
                    break;
                case `GLOSSY_PLASTIC`:
                    c = s({
                        color: 263173,
                        roughness: .22,
                        specularIntensity: .7,
                        clearcoat: 1,
                        clearcoatRoughness: .03
                    });
                    break;
                case `MOUTH_PLASTIC`:
                    c = s({
                        color: 16777215,
                        map: e.adopt(r.map ? ? null),
                        roughness: .3,
                        clearcoat: 1,
                        clearcoatRoughness: .05
                    });
                    break;
                case `PLASTIC_GLOSSY`:
                    c = s({
                        color: 16730644,
                        roughness: .24,
                        clearcoat: 1,
                        clearcoatRoughness: .06,
                        emissive: 16722440,
                        emissiveIntensity: .12
                    });
                    break;
                case `GLOSSY_RUBBER`:
                    c = s({
                        color: 789517,
                        roughness: .45
                    });
                    break;
                case `PLASTIC_NORMAL`:
                    c = s({
                        color: 657931,
                        roughness: .34,
                        specularIntensity: .6,
                        clearcoat: .8,
                        clearcoatRoughness: .06
                    });
                    break;
                case `ROUGH_PLASTIC`:
                    c = s({
                        color: 1052690,
                        roughness: .6,
                        specularIntensity: .5
                    });
                    break;
                case `METALLIC_PLASTIC`:
                    c = s({
                        color: 1710622,
                        metalness: .6,
                        roughness: .3,
                        clearcoat: .6,
                        clearcoatRoughness: .1
                    });
                    break;
                case `Fiberglass Orange`:
                    c = s({
                        color: 14829082,
                        roughness: .3,
                        clearcoat: .9,
                        clearcoatRoughness: .08
                    });
                    break;
                case `GLASS`:
                case `GLASS_ROUGH`:
                    {
                        let e = new _e({ ...a,
                            color: 0,
                            roughness: n === `GLASS` ? .02 : .05,
                            metalness: 0,
                            clearcoat: 1,
                            clearcoatRoughness: .02,
                            transparent: !0,
                            depthWrite: !1,
                            blending: 2,
                            envMapIntensity: 1.4
                        });e.name = `beauty-glass`,
                        d.push(e),
                        c = e;
                        break
                    }
                case `PLASTIC_EYES`:
                    c = s({
                        color: 131587,
                        roughness: .3
                    });
                    break;
                case `SCREEN_EYES_V06`:
                    c = t.led.material;
                    break;
                default:
                    c = s({
                        color: 1842204,
                        roughness: .5
                    })
            }
            return f.set(i, c), c
        },
        m = new Map,
        h = [],
        g;
    n.traverse(e => {
        let n = e;
        if (!n.isMesh) return;
        h.push(n);
        let r = n.material,
            i = $t(r.name || ``),
            a = i === `GLASS` || i === `GLASS_ROUGH`,
            o = i === `SCREEN_EYES_V06`,
            u = i === `PLASTIC_GLOSSY` || i === `Fiberglass Orange`;
        o && (g = n);
        let d = {
            wire: null,
            xray: o ? t.led.additive : s.xray,
            holo: s.holo,
            chrome: a ? null : o ? t.led.material : u ? l : c,
            beauty: p(i, r)
        };
        m.set(n, d), n.renderOrder = a ? 3 : 2, n.frustumCulled = !0, r !== d.beauty && r.dispose()
    });
    let _ = new Jt(a, r),
        v = null;
    return {
        object: r,
        inner: n,
        nodes: a,
        meshes: h,
        screen: g,
        glass: d,
        rig: _,
        setLook(e) {
            if (e !== v) {
                v = e;
                for (let [t, n] of m) {
                    let r = n[e];
                    t.visible = !!r, r && (t.material = r)
                }
            }
        },
        dispose() {
            let e = new Set;
            for (let n of m.values())
                for (let r of Object.values(n)) r && r !== t.led.material && r !== t.led.additive && !e.has(r) && (e.add(r), r.dispose());
            for (let e of h) e.geometry.dispose();
            f.get(`MOUTH_PLASTIC`) ? .map ? .dispose(), o ? .normal.dispose(), o ? .rough.dispose()
        }
    }
}
async function tn(e) {
    if (typeof DecompressionStream < `u`) {
        let t = await e.binary(`gen/boot/cage.pack`),
            n = new Uint8Array(t, 0, 2);
        return n[0] !== 31 || n[1] !== 139 ? t : new Response(new Blob([t]).stream().pipeThrough(new DecompressionStream(`gzip`))).arrayBuffer()
    }
    return e.binary(`gen/boot/cage.bin`)
}
var Z = {
        res: I(new de(1920, 1080)),
        scanY: I(10),
        heatW: I(.02),
        width: I(1.5),
        fill: I(1),
        gain: I(1.6)
    },
    Q = {
        ice: 10479871,
        red: 16730658,
        blue: 5991423,
        magenta: 16732120,
        green: 3800922,
        white: 15922687,
        orange: 16747050,
        violet: 10648575
    },
    nn = {
        Body: Q.ice,
        HelmTop: Q.white,
        HelmMid: Q.blue,
        HelmBase: Q.violet,
        HelmAttached: Q.ice,
        EarMuffs: Q.magenta,
        AntennaLeft: Q.green,
        AntennaRight: Q.green,
        MetalVisor: Q.ice,
        VisorHolder: Q.orange,
        VisorSpinner: Q.red,
        GlassVisor: Q.white,
        LightsVisor: Q.red,
        LightsVisorHolder: Q.orange,
        RimScreen: Q.red,
        Screen: Q.green,
        Outsole: Q.red,
        Sole: Q.magenta,
        BodyOutside: Q.blue,
        BodyInside: Q.orange,
        Heel: Q.violet,
        Tongue: Q.orange,
        Laces: Q.white,
        LaceHolder: Q.ice,
        FrontPiece: Q.blue,
        BackPiece: Q.blue,
        LeftPiece: Q.magenta,
        RightPiece: Q.magenta
    },
    rn = e => nn[e.replace(/_Mesh0\d$/, ``)] ? ? Q.white;

function an(n, r) {
    let i = new t({
        transparent: r,
        depthWrite: !1,
        blending: r ? 2 : 1,
        side: 2
    });
    i.name = `cage-line`, i.forceSinglePass = r;
    let a = Ce(`aStart`, `vec3`),
        o = Ce(`aEnd`, `vec3`);
    i.vertexNode = et(() => {
        let t = A.mul(e.mul(d(a, 1))).toVar(),
            n = A.mul(e.mul(d(o, 1))).toVar(),
            r = Z.res.x.div(Z.res.y),
            i = n.xy.div(n.w).sub(t.xy.div(t.w)).mul(R(r, 1)),
            s = i.div(U(w(i), 1e-6)),
            c = R(s.y, s.x.negate()).div(R(r, 1)).mul(Me.x).mul(Z.width.div(Z.res.y)),
            l = fe(Me.y.lessThan(.5), t, n);
        return d(l.xy.add(c.mul(l.w)), l.z, l.w)
    })();
    let s = tt(W(ve.mul(d(a, 1)).y, ve.mul(d(o, 1)).y, Me.y)),
        l = p(n).mul(r ? .28 : 1);
    return i.colorNode = et(() => {
        let e = s.sub(Z.scanY);
        L(e.greaterThan(0), () => {
            c()
        });
        let t = v(e.div(Z.heatW));
        return W(l, f(1), M(t, 0, 1).mul(.7)).mul(t.mul(4).add(1)).mul(Z.gain)
    })(), i
}

function on() {
    let e = new t({
        polygonOffset: !0,
        polygonOffsetFactor: 1.5,
        polygonOffsetUnits: 2
    });
    e.name = `cage-fill`;
    let n = Ce(`aColor`, `vec3`);
    return e.colorNode = et(() => {
        let e = q.y;
        L(e.greaterThan(Z.scanY), () => {
            c()
        });
        let t = D(ee(q), rt(q)),
            r = t.div(U(w(t), 1e-12)),
            i = Se(k.sub(q)),
            o = j(a(r, i)),
            s = Xe(M(z(1).sub(o), 0, 1), 3),
            l = Z.scanY.sub(e),
            u = v(l.div(-.0035)),
            d = v(l.div(-.05)).mul(.35);
        return n.mul(z(.012).add(o.mul(.02)).add(s.mul(.09))).mul(Z.fill).add(n.mul(.5).add(.5).mul(u).mul(14)).add(n.mul(d))
    })(), e
}
async function sn(e, t) {
    let [n, i] = await Promise.all([e.json(`gen/boot/cage.json`), tn(e)]), a = new Float32Array([-1, 0, 0, 1, 0, 0, -1, 1, 0, 1, 1, 0]), s = [], c = [], l = [], d = new Map, f = new o, p = new J;
    for (let e of n.parts) {
        let n = t.getObjectByName(e.name);
        if (!n || !n.parent) {
            console.warn(`[boot] cage: node not found`, e.name);
            continue
        }
        let o = new u;
        o.name = e.name + `_cage`, o.position.copy(n.position), o.quaternion.copy(n.quaternion), o.scale.copy(n.scale), n.parent.add(o), l.push(o);
        let m = new Int16Array(i, e.pos, e.v * 3),
            h = new Float32Array(e.v * 3);
        for (let t = 0; t < 3; t++) {
            let n = 0,
                r = e.max[t] - e.min[t];
            for (let i = 0; i < e.v; i++) n = n + m[t * e.v + i] << 16 >> 16, h[i * 3 + t] = e.min[t] + (n + 32767) / 65534 * r
        }
        let g = new Uint16Array(i, e.tris, e.t * 3),
            _ = new Uint16Array(e.t * 3);
        for (let t = 0, n = 0; t < e.t * 3; t++) {
            let e = g[t];
            n += e >>> 1 ^ -(e & 1), _[t] = n
        }
        let v = new Uint8Array(i, e.flags, e.t),
            y = new Set,
            b = [],
            x = (e, t) => {
                let n = e < t ? e * 65536 + t : t * 65536 + e;
                y.has(n) || (y.add(n), b.push(e, t))
            };
        for (let t = 0; t < e.t; t++) {
            let e = _[t * 3],
                n = _[t * 3 + 1],
                r = _[t * 3 + 2],
                i = v[t];
            i & 1 && x(e, n), i & 2 && x(n, r), i & 4 && x(r, e)
        }
        let S = b.length / 2,
            C = new Float32Array(S * 3),
            w = new Float32Array(S * 3);
        for (let e = 0; e < S; e++)
            for (let t = 0; t < 3; t++) C[e * 3 + t] = h[b[e * 2] * 3 + t], w[e * 3 + t] = h[b[e * 2 + 1] * 3 + t];
        let T = new we;
        T.setAttribute(`position`, new Ee(a, 3)), T.setIndex([0, 2, 1, 2, 3, 1]), T.setAttribute(`aStart`, new r(C, 3)), T.setAttribute(`aEnd`, new r(w, 3)), T.instanceCount = S;
        let E = new ye(rn(e.name)),
            D = /^Glass/.test(e.name),
            O = an(E, D),
            k = new B(T, O);
        if (k.frustumCulled = !1, k.renderOrder = D ? 3 : 1, k.name = e.name + `_lines`, o.add(k), s.push(k), c.push(O), !D) {
            f.compose(o.position, o.quaternion, o.scale);
            for (let t = 0; t < e.v; t++) p.fromArray(h, t * 3).applyMatrix4(f).toArray(h, t * 3);
            let t = new Float32Array(e.v * 3);
            for (let n = 0; n < e.v; n++) E.toArray(t, n * 3);
            let r = d.get(n.parent) ? ? [];
            r.push({
                pos: h,
                col: t,
                tri: _,
                v0: 0
            }), d.set(n.parent, r)
        }
    }
    let m = on();
    c.push(m);
    for (let [e, t] of d) {
        let n = 0,
            r = 0;
        for (let e of t) e.v0 = n, n += e.pos.length / 3, r += e.tri.length;
        let i = new Float32Array(n * 3),
            a = new Float32Array(n * 3),
            o = n > 65535 ? new Uint32Array(r) : new Uint16Array(r),
            c = 0;
        for (let e of t) {
            i.set(e.pos, e.v0 * 3), a.set(e.col, e.v0 * 3);
            for (let t = 0; t < e.tri.length; t++) o[c++] = e.tri[t] + e.v0
        }
        let d = new Je;
        d.setAttribute(`position`, new Ee(i, 3)), d.setAttribute(`aColor`, new Ee(a, 3)), d.setIndex(new Ee(o, 1)), d.computeBoundingSphere();
        let f = new u;
        f.name = e.name + `_cage_fill`, e.add(f), l.push(f);
        let p = new B(d, m);
        p.renderOrder = 0, p.name = e.name + `_fill`, f.add(p), s.push(p)
    }
    return {
        meshes: s,
        edges: n.totals.e,
        setVisible(e) {
            for (let t of l) t.visible = e
        },
        dispose() {
            for (let e of l) e.removeFromParent();
            for (let e of s) e.geometry.dispose();
            for (let e of c) e.dispose()
        }
    }
}
var cn = [{
        name: `key`,
        type: `strip`,
        position: [-2, 1.75, .15],
        size: [.42, 1.9],
        gradient: .45
    }, {
        name: `fill`,
        type: `strip`,
        position: [1.85, .95, .35],
        size: [.28, 1.6],
        gradient: .35
    }, {
        name: `top`,
        type: `rect`,
        position: [0, 2.55, .35],
        size: [1.6, .9],
        softness: .35
    }, {
        name: `rimL`,
        type: `strip`,
        position: [-1.35, 1, -1.45],
        size: [.2, 1.9],
        gradient: .3
    }, {
        name: `rimR`,
        type: `strip`,
        position: [1.45, .95, -1.3],
        size: [.2, 1.9],
        gradient: .3
    }, {
        name: `back`,
        type: `rect`,
        position: [0, .55, -1.9],
        size: [2.6, .7],
        softness: .45
    }, {
        name: `kick`,
        type: `dot`,
        position: [.6, 2.2, 1.35],
        size: [.18, .18]
    }],
    ln = `#ff2a10`,
    un = {
        chrome: {
            key: [`#fff4ea`, 22],
            fill: [`#eef2ff`, 10],
            top: [`#ffffff`, 6],
            kick: [`#ffffff`, 8],
            rimL: [`#ffe2c8`, 14],
            rimR: [`#cfe0ff`, 12],
            back: [`#ffffff`, 0]
        },
        beauty: {
            key: [`#fff4ea`, 26],
            fill: [`#eef2ff`, 5],
            top: [`#ffffff`, 5],
            kick: [`#ffffff`, 9],
            rimL: [ln, 42],
            rimR: [ln, 36],
            back: [ln, 7]
        }
    },
    dn = {
        chrome: {
            fg: `#2E36FF`,
            bg: `#F5FF00`,
            gain: 1,
            bgGain: .6
        },
        beauty: {
            fg: `#FF4122`,
            bg: `#070708`,
            gain: .22,
            bgGain: 1
        }
    },
    fn = new J(0, .63, 0);

function pn(e, n) {
    let r = new t({
            transparent: !0,
            blending: 2,
            depthWrite: !1,
            side: 2
        }),
        i = l().mul(2).sub(1),
        a;
    if (e.type === `dot`) a = Xe(z(1).sub(Y(0, 1, w(i))), 1.6);
    else {
        let t = e.softness ? ? .25,
            n = z(1).sub(j(i.x)),
            r = z(1).sub(j(i.y));
        a = Y(0, t, n).mul(Y(0, t * (e.type === `strip` ? .35 : 1), r)).mul(z(.82).add(z(.18).mul(z(1).sub(i.x.mul(i.x))))), e.type === `strip` && (a = a.mul(z(1).sub(z(e.gradient ? ? .4).mul(z(1).sub(i.y.add(1).mul(.5))))))
    }
    return r.colorNode = f(I(n)).mul(a), r
}

function mn(e, n, r, i, a) {
    let o = new We,
        s = [],
        c = new B(new Ye(30, 48, 24), new t({
            side: 1,
            depthWrite: !1
        }));
    c.material.colorNode = nt(n, ie(Se(Ge))).rgb.mul(e === `chrome` ? .55 : .3), c.rotation.y = 5, c.position.copy(fn), c.renderOrder = -1, o.add(c), s.push(c.geometry, c.material);
    let l = xt(),
        u = dn[e];
    l.fg.value.set(u.fg), l.bg.value.set(u.bg), l.gain.value = u.gain, l.bgGain.value = u.bgGain, l.aperture.value = 0, l.spotK.value = .35;
    let d = At(l, i, a),
        p = new B(r, d);
    p.frustumCulled = !1, o.add(p), s.push(d);
    let m = new ue(3.5, 3.5, 7, 64, 1, !0);
    m.translate(0, 3.45, 0);
    let h = new t({
        side: 1
    });
    h.colorNode = f(l.bg).mul(l.bgGain).mul(z(.55).add(Y(-.2, 1.2, q.y).mul(.45))), o.add(new B(m, h)), s.push(m, h);
    let g = new Pe(3.6, 48);
    g.rotateX(-Math.PI / 2);
    let _ = new t;
    _.colorNode = f(.02, .02, .022), o.add(new B(g, _)), s.push(g, _);
    let v = un[e];
    for (let e of cn) {
        let [t, n] = v[e.name];
        if (n <= 0) continue;
        let r = pn(e, new ye(t).multiplyScalar(n)),
            i = new B(new se(1, 1), r);
        i.position.set(...e.position), i.scale.set(e.size[0], e.size[1], 1), i.lookAt(fn), i.renderOrder = 10, o.add(i), s.push(i.geometry, r)
    }
    return {
        scene: o,
        dispose() {
            for (let e of s) e.dispose()
        }
    }
}
async function hn(e, t, n, r, i, a) {
    let o = new ze(e),
        s = {},
        c = {
            chrome: mn(`chrome`, t, n, r, i),
            beauty: mn(`beauty`, t, n, r, i)
        },
        l = () => new Promise(e => requestAnimationFrame(() => e()));
    for (let t of [`chrome`, `beauty`]) await Ne(e, () => o.fromScene(c[t].scene, 0, .05, 60, {
        size: a,
        position: fn
    }).dispose(), {
        pmrem: !0
    }), await l();
    for (let t of [`chrome`, `beauty`]) s[t] = o.fromScene(c[t].scene, 0, .05, 60, {
        size: a,
        position: fn
    }), Ze(e, s[t]), c[t].dispose(), await l();
    o.dispose();
    let u = await ct(e, s.chrome, {
            frame: l
        }),
        d = await ct(e, s.beauty, {
            frame: l
        });
    return {
        chrome: u.texture,
        beauty: d.texture,
        dispose() {
            u.dispose(), d.dispose()
        }
    }
}

function gn() {
    return {
        sceneOn: I(1),
        open: I(1),
        openEdge: I(0),
        line: I(0),
        lineLen: I(1),
        lineWob: I(.6),
        lineY: I(0),
        lineHot: I(1),
        after: I(0),
        crt: I(0),
        curve: I(0),
        scanN: I(300),
        scan: I(.55),
        grille: I(.12),
        glitch: I(0),
        glitchSeed: I(0),
        ca: I(.0022),
        time: I(0),
        res: I(new de(1920, 1080)),
        halation: I(.1),
        halTint: I(new ye(1, .28, .12)),
        phos: I(0),
        marks: I(0)
    }
}
async function _n(e) {
    let t = {
            srgb: !1,
            channels: 1,
            repeat: !0
        },
        [n, r, i] = await Promise.all([e.texture(`gen/boot/phosphor.webp`, t), e.texture(`gen/boot/crt_smudge.webp`, t), e.texture(`gen/boot/crt_prints.webp`, t)]);
    for (let e of [n, r, i]) e.wrapS = e.wrapT = y;
    return {
        phos: n,
        smudge: r,
        prints: i
    }
}
var vn = 3257 / 2208,
    yn = et(([e]) => g($e(e.mul(127.1)).mul(43758.5453))),
    bn = et(([e]) => {
        let t = V(e),
            n = g(e),
            r = n.mul(n).mul(z(3).sub(n.mul(2)));
        return W(yn(t), yn(t.add(1)), r).mul(2).sub(1)
    }),
    xn = f(.25, 1, .45);

function Sn(e, t, n, r) {
    let i = gn(),
        o = new Ae,
        s = me(t, n, {
            samples: r.samples
        }),
        c = s.getTextureNode(),
        u = () => {
            let e = new Qe(new Uint8Array([0, 0, 0, 255]), 1, 1);
            return e.magFilter = e.minFilter = m, e.needsUpdate = !0, e
        },
        d = [u(), u(), u()],
        p = nt(d[0]),
        h = nt(d[1]),
        g = nt(d[2]),
        _ = e => z(.3).add(Y(.04, .7, p.sample(e).level(0).r).mul(1.15)),
        y = et(() => {
            let e = l(),
                t = i.res.x.div(i.res.y),
                n = e => e.mul(R(2.8, z(2.8 * vn).div(t))),
                r = e.x.toVar(),
                o = z(0).toVar();
            L(i.glitch.greaterThan(.001), () => {
                let t = z(14).add(yn(i.glitchSeed).mul(26)),
                    n = V(e.y.mul(t)),
                    a = yn(n.mul(13.7).add(i.glitchSeed.mul(91.3))),
                    s = G(.45, yn(n.mul(3.1).add(i.glitchSeed.mul(7.7))));
                r.addAssign(a.sub(.5).mul(.14).mul(i.glitch).mul(s)), r.addAssign(yn(V(e.y.mul(i.res.y).div(3)).add(i.glitchSeed)).sub(.5).mul(.005).mul(i.glitch)), o.assign(i.glitch.mul(.01).mul(s.add(.4)))
            });
            let s = R(r.sub(.5).mul(t), e.y.sub(.5)),
                u = s.mul(z(1).add(i.curve.mul(a(s, s)))),
                d = R(u.x.div(t).add(.5), u.y.add(.5)),
                p = U(i.open, 1e-4),
                m = p.mul(.5),
                y = j(d.y.sub(.5)),
                b = z(1).div(i.res.y),
                S = z(1).sub(Y(m.sub(b), m.add(b), y)),
                C = R(d.x, d.y.sub(.5).div(p).add(.5)),
                T = C.sub(.5),
                E = i.ca.mul(z(.25).add(a(T, T).mul(3))),
                D = R(o, 0),
                O = f(c.sample(C.add(T.mul(E)).add(D)).r, c.sample(C).g, c.sample(C.sub(T.mul(E)).sub(D)).b).mul(S).mul(i.sceneOn).mul(z(1).add(Xe(z(1).sub(M(p, 0, 1)), 3).mul(5))).toVar(),
                k = v(U(m.sub(y), 0).mul(i.res.y).div(-1.5));
            return O.addAssign(f(.75, 1, .85).mul(i.openEdge).mul(k).mul(6).mul(S)), L(i.line.greaterThan(1e-4), () => {
                let e = d.x.sub(.5).mul(2),
                    r = i.time,
                    a = i.lineWob.mul($e(e.mul(2.2).add(r.mul(9))).mul(.9).add($e(e.mul(7.3).sub(r.mul(23))).mul(.5)).add(bn(r.mul(120)).mul(.35))),
                    o = z(.5).add(i.lineY).add(a.div(1080)),
                    s = d.y.sub(o).mul(1080),
                    c = z(1).sub(Y(i.lineLen.sub(.035), i.lineLen.add(.004), j(e))),
                    l = z(1).add(i.lineHot.mul(v(e.mul(e).div(-.018)))).add(i.lineHot.mul(.35).mul(v(e.mul(e).div(-.25)))),
                    u = z(1).add(bn(r.mul(173)).mul(.1)).add($e(r.mul(377)).mul(.06)),
                    p = v(s.mul(s).div(-1.1 * .55)),
                    m = v(s.mul(s).div(-7.22)),
                    h = v(j(s).div(-9)),
                    g = z(.55).add(x(s.mul(Math.PI / 1.6)).mul(.45)),
                    y = v(Xe(j(e).sub(i.lineLen).add(.03).div(.02), 2).negate()),
                    b = W(z(1), _(n(d)), i.phos.mul(.42)),
                    S = f(.72, 1, .78).mul(p).mul(30).add(f(.35, 1, .55).mul(m).mul(3.5).add(xn.mul(h).mul(1.1).mul(g)).mul(b)).add(f(.9, 1, .9).mul(p).mul(y).mul(10));
                O.addAssign(S.mul(c).mul(l).mul(u).mul(i.line));
                let C = e.mul(t);
                O.addAssign(f(.5, 1, .7).mul(v(C.mul(C).div(-4e-4))).mul(v(j(s).div(-16))).mul(.8).mul(i.line).mul(i.lineHot))
            }), L(i.after.greaterThan(.001), () => {
                let e = d.y.sub(.5).mul(1080),
                    t = d.x.sub(.5).mul(2);
                O.addAssign(xn.mul(v(e.mul(e).div(-8))).mul(z(1).sub(Y(.9, 1.05, j(t)))).mul(3).mul(i.after))
            }), L(i.crt.greaterThan(.001), () => {
                let n = z(.5).add(x(d.y.mul(i.scanN).mul(Math.PI * 2)).mul(.5));
                O.mulAssign(W(z(1), z(.55).add(n.mul(.45)), i.scan.mul(i.crt)));
                let r = P(V(be.x), 3),
                    o = f(Cn(r.lessThan(.5)), Cn(r.greaterThan(.5).and(r.lessThan(1.5))), Cn(r.greaterThan(1.5)));
                O.mulAssign(W(f(1), o.mul(1.25), i.grille.mul(i.crt)));
                let s = R(d.x.sub(.5).mul(t), d.y.sub(.5)),
                    c = R(t.mul(.5), .5).sub(.006),
                    l = j(s).sub(c).add(.06),
                    u = w(U(l, R(0))).add(ae(U(l.x, l.y), 0)).sub(.06),
                    p = z(1).sub(Y(-.02, .003, u));
                O.mulAssign(W(z(1), p, i.crt));
                let m = e.mul(R(t, 1)),
                    _ = h.sample(m.mul(.7).add(R(.07, .11))).level(0).r,
                    y = g.sample(m.mul(.95).add(R(.21, .17))).level(0).r,
                    b = _.mul(.45).add(Y(.3, .9, y).mul(.7)),
                    S = Y(.62, 0, w(e.sub(R(.24, .84)).mul(R(1, 1.9)))).mul(.018).add(Y(.9, .2, w(e.sub(R(.8, .1)))).mul(.006));
                O.addAssign(f(.8, .9, 1).mul(S).mul(z(.35).add(b.mul(1.5))).mul(i.crt).mul(p));
                let C = i.line.mul(i.lineHot).mul(v(j(d.y.sub(.5).mul(1080)).div(-80))).mul(z(1).sub(Y(i.lineLen, i.lineLen.add(.15), j(d.x.sub(.5).mul(2)))));
                O.addAssign(xn.mul(b).mul(C.mul(.024)).mul(i.marks).mul(p)), O.addAssign(xn.mul(.0035).mul(v(a(s, s).mul(-2))).mul(i.crt))
            }), U(O, f(0))
        })(),
        b = He(y, .55, .45, .9);
    b.setResolutionScale(r.bloomScale);
    let S = f(i.halTint).mul(a(b.rgb, f(.3, .5, .2))).mul(i.halation),
        C = new Re(e, pe(y.add(b.rgb).add(S), o, l()));
    return {
        C: i,
        look: o,
        glow: b,
        pipe: C,
        scenePass: s,
        setStock(e) {
            p.value = e.phos, h.value = e.smudge, g.value = e.prints
        },
        render(e) {
            C.renderTo(e)
        },
        dispose() {
            C.dispose(), b.dispose(), s.dispose();
            for (let e of d) e.dispose()
        }
    }
}

function Cn(e) {
    return fe(e, z(1), z(.62))
}
var $ = {
        key: e => [`key_${1+e%3}`],
        tab: [`key_3`],
        enter: [`key_enter`],
        open: [`power_on`],
        pass: e => e === `beauty` ? [`beauty_shing`] : e === `wire` ? [`sub_hit`] : [`pass_${e}`],
        eyes: [`eyes_pikon`],
        react: [`eyes_pikon`, `pi`],
        bolt: [`zap_small`]
    },
    wn = {
        volt: {
            fg: `#E6FF00`,
            bg: `#0C0C0D`,
            gain: .62,
            bgGain: 1,
            name: `WAY-STYLE — VOLT × BLACK`,
            refl: 1
        },
        blue: {
            fg: `#2E36FF`,
            bg: `#F5FF00`,
            gain: 1,
            bgGain: .6,
            name: `WAY-STYLE — BLUE × YELLOW`,
            refl: .2
        },
        mono: {
            fg: `#F2F2EE`,
            bg: `#0C0C0D`,
            gain: .3,
            bgGain: 1,
            name: `WAY-STYLE — MONO`,
            refl: 1
        },
        red: {
            fg: `#FF4122`,
            bg: `#070708`,
            gain: .22,
            bgGain: 1,
            name: `WAY-STYLE — RED × BLACK`,
            refl: 1
        }
    },
    Tn = {
        wire: `volt`,
        xray: `mono`,
        holo: `volt`,
        chrome: `blue`,
        beauty: `red`
    },
    En = {
        wire: {
            bloom: .55,
            thr: .9,
            hal: .1,
            contrast: 1.12,
            sat: 1.08,
            shadow: [0, .004, .012],
            high: [0, 0, 0],
            vig: .45,
            grain: .04
        },
        xray: {
            bloom: .45,
            thr: .8,
            hal: .06,
            contrast: 1.1,
            sat: 1.05,
            shadow: [0, .004, .014],
            high: [0, 0, 0],
            vig: .5,
            grain: .045,
            ringGain: .16
        },
        holo: {
            bloom: .45,
            thr: .85,
            hal: .06,
            contrast: 1.1,
            sat: 1.08,
            shadow: [0, .006, .004],
            high: [0, 0, 0],
            vig: .45,
            grain: .045,
            ringGain: .2
        },
        chrome: {
            bloom: .35,
            thr: 1,
            hal: .1,
            contrast: 1.1,
            sat: 1.05,
            shadow: [0, 0, .01],
            high: [.01, .006, 0],
            vig: .45,
            grain: .04
        },
        beauty: {
            bloom: .4,
            thr: .95,
            hal: .16,
            contrast: 1.12,
            sat: 1.06,
            shadow: [.002, 0, .008],
            high: [.012, .004, 0],
            vig: .5,
            grain: .045
        }
    },
    Dn = [-.012, .075, .17, .28, .4, .52, .64, .78, 1],
    On = {
        booted: !1
    },
    kn = [`X-RAY`, `HOLO`, `CHROME`, `BEAUTY`],
    An = {
        wire: {
            part: `cupR`,
            partP: `cupR`,
            lead: {
                dx: 144,
                dy: 64
            },
            leadP: {
                dx: -40,
                dy: 250,
                attach: `edge`,
                bend: 143
            }
        },
        xray: {
            part: `cupL`,
            partP: `shoeL`,
            lead: {
                dx: 0,
                dy: 290,
                attach: `edge`
            },
            leadP: {
                dx: 60,
                dy: 170,
                attach: `edge`
            }
        },
        holo: {
            part: `antenna`,
            partP: `cupL`,
            lead: {
                dx: 150,
                dy: 60
            },
            leadP: {
                dx: 80,
                dy: 250,
                attach: `edge`
            }
        },
        chrome: {
            part: `shoeR`,
            partP: `shoeR`,
            lead: {
                dx: 160,
                dy: 30
            },
            leadP: {
                dx: -40,
                dy: 160,
                attach: `edge`
            }
        },
        beauty: {
            part: `shoeL`,
            partP: `cupL`,
            lead: {
                dx: -170,
                dy: 30
            },
            leadP: {
                dx: 60,
                dy: 280,
                attach: `edge`
            }
        }
    },
    jn = {
        kind: `count`,
        text: st(`クリックでパスを切り替える`, `Click to switch passes`),
        touchText: st(`タップでパスを切り替える`, `Tap to switch passes`),
        unit: `回`,
        labels: kn
    },
    Mn = {
        kind: `tap`,
        text: st(`Funくんをクリックして次へ`, `Click Fun-kun to continue`),
        touchText: st(`Funくんをタップして次へ`, `Tap Fun-kun to continue`),
        progress: 1,
        labels: kn
    },
    Nn = {
        label: st(`ドラッグで回す`, `Drag to spin`),
        touchLabel: st(`横にドラッグで回す`, `Drag sideways to spin`)
    },
    Pn = X.length - 1;

function Fn(e) {
    if (e === `terminal` || e === `boot`) return null;
    let t = An[e],
        n = {
            lead: { ...t.lead
            },
            leadP: { ...t.leadP
            },
            spot: e,
            hopHold: 0
        };
    if (e === `beauty`) return { ...Mn,
        ...n
    };
    let r = X.indexOf(e);
    return { ...jn,
        labels: [...kn],
        ...n,
        count: [r, Pn],
        progress: r / Pn
    }
}
var In = new J,
    Ln = new J,
    Rn = new o,
    zn = new ce,
    Bn = new URLSearchParams(location.search).get(`dofres`) !== `0`,
    Vn = -1e9,
    Hn = {
        get enabled() {
            return ot.enabled
        },
        get ready() {
            return ot.ready
        },
        items: () => ot.items(),
        fraction: () => ot.fraction()
    },
    Un = e => e > Vn / 2,
    Wn = () => new Promise(e => requestAnimationFrame(() => e()));

function Gn(e) {
    let t, n, r, a, c, l = null,
        u = null,
        d = null,
        f = null,
        p = null,
        m = null,
        g = null,
        v = null,
        y = null,
        x = null,
        S = !1,
        C = !1,
        w = null,
        E = [],
        D = `terminal`,
        k = 0,
        A = 0,
        j = -1,
        M = -1,
        P = Vn,
        F = -10,
        ee = 0,
        ne = 0,
        I = 0,
        L = 0,
        R = 0,
        z = 0,
        re = 0,
        ie = 0,
        B = [0, 0],
        V = [0, 0],
        ae = 2.5,
        U = -10,
        se = !1,
        W = -10,
        ce = -10,
        ue = !0,
        de = !1,
        fe = !1,
        pe = null,
        me = null,
        G = {},
        he = null,
        ge = [0, 0],
        _e = [0, 0],
        ve = [0, 0],
        K;

    function be() {
        D === `terminal` && !C && ot.ready && (t.audio.unlock(), t.audio.play($.enter), n.complete(A, Hn), n.collapse(), D = `boot`, M = k, P = Vn, t.ui.dismissHint(`boot-start`))
    }
    async function xe() {
        let e = t.perf.settings,
            n = x = t.assets.lease(),
            r = () => t.perf.restart(2),
            s = performance.now(),
            c = e => {
                try {
                    performance.measure(`boot · ${e}`, {
                        start: s,
                        end: performance.now()
                    })
                } catch {}
                s = performance.now()
            },
            h = (...e) => {
                if (C)
                    for (let t of e) t ? .dispose();
                return C
            };
        r();
        let [_, b, T] = await Promise.all([Et(t.assets), t.assets.loadHDR(`gen/env/studio_256.hdr`), _n(n)]);
        if (h(_, b) || (p ? .setStock(T), c(`fetch logo + hdr`), r(), g = _, v = wt(256), y = b, c(`logo + noise textures`), await Wn(), C) || (s = performance.now(), l = Pt(g, v, {
                mirror: e.mirror
            }), a.add(l.group), c(`world`), await Wn(), C)) return;
        s = performance.now();
        let E = await hn(t.renderer, y, l.ringGeo, g, v, e.env);
        if (h(E)) return;
        m = E, c(`environments`), r(), f = Vt();
        let O = await en(n, {
            lod: e.lod,
            detail: e.detail,
            led: f,
            envChrome: m.chrome,
            envBeauty: m.beauty
        });
        if (h(O)) return;
        u = O, c(`funkun`), r(), a.add(u.object), u.object.updateMatrixWorld(!0), me = ft(u.object);
        for (let [e, t] of [
                [`antennaL`, `AntennaLeft_Mesh01`],
                [`antennaR`, `AntennaRight_Mesh01`],
                [`shoeL`, `LEFT_SHOE`],
                [`shoeR`, `RIGHT_SHOE`]
            ]) {
            let n = ut(u.object, t, e.startsWith(`shoe`) ? .25 : .15);
            n && (G[e] = n)
        }
        if (he = dt(u.object, [`Screen_Mesh01`, `Mesh008_1`]), u.screen) {
            let e = new J(0, Math.sin(12 * i), Math.cos(12 * i)),
                t = new J(0, .628, .226),
                n = new J(1, 0, 0),
                r = new J().crossVectors(e, n).normalize();
            w = {
                LrestInv: new o().makeBasis(n, r, e).setPosition(t).clone().invert(),
                Mrest: u.screen.matrixWorld.clone()
            }
        }
        let k = await sn(t.assets, u.inner);
        if (h(k) || (d = k, !p)) return;
        c(`cage`), r();
        let A = e => t.own ? t.own(e) : e(),
            j = new Be(64, 64, { ...Ke,
                depthBuffer: !1
            }),
            M = D,
            N = a.visible;
        for (let e of X) {
            if (C) break;
            Se(e, !0), Ge(.016), a.visible = !0, s = performance.now(), await Oe(t.renderer, () => A(() => p.render(j)), {
                cancelled: () => C
            }), c(`warm ${e}`), a.visible = N, r(), await Wn()
        }
        j.dispose(), !C && (M !== `terminal` && M !== `boot` && (D = M), Se(D === `terminal` || D === `boot` ? `wire` : D, !0), S = !0, ot.stationReady(`boot`), r())
    }

    function Se(e, n = !1) {
        if (!l || !u || !p) return;
        let i = D;
        if (!n) {
            let n = t.reducedMotion;
            F = k, ee = n ? 0 : 2, ne = (ne + 7.31) % 97, L = 0, R = 0, z = 0, re = 0, e === `beauty` && (I = n ? 0 : 2, W = k, ue = !1), t.audio.play($.pass(e), {
                quantize: `16th`
            })
        }(i !== `terminal` && i !== `boot` || !n) && (D = e), u.setLook(e), d ? .setVisible(e === `wire`);
        let a = wn[Tn[e]],
            o = En[e],
            s = l.U;
        s.fg.value.set(a.fg), s.bg.value.set(a.bg), s.gain.value = o.ringGain ? ? a.gain, s.bgGain.value = a.bgGain;
        let c = e === `beauty`;
        s.grid.value = +!c, s.refl.value = c ? .7 : .32 * a.refl, s.rough.value = c ? .25 : .55, s.shadow.value = c ? .9 : .75, s.cove.value = e === `wire` || c ? 0 : 1, l.setMirrorRows(!0), Xt.xrayGain.value = 1.7, p.look.grade({
            contrast: o.contrast,
            saturation: o.sat,
            shadowTint: o.shadow,
            highTint: o.high,
            vignette: o.vig,
            grain: o.grain
        }), p.C.halation.value = o.hal;
        for (let e of u.glass) e.envMapIntensity = 1.4;
        r ? .set(e), we()
    }

    function Ce() {
        let e = X.indexOf(D);
        e >= 0 && e < X.length - 1 && Se(X[e + 1])
    }

    function we() {
        if (!t) return;
        let e = Fn(D),
            n = e && S && c ? Ee(D) : null,
            r = n && he ? he.at(t.stage, c) : null,
            i = e => Math.round(e / 2),
            a = `${D}|${n?`${i(n[0])},${i(n[1])}`:``}|${r?r.map(i).join(`,`):``}`;
        pe !== a && (pe = a, t.gate(e && n ? { ...e,
            target: [n[0], n[1]],
            keepClear: r ? [r] : void 0
        } : e))
    }

    function Ee(e) {
        let n = K ? .portrait ? An[e].partP : An[e].part;
        if (n === `cupR` || n === `cupL`) return me ? me.at(t.stage, c, ge, n === `cupR` ? `right` : `left`) : null;
        let [r, i] = n === `antenna` ? [G.antennaL, G.antennaR] : [G.shoeL, G.shoeR], a = r ? lt(t.stage, c, r.world(), _e) : null, o = i ? lt(t.stage, c, i.world(), ve) : null;
        if (!a || !o) return a ? ? o;
        let s = n !== `shoeL`;
        return a[0] >= o[0] === s ? a : o
    }

    function De() {
        de || (de = !0, U = k, t.audio.play($.react, {
            quantize: `16th`
        }), t.advance())
    }
    let q = new Ue,
        ke = new J,
        Ae = {
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0
        };

    function je() {
        let e = 1 / 0,
            t = 1 / 0,
            n = -1 / 0,
            r = -1 / 0;
        for (let i of u.meshes)
            if (i.visible) {
                i.geometry.boundingBox || i.geometry.computeBoundingBox(), q.copy(i.geometry.boundingBox).applyMatrix4(i.matrixWorld);
                for (let i = 0; i < 8; i++) ke.set(i & 1 ? q.max.x : q.min.x, i & 2 ? q.max.y : q.min.y, i & 4 ? q.max.z : q.min.z).project(c), e = Math.min(e, ke.x), n = Math.max(n, ke.x), t = Math.min(t, ke.y), r = Math.max(r, ke.y)
            }
        let i = .08,
            a = K ? .aspect ? ? 16 / 9;
        return Ae.x0 = e - i / a, Ae.x1 = n + i / a, Ae.y0 = t - i, Ae.y1 = r + i, Ae
    }
    let Me = (e, t) => {
        let n = je();
        return e >= n.x0 && e <= n.x1 && t >= n.y0 && t <= n.y1
    };

    function Ne() {
        D = `boot`, M = k - .085, P = Vn, F = -10, ee = 0, I = 0, U = -10, se = !1, W = -10, ue = !0, L = 0, R = 0, z = 0, re = 0, ie = 0, n.hide(), Se(`wire`, !0)
    }

    function Pe() {
        if (!u) return;
        let e = u.rig.idle(k),
            t = k - F,
            n = A / T % 1;
        if (e.upper.squash += .018 * Math.exp(-n / .08), D === `wire` && Un(P) && k - P < 1.3793103448275863 && (e.upper.y = 0, e.upper.squash = 0, e.upper.roll = 0), D !== `terminal` && D !== `boot`) {
            let [n, r] = {
                wire: [.15, 0],
                xray: [.3, 0],
                holo: [.14, -.14],
                chrome: [.2, .1],
                beauty: [-.42, 0]
            }[D], i = _(t, 0, 3, .5);
            if (e.upper.squash += .07 * Math.exp(-t / .07) - .03 * b(t, .05, 1, 7, 4), e.upper.yaw += n * i + V[0] * .5, e.upper.pitch += r * i + V[1] * .5, e.antenna += .35 * b(t, 0, 1, 7, 5), D === `beauty`) {
                e.upper.squash += .16 * b(t, 0, 1, 7, 2.6), e.antenna += .5 * b(t, 0, 1, 6, 4), e.upper.yaw += V[0] * .5, e.upper.pitch += V[1] * .5;
                let n = k - U;
                n >= 0 && n < 1 && (e.upper.y += .05 * Math.sin(Math.min(1, n / .3) * Math.PI), e.upper.squash += .12 * b(n, 0, 1, 7, 3), e.antenna += .4 * b(n, 0, 1, 6, 5))
            }
        }
        u.rig.apply(e), u.object.updateMatrixWorld(!0)
    }

    function Fe() {
        if (!f || !u) return;
        f.clear(), f.u.time.value = k, f.u.flash.value = 0, f.u.scan.value = 0;
        let e = k > ae && k < ae + .09;
        if (k > ae + .09 && (ae = k + 2.2 + te(Math.floor(k * 7)) * 2.6), D === `xray`) f.eyes(`happy`, It, .55);
        else if (D === `chrome`) f.eyes(e ? `blink` : `happy`, It, .85, e ? [0, -2] : [Math.round(B[0]), Math.round(B[1])]);
        else if (D === `beauty`) {
            let n = (k - W - .03) / .2;
            if (!(n < 0)) {
                if (n < .35) {
                    let e = Math.round(s(0, 17, Te.out(n / .35)));
                    for (let t = -e; t <= e; t++) f.set(t, 1, It, 1.4)
                } else if (n < .7) {
                    let e = Math.round(s(0, 5, (n - .35) / .35));
                    for (let t = -e; t <= e; t++)
                        for (let n = -17; n <= 17; n++) f.set(n, 1 + t, It, Math.abs(t) === e ? 1.2 : .25)
                } else if (se) {
                    let e = 1 + .35 * Math.exp(-(A % oe / .05)),
                        t = zt.length,
                        n = zt[0].length;
                    for (let r = 0; r < t; r++)
                        for (let t = 0; t < n; t++) zt[r][t] === `#` && f.set(t + Bt[0], Bt[1] - r, Lt, e)
                } else {
                    let r = k - U < .9,
                        i = k - W < .5 ? `open` : e ? `blink` : r ? `happy` : `open`;
                    f.eyes(i, It, 1, i === `blink` ? [0, -2] : [Math.round(B[0]), Math.round(B[1])]), n < 1 && (f.u.scan.value = 1 - (n - .7) / .3), ue || (ue = !0, t.audio.play($.eyes, {
                        quantize: `16th`
                    }))
                }
            }
        }
        f.upload(), w && u.screen && f.u.ledMat.value.copy(w.LrestInv).multiply(w.Mrest).multiply(Rn.copy(u.screen.matrixWorld).invert())
    }
    let Re = new J,
        ze = new J,
        Ve = (e, t, n) => Re.set(Math.sin(e * i) * t, n, Math.cos(e * i) * t);

    function He(e, t) {
        switch (e) {
            case `terminal`:
            case `boot`:
            case `wire`:
                {
                    let e = Un(P) ? N((k - P) / Le) : 0,
                        t = Te.inOut(e);
                    return Ve(s(-64, 18, t), s(1.3, 1.78, t), s(.08, .2, Te.out(e))),
                    ze.set(0, s(.12, .5, H(0, 1, N(qe() - .07))), 0),
                    {
                        fov: s(35, 30, t),
                        roll: 0,
                        r: .4
                    }
                }
            case `xray`:
                {
                    let e = _(t, 0, 1.4, .85);
                    return Ve(s(-16, -7, e), s(1.12, 1, e), s(.56, .6, e)),
                    ze.set(0, .6, .1),
                    {
                        fov: 30,
                        roll: 0,
                        r: .27
                    }
                }
            case `holo`:
                {
                    let e = _(t, 0, 1.5, .8);
                    return Re.set(s(.6, .42, e), s(1.3, 1.18, e), s(1.62, 1.46, e)),
                    ze.set(0, .45, 0),
                    {
                        fov: 36,
                        roll: s(-.26, .05, e),
                        r: .42
                    }
                }
            case `chrome`:
                {
                    let e = _(t, 0, 1.7, .8);
                    return Ve(s(26, 18, e), s(1.02, .9, e), s(.035, .06, e)),
                    ze.set(0, s(.47, .55, e), 0),
                    {
                        fov: 44,
                        roll: s(.06, .03, e),
                        r: .36
                    }
                }
            case `beauty`:
                {
                    let e = 1 + .06 * b(t, 0, 1, 9, 3);
                    return Ve(-34 + 5 * b(t, 0, 1, 8, 2.2), s(1.95, 1.84, Te.out(N(t / (2 * T)))) * e, .22),
                    ze.set(0, .5, 0),
                    {
                        fov: 30,
                        roll: 0,
                        r: .4
                    }
                }
        }
    }

    function Ge(e) {
        Pe(), Fe();
        let n = k - F,
            r = He(D, n);
        In.subVectors(Re, ze), In.applyAxisAngle(Ln.set(0, 1, 0), L);
        let a = Ln.set(In.z, 0, -In.x).normalize();
        In.applyQuaternion(zn.setFromAxisAngle(a, -R));
        let o = K ? .aspect ? ? 16 / 9,
            s = r.fov,
            l = 0;
        if (o < 1.25) {
            let e = In.length(),
                t = r.r * 1.04,
                n = Math.min(Math.max(Math.tan(r.fov * i / 2), t / e / o), Math.tan(29 * i));
            s = 2 * Math.atan(n) / i;
            let a = t / (n * o);
            a > e && In.multiplyScalar(a / e), l = K ? .portrait ? .075 : .03
        }
        c.position.copy(ze).add(In), c.up.set(0, 1, 0), c.lookAt(ze);
        let u = D === `xray` ? .003 : .005;
        c.translateX(O(k * .7, 3) * u), c.translateY(O(k * .7, 8) * u), c.rotateZ(r.roll + O(k * .5, 12) * u * .8), n >= 0 && n < .6 && D !== `terminal` && D !== `boot` && !t.reducedMotion && (c.translateX(b(n, 0, .009, 14, 13)), c.translateY(b(n, 0, .007, 14, 17))), c.fov = s, c.aspect = o, c.near = .03, c.far = 60, l ? c.setViewOffset(1e3 * o, 1e3, 0, 1e3 * l, 1e3 * o, 1e3) : c.clearViewOffset(), c.updateProjectionMatrix(), c.updateMatrixWorld()
    }

    function qe() {
        if (!Un(P)) return -.05;
        let e = k - P,
            t = Dn[0];
        for (let n = 0; n < 8; n++) t += (Dn[n + 1] - Dn[n]) * _(e, n * le + .01, 7.5, .62);
        return e > 1.3293103448275863 && (t += (e - (Le - .05)) * 8), t
    }
    let Je = {
        id: e.id,
        async load(e) {
            t = e, a = new We, a.background = new ye(0), c = new Ie(30, 16 / 9, .03, 60), K = t.stage.info, p = Sn(t.renderer, a, c, {
                samples: t.perf.settings.msaa,
                bloomScale: t.perf.settings.bloom
            }), n = new gt(t.layer, t.backend === `webgpu` ? `WEBGPU` : t.params.get(`gl`) === `1` ? `WEBGL2` : `WEBGL2 (FALLBACK)`, t.reducedMotion), r = new vt(t.layer), n.button.addEventListener(`click`, () => be()), E = [t.input.onTap(() => {
                D === `terminal` && !t.layer.hidden && be()
            }), t.input.onKey(e => {
                D === `terminal` && !t.layer.hidden && (e.code === `Enter` || e.code === `NumpadEnter`) && (e.preventDefault(), be())
            })], t.audio.preloadShots([...$.key(0), ...$.key(1), ...$.key(2), ...$.enter, ...$.open, ...X.flatMap(e => $.pass(e)), ...$.eyes, ...$.bolt]);
            let i = t.params.get(`pass`);
            (i && X.includes(i) || On.booted || t.audio.unlocked) && (D = i && X.includes(i) ? i : `wire`, n.hide(), P = -Le * 4), we(), Object.assign(window, {
                __boot: {
                    get phase() {
                        return D
                    },
                    get ready() {
                        return S && ot.ready
                    },
                    get openAt() {
                        return P
                    },
                    get t() {
                        return k
                    },
                    get fk() {
                        return u
                    },
                    get scene() {
                        return a
                    },
                    get camera() {
                        return c
                    },
                    get cage() {
                        return d
                    },
                    get cleared() {
                        return de
                    },
                    pass: e => S && Se(e),
                    foot: () => u ? { ...je()
                    } : null
                }
            }), await Promise.race([document.fonts.load(`40px VT323`), new Promise(e => setTimeout(e, 1500))]);
            let o = xe().catch(e => console.error(`[boot] 3D failed`, e));
            D !== `terminal` && await o
        },
        enter(e) {
            de = !1, e !== null && D !== `terminal` && S ? Ne() : D !== `terminal` && D !== `boot` && S && Se(D, !0), pe = null, we()
        },
        update(e) {
            let r = e.dt;
            k += r, A = e.clock;
            let i = e.input,
                a = i.p;
            if (D === `terminal`) {
                t.layer.hidden || ot.mark(`terminal`);
                let e = n.tick(A, Hn);
                e !== j && e > 0 && (e <= 9 ? t.audio.play($.key(e), {
                    quantize: `none`
                }) : e === 10 && t.audio.play($.tab, {
                    quantize: `none`
                }), j = e), n.ready && document.activeElement === document.body && !t.ui.touch && n.button.focus({
                    preventScroll: !0
                })
            }
            if (D === `boot` && p) {
                let e = k - M;
                if (!Un(P) && S && e > .42) {
                    let e = t.clock.next(`beat`, .02, A);
                    P = k + (e - A), t.audio.play($.open, {
                        quantize: `beat`
                    })
                }
                Un(P) && k >= P && (D = `wire`, On.booted = !0, Se(`wire`, !0))
            }
            D === `wire` && Un(P) && k - P > .5 && n.hide();
            let o = D !== `terminal` && D !== `boot` && S;
            if (e.active && o) {
                if (a.down && a.dragging) {
                    let e = a.touch ? .006 : .0045;
                    z = z * .5 + -a.dragCx * e / Math.max(r, .001) * .5, re = re * .5 + a.dragCy * e * .6 / Math.max(r, .001) * .5, t.ui.dismissHint(`boot-drag`), ie = 0
                }
                let e = D !== `beauty` || k - F > .45;
                a.clicked && (D === `beauty` ? e && Me(a.nx, a.ny) && De() : Ce()), D === `beauty` && a.longPress && (se = !0, t.audio.play($.bolt, {
                    quantize: `16th`
                }));
                let n = !!document.activeElement ? .closest ? .(`button, a, [role="button"], dialog`);
                (i.pressed(`ArrowRight`) || !n && i.pressed(`Enter`, `NumpadEnter`, `Space`)) && (D === `beauty` ? e && De() : Ce())
            }
            if (fe = D === `beauty` && !de && e.active && S && !a.touch && a.presence > .5 && Me(a.nx, a.ny), a.down || (se = !1), L += z * r, R = N(R + re * r, -.32, .26), z *= Math.exp(-r * 3.2), re *= Math.exp(-r * 3.2), ie += r, !a.down && ie > 3 && (L += Math.sin(k * .35) * .02 * r), u && o) {
                let e = In.set(0, .62, .2).project(c),
                    t = a.touch ? a.down || k - ce < 1.5 ? 1 : 0 : a.presence;
                a.down && (ce = k);
                let n = [Math.sin(k * .7) * 1.2, Math.sin(k * .43 + 1) * .6],
                    i = t > .3 ? N((a.nx - e.x) * 7, -3, 3) : n[0],
                    o = t > .3 ? N((a.ny - e.y) * 5, -2, 2) : n[1];
                B[0] = h(B[0], i, 12, r), B[1] = h(B[1], o, 12, r), V[0] = h(V[0], N(i / 3, -1, 1) * .3, 5, r), V[1] = h(V[1], N(-o / 2, -1, 1) * .12, 5, r)
            }
            if (!p) return;
            let s = p.C,
                d = p.look;
            if (s.time.value = k, s.res.value.set(t.renderer.domElement.width, t.renderer.domElement.height), d.time.value = A, !S || !l || !u) {
                Ye();
                return
            }
            let f = l.U,
                m = A / T,
                g = Math.floor(m),
                _ = m - g;
            f.time.value = A, f.scroll.value = (g + Te.out(N(_ / .6))) * .18 + A * .05, Xt.time.value = k, Ge(r), we();
            let v = c.position.x,
                y = c.position.z,
                b = Math.hypot(v, y) || 1;
            f.spot.value.set(-v / b * 2.6, .9, -y / b * 2.6), f.focus.value = c.position.distanceTo(ze), f.dofScale.value = Bn ? Math.min(1, t.renderer.getPixelRatio() * K.cssH / (K.portrait ? 1688 : 1080)) : 1, f.aperture.value = (D === `xray` ? 1.3 : 1) * (K.portrait ? .65 : 1), u.nodes.shoeL ? .getWorldPosition(f.shoeL.value), u.nodes.shoeR ? .getWorldPosition(f.shoeR.value), f.shoeL.value.y -= .12, f.shoeR.value.y -= .12;
            let x = D === `wire` && Un(P) && k - P < 1.3793103448275863,
                C = x ? qe() : 10;
            Z.scanY.value = C, f.scanOn.value = +!!x, f.scanY.value = x ? C < .99 ? C * 4.7 - .05 : 50 : 100, f.heat.value = x ? 1 - H(Le - .12, Le, k - P) : 0, l.scanner.position.y = N(C, 0, 1.2), l.scanTime.value = k, l.scanAmt.value = x ? H(0, .08, k - P) * (1 - H(Le - .16, Le - .03, k - P)) * (.8 + .4 * Math.exp(-((k - P) / le % 1) / .15)) : 0, l.scanner.visible = l.scanAmt.value > .001, Z.res.value.set(t.renderer.domElement.width, t.renderer.domElement.height);
            let w = En[D === `terminal` || D === `boot` ? `wire` : D];
            s.ca.value = .0022 + (D === `boot` ? 0 : .01 * Math.exp(-Math.max(0, k - F) / .06)), s.glitch.value = 0, ee > 0 && (s.glitch.value = 1, s.glitchSeed.value = ne + ee, ee--), d.impact.value = 0, I > 0 && (d.impact.value = 1, d.impactThr.value = .07, I--), p.glow.strength.value = w.bloom + (D === `beauty` ? .8 * Math.exp(-Math.max(0, k - F) / .1) : 0), p.glow.threshold.value = w.thr, d.aspect.value = c.aspect, d.flash.value = 0, Ye()
        },
        render(e) {
            let n = t.renderer;
            if (!p || D === `terminal`) {
                n.setRenderTarget(e), n.setClearColor(0, 1), n.clear(), n.setRenderTarget(null);
                return
            }
            a.visible = S && !(D === `boot` && (!Un(P) || k < P)), p.render(e)
        },
        layout(e) {
            K = e, n.layout(e.portrait), p && (p.look.aspect.value = e.aspect)
        },
        exit() {},
        dispose() {
            C = !0;
            for (let e of E) e();
            p ? .dispose(), d ? .dispose(), u ? .dispose(), f ? .dispose(), l ? .dispose(), m ? .dispose(), g ? .dispose(), v ? .dispose(), y ? .dispose(), x ? .release(), n.dispose(), r.dispose()
        },
        hints() {
            return !S || D === `terminal` || D === `boot` || D === `wire` || D === `beauty` || t.ui.isDismissed(`boot-drag`) ? [] : [{
                id: `boot-drag`,
                kind: `drag`,
                at: [300, 950],
                p: [540, 150],
                ...Nn
            }]
        },
        cursor: () => D === `terminal` ? ot.ready ? `pointer` : `wait` : t.input.p.dragging ? `grabbing` : D === `beauty` ? fe ? `pointer` : `grab` : `pointer`,
        hud: () => D === `terminal` || D === `boot` && !On.booted ? `off` : D === `wire` && K ? .portrait ? `dark` : `light`
    };

    function Ye() {
        let e = p.C;
        if (e.sceneOn.value = 1, e.open.value = 1, e.openEdge.value = 0, e.line.value = 0, e.after.value = 0, e.crt.value = 0, e.curve.value = 0, e.phos.value = 0, e.marks.value = 0, D === `boot` || D === `wire` && Un(P) && k - P < .5) {
            let t = k - M,
                n = .085,
                r = Un(P) && k >= P;
            if (r) {
                let t = k - P,
                    n = _(k, P, 3.3, .6);
                e.open.value = Math.max(.0022, .0022 + .9978 * n), e.openEdge.value = Math.exp(-t / .06), e.line.value = 1 - H(0, .04, t), e.lineLen.value = 1.06, e.lineHot.value = 5.1, e.lineWob.value = .6, e.after.value = Math.exp(-t / .08);
                let r = 1 - H(.02, .42, t);
                e.crt.value = r, e.curve.value = .09 * r, e.phos.value = r, e.marks.value = r, e.ca.value = .0022 + .012 * Math.exp(-t / .08);
                let i = H(.04, .34, t);
                p.glow.strength.value = s(.9, En.wire.bloom, i), p.glow.threshold.value = s(.55, En.wire.thr, i), e.halTint.value.setRGB(s(.25, 1, i), s(1, .28, i), s(.45, .12, i))
            } else {
                e.sceneOn.value = 0, e.crt.value = 1, e.curve.value = .09, e.line.value = H(n, .115, t), e.lineLen.value = .93 + .13 * _(t, n, 5, .32) + .004 * Math.sin(k * 60 * Math.PI), e.lineWob.value = 5 * Math.exp(-(t - n) / .08) + .6, e.lineY.value = 0, e.phos.value = 1, e.marks.value = 1;
                let r = Un(P) ? H(P - .25, P, k) : H(.3, 1.2, t) * .5;
                e.lineHot.value = 1 + 1.6 * H(n, .5, t) + 2.5 * r
            }
            r || (p.glow.strength.value = .9, p.glow.threshold.value = .55, e.halTint.value.setRGB(.25, 1, .45), e.halation.value = .18)
        } else e.halTint.value.setRGB(1, .28, .12)
    }
    return Je
}
export {
    Gn as
    default
};