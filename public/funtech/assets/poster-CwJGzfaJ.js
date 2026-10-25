import {
    $t as e,
    At as t,
    B as n,
    Bn as r,
    Bt as i,
    Ct as a,
    E as o,
    Et as s,
    I as c,
    It as l,
    J as u,
    O as d,
    P as f,
    Pt as p,
    St as m,
    T as h,
    Tt as g,
    U as _,
    Wn as v,
    Wt as y,
    Y as b,
    Z as x,
    Zn as S,
    _r as C,
    bt as w,
    g as T,
    hn as E,
    ht as D,
    in as O,
    jt as k,
    m as ee,
    qn as te,
    rr as ne,
    t as re,
    ut as A,
    vr as j,
    w as M,
    xt as ie,
    yt as N,
    zt as ae
} from "./post-DJ5SZDIO.js";
import {
    i as P,
    r as F
} from "./index-BSu4tWCh.js";
import {
    a as oe,
    o as se,
    s as I
} from "./kit-D_lqBZ3L.js";
import {
    a as L,
    d as R,
    f as z,
    i as B,
    m as V,
    n as H,
    o as ce,
    p as U,
    u as W
} from "./rest-CKA-rbml.js";
import {
    d as le,
    i as ue,
    l as de,
    p as fe,
    r as G,
    s as pe,
    t as me,
    u as he
} from "./post-BUOiK4aL.js";
var K = new E(V).convertSRGBToLinear(),
    q = Math.hypot(16 / 9, 1),
    J = e => w(0, e.x).mul(w(e.x, 1)).mul(w(0, e.y)).mul(w(e.y, 1));

function ge(e, t, r) {
    let i = t.getTextureNode();
    return M(() => {
        let t = a(),
            c = s(e.sample(t)).add(i.sample(t).rgb).toVar();
        return h(r.on.greaterThan(.5), () => {
            let a = s(K.r, K.g, K.b),
                l = g(r.aspect, 1).mul(_(q).div(r.aspect.mul(r.aspect).add(1).sqrt())),
                f = t.sub(.5).mul(l),
                p = n(f, f),
                m = _(1).add(r.barrel.mul(p)).add(r.barrel.mul(.6).mul(p).mul(p)).div(r.zoom),
                h = r.spin.mul(p),
                v = h.cos(),
                y = h.sin(),
                S = g(f.x.mul(v).sub(f.y.mul(y)), f.x.mul(y).add(f.y.mul(v))).mul(m).div(l).add(.5),
                C = S.sub(.5),
                w = u(C.mul(l)),
                T = r.ca.mul(_(.25).add(w.mul(w).mul(w).mul(3.2))),
                E = s(0).toVar(),
                O = _(0).toVar(),
                k = he(D).sub(.5);
            o(6, ({
                i: t
            }) => {
                let n = _(t).add(k).div(5).sub(.5).mul(r.radial),
                    o = _(1).sub(d(n).div(b(r.radial, 1e-4)).mul(.6)),
                    c = S.add(C.mul(n)),
                    l = c.add(C.mul(T)),
                    u = c.sub(C.mul(T)),
                    f = s(e.sample(l).r, e.sample(c).g, e.sample(u).b).add(i.sample(c).rgb);
                E.addAssign(x(a, f, s(J(l), J(c), J(u))).mul(o)), O.addAssign(o)
            }), c.assign(E.div(O))
        }), c
    })()
}
async function _e(e, t) {
    let n = {
            on: m(0),
            barrel: m(0),
            zoom: m(1),
            ca: m(0),
            radial: m(0),
            spin: m(0),
            aspect: m(16 / 9)
        },
        r = await B(e, {
            cancelled: t,
            label: `poster · c19`,
            post: (e, t) => ge(e, t, n)
        });
    if (!r) return null;
    let i = r,
        a = e.renderer,
        o = i.f,
        s = new j;

    function c(e, t, r = !1) {
        U(i, e, t), s.set(0, I - H, 0).applyEuler(i.fA.rotation).add(i.fA.position), ce(i, e, r ? `blink` : `open`), z(i, t, a.domElement.height), n.on.value = 0
    }

    function l(e, t, n) {
        W(i, e, n), e.fov = R(t.aspect, t.portrait), e.aspect = t.aspect, e.updateProjectionMatrix(), e.updateMatrixWorld(!0)
    }

    function u(e) {
        i.layout(e), n.aspect.value = e.aspect
    }
    u(e.stage.info);
    let d = new j,
        f = 0,
        p = 0,
        h = 0;
    for (let e of o.wp) {
        let t = d.copy(e).sub(o.scC);
        f = Math.max(f, Math.abs(t.dot(o.vr)))
    }
    for (let e of o.wp) {
        let t = d.copy(e).sub(o.scC);
        Math.abs(t.dot(o.vr)) > f * .96 && (p += -t.dot(o.vn), h++)
    }
    return p = h ? p / h : 0, {
        scene: i.scene,
        inner: i.inner,
        camera: i.camera,
        portal: i.portal,
        portalRT: i.portalRT,
        C: i.C,
        PU: i.PU,
        look: i.look,
        glow: i.glow,
        L: n,
        f: o,
        fk: i.fk,
        TINT: i.TINT,
        glass: i.glass,
        frames: {
            endPos: i.frames.endPos,
            endQuat: i.frames.endQuat,
            axisQuat: i.frames.axisQuat,
            restDist: i.frames.restDist,
            halfW: f,
            edgeDepth: p
        },
        headW: s,
        rest: c,
        restPose: l,
        layout: u,
        drift: (e, t) => L(o, e, t),
        updatePortal: e => i.updatePortal(e),
        renderInner: () => i.renderInner(),
        textures: () => i.textures(),
        render(e) {
            i.render(e)
        },
        dispose() {
            i.dispose()
        }
    }
}
var Y = {
        from: .95,
        to: 1
    },
    ve = {
        name: `tube`,
        duration: .8,
        build: ({
            a: e,
            b: t,
            uv: n,
            p: r,
            res: i
        }) => {
            let a = r.mul(r),
                o = i.x.div(i.y),
                l = n.mul(2).sub(1),
                p = l.yx.mul(l.yx),
                m = l.mul(_(1).add(p.mul(g(.9, 1.25)).mul(a.mul(.09)))).div(_(1).add(a.mul(.06))).mul(.5).add(.5),
                h = N(0, .004, m.x).mul(N(1, .996, m.x)).mul(N(0, .004, m.y)).mul(N(1, .996, m.y)),
                v = _(1).sub(a.mul(.32).mul(c(n.y.mul(i.y).mul(Math.PI / 2.25)).mul(.5).add(.5))),
                y = m.mul(_(1).sub(m.yx)),
                b = x(_(1), A(f(y.x.mul(y.y).mul(22), 0, 1), .4), a),
                S = e(f(m, 0, 1)).rgb.mul(v).mul(b).mul(x(_(1), h, a)).mul(_(1).add(a.mul(.25))),
                C = N(Y.from, Y.to, r),
                w = s(1, .6, .45).mul(N(.1, 0, d(r.sub(.9))).mul(.06)),
                T = u(n.sub(.5).mul(g(o, 1)));
            return P(x(F(S), F(t(n).rgb), C)).add(w.mul(N(.9, .2, T)))
        }
    },
    ye = [ve],
    X = 1.08,
    be = .9,
    xe = .85,
    Z = X,
    Se = e => 1 - (1 - p(e / X)) ** 4.2,
    Ce = Y.to,
    Q = new j,
    we = new j,
    Te = new j,
    $ = new C,
    Ee = new r;

function De(n) {
    let r = n.arrive.duration ? ? ve.duration ? ? .8,
        o, s, c = null,
        u = null,
        d = null,
        f = null,
        h = null,
        g = [],
        _ = new te(33, 16 / 9, .05, 140);
    _.updateProjectionMatrix = () => {};
    let b = m(1),
        x = new e({
            transparent: !0,
            depthTest: !1,
            depthWrite: !1
        });
    x.name = `poster-tube-blend`;
    let C = null,
        w = !1,
        E = !1,
        D = 0,
        A = 0,
        M = null,
        N = -1,
        P = !1,
        F = 0,
        I = 0,
        L = 0,
        z = 0,
        B = 1,
        V = 0,
        H = !1,
        ce = 0,
        U = {
            pos: new j(...G.tv.pos),
            q: new S,
            ext: [0, 0, 0, 0]
        },
        W = {
            pos: new j,
            q: new S,
            ext: [0, 0, 0, 0],
            near: 1
        },
        he = new j(0, fe + de, 0),
        K = [];

    function q() {
        return Math.max(38, R(s.aspect, s.portrait))
    }

    function J() {
        let e = Math.tan(q() * t / 2) * s.aspect;
        return Math.max(.3, d.frames.halfW / e - d.frames.edgeDepth)
    }

    function ge(e, n) {
        let r = d,
            a = r.camera,
            c = r.frames,
            l = Se(e),
            u = k.inOut(p(e / be)),
            f = J(),
            m = f * (c.restDist / f) ** +l;
        a.near = .03, a.far = 200, a.position.copy(r.f.scC).addScaledVector(r.f.vn, m).add(r.drift(n, Q).multiplyScalar(l)), a.quaternion.copy(c.axisQuat).slerp(c.endQuat, u), o.reducedMotion || a.rotateZ(.14 * Math.sin(Math.PI * p(e / xe)) * (1 - p(e / X)));
        let h = Math.tan(q() * t / 2),
            g = Math.tan(R(s.aspect, s.portrait) * t / 2);
        a.fov = 2 * Math.atan(i(h, g, u)) / t, a.aspect = s.aspect, a.updateProjectionMatrix(), a.updateMatrixWorld(!0)
    }

    function Y() {
        let e = d.C.portalRes.value.x / d.C.portalRes.value.y,
            n = Math.tan(G.tv.fov * t / 2);
        U.pos.set(...G.tv.pos), Ee.lookAt(U.pos, Q.set(...G.tv.target), v.DEFAULT_UP), U.q.setFromRotationMatrix(Ee), U.ext = [-n * e, n * e, n, -n]
    }

    function ye() {
        let e = d,
            t = e.portal.camera,
            n = t.projectionMatrix.elements;
        W.pos.copy(he).add(Q.copy(t.position).sub(e.headW)), W.q.copy(t.quaternion), W.ext = [(n[8] - 1) / n[0], (1 + n[8]) / n[0], (1 + n[9]) / n[5], (n[9] - 1) / n[5]];
        let r = e.f,
            i = Q.subVectors(r.pb, r.pa).normalize().cross(we.subVectors(r.pcc, r.pa).normalize()).normalize();
        W.near = Math.max(.05, Te.subVectors(t.position, r.pa).dot(i) * .9)
    }

    function De(e) {
        ce = e, _.position.lerpVectors(U.pos, W.pos, e), _.quaternion.slerpQuaternions(U.q, W.q, e), _.updateMatrixWorld(!0);
        let [n, r, a, s] = U.ext, [c, l, u, d] = W.ext, f = i((n + r) / 2, (c + l) / 2, e), p = i((a + s) / 2, (u + d) / 2, e), m = Math.exp(i(Math.log((r - n) / 2), Math.log((l - c) / 2), e)), h = Math.exp(i(Math.log((a - s) / 2), Math.log((u - d) / 2), e)), g = i(.05, W.near, e * e);
        _.near = g, _.far = 140, _.projectionMatrix.makePerspective((f - m) * g, (f + m) * g, (p + h) * g, (p - h) * g, g, 140, o.renderer.coordinateSystem), _.projectionMatrixInverse.copy(_.projectionMatrix).invert(), _.fov = 2 * Math.atan(h) / t, _.aspect = m / h
    }

    function Oe() {
        return o.renderer.getDrawingBufferSize($), p(Math.max(960 / Math.max(1, $.x), 540 / Math.max(1, $.y)), .2, 1)
    }

    function ke() {
        if (!c || !u || !f) return;
        o.renderer.getDrawingBufferSize($), c.prepare(_, Math.round($.y * Oe()), p(270 / Math.max(1, $.y), .08, .5)), u.track(_, le), u.look.time.value = A;
        let e = d ? .glass,
            t = c.U.glass.value;
        if (e && t.set(e.x, e.y, e.z, i(e.x * _.position.x + e.y * _.position.y + e.z * _.position.z, e.w, ce)), !h && c.fk) {
            let e = [];
            c.fk.object.traverse(t => {
                t.isMesh && e.push(t)
            }), h = e
        }
        let n = h ? ? [];
        for (let e = 0; e < n.length; e++) g[e] = n[e].layers.mask, n[e].layers.mask = 64;
        try {
            u.render(f)
        } finally {
            t.set(0, 0, 1, 1e4);
            for (let e = 0; e < n.length; e++) n[e].layers.mask = g[e]
        }
    }

    function Ae(e) {
        if (!d || !C) return;
        let t = o.renderer,
            n = t.getRenderTarget(),
            r = t.autoClear;
        b.value = e, t.setRenderTarget(d.portalRT), t.autoClear = !1, C.render(t), t.autoClear = r, t.setRenderTarget(n)
    }

    function je(e, t, n, r) {
        let a = d,
            s = e * Z,
            l = Se(s);
        V = l, a.rest(t, A, e > .76 && e < .79), ge(s, t), a.updatePortal(a.camera.position), I = y(.48, .66, e), c && (r && (c.energy = z * (1 - y(0, .3, e)), c.groove = i(B, .08, y(.02, .4, e)), c.restFace = e > .25 ? `open` : `happy`, c.update(A, A, n)), ye(), De(k.inOut(ae(.1, .5, e))));
        let u = y(0, .62, l);
        a.C.crt.value = i(.55, 1, u), a.C.bright.value = i(1, 1.4, u), a.C.tint.value.set(1, 1, 1).lerp(a.TINT, y(0, .7, l)), L = o.reducedMotion || e <= 0 || e >= 1 ? 0 : y(0, .1, s) * (1 - y(.3, .95, s));
        let f = a.L;
        f.on.value = +(L > .002 && !H), f.barrel.value = 1.5 * L, f.zoom.value = 1 + .6 * L, f.ca.value = .03 * L, f.radial.value = .22 * L * (1 - .5 * p(s / X)), f.spin.value = .35 * L
    }
    return {
        id: n.id,
        async load(e) {
            o = e, s = o.stage.info;
            let t = o.renderer,
                n = () => o.perf.restart(2);
            n();
            let r = o.perf.settings,
                i = () => w,
                [p, m] = await Promise.allSettled([ue(o, n), _e(o, i)]),
                h = p.status === `fulfilled` ? p.value : null,
                g = m.status === `fulfilled` ? m.value : null;
            if (w || !h || !g) {
                if (h && pe(), g ? .dispose(), p.status === `rejected` && !w) throw p.reason;
                if (m.status === `rejected` && !w) throw m.reason;
                return
            }
            c = h, d = g, n();
            let v = d.C.portalRes.value;
            f = new ne(v.x, v.y, { ...re,
                depthBuffer: !1
            }), f.texture.generateMipmaps = !1, f.texture.userData.sleeps = !0, x.colorNode = ie(f.texture, a()).rgb, x.opacityNode = b, C = new O(x), c.attachCamera(_), Y(), u = me(t, c, _, {
                samples: r.msaa,
                bloom: .5,
                rayTaps: 12,
                scale: Oe()
            }), u.look.grade({
                vignette: .2
            });
            let y = l(`div`, ``, ``);
            if (y.setAttribute(`style`, `position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap`), y.lang = `ja`, y.innerHTML = `<h2>FUNTECH — SHOWREEL 2026</h2><p>“HELLO, WORLD.” FUNTECH PRESENTS — STARRING FUN-KUN</p><p>ISSUE 2026.10 — あなたの画面で、近日公開。</p><p>OFFICE: 東京 (TOKYO)</p><p>ワクワクを、実装する。</p>`, o.layer.appendChild(y), K = [o.input.onTap(() => {
                    o.layer.hidden || o.audio.unlock()
                })], await se(t, [...d.textures(), ...oe(d.fk.mats)], i), w) return;
            let S = new ne(64, 64, { ...re,
                    depthBuffer: !1
                }),
                D = () => {
                    A = o.clock.now(), je(.56, -1, .016, !1), d.L.on.value = 1, ke(), d.renderInner(), Ae(.5), d.render(S)
                },
                k = e => o.own ? o.own(e) : e();
            await c.warmPipelines(t, () => k(() => {
                je(0, -1, .016, !1), ke()
            }), `poster · warm world`, i);
            let te = performance.now();
            w || await T(t, d.scene, () => k(D), {
                cancelled: i
            }), w || await T(t, d.inner, () => k(D), {
                cancelled: i
            }), w || await ee(t, () => k(D), {
                cancelled: i
            });
            try {
                performance.measure(`poster · warm`, {
                    start: te
                })
            } catch {}
            n(), S.dispose(), !w && (L = 0, I = 0, V = 0, Object.assign(window, {
                __poster: {
                    get ready() {
                        return E
                    },
                    get u() {
                        return F
                    },
                    get k() {
                        return F
                    },
                    get mix() {
                        return I
                    },
                    pull: e => {
                        N = e
                    },
                    replay: () => {
                        N = -1, M = null, P = !1
                    },
                    get seq() {
                        return M
                    },
                    get camera() {
                        return d ? .camera
                    },
                    get tvCam() {
                        return _
                    },
                    c19: () => d
                }
            }), E = !0)
        },
        enter(e) {
            D = 0, M = null, P = !1, F = 0, I = 0, L = 0, V = 0, c && (z = c.energy, B = c.groove, e !== `neon` && c.settle(A))
        },
        update(e) {
            let t = e.dt;
            if (D += t, A = e.clock, !E || !d || !c) return;
            s !== o.stage.info && (s = o.stage.info), !M && e.arrive >= Ce && (M = {
                T0: A - (e.arrive < 1 ? (e.arrive - Ce) * r : 0)
            }), F = N >= 0 ? p(N) : M ? p((A - M.T0) / Z) : 0;
            let n = N >= 0 ? (p(N) - 1) * Z : M ? Math.min(0, A - (M.T0 + Z)) : -1.08;
            H = e.arrive < 1, je(F, n, t, !0), d.C.time.value = M ? A - M.T0 : D, o.gate(P ? null : {
                kind: `auto`,
                text: ``,
                progress: F
            }), F >= 1 && N < 0 && !P && e.active && (P = !0, o.gate(null), o.advance())
        },
        render(e) {
            if (!E || !d) {
                let t = o.renderer;
                t.setRenderTarget(e), t.setClearColor(0, 1), t.clear(), t.setRenderTarget(null);
                return
            }
            I > 0 && d.renderInner(), I < 1 && (ke(), Ae(1 - I)), d.render(e)
        },
        layout(e) {
            s = e, d ? .layout(e), u && u.scenePass.setResolutionScale(Oe())
        },
        exit() {
            o.gate(null), c && (c.groove = 1, c.restFace = `happy`)
        },
        dispose() {
            w = !0;
            for (let e of K) e();
            u ? .dispose(), d ? .dispose(), f ? .dispose(), x.dispose(), c && (c.detachCamera(_), c.groove = 1, c.restFace = `happy`, pe()), c = null, u = null, d = null, f = null, C = null, h = null
        },
        hints: () => [],
        cursor: () => `default`,
        hud: () => s ? .portrait || V >= .04 ? `dark` : `light`
    }
}
export {
    De as
    default, ye as transitions
};