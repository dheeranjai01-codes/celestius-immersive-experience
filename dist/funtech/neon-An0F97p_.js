import {
    At as e,
    Bt as t,
    Ft as n,
    Ht as r,
    Lt as i,
    Mt as a,
    Pt as o,
    _r as s,
    jt as c,
    m as l,
    qn as u,
    rr as d,
    t as f,
    tr as p,
    vr as m
} from "./post-DJ5SZDIO.js";
import {
    u as h
} from "./index-BSu4tWCh.js";
import {
    a as g
} from "./target-DNdmBkK8.js";
import {
    a as _,
    c as v,
    d as ee,
    f as y,
    i as te,
    n as b,
    o as ne,
    r as x,
    s as re,
    t as ie
} from "./post-BUOiK4aL.js";
var ae = .7,
    S = 4,
    oe = .25,
    se = [`Space`, `Enter`, `NumpadEnter`],
    ce = [`ArrowLeft`, `ArrowRight`, `ArrowUp`, `ArrowDown`],
    le = h(`長押しで踊る`, `Hold to dance`),
    ue = {
        label: h(`クリックで照明の色`, `Click to change the light color`),
        touchLabel: h(`タップで照明の色`, `Tap to change the light color`)
    },
    de = {
        at: [960, 818],
        p: [540, 1500]
    },
    fe = new m(.6012, .05, .064),
    pe = new m(.33, .05, .35),
    me = {
        dx: 244,
        dy: -42,
        flip: !0
    },
    he = {
        dx: 233,
        dy: 41,
        flip: !0
    },
    ge = {
        dx: -104,
        dy: 37,
        flip: !0
    },
    C = {
        pos: [.3, 1.25, 17.5],
        target: [0, 1.45, -8],
        fov: 64,
        roll: -.07
    },
    w = [{
        c: 0,
        s: x.s16
    }, {
        c: .3,
        s: {
            pos: [-.72, .28, 2.1],
            target: [.02, .74, -.1],
            fov: 45,
            roll: -.09
        }
    }, {
        c: .6,
        s: {
            pos: [1.1, 1.45, 2.2],
            target: [0, .6, -.2],
            fov: 44,
            roll: .08
        }
    }, {
        c: .85,
        s: {
            pos: [.3, 2.9, 3.1],
            target: [0, .45, -.4],
            fov: 47,
            roll: .04
        }
    }, {
        c: 1,
        s: x.tv
    }],
    T = new m,
    _e = new m,
    ve = new s,
    ye = () => ({
        pos: new m,
        target: new m,
        fov: 40,
        roll: 0
    }),
    be = (() => {
        let e = 0,
            t = w.map(({
                c: t,
                s: n
            }, r) => {
                let i = T.set(...n.pos).sub(b),
                    a = i.length(),
                    s = Math.atan2(i.x, i.z);
                if (r > 0) {
                    for (; s - e > Math.PI;) s -= 2 * Math.PI;
                    for (; s - e < -Math.PI;) s += 2 * Math.PI
                }
                e = s;
                let c = Math.asin(o(i.y / a, -1, 1));
                return {
                    c: t,
                    v: [a, s, c, n.target[0], n.target[1], n.target[2], n.fov, n.roll]
                }
            }),
            n = t.length,
            r = t[0].v.length,
            i = t.map((e, r) => e.v.map((i, a) => {
                if (r === 0 || r === n - 1) return 0;
                let o = (e.v[a] - t[r - 1].v[a]) / (e.c - t[r - 1].c),
                    s = (t[r + 1].v[a] - e.v[a]) / (t[r + 1].c - e.c);
                if (o * s <= 0) return 0;
                let c = (o + s) / 2;
                return Math.sign(c) * Math.min(Math.abs(c), 3 * Math.min(Math.abs(o), Math.abs(s)))
            })),
            a = Array(r).fill(0);
        return e => {
            let s = o(e),
                c = 0;
            for (; c < n - 2 && s > t[c + 1].c;) c++;
            let l = t[c],
                u = t[c + 1],
                d = u.c - l.c,
                f = (s - l.c) / d,
                p = f * f,
                m = p * f,
                h = 2 * m - 3 * p + 1,
                g = m - 2 * p + f,
                _ = -2 * m + 3 * p,
                v = m - p;
            for (let e = 0; e < r; e++) a[e] = h * l.v[e] + g * d * i[c][e] + _ * u.v[e] + v * d * i[c + 1][e];
            return a
        }
    })();

function xe(e, t) {
    let [n, r, i, a, o, s, c, l] = be(e);
    return t.pos.set(Math.sin(r) * Math.cos(i) * n, Math.sin(i) * n, Math.cos(r) * Math.cos(i) * n).add(b), t.target.set(a, o, s), t.fov = c, t.roll = l, t
}

function E(s) {
    let m, h = null,
        b = null,
        w = new u(40, 16 / 9, .05, 140),
        be = new p,
        E, D = !1,
        O = !1,
        k = 0,
        A = 0,
        j = -10,
        M = !1,
        N = 0,
        P = 0,
        F = null,
        Se = 0,
        Ce = 0,
        I = -10,
        L = -10,
        R = 0,
        we = -1,
        Te = 2,
        z = 0,
        B = 0,
        V = null,
        H = 0,
        U = !1,
        W = -10,
        G = !1,
        K = null,
        q = !1,
        J = new a(0, 55, 13),
        Y = 0,
        Ee = 0,
        De = 0,
        X = .5,
        Oe = [],
        Z = ye(),
        Q = ye();

    function ke() {
        if (!h) return;
        let e = (h.look + (F ? 2 : 1)) % v.length,
            t = m.audio.play([v[e].sfx], {
                quantize: `16th`
            });
        F = {
            i: e,
            at: t >= 0 ? t : A
        }, Ee++, m.ui.dismissHint(`neon-color`)
    }

    function $(e, t = 1, n = 1) {
        if (!h) return !1;
        let r = m.clock.next(`beat`, .03, A);
        if (r <= I + .001 || r < I + n * .3448275862068966 - .02) return !1;
        let i = m.audio.play([`dance_hit_${Se%4+1}`], {
                quantize: `beat`,
                minGap: .1
            }),
            a = i >= 0 ? i : r;
        return Se++, Ce = e + 1, h.danceMove(e, a, t), I = a, L = a, R = e === 1 || e === 2 ? 1 : .6, De++, !0
    }

    function Ae(e) {
        $(e === `ArrowLeft` || e === `ArrowRight` ? 0 : e === `ArrowUp` ? 1 : e === `ArrowDown` ? 2 : Ce % 4, e === `ArrowLeft` ? -1 : 1)
    }

    function je() {
        let e = B,
            t = H,
            n, r = 1,
            i = 1;
        e < .34 ? (n = 0, r = t % 2 ? -1 : 1, i = t === 0 ? 0 : 2) : e < .68 ? (n = t % 2 ? 3 : 0, r = t % 4 < 2 ? 1 : -1) : (n = t % 2 ? 0 : 1, r = t % 4 < 2 ? -1 : 1), $(n, r, i) && H++
    }
    let Me = [0, 0],
        Ne = [0, 0];

    function Pe(e) {
        let t = e > .002 || !!V ? .engaged,
            n = g(m.stage, w, E ? .portrait ? pe : fe, Me);
        return {
            kind: `hold`,
            text: le,
            touchText: le,
            progress: e,
            at: K ? ? de.at,
            p: K ? ? de.p,
            held: !!V ? .engaged,
            unit: `秒`,
            left: (1 - e) * S,
            target: n ? [n[0], n[1]] : null,
            lead: t ? he : me,
            leadP: ge
        }
    }

    function Fe() {
        U || (U = !0, B = 1, V = null, q = !1, G = !0, m.gate(Pe(1)), m.advance())
    }

    function Ie() {
        G && h && $(1, 1, 1) && (G = !1, W = I, R = 1.4, m.reducedMotion || (Y = 2))
    }

    function Le() {
        let n = o(J.x);
        if (m.reducedMotion ? ne(x.s16, x.tv, c.inOut(n), Z) : xe(n, Z), Q.pos.copy(Z.pos), Q.target.copy(Z.target), Q.fov = Z.fov, Q.roll = Z.roll, M) {
            let e = k - j;
            if (e >= 1.4) M = !1;
            else {
                let n = 1 - (1 - o(e / 1.3)) ** 3.3;
                Q.pos.lerpVectors(T.set(...C.pos), _e.copy(Z.pos), n), Q.pos.x += Math.sin(n * Math.PI) * .22, Q.target.lerpVectors(T.set(...C.target), _e.copy(Z.target), c.inOut(o(e / 1.05))), Q.fov = t(C.fov, Z.fov, c.out(o(e / .95))), Q.roll = t(C.roll, Z.roll, n) + .02 * Math.sin(e * 3)
            }
        }
        T.subVectors(Q.target, Q.pos).normalize();
        let a = _e.crossVectors(T, w.up.set(0, 1, 0)).normalize();
        Q.pos.addScaledVector(a, N * .1).add(T.set(0, P * .06, 0)), Q.target.addScaledVector(a, N * .55).add(T.set(0, P * .3, 0));
        let s = E ? .aspect ? ? 16 / 9,
            l = Q.fov,
            u = 0;
        if (s < 1.25) {
            let t = Q.pos.distanceTo(T.set(0, .9, -1.2)),
                n = 1.25,
                r = Math.min(Math.max(Math.tan(l * e / 2), n / t / s), Math.tan(31 * e));
            l = 2 * Math.atan(r) / e;
            let i = n / (r * s);
            i > t && Q.pos.sub(Q.target).multiplyScalar(i / t).add(Q.target), u = E ? .portrait ? -.05 : -.02
        }
        w.position.copy(Q.pos), w.up.set(0, 1, 0), w.lookAt(Q.target);
        let d = m.reducedMotion,
            f = d ? 0 : .004 + .006 * n;
        w.translateX(i(k * (.7 + .8 * n), 3) * f), w.translateY(i(k * (.7 + .8 * n), 8) * f);
        let p = Q.roll + i(k * .5, 12) * f * .8;
        if (!d) {
            let e = A - L,
                t = R * (.5 + n);
            p += r(e, 0, .006 * t, 9, 9), w.translateX(r(e, 0, .012 * t, 9, 11)), w.translateY(r(e, 0, .01 * t, 9, 14))
        }
        w.rotateZ(p), w.fov = l, w.aspect = s, w.near = .05, w.far = 140, u ? w.setViewOffset(1e3 * s, 1e3, 0, 1e3 * u, 1e3 * s, 1e3) : w.clearViewOffset(), w.updateProjectionMatrix(), w.updateMatrixWorld()
    }

    function Re(e, t) {
        let n = e.input,
            r = n.p,
            i = se.some(e => n.held.has(e)) || q;
        V || (r.down ? V = {
            src: `pointer`,
            t0: A,
            engaged: !1
        } : i && (V = {
            src: `key`,
            t0: A,
            engaged: !1
        }));
        let a = V && (V.src === `pointer` ? !r.down : !i) ? V : null;
        r.clicked && !a ? .engaged && !(V && V.src === `pointer` && V.engaged) && ke(), a && (V = null), V && !V.engaged && A - V.t0 >= oe && (V.engaged = !0, B = Math.min(1, B + (A - V.t0) / S)), V ? .engaged ? (B = Math.min(1, B + t / S), V.src === `pointer` && (K = [r.x, r.y]), je()) : V || (B = Math.max(0, B - t * (.25 + 1.4 * B)), B <= 0 && (K = null, H = 0)), B >= 1 && Fe()
    }
    return {
        id: s.id,
        async load(e) {
            m = e, E = m.stage.info;
            let t = () => m.perf.restart(2);
            if (t(), h = await te(m, t), D) {
                re(), h = null;
                return
            }
            h.reduced = m.reducedMotion, h.attachCamera(w);
            let n = m.perf.settings;
            X = n.bloom, b = ie(m.renderer, h, w, {
                samples: n.msaa,
                bloom: n.bloom,
                rayTaps: n.tier === `low` ? 10 : 16
            }), m.audio.preloadShots([...v.map(e => e.sfx), `dance_hit_1`, `dance_hit_2`, `dance_hit_3`, `dance_hit_4`, `zap_small`]);
            let r = e => {
                !m.layer.hidden && e.pointerType === `mouse` && m.audio.unlock()
            };
            window.addEventListener(`pointerdown`, r, {
                passive: !0
            }), Oe = [m.input.onTap(() => {
                m.layer.hidden || m.audio.unlock()
            }), m.input.onKey(e => {
                !m.layer.hidden && (se.includes(e.code) || ce.includes(e.code)) && (m.audio.unlock(), e.code === `Space` && e.preventDefault())
            }), () => window.removeEventListener(`pointerdown`, r)];
            let i = new d(64, 64, { ...f,
                depthBuffer: !1
            });
            h.settle(0), h.update(.01, .01, .016);
            let a = () => {
                    for (let [e, t] of [
                            [!1, 0],
                            [!1, .85],
                            [!0, 0]
                        ]) M = e, j = e ? .001 : -10, k = 0, J.x = t, Le(), b.track(w, ee), h.prepare(w, 1080, n.mirror * ae), b.render(i);
                    M = !1, J.x = 0
                },
                o = e => m.own ? m.own(e) : e();
            await h.warmPipelines(m.renderer, () => o(a), `neon · warm world`, () => D);
            let s = performance.now();
            D || await l(m.renderer, () => o(a), {
                cancelled: () => D
            });
            try {
                performance.measure(`neon · warm final`, {
                    start: s
                })
            } catch {}
            t(), i.dispose(), !D && (h.setLook(_.look, -10, -10), Object.assign(window, {
                __neon: {
                    get ready() {
                        return O
                    },
                    get world() {
                        return h
                    },
                    get camera() {
                        return w
                    },
                    get post() {
                        return b
                    },
                    look: e => {
                        h && (h.setLook(e, A, A), _.look = h.look)
                    },
                    dance: (e = `Space`) => Ae(e),
                    cycle: () => ke(),
                    hold: (e = !0) => {
                        q = e
                    },
                    get progress() {
                        return B
                    },
                    get done() {
                        return U
                    },
                    get cam() {
                        return J.x
                    },
                    get pressing() {
                        return V ? V.engaged ? `hold` : `press` : null
                    }
                }
            }), O = !0)
        },
        enter(e) {
            h && (k = 0, B = 0, V = null, U = !1, W = -10, G = !1, K = null, H = 0, q = !1, J.x = 0, J.v = 0, Y = 0, h.energy = 0, h.groove = 1, h.restFace = `happy`, e === `poster` || e === `breakout` ? (h.settle(A), M = !1) : (j = e ? .42 : 0, M = !0, h.intro(A + (e ? .42 : .1), A + (e ? .42 : .1))), _.visited = !0)
        },
        update(e) {
            if (!h || !b) return;
            let t = e.dt,
                r = o(e.clock - A, 0, .5);
            k += t, A = e.clock;
            let i = e.input,
                a = i.p;
            if (e.active && O && !M && !U) {
                Re(e, r);
                for (let e of i.keys)(ce.includes(e) || se.includes(e)) && Ae(e);
                let s = a.presence;
                if (N = n(N, s > .2 ? o(a.nx, -1, 1) : 0, 3.5, t), P = n(P, s > .2 ? o(a.ny, -1, 1) : 0, 3.5, t), !a.touch && a.presence > .3) {
                    if (z += a.speed * t, z > 8) {
                        z = 0, ve.set(a.nx, a.ny), be.setFromCamera(ve, w);
                        let e = h.pick(be.ray);
                        e >= 0 && e !== we && (h.hover(e, A), m.audio.play([`zap_small`], {
                            gain: .28,
                            minGap: .3
                        })), we = e
                    }
                } else a.touch && k > Te && (h.hover(Math.floor(Math.random() * h.signs.length), A), Te = k + (m.reducedMotion ? 4 : 1.2) + Math.random() * 1.8)
            } else !U && !e.active && (V = null, B = Math.max(0, B - r * (.25 + 1.4 * B))), N = n(N, 0, 1.5, t), P = n(P, 0, 1.5, t);
            Ie(), J.step(U ? 1 : B, t), J.x > 1 && (J.x = 1, J.v = Math.min(0, J.v)), J.x < 0 && (J.x = 0, J.v = Math.max(0, J.v)), U && !G && A > W + .3448275862068966 ? (h.energy = n(h.energy, .35, 3, t), h.groove = n(h.groove, .35, 3, t)) : h.energy = o(J.x), O && !M && (e.active || U) ? m.gate(Pe(B)) : U || m.gate(null), F && A >= F.at - .004 && (h.setLook(F.i, F.at, A), _.look = h.look, F = null), h.update(A, A, t), Le();
            let s = b.look,
                c = b.C,
                l = o(J.x),
                u = M || k - j < 2 ? k - j : 10,
                d = u >= 0 ? Math.exp(-u / .14) : 1,
                f = A >= L ? Math.exp(-(A - L) / .09) : 0,
                p = U && !G && A >= W ? Math.exp(-(A - W) / .25) : 0,
                g = m.reducedMotion;
            s.exposure.value = 1 + (g ? 1.2 : 3) * d + .04 * l + (g ? .1 : .3) * p, b.glow.strength.value = .36 + 1 * d + .25 * Math.exp(-Math.max(0, A - h.lookAt) / .12) + (.05 + .12 * f) * l + .35 * p, c.ca.value = .0026 + (g ? 0 : .01 * d + .007 * l * f + .008 * p), s.time.value = A, s.impact.value = 0, Y > 0 && !G && A >= W && (s.impact.value = .85, s.impactThr.value = .55, Y--), b.track(w, ee), m.perf.settings.bloom !== X && (X = m.perf.settings.bloom, b.glow.setResolutionScale(X))
        },
        render(e) {
            if (!h || !b) {
                let t = m.renderer;
                t.setRenderTarget(e), t.setClearColor(0, 1), t.clear(), t.setRenderTarget(null);
                return
            }
            let t = m.renderer.getDrawingBufferSize(ve);
            h.prepare(w, t.y, Math.max(m.perf.settings.mirror * ae, Math.min(.5, 300 / Math.max(1, t.y)))), b.render(e)
        },
        layout(e) {
            E && E.portrait !== e.portrait && (K = null), E = e, b && (b.look.aspect.value = e.aspect)
        },
        exit() {
            V = null, q = !1, m.gate(null)
        },
        dispose() {
            D = !0;
            for (let e of Oe) e();
            b ? .dispose(), h && (h.detachCamera(w), re()), h = null, b = null
        },
        hints() {
            if (!O || M || U || B > .02 || V || m.ui.isDismissed(`neon-color`)) return [];
            let t = (E ? .portrait ? 128 : 42) * e,
                n = g(m.stage, w, T.set(Math.cos(t) * y.r, y.y + Math.sin(t) * y.r, y.z), Ne);
            return n ? [{
                id: `neon-color`,
                kind: `click`,
                point: !0,
                at: [n[0], n[1]],
                p: [n[0], n[1]],
                lead: {
                    dx: 96,
                    dy: -40
                },
                leadP: {
                    dx: 20,
                    dy: -52,
                    attach: `edge`
                },
                ...ue
            }] : []
        },
        cursor: () => V ? .engaged ? `grabbing` : `pointer`,
        hud: () => M && j > 0 && k < j + .3 || U && E ? .portrait ? `dark` : `light`
    }
}
export {
    E as
    default
};