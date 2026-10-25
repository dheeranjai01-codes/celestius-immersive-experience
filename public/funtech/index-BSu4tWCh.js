const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./boot-Ds0PbGB3.js", "./post-DJ5SZDIO.js", "./pmrem-B-AQRfYD.js", "./target-DNdmBkK8.js", "./boot-Bzk4geJx.css", "./volt-CmoghNYG.js", "./volt-D_kMDq_m.css", "./museum-jL7B-aKL.js", "./bronze-Cu6bvcqL.js", "./bronze-CLjxj91z.css", "./monument-BEaKe0xE.js", "./neon-An0F97p_.js", "./post-BUOiK4aL.js", "./poster-CwJGzfaJ.js", "./kit-D_lqBZ3L.js", "./rest-CKA-rbml.js", "./plates-CXqkOo0_.js", "./breakout-BRAPcJup.js", "./shards-Bvh-kNQZ.js", "./run-C42qURu8.js", "./run-CfSHWW1s.css", "./shatter-CcS1Wmcx.js", "./white-ClVCx_SB.js", "./logo-CKz3zjpY.js", "./logo-B2QyLIDI.css"]))) => i.map(i => d[i]);
import {
    $t as e,
    B as t,
    Ct as n,
    Dt as r,
    E as i,
    Et as a,
    Fn as o,
    G as s,
    H as c,
    I as l,
    In as u,
    It as d,
    Jt as f,
    Kt as p,
    Ln as m,
    P as h,
    Pt as g,
    Qn as _,
    St as v,
    Tt as y,
    U as b,
    Ut as x,
    Vn as S,
    Vt as C,
    Y as w,
    Yt as T,
    Z as E,
    _ as ee,
    _r as D,
    _t as O,
    b as k,
    c as te,
    d as ne,
    f as re,
    fr as ie,
    ft as A,
    h as j,
    ht as ae,
    in as M,
    ir as oe,
    kt as N,
    l as se,
    m as ce,
    nn as le,
    on as ue,
    or as de,
    p as fe,
    qt as pe,
    rr as me,
    t as he,
    u as ge,
    ut as _e,
    vn as ve,
    vt as ye,
    w as be,
    xt as xe,
    yt as Se
} from "./post-DJ5SZDIO.js";
(function() {
    let e = document.createElement(`link`).relList;
    if (e && e.supports && e.supports(`modulepreload`)) return;
    for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
    new MutationObserver(e => {
        for (let t of e)
            if (t.type === `childList`)
                for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function t(e) {
        let t = {};
        return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), t.credentials = e.crossOrigin === `use-credentials` ? `include` : e.crossOrigin === `anonymous` ? `omit` : `same-origin`, t
    }

    function n(e) {
        if (e.ep) return;
        e.ep = !0;
        let n = t(e);
        fetch(e.href, n)
    }
})();
var Ce = `modulepreload`,
    we = function(e, t) {
        return new URL(e, t).href
    },
    Te = {},
    P = function(e, t, n) {
        let r = Promise.resolve();
        if (t && t.length > 0) {
            let e = document.getElementsByTagName(`link`),
                i = document.querySelector(`meta[property=csp-nonce]`),
                a = i ? .nonce || i ? .getAttribute(`nonce`);

            function o(e) {
                return Promise.all(e.map(e => Promise.resolve(e).then(e => ({
                    status: `fulfilled`,
                    value: e
                }), e => ({
                    status: `rejected`,
                    reason: e
                }))))
            }

            function s(e) {
                return import.meta.resolve ?
                    import.meta.resolve(e) : new URL(e,
                        import.meta.url).href
            }
            r = o(t.map(t => {
                if (t = we(t, n), t = s(t), t in Te) return;
                Te[t] = !0;
                let r = t.endsWith(`.css`);
                for (let n = e.length - 1; n >= 0; n--) {
                    let i = e[n];
                    if (i.href === t && (!r || i.rel === `stylesheet`)) return
                }
                let i = document.createElement(`link`);
                if (i.rel = r ? `stylesheet` : Ce, r || (i.as = `script`), i.crossOrigin = ``, i.href = t, a && i.setAttribute(`nonce`, a), document.head.appendChild(i), r) return new Promise((e, n) => {
                    i.addEventListener(`load`, e), i.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`)))
                })
            }).filter(e => e !== void 0))
        }

        function i(e) {
            let t = new Event(`vite:preloadError`, {
                cancelable: !0
            });
            if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e
        }
        return r.then(t => {
            for (let e of t || []) e.status === `rejected` && i(e.reason);
            return e().catch(i)
        })
    },
    Ee = `https://bpr4twkuji91jhhp.public.blob.vercel-storage.com/reel/`,
    De = {
        video: Ee + `hello_world_v9-xM2yU9pr3WK1CuLUqGeIlEzyNJvNgR.mp4`,
        poster: Ee + `hello_world_v9_poster-gj5PGJBugEP4viQcphcoscwM0tt50A.jpg`
    },
    F = [{
        id: `boot`,
        num: `01`,
        chapter: `BOOT`,
        cuts: `C01–C04`,
        arrive: {
            type: `cut`
        },
        module: () => P(() =>
            import (`./boot-Ds0PbGB3.js`), __vite__mapDeps([0, 1, 2, 3, 4]),
            import.meta.url)
    }, {
        id: `volt`,
        num: `02`,
        chapter: `VOLT`,
        cuts: `C05–C08`,
        arrive: {
            type: `led`,
            duration: 1.25
        },
        module: () => P(() =>
            import (`./volt-CmoghNYG.js`), __vite__mapDeps([5, 1, 2, 6]),
            import.meta.url)
    }, {
        id: `museum`,
        num: `03`,
        chapter: `MUSEUM`,
        cuts: `C09–C11`,
        arrive: {
            type: `peel`,
            duration: 1.7
        },
        module: () => P(() =>
            import (`./museum-jL7B-aKL.js`), __vite__mapDeps([7, 1, 3, 8, 2, 9]),
            import.meta.url),
        preload: 2
    }, {
        id: `monument`,
        num: `03`,
        chapter: `MONUMENT`,
        cuts: `C12–C14`,
        loop: `museum`,
        arrive: {
            type: `museum-portal`,
            duration: 1
        },
        module: () => P(() =>
            import (`./monument-BEaKe0xE.js`), __vite__mapDeps([10, 1, 3, 8, 2, 9]),
            import.meta.url)
    }, {
        id: `neon`,
        num: `04`,
        chapter: `NEON`,
        cuts: `C16–C17`,
        arrive: {
            type: `flash`,
            duration: .9
        },
        module: () => P(() =>
            import (`./neon-An0F97p_.js`), __vite__mapDeps([11, 1, 3, 12, 2]),
            import.meta.url)
    }, {
        id: `poster`,
        num: `05`,
        chapter: `POSTER`,
        cuts: `C18–C19`,
        arrive: {
            type: `tube`,
            duration: .8
        },
        module: () => P(() =>
            import (`./poster-CwJGzfaJ.js`), __vite__mapDeps([13, 1, 14, 2, 15, 16, 12]),
            import.meta.url),
        preload: 2
    }, {
        id: `breakout`,
        num: `06`,
        chapter: `BREAKOUT`,
        cuts: `C20–C21`,
        arrive: {
            type: `cut`
        },
        module: () => P(() =>
            import (`./breakout-BRAPcJup.js`), __vite__mapDeps([17, 1, 3, 14, 2, 15, 16, 12, 18]),
            import.meta.url),
        preload: 2
    }, {
        id: `run`,
        num: `07`,
        chapter: `STYLE RUN`,
        cuts: `C22–C29`,
        arrive: {
            type: `flash`,
            duration: .7
        },
        module: () => P(() =>
            import (`./run-C42qURu8.js`), __vite__mapDeps([19, 1, 2, 3, 20]),
            import.meta.url)
    }, {
        id: `shatter`,
        num: `08`,
        chapter: `SHATTER`,
        cuts: `C30–C31`,
        arrive: {
            type: `cut`
        },
        module: () => P(() =>
            import (`./shatter-CcS1Wmcx.js`), __vite__mapDeps([21, 1, 14, 2, 18, 16, 22]),
            import.meta.url)
    }, {
        id: `logo`,
        num: `09`,
        chapter: `LOGO`,
        cuts: `C32–C33`,
        arrive: {
            type: `flash`,
            duration: .9
        },
        module: () => P(() =>
            import (`./logo-CKz3zjpY.js`), __vite__mapDeps([23, 1, 14, 2, 22, 24]),
            import.meta.url)
    }];

function Oe() {
    return typeof navigator < `u` && `gpu` in navigator && !!navigator.gpu
}

function ke() {
    try {
        return !!document.createElement(`canvas`).getContext(`webgl2`)
    } catch {
        return !1
    }
}

function Ae() {
    for (let e of [new ie().geometry, new M(void 0).geometry]) e.dispose = () => {}
}

function je() {
    let e = le.prototype,
        t = e.customProgramCacheKey;
    e.customProgramCacheKey = function() {
        let e = t.call(this);
        return this.envMap ? `${e}|env${this.envMap.id}` : e
    }
}
async function Me(e, t = {}) {
    let n = !!t.forceWebGL;
    if (!Oe() && !ke()) throw Error(`NO_GPU`);
    Ae(), je();
    let r = new ue({
        canvas: e,
        antialias: !1,
        alpha: !1,
        forceWebGL: n,
        powerPreference: `high-performance`
    });
    return await r.init(), r.toneMapping = 0, r.outputColorSpace = de, r.setClearColor(0, 1), r.autoClear = !0, r.info.autoReset = !0, {
        renderer: r,
        backend: r.backend.isWebGPUBackend ? `webgpu` : `webgl2`,
        forced: n
    }
}

function Ne(e) {
    try {
        let t = e.renderer.backend;
        if (e.backend === `webgpu`) {
            let e = t.adapter ? .info;
            return [e ? .vendor, e ? .architecture, e ? .description].filter(Boolean).join(` `) || `WebGPU`
        }
        let n = t.gl;
        if (n) {
            let e = n.getExtension(`WEBGL_debug_renderer_info`);
            return String(e ? n.getParameter(e.UNMASKED_RENDERER_WEBGL) : n.getParameter(n.RENDERER))
        }
    } catch {}
    return e.backend
}
var Pe = .85,
    Fe = class {
        canvas;
        info;
        listeners = new Set;
        constructor(e) {
            this.canvas = e, this.compute();
            let t = 0,
                n = () => {
                    cancelAnimationFrame(t), t = requestAnimationFrame(() => this.compute())
                };
            window.addEventListener(`resize`, n), window.addEventListener(`orientationchange`, n), window.visualViewport ? .addEventListener(`resize`, n), typeof ResizeObserver < `u` && new ResizeObserver(n).observe(e)
        }
        sync() {
            let e = this.canvas.getBoundingClientRect();
            e.width > 0 && e.height > 0 && (e.width !== this.info.cssW || e.height !== this.info.cssH) && this.compute()
        }
        onChange(e) {
            return this.listeners.add(e), () => this.listeners.delete(e)
        }
        compute() {
            let e = this.canvas.getBoundingClientRect(),
                t = Math.max(1, e.width || window.innerWidth),
                n = Math.max(1, e.height || window.innerHeight),
                r = t / n,
                i = r < Pe,
                a = i ? 1080 : 1920,
                o = i ? 1920 : 1080,
                s = Math.min(t / a, n / o),
                c = (t - a * s) / 2,
                l = (n - o * s) / 2,
                u = {
                    x0: -c / s,
                    y0: -l / s,
                    x1: (t - c) / s,
                    y1: (n - l) / s
                },
                d = this.info;
            this.info = {
                portrait: i,
                W: a,
                H: o,
                cssW: t,
                cssH: n,
                aspect: r,
                u: s,
                left: c,
                top: l,
                view: u
            };
            let f = document.documentElement;
            f.style.setProperty(`--u`, `${s}px`), f.style.setProperty(`--stage-left`, `${c}px`), f.style.setProperty(`--stage-top`, `${l}px`), f.style.setProperty(`--stage-w`, `${a*s}px`), f.style.setProperty(`--stage-h`, `${o*s}px`), f.classList.toggle(`is-portrait`, i);
            let p = !!d && d.portrait !== i;
            if (!d || d.cssW !== t || d.cssH !== n)
                for (let e of this.listeners) e(this.info, p);
            return this.info
        }
        toLogical(e, t) {
            let n = this.info;
            return [(e - n.left) / n.u, (t - n.top) / n.u]
        }
        toCss(e, t) {
            let n = this.info;
            return [n.left + e * n.u, n.top + t * n.u]
        }
        fromNdc(e, t) {
            let n = this.info;
            return this.toLogical((e * .5 + .5) * n.cssW, (.5 - t * .5) * n.cssH)
        }
        pick(e, t) {
            return this.info.portrait && t !== void 0 ? t : e
        }
    },
    Ie = 8,
    Le = 500,
    Re = 520,
    ze = new Set([`Enter`, `NumpadEnter`, `Space`, ` `]),
    Be = `button, a[href], summary, [role="button"], [role="link"], [data-ui]`,
    Ve = class {
        stage;
        p = {
            x: 960,
            y: 540,
            cx: 0,
            cy: 0,
            nx: 0,
            ny: 0,
            vx: 0,
            vy: 0,
            speed: 0,
            presence: 0,
            down: !1,
            dragging: !1,
            dragX: 0,
            dragY: 0,
            dragCx: 0,
            dragCy: 0,
            clicked: !1,
            longPress: !1,
            released: !1,
            touch: !1,
            active: !1
        };
        wheel = 0;
        keys = [];
        held = new Set;
        enabled = !0;
        acc = {
            dx: 0,
            dy: 0,
            cdx: 0,
            cdy: 0,
            wheel: 0,
            click: !1,
            long: !1,
            up: !1
        };
        downAt = {
            x: 0,
            y: 0,
            t: 0,
            id: -1
        };
        last = {
            x: 0,
            y: 0,
            cx: 0,
            cy: 0
        };
        longTimer = 0;
        longFired = !1;
        lastMove = -1e9;
        prev = {
            x: 960,
            y: 540
        };
        inside = !0;
        keyQueue = [];
        tapFns = new Set;
        keyFns = new Set;
        constructor(e) {
            this.stage = e;
            let t = e => !!e.target ? .closest ? .(`[data-ui], button, a, dialog, input, select, textarea`),
                n = (e, t, n) => {
                    let r = this.p;
                    r.x = t, r.y = n, r.cx = e.clientX, r.cy = e.clientY;
                    let i = this.stage.info;
                    r.nx = e.clientX / i.cssW * 2 - 1, r.ny = 1 - e.clientY / i.cssH * 2, r.touch = e.pointerType !== `mouse`, r.active = !0, this.inside = !0, this.lastMove = performance.now()
                },
                r = e => {
                    let [t, r] = this.stage.toLogical(e.clientX, e.clientY), i = this.p;
                    if (i.down) {
                        if (e.pointerId !== this.downAt.id) return;
                        let n = this.last;
                        this.acc.dx += t - n.x, this.acc.dy += r - n.y, this.acc.cdx += e.clientX - n.cx, this.acc.cdy += e.clientY - n.cy, n.x = t, n.y = r, n.cx = e.clientX, n.cy = e.clientY, !i.dragging && Math.hypot(e.clientX - this.downAt.x, e.clientY - this.downAt.y) > Ie && (i.dragging = !0, clearTimeout(this.longTimer))
                    }
                    n(e, t, r)
                };
            window.addEventListener(`pointermove`, r, {
                passive: !0
            }), window.addEventListener(`pointerdown`, e => {
                if (!this.enabled || t(e) || e.pointerType === `mouse` && e.button !== 0) {
                    r(e);
                    return
                }
                let [i, a] = this.stage.toLogical(e.clientX, e.clientY);
                this.last = {
                    x: i,
                    y: a,
                    cx: e.clientX,
                    cy: e.clientY
                }, n(e, i, a), this.p.down = !0, this.p.dragging = !1, this.longFired = !1, this.downAt = {
                    x: e.clientX,
                    y: e.clientY,
                    t: performance.now(),
                    id: e.pointerId
                }, clearTimeout(this.longTimer), this.longTimer = window.setTimeout(() => {
                    this.p.down && !this.p.dragging && (this.longFired = !0, this.acc.long = !0)
                }, Re)
            }, {
                passive: !0
            }), window.addEventListener(`pointerup`, e => {
                if (clearTimeout(this.longTimer), !this.p.down || e.pointerId !== this.downAt.id) return;
                r(e);
                let n = Math.hypot(e.clientX - this.downAt.x, e.clientY - this.downAt.y) < Ie && performance.now() - this.downAt.t < Le && !this.longFired && !t(e);
                if (this.p.down = !1, this.p.dragging = !1, this.acc.up = !0, n && this.enabled) {
                    this.acc.click = !0;
                    for (let t of this.tapFns) t(e)
                }
                e.pointerType !== `mouse` && (this.lastMove = performance.now() - 1500)
            }, {
                passive: !0
            }), window.addEventListener(`pointercancel`, e => {
                e.pointerId === this.downAt.id && (this.p.down = !1, this.p.dragging = !1, clearTimeout(this.longTimer))
            }), document.documentElement.addEventListener(`pointerleave`, () => {
                this.inside = !1
            }), window.addEventListener(`blur`, () => {
                this.p.down = !1, this.p.dragging = !1, this.inside = !1, this.held.clear()
            }), window.addEventListener(`wheel`, e => {
                t(e) || (this.acc.wheel += e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY)
            }, {
                passive: !0
            }), window.addEventListener(`keydown`, e => {
                if (!this.enabled || e.metaKey || e.ctrlKey || e.altKey) return;
                let t = e.target;
                if (!t ? .closest ? .(`input, textarea, select, dialog[open]`) && !(ze.has(e.code || e.key) && t ? .closest ? .(Be))) {
                    e.repeat || this.keyQueue.push(e.code || e.key), this.held.add(e.code || e.key);
                    for (let t of this.keyFns) t(e)
                }
            }), window.addEventListener(`keyup`, e => {
                this.held.delete(e.code || e.key)
            })
        }
        onTap(e) {
            return this.tapFns.add(e), () => {
                this.tapFns.delete(e)
            }
        }
        onKey(e) {
            return this.keyFns.add(e), () => {
                this.keyFns.delete(e)
            }
        }
        frame(e) {
            let t = this.p,
                n = this.acc,
                r = (t.x - this.prev.x) / Math.max(e, .001),
                i = (t.y - this.prev.y) / Math.max(e, .001),
                a = 1 - Math.exp(-e * 14);
            t.vx += (r - t.vx) * a, t.vy += (i - t.vy) * a, t.speed = Math.hypot(t.vx, t.vy), this.prev.x = t.x, this.prev.y = t.y;
            let o = (performance.now() - this.lastMove) / 1e3,
                s = t.active && this.inside && (t.down || o < (t.touch ? .9 : 2.5)) ? 1 : 0;
            t.presence += (s - t.presence) * (1 - Math.exp(-e * (s ? 8 : 2.5))), t.dragX = n.dx, t.dragY = n.dy, t.dragCx = n.cdx, t.dragCy = n.cdy, t.clicked = n.click, t.longPress = n.long, t.released = n.up, this.wheel = n.wheel, this.keys = this.keyQueue, this.keyQueue = [], this.acc = {
                dx: 0,
                dy: 0,
                cdx: 0,
                cdy: 0,
                wheel: 0,
                click: !1,
                long: !1,
                up: !1
            }
        }
        pressed(...e) {
            return this.keys.some(t => e.includes(t))
        }
        consumeClick() {
            this.p.clicked = !1
        }
    },
    He = `funtech-reel:muted`,
    I = .03,
    Ue = class {
        clock;
        base;
        ctx = null;
        unlocked = !1;
        muted;
        manifest = null;
        get available() {
            return !!this.manifest
        }
        master = null;
        music = null;
        sfx = null;
        buffers = new Map;
        ready = new Map;
        manifestPromise = null;
        voice = null;
        want = null;
        pendingAt = 0;
        lastShot = new Map;
        listeners = new Set;
        constructor(e, t) {
            this.clock = e, this.base = t, this.muted = p.get(He) === `1`
        }
        onChange(e) {
            return this.listeners.add(e), () => this.listeners.delete(e)
        }
        emit() {
            for (let e of this.listeners) e()
        }
        prepare() {
            this.ensureContext()
        }
        ensureContext() {
            if (this.ctx) return this.ctx;
            try {
                let e = window.AudioContext || window.webkitAudioContext;
                if (!e) return null;
                let t;
                try {
                    t = new e({
                        latencyHint: `interactive`,
                        sampleRate: 48e3
                    })
                } catch {
                    t = new e({
                        latencyHint: `interactive`
                    })
                }
                let n = t.createDynamicsCompressor();
                return n.threshold.value = -3, n.knee.value = 4, n.ratio.value = 10, n.attack.value = .002, n.release.value = .15, this.master = t.createGain(), this.master.gain.value = +!this.muted, this.master.connect(n).connect(t.destination), this.music = t.createGain(), this.music.gain.value = .9, this.music.connect(this.master), this.sfx = t.createGain(), this.sfx.gain.value = 1, this.sfx.connect(this.master), this.ctx = t, this.clock.attachAudio(t), t
            } catch (e) {
                return console.info(`[audio] Web Audio unavailable — running silent`, e), null
            }
        }
        loadManifest() {
            return this.manifestPromise || = fetch(this.base + `gen/audio/manifest.json`, {
                cache: `no-cache`
            }).then(async e => {
                if (!e.ok) return null;
                let t = await e.text(),
                    n = JSON.parse(t);
                return n && typeof n == `object` ? n : null
            }).catch(() => null).then(e => (this.manifest = e, e || console.info(`[audio] no gen/audio/manifest.json yet — running silent`), this.emit(), e)), this.manifestPromise
        }
        offline = null;
        decoder() {
            if (this.offline) return this.offline;
            try {
                let e = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                if (e) return this.offline = new e(1, 1, 48e3)
            } catch {}
            return this.ensureContext()
        }
        buffer(e) {
            let t = this.buffers.get(e);
            if (!t) {
                let n = this.decoder();
                if (!n) return Promise.resolve(null);
                this.decodes.requested++;
                let r = fetch(this.base + `gen/audio/` + e).then(t => t.ok ? t.arrayBuffer() : Promise.reject(Error(t.status + ` ` + e))).then(e => n.decodeAudioData(e)).catch(t => (console.info(`[audio] skipped`, e, String(t ? .message ? ? t)), null)).then(t => {
                    this.buffers.get(e) === r && (this.ready.set(e, t), t && this.resident.set(e, t.length * t.numberOfChannels * 4)), this.decodes.done++, this.decodes.samples += t ? t.length * t.numberOfChannels : 0;
                    for (let e of this.decodeListeners) e();
                    return t
                });
                t = r, this.buffers.set(e, t)
            }
            return t
        }
        scopes = new Map;
        pinned = new Set;
        resident = new Map;
        shotFile(e) {
            let t = (Array.isArray(e) ? e : [e]).find(e => this.manifest ? .oneshots ? .[e]);
            return t ? this.manifest.oneshots[t].file : null
        }
        claim(e, t) {
            let n = this.scopes.get(e);
            return n || this.scopes.set(e, n = new Set), n.add(t), this.asleep.has(e) ? Promise.resolve(this.ready.get(t) ? ? null) : this.buffer(t)
        }
        asleep = new Set;
        sleepScope(e) {
            this.asleep.add(e);
            let t = this.scopes.get(e);
            t && this.drop(t)
        }
        wakeScope(e) {
            if (this.asleep.delete(e))
                for (let t of this.scopes.get(e) ? ? []) this.buffer(t)
        }
        drop(e) {
            let t = this.voice ? .src.buffer ? ? null;
            for (let n of e) this.pinned.has(n) || [...this.scopes].some(([e, t]) => !this.asleep.has(e) && t.has(n)) || t && this.ready.get(n) === t || (this.buffers.delete(n), this.ready.delete(n), this.resident.delete(n))
        }
        scope(e) {
            return new Proxy(this, {
                get: (t, n) => {
                    if (n === `preload`) return n => {
                        t.loadManifest().then(r => {
                            let i = r ? .loops ? .[n];
                            i && t.claim(e, i.file)
                        })
                    };
                    if (n === `preloadShots`) return n => {
                        t.loadManifest().then(r => {
                            if (r)
                                for (let r of n) {
                                    let n = t.shotFile(r);
                                    n && t.claim(e, n)
                                }
                        })
                    };
                    if (n === `play` || n === `hold`) return (r, i) => {
                        let a = t.manifest ? t.shotFile(r) : null;
                        if (a) {
                            let n = t.scopes.get(e);
                            n || t.scopes.set(e, n = new Set), n.add(a)
                        }
                        return n === `play` ? t.play(r, i) : t.hold(r, i)
                    };
                    let r = Reflect.get(t, n, t);
                    return typeof r == `function` ? r.bind(t) : r
                }
            })
        }
        silent() {
            let e = () => {};
            return new Proxy(this, {
                get: (t, n) => {
                    if (n === `play`) return () => -1;
                    if (n === `hold`) return () => null;
                    if (typeof n == `string` && [`preload`, `preloadShots`, `setStation`, `bed`, `unlock`, `setMuted`, `suspend`, `visibility`].includes(n)) return e;
                    let r = Reflect.get(t, n, t);
                    return typeof r == `function` ? r.bind(t) : r
                }
            })
        }
        pin(e) {
            this.loadManifest().then(t => {
                if (t)
                    for (let t of e) {
                        let e = this.shotFile(t);
                        e && (this.pinned.add(e), this.buffer(e))
                    }
            })
        }
        release(e) {
            let t = this.scopes.get(e);
            this.asleep.delete(e), t && (this.scopes.delete(e), this.drop(t))
        }
        async idle() {
            await Promise.all([...this.buffers.values()])
        }
        memory() {
            let e = 0;
            for (let t of this.resident.values()) e += t;
            return {
                files: this.resident.size,
                bytes: e,
                scopes: Object.fromEntries([...this.scopes].map(([e, t]) => [e, t.size]))
            }
        }
        decodes = {
            requested: 0,
            done: 0,
            samples: 0
        };
        decodeListeners = new Set;
        onDecode(e) {
            return this.decodeListeners.add(e), () => this.decodeListeners.delete(e)
        }
        async decodeAll() {
            let e = await this.loadManifest();
            if (!e) return 0;
            let t = new Set([...Object.values(e.loops ? ? {}).map(e => e.file), ...Object.values(e.oneshots ? ? {}).map(e => e.file)]);
            return (await Promise.all([...t].map(e => this.buffer(e)))).filter(Boolean).length
        }
        unlock() {
            let e = this.ensureContext();
            if (e) {
                e.state !== `running` && e.resume().catch(() => {});
                try {
                    let t = e.createBuffer(1, 1, e.sampleRate),
                        n = e.createBufferSource();
                    n.buffer = t, n.connect(e.destination), n.start()
                } catch {}
                this.unlocked || (this.unlocked = !0, this.loadManifest().then(() => {
                    this.want && this.setStation(this.want)
                }), this.emit())
            }
        }
        preload(e) {
            this.loadManifest().then(t => {
                let n = t ? .loops ? .[e];
                n && this.buffer(n.file)
            })
        }
        preloadShots(e) {
            this.loadManifest().then(t => {
                for (let n of e) {
                    let e = t ? .oneshots ? .[n];
                    e && this.buffer(e.file)
                }
            })
        }
        setStation(e) {
            if (this.want = e, !this.unlocked || !this.ctx || !this.manifest || this.voice ? .id === e) return;
            let t = e ? this.manifest.loops ? .[e] : void 0;
            if (!t) {
                this.stopLoop();
                return
            }
            let n = e;
            this.buffer(t.file).then(e => {
                this.want === n && this.voice ? .id !== n && e && this.startLoop(n, t, e)
            })
        }
        startLoop(e, t, n) {
            let r = this.ctx,
                i = this.clock.latency + .06,
                a = this.clock.next(`bar`, i),
                o = this.clock.toAudio(a),
                s = Math.round(a / pe),
                c = Math.max(.001, t.loopEnd - t.loopStart),
                l = Math.max(1, t.bars || Math.round(c / 1.3793103448275863)),
                u = (s % l + l) % l * (c / l),
                d = t.loopStart + u,
                f = r.createBufferSource();
            f.buffer = n, f.loop = !0, f.loopStart = t.loopStart, f.loopEnd = t.loopEnd;
            let p = r.createGain(),
                m = t.gain ? ? 1,
                h = Math.min(I, d);
            p.gain.setValueAtTime(0, Math.max(r.currentTime, o - h)), p.gain.linearRampToValueAtTime(m, o + (h > 0 ? 0 : I)), f.connect(p).connect(this.music), f.start(Math.max(r.currentTime, o - h), Math.max(0, d - h));
            let g = this.voice;
            if (g) {
                g.gain.gain.cancelScheduledValues(o - I), g.gain.gain.setValueAtTime(g.gain.gain.value, Math.max(r.currentTime, o - I)), g.gain.gain.linearRampToValueAtTime(0, o + I);
                try {
                    g.src.stop(o + I + .02)
                } catch {}
            }
            this.voice = {
                id: e,
                src: f,
                gain: p
            }, this.pendingAt = a
        }
        stopLoop() {
            let e = this.voice;
            if (!e || !this.ctx) return;
            let t = this.clock.toAudio(this.clock.next(`bar`, this.clock.latency + .06));
            e.gain.gain.setValueAtTime(e.gain.gain.value, Math.max(this.ctx.currentTime, t - I)), e.gain.gain.linearRampToValueAtTime(0, t + I);
            try {
                e.src.stop(t + I + .02)
            } catch {}
            this.voice = null
        }
        play(e, t = {}) {
            if (!this.unlocked || !this.ctx || !this.manifest) return -1;
            let n = (Array.isArray(e) ? e : [e]).find(e => this.manifest.oneshots ? .[e]);
            if (!n) return -1;
            let r = this.manifest.oneshots[n],
                i = this.clock.now(),
                a = t.minGap ? ? .04;
            if (i - (this.lastShot.get(n) ? ? -1) < a) return -1;
            this.lastShot.set(n, i);
            let o = t.quantize ? ? r.quantize ? ? `none`,
                s = this.clock.next(o, this.clock.latency + .01),
                c = this.ready.get(r.file);
            if (c === void 0) return this.buffer(r.file), -1;
            if (!c) return -1;
            let l = this.ctx,
                u = l.createBufferSource();
            u.buffer = c;
            let d = l.createGain();
            return d.gain.value = (r.gain ? ? 1) * (t.gain ? ? 1), u.connect(d).connect(this.sfx), u.start(Math.max(l.currentTime, this.clock.toAudio(s))), s
        }
        hold(e, t = {}) {
            if (!this.unlocked || !this.ctx || !this.manifest) return null;
            let n = (Array.isArray(e) ? e : [e]).find(e => this.manifest.oneshots ? .[e]);
            if (!n) return null;
            let r = this.manifest.oneshots[n],
                i = this.ready.get(r.file);
            if (!i) return this.buffer(r.file), null;
            let a = this.ctx,
                o = a.createBufferSource();
            o.buffer = i, t.loop && (o.loop = !0, o.loopStart = t.loop[0], o.loopEnd = t.loop[1]);
            let s = a.createGain(),
                c = Math.max(a.currentTime, this.clock.toAudio(this.clock.next(t.quantize ? ? `none`, this.clock.latency + .01))),
                l = (r.gain ? ? 1) * (t.gain ? ? 1);
            return s.gain.setValueAtTime(t.fadeIn ? 0 : l, c), t.fadeIn && s.gain.linearRampToValueAtTime(l, c + t.fadeIn), o.connect(s).connect(this.sfx), o.start(c), {
                stop: (e = .08) => {
                    let t = a.currentTime;
                    s.gain.cancelScheduledValues(t), s.gain.setValueAtTime(s.gain.value, t), s.gain.linearRampToValueAtTime(0, t + e);
                    try {
                        o.stop(t + e + .02)
                    } catch {}
                }
            }
        }
        bed(e, t = .12, n) {
            if (!this.ctx || !this.music) return;
            let r = Math.max(this.ctx.currentTime, n === void 0 ? this.ctx.currentTime : this.clock.toAudio(n)),
                i = this.music.gain;
            i.cancelScheduledValues(r), i.setValueAtTime(i.value, r), i.linearRampToValueAtTime(.9 * e, r + Math.max(.005, t))
        }
        setMuted(e) {
            if (this.muted = e, p.set(He, e ? `1` : `0`), this.ctx && this.master) {
                let t = this.ctx.currentTime;
                this.master.gain.cancelScheduledValues(t), this.master.gain.setTargetAtTime(+!e, t, .05)
            }
            this.emit()
        }
        suspend(e) {
            this.suspended = e, this.visibility(e || document.hidden)
        }
        suspended = !1;
        visibility(e) {
            e || = this.suspended;
            let t = this.ctx;
            t && (e && t.state === `running` ? t.suspend().catch(() => {}) : !e && this.unlocked && t.state === `suspended` && t.resume().catch(() => {}))
        }
        get playing() {
            return !!this.voice && !this.muted && this.ctx ? .state === `running`
        }
        get pendingSwitch() {
            return this.pendingAt
        }
    },
    We = {
        high: {
            tier: `high`,
            maxPixelRatio: 2,
            maxPixels: 4354560,
            lightRatio: 2,
            lightPixels: 4354560,
            msaa: 4,
            mirror: .5,
            bloom: .5,
            lod: `high`,
            env: 256,
            detail: !0
        },
        medium: {
            tier: `medium`,
            maxPixelRatio: 2,
            maxPixels: 2384640,
            lightRatio: 3,
            lightPixels: 21e5,
            msaa: 4,
            mirror: .36,
            bloom: .4,
            lod: `high`,
            env: 256,
            detail: !0
        },
        low: {
            tier: `low`,
            maxPixelRatio: 1.5,
            maxPixels: 1024e3,
            lightRatio: 2,
            lightPixels: 135e4,
            msaa: 0,
            mirror: .25,
            bloom: .33,
            lod: `low`,
            env: 128,
            detail: !1
        }
    }; {
    let e = parseInt(C.get(`env`) ? ? ``, 10);
    if (e >= 16 && e <= 512)
        for (let t of Object.values(We)) t.env = e
}
var Ge = C.get(`softenv`) !== `0`;

function Ke(e) {
    return Ge && e.tier === `medium` ? Math.min(e.env, 128) : e.env
}
var L = [`low`, `medium`, `high`],
    qe = .6,
    Je = 10,
    Ye = {
        high: {
            boot: [.3, .14],
            volt: [.33, .16],
            museum: [.46, .22],
            monument: [.72, .2],
            neon: [.23, .22],
            poster: [.35, .17],
            breakout: [.42, .16],
            run: [.12, .19],
            shatter: [.21, .11],
            logo: [.25, .11]
        },
        medium: {
            boot: [.14, .12],
            volt: [.2, .13],
            museum: [.35, .22],
            monument: [.38, .24],
            neon: [.2, .19],
            poster: [.21, .35],
            breakout: [.23, .33],
            run: [.19, .16],
            shatter: [.17, .1],
            logo: [.22, .13]
        },
        low: {
            boot: [.25, .16],
            volt: [.27, .16],
            museum: [.39, .19],
            monument: [.35, .27],
            neon: [.29, .22],
            poster: [.29, .34],
            breakout: [.28, .38],
            run: [.15, .17],
            shatter: [.26, .11],
            logo: [.25, .13]
        }
    },
    Xe = new Set([`boot`, `volt`, `run`]),
    Ze = {
        over: 1.5,
        miss: .5,
        windows: 2
    };

function Qe() {
    let e = matchMedia(`(pointer: coarse)`).matches,
        t = Math.min(screen.width, screen.height) < 820;
    return e ? t ? `phone` : `tablet` : `desk`
}

function $e(e, t) {
    return (navigator.deviceMemory ? ? 8) <= 3 ? `low` : t === `desk` ? `high` : t === `tablet` || e === `webgpu` ? `medium` : `low`
}

function et(e, t) {
    let n = navigator.hardwareConcurrency ? ? 8,
        r = $e(e, t);
    return n <= 4 ? `low` : r
}

function tt(e, t, n) {
    let r = Ye[e][n],
        i = Ye.medium[n];
    return r ? e === `low` && t === `webgpu` && i ? [Math.min(r[0], i[0]), Math.min(r[1], i[1])] : r : null
}

function nt(e, t, n, r, i) {
    let a = tt(e, t, n);
    return a ? r * (a[0] + a[1] * i) : null
}
var rt = class {
        renderer;
        backend;
        gpu;
        settings;
        scale = 1;
        cap = 1;
        fps = 60;
        frameMs = 16.7;
        cpuMs = 0;
        paused = !1;
        bench;
        why = ``;
        klass;
        top;
        refresh = 1 / 60;
        samples = [];
        acc = {
            t: 0,
            n: 0,
            sum: 0,
            over: 0
        };
        hold = 1.5;
        lastDown = -1e9;
        lastUp = -1e9;
        failedAt = new Map;
        tierFloorUntil = 0;
        time = 0;
        listeners = new Set;
        overlay = null;
        overlayAt = 0;
        pinnedScale;
        sizeCss = {
            w: 1,
            h: 1
        };
        level = 1;
        levelShown = 1;
        badWindows = 0;
        pendingTier = null;
        station = ``;
        next;
        caps = new Map;
        targets = new Map;
        constructor(e, t, n, r = null) {
            this.renderer = e, this.backend = t, this.gpu = n, this.klass = Qe();
            let i = parseFloat(C.get(`gpums`) ? ? ``);
            this.bench = i > 0 ? {
                ok: !0,
                msPerMP: i,
                latency: 0,
                runs: [],
                ms: 0,
                note: `pinned (?gpums)`
            } : r ? .ok ? r : null;
            let a = C.get(`tier`),
                o = a && a in We ? {
                    tier: a,
                    why: `pinned (?tier)`
                } : this.pickTier();
            this.settings = We[o.tier], this.top = o.tier, this.why = o.why;
            let s = parseFloat(C.get(`scale`) ? ? ``);
            this.pinnedScale = Number.isFinite(s) ? g(s, .25, 3) : null, C.get(`perf`) === `1` && (this.overlay = document.getElementById(`perf`), this.overlay && (this.overlay.hidden = !1)), document.addEventListener(`visibilitychange`, () => {
                document.hidden || this.restart()
            }), console.info(`[perf] ${this.bench?`GPU ${this.bench.msPerMP} ms/MP`:`no benchmark`} → tier ${this.settings.tier} (${this.why})`)
        }
        pickTier() {
            let e = $e(this.backend, this.klass),
                t = this.bench;
            if (!t) return {
                tier: et(this.backend, this.klass),
                why: `heuristics (${this.klass}, ${navigator.hardwareConcurrency??`?`} cores)`
            };
            let n = screen.width * screen.height,
                r = this.klass === `desk` ? .75 : 1;
            for (let i = L.indexOf(e); i > 0; i--) {
                let e = L[i],
                    a = We[e],
                    o = Math.min(r, window.devicePixelRatio || 1, a.maxPixelRatio, Math.sqrt(a.maxPixels / Math.max(1, n))),
                    s = Math.max(0, ...Object.keys(Ye[e]).map(r => nt(e, this.backend, r, t.msPerMP, n * o * o / 1e6) ? ? 0));
                if (s <= Je) return {
                    tier: e,
                    why: `${this.klass}, the heaviest station ${s.toFixed(1)} ms at ${o.toFixed(2)}×`
                }
            }
            return {
                tier: `low`,
                why: `${this.klass}${e===`low`?``:`, too slow for `+e}`
            }
        }
        get tier() {
            return this.settings.tier
        }
        onTier(e) {
            return this.listeners.add(e), () => this.listeners.delete(e)
        }
        capOf(e) {
            return this.caps.get(e) ? ? this.cap
        }
        targetOf(e) {
            return this.targets.get(e) ? ? this.cap
        }
        scaleOf(e) {
            return this.pinnedScale === null ? g(Math.floor(this.targetOf(e) * this.level * 20 + 1e-6) / 20, qe, this.capOf(e)) : this.pinnedScale
        }
        resize(e, t) {
            this.sizeCss = {
                w: e,
                h: t
            };
            let n = window.devicePixelRatio || 1,
                r = Math.max(1, e * t),
                i = this.settings,
                a = (e, t) => g(Math.min(n, e, Math.sqrt(t / r), 3), qe, 3);
            this.cap = a(i.maxPixelRatio, i.maxPixels), this.caps.clear(), this.targets.clear();
            let o = this.bench,
                s = o && this.klass === `phone` && i.lightRatio > i.maxPixelRatio;
            for (let e of new Set([...Xe, ...Object.keys(Ye[i.tier])])) {
                let t = s && Xe.has(e) ? Math.max(this.cap, a(i.lightRatio, i.lightPixels)) : this.cap;
                this.caps.set(e, t);
                let n = t,
                    c = tt(i.tier, this.backend, e);
                if (o && c) {
                    let e = (Je / o.msPerMP - c[0]) / c[1],
                        i = e > 0 ? Math.sqrt(e * 1e6 / r) : qe;
                    n = g(Math.floor(Math.min(t, i) * 20 + 1e-6) / 20, qe, t)
                } else o || (n = this.cap);
                this.targets.set(e, n)
            }
            this.scale = this.station ? this.shownScale() : this.pinnedScale ? ? this.cap, this.levelShown = this.level, this.apply()
        }
        apply() {
            this.renderer.setPixelRatio(this.scale), this.renderer.setSize(this.sizeCss.w, this.sizeCss.h, !1)
        }
        restart(e = 1.5) {
            this.hold = Math.max(this.hold, e), this.samples.length = 0, this.acc = {
                t: 0,
                n: 0,
                sum: 0,
                over: 0
            }, this.badWindows = 0
        }
        moment(e, t) {
            if (this.station = e, this.next = t, this.pendingTier) {
                let e = this.pendingTier;
                this.pendingTier = null, this.setTier(e.t, e.reason)
            }
            let n = this.shownScale();
            this.levelShown = this.level, Math.abs(n - this.scale) > .001 && (this.scale = n, this.apply(), this.restart(.6))
        }
        shownScale() {
            return this.next ? Math.min(this.scaleOf(this.station), this.scaleOf(this.next)) : this.scaleOf(this.station)
        }
        setTier(e, t) {
            if (e !== this.settings.tier) {
                this.settings = We[e], this.level = this.levelShown = 1, this.failedAt.clear(), this.resize(this.sizeCss.w, this.sizeCss.h), this.restart(2);
                for (let e of this.listeners) e(this.settings, t);
                console.info(`[perf] tier → ${e} (${t})`)
            }
        }
        frame(e, t, n = !0) {
            if (this.time += e, e <= 0 || e > .25) {
                this.restart(.5);
                return
            }
            if (this.frameMs += (e * 1e3 - this.frameMs) * .08, this.fps = 1e3 / this.frameMs, this.cpuMs += (t - this.cpuMs) * .1, this.samples.push(e), this.samples.length > 90 && this.samples.shift(), this.samples.length >= 30) {
                let e = [...this.samples].sort((e, t) => e - t);
                this.refresh = g(e[Math.floor(e.length * .1)], 1 / 240, 1 / 30)
            }
            if (this.updateOverlay(), this.pinnedScale !== null) return;
            if (this.hold > 0 || this.paused) {
                this.hold -= e;
                return
            }
            if (!n) {
                this.acc = {
                    t: 0,
                    n: 0,
                    sum: 0,
                    over: 0
                }, this.badWindows = 0;
                return
            }
            let r = Math.max(this.refresh, 1 / 60) * 1.18,
                i = this.acc;
            if (i.t += e, i.n++, i.sum += e, e > r && i.over++, i.t < .75) return;
            let a = i.sum / i.n,
                o = i.over / i.n;
            this.acc = {
                t: 0,
                n: 0,
                sum: 0,
                over: 0
            };
            let s = this.time,
                c = this.station,
                l = e => Math.round(e * 40);
            if (this.badWindows = a > r * Ze.over || o > Ze.miss ? this.badWindows + 1 : 0, a > r || o > .25) {
                if (this.scale > .601) {
                    if (this.level >= this.levelShown - 1e-6 && (this.failedAt.set(l(this.levelShown), s), this.level = Math.max(.05, this.levelShown * (a > r * 1.5 ? .8 : .9)), this.lastDown = s), this.badWindows >= Ze.windows) {
                        let e = Math.max(qe, Math.min(this.scaleOf(c), this.scale * .8));
                        this.level = Math.min(this.level, e / this.targetOf(c)), this.levelShown = this.level, console.info(`[perf] scale ${this.scale.toFixed(2)} → ${e.toFixed(2)} at once (frame ${(a*1e3).toFixed(1)} ms, ${(o*100).toFixed(0)} % missed)`), this.scale = e, this.apply(), this.restart(.4)
                    }
                } else if (s - this.lastDown > 2 && !this.pendingTier) {
                    let e = L.indexOf(this.settings.tier);
                    if (e > 0) {
                        this.tierFloorUntil = s + 30;
                        let t = `frame ${(a*1e3).toFixed(1)} ms at scale ${this.scale.toFixed(2)}`;
                        this.badWindows >= Ze.windows ? this.setTier(L[e - 1], t) : this.pendingTier = {
                            t: L[e - 1],
                            reason: t
                        }
                    }
                    this.lastDown = s
                }
            } else if (a < this.refresh * 1.06 && o < .02 && s - this.lastDown > 4 && s - this.lastUp > 3) {
                if (this.level < .999) {
                    if (this.level <= this.levelShown + 1e-6) {
                        let e = Math.min(1, this.levelShown * 1.06 + .02);
                        s - (this.failedAt.get(l(e)) ? ? -1e9) > 20 && (this.level = e, this.lastUp = s)
                    }
                } else if (s > this.tierFloorUntil && s - this.lastDown > 12 && !this.pendingTier) {
                    let e = L.indexOf(this.settings.tier);
                    e < L.indexOf(this.top) && (this.pendingTier = {
                        t: L[e + 1],
                        reason: `smooth again`
                    }, this.lastUp = s)
                }
            }
        }
        stats = {
            calls: 0,
            tris: 0,
            stations: ``
        };
        updateOverlay() {
            let e = this.overlay;
            if (!e) return;
            let t = this.renderer.info.render;
            this.stats.calls = t.drawCalls, this.stats.tris = t.triangles;
            let n = performance.now();
            if (n - this.overlayAt < 250) return;
            this.overlayAt = n;
            let r = this.renderer.domElement,
                i = this.bench;
            e.textContent = `${this.backend===`webgpu`?`WebGPU`:`WebGL2`}  ${this.gpu}\nfps ${this.fps.toFixed(0).padStart(3)}   frame ${this.frameMs.toFixed(1)} ms   cpu ${this.cpuMs.toFixed(1)} ms\nscale ${this.scale.toFixed(2)} / ${this.capOf(this.station).toFixed(2)} (${this.station||`—`} ${this.targetOf(this.station).toFixed(2)} × ${this.level.toFixed(2)})   ${r.width}×${r.height}   tier ${this.settings.tier}\nbench ${i?`${i.msPerMP} ms/MP`:`none`} · ${this.why}\ndraws ${this.stats.calls}   tris ${(this.stats.tris/1e3).toFixed(0)}k   refresh ${(this.refresh*1e3).toFixed(1)} ms\n` + this.stats.stations
        }
    },
    it = 5,
    at = 100;
async function ot(r, o, d = {}) {
    let f = performance.now();
    if (C.get(`bench`) === `0`) return {
        ok: !1,
        msPerMP: 0,
        latency: 0,
        runs: [],
        ms: 0,
        note: `off (?bench=0)`
    };
    let p = d.size ? ? 1024,
        m = d.taps ? ? 64,
        h = [];
    try {
        let g = new Uint8Array(262144);
        for (let e = 0; e < g.length; e++) g[e] = (Math.sin(e * 12.9898) * 43758.5453 % 1 + 1) % 1 * 255;
        let v = new ve(g, 256, 256, _);
        v.wrapS = v.wrapT = oe, v.generateMipmaps = !0, v.minFilter = u, v.needsUpdate = !0, h.push(v);
        let x = new e;
        x.colorNode = be(() => {
            let e = n().toVar(),
                r = a(0).toVar();
            return i(m, ({
                i: n
            }) => {
                let i = b(n),
                    o = y(l(i.mul(2.4)), ye(i.mul(2.4))).mul(i.add(1).mul(.013)),
                    s = xe(v, e.mul(i.mul(.37).add(3)).add(o)).level(0).rgb,
                    u = s.mul(2).sub(1),
                    d = c(t(u, a(.3, .8, .5)).mul(-1.7)).add(ye(u.x.mul(9.1).add(i)).mul(l(u.y.mul(7.3))).mul(.25));
                r.addAssign(s.mul(d))
            }), s(r.mul(1 / m))
        })(), h.push(x);
        let S = new M(x),
            C = new me(p, p, {
                depthBuffer: !1
            }),
            w = new me(16, 16, {
                depthBuffer: !1
            });
        h.push(C, w);
        let T = r.backend,
            E = new Uint8Array(4),
            ee = o === `webgl2` ? T.gl.createFramebuffer() : null,
            D = o === `webgpu` ? async () => {
                await T.device.queue.onSubmittedWorkDone()
            } : async e => {
                let t = T.gl,
                    n = T.get(e.texture).textureGPU;
                T.state.bindFramebuffer(t.READ_FRAMEBUFFER, ee), t.framebufferTexture2D(t.READ_FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n, 0), t.readPixels(0, 0, 1, 1, t.RGBA, t.UNSIGNED_BYTE, E), T.state.bindFramebuffer(t.READ_FRAMEBUFFER, null)
            },
            O = r.getRenderTarget(),
            k = async e => {
                r.setRenderTarget(e), S.render(r);
                let t = performance.now();
                return await D(e), performance.now() - t
            };
        try {
            await k(w), await k(C);
            let e = performance.now() + (d.warmMs ? ? at);
            for (let t = 0; t < 40 && performance.now() < e; t++) r.setRenderTarget(C), S.render(r), await k(C);
            let t = [],
                n = [];
            for (let e = 0; e < it; e++) t.push(await k(w)), n.push(await k(C));
            if (d.paced) {
                n.length = 0;
                for (let e = 0; e < d.paced; e++) await new Promise(e => requestAnimationFrame(e)), n.push(await k(C));
                n.sort((e, t) => e - t), n.splice(0, n.length >> 1), n.length = 1
            }
            let i = Math.min(...t),
                a = Math.min(...n) - i,
                o = Number.isFinite(a) && a > .05;
            return {
                ok: o,
                msPerMP: o ? +(a / (p * p / 1e6)).toFixed(3) : 0,
                latency: +i.toFixed(2),
                runs: n.map(e => +e.toFixed(2)),
                ms: +(performance.now() - f).toFixed(1),
                ...o ? {} : {
                    note: `no GPU time measured`
                }
            }
        } finally {
            r.setRenderTarget(O), ee && T.gl.deleteFramebuffer(ee)
        }
    } catch (e) {
        return {
            ok: !1,
            msPerMP: 0,
            latency: 0,
            runs: [],
            ms: +(performance.now() - f).toFixed(1),
            note: String(e ? .message ? ? e)
        }
    } finally {
        for (let e of h) e.dispose()
    }
}
var st = `ft-lang`,
    ct = new Map,
    lt = new Set;

function ut() {
    try {
        let e = localStorage.getItem(st);
        return e === `ja` || e === `en` ? e : null
    } catch {
        return null
    }
}

function dt() {
    let e = new URLSearchParams(location.search).get(`lang`);
    return e === `ja` || e === `en` ? e : ut() ? ? ((navigator.languages ? .[0] ? ? navigator.language ? ? ``).toLowerCase().startsWith(`ja`) ? `ja` : `en`)
}
var R = dt();
document.documentElement.lang = R;
var ft = () => R;

function pt(e) {
    if (e === R) return;
    R = e;
    try {
        localStorage.setItem(st, e)
    } catch {}
    let t = new URL(location.href);
    t.searchParams.has(`lang`) && (t.searchParams.set(`lang`, e), history.replaceState(history.state, ``, t)), document.documentElement.lang = e, yt(document);
    for (let t of lt) t(e)
}

function mt(e) {
    return lt.add(e), () => {
        lt.delete(e)
    }
}

function ht(e, t) {
    return ct.set(e, t), e
}

function gt(e) {
    return R === `ja` || !e ? e : ct.get(e) ? ? e
}
var z = (e, t) => R === `en` ? t : e,
    _t = {
        枚: [``, ``],
        回: [``, ``],
        ステージ: [`stage`, `stages`],
        秒: [`s`, `s`],
        m: [`m`, `m`]
    };

function vt(e, t) {
    if (!e || R === `ja`) return e ? ? ``;
    let n = _t[e];
    return n ? t === `1` ? n[0] : n[1] : e
}

function yt(e = document) {
    let t = R === `en`;
    bt(e, `[data-en]`, e => {
        e.dataset.ja === void 0 && (e.dataset.ja = e.textContent ? ? ``);
        let n = t ? e.dataset.en : e.dataset.ja;
        e.textContent !== n && (e.textContent = n)
    }), bt(e, `[data-en-aria]`, e => {
        e.dataset.jaAria === void 0 && (e.dataset.jaAria = e.getAttribute(`aria-label`) ? ? ``), e.setAttribute(`aria-label`, t ? e.dataset.enAria : e.dataset.jaAria)
    }), bt(e, `[data-en-href]`, e => {
        e.dataset.jaHref === void 0 && (e.dataset.jaHref = e.getAttribute(`href`) ? ? ``), e.setAttribute(`href`, t ? e.dataset.enHref : e.dataset.jaHref)
    })
}

function bt(e, t, n) {
    e instanceof HTMLElement && e.matches(t) && n(e), e.querySelectorAll(t).forEach(n)
}

function xt(e) {
    let t = e.get(`gate`);
    return t === `iris` || t === `pass` ? t : `label`
}
var B = `#f4f2ee`,
    V = `#ff481b`,
    St = `rgba(244, 242, 238, 0.34)`,
    Ct = `rgba(8, 8, 10, 0.3)`,
    wt = 180,
    Tt = 260,
    Et = 200,
    Dt = 140,
    Ot = 360,
    kt = 160,
    At = 5,
    jt = 3,
    Mt = 1100,
    Nt = 100,
    Pt = 300,
    Ft = 290,
    It = 140,
    Lt = 400,
    Rt = 100,
    zt = 260,
    H = 150,
    Bt = 170,
    Vt = 140,
    Ht = 150,
    Ut = 200,
    Wt = 170,
    Gt = 90,
    Kt = 220,
    qt = 100,
    Jt = 320,
    Yt = 560,
    Xt = 240,
    Zt = 1.1,
    Qt = .4,
    $t = 140,
    en = 190,
    tn = 180,
    nn = 80,
    rn = 210,
    an = 160,
    on = 900,
    U = `cubic-bezier(0.16, 1, 0.3, 1)`,
    W = `cubic-bezier(0.7, 0, 0.84, 0)`,
    sn = `cubic-bezier(0.65, 0, 0.35, 1)`,
    cn = 7.5,
    ln = 16,
    un = 5,
    dn = {
        dx: 144,
        dy: 64
    },
    fn = {
        dx: 0,
        dy: -84,
        attach: `edge`
    },
    pn = 5,
    mn = {
        dx: 92,
        dy: -38
    },
    hn = {
        dx: 0,
        dy: -60,
        attach: `edge`
    },
    gn = C.get(`blur`) === `0`,
    G = (e, t, n) => e < t ? t : e > n ? n : e,
    _n = e => e.replace(/[&<>"]/g, e => ({
        "&": `&amp;`,
        "<": `&lt;`,
        ">": `&gt;`,
        '"': `&quot;`
    })[e]);

function vn(e, t, n, r) {
    let i = (e, t, n) => ((1 - 3 * t + 3 * e) * n + (3 * t - 6 * e)) * n * n + 3 * e * n,
        a = (e, t, n) => (3 * (1 - 3 * t + 3 * e) * n + 2 * (3 * t - 6 * e)) * n + 3 * e;
    return o => {
        if (o <= 0) return 0;
        if (o >= 1) return 1;
        let s = o;
        for (let t = 0; t < 8; t++) {
            let t = a(e, n, s);
            if (Math.abs(t) < 1e-6) break;
            s = G(s - (i(e, n, s) - o) / t, 0, 1)
        }
        return i(t, r, s)
    }
}
var yn = vn(.45, 0, .2, 1),
    bn = vn(.2, .5, .25, 1),
    K = `fill="none" stroke="${B}" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"`,
    xn = {
        click: `<svg viewBox="0 0 16 16"><rect x="3.6" y="0.9" width="8.8" height="14.2" rx="4.4" ${K}/><path d="M8 0.9v5.4" ${K}/><path d="M8 1.55A3.75 3.75 0 0 0 4.25 5.3v1.05H8z" fill="${V}"/></svg>`,
        tap: `<svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.4" ${K} stroke-opacity="0.55"/><circle cx="8" cy="8" r="2.6" fill="${V}"/></svg>`,
        hold: `<svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.4" ${K} stroke-opacity="0.3"/><path d="M8 1.6a6.4 6.4 0 0 1 6.4 6.4" fill="none" stroke="${V}" stroke-width="1.5" stroke-linecap="round"/><circle cx="8" cy="8" r="2.2" fill="${B}"/></svg>`,
        keys: `<svg class="lb-keys" viewBox="0 0 36 24">${[[`w`,12.5,.6],[`a`,.6,12.9],[`s`,12.5,12.9],[`d`,24.4,12.9]].map(([e,t,n])=>`<g class="k k-${e}"><rect x="${t}" y="${n}" width="11" height="10.5" rx="2"/><text x="${t+5.5}" y="${(n+7.9).toFixed(2)}" text-anchor="middle">${e.toUpperCase()}</text></g>`).join(``)}</svg>`,
        pad: `<svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.6" ${K} stroke-opacity="0.55"/><circle cx="8" cy="5.4" r="2.6" fill="${V}"/></svg>`,
        space: `<svg viewBox="0 0 16 16"><rect x="0.8" y="8.2" width="14.4" height="5.2" rx="1.2" ${K}/><path d="M8 6.2V1.4M5.6 3.6 8 1.3l2.4 2.3" fill="none" stroke="${V}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        drag: `<svg viewBox="0 0 16 16"><path d="M4.4 8h7.2" ${K} stroke-opacity="0.35"/><path d="M3.2 5.4 0.8 8l2.4 2.6M12.8 5.4 15.2 8l-2.4 2.6" ${K}/><circle class="kn" cx="8" cy="8" r="2.4" fill="${V}"/></svg>`
    },
    Sn = `<svg viewBox="0 0 16 16"><rect x="5.6" y="1.2" width="4.8" height="4.8" rx="0.9" fill="${V}"/><rect x="0.6" y="7.6" width="4.8" height="4.8" rx="0.9" ${K}/><rect x="5.6" y="7.6" width="4.8" height="4.8" rx="0.9" ${K}/><rect x="10.6" y="7.6" width="4.8" height="4.8" rx="0.9" ${K}/></svg>`,
    Cn = Object.fromEntries(Object.entries({ ...xn,
        keys: Sn
    }).map(([e, t]) => [e, t.split(V).join(B)])),
    wn = `<svg viewBox="0 0 12 12"><path d="M2 6.3 4.8 9 10 3" fill="none" stroke="${V}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    Tn = `<svg viewBox="0 0 14 14"><circle cx="7" cy="7" r="6.25" fill="none" stroke="${B}" stroke-width="1.1"/><path d="M4.3 7.3 6.2 9.2 9.8 5.2" pathLength="1" fill="none" stroke="${B}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    En = e => `<svg viewBox="0 0 14 14"><path d="M8.3 0.8 3.2 8h3.6l-1.2 5.2L10.8 6H7.2z" ${e?`fill="${V}"`:`fill="none" stroke="${St}" stroke-width="1" stroke-linejoin="round"`}/></svg>`,
    Dn = e => e ? `<svg viewBox="0 0 14 14"><path d="M7 7 2.2 3.6M7 7l5.3-1.9M7 7l-.8 5.9M7 7l4 4.1M7 7 1.3 9.2" fill="none" stroke="${V}" stroke-width="1.3" stroke-linecap="round"/><circle cx="7" cy="7" r="1.6" fill="${V}"/></svg>` : `<svg viewBox="0 0 14 14"><circle cx="7" cy="7" r="5.2" fill="none" stroke="${St}" stroke-width="1"/></svg>`,
    On = {
        KeyW: `w`,
        ArrowUp: `w`,
        KeyA: `a`,
        ArrowLeft: `a`,
        KeyS: `s`,
        ArrowDown: `s`,
        KeyD: `d`,
        ArrowRight: `d`
    };

function kn(e, t) {
    return e.kind === `hold` ? `hold` : e.kind === `walk` ? t ? `pad` : `keys` : e.kind === `game` ? t ? `tap` : `space` : t ? `tap` : `click`
}

function An(e, t) {
    return e.kind === `drag` ? `drag` : e.kind === `longpress` ? `hold` : e.kind === `key` ? `keys` : t ? `tap` : `click`
}

function jn(e) {
    let t = e.state;
    return e.cleared ? !0 : t.kind === `count` && t.count && t.count[1] > 0 ? t.count[0] >= t.count[1] : t.kind === `hold` || t.kind === `walk` ? t.progress >= 1 : !1
}

function Mn(e, t, n, r, i, a = 0, o = -1, s = cn) {
    let c = Math.SQRT1_2 * s;
    if (i === `edge`) {
        let r = n.b < t,
            i = r ? n.b : n.t,
            l = Math.abs(i - t),
            u = r ? -1 : 1,
            d = a || (e < n.l + n.w / 2 ? 1 : -1),
            f = Math.max(0, Math.min(l - 24, Math.round(o >= 0 ? o : l * .4))),
            p = Math.floor(e + d * f) + .5;
        if ((p < n.l + 14 || p > n.r - 14) && (p = Math.min(Math.max(p, n.l + 14.5), n.r - 14.5)), d = Math.sign(p - e) || 1, f = Math.abs(p - e), f > l - 24) {
            let n = Math.hypot(p - e, i - t) || 1;
            return [
                [e + (p - e) / n * s, t + (i - t) / n * s],
                [p, i]
            ]
        }
        return f > s ? [
            [e + d * c, t + u * c],
            [e + d * f, t + u * f],
            [p, i]
        ] : [
            [e, t + u * s],
            [p, i]
        ]
    }
    let l = n.l + n.w / 2 > e ? n.l : n.r,
        u = r,
        d = l - e,
        f = u - t,
        p = Math.abs(d),
        m = Math.abs(f),
        h = Math.sign(d) || 1,
        g = Math.sign(f) || 1;
    if (m > s && p - 14 >= m) return [
        [e + h * c, t + g * c],
        [e + h * m, u],
        [l, u]
    ];
    if (m <= s) return [
        [e + h * s, u],
        [l, u]
    ];
    let _ = Math.hypot(d, f) || 1;
    return [
        [e + d / _ * s, t + f / _ * s],
        [l, u]
    ]
}
var Nn = class {
        plan;
        width;
        el;
        dots;
        route;
        me;
        X;
        Y;
        ex;
        shown = {
            passed: -1,
            route: ``,
            me: ``
        };
        constructor(e, t) {
            this.plan = e, this.width = t;
            let {
                z0: n,
                z1: r,
                halfWidth: i
            } = e, a = t / (n - r), o = +(2 * i * a).toFixed(1);
            this.X = e => +((n - e) * a).toFixed(1), this.Y = e => +((e + i) * a + 1).toFixed(1), this.ex = this.X(e.exit);
            let s = `http://www.w3.org/2000/svg`,
                c = document.createElementNS(s, `svg`);
            c.setAttribute(`class`, `lb-map-plan`), c.setAttribute(`width`, String(t + 2)), c.setAttribute(`height`, String(o + 2)), c.setAttribute(`viewBox`, `0 0 ${t+2} ${o+2}`), c.innerHTML = `<rect x="0.5" y="0.5" width="${t+1}" height="${o+1}" rx="2" fill="none" stroke="rgba(244,242,238,0.3)" stroke-width="1"/>` + e.dots.map(([e, t]) => `<circle cx="${this.X(t)}" cy="${this.Y(e)}" r="1.6" fill="rgba(244,242,238,0.55)"/>`).join(``) + `<path class="rt" fill="none" stroke="${B}" stroke-opacity="0.7" stroke-width="1" stroke-dasharray="1.5 3" stroke-linecap="round"/><rect x="${(this.ex-1).toFixed(1)}" y="${this.Y(-e.exitHalf)}" width="2" height="${(2*e.exitHalf*a).toFixed(1)}" fill="${V}"/>`, this.me = document.createElementNS(s, `svg`), this.me.setAttribute(`class`, `lb-map-me`), this.me.setAttribute(`width`, `10`), this.me.setAttribute(`height`, `10`), this.me.setAttribute(`viewBox`, `-5 -5 10 10`), this.me.innerHTML = `<path d="M-3.5 -4L4.5 0L-3.5 4Z" fill="${V}"/>`, this.el = document.createElement(`div`), this.el.className = `lb-map`, this.el.append(c, this.me), this.dots = [...c.querySelectorAll(`circle`)], this.route = c.querySelector(`.rt`)
        }
        set(e, t, n) {
            let r = 0;
            this.plan.dots.forEach(([, e]) => {
                e > t && r++
            }), r !== this.shown.passed && (this.shown.passed = r, this.plan.dots.forEach(([, e], n) => this.dots[n] ? .setAttribute(`fill`, e > t ? `rgba(244,242,238,0.28)` : `rgba(244,242,238,0.55)`)));
            let i = this.X(t),
                a = this.Y(e),
                o = this.Y(0),
                s = Math.round(i),
                c = Math.round(a),
                l = s + 6,
                u = Math.abs(c - o) > .5 ? l + Math.abs(c - o) : l,
                d = this.ex - 4,
                f = d > u + 1 ? `M${l} ${c}${u===l?``:`L${u.toFixed(1)} ${o}`}H${d.toFixed(1)}` : ``;
            f !== this.shown.route && (this.shown.route = f, this.route.setAttribute(`d`, f || `M0 0`), this.route.style.display = f ? `` : `none`);
            let p = `translate(${(i-5).toFixed(1)}px, ${(a-5).toFixed(1)}px) rotate(${Math.round(-n*180/Math.PI)}deg)`;
            p !== this.shown.me && (this.shown.me = p, this.me.style.transform = p)
        }
    },
    Pn = 64,
    Fn = class {
        icons = new Map;
        started = !1;
        onReady = () => {};
        get(e) {
            return this.icons.get(e) ? ? null
        }
        prepare() {
            if (this.started) return;
            this.started = !0;
            let e = () => {
                this.load().catch(e => console.warn(`[gate] sticker icons unavailable`, e))
            };
            `requestIdleCallback` in window ? window.requestIdleCallback(e, {
                timeout: 1500
            }) : setTimeout(e, 300)
        }
        async load() {
            let e = await fetch(`./gen/volt/stickers.json`);
            if (!e.ok) throw Error(`${e.status} stickers.json`);
            let t = await e.json(),
                n = await Promise.all(t.pages.map(async e => {
                    let t = !!e.half,
                        n = await fetch(`./gen/volt/` + (e.half ? ? e.file));
                    if (!n.ok) throw Error(`${n.status} ${e.half??e.file}`);
                    return {
                        bmp: await createImageBitmap(await n.blob(), {
                            premultiplyAlpha: `none`,
                            colorSpaceConversion: `none`
                        }),
                        scale: t ? .5 : 1,
                        art: e.art
                    }
                })),
                r = document.createElement(`canvas`);
            r.width = r.height = 128;
            let i = r.getContext(`2d`, {
                    willReadFrequently: !0
                }),
                a = document.createElement(`canvas`);
            a.width = a.height = Pn;
            let o = a.getContext(`2d`);
            if (!i || !o) return;
            o.imageSmoothingQuality = `high`;
            let s = e => `requestIdleCallback` in window ? window.requestIdleCallback(() => e(), {
                timeout: 400
            }) : setTimeout(e, 16);
            await new Promise(e => {
                let c = 0,
                    l = () => {
                        if (c >= t.cells.length) {
                            e();
                            return
                        }
                        let u = t.cells[c++],
                            d = n[u.page];
                        if (d && u.frames[0]) {
                            let [e, t] = u.frames[0], n = d.scale, s = d.art * n;
                            i.clearRect(0, 0, 128, 128), i.drawImage(d.bmp, e * n, t * n, s, s, 0, 0, 128, 128);
                            let c = i.getImageData(0, 0, 128, 128),
                                l = c.data,
                                f = 128,
                                p = 128,
                                m = -1,
                                h = -1;
                            for (let e = 0; e < 128; e++)
                                for (let t = 0; t < 128; t++) {
                                    let n = (e * 128 + t) * 4,
                                        r = l[n + 3];
                                    if (!r) continue;
                                    let i = 255 / r;
                                    l[n] = Math.min(255, l[n] * i), l[n + 1] = Math.min(255, l[n + 1] * i), l[n + 2] = Math.min(255, l[n + 2] * i), r > 24 && (t < f && (f = t), t > m && (m = t), e < p && (p = e), e > h && (h = e))
                                }
                            if (m >= 0) {
                                i.putImageData(c, 0, 0);
                                let e = m - f + 1,
                                    t = h - p + 1,
                                    n = Pn / Math.max(e, t);
                                o.clearRect(0, 0, Pn, Pn), o.drawImage(r, f, p, e, t, (Pn - e * n) / 2, (Pn - t * n) / 2, e * n, t * n), this.icons.set(u.key, a.toDataURL(`image/png`))
                            }
                        }
                        s(l)
                    };
                l()
            });
            for (let e of n) e.bmp.close();
            this.onReady()
        }
    },
    In = class {
        name = `label`;
        ownsHints = !0;
        env;
        host;
        root;
        card;
        glyphEl;
        keyEls = null;
        codesDown = new Set;
        keysLit = ``;
        offKeys = null;
        textEl;
        rowEl;
        pieceEl;
        remEl;
        chev;
        chevPaths;
        pin;
        paths;
        mark;
        pulseEl;
        hold;
        holdArc;
        holdFinger;
        sr;
        M;
        dirty = !0;
        offStage = null;
        icons = new Fn;
        t = 0;
        visit = {
            id: ``,
            finished: !1,
            lastDone: -1,
            progKey: ``,
            progT: 0,
            pulses: 0
        };
        phase = `off`;
        phaseT = 0;
        mode = `alone`;
        pinShown = !1;
        chevShown = !1;
        ringShown = !1;
        mk = {
            x: 0,
            y: 0,
            vx: 0,
            vy: 0,
            live: !1
        };
        cp = {
            x: 0,
            y: 0,
            live: !1
        };
        flipX = !1;
        flipY = !1;
        slot = -1;
        domClear = [];
        domT = -1;
        offAuto = null;
        off = null;
        cw = 0;
        ch = 0;
        sizeOk = !1;
        w = {
            glyph: ``,
            text: ``,
            piece: ``,
            rem: ``,
            row: !1,
            phone: null,
            pin: ``,
            card: ``,
            path: ``,
            chev: ``,
            hold: ``,
            arc: ``,
            held: null,
            button: !1,
            sr: ``,
            origin: ``
        };
        pieceKids = [];
        map = null;
        anims = new Map;
        spot = void 0;
        hop = {
            phase: `none`,
            t0: 0,
            wait: Bt
        };
        glide = {
            phase: `none`,
            t0: 0,
            wait: qt,
            dur: Jt,
            on: !1,
            m0: [0, 0],
            c0: [0, 0],
            bend: null,
            swing: 0
        };
        hintsEl;
        hintViews = new Map;
        taken = {
            card: null,
            pts: null,
            mark: null,
            ring: null,
            clear: []
        };
        mount(e, t) {
            this.host = e, this.env = t, e.classList.add(`gate--label`);
            let n = document.createElement(`div`);
            n.className = `lb${gn?` no-blur`:``}`, n.innerHTML = `<div class="lb-hints" aria-hidden="true"></div><svg class="lb-hold" viewBox="-32 -32 64 64" aria-hidden="true"><circle class="t" r="29" style="fill:none;stroke:${Ct};stroke-width:4"/><circle class="t" r="29" style="fill:none;stroke:rgba(244,242,238,0.22);stroke-width:1.5"/><circle class="arc" r="29" transform="rotate(-90)" style="fill:none;stroke-width:2.5;stroke-linecap:round"/><g class="fg"><circle r="4.2" style="fill:${Ct}"/><circle r="3" style="fill:${B}"/></g></svg><div class="lb-pin" aria-hidden="true"><svg class="lb-lead"><path class="hl" pathLength="1"/><path class="ln" pathLength="1"/></svg><i class="lb-pulse"></i><div class="lb-mark"><svg><circle class="hl" cx="0.5" cy="0.5" r="7.5"/><circle class="rg" cx="0.5" cy="0.5" r="7.5"/><circle class="dh" cx="0.5" cy="0.5" r="3.8"/><circle class="dt" cx="0.5" cy="0.5" r="2.5"/></svg></div></div><div class="lb-card" aria-hidden="true"><span class="lb-glyph"></span><p class="lb-text"></p><div class="lb-row" hidden><span class="lb-piece"></span><span class="lb-rem"></span></div><svg class="lb-chev"><path style="stroke:${Ct};stroke-width:3"/><path style="stroke:rgba(244,242,238,0.78);stroke-width:1"/></svg></div><p class="lb-sr" aria-live="polite"></p>`, e.appendChild(n), this.root = n;
            let r = e => n.querySelector(e);
            this.card = r(`.lb-card`), this.glyphEl = r(`.lb-glyph`), this.textEl = r(`.lb-text`), this.rowEl = r(`.lb-row`), this.pieceEl = r(`.lb-piece`), this.remEl = r(`.lb-rem`), this.chev = r(`.lb-chev`), this.chevPaths = [...this.chev.querySelectorAll(`path`)], this.pin = r(`.lb-pin`), this.paths = [...this.pin.querySelectorAll(`.lb-lead path`)], this.mark = r(`.lb-mark`), this.pulseEl = r(`.lb-pulse`), this.hold = r(`.lb-hold`), this.holdArc = r(`.lb-hold .arc`), this.holdFinger = r(`.lb-hold .fg`), this.sr = r(`.lb-sr`), this.hintsEl = r(`.lb-hints`);
            let i = e => {
                this.w.button && this.phase === `on` && (e.preventDefault(), t.activate())
            };
            this.card.addEventListener(`click`, i), this.card.addEventListener(`keydown`, e => {
                (e.key === `Enter` || e.key === ` `) && i(e)
            }), this.offStage = t.stage.onChange(() => {
                this.dirty = !0
            });
            let a = e => !!e.target ? .closest ? .(`input, textarea, select, dialog[open], [contenteditable]`),
                o = e => {
                    if (On[e.code]) {
                        if (e.type === `keyup`) this.codesDown.delete(e.code);
                        else if (a(e) || e.metaKey || e.ctrlKey || e.altKey) return;
                        else this.codesDown.add(e.code);
                        this.lightKeys()
                    }
                },
                s = () => {
                    this.codesDown.clear(), this.lightKeys()
                };
            window.addEventListener(`keydown`, o), window.addEventListener(`keyup`, o), window.addEventListener(`blur`, s), this.offKeys = () => {
                window.removeEventListener(`keydown`, o), window.removeEventListener(`keyup`, o), window.removeEventListener(`blur`, s)
            }, document.fonts ? .addEventListener ? .(`loadingdone`, () => {
                this.sizeOk = !1;
                for (let e of this.hintViews.values()) e.sizeOk = !1
            }), this.icons.onReady = () => {
                this.w.piece = ``
            }
        }
        dispose() {
            this.offStage ? .(), this.offKeys ? .();
            for (let e of this.anims.values()) e.cancel();
            for (let e of this.hintViews.values())
                for (let t of e.anims.values()) t.cancel();
            this.root ? .remove(), this.host ? .classList.remove(`gate--label`)
        }
        metrics() {
            let e = this.env.stage.info,
                t = e.cssW,
                n = e.cssH,
                r = e.portrait,
                i = Math.min(t, n) < 600,
                a = Kn(),
                o, s, c;
            return r ? (o = i ? 16 : 32, s = 112, c = i ? 16 : 40) : i ? (o = 24, s = 64, c = 16) : (o = 48, s = 120, c = 56), {
                W: t,
                H: n,
                portrait: r,
                phone: i,
                edge: o + Math.max(a.l, a.r),
                top: s + a.t,
                bot: c + a.b,
                k: r ? G(e.u / (390 / 1080), .85, 2) : G(e.u, .75, 1.5),
                mid: i ? 19.5 : 25.5,
                ringR: i ? 1624 / 64 : 29,
                hmid: i ? 13.5 : 18.5,
                gap: i ? 8 : 16
            }
        }
        update(e, t) {
            if (this.t += t, this.dirty || !this.M) {
                this.dirty = !1, this.M = this.metrics(), this.sizeOk = !1, this.w.path = ``, this.w.chev = ``, this.w.phone !== this.M.phone && (this.w.phone = this.M.phone, this.root.classList.toggle(`is-phone`, this.M.phone), this.w.piece = ``, this.map = null);
                for (let e of this.hintViews.values()) e.sizeOk = !1, e.shown.path = ``
            }
            if (this.t - this.domT > .5 && (this.domT = this.t, this.domClear = Wn()), (this.phase === `off` || this.phase === `out`) && (this.taken = {
                    card: null,
                    pts: null,
                    mark: null,
                    ring: null,
                    clear: []
                }), this.phase === `done`) {
                if (this.t - this.phaseT < .54) return;
                this.toOff()
            }
            if (this.phase === `out` && this.t - this.phaseT >= .3 && this.toOff(), !e) {
                this.phase === `on` && this.leave();
                return
            }
            let n = e.state,
                r = jn(e);
            if ((e.station.id !== this.visit.id || this.visit.finished && !r) && this.newVisit(e), this.visit.finished) return;
            if (n.label === !1) {
                this.phase === `on` && this.leave();
                return
            }
            if (r && this.phase !== `on`) {
                this.visit.finished = !0;
                return
            }
            let i = n.spot ? ? null;
            if (i !== this.spot) {
                let e = this.spot;
                this.spot = i, e !== void 0 && this.phase === `on` && !r && this.mode === `point` && this.pinShown && (n.move === `glide` && !this.env.reducedMotion && this.hop.phase === `none` ? this.startGlide(n.hopHold ? ? qt) : this.startHop(n.hopHold ? ? Bt))
            }
            let a = !r && this.stepHop();
            r || this.stepGlide(), this.content(e, r), this.geometry(e, t, r), a && this.hopIn(), (this.phase === `off` || this.phase === `out`) && this.arrive(), !r && this.mode === `point` && this.pinShown && !n.held && !this.env.reducedMotion && this.visit.pulses < jt && this.t - this.visit.progT > At * (this.visit.pulses + 1) && (this.visit.pulses++, this.play(`pulse`, this.pulseEl, [{
                transform: `scale(1)`,
                opacity: 1
            }, {
                transform: `scale(1.7)`,
                opacity: 1,
                offset: .35
            }, {
                transform: `scale(2.1)`,
                opacity: 0
            }], {
                duration: Mt,
                easing: `ease-out`
            })), r && this.finish()
        }
        newVisit(e) {
            this.phase !== `off` && this.toOff(), this.visit = {
                id: e.station.id,
                finished: !1,
                lastDone: -1,
                progKey: ``,
                progT: this.t,
                pulses: 0
            }, this.mk.live = !1, this.cp.live = !1, this.flipX = !1, this.flipY = !1, this.slot = -1, this.offAuto = null, this.off = null, this.w.piece = ``, this.w.rem = ``, this.w.sr = ``, this.spot = void 0, this.hop.phase = `none`, this.glide.phase = `none`
        }
        startHop(e) {
            let t = this.hop;
            t.phase !== `out` && (t.phase = `hold`, t.t0 = this.t, t.wait = e, this.visit.progT = this.t, this.visit.pulses = 0)
        }
        stepHop() {
            let e = this.hop;
            if (e.phase === `hold` && this.t - e.t0 >= e.wait / 1e3) e.phase = `out`, e.t0 = this.t, this.hopOut();
            else if (e.phase === `out` && this.t - e.t0 >= Vt / 1e3) return e.phase = `in`, e.t0 = this.t, this.mk.live = !1, this.cp.live = !1, this.flipX = !1, this.flipY = !1, this.slot = -1, this.w.path = ``, this.sizeOk = !1, !0;
            else e.phase === `in` && this.t - e.t0 >= 390 / 1e3 && (e.phase = `none`);
            return !1
        }
        get hopping() {
            return this.hop.phase === `hold` || this.hop.phase === `out`
        }
        hopOut() {
            let e = this.env.reducedMotion;
            this.anims.get(`pulse`) ? .cancel();
            let t = this.opacityOf(this.card);
            this.play(`card`, this.card, e ? [{
                opacity: t
            }, {
                opacity: 0
            }] : [{
                opacity: t,
                transform: `none`
            }, {
                opacity: 0,
                transform: `translateY(2px)`
            }], {
                duration: 120,
                easing: W
            });
            let n = parseFloat(getComputedStyle(this.paths[1]).strokeDashoffset) || 0;
            for (let [t, r] of this.paths.entries()) this.play(`line${t}`, r, e ? [{
                strokeDashoffset: n,
                opacity: 1
            }, {
                strokeDashoffset: n,
                opacity: 0
            }] : [{
                strokeDashoffset: n
            }, {
                strokeDashoffset: 1
            }], {
                duration: e ? Vt : 100,
                easing: W
            });
            this.play(`mark`, this.mark, e ? [{
                opacity: this.opacityOf(this.mark)
            }, {
                opacity: 0
            }] : [{
                opacity: this.opacityOf(this.mark),
                transform: `scale(1)`
            }, {
                opacity: 0,
                transform: `scale(0.5)`
            }], {
                duration: e ? Vt : 90,
                delay: e ? 0 : 50,
                easing: W
            })
        }
        hopIn() {
            if (this.env.reducedMotion) {
                this.play(`mark`, this.mark, [{
                    opacity: 0
                }, {
                    opacity: 1
                }], {
                    duration: Wt
                });
                for (let [e, t] of this.paths.entries()) this.play(`line${e}`, t, [{
                    strokeDashoffset: 0,
                    opacity: 0
                }, {
                    strokeDashoffset: 0,
                    opacity: 1
                }], {
                    duration: Wt
                });
                this.play(`card`, this.card, [{
                    opacity: 0
                }, {
                    opacity: 1
                }], {
                    duration: Wt,
                    easing: `ease-out`
                });
                return
            }
            this.play(`mark`, this.mark, [{
                opacity: 0,
                transform: `scale(0.4)`
            }, {
                opacity: 1,
                transform: `scale(1.08)`,
                offset: .7
            }, {
                opacity: 1,
                transform: `scale(1)`
            }], {
                duration: Ht,
                easing: U
            });
            for (let [e, t] of this.paths.entries()) this.play(`line${e}`, t, [{
                strokeDashoffset: 1
            }, {
                strokeDashoffset: 0
            }], {
                duration: Ut,
                delay: Gt,
                easing: sn
            });
            this.play(`card`, this.card, [{
                opacity: 0,
                transform: `translateY(4px)`
            }, {
                opacity: 1,
                transform: `none`
            }], {
                duration: Wt,
                delay: Kt,
                easing: U
            })
        }
        startGlide(e) {
            let t = this.glide;
            if (this.visit.progT = this.t, this.visit.pulses = 0, this.anims.get(`pulse`) ? .cancel(), t.phase !== `hold`) {
                if (t.phase === `move`) {
                    this.glideFrom(!0);
                    return
                }
                t.phase = `hold`, t.t0 = this.t, t.wait = e
            }
        }
        stepGlide() {
            let e = this.glide;
            e.phase === `hold` && this.t - e.t0 >= e.wait / 1e3 && (e.phase = `move`, this.glideFrom(!1))
        }
        glideFrom(e) {
            let t = this.glide;
            t.t0 = this.t, t.on = e, t.bend = null, t.m0 = [this.mk.x, this.mk.y], t.c0 = [this.cp.x, this.cp.y]
        }
        lightKeys() {
            if (!this.keyEls) return;
            let e = new Set([...this.codesDown].map(e => On[e])),
                t = [...`wasd`].map(t => e.has(t) ? t : `-`).join(``);
            if (t !== this.keysLit) {
                for (let e = 0; e < 4; e++) t[e] !== this.keysLit[e] && this.keyEls[`wasd` [e]].classList.toggle(`on`, t[e] !== `-`);
                this.keysLit = t
            }
        }
        content(e, t) {
            let n = e.state,
                r = this.env.touch,
                i = this.M,
                a = gt((r ? n.touchText ? ? n.text : n.text) ? ? ``),
                o = kn(n, r);
            o !== this.w.glyph && !this.hopping && (this.w.glyph = o, this.glyphEl.innerHTML = xn[o], this.sizeOk = !1, this.card.classList.toggle(`is-keys`, o === `keys`), this.keyEls = o === `keys` ? Object.fromEntries([...`wasd`].map(e => [e, this.glyphEl.querySelector(`.k-${e}`)])) : null, this.keysLit = `----`, this.lightKeys()), a !== this.w.text && !this.hopping && (this.w.text = a, this.textEl.textContent = a, this.sizeOk = !1);
            let s = n.count ? Math.max(0, Math.round(n.count[1])) : 0,
                c = n.count ? G(Math.round(n.count[0]), 0, s) : 0,
                l = ``,
                u = ``;
            n.map ? (l = `map`, u = `map|${i.phone}`) : n.stickers && s ? (l = `stk`, u = `stk|${s}`) : n.labels ? .length ? (l = `pass`, u = `pass|${n.labels.join(`,`)}`) : n.marks && s ? (l = `marks`, u = `marks|${n.marks}|${s}`) : n.kind === `game` && s && (l = `stages`, u = `stages|${s}`);
            let d = this.visit.lastDone >= 0 && c > this.visit.lastDone,
                f = u !== this.w.piece || l === `map` && this.map ? .plan !== n.map ? .plan;
            f && this.buildPiece(l, u, n, s), this.setPiece(l, n, c, s, d, f), this.visit.lastDone = c;
            let p = ``,
                m = n.unit ? ? ``;
            if (t ? p = `check` : n.kind === `game` && s ? p = `${s-Math.max(0,c-1)}|${m}` : n.kind === `count` && s ? p = `${s-c}|${m}` : typeof n.left == `number` && (p = `${n.kind===`hold`?n.progress>.001?Math.max(0,n.left).toFixed(1):String(Math.round(n.left)):String(Math.max(0,Math.round(n.left)))}|${m}`), p && p !== `check` && (p += `|${ft()}`), p !== this.w.rem) {
                let e = this.w.rem;
                if (this.w.rem = p, p === `check`) this.remEl.innerHTML = wn, !this.env.reducedMotion && e && this.remEl.firstElementChild ? .animate([{
                    transform: `scale(0.4)`,
                    opacity: 0
                }, {
                    transform: `scale(1.18)`,
                    opacity: 1,
                    offset: .6
                }, {
                    transform: `scale(1)`,
                    opacity: 1
                }], {
                    duration: kt,
                    easing: U
                });
                else if (p) {
                    let [e, t, n] = p.split(`|`), r = _n(vt(t, e));
                    this.remEl.innerHTML = n === `en` ? `<b>${e}</b>${r?`${r} `:``}to go` : `あと<b>${e}</b>${r}`
                } else this.remEl.textContent = ``;
                (e.split(`|`)[0].length !== p.split(`|`)[0].length || !e != !p || e.split(`|`)[2] !== p.split(`|`)[2]) && (this.sizeOk = !1)
            }
            let h = !!l || !!p;
            h !== this.w.row && (this.w.row = h, this.rowEl.hidden = !h, this.sizeOk = !1);
            let g = `${c}|${Math.round((n.progress||0)*100)}|${+!!n.held}`;
            if (g !== this.visit.progKey && (this.visit.progKey = g, this.visit.progT = this.t, this.visit.pulses = 0), e.button !== this.w.button) {
                this.w.button = e.button;
                let t = this.card;
                t.classList.toggle(`is-button`, e.button), e.button ? (t.setAttribute(`role`, `button`), t.tabIndex = 0, t.dataset.ui = ``, t.removeAttribute(`aria-hidden`)) : (t.removeAttribute(`role`), t.removeAttribute(`tabindex`), delete t.dataset.ui, t.setAttribute(`aria-hidden`, `true`), t.removeAttribute(`aria-label`), document.activeElement === t && t.blur())
            }
            e.button && this.card.getAttribute(`aria-label`) !== a && this.card.setAttribute(`aria-label`, a);
            let _ = n.kind === `count` && s ? s - c : typeof n.left == `number` ? Math.ceil(n.left) : 0,
                v = s ? ` ${c} / ${s}` : ``,
                y = vt(n.unit, String(_)),
                b = t ? z(`クリア：${a}`, `Cleared: ${a}`) : z(`遷移アクション：${a}${v}${_>0&&n.unit?`、あと ${_} ${n.unit}`:``}`, `To continue: ${a}${v}${_>0&&n.unit?`, ${_}${y?` ${y}`:``} to go`:``}`);
            b !== this.w.sr && (this.w.sr = b, this.sr.textContent = b)
        }
        buildPiece(e, t, n, r) {
            this.w.piece = t, this.pieceKids = [], this.map = null;
            let i = this.pieceEl;
            if (i.className = `lb-piece`, i.replaceChildren(), e === `stk`) {
                i.classList.add(`lb-stk`);
                for (let e = 0; e < r; e++) {
                    let e = document.createElement(`span`);
                    e.innerHTML = `<i></i>`, e.dataset.k = ``, i.appendChild(e), this.pieceKids.push(e)
                }
                this.icons.prepare()
            } else if (e === `pass`) {
                i.classList.add(`lb-pass`);
                for (let e = 0; e < (n.labels ? ? []).length; e++) {
                    let e = document.createElement(`span`);
                    e.innerHTML = Tn, i.appendChild(e), this.pieceKids.push(e)
                }
            } else if (e === `marks`) {
                i.classList.add(`lb-marks`);
                for (let e = 0; e < r; e++) {
                    let e = document.createElement(`span`);
                    e.dataset.on = ``, i.appendChild(e), this.pieceKids.push(e)
                }
            } else if (e === `stages`) {
                i.classList.add(`lb-stages`);
                for (let e = 0; e < r; e++) {
                    let e = document.createElement(`i`);
                    i.appendChild(e), this.pieceKids.push(e)
                }
            } else e === `map` && n.map && (this.map = new Nn(n.map.plan, this.M.phone ? 168 : 224), i.appendChild(this.map.el));
            this.sizeOk = !1
        }
        pop(e) {
            e && !this.env.reducedMotion && this.phase === `on` && e.animate([{
                transform: `scale(0.55)`
            }, {
                transform: `scale(1.2)`,
                offset: .55
            }, {
                transform: `scale(1)`
            }], {
                duration: kt,
                easing: U
            })
        }
        setPiece(e, t, n, r, i, a) {
            let o = this.pieceKids;
            if (e === `stk`) {
                let e = t.stickers ? ? [],
                    n = Math.min(r, e.length);
                for (let t = 0; t < o.length; t++) {
                    let r = o[t],
                        a = t < n ? e[t] : ``,
                        s = a ? this.icons.get(a) : null,
                        c = a ? `${a}|${+!!s}` : ``,
                        l = r.dataset.k ? ? ``;
                    if (l === c) continue;
                    let u = !a || l.split(`|`)[0] !== a;
                    if (r.dataset.k = c, !a) r.innerHTML = `<i></i>`;
                    else if (s) {
                        let e = document.createElement(`img`);
                        e.alt = ``, e.decoding = `async`, e.src = s, r.replaceChildren(e)
                    } else r.innerHTML = `<b></b>`;
                    a && u && i && t === n - 1 && this.pop(r)
                }
            } else if (e === `pass`) {
                let e = t.kind === `tap` ? o.length : n;
                o.forEach((t, n) => {
                    let r = n < e ? `done` : ``;
                    if (t.className === r || (t.className = r, !r || a || this.visit.lastDone < 0 || this.env.reducedMotion || this.phase !== `on`)) return;
                    let i = this.hop.phase === `hold` || this.hop.phase === `out` ? 400 : 0;
                    t.animate([{
                        opacity: .34,
                        transform: `scale(0.72)`
                    }, {
                        opacity: 1,
                        transform: `scale(1.16)`,
                        offset: .5
                    }, {
                        opacity: 1,
                        transform: `scale(1)`
                    }], {
                        duration: Xt,
                        delay: i,
                        easing: U,
                        fill: `backwards`
                    }), t.querySelector(`path`) ? .animate([{
                        strokeDashoffset: 1
                    }, {
                        strokeDashoffset: 0
                    }], {
                        duration: 200,
                        delay: i + 60,
                        easing: sn,
                        fill: `backwards`
                    })
                })
            } else if (e === `marks`) {
                let e = t.marks === `knock` ? Dn : En;
                o.forEach((t, r) => {
                    let a = r < n ? `1` : `0`;
                    t.dataset.on !== a && (t.dataset.on = a, t.innerHTML = e(a === `1`), a === `1` && i && r === n - 1 && this.pop(t))
                })
            } else if (e === `stages`) {
                let e = Math.max(0, n - 1);
                o.forEach((t, n) => {
                    let r = n < e ? `done` : ``;
                    t.className !== r && (t.className = r, r && i && n === e - 1 && this.pop(t))
                })
            } else e === `map` && t.map && this.map && this.map.set(t.map.x, t.map.z, t.map.yaw)
        }
        geometry(e, t, n) {
            if (this.hopping || this.glide.phase === `hold`) return;
            let r = e.state,
                i = this.env.stage,
                a = this.M;
            this.sizeOk || = (this.cw = this.card.offsetWidth, this.ch = this.card.offsetHeight, this.cw > 0);
            let o = this.cw,
                s = this.ch,
                c = null;
            if (r.kind === `hold` && r.at && (r.progress > .002 || r.held)) {
                let e = i.pick(r.at, r.p);
                c = i.toCss(e[0], e[1])
            }
            let l = null;
            if (c) l = [c[0], c[1] + a.ringR + 5];
            else if (r.target) {
                let e = i.pick(r.target, r.targetP);
                l = i.toCss(e[0], e[1])
            }
            let u = r.offscreen ? ? null;
            if (!u && l) {
                let e = l[0] < -8 || l[0] > a.W + 8,
                    t = l[0] > 24 && l[0] < a.W - 24;
                e ? this.offAuto = l[0] < 0 ? `left` : `right` : t && (this.offAuto = null), u = this.offAuto
            }
            n || (this.off = u);
            let d = this.off ? `off` : l || this.mk.live && n ? `point` : `alone`,
                f = (a.portrait ? r.leadP : r.lead) ? ? (a.portrait ? fn : dn),
                p = (r.keepClear ? ? []).map(([e, t, n, r]) => {
                    let [a, o] = i.toCss(e, t), [s, c] = i.toCss(n, r);
                    return {
                        l: a,
                        t: o,
                        r: s,
                        b: c,
                        w: s - a
                    }
                });
            this.glide.phase === `move` && (d !== `point` || !l || n) && (this.glide.phase = `none`);
            let m = this.glide.phase === `move` && l ? this.glideStep(l, f, o, s, p) : null;
            if (l && !m) {
                let e = this.mk;
                if (!e.live || !this.pinShown) e.x = l[0], e.y = l[1], e.vx = e.vy = 0, e.live = !0;
                else if (t > 0) {
                    let r = n ? 10 : 26,
                        i = Math.exp(-r * t),
                        a = e.x - l[0],
                        o = (e.vx + r * a) * t,
                        s = e.y - l[1],
                        c = (e.vy + r * s) * t;
                    e.x = l[0] + (a + o) * i, e.vx = (e.vx - r * o) * i, e.y = l[1] + (s + c) * i, e.vy = (e.vy - r * c) * i
                }
            }
            let h = Math.round(this.mk.x - .5),
                g = Math.round(this.mk.y - .5),
                _, v, y = f.attach ? ? `side`,
                b = f.attach === `edge` ? Math.sign(f.dx) : 0;
            if (d === `point` ? {
                    x: _,
                    y: v,
                    attach: y,
                    dir: b
                } = m ? ? this.placeFor(h, g, f, o, s, p) : d === `off` ? (_ = this.off === `right` ? a.W - a.edge - ln - un - o : a.edge + ln + un, v = G(Math.round(a.portrait ? a.top + 8 : a.H / 2 - a.mid), a.top, Math.max(a.top, a.H - a.bot - s))) : (_ = Math.round((a.W - o) / 2), v = Math.max(a.top, a.H - a.bot - s)), !n) {
                if (!this.cp.live || this.phase !== `on` || m) this.cp.x = _, this.cp.y = v, this.cp.live = !0;
                else {
                    let e = 1 - Math.exp(-11 * t);
                    this.cp.x += (_ - this.cp.x) * e, this.cp.y += (v - this.cp.y) * e
                }
            }
            let x = Math.round(this.cp.x),
                S = Math.round(this.cp.y),
                C = `${x}px ${S}px`;
            C !== this.w.card && (this.w.card = C, this.card.style.translate = C);
            let w = {
                    l: x,
                    t: S,
                    r: x + o,
                    b: S + s,
                    w: o
                },
                T = null;
            if (d === `point`) {
                let e = `${h}px ${g}px`;
                e !== this.w.pin && (this.w.pin = e, this.pin.style.translate = e);
                let t = h + .5,
                    n = g + .5;
                t > w.l + 12 && t < w.r - 12 && (y = `edge`), T = Mn(t, n, w, S + a.mid, y, y === `edge` ? b : 0, y === `edge` && f.attach === `edge` && f.bend !== void 0 ? f.bend * a.k : -1);
                let r = `M` + T.map(([e, t]) => `${(e-h).toFixed(2)} ${(t-g).toFixed(2)}`).join(`L`);
                if (r !== this.w.path) {
                    this.w.path = r;
                    for (let e of this.paths) e.setAttribute(`d`, r)
                }
                let i = y === `edge` ? w.b < n ? `center bottom` : `center top` : w.l + o / 2 > t ? `left center` : `right center`;
                i !== this.w.origin && (this.w.origin = i, this.card.style.transformOrigin = i)
            }
            if (d === `off`) {
                let e = this.off === `right`,
                    t = e ? o + ln - 1 : -17,
                    n = a.mid - 1,
                    r = e ? un : -5,
                    i = `M${t} ${n-5}L${t+r} ${n}L${t} ${n+5}`;
                if (i !== this.w.chev) {
                    this.w.chev = i;
                    for (let e of this.chevPaths) e.setAttribute(`d`, i)
                }
            }
            this.setMode(d), this.setRing(c, r), this.taken = {
                card: w,
                pts: T,
                mark: d === `point` ? [h + .5, g + .5] : null,
                ring: c ? [c[0], c[1], a.ringR + 4] : null,
                clear: p
            }
        }
        placeFor(e, t, n, r, i, a) {
            let o = a.length ? this.clearPlace(e, t, n, r, i, [...a, ...this.domClear]) : null;
            if (!o) {
                o = this.placeCard(e, t, n, r, i);
                let s = {
                    l: o.x,
                    t: o.y,
                    r: o.x + r,
                    b: o.y + i,
                    w: r
                };
                this.domClear.some(e => q(s, e, 6)) && (o = this.clearPlace(e, t, n, r, i, [...a, ...this.domClear]) ? ? o)
            }
            return o
        }
        glideStep(e, t, n, r, i) {
            let a = this.glide,
                o = this.mk;
            a.bend === null && (this.slot = -1, this.flipX = !1, this.flipY = !1);
            let s = this.placeFor(Math.round(e[0] - .5), Math.round(e[1] - .5), t, n, r, i),
                [c, l] = a.m0,
                u = [a.c0[0] - c, a.c0[1] - l],
                d = [s.x - e[0], s.y - e[1]],
                f = Math.hypot(e[0] - c, e[1] - l);
            if (a.bend === null) {
                let t = this.route(a.m0, e, u, d, n, r, i);
                if (!t) return a.phase = `none`, this.startHop(0), o.x = c, o.y = l, o.vx = o.vy = 0, {
                    x: Math.round(a.c0[0]),
                    y: Math.round(a.c0[1]),
                    attach: `side`,
                    dir: 0
                };
                [a.bend, a.swing] = t, a.dur = G(Jt + .3 * (f + Math.abs(a.bend) + Math.abs(a.swing)), Jt, Yt)
            }
            let p = G((this.t - a.t0) / (a.dur / 1e3), 0, 1),
                m = (a.on ? bn : yn)(p),
                [h, g] = Rn(a.m0, e, a.bend, m),
                [_, v] = zn(u, d, a.swing, m);
            return o.x = h, o.y = g, o.vx = o.vy = 0, o.live = !0, p >= 1 && (a.phase = `none`), {
                x: Math.round(h + _),
                y: Math.round(g + v),
                attach: s.attach,
                dir: s.dir
            }
        }
        route(e, t, n, r, i, a, o) {
            let s = this.M,
                c = (o, s, c) => {
                    let [l, u] = Rn(e, t, s, o), [d, f] = zn(n, r, c, o), p = l + d, m = u + f;
                    return {
                        l: p,
                        t: m,
                        r: p + i,
                        b: m + a,
                        w: i
                    }
                },
                l = [0, 50, -50, 90, -90, 140, -140, 200, -200].filter(e => {
                    for (let t = 1; t < 20; t++) {
                        let [o, s] = zn(n, r, e, t / 20);
                        if (o < 8 && o + i > -8 && s < 8 && s + a > -8) return !1
                    }
                    return !0
                });
            if (!l.length) return null;
            let u = o.filter(e => !q(c(0, 0, 0), e, 0) && !q(c(1, 0, 0), e, 0)),
                d = [];
            for (let e of [0, 40, -40, 80, -80, 130, -130, 190, -190, 260, -260, 340, -340])
                for (let t of l) d.push([e, t]);
            d.sort((e, t) => Math.abs(e[0]) + Math.abs(e[1]) - Math.abs(t[0]) - Math.abs(t[1]));
            for (let [e, t] of d) {
                let n = !0;
                for (let r = 1; r < 20 && n; r++) {
                    let i = c(r / 20, e, t);
                    n = i.l >= s.edge / 2 && i.r <= s.W - s.edge / 2 && i.t >= s.top / 2 && i.b <= s.H - s.bot / 2 && !u.some(e => q(i, e, 4))
                }
                if (n) return [e, t]
            }
            return null
        }
        clearPlace(e, t, n, r, i, a) {
            let o = this.M,
                s = o.k,
                c = e + .5,
                l = t + .5,
                u = o.edge,
                d = o.W - o.edge - r,
                f = o.top,
                p = o.H - o.bot - i,
                m = n.attach === `edge`,
                h = n.dx > 0 ? 1 : n.dx < 0 ? -1 : 1,
                g = n.dy >= 0 ? 1 : -1,
                _ = Math.round(Math.max(Math.abs(m ? 110 : n.dx), 96) * s),
                v = Math.abs(m ? 24 : n.dy) * s,
                y = Math.max(Math.abs(m ? n.dy : 56), 44) * s,
                b = 34 * s,
                x = (t, n) => ({
                    x: t > 0 ? e + _ : e + 1 - _ - r,
                    y: Math.round(G(l + n * v - o.mid, f, Math.max(f, p))),
                    attach: `side`,
                    dir: 0
                }),
                S = (e, t, n = y) => ({
                    x: Math.round(G(c + t * Math.min(r / 2 - 30, 48 * s) - r / 2, u, Math.max(u, d))),
                    y: Math.round(e ? l - n - i : l + n),
                    attach: `edge`,
                    dir: t
                }),
                C = m ? [S(g < 0, h), S(g >= 0, h), S(g < 0, -h), S(g >= 0, -h), x(1, 1), x(-1, 1), x(1, -1), x(-1, -1)] : [x(h, g), x(-h, g), x(h, -g), x(-h, -g), S(!0, h), S(!1, h), S(!0, -h), S(!1, -h)];
            C.push(S(!1, h, b), S(!0, h, b), S(!1, -h, b), S(!0, -h, b));
            let w = e => {
                    if (e.x < u - .5 || e.x > d + .5 || e.y < f - .5 || e.y > p + .5) return !1;
                    let t = {
                        l: e.x,
                        t: e.y,
                        r: e.x + r,
                        b: e.y + i,
                        w: r
                    };
                    return Ln([c, l], t, 10) || a.some(e => q(t, e, 6)) ? !1 : e.attach === `side` ? (e.x > c ? e.x - c : c - (e.x + r)) >= Math.abs(e.y + o.mid - l) + 14 : (e.y > l ? e.y - l : l - (e.y + i)) >= 28 && c > t.l + 14 && c < t.r - 14
                },
                T = this.slot >= 0 ? [this.slot, ...C.keys()] : [...C.keys()];
            for (let e of T)
                if (w(C[e])) return this.slot = e, C[e];
            return this.slot = -1, null
        }
        placeCard(e, t, n, r, i) {
            let a = this.M,
                o = a.k,
                s = e + .5,
                c = t + .5,
                l = a.edge,
                u = Math.max(l, a.W - a.edge - r),
                d = a.top,
                f = Math.max(d, a.H - a.bot - i),
                p = (e, t, n, r) => {
                    let a = r ? e !== this.flipY : e,
                        o = Math.round(c - t - i),
                        s = Math.round(c + t);
                    return a && o < d && s <= f ? a = !1 : !a && s > f && o >= d && (a = !0), r && (a !== e && (e ? o >= d + 16 : s <= f - 16) && (a = e), this.flipY = a !== e), {
                        x: Math.round(G(n, l, u)),
                        y: G(a ? o : s, d, f)
                    }
                };
            if (n.attach === `edge`) {
                let {
                    x: e,
                    y: t
                } = p(n.dy < 0, Math.abs(n.dy) * o, s + n.dx * o - r / 2, !0);
                return {
                    x: e,
                    y: t,
                    attach: `edge`,
                    dir: Math.sign(n.dx)
                }
            }
            let m = Math.round(Math.abs(n.dx) * o),
                h = n.dy * o,
                g = n.dx >= 0,
                _ = e + m,
                v = e + 1 - m - r,
                y = _ >= l && _ <= u,
                b = v >= l && v <= u,
                x = g;
            n.flip && (x = g !== this.flipX, x && !y && b ? x = !1 : !x && !b && y && (x = !0), x !== g && (g ? _ >= l + 24 && _ <= u - 24 : v >= l + 24 && v <= u - 24) && (x = g), this.flipX = x !== g);
            let S = G(x ? _ : v, l, u),
                C = G(Math.round(c + h - a.mid), d, f);
            return (x ? S - s : s - (S + r)) >= Math.abs(C + a.mid - c) + 14 ? {
                x: S,
                y: C,
                attach: `side`,
                dir: 0
            } : { ...p(h < 0, Math.max(Math.abs(h) + 24, 56), x ? s - 24 : s + 24 - r, !1),
                attach: `edge`,
                dir: x ? 1 : -1
            }
        }
        play(e, t, n, r) {
            this.anims.get(e) ? .cancel();
            let i = t.animate(n, {
                fill: `both`,
                ...r
            });
            return this.anims.set(e, i), i
        }
        opacityOf(e) {
            let t = parseFloat(getComputedStyle(e).opacity);
            return Number.isFinite(t) ? t : 0
        }
        arrive() {
            let e = this.phase;
            this.phase = `on`, this.phaseT = this.t, this.card.classList.add(`is-on`);
            let t = this.env.reducedMotion,
                n = this.mode === `point`,
                r = e === `out` ? this.opacityOf(this.card) : 0;
            t ? this.play(`card`, this.card, [{
                opacity: r
            }, {
                opacity: 1
            }], {
                duration: Et,
                easing: `ease-out`
            }) : this.play(`card`, this.card, [{
                opacity: r,
                transform: `translateY(4px)`
            }, {
                opacity: 1,
                transform: `none`
            }], {
                duration: Et,
                delay: n && e === `off` ? Ot : 0,
                easing: U
            }), n && this.showPin(!0, e === `off`), this.mode === `off` && this.showChev(!0)
        }
        showPin(e, t = !1) {
            if (e === this.pinShown) return;
            this.pinShown = e;
            let n = this.env.reducedMotion;
            if (e) {
                if (this.pin.classList.add(`is-on`), n) {
                    this.play(`mark`, this.mark, [{
                        opacity: 0
                    }, {
                        opacity: 1
                    }], {
                        duration: Et
                    });
                    for (let [e, t] of this.paths.entries()) this.play(`line${e}`, t, [{
                        strokeDashoffset: 0,
                        opacity: 0
                    }, {
                        strokeDashoffset: 0,
                        opacity: 1
                    }], {
                        duration: Et
                    });
                    return
                }
                this.play(`mark`, this.mark, [{
                    opacity: 0,
                    transform: `scale(0.4)`
                }, {
                    opacity: 1,
                    transform: `scale(1.08)`,
                    offset: .7
                }, {
                    opacity: 1,
                    transform: `scale(1)`
                }], {
                    duration: wt,
                    easing: U
                });
                for (let [e, n] of this.paths.entries()) this.play(`line${e}`, n, [{
                    strokeDashoffset: 1
                }, {
                    strokeDashoffset: 0
                }], {
                    duration: t ? Tt : H * 1.4,
                    delay: t ? Dt : 60,
                    easing: sn
                })
            } else {
                if (n) {
                    this.play(`mark`, this.mark, [{
                        opacity: this.opacityOf(this.mark)
                    }, {
                        opacity: 0
                    }], {
                        duration: H
                    });
                    for (let [e, t] of this.paths.entries()) this.play(`line${e}`, t, [{
                        strokeDashoffset: 0,
                        opacity: 1
                    }, {
                        strokeDashoffset: 0,
                        opacity: 0
                    }], {
                        duration: H
                    });
                    return
                }
                for (let [e, t] of this.paths.entries()) this.play(`line${e}`, t, [{
                    strokeDashoffset: 0
                }, {
                    strokeDashoffset: 1
                }], {
                    duration: H,
                    easing: W
                });
                this.play(`mark`, this.mark, [{
                    opacity: this.opacityOf(this.mark),
                    transform: `scale(1)`
                }, {
                    opacity: 0,
                    transform: `scale(0.5)`
                }], {
                    duration: H,
                    delay: H * .6,
                    easing: W
                })
            }
        }
        showChev(e) {
            e !== this.chevShown && (this.chevShown = e, this.play(`chev`, this.chev, [{
                opacity: this.opacityOf(this.chev)
            }, {
                opacity: +!!e
            }], {
                duration: Et,
                delay: e ? 60 : 0,
                easing: `ease-out`
            }))
        }
        setMode(e) {
            e !== this.mode && (this.mode = e, this.phase === `on` && (this.showPin(e === `point`), this.showChev(e === `off`)))
        }
        setRing(e, t) {
            let n = !!e && this.phase === `on`;
            if (n !== this.ringShown && (this.ringShown = n, n && this.hold.classList.add(`is-on`), this.play(`ring`, this.hold, [{
                    opacity: this.opacityOf(this.hold),
                    transform: n ? `scale(0.86)` : `scale(1)`
                }, {
                    opacity: +!!n,
                    transform: `scale(1)`
                }], {
                    duration: n ? wt : zt,
                    easing: U
                })), !e) return;
            let r = `${Math.round(e[0])}px ${Math.round(e[1])}px`;
            r !== this.w.hold && (this.w.hold = r, this.hold.style.translate = r);
            let i = 2 * Math.PI * 29,
                a = G(t.progress || 0, 0, 1),
                o = a < .004 ? `0 999` : `${(i*a).toFixed(1)} ${i.toFixed(1)}`;
            o !== this.w.arc && (this.w.arc = o, this.holdArc.style.strokeDasharray = o, this.holdArc.style.visibility = a < .004 ? `hidden` : ``);
            let s = !!t.held;
            s !== this.w.held && (this.w.held = s, this.holdArc.style.stroke = s ? V : `rgba(244, 242, 238, 0.6)`, this.holdFinger.style.display = s ? `` : `none`)
        }
        leave() {
            this.phase = `out`, this.phaseT = this.t, this.hop.phase = `none`, this.glide.phase = `none`;
            let e = this.env.reducedMotion;
            if (this.play(`card`, this.card, [{
                    opacity: this.opacityOf(this.card)
                }, {
                    opacity: 0
                }], {
                    duration: e ? zt : 150,
                    easing: `ease-in`
                }), this.pinShown) {
                if (e) this.play(`mark`, this.pin, [{
                    opacity: 1
                }, {
                    opacity: 0
                }], {
                    duration: zt
                });
                else {
                    for (let [e, t] of this.paths.entries()) this.play(`line${e}`, t, [{
                        strokeDashoffset: 0
                    }, {
                        strokeDashoffset: 1
                    }], {
                        duration: 140,
                        delay: 60,
                        easing: W
                    });
                    this.play(`mark`, this.mark, [{
                        opacity: this.opacityOf(this.mark),
                        transform: `scale(1)`
                    }, {
                        opacity: 0,
                        transform: `scale(0.5)`
                    }], {
                        duration: 100,
                        delay: 150,
                        easing: W
                    })
                }
            }
            this.chevShown && this.play(`chev`, this.chev, [{
                opacity: this.opacityOf(this.chev)
            }, {
                opacity: 0
            }], {
                duration: 150
            }), this.ringShown && this.play(`ring`, this.hold, [{
                opacity: this.opacityOf(this.hold)
            }, {
                opacity: 0
            }], {
                duration: 150
            }), this.pinShown = !1, this.chevShown = !1, this.ringShown = !1
        }
        finish() {
            if (this.phase !== `on`) return;
            if (this.phase = `done`, this.phaseT = this.t, this.hop.phase = `none`, this.glide.phase = `none`, this.visit.finished = !0, this.env.reducedMotion) {
                for (let [e, t] of [
                        [`card`, this.card],
                        [`mark`, this.pin],
                        [`chev`, this.chev],
                        [`ring`, this.hold]
                    ]) this.play(e, t, [{
                    opacity: this.opacityOf(t)
                }, {
                    opacity: 0
                }], {
                    duration: Pt,
                    delay: Nt,
                    easing: `ease-in`
                });
                return
            }
            let e = this.opacityOf(this.card);
            if (this.play(`card`, this.card, [{
                    opacity: e,
                    transform: `scale(1)`
                }, {
                    opacity: e * .35,
                    transform: `scale(0.96)`,
                    offset: .5
                }, {
                    opacity: 0,
                    transform: `scale(0.9)`
                }], {
                    duration: Pt,
                    delay: Nt,
                    easing: W
                }), this.chevShown && this.play(`chev`, this.chev, [{
                    opacity: this.opacityOf(this.chev)
                }, {
                    opacity: 0
                }], {
                    duration: Pt,
                    delay: Nt
                }), this.ringShown && this.play(`ring`, this.hold, [{
                    opacity: this.opacityOf(this.hold)
                }, {
                    opacity: 0
                }], {
                    duration: Pt,
                    delay: Nt
                }), this.pinShown) {
                let e = parseFloat(getComputedStyle(this.paths[1]).strokeDashoffset) || 0;
                for (let [t, n] of this.paths.entries()) this.play(`line${t}`, n, [{
                    strokeDashoffset: e
                }, {
                    strokeDashoffset: 1
                }], {
                    duration: It,
                    delay: Ft,
                    easing: W
                });
                this.play(`mark`, this.mark, [{
                    opacity: this.opacityOf(this.mark),
                    transform: `scale(1)`
                }, {
                    opacity: 0,
                    transform: `scale(0.6)`
                }], {
                    duration: Rt,
                    delay: Lt,
                    easing: W
                }), this.anims.get(`pulse`) ? .cancel()
            }
        }
        toOff() {
            this.phase = `off`, this.phaseT = this.t, this.hop.phase = `none`, this.glide.phase = `none`, this.taken = {
                card: null,
                pts: null,
                mark: null,
                ring: null,
                clear: []
            };
            for (let e of this.anims.values()) e.cancel();
            this.anims.clear(), this.card.classList.remove(`is-on`), this.pin.classList.remove(`is-on`), this.hold.classList.remove(`is-on`), this.pinShown = !1, this.chevShown = !1, this.ringShown = !1, this.mode = `alone`, this.w.card = ``, this.w.pin = ``, this.w.path = ``, this.w.chev = ``, this.w.hold = ``, document.activeElement === this.card && this.card.blur()
        }
        hints(e) {
            if (!this.M) return;
            let t = this.env.touch,
                n = new Set,
                r = [],
                i = e => this.phase === `on` ? this.t - this.phaseT >= Zt && this.hop.phase === `none` : this.phase === `off` && this.t - e.seen >= Qt;
            if (e)
                for (let a of e) {
                    let e = gt((t ? a.touchLabel ? ? a.label : a.label) ? ? ``);
                    if (!e) continue;
                    n.add(a.id);
                    let o = this.hintViews.get(a.id) ? ? this.makeHint(a);
                    o.spec = a;
                    let s = An(a, t);
                    if (s !== o.shown.glyph && (o.shown.glyph = s, o.glyph.innerHTML = Cn[s], o.sizeOk = !1), e !== o.shown.text && (o.shown.text = e, o.text.textContent = e, o.sizeOk = !1), o.phase === `out`) {
                        o.back = !0;
                        continue
                    }
                    o.sizeOk || = (o.w = o.card.offsetWidth, o.h = o.card.offsetHeight, o.w > 0);
                    let c = this.placeHint(o, r);
                    o.phase === `wait` ? c && i(o) && (this.drawHint(o, c), this.hintIn(o), r.push({
                        l: c.x,
                        t: c.y,
                        r: c.x + o.w,
                        b: c.y + o.h,
                        w: o.w
                    })) : !c || c.slot !== o.slot ? this.hintOut(o, !0) : (this.drawHint(o, c), r.push({
                        l: c.x,
                        t: c.y,
                        r: c.x + o.w,
                        b: c.y + o.h,
                        w: o.w
                    }))
                }
            for (let e of [...this.hintViews.values()]) {
                if (!n.has(e.id)) {
                    if (e.phase === `on`) this.hintOut(e, !1);
                    else if (e.phase === `wait`) {
                        this.dropHint(e);
                        continue
                    } else e.back = !1
                }
                e.phase === `out` && this.t - e.t0 >= .19 && (e.back ? (e.phase = `wait`, e.back = !1, this.hideHint(e)) : this.dropHint(e))
            }
        }
        makeHint(e) {
            let t = document.createElement(`div`);
            t.className = `lb-hpin`, t.innerHTML = `<svg class="lb-lead"><path class="hl" pathLength="1"/><path class="ln" pathLength="1"/></svg><div class="lb-hdot"><svg><circle class="dh" cx="0.5" cy="0.5" r="3.8"/><circle class="dt" cx="0.5" cy="0.5" r="2.5"/></svg></div>`;
            let n = document.createElement(`div`);
            n.className = `lb-hcard`, n.innerHTML = `<span class="lb-glyph"></span><p class="lb-htext"></p>`, this.hintsEl.append(t, n);
            let r = {
                id: e.id,
                spec: e,
                card: n,
                glyph: n.querySelector(`.lb-glyph`),
                text: n.querySelector(`.lb-htext`),
                pin: t,
                paths: [...t.querySelectorAll(`path`)],
                dot: t.querySelector(`.lb-hdot`),
                phase: `wait`,
                t0: this.t,
                seen: this.t,
                back: !1,
                w: 0,
                h: 0,
                sizeOk: !1,
                slot: -1,
                anims: new Map,
                shown: {
                    card: ``,
                    pin: ``,
                    path: ``,
                    text: ``,
                    glyph: ``,
                    point: null
                }
            };
            return this.hintViews.set(e.id, r), r
        }
        placeHint(e, t) {
            if (!e.sizeOk) return null;
            let n = this.M,
                r = this.env.stage,
                i = e.spec,
                a = e.w,
                o = e.h,
                s = r.pick(i.at, i.p),
                [c, l] = r.toCss(s[0], s[1]),
                u = n.edge,
                d = n.W - n.edge - a,
                f = n.top,
                p = n.H - n.bot - o,
                m = t => e.slot >= 0 && e.slot < t ? [e.slot, ...Array.from({
                    length: t
                }, (e, t) => t).filter(t => t !== e.slot)] : Array.from({
                    length: t
                }, (e, t) => t),
                h = (e, r, i) => this.clearOfLabel(e, r, i) && !t.some(t => q(e, t, n.gap));
            if (!i.point) {
                let e = n.W - c,
                    t = n.H - l,
                    r = [
                        [c, l],
                        [e, l],
                        [c, t],
                        [e, t]
                    ].map(([e, t]) => [e - a / 2, t - o / 2]);
                for (let e of m(r.length)) {
                    let t = Math.round(G(r[e][0], u, Math.max(u, d))),
                        n = Math.round(G(r[e][1], f, Math.max(f, p)));
                    if (h({
                            l: t,
                            t: n,
                            r: t + a,
                            b: n + o,
                            w: a
                        }, null, null)) return {
                        slot: e,
                        x: t,
                        y: n,
                        px: 0,
                        py: 0,
                        pts: null
                    }
                }
                return null
            }
            let g = Math.round(c - .5),
                _ = Math.round(l - .5),
                v = g + .5,
                y = _ + .5;
            if (v < 8 || v > n.W - 8 || y < 8 || y > n.H - 8) return null;
            let b = (n.portrait ? i.leadP : i.lead) ? ? (n.portrait ? hn : mn),
                x = n.k,
                S = b.attach === `edge` ? {
                    dx: Math.sign(b.dx) * 52 || 52,
                    dy: -6
                } : {
                    dx: Math.sign(b.dx) * 24,
                    dy: -Math.max(52, Math.abs(b.dy) + 16),
                    attach: `edge`
                },
                C = [
                    [1, 1],
                    [-1, 1],
                    [1, -1],
                    [-1, -1]
                ],
                w = [...C.map(e => [b, e]), ...C.map(e => [S, e])];
            for (let e of m(w.length)) {
                let [t, r] = w[e], i = t.attach === `edge`, s = t.dx * r[0] * x, c = t.dy * r[1] * x, l = Math.round(i ? v + s - a / 2 : s >= 0 ? v + s : v + s - a), m = Math.round(i ? c < 0 ? y + c - o : y + c : y + c - n.hmid);
                for (let e of this.taken.clear) q({
                    l,
                    t: m,
                    r: l + a,
                    b: m + o,
                    w: a
                }, e, 4) && (i ? m = c < 0 ? Math.min(m, Math.round(e.t - 8 - o)) : Math.max(m, Math.round(e.b + 8)) : l = s >= 0 ? Math.max(l, Math.round(e.r + 8)) : Math.min(l, Math.round(e.l - 8 - a)));
                if (i ? l = Math.round(G(l, u, Math.max(u, d))) : m = Math.round(G(m, f, Math.max(f, p))), (i ? Math.abs(m + (c < 0 ? o : 0) - y) : Math.min(Math.abs(l - v), Math.abs(l + a - v))) > 300 || l < u || l > d || m < f || m > p) continue;
                let b = {
                    l,
                    t: m,
                    r: l + a,
                    b: m + o,
                    w: a
                };
                if (!i && (s >= 0 ? l - v : v - (l + a)) < Math.abs(m + n.hmid - y) + 12 || i && Math.abs(c) < 20) continue;
                let S = Mn(v, y, b, m + n.hmid, i ? `edge` : `side`, i ? Math.sign(s) || 1 : 0, -1, pn);
                if (h(b, S, [v, y])) return {
                    slot: e,
                    x: l,
                    y: m,
                    px: g,
                    py: _,
                    pts: S
                }
            }
            return null
        }
        clearOfLabel(e, t, n) {
            let r = this.taken,
                i = this.M.gap;
            return !(this.domClear.some(t => q(e, t, i)) || r.clear.some(t => q(e, t, 4)) || r.card && q(e, r.card, i) || r.pts && Bn(r.pts, e, i / 2) || r.mark && Ln(r.mark, e, 16) || r.ring && Ln([r.ring[0], r.ring[1]], e, r.ring[2]) || t && r.card && Bn(t, r.card, 4) || t && r.pts && Un(t, r.pts) || n && r.card && Ln(n, r.card, 8) || n && r.mark && Math.hypot(n[0] - r.mark[0], n[1] - r.mark[1]) < 28 || n && r.ring && Math.hypot(n[0] - r.ring[0], n[1] - r.ring[1]) < r.ring[2] + 8 || t && n && r.clear.some(e => Hn(t, e) > Math.max(0, Vn(n[0], n[1], e)) + 10))
        }
        drawHint(e, t) {
            e.slot = t.slot;
            let n = `${t.x}px ${t.y}px`;
            n !== e.shown.card && (e.shown.card = n, e.card.style.translate = n);
            let r = !!t.pts;
            if (r !== e.shown.point && (e.shown.point = r, e.pin.style.display = r ? `` : `none`), !t.pts) return;
            let i = `${t.px}px ${t.py}px`;
            i !== e.shown.pin && (e.shown.pin = i, e.pin.style.translate = i);
            let a = `M` + t.pts.map(([e, n]) => `${(e-t.px).toFixed(2)} ${(n-t.py).toFixed(2)}`).join(`L`);
            if (a !== e.shown.path) {
                e.shown.path = a;
                for (let t of e.paths) t.setAttribute(`d`, a)
            }
        }
        hplay(e, t, n, r, i) {
            e.anims.get(t) ? .cancel(), e.anims.set(t, n.animate(r, {
                fill: `both`,
                ...i
            }))
        }
        hintIn(e) {
            e.phase = `on`, e.t0 = this.t, e.card.classList.add(`is-on`), e.pin.classList.add(`is-on`);
            let t = !!e.shown.point;
            if (this.env.reducedMotion) {
                this.hplay(e, `card`, e.card, [{
                    opacity: 0
                }, {
                    opacity: 1
                }], {
                    duration: tn
                }), t && (this.hplay(e, `dot`, e.dot, [{
                    opacity: 0
                }, {
                    opacity: 1
                }], {
                    duration: tn
                }), e.paths.forEach((t, n) => this.hplay(e, `line${n}`, t, [{
                    strokeDashoffset: 0,
                    opacity: 0
                }, {
                    strokeDashoffset: 0,
                    opacity: 1
                }], {
                    duration: tn
                })));
                return
            }
            t && (this.hplay(e, `dot`, e.dot, [{
                opacity: 0,
                transform: `scale(0.4)`
            }, {
                opacity: 1,
                transform: `scale(1.1)`,
                offset: .7
            }, {
                opacity: 1,
                transform: `scale(1)`
            }], {
                duration: $t,
                easing: U
            }), e.paths.forEach((t, n) => this.hplay(e, `line${n}`, t, [{
                strokeDashoffset: 1
            }, {
                strokeDashoffset: 0
            }], {
                duration: en,
                delay: nn,
                easing: sn
            })));
            let n = t ? rn : 0;
            this.hplay(e, `card`, e.card, [{
                opacity: 0,
                transform: `translateY(3px)`
            }, {
                opacity: 1,
                transform: `none`
            }], {
                duration: tn,
                delay: n,
                easing: U
            });
            let r = e.spec.kind === `drag` ? e.glyph.querySelector(`.kn`) : null;
            r && this.hplay(e, `nudge`, r, [{
                transform: `translateX(0)`
            }, {
                transform: `translateX(-2.6px)`,
                offset: .28
            }, {
                transform: `translateX(2.6px)`,
                offset: .72
            }, {
                transform: `translateX(0)`
            }], {
                duration: on,
                delay: n + tn + 120,
                easing: `ease-in-out`
            })
        }
        hintOut(e, t) {
            e.phase = `out`, e.t0 = this.t, e.back = t;
            let n = this.env.reducedMotion,
                r = this.opacityOf(e.card);
            if (this.hplay(e, `card`, e.card, [{
                    opacity: r
                }, {
                    opacity: 0
                }], {
                    duration: n ? an : 130,
                    easing: `ease-in`
                }), !e.shown.point) return;
            let i = parseFloat(getComputedStyle(e.paths[1]).strokeDashoffset) || 0;
            e.paths.forEach((t, r) => this.hplay(e, `line${r}`, t, n ? [{
                opacity: 1
            }, {
                opacity: 0
            }] : [{
                strokeDashoffset: i
            }, {
                strokeDashoffset: 1
            }], {
                duration: n ? an : 110,
                easing: W
            })), this.hplay(e, `dot`, e.dot, n ? [{
                opacity: this.opacityOf(e.dot)
            }, {
                opacity: 0
            }] : [{
                opacity: this.opacityOf(e.dot),
                transform: `scale(1)`
            }, {
                opacity: 0,
                transform: `scale(0.5)`
            }], {
                duration: n ? an : 90,
                delay: n ? 0 : 60,
                easing: W
            })
        }
        hideHint(e) {
            for (let t of e.anims.values()) t.cancel();
            e.anims.clear(), e.card.classList.remove(`is-on`), e.pin.classList.remove(`is-on`), e.slot = -1, e.shown.card = ``, e.shown.pin = ``, e.shown.path = ``
        }
        dropHint(e) {
            this.hideHint(e), e.card.remove(), e.pin.remove(), this.hintViews.delete(e.id)
        }
    },
    q = (e, t, n) => e.l < t.r + n && e.r > t.l - n && e.t < t.b + n && e.b > t.t - n,
    Ln = (e, t, n) => e[0] > t.l - n && e[0] < t.r + n && e[1] > t.t - n && e[1] < t.b + n;

function Rn(e, t, n, r) {
    let i = t[0] - e[0],
        a = t[1] - e[1],
        o = Math.hypot(i, a) || 1,
        s = (e[0] + t[0]) / 2 - a / o * 2 * n,
        c = (e[1] + t[1]) / 2 + i / o * 2 * n,
        l = 1 - r;
    return [l * l * e[0] + 2 * l * r * s + r * r * t[0], l * l * e[1] + 2 * l * r * c + r * r * t[1]]
}

function zn(e, t, n, r) {
    let i = t[0] - e[0],
        a = t[1] - e[1],
        o = Math.hypot(i, a) || 1,
        s = n * Math.sin(Math.PI * r);
    return [e[0] + i * r - a / o * s, e[1] + a * r + i / o * s]
}

function Bn(e, t, n) {
    let r = t.l - n,
        i = t.r + n,
        a = t.t - n,
        o = t.b + n;
    for (let t = 0; t + 1 < e.length; t++) {
        let [n, s] = e[t], [c, l] = e[t + 1], u = c - n, d = l - s, f = 0, p = 1, m = !0;
        for (let [e, t] of [
                [-u, n - r],
                [u, i - n],
                [-d, s - a],
                [d, o - s]
            ]) {
            if (e === 0) {
                if (t < 0) {
                    m = !1;
                    break
                }
                continue
            }
            let n = t / e;
            if (e < 0) {
                if (n > p) {
                    m = !1;
                    break
                }
                n > f && (f = n)
            } else {
                if (n < f) {
                    m = !1;
                    break
                }
                n < p && (p = n)
            }
        }
        if (m && f <= p) return !0
    }
    return !1
}
var Vn = (e, t, n) => Math.min(e - n.l, n.r - e, t - n.t, n.b - t);

function Hn(e, t) {
    let n = -1 / 0;
    for (let r = 0; r + 1 < e.length; r++) {
        let [i, a] = e[r], [o, s] = e[r + 1], c = Math.max(1, Math.ceil(Math.hypot(o - i, s - a) / 4));
        for (let e = 0; e <= c; e++) n = Math.max(n, Vn(i + (o - i) * e / c, a + (s - a) * e / c, t))
    }
    return n
}

function Un(e, t) {
    let n = (e, t, n) => (t[0] - e[0]) * (n[1] - e[1]) - (t[1] - e[1]) * (n[0] - e[0]);
    for (let r = 0; r + 1 < e.length; r++)
        for (let i = 0; i + 1 < t.length; i++)
            if (n(t[i], t[i + 1], e[r]) > 0 != n(t[i], t[i + 1], e[r + 1]) > 0 && n(e[r], e[r + 1], t[i]) > 0 != n(e[r], e[r + 1], t[i + 1]) > 0) return !0;
    return !1
}

function Wn() {
    let e = [];
    for (let t of document.querySelectorAll(`[data-gate-clear]`)) {
        let n = t.getBoundingClientRect();
        if (n.width < 2 || n.height < 2) continue;
        let r = getComputedStyle(t);
        r.visibility === `hidden` || parseFloat(r.opacity) < .05 || e.push({
            l: n.left,
            t: n.top,
            r: n.right,
            b: n.bottom,
            w: n.width
        })
    }
    return e
}
var Gn = null;

function Kn() {
    Gn || (Gn = document.createElement(`div`), Gn.style.cssText = `position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)`, document.body.appendChild(Gn));
    let e = getComputedStyle(Gn);
    return {
        t: parseFloat(e.paddingTop) || 0,
        r: parseFloat(e.paddingRight) || 0,
        b: parseFloat(e.paddingBottom) || 0,
        l: parseFloat(e.paddingLeft) || 0
    }
}

function qn() {
    return new In
}
var Jn = .15,
    Yn = .7,
    Xn = 2.4,
    Zn = 26,
    Qn = 7,
    $n = `cubic-bezier(0.16, 1, 0.3, 1)`,
    er = `cubic-bezier(0.7, 0, 0.2, 1)`,
    J = (e, t, n) => e < t ? t : e > n ? n : e,
    Y = e => Math.round(e * 10) / 10,
    tr = 180 / Math.PI,
    nr = 0;

function rr(e, t, n, r = 0) {
    let i = n && !t ? J(e * .075, 8, 13) : 0,
        a = r || (t ? J(e * .2, 5, 9) : Math.max(8, e * .145, i ? i + 7 : 0)),
        o = e - a / 2 - Math.max(3, e * .045),
        s = e + a / 2 + Math.max(2.5, e * .03),
        c = t ? 0 : J(e * .096, 8.5, 15),
        l = t ? s : s + c * 1.9;
    return {
        R: e,
        sw: a,
        under: a + Math.max(6, e * .07),
        rIn: o,
        rO: s,
        fs: c,
        b1: l,
        rim: s + c * .6,
        lab: i,
        S: Math.ceil(l + Math.max(24, e * .3))
    }
}

function ir(e, t) {
    let n = e + 12;
    for (let r = 0; r < 3; r++) {
        let r = t ? J(n * .2, 5, 9) : Math.max(8, n * .145);
        n = e + 2 + r / 2 + Math.max(3, n * .045)
    }
    return rr(n, t, !1)
}
var ar = (e, t) => {
    let n = (t - 90) / tr;
    return [e * Math.cos(n), e * Math.sin(n)]
};

function or(e, t, n, r = !1) {
    let [i, a] = ar(e, r ? n : t), [o, s] = ar(e, r ? t : n);
    return `M${Y(i)} ${Y(a)}A${Y(e)} ${Y(e)} 0 ${+(n-t>180)} ${+!r} ${Y(o)} ${Y(s)}`
}
var X = e => e.replace(/[&<>"]/g, e => ({
        "&": `&amp;`,
        "<": `&lt;`,
        ">": `&gt;`,
        '"': `&quot;`
    })[e]),
    sr = class {
        reduced;
        el;
        sizer;
        inner;
        hit;
        svgBox;
        rimBox;
        midEl;
        hd;
        ripple;
        g = rr(100, !1, !1);
        key = ``;
        segs = [];
        segP = [];
        arc = null;
        arcGlow = null;
        arcHead = null;
        flashEl = null;
        shown = {
            lit: -1,
            partial: -1,
            p: -1,
            rim: ``,
            mid: ``,
            pressing: !1,
            heading: NaN,
            spin: 1,
            k: 1
        };
        rimAnim = null;
        rimOn = !1;
        id = ++nr;
        constructor(e, t = ``) {
            this.reduced = e, this.el = document.createElement(`div`), this.el.className = `iris-ring${t?` `+t:``}`, this.el.setAttribute(`aria-hidden`, `true`), this.el.innerHTML = `<div class="iris-ring__sizer"><div class="iris-ring__inner"><div class="iris-ring__svg"></div><div class="iris-ring__rim"></div><i class="iris-ring__ripple"></i><div class="iris-ring__mid"></div><i class="iris-ring__hd"><b></b></i></div></div><div class="iris-ring__hit gate__panel"></div>`;
            let n = e => this.el.querySelector(e);
            this.sizer = n(`.iris-ring__sizer`), this.inner = n(`.iris-ring__inner`), this.svgBox = n(`.iris-ring__svg`), this.rimBox = n(`.iris-ring__rim`), this.midEl = n(`.iris-ring__mid`), this.hd = n(`.iris-ring__hd`), this.ripple = n(`.iris-ring__ripple`), this.hit = n(`.iris-ring__hit`)
        }
        build(e, t, n, r) {
            let i = `${e.R.toFixed(1)}|${e.fs}|${e.sw.toFixed(1)}|${t}|${n}|${r?.join(`,`)??``}`;
            if (i === this.key) return !1;
            this.key = i, this.g = e;
            let {
                R: a,
                sw: o,
                rIn: s,
                rO: c,
                fs: l,
                b1: u,
                S: d
            } = e, f = `iris${this.id}`, p = `<svg class="iris-svg" width="${2*d}" height="${2*d}" viewBox="${-d} ${-d} ${2*d} ${2*d}">`;
            if (p += `<circle class="u" r="${Y(a)}" stroke-width="${Y(e.under)}"/>`, l && (p += `<circle class="bz" r="${Y((c+u)/2)}" stroke-width="${Y(u-c)}"/><circle class="hl" r="${Y(u)}"/>`), p += `<circle class="hl" r="${Y(c)}"/><circle class="hi" r="${Y(s)}"/>`, !(!e.fs && a < 40)) {
                let e = Math.max(5, a * .07);
                for (let t of [0, 90, 180, 270]) {
                    let [n, r] = ar(s, t), [i, a] = ar(s - e, t);
                    p += `<line class="tk" x1="${Y(n)}" y1="${Y(r)}" x2="${Y(i)}" y2="${Y(a)}"/>`
                }
            }
            if (t === `seg`) {
                let t = Math.max(n > 6 ? 3.4 : 6, Math.max(3, o * .32) / a * tr);
                for (let i = 0; i < n; i++) {
                    let s = i * 360 / n + t / 2,
                        c = (i + 1) * 360 / n - t / 2,
                        l = or(a, s, c);
                    if (p += `<g class="sg"><path class="sg-g" d="${l}" stroke-width="${Y(o+14)}"/><path class="sg-o" d="${l}" stroke-width="${Y(o)}"/><path class="sg-f" d="${l}" stroke-width="${Y(Math.max(1,o-3.2))}"/><path class="sg-p" d="${l}" stroke-width="${Y(o)}" pathLength="100" stroke-dasharray="100 100" stroke-dashoffset="100"/><path class="sg-h" d="${or(a-o/2+1.6,s+.5,c-.5)}" stroke-width="2.4"/>`, r && e.lab && r[i]) {
                        let t = (s + c) / 2;
                        p += `<path id="${f}s${i}" d="${or(a,s,c,t>90&&t<270)}" fill="none"/><text class="sg-t" style="font-size:${Y(e.lab)}px" dy="${Y(e.lab*.36)}"><textPath href="#${f}s${i}" startOffset="50%" text-anchor="middle">${X(r[i])}</textPath></text>`
                    }
                    p += `</g>`
                }
            } else p += `<circle class="sg-o" r="${Y(a)}" stroke-width="${Y(o)}"/><circle class="sg-f" r="${Y(a)}" stroke-width="${Y(Math.max(1,o-3.2))}"/>`, t === `arc` && (p += `<circle class="arc-g" r="${Y(a)}" stroke-width="${Y(o+14)}" pathLength="100" stroke-dasharray="100 100" stroke-dashoffset="100" transform="rotate(-90)"/><circle class="arc" r="${Y(a)}" stroke-width="${Y(o)}" pathLength="100" stroke-dasharray="100 100" stroke-dashoffset="100" transform="rotate(-90)"/><g class="arc-h"><circle cy="${Y(-a)}" r="${Y(o*.62)}"/></g>`);
            p += `<circle class="fl" r="${Y(a)}" stroke-width="${Y(o+12)}"/></svg>`, this.svgBox.innerHTML = p;
            let m = `left:${-d}px;top:${-d}px;width:${2*d}px;height:${2*d}px`;
            return this.svgBox.style.cssText = m, this.rimBox.style.cssText = m, this.segs = [...this.svgBox.querySelectorAll(`.sg`)], this.segP = [...this.svgBox.querySelectorAll(`.sg-p`)], this.arc = this.svgBox.querySelector(`.arc`), this.arcGlow = this.svgBox.querySelector(`.arc-g`), this.arcHead = this.svgBox.querySelector(`.arc-h`), this.flashEl = this.svgBox.querySelector(`.fl`), this.ripple.style.cssText = `left:${Y(-a)}px;top:${Y(-a)}px;width:${Y(2*a)}px;height:${Y(2*a)}px`, this.hit.style.cssText = `left:${Y(-u)}px;top:${Y(-u)}px;width:${Y(2*u)}px;height:${Y(2*u)}px`, this.hd.style.setProperty(`--hr`, `${Y(u+3)}px`), this.el.style.setProperty(`--rin`, `${Y(e.rIn)}px`), this.el.classList.toggle(`is-mini`, !l), this.el.classList.toggle(`is-plain`, t === `plain`), this.shown.lit = -1, this.shown.partial = -1, this.shown.p = -1, this.shown.rim = ``, !0
        }
        set(e) {
            let t = this.shown;
            if (e.mode === `seg`) {
                let n = J(Math.round(e.lit), 0, this.segs.length);
                if (n !== t.lit) {
                    let e = t.lit >= 0 && n > t.lit;
                    this.segs.forEach((t, r) => {
                        t.classList.toggle(`on`, r < n), t.classList.toggle(`new`, e && r === n - 1)
                    }), t.lit >= 0 && n < t.lit && this.segs.forEach(e => e.classList.remove(`new`)), t.lit = n, t.partial = -1
                }
                let r = n < this.segs.length ? Math.round(J(e.partial, 0, 1) * 200) / 2 : 0;
                r !== t.partial && (this.segP.forEach((e, t) => {
                    let i = t === n && r > 0;
                    e.style.strokeDashoffset = i ? String(100 - r) : `100`, e.parentElement.classList.toggle(`cur`, i)
                }), t.partial = r)
            } else if (e.mode === `arc` && this.arc) {
                let n = Math.round(J(e.p, 0, 1) * 1e3) / 10;
                if (n !== t.p) {
                    let e = String(100 - n);
                    this.arc.style.strokeDashoffset = e, this.arcGlow.style.strokeDashoffset = e, this.arcHead.setAttribute(`transform`, `rotate(${(n*3.6).toFixed(1)})`), this.arcHead.classList.toggle(`on`, n > .4), t.p = n
                }
            }
            e.rim !== t.rim && (t.rim = e.rim, this.rimText(e.rim)), e.mid !== t.mid && (t.mid = e.mid, this.midEl.innerHTML = cr[e.mid], this.midEl.dataset.mid = e.mid), e.pressing !== t.pressing && (t.pressing = e.pressing, this.midEl.classList.toggle(`is-pressing`, e.pressing));
            let n = e.heading === null ? NaN : Math.round(e.heading * tr);
            n === t.heading || Number.isNaN(n) && Number.isNaN(t.heading) || (t.heading = n, this.hd.classList.toggle(`on`, !Number.isNaN(n)), Number.isNaN(n) || (this.hd.style.transform = `rotate(${-n}deg)`));
            let r = Math.round(J(e.spin, 1, 8) * 4) / 4;
            r !== t.spin && (t.spin = r, this.rimAnim && this.rimAnim.updatePlaybackRate(r))
        }
        size(e) {
            e !== this.shown.k && (this.shown.k = e, this.sizer.style.transform = e === 1 ? `` : `scale(${e})`)
        }
        rimText(e) {
            let t = this.g;
            if (!t.fs || !e) {
                this.rimBox.innerHTML = ``;
                return
            }
            let n = 2 * Math.PI * t.rim,
                r = e.replace(/\*\*/g, ``),
                i = 0;
            for (let e of r) i += (/[　-鿿＀-￯]/.test(e) ? 1.02 : .66) + .24;
            let a = Math.max(1, Math.floor(n / (i * t.fs))),
                o = e.split(`**`).map((e, t) => t % 2 ? `<tspan class="o">${X(e)}</tspan>` : X(e)).join(``),
                s = t.S,
                c = `iris${this.id}r`;
            this.rimBox.innerHTML = `<svg width="${2*s}" height="${2*s}" viewBox="${-s} ${-s} ${2*s} ${2*s}"><path id="${c}" d="M0 ${Y(-t.rim)}A${Y(t.rim)} ${Y(t.rim)} 0 1 1 -0.01 ${Y(-t.rim)}" fill="none"/><text style="font-size:${Y(t.fs)}px"><textPath href="#${c}" textLength="${Y(n*.994)}" lengthAdjust="spacing">${o.repeat(a)}</textPath></text></svg>`
        }
        spin(e) {
            e === this.rimOn || this.reduced || (this.rimOn = e, e ? (this.rimAnim ? this.rimAnim.play() : this.rimAnim = this.rimBox.animate([{
                transform: `rotate(0deg)`
            }, {
                transform: `rotate(360deg)`
            }], {
                duration: Zn * 1e3,
                iterations: 1 / 0
            }), this.rimAnim.updatePlaybackRate(this.shown.spin)) : this.rimAnim ? .pause())
        }
        drawOn() {
            if (this.reduced) {
                this.inner.animate([{
                    opacity: 0
                }, {
                    opacity: 1
                }], {
                    duration: 300,
                    easing: `ease-out`
                });
                return
            }
            this.inner.animate([{
                transform: `scale(0.72) rotate(-24deg)`,
                opacity: 0
            }, {
                transform: `none`,
                opacity: 1
            }], {
                duration: 440,
                easing: $n
            }), this.segs.forEach((e, t) => e.animate([{
                opacity: 0
            }, {
                opacity: 1
            }], {
                duration: 160,
                delay: 120 + t * 30,
                fill: `backwards`,
                easing: `ease-out`
            }))
        }
        punch() {
            this.reduced || (this.inner.animate([{
                transform: `scale(1)`
            }, {
                transform: `scale(1.08)`,
                offset: .35
            }, {
                transform: `scale(1)`
            }], {
                duration: 240,
                easing: $n
            }), this.ripple.animate([{
                transform: `scale(1)`,
                opacity: .75
            }, {
                transform: `scale(1.5)`,
                opacity: 0
            }], {
                duration: 440,
                delay: 50,
                easing: `ease-out`,
                fill: `backwards`
            }))
        }
        flash() {
            this.segs.forEach(e => e.classList.add(`on`)), this.shown.lit = this.segs.length, this.arc && (this.arc.style.strokeDashoffset = `0`, this.arcGlow.style.strokeDashoffset = `0`, this.shown.p = 100), this.flashEl ? .animate([{
                opacity: 0
            }, {
                opacity: 1,
                offset: .25
            }, {
                opacity: 1,
                offset: .45
            }, {
                opacity: 0
            }], {
                duration: 200,
                easing: `linear`
            }), this.reduced || this.inner.animate([{
                transform: `scale(1)`
            }, {
                transform: `scale(1.06)`,
                offset: .4
            }, {
                transform: `scale(1)`
            }], {
                duration: Jn * 1e3,
                easing: $n
            })
        }
        open(e) {
            if (this.reduced) {
                this.inner.animate([{
                    opacity: 1
                }, {
                    opacity: 0
                }], {
                    duration: 380,
                    delay: Jn * 1e3,
                    fill: `forwards`
                });
                return
            }
            this.inner.animate([{
                transform: `scale(1)`,
                opacity: 1
            }, {
                transform: `scale(${e})`,
                opacity: 0
            }], {
                duration: Yn * 1e3,
                delay: Jn * 1e3,
                easing: er,
                fill: `forwards`
            })
        }
        reset() {
            for (let e of this.inner.getAnimations()) e.cancel();
            this.segs.forEach(e => e.classList.remove(`new`))
        }
        dispose() {
            this.rimAnim ? .cancel(), this.el.remove()
        }
    },
    cr = {
        cross: `<svg viewBox="-20 -20 40 40" class="mx"><path d="M-15 0h8M7 0h8M0 -15v8M0 7v8"/><circle r="2.6"/></svg>`,
        dot: `<i class="md"></i>`,
        press: `<i class="mp"><b></b></i>`,
        tap: `<b class="mt">TAP</b>`,
        click: `<b class="mt">CLICK</b>`,
        play: `<svg viewBox="-12 -12 24 24" class="mpl"><path d="M-6 -9 L9 0 L-6 9 Z"/></svg>`,
        flag: `<svg viewBox="-12 -14 24 28" class="mfl"><path d="M-6 12V-12"/><path d="M-6 -12H9L5.5 -7L9 -2H-6Z"/></svg>`,
        walk: `<svg viewBox="-12 -12 24 24" class="mw"><path d="M0 9V-8M-7 -1L0 -8L7 -1"/></svg>`,
        none: ``
    },
    lr = new Set,
    ur = null;

function dr(e) {
    let t = {
        host: e,
        ring: null,
        heading: null,
        inner: 0,
        at: null,
        seen: 0
    };
    return lr.add(t), {
        heading(e) {
            t.heading = e
        },
        detach() {
            lr.delete(t), t.ring ? .dispose(), t.ring = null, ur && ur.padGone(t)
        }
    }
}
var fr = class {
    name = `iris`;
    root;
    env;
    ring;
    tag;
    t_eye;
    t_n;
    t_nb;
    t_ns;
    t_text;
    t_sub;
    intro;
    i_eye;
    i_h;
    i_p;
    burst;
    burstRing;
    sr;
    M = null;
    dirty = !0;
    offStage = null;
    t = 0;
    visit = ``;
    visitT = 0;
    introPhase = `none`;
    lastDone = -1;
    memo = null;
    on = !1;
    where = ``;
    ringShown = !1;
    pos = {
        x: 0,
        y: 0,
        tx: 0,
        ty: 0,
        live: !1
    };
    pad = null;
    side = {
        right: !0,
        below: !1
    };
    written = {
        ring: ``,
        tag: ``,
        tagMax: -1,
        intro: ``,
        band: ``,
        text: ``,
        eye: ``,
        n: ``,
        sub: ``,
        ih: ``,
        ip: ``,
        ieye: ``,
        sr: ``,
        button: !1,
        kind: ``,
        compact: null
    };
    clearing = !1;
    clearT = 0;
    clearedVisit = ``;
    opened = !1;
    mount(e, t) {
        this.root = e, this.env = t, ur = this, e.classList.add(`gate--iris`), e.dataset.kind = `tap`, this.ring = new sr(t.reducedMotion), e.appendChild(this.ring.el);
        let n = document.createElement(`div`);
        n.className = `iris-tag`, n.setAttribute(`aria-hidden`, `true`), n.innerHTML = `<div class="iris-tag__in"><p class="iris-tag__eye"><i></i><span></span></p><div class="iris-tag__row"><p class="iris-tag__n"><b></b><span></span></p><div class="iris-tag__t"><strong></strong><em></em></div></div></div>`, e.appendChild(n), this.tag = n;
        let r = (e, t) => e.querySelector(t);
        this.t_eye = r(n, `.iris-tag__eye span`), this.t_n = r(n, `.iris-tag__n`), this.t_nb = r(n, `.iris-tag__n b`), this.t_ns = r(n, `.iris-tag__n span`), this.t_text = r(n, `.iris-tag__t strong`), this.t_sub = r(n, `.iris-tag__t em`);
        let i = document.createElement(`div`);
        i.className = `iris-intro`, i.setAttribute(`aria-hidden`, `true`), i.innerHTML = `<div class="iris-intro__in"><p class="iris-intro__eye"><i></i><span></span></p><p class="iris-intro__h"></p><p class="iris-intro__p"></p></div>`, e.appendChild(i), this.intro = i, this.i_eye = r(i, `.iris-intro__eye span`), this.i_h = r(i, `.iris-intro__h`), this.i_p = r(i, `.iris-intro__p`), this.burst = document.createElement(`div`), this.burst.className = `iris-burst`, this.burst.innerHTML = `<i></i>`, this.burstRing = this.burst.firstElementChild, e.appendChild(this.burst), this.sr = document.createElement(`p`), this.sr.className = `iris-sr`, this.sr.setAttribute(`aria-live`, `polite`), e.appendChild(this.sr);
        let a = e => {
            this.on && this.written.button && !this.clearing && (e.preventDefault(), t.activate())
        };
        this.ring.hit.addEventListener(`click`, a), this.tag.addEventListener(`click`, a), this.ring.hit.addEventListener(`keydown`, e => {
            (e.key === `Enter` || e.key === ` `) && a(e)
        }), this.offStage = t.stage.onChange(() => {
            this.dirty = !0
        })
    }
    dispose() {
        this.offStage ? .(), this.ring ? .dispose();
        for (let e of lr) e.ring ? .dispose(), e.ring = null;
        this.root ? .replaceChildren(), this.root ? .classList.remove(`gate--iris`, `is-on`, `is-button`, `is-clear`), ur === this && (ur = null)
    }
    padGone(e) {
        this.pad === e && (this.pad = null)
    }
    metrics() {
        let e = this.env.stage.info,
            t = e.cssW,
            n = e.cssH,
            r = e.portrait,
            i = r ? t < 700 : n < 560,
            a = J(Math.min(t * .16, n * .17), 58, 150),
            o = J(t * .022, 14, 40),
            s = yr(),
            c = Math.max(o * .55, s.b),
            l = i ? J(Math.min(t, n) * .066, 20, 28) : Math.round(a * .56),
            u = J(e.u, .66, 1.12),
            d = rr(l, !0, !1),
            f = Math.round(Math.max(2 * d.b1 + 10, 64));
        return {
            W: t,
            H: n,
            portrait: r,
            compact: i,
            R: a,
            Rd: l,
            m: o,
            gs: u,
            inset: s,
            barTop: c,
            band: r ? {
                l: s.l + o,
                r: s.r + o,
                b: Math.round(c + 8),
                h: f
            } : {
                l: Math.round((t - Math.min(t - 2 * o, 470)) / 2),
                r: Math.round((t - Math.min(t - 2 * o, 470)) / 2),
                b: Math.round(c + 6),
                h: f
            }
        }
    }
    update(e, t) {
        if (this.t += t, this.dirty || !this.M) {
            this.dirty = !1, this.M = this.metrics(), this.written.ring = ``, this.written.tag = ``, this.written.intro = ``, this.written.band = ``, this.written.compact = null;
            for (let e of lr) e.inner = 0
        }
        let n = this.M;
        if (this.clearing) {
            this.clearStep(t);
            return
        }
        if (!e) {
            this.hide();
            return
        }
        let r = e.state;
        if (e.cleared && e.station.id === this.clearedVisit) {
            this.hide();
            return
        }
        let i = null;
        if (r.kind === `walk` && (i = pr() ? ? (e.cleared && this.pad && this.pad.host.isConnected ? this.pad : null), !i && mr())) {
            this.hide();
            return
        }(e.station.id !== this.visit || this.clearedVisit === this.visit) && this.newVisit(e);
        let a = this.env.touch,
            o = r.kind;
        o !== this.written.kind && (this.written.kind = o, this.root.dataset.kind = o), this.written.compact !== n.compact && (this.written.compact = n.compact, this.root.classList.toggle(`is-compact`, n.compact), this.root.classList.toggle(`is-portrait-band`, n.compact && n.portrait));
        let s = r.count ? Math.max(0, Math.round(r.count[1])) : 0,
            c = r.count ? J(Math.round(r.count[0]), 0, s) : 0,
            l = r.labels ? .length ? r.labels : null;
        o === `count` && s > 0 && (this.memo = {
            n: s,
            labels: l
        });
        let u = `plain`,
            d = 0,
            f = 0,
            p = 0,
            m = J(r.progress || 0, 0, 1);
        (o === `count` || o === `game`) && s > 0 && s <= 40 ? (u = `seg`, d = s, o === `game` ? (f = Math.max(0, c - 1), p = J(m * s - f, 0, 1)) : f = c) : o === `tap` && (l || this.memo || s) ? (u = `seg`, d = l ? .length ? ? s ? ? 0, !d && this.memo && (d = this.memo.n), f = d) : (o === `hold` || o === `walk` || o === `auto` || o === `count` || o === `game`) && (u = `arc`);
        let h = u === `seg` ? l ? ? (o === `tap` ? this.memo ? .labels ? ? null : null) : null,
            g = (o === `count` || o === `game`) && this.lastDone >= 0 && c > this.lastDone;
        this.lastDone = o === `count` || o === `game` ? c : this.lastDone;
        let _ = i ? `pad` : r.at ? `anchor` : `dock`;
        i !== this.pad && (this.pad ? .ring && this.pad.ring.spin(!1), this.pad = i);
        let v = _ === `dock` && n.compact,
            y = _ === `anchor` ? n.R : n.Rd,
            b = _ === `pad` && i ? hr(i, n) : rr(y, v, !!h),
            x = _ === `pad` && i ? gr(i, this.env.reducedMotion) : this.ring,
            S = x.build(b, u, d, h),
            C, w;
        if (_ === `pad` && i ? ((!i.at || this.t - i.seen > .12) && (i.at = _r(i.host), i.seen = this.t), [C, w] = i.at) : _ === `anchor` ? [C, w] = this.env.stage.toCss(...this.env.stage.pick(r.at, r.p)) : n.compact ? (C = n.band.l + b.b1 + 4, w = n.H - n.band.b - n.band.h / 2) : (C = n.W / 2, w = n.H - n.barTop - 16 - b.b1), !this.on || _ !== this.where || S && !this.pos.live || !this.pos.live) this.pos.x = C, this.pos.y = w, this.pos.live = !0;
        else if (_ === `anchor`) {
            let e = 1 - Math.exp(-30 * t);
            this.pos.x += (C - this.pos.x) * e, this.pos.y += (w - this.pos.y) * e
        } else this.pos.x = C, this.pos.y = w;
        this.pos.tx = C, this.pos.ty = w;
        let T = this.pos.x,
            E = this.pos.y,
            ee = this.on;
        this.on || (this.on = !0, this.root.classList.add(`is-on`));
        let D = _ !== `pad`;
        if (D !== this.ringShown && (this.ringShown = D, this.ring.el.classList.toggle(`is-shown`, D), this.ring.spin(D)), _ === `pad` && i ? .ring && i.ring.spin(!0), _ !== this.where && (this.where = _, this.root.dataset.where = _, this.written.ring = ``, this.written.tag = ``, this.written.intro = ``, this.written.band = ``), D) {
            let e = `translate(${T.toFixed(1)}px, ${E.toFixed(1)}px)`;
            e !== this.written.ring && (this.written.ring = e, this.ring.el.style.transform = e)
        }(!ee || S && this.introPhase === `in` && this.t - this.visitT < .05) && x.drawOn();
        let O = e.next ? `${e.next.num} ${e.next.chapter}` : ``,
            k = h ? .[h.length - 1],
            te = o === `hold` ? `HOLD ▸ **${O}** ▸ KEEP HOLDING ▸ ` : o === `walk` ? `EXIT ▸ **${O}** ▸ ` : o === `game` ? `GOAL ▸ **${O}** ▸ RUN ▸ ` : o === `auto` ? `AUTO ▸ **${O}** ▸ ` : o === `tap` || e.button ? `${a?`TAP`:`CLICK`} ▸ **${k??O}** ▸ ${k?`${O} ▸ `:``}` : `NEXT ▸ **${O}** ▸ 次のステーションへ ▸ `,
            ne = o === `hold` && m > .002,
            re = _ === `pad` ? `none` : e.button || o === `tap` ? a ? `tap` : `click` : o === `hold` ? `press` : o === `auto` ? `play` : o === `game` ? `flag` : o === `walk` ? `walk` : _ === `anchor` ? `cross` : `dot`,
            ie = o === `walk` ? typeof r.heading == `number` ? r.heading : i ? .heading ? ? null : null;
        x.set({
            mode: u,
            n: d,
            lit: f,
            partial: p,
            p: m,
            labels: h,
            mid: re,
            pressing: ne,
            rim: te,
            spin: o === `hold` ? 1 + Qn * m : 1,
            heading: ie
        }), D && this.ring.size(o === `hold` && !ne ? .8 : 1), g && x.punch();
        let A = e.button,
            j = (a ? r.touchText ? ? r.text : r.text) ? ? ``;
        if (A !== this.written.button) {
            this.written.button = A, this.root.classList.toggle(`is-button`, A);
            let e = this.ring.hit;
            A ? (e.setAttribute(`role`, `button`), e.tabIndex = 0, e.dataset.ui = ``, this.tag.dataset.ui = ``) : (e.removeAttribute(`role`), e.removeAttribute(`tabindex`), e.removeAttribute(`aria-label`), delete e.dataset.ui, delete this.tag.dataset.ui, document.activeElement === e && e.blur())
        }
        A && this.ring.hit.getAttribute(`aria-label`) !== j && this.ring.hit.setAttribute(`aria-label`, j);
        let ae = `${e.station.num} ${e.station.chapter}`;
        this.txt(`eye`, this.t_eye, `TRANSITION ACTION · ${ae}`);
        let M = ``,
            oe = ``;
        (o === `count` || o === `game`) && s > 0 ? (M = s >= 10 ? String(c).padStart(2, `0`) : String(c), oe = `/${s}`) : (o === `hold` || o === `walk` || o === `auto`) && (M = String(Math.round(m * 100)), oe = `%`);
        let N = `${M}|${oe}`;
        N !== this.written.n && (this.written.n = N, this.t_nb.textContent = M, this.t_ns.textContent = oe, this.t_n.hidden = !M), this.txt(`text`, this.t_text, j);
        let se = s - c,
            ce = r.unit ? ` ${r.unit}` : ``,
            le = o === `count` && s > 0 ? se > 0 ? `あと <b>${se}</b>${X(ce)}` : `→ ${X(O)}` : o === `game` && s > 0 ? `あと <b>${s-c+1}</b>${X(ce)}` : o === `hold` ? `離すと戻る` : o === `walk` ? `あと <b>${Math.max(0,100-Math.round(m*100))}</b>%` : o === `auto` ? `自動で ${X(O)} へ` : O ? `→ ${X(O)}` : ``;
        le !== this.written.sub && (this.written.sub = le, this.t_sub.innerHTML = le), this.placeTag(n, T, E, b.b1, _);
        let ue = this.t - this.visitT;
        if (this.introPhase === `in`) {
            this.txt(`ieye`, this.i_eye, `TRANSITION ACTION — ${ae}`), this.txt(`ih`, this.i_h, j);
            let e = o === `count` && s > 0 && r.unit ? `${s} ${r.unit}で <b>${X(O)}</b> へ` : O ? `クリアすると <b>${X(O)}</b> へ` : ``;
            e !== this.written.ip && (this.written.ip = e, this.i_p.innerHTML = e), this.placeIntro(n, T, E, b.b1, _), ue > Xn && this.introOut()
        }
        let de = `遷移アクション：${j}${s?` ${c} / ${s}`:``}${o===`count`&&se>0&&r.unit?`、あと ${se} ${r.unit}`:``}`;
        de !== this.written.sr && (this.written.sr = de, this.sr.textContent = de), e.cleared && this.startClear(e, x, T, E, b)
    }
    txt(e, t, n) {
        this.written[e] !== n && (this.written[e] = n, t.textContent = n)
    }
    placeTag(e, t, n, r, i) {
        if (e.compact) {
            let n = i === `dock` ? Math.round(t + r + 10) : e.band.l,
                a = `band|${n}|${e.band.r}|${e.band.b}|${e.band.h}`;
            if (a !== this.written.band) {
                this.written.band = a, this.written.tag = ``;
                let t = this.tag.style;
                t.transform = ``, t.left = `${n}px`, t.right = `${e.band.r}px`, t.bottom = `${e.band.b}px`, t.top = `auto`, t.minHeight = `${e.band.h}px`, t.maxWidth = ``, this.tag.className = `iris-tag is-band` + (this.introPhase === `in` ? `` : ` is-shown`)
            }
            return
        }
        if (this.written.band) {
            this.written.band = ``;
            let e = this.tag.style;
            e.left = e.right = e.bottom = e.top = e.minHeight = ``
        }
        t < e.W * .45 ? this.side.right = !0 : t > e.W * .55 && (this.side.right = !1), n < e.H * .46 ? this.side.below = !0 : n > e.H * .54 && (this.side.below = !1), i === `dock` && (this.side.right = !0, this.side.below = !1);
        let a = Math.round(30 * e.gs),
            o = Math.round(26 * e.gs),
            s = (this.side.below ? 1 : -1) * (.3 * r + a),
            c = Math.sqrt(Math.max(0, r * r - s * s)),
            l = this.side.right ? t + c + o : t - c - o,
            u = this.side.below ? n + .3 * r : n - .3 * r,
            d = `translate(${l.toFixed(1)}px, ${u.toFixed(1)}px)${this.side.right?``:` translateX(-100%)`}${this.side.below?``:` translateY(-100%)`}`;
        if (d !== this.written.tag) {
            this.written.tag = d, this.tag.style.transform = d, this.tag.style.setProperty(`--lead`, `${a}px`), this.tag.style.setProperty(`--gap`, `${o}px`), this.tag.className = `iris-tag ${this.side.right?`is-r`:`is-l`} ${this.side.below?`is-b`:`is-a`}${this.introPhase===`in`?``:` is-shown`}`;
            let t = Math.round((this.side.right ? e.W - l : l) - e.m);
            Math.abs(t - this.written.tagMax) > 8 && (this.written.tagMax = t, this.tag.style.maxWidth = `${Math.max(200,t)}px`)
        }
    }
    placeIntro(e, t, n, r, i) {
        let a;
        if (e.compact) a = `translate(${e.band.l}px, ${(e.H-e.band.b-e.band.h-12).toFixed(1)}px) translateY(-100%)`;
        else {
            let o = i === `dock` ? e.W / 2 : J(t, e.W * .3, e.W * .7),
                s = i !== `dock` && n < e.H * .5;
            a = `translate(${o.toFixed(1)}px, ${(s?n+r+22:n-r-22).toFixed(1)}px) translate(-50%, ${s?`0`:`-100%`})`
        }
        let o = `${a}|${e.compact?e.W-e.band.l-e.band.r:0}`;
        o !== this.written.intro && (this.written.intro = o, this.intro.style.transform = a, this.intro.style.width = e.compact ? `${e.W-e.band.l-e.band.r}px` : ``, this.intro.dataset.side = e.compact ? `band` : i === `dock` || n >= e.H * .5 ? `above` : `below`)
    }
    introOut() {
        this.introPhase = `out`, this.intro.classList.remove(`is-in`), this.intro.classList.add(`is-out`), this.tag.classList.add(`is-shown`)
    }
    newVisit(e) {
        this.visit = e.station.id, this.visitT = this.t, this.clearedVisit = ``, this.lastDone = -1, this.memo = null, this.ring.reset();
        for (let e of this.burstRing.getAnimations()) e.cancel();
        this.burst.classList.remove(`is-on`), this.root.classList.remove(`is-clear`), this.opened = !1, this.introPhase = `in`, this.written.ip = ``, this.written.ih = ``, this.written.ieye = ``, this.written.intro = ``, this.written.tag = ``, this.written.band = ``, this.intro.classList.remove(`is-out`), this.intro.classList.add(`is-in`), this.tag.classList.remove(`is-shown`), this.pos.live = !1
    }
    hide() {
        this.on && (this.on = !1, this.root.classList.remove(`is-on`), this.ring.spin(!1), this.pad ? .ring ? .spin(!1), this.where = ``, this.introPhase === `in` && (this.introPhase = `none`, this.intro.classList.remove(`is-in`)), document.activeElement === this.ring.hit && this.ring.hit.blur())
    }
    startClear(e, t, n, r, i) {
        if (this.clearing) return;
        this.clearing = !0, this.clearT = 0, this.clearedVisit = e.station.id, this.root.classList.add(`is-clear`);
        let a = e.next ? `${e.next.num} ${e.next.chapter}` : ``;
        t.flash(), t.set({
            mode: `plain`,
            n: 0,
            lit: 0,
            partial: 0,
            p: 1,
            labels: null,
            mid: `none`,
            pressing: !1,
            rim: `OPEN ▸ **${a}** ▸ `,
            spin: 1,
            heading: null
        }), this.t_eye.textContent = `CLEAR · ${e.station.num} ${e.station.chapter}`, this.written.eye = ``, this.t_sub.innerHTML = a ? `OPEN ▸ <b>${X(a)}</b>` : ``, this.written.sub = ``, this.introPhase === `in` && this.introOut(), this.sr.textContent = `クリア。${a?`${a} へ`:``}`, this.written.sr = ``;
        let o = this.M,
            s = Math.max(Math.hypot(n, r), Math.hypot(o.W - n, r), Math.hypot(n, o.H - r), Math.hypot(o.W - n, o.H - r)) + 40;
        if (t.open(J(s / i.b1 * .32, 1.8, 3.2)), !this.env.reducedMotion) {
            let e = this.burstRing,
                t = i.R,
                a = Math.max(3, Math.round(i.sw * .45));
            this.burst.style.transform = `translate(${n.toFixed(1)}px, ${r.toFixed(1)}px)`, e.style.cssText = `left:${-t}px;top:${-t}px;width:${2*t}px;height:${2*t}px;border-width:${a}px`, this.burst.classList.add(`is-on`);
            let o = s / t;
            e.animate([{
                transform: `scale(1)`,
                opacity: 0
            }, {
                transform: `scale(1)`,
                opacity: 1,
                offset: .001
            }, {
                transform: `scale(${(o*.62).toFixed(2)})`,
                opacity: .8,
                offset: .62
            }, {
                transform: `scale(${o.toFixed(2)})`,
                opacity: 0
            }], {
                duration: Yn * 1e3,
                delay: Jn * 1e3,
                easing: er,
                fill: `both`
            })
        }
    }
    clearStep(e) {
        if (this.clearT += e, !this.opened && this.clearT >= Jn && (this.opened = !0, this.root.classList.add(`is-open`)), this.clearT >= .9) {
            this.clearing = !1, this.root.classList.remove(`is-open`), this.burst.classList.remove(`is-on`);
            for (let e of this.burstRing.getAnimations()) e.cancel();
            this.on = !0, this.hide(), this.ring.reset(), this.pad ? .ring ? .reset()
        }
    }
};

function pr() {
    for (let e of lr)
        if (e.host.isConnected && e.host.closest(`.is-on`) && !e.host.closest(`[hidden]`)) return e;
    return null
}

function mr() {
    for (let e of lr)
        if (e.host.isConnected && !e.host.closest(`[hidden]`)) return e;
    return null
}

function hr(e, t) {
    return e.inner || = Math.max(20, e.host.offsetWidth / 2), ir(e.inner, t.compact)
}

function gr(e, t) {
    return e.ring || (e.ring = new sr(t, `is-pad`), e.host.prepend(e.ring.el)), e.ring
}

function _r(e) {
    let t = e.getBoundingClientRect();
    return [t.left + t.width / 2, t.top + t.height / 2]
}
var vr = null;

function yr() {
    vr || (vr = document.createElement(`div`), vr.style.cssText = `position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)`, document.body.appendChild(vr));
    let e = getComputedStyle(vr);
    return {
        t: parseFloat(e.paddingTop) || 0,
        r: parseFloat(e.paddingRight) || 0,
        b: parseFloat(e.paddingBottom) || 0,
        l: parseFloat(e.paddingLeft) || 0
    }
}

function br() {
    return new fr
}

function xr() {
    let e = null,
        t = ``,
        n = null;
    return {
        name: `pass`,
        mount(t, r) {
            n = r, e = document.createElement(`div`), e.className = `gate-pass-placeholder`, e.style.cssText = `position:absolute;left:50%;bottom:64px;transform:translateX(-50%);padding:10px 16px;background:#fff;color:#111;font:700 14px/1.4 system-ui;border-radius:4px;pointer-events:auto`, e.addEventListener(`click`, () => n ? .activate()), t.appendChild(e)
        },
        update(n) {
            if (!e) return;
            let r = n ? `${n.state.text}${n.state.count?`  ${n.state.count[0]} / ${n.state.count[1]}`:``}${n.cleared?`  ✓`:``}` : ``;
            r !== t && (t = r, e.textContent = r, e.style.display = r ? `` : `none`)
        },
        dispose() {
            e ? .remove(), e = null
        }
    }
}
var Sr = class {
        stage;
        audio;
        story;
        reel;
        touch = matchMedia(`(pointer: coarse)`).matches;
        logoBtn = N(`ui-logo`);
        langBtn = N(`ui-lang`);
        loadingEl = N(`ui-loading`);
        soundBtn = N(`ui-sound`);
        soundLabel = N(`ui-sound-label`);
        hintsRoot = N(`hints`);
        hints = new Map;
        dismissed = new Set;
        loadingTimer = 0;
        hud = ``;
        logoOn = null;
        hudInTimer = 0;
        constructor(e, t, n, r = null) {
            this.stage = e, this.audio = t, this.story = n, this.reel = r, this.logoBtn ? .addEventListener(`click`, () => {
                this.logoOn && this.onLogo()
            }), this.soundBtn.addEventListener(`click`, () => {
                this.audio.unlocked ? this.audio.setMuted(!this.audio.muted) : (this.audio.unlock(), this.audio.setMuted(!1))
            }), this.audio.onChange(() => this.syncSound()), this.langBtn.addEventListener(`click`, () => pt(ft() === `ja` ? `en` : `ja`)), mt(() => {
                this.syncLang(), this.syncSound()
            }), document.addEventListener(`pointerover`, e => {
                e.target ? .closest ? .(`button, a`) && e.pointerType === `mouse` && this.audio.play(`ui_hover`, {
                    minGap: .08
                })
            }), document.addEventListener(`click`, e => {
                e.target ? .closest ? .(`button, a`) && this.audio.play(`ui_click`)
            }), yt(document), this.syncLang(), this.syncSound(), this.initReel(), this.initGate()
        }
        syncLang() {
            let e = ft() === `en`;
            this.langBtn.lang = e ? `ja` : `en`, this.langBtn.setAttribute(`aria-label`, e ? `日本語に切り替える` : `Switch to English`)
        }
        syncSound() {
            let e = this.audio.unlocked && !this.audio.muted;
            this.soundBtn.setAttribute(`aria-label`, e ? z(`音をオフにする`, `Turn sound off`) : z(`音をオンにする`, `Turn sound on`)), this.soundLabel.textContent = e ? `SOUND ON` : `SOUND OFF`, document.body.classList.toggle(`is-sound`, e)
        }
        onReel = () => {};
        initReel() {
            let e = N(`ui-reel`),
                t = N(`ui-reel-body`),
                n = t.innerHTML,
                r = () => t.querySelector(`video`),
                i = () => z(`HELLO, WORLD. — 本編`, `HELLO, WORLD. — the film`);
            mt(() => r() ? .setAttribute(`aria-label`, i()));
            let a = () => {
                    if (e.open) return;
                    e.showModal(), this.onReel(!0);
                    let a = this.reel;
                    if (a && !r()) {
                        let e = d(`video`);
                        e.controls = !0, e.playsInline = !0, e.preload = `auto`, e.setAttribute(`aria-label`, i()), a.poster && (e.poster = a.poster), e.src = a.video, e.addEventListener(`error`, () => {
                            t.innerHTML = n, yt(t)
                        }, {
                            once: !0
                        }), t.replaceChildren(e)
                    }
                    r() ? .play().catch(() => {})
                },
                o = () => {
                    r() ? .pause(), e.open && e.close()
                };
            e.addEventListener(`close`, () => this.onReel(!1)), N(`ui-watch`).addEventListener(`click`, a), N(`ui-fallback-watch`).addEventListener(`click`, a), N(`ui-reel-close`).addEventListener(`click`, o), e.addEventListener(`cancel`, e => {
                e.preventDefault(), o()
            }), e.addEventListener(`click`, t => {
                t.target === e && o()
            }), r()
        }
        onLogo = () => {};
        setLogo(e) {
            e !== this.logoOn && this.logoBtn && (this.logoOn = e, this.logoBtn.disabled = !e)
        }
        logoBox() {
            let e = (this.logoBtn ? ? document.body).getBoundingClientRect();
            return {
                left: e.left,
                top: e.top,
                right: e.right,
                bottom: e.bottom
            }
        }
        setHud(e) {
            if (e === this.hud) return;
            let t = document.body;
            this.hud === `off` && (t.classList.add(`is-hud-in`), window.clearTimeout(this.hudInTimer), this.hudInTimer = window.setTimeout(() => t.classList.remove(`is-hud-in`), 900)), this.hud = e, t.dataset.hud = e
        }
        loading(e) {
            if (e === null) {
                this.loadingTimer = 0, this.loadingEl.hidden || (this.loadingEl.hidden = !0);
                return
            }
            let t = performance.now();
            if (this.loadingTimer || = t, !(t - this.loadingTimer < 220)) {
                if (!this.loadingLine) {
                    this.loadingLine = d(`span`, `ui-loading__line`), this.loadingLine.setAttribute(`aria-hidden`, `true`);
                    let e = d(`b`, `ui-loading__cursor`);
                    e.setAttribute(`aria-hidden`, `true`);
                    let t = d(`span`, `ui-loading__sr`, `読み込み中`);
                    t.dataset.en = `Loading`, this.loadingEl.replaceChildren(this.loadingLine, e, t), yt(this.loadingEl)
                }
                this.loadingLine.textContent !== e && (this.loadingLine.textContent = e), this.loadingEl.hidden && (this.loadingEl.hidden = !1)
            }
        }
        loadingLine = null;
        fallback(e) {
            let t = N(`ui-fallback`);
            t.hidden = !1, N(`ui-fallback-detail`).textContent = e, document.body.classList.add(`is-fallback`)
        }
        onGate = () => {};
        skin;
        gateT = 0;
        initGate() {
            let e = xt(C);
            document.documentElement.dataset.gateSkin = e, this.skin = e === `pass` ? xr() : e === `iris` ? br() : qn(), this.skin.mount(N(`gate`), {
                stage: this.stage,
                touch: this.touch,
                reducedMotion: x(),
                activate: () => {
                    this.audio.play(`ui_click`), this.onGate()
                }
            })
        }
        setGate(e) {
            let t = performance.now(),
                n = this.gateT ? Math.min(.1, Math.max(0, (t - this.gateT) / 1e3)) : 0;
            this.gateT = t;
            let r = null;
            if (e && (e.state.kind !== `auto` || e.state.text)) {
                let t = this.story[e.index];
                t && (r = {
                    state: e.state,
                    button: e.button,
                    cleared: e.cleared,
                    station: t,
                    next: this.story[e.index + 1] ? ? null
                })
            }
            this.skin.update(r, n)
        }
        dismissHint(e) {
            this.dismissed.add(e)
        }
        isDismissed(e) {
            return this.dismissed.has(e)
        }
        setHints(e) {
            if (this.skin.ownsHints) {
                let t = e ? .filter(e => !this.dismissed.has(e.id)) ? ? null;
                return this.skin.hints ? .(t ? .length ? t : null), t ? .length ? ? 0
            }
            let t = new Set;
            if (e)
                for (let n of e) {
                    if (this.dismissed.has(n.id)) continue;
                    t.add(n.id);
                    let e = this.hints.get(n.id);
                    e || = this.makeHint(n), e.spec = n;
                    let [r, i] = this.stage.toCss(...this.stage.pick(n.at, n.p)), a = `translate(${r.toFixed(1)}px, ${i.toFixed(1)}px)`;
                    e.at !== a && (e.at = a, e.root.style.transform = a);
                    let o = gt((this.touch ? n.touchLabel ? ? n.label : n.label) ? ? ``);
                    e.label.textContent !== o && (e.label.textContent = o), e.on || (e.on = !0, e.root.classList.add(`is-on`))
                }
            for (let [e, n] of this.hints) !t.has(e) && n.on && (n.on = !1, n.root.classList.remove(`is-on`));
            return t.size
        }
        makeHint(e) {
            let t = d(`div`, `hint hint--${e.kind}${this.touch?` is-touch`:``}`),
                n = d(`div`, `hint__icon`);
            n.innerHTML = e.kind === `drag` ? `<svg viewBox="-110 -30 220 60" aria-hidden="true"><g class="halo"><ellipse cx="0" cy="0" rx="96" ry="22"/><path d="M-104 0 l12 -7 v14 z"/><path d="M104 0 l-12 -7 v14 z"/></g><ellipse cx="0" cy="0" rx="96" ry="22"/><path d="M-104 0 l12 -7 v14 z"/><path d="M104 0 l-12 -7 v14 z"/></svg><b class="knob"></b>` : e.kind === `key` ? `<kbd>ENTER</kbd>` : `<i></i><i></i><b></b>`;
            let r = d(`div`, `hint__label`);
            t.append(n, r), this.hintsRoot.appendChild(t);
            let i = {
                root: t,
                label: r,
                spec: e,
                on: !1,
                seen: performance.now(),
                at: ``
            };
            return this.hints.set(e.id, i), i
        }
    },
    Cr = new Map,
    wr = new Set;

function Tr(e) {
    Cr.set(e.name, e);
    for (let t of wr) t(e)
}

function Er(e) {
    return Cr.get(e)
}

function Dr() {
    return [...Cr.keys()]
}

function Or(e) {
    wr.add(e)
}
var kr = be(([e]) => _e(w(e, a(0)), a(1 / 2.2))),
    Ar = be(([e]) => _e(w(e, a(0)), a(2.2)));
Tr({
    name: `cut`,
    duration: 0,
    build: ({
        a: e,
        b: t,
        uv: n,
        p: r
    }) => O(r.lessThan(.5), e(n).rgb, t(n).rgb)
}), Tr({
    name: `dissolve`,
    duration: .8,
    build: ({
        a: e,
        b: t,
        uv: n,
        p: r
    }) => Ar(E(kr(e(n).rgb), kr(t(n).rgb), Se(0, 1, r)))
}), Tr({
    name: `flash`,
    duration: .9,
    build: ({
        a: e,
        b: t,
        uv: n,
        p: r
    }) => {
        let i = Se(0, .5, r),
            o = Se(.5, 1, r),
            s = r.lessThan(.5),
            c = e(n).rgb.mul(i.mul(i).mul(6).add(1)),
            l = t(n).rgb.mul(b(1).sub(o).mul(3).add(1)),
            u = O(s, _e(i, b(3)), _e(b(1).sub(o), b(2)));
        return h(E(O(s, c, l), a(1), u), 0, 1)
    }
});
var jr = class {
        renderer;
        slotA;
        slotB;
        quad;
        mats = new Map;
        pass;
        passB;
        passBReady = !1;
        warming = new Map;
        generation = 0;
        firstDraw = [];
        defs = new Map;
        u = {
            p: v(0),
            time: v(0),
            res: v(new D(1, 1)),
            focus: v(new D(.5, .5))
        };
        constructor(e) {
            this.renderer = e;
            let t = { ...he,
                depthBuffer: !1,
                generateMipmaps: !1,
                minFilter: o,
                magFilter: o
            };
            this.slotA = new me(1, 1, t), this.slotB = new me(1, 1, t), this.slotA.texture.name = `slotA`, this.slotB.texture.name = `slotB`, this.pass = this.make(({
                a: e,
                uv: t
            }) => e(t).rgb), this.passB = this.make(({
                b: e,
                uv: t
            }) => e(t).rgb), this.quad = new M(this.pass);
            for (let e of Dr()) {
                let t = Er(e);
                t && this.defs.set(e, t)
            }
            Or(e => {
                if (this.defs.get(e.name) === e) return;
                this.defs.set(e.name, e);
                let t = this.mats.get(e.name);
                t && (this.firstDraw = this.firstDraw.filter(e => e !== t), t.dispose()), this.mats.delete(e.name), this.pending.add(e.name)
            })
        }
        pending = new Set(Dr());
        make(e) {
            let i = e({
                    a: e => xe(this.slotA.texture, e),
                    b: e => xe(this.slotB.texture, e),
                    uv: n(),
                    p: this.u.p,
                    time: this.u.time,
                    res: this.u.res,
                    focus: this.u.focus
                }),
                a = s(ye(t(ae.xy, y(12.9898, 78.233))).mul(43758.5453)),
                o = A(r(i, 1), 0, de),
                c = new le;
            return c.name = `compositor`, c.fragmentNode = r(o.rgb.add(a.sub(.5).mul(b(1 / 255))), 1), c.depthTest = !1, c.depthWrite = !1, c
        }
        material(e) {
            let t = this.mats.get(e);
            if (!t) {
                let n = Er(e) ? ? Er(`dissolve`);
                t = this.make(n.build), this.mats.set(e, t)
            }
            return t
        }
        resize(e, t) {
            (this.slotA.width !== e || this.slotA.height !== t) && (this.slotA.setSize(e, t), this.slotB.setSize(e, t)), this.u.res.value.set(e, t)
        }
        render(e, t) {
            this.u.time.value = t;
            let n = this.pass;
            e && (this.warming.has(e.name) || this.pending.has(e.name) ? e.p >= .5 && this.passBReady && (n = this.passB) : (n = this.material(e.name), this.u.p.value = e.p, e.focus && this.u.focus.value.set(e.focus[0], e.focus[1]))), this.draw(n)
        }
        draw(e) {
            let t = this.renderer,
                n = t.outputColorSpace,
                r = t.toneMapping;
            t.outputColorSpace = m, t.toneMapping = 0, t.setRenderTarget(null), this.quad.material = e, this.quad.render(t), t.outputColorSpace = n, t.toneMapping = r
        }
        prewarm() {
            let e = this.firstDraw.shift();
            if (e && this.draw(e), !this.pending.size) return;
            let t = [...this.pending];
            this.pending.clear();
            let n = ++this.generation;
            for (let e of t) this.warming.set(e, n);
            let r = !this.passBReady;
            fe(this.renderer, () => {
                for (let e of t) this.draw(this.material(e));
                r && this.draw(this.passB)
            }).then(() => {
                r && (this.passBReady = !0, this.firstDraw.push(this.passB));
                for (let e of t) {
                    let t = this.mats.get(e);
                    t && this.warming.get(e) === n && this.firstDraw.push(t)
                }
            }, e => console.warn(`[compositor] transition warm-up failed`, e)).finally(() => {
                for (let e of t) this.warming.get(e) === n && this.warming.delete(e)
            })
        }
    },
    Mr = typeof location < `u` && new URLSearchParams(location.search).get(`groups`) === `keep`,
    Nr = class {
        current = null;
        owners = new Map;
        groupKeys = new WeakMap;
        installed = !1;
        enabled = typeof location > `u` || new URLSearchParams(location.search).get(`gc`) !== `0`;
        install(e) {
            let t = e._nodes ? .nodeFrame;
            if (!t || typeof t.updateBeforeNode != `function`) return !1;
            let n = t.updateBeforeNode,
                r = this;
            return t.updateBeforeNode = function(e) {
                let t = r.current;
                return t && e && typeof e.dispose == `function` && t.add(e), n.call(this, e)
            }, this.installed = !0, this.boundGroupCache(e), !0
        }
        boundGroupCache(e) {
            if (Mr) return;
            let t = e,
                n = null;
            try {
                n = Object.getPrototypeOf(Object.getPrototypeOf(t.backend.createNodeBuilder(new S, e)))
            } catch {}
            if (!n || typeof n._getBindGroup != `function`) return;
            let r = this,
                i = n._getBindGroup;
            n._getBindGroup = function(...e) {
                let t = this.renderer,
                    n = t._currentRenderContext,
                    a = n || t,
                    o = r.groupKeys.get(a);
                o || (o = {}, r.groupKeys.set(a, o)), t._currentRenderContext = o;
                try {
                    return i.apply(this, e)
                } finally {
                    t._currentRenderContext = n
                }
            }
        }
        with(e, t) {
            let n = this.owners.get(e);
            n || (n = new Set, this.owners.set(e, n));
            let r = this.current;
            this.current = n;
            try {
                return t()
            } finally {
                this.current = r
            }
        }
        get active() {
            return this.current
        }
        nodes(e) {
            return this.owners.get(e)
        }
        release(e) {
            this.groupKeys = new WeakMap;
            let t = this.owners.get(e);
            if (!t) return 0;
            if (!this.enabled) return this.owners.delete(e), 0;
            let n = 0;
            for (let e of t) try {
                e.dispose(), n++
            } catch (e) {
                console.warn(`[gc] node dispose failed`, e)
            }
            return this.owners.delete(e), n
        }
    },
    Pr = typeof location < `u` && new URLSearchParams(location.search).get(`residency`) === `0`;

function Fr(e) {
    let t = [],
        n = e => {
            e && e.isRenderTarget && t.push(e)
        };
    if (e.isPassNode || e.isRTTNode) n(e.renderTarget);
    else if (e._renderTargetBright && Array.isArray(e._renderTargetsHorizontal) && Array.isArray(e._renderTargetsVertical)) {
        n(e._renderTargetBright);
        for (let t of e._renderTargetsHorizontal) n(t);
        for (let t of e._renderTargetsVertical) n(t)
    } else if (e.renderTargets instanceof Map && e.virtualCameras)
        for (let t of e.renderTargets.values()) n(t);
    return t
}
var Ir = class {
    renderer;
    owners;
    enabled = !Pr;
    constructor(e, t) {
        this.renderer = e, this.owners = t
    }
    sleep(e, t = []) {
        let n = this.owners.nodes(e);
        if (!this.enabled || !n) return 0;
        let r = new Set;
        for (let n of t)
            if (n !== e)
                for (let e of this.owners.nodes(n) ? ? []) r.add(e);
        let i = 0;
        for (let e of n)
            if (!r.has(e)) {
                for (let t of Fr(e)) t.dispose(), i++;
                e.isRTTNode && e.autoUpdate === !1 && (e.textureNeedsUpdate = !0)
            }
        return i
    }
    wake(e) {
        let t = this.owners.nodes(e);
        if (!this.enabled || !t) return 0;
        let n = this.renderer.getDrawingBufferSize(new D),
            r = 0;
        for (let e of t) {
            try {
                Lr(e, n, this.renderer)
            } catch (e) {
                console.warn(`[residency] size`, e)
            }
            for (let t of Fr(e)) try {
                this.renderer.initRenderTarget(t), r++
            } catch (e) {
                console.warn(`[residency] wake`, e)
            }
        }
        return r
    }
};

function Lr(e, t, n) {
    if (e.isPassNode || e._renderTargetBright) typeof e.setSize == `function` && e.setSize(t.width, t.height);
    else if (e.isRTTNode) {
        if (e.autoResize === !0 && typeof e.getResolutionScale == `function`) {
            let n = e.getResolutionScale(),
                r = Math.floor(t.width * n),
                i = Math.floor(t.height * n);
            (r !== e.renderTarget.width || i !== e.renderTarget.height) && (e.renderTarget.setSize(r, i), e.textureNeedsUpdate = !0)
        }
    } else if (e.renderTargets instanceof Map && typeof e._updateResolution == `function`)
        for (let t of e.renderTargets.values()) e._updateResolution(t, n)
}
var Rr = typeof location < `u` ? new URLSearchParams(location.search) : null,
    zr = !!Rr && Rr.get(`gpusleep`) !== `0` && Rr.get(`persist`) !== `0`,
    Br = (e => e && Number.isFinite(+e) && +e > 0 ? e * 1048576 : 0)(Rr ? .get(`wakemb`) ? ? null);

function Vr(e) {
    if (!e || !e.isTexture || e.isRenderTargetTexture || e.isDepthTexture || e.isStorageTexture || e.isVideoTexture || e.isFramebufferTexture || e.isExternalTexture || e.isCubeTexture || e.isHTMLTexture || e.userData ? .reupload === !1) return !1;
    if (e.isCompressedTexture) return Array.isArray(e.mipmaps) && e.mipmaps.length > 0 && !!e.mipmaps[0] ? .data;
    let t = e.image;
    return t ? e.isDataTexture || e.isData3DTexture || e.isDataArrayTexture ? !!t.data : typeof ImageBitmap < `u` && t instanceof ImageBitmap ? t.width > 0 && t.height > 0 : typeof HTMLImageElement < `u` && t instanceof HTMLImageElement ? t.complete && t.naturalWidth > 0 : (typeof HTMLCanvasElement < `u` && t instanceof HTMLCanvasElement || typeof OffscreenCanvas < `u` && t instanceof OffscreenCanvas) && e.userData ? .reupload === !0 && t.width > 0 : !1
}

function Hr(e) {
    if (e.isCompressedTexture) {
        let t = 0;
        for (let n of e.mipmaps ? ? []) t += n ? .data ? .byteLength ? ? 0;
        return t
    }
    let t = e.image ? ? {},
        n = t.width ? ? t.naturalWidth ? ? 0,
        r = t.height ? ? t.naturalHeight ? ? 0;
    return t.data ? .byteLength ? ? n * r * 4 * (e.generateMipmaps ? 4 / 3 : 1)
}
var Ur = new Set([`ShadowMap`, `ShadowDepthTexture`, `PointShadowMap`]),
    Wr = e => e.isSampledTexture ? e.textureNode ? .value ? ? e.texture : null,
    Gr = class {
        renderer;
        active;
        nodes;
        enabled;
        drawn = new WeakMap;
        targets = new WeakMap;
        engine = new WeakSet;
        freed = new Map;
        queue = new Map;
        budget;
        last = {
            id: ``,
            textures: 0,
            bytes: 0,
            kept: 0,
            rtMB: 0,
            why: {},
            keptMB: {},
            names: []
        };
        constructor(e, t, n, r = {}) {
            this.renderer = e, this.active = t, this.nodes = n, this.enabled = zr, this.budget = Br || (r.phone ? 6 : 16) * 1048576
        }
        install() {
            let e = this.renderer,
                t = e._textures,
                n = e._objects;
            if (!this.enabled || !n || typeof n.get != `function` || !t || typeof t._destroyTexture != `function` || typeof t.has != `function` || !e.backend) return !1;
            let r = n.get,
                i = this;
            n.get = function() {
                let e = r.apply(this, arguments),
                    t = i.active();
                if (t && e) {
                    let n = i.drawn.get(t);
                    n || (n = new Set, i.drawn.set(t, n)), n.add(e)
                }
                return e
            };
            let a = e.setRenderTarget;
            return typeof a == `function` && (e.setRenderTarget = function(e) {
                if (e && e.isRenderTarget && !i.engine.has(e)) {
                    let t = i.active();
                    if (t) {
                        let n = i.targets.get(t);
                        n || (n = new Set, i.targets.set(t, n)), n.add(e)
                    }
                }
                return a.apply(this, arguments)
            }), !0
        }
        exclude(...e) {
            for (let t of e)
                if (t) {
                    this.engine.add(t);
                    for (let e of t.textures ? ? [t.texture]) e && this.engine.add(e);
                    t.depthTexture && this.engine.add(t.depthTexture)
                }
        }
        targetsOf(e) {
            let t = this.nodes(e);
            return t && this.targets.get(t) || new Set
        }
        freeableTarget(e, t = null) {
            if (!e || e.isPMREMTexture || e.userData ? .keep === !0 || this.engine.has(e) || Ur.has(e.name)) return !1;
            let n = t ? ? e.renderTarget ? ? null;
            return !(n && this.engine.has(n))
        }
        groupsOf(e, t = new Set) {
            let n = this.nodes(e),
                r = n ? this.drawn.get(n) : void 0;
            if (r)
                for (let e of r)
                    for (let n of e._bindings ? ? []) t.add(n);
            return t
        }
        texturesIn(e, t = new Set) {
            for (let n of e)
                for (let e of n.bindings ? ? []) {
                    let n = Wr(e);
                    n && n.isTexture && t.add(n)
                }
            return t
        }
        sleep(e, t, n) {
            if (!this.enabled) return 0;
            this.queue.delete(e);
            let r = this.groupsOf(e),
                i = this.texturesIn(r),
                a = new Set(t),
                o = new Set;
            for (let t of a) t !== e && this.groupsOf(t, o);
            let s = this.texturesIn(o),
                c = this.sleepTargets(e, a, i, s);
            if (!i.size) return this.last = { ...this.last,
                id: e,
                rtMB: +(c / 1048576).toFixed(1)
            }, 0;
            let l = new Set(r);
            for (let t of n) t !== e && !a.has(t) && this.groupsOf(t, l);
            let u = this.renderer._textures,
                d = this.freed.get(e) ? ? [],
                f = 0,
                p = 0;
            this.last = {
                id: e,
                textures: 0,
                bytes: 0,
                kept: 0,
                rtMB: 0,
                why: {},
                keptMB: {},
                names: []
            };
            for (let e of i) {
                if (!u.has(e)) continue;
                let t = u.get(e);
                if (t.initialized !== !0) continue;
                let n = t => {
                    p++, this.last.why[t] = (this.last.why[t] ? ? 0) + 1, this.last.keptMB[t] = +((this.last.keptMB[t] ? ? 0) + Hr(e) / 1048576).toFixed(2)
                };
                if (s.has(e)) {
                    n(`awake`);
                    continue
                }
                if (!Vr(e) || e.name === `DFG_LUT`) {
                    n(`source`);
                    continue
                }
                let i = !1,
                    a = !1;
                for (let e of t.bindGroups ? ? []) {
                    if (!l.has(e)) {
                        i = !0;
                        break
                    }
                    r.has(e) || (a = !0)
                }
                if (i) {
                    n(`foreign`);
                    continue
                }
                a && (this.last.why.sharedAsleep = (this.last.why.sharedAsleep ? ? 0) + 1), f += Hr(e), this.last.names.length < 40 && this.last.names.push(e.name || `${e.image?.width}x${e.image?.height}`), u._destroyTexture(e), e.needsUpdate = !0, d.push(e)
            }
            return this.freed.set(e, d), this.last = { ...this.last,
                id: e,
                textures: d.length,
                bytes: f,
                kept: p,
                rtMB: +(c / 1048576).toFixed(1)
            }, d.length
        }
        sleepTargets(e, t, n, r) {
            let i = this.renderer._textures,
                a = new Set;
            for (let n of t)
                if (n !== e)
                    for (let e of this.targetsOf(n)) a.add(e);
            let o = (e, t) => (e.image ? .width ? ? t ? .width ? ? 0) * (e.image ? .height ? ? t ? .height ? ? 0) * (e.type === 1016 ? 8 : 4),
                s = e => {
                    i.has(e) && i._destroyTexture(e), e.needsUpdate = !0
                },
                c = 0,
                l = new Set;
            for (let t of this.targetsOf(e)) {
                let e = t.textures ? ? [t.texture];
                if (!(a.has(t) || e.some(e => r.has(e) || !this.freeableTarget(e, t)) || t.depthTexture && !this.freeableTarget(t.depthTexture, t)) && (i.has(t) || e.some(e => i.has(e)))) {
                    for (let n of e) i.has(n) && (c += o(n, t));
                    t.dispose();
                    for (let t of e) s(t);
                    t.depthTexture && s(t.depthTexture), l.add(t)
                }
            }
            for (let e of n) {
                if (!e.isRenderTargetTexture || r.has(e) || !i.has(e) || !this.freeableTarget(e)) continue;
                let t = e.renderTarget;
                t && (a.has(t) || this.engine.has(t)) || (c += o(e, t), s(e))
            }
            return c
        }
        wake(e) {
            if (!this.enabled) return;
            let t = this.freed.get(e);
            this.freed.delete(e);
            let n = this.renderer._textures,
                r = new Set(t ? ? []);
            for (let t of this.texturesIn(this.groupsOf(e))) Vr(t) && !n.has(t) && r.add(t);
            let i = [...r].filter(e => !n.has(e) || n.get(e).initialized !== !0);
            i.length ? this.queue.set(e, i) : this.queue.delete(e);
            for (let t of this.targetsOf(e))
                if (t.texture ? .userData ? .sleeps === !0 && !n.has(t)) try {
                    this.renderer.initRenderTarget(t)
                } catch (e) {
                    console.warn(`[gpusleep] target`, e)
                }
        }
        pending(e) {
            return this.queue.has(e)
        }
        tick() {
            if (!this.queue.size) return;
            let e = this.renderer._textures,
                t = 0,
                n = 0;
            for (let [r, i] of this.queue) {
                for (; i.length && (n === 0 || t < this.budget);) {
                    let r = i.shift();
                    if (!(e.has(r) && e.get(r).initialized === !0)) {
                        try {
                            this.renderer.initTexture(r)
                        } catch (e) {
                            console.warn(`[gpusleep] upload`, e)
                        }
                        t += Hr(r), n++
                    }
                }
                if (i.length || this.queue.delete(r), t >= this.budget) break
            }
        }
        release(e) {
            let t = this.nodes(e);
            t && (this.drawn.delete(t), this.targets.delete(t)), this.freed.delete(e), this.queue.delete(e)
        }
    },
    Kr = Object.freeze({
        kind: `tap`,
        text: ht(`クリックで次へ`, `Click to continue`),
        touchText: ht(`タップで次へ`, `Tap to continue`),
        progress: 0,
        button: !0
    }),
    qr = .001,
    Jr = 1.2,
    Yr = typeof location < `u` && new URLSearchParams(location.search).get(`dispose`) === `idle`,
    Xr = .5,
    Zr = typeof location < `u` && new URLSearchParams(location.search).get(`warm`) === `single`,
    Qr = (e => e !== null && Number.isFinite(+e) && +e >= 0 ? e / 1e3 : 1.5)(typeof location < `u` ? new URLSearchParams(location.search).get(`preloadhold`) : null),
    $r = new Map((typeof location < `u` ? new URLSearchParams(location.search).get(`preload`) ? ? `` : ``).split(`,`).filter(Boolean).map(e => {
        let [t, n] = e.split(`:`);
        return [t, +n]
    }).filter(([, e]) => Number.isFinite(e) && e >= 1)),
    ei = (e, t) => n => e.with(t, n),
    ti = 1e-9,
    ni = typeof location < `u` && new URLSearchParams(location.search).get(`lookahead`) === `0`,
    ri = typeof location < `u` && new URLSearchParams(location.search).get(`lookahead`) === `serial`,
    Z = typeof location > `u` || new URLSearchParams(location.search).get(`persist`) !== `0`,
    ii = Z && (typeof location > `u` || new URLSearchParams(location.search).get(`reuse`) !== `0`),
    ai = class {
        host;
        compositor;
        slots;
        G = 0;
        goal = 0;
        at = 0;
        time = 0;
        settledAt = 0;
        focusIndex = -1;
        visible = new Set;
        clearing = null;
        jump = -1;
        frame = {
            goal: 0,
            at: 0,
            focus: 0,
            settled: !1,
            transition: null,
            waiting: !1
        };
        owners = new Nr;
        residency;
        gpu;
        constructor(e, t, n, r) {
            this.host = t, this.compositor = r, this.owners.install(t.renderer), this.residency = new Ir(t.renderer, this.owners), this.gpu = new Gr(t.renderer, () => this.owners.active, e => this.owners.nodes(e)), Z && this.gpu.install(), this.gpu.exclude(r.slotA, r.slotB);
            let i = 0;
            this.slots = e.map((e, t) => {
                let r = Er(e.arrive.type),
                    a = t === 0 ? 0 : Math.max(qr, e.arrive.duration ? ? r ? .duration ? ? .8),
                    o = i;
                i += a;
                let s = document.createElement(`div`);
                return s.className = `station`, s.dataset.station = e.id, s.hidden = !0, n.appendChild(s), {
                    spec: e,
                    index: t,
                    state: `idle`,
                    station: null,
                    layer: s,
                    visible: !1,
                    enteredAt: 0,
                    farSince: 0,
                    g0: o,
                    g1: i,
                    dur: a,
                    transition: e.arrive.type,
                    gate: void 0,
                    clearedAt: -1
                }
            })
        }
        indexOf(e) {
            return this.slots.findIndex(t => t.spec.id === e)
        }
        ready(e) {
            let t = this.slots[e];
            return !!t && (t.state === `ready` && !t.asleep && !this.gpu.pending(e) || t.state === `error`)
        }
        isLoaded(e) {
            let t = this.slots[e];
            return !!t && (t.state === `ready` || t.state === `error`)
        }
        whenLoaded(e) {
            return this.isLoaded(e) || !this.slots[e] ? Promise.resolve() : new Promise(t => {
                let n = this.loadWaiters.get(e) ? ? [];
                n.push(t), this.loadWaiters.set(e, n)
            })
        }
        loadWaiters = new Map;
        persistent = Z;
        jumpTo(e) {
            e = g(Math.round(e), 0, this.slots.length - 1), this.goal = e, this.G = this.slots[e].g1, this.clearing = null, this.jump = -1, this.slots[e].clearedAt = -1, this.settledAt = this.time, this.residency.wake(e)
        }
        goTo(e) {
            this.jump = g(Math.round(e), 0, this.slots.length - 1), this.clearing = null, this.ensure(this.jump)
        }
        restart() {
            if (ii) {
                for (let e of this.slots)
                    if (e.state === `ready`) try {
                        e.station ? .reset ? .()
                    } catch (t) {
                        console.warn(`[director] reset ${e.spec.id}`, t)
                    }
            } else if (Z)
                for (let e of this.slots) e.state === `ready` && (e.visible ? e.disposeOnLeave = !0 : e.index === 0 ? this.dispose(e) : this.disposeLater.push(e));
            this.goTo(0)
        }
        disposeLater = [];
        preloadOf(e) {
            let t = this.slots[e] ? .spec;
            return t ? $r.get(t.id) ? ? t.preload ? ? 1 : 1
        }
        resident(e, t) {
            let n = !ni && this.host.lookahead ? .() !== !1;
            return e === t || e === t + 1 || n && e > t && e - t <= this.preloadOf(e)
        }
        gate(e, t) {
            let n = this.slots[e];
            n && n.state !== `idle` && (n.gate = t)
        }
        advance(e) {
            let t = this.slots[e];
            return !t || e !== this.goal || e !== this.at || !this.ready(e) || e >= this.slots.length - 1 || this.clearing || this.jump >= 0 || t.clearedAt >= 0 ? !1 : (t.clearedAt = this.time, this.clearing = {
                from: e,
                at: this.time + (this.gateOf(t) === null ? 0 : Xr)
            }, this.ensure(e + 1), this.residency.wake(e + 1), !0)
        }
        gateOf(e) {
            return e.state === `error` ? void 0 : e.gate
        }
        gateView() {
            let e = this.frame,
                t = e.at,
                n = this.slots[t];
            if (!e.settled || this.jump >= 0 || !n || t >= this.slots.length - 1 || !this.ready(t)) return null;
            let r = this.gateOf(n);
            if (r === null) return null;
            let i = r ? ? Kr;
            return {
                index: t,
                state: i,
                button: r === void 0 || !!i.button,
                cleared: n.clearedAt >= 0,
                fallback: r === void 0
            }
        }
        ensure(e, t = {}) {
            let n = this.slots[e];
            if (!n) return;
            if (n.state === `ready` && n.asleep && !t.asleep) {
                this.wakeSlot(n);
                return
            }
            if (n.state !== `idle`) return;
            n.state = `loading`, n.gate = void 0, this.host.onLoadState(!0), this.host.onStation ? .(n.spec, `load`, {
                asleep: !!t.asleep
            });
            let r = (e, t) => {
                try {
                    performance.measure(`station ${n.spec.id} · ${e}`, {
                        start: t,
                        end: performance.now()
                    })
                } catch {}
            };
            (async () => {
                try {
                    n.stage = `module`;
                    let e = await n.spec.module();
                    for (let t of e.transitions ? ? []) Tr(t);
                    let i = performance.now(),
                        a = e.default(n.spec);
                    r(`create`, i), n.station = a;
                    let o = this.host.ctxFor(n.spec, n.layer);
                    if (o.own = ei(this.owners, n.index), i = performance.now(), n.stage = `load`, await a.load(o), r(`load`, i), n.stage = `warm`, !n.visible) {
                        let e = n.layer.hidden;
                        if (a.layout(o.stage.info), a.update({
                                dt: 0,
                                time: 0,
                                clock: o.clock.now(),
                                beat: 0,
                                dwell: 0,
                                active: !1,
                                arrive: 0,
                                leave: 0,
                                input: o.input
                            }), i = performance.now(), Zr) {
                            let e = 0;
                            await fe(this.host.renderer, () => {
                                this.owners.with(n.index, () => a.render(this.scratch())), r(`warm-up draw`, i), e = performance.now()
                            }), r(`warm-up compile`, e)
                        } else {
                            let e = await ce(this.host.renderer, () => this.owners.with(n.index, () => a.render(this.scratch())));
                            r(`warm-up (${e.frames} frame${e.frames===1?``:`s`})`, i), e.leftover.length && console.warn(`[director] ${n.spec.id}: warm-up left ${e.leftover.length} object(s) unbuilt — render() must re-render its chain on every call (engine/warm.ts › warmFrames):`, e.leftover.slice(0, 8).join(` · `))
                        }
                        n.layer.hidden = e
                    }
                    n.state = `ready`, !n.visible && !(this.clearing ? .from === n.index - 1 || this.goal >= n.index && this.at < n.index || this.jump === n.index) && this.residency.sleep(n.index, this.visible);
                    let s = n.index === this.goal || !this.hold && this.goal >= n.index && this.at < n.index;
                    if (t.asleep && !n.visible && !s && this.jump !== n.index) {
                        n.asleep = !0;
                        try {
                            a.sleep ? .()
                        } catch (e) {
                            console.warn(`[director] sleep ${n.spec.id}`, e)
                        }
                        this.gpu.sleep(n.index, this.idsWhere(e => !e.asleep), this.idsWhere(() => !0)), this.host.onStation ? .(n.spec, `sleep`)
                    }
                } catch (e) {
                    console.error(`[director] station "${n.spec.id}" failed to load`, e);
                    let t = n.station;
                    if (n.station = null, t) try {
                        t.dispose()
                    } catch (e) {
                        console.warn(`[director] dispose ${n.spec.id} after its failed load`, e)
                    }
                    this.owners.release(n.index), this.host.onStation ? .(n.spec, `unload`), n.layer.replaceChildren(), n.state = `error`
                } finally {
                    this.host.onLoadState(this.slots.some(e => e.state === `loading`));
                    let e = this.loadWaiters.get(n.index);
                    if (e && this.isLoaded(n.index)) {
                        this.loadWaiters.delete(n.index);
                        for (let t of e) t()
                    }
                }
            })()
        }
        async precompile(e, t = {}) {
            let n = this.slots[e];
            if (!n || n.state !== `idle`) return null;
            let r = performance.now(),
                i = (e, t) => {
                    try {
                        performance.measure(`station ${n.spec.id} · stand-in ${e}`, {
                            start: t,
                            end: performance.now()
                        })
                    } catch {}
                },
                a = `stand-in:${n.spec.id}`,
                o = () => !!t.cancelled ? .(),
                s = await n.spec.module();
            for (let e of s.transitions ? ? []) Tr(e);
            let c = s.default(n.spec),
                l = document.createElement(`div`);
            l.className = `station`, l.dataset.station = n.spec.id, l.dataset.standIn = ``, l.hidden = !0, n.layer.parentElement ? .appendChild(l);
            let u = { ...this.host.ctxFor(n.spec, n.layer),
                    layer: l,
                    gate: () => {},
                    advance: () => {},
                    restart: () => {},
                    own: ei(this.owners, a)
                },
                d = this.host.standIn ? .(u) ? ? u,
                f = 0,
                p = 0,
                m = !1,
                h = () => {
                    let e = performance.now();
                    try {
                        c.dispose()
                    } catch (e) {
                        console.warn(`[director] stand-in dispose ${n.spec.id}`, e)
                    }
                    this.owners.release(a), l.remove(), i(`dispose`, e)
                };
            try {
                let e = performance.now();
                if (await c.load(d), i(`load`, e), t.loaded ? .(), o()) return null;
                c.layout(d.stage.info), c.update({
                    dt: 0,
                    time: 0,
                    clock: d.clock.now(),
                    beat: 0,
                    dwell: 0,
                    active: !1,
                    arrive: 0,
                    leave: 0,
                    input: d.input
                });
                let n = () => this.owners.with(a, () => c.render(this.scratch()));
                if (e = performance.now(), f += (await ce(this.host.renderer, n, {
                        cancelled: o
                    })).frames, i(`warm-up`, e), t.streamed !== !1 && c.pending && c.pending() > 0) {
                    for (e = performance.now(), p = c.pending(); c.pending() > 0 && performance.now() - e < 9e4 && !o();) await new Promise(e => requestAnimationFrame(() => e()));
                    if (o()) return null;
                    f += (await ce(this.host.renderer, n, {
                        cancelled: o
                    })).frames, i(`streamed (${p})`, e)
                }
                return t.keep ? (m = !0, this.residency.sleep(a), {
                    ms: performance.now() - r,
                    frames: f,
                    streamed: p,
                    release: h
                }) : {
                    ms: performance.now() - r,
                    frames: f,
                    streamed: p
                }
            } finally {
                m || h()
            }
        }
        idleDispose = !1;
        disposeQuietly(e) {
            if (!Yr) {
                this.dispose(e);
                return
            }
            if (this.idleDispose) return;
            let t = () => {
                let t = this.frame;
                return !t.settled || t.transition || this.clearing ? !1 : !this.slots.some(e => e.state === `loading`) || this.time - e.farSince > 5.2
            };
            if (!t()) return;
            this.idleDispose = !0;
            let n = () => {
                    this.idleDispose = !1, e.state === `ready` && e.farSince && t() && this.dispose(e)
                },
                r = globalThis.requestIdleCallback;
            r ? r(n, {
                timeout: 500
            }) : setTimeout(n, 0)
        }
        sleepSlot(e) {
            if (e.asleep || e.state !== `ready` || !e.station || e.visible) return;
            let t = performance.now();
            e.asleep = !0, e.farSince = 0, this.residency.sleep(e.index, this.visible);
            try {
                e.station.sleep ? .()
            } catch (t) {
                console.warn(`[director] sleep ${e.spec.id}`, t)
            }
            this.gpu.sleep(e.index, this.idsWhere(e => !e.asleep), this.idsWhere(() => !0)), this.host.onStation ? .(e.spec, `sleep`);
            try {
                performance.measure(`station ${e.spec.id} · sleep`, {
                    start: t,
                    end: performance.now()
                })
            } catch {}
        }
        wakeSlot(e) {
            if (!e.asleep) return;
            let t = performance.now();
            e.asleep = !1, this.host.onStation ? .(e.spec, `wake`), this.gpu.wake(e.index);
            try {
                e.station ? .wake ? .()
            } catch (t) {
                console.warn(`[director] wake ${e.spec.id}`, t)
            }
            try {
                performance.measure(`station ${e.spec.id} · wake`, {
                    start: t,
                    end: performance.now()
                })
            } catch {}
        }
        idsWhere(e) {
            return this.slots.filter(t => (t.state === `ready` || t.state === `loading`) && e(t)).map(e => e.index)
        }
        dispose(e) {
            if (!e.station || e.state !== `ready`) return;
            let t = performance.now();
            try {
                e.station.dispose()
            } catch (t) {
                console.warn(`[director] dispose ${e.spec.id}`, t)
            }
            this.gpu.release(e.index), this.owners.release(e.index);
            let n = window;
            `__${e.spec.id}` in n && delete n[`__${e.spec.id}`], this.host.onStation ? .(e.spec, `unload`);
            try {
                performance.measure(`station ${e.spec.id} · dispose`, {
                    start: t,
                    end: performance.now()
                })
            } catch {}
            e.station = null, e.state = `idle`, e.gate = void 0, e.layer.replaceChildren(), e.layer.hidden = !0, e.farSince = 0, e.asleep = !1, e.disposeOnLeave = !1
        }
        scratchRT = null;
        scratch() {
            return this.scratchRT || (this.scratchRT = new me(16, 16, { ...he,
                depthBuffer: !1
            }), this.gpu.exclude(this.scratchRT)), this.scratchRT
        }
        live(e) {
            let t = this.slots[e];
            return !!t && t.state === `ready` && !!t.station
        }
        hold = !1;
        update(e, t, n) {
            if (this.time += e, this.gpu.tick(), this.hold) return this.settledAt = this.time, this.frame = {
                goal: this.goal,
                at: this.at,
                focus: Math.max(0, this.focusIndex),
                settled: !1,
                transition: null,
                waiting: !0
            }, this.frame;
            let r = this.slots.length,
                i = !1;
            if (this.jump >= 0) {
                let e = this.jump;
                this.ready(e) || this.ensure(e), this.ready(e) ? this.jumpTo(e) : i = !0
            }
            this.clearing && this.time >= this.clearing.at && (this.goal = Math.min(r - 1, this.clearing.from + 1), this.clearing = null);
            let a = this.slots[this.goal].g1,
                o = this.G,
                s = a > o ? Math.min(a, o + e) : a,
                c = (e, t) => {
                    let n = !0;
                    for (let r of [e, t]) this.ready(r) || (this.ensure(r), this.ready(r) || (n = !1));
                    return n
                };
            if (s > o)
                for (let e = 1; e < r; e++) {
                    let t = this.slots[e];
                    if (t.g0 >= o - ti && t.g0 < s && !c(e - 1, e)) {
                        s = t.g0, i = !0;
                        break
                    }
                }
            this.G = s;
            let l = 0;
            for (let e = 0; e < r; e++) this.slots[e].g1 <= this.G + ti && (l = e);
            let u = null,
                d = this.slots[l + 1];
            d && this.G > d.g0 + ti && this.G < d.g1 - ti && (u = {
                from: l,
                to: l + 1,
                p: g((this.G - d.g0) / d.dur),
                name: d.transition
            });
            let p = u ? [u.from, u.to] : [l];
            for (let e of p) this.ready(e) || (this.ensure(e), this.ready(e) || (i = !0));
            let m = u ? u.to : l,
                h = !u && l === this.goal && Math.abs(this.G - a) < ti;
            (!h || l !== this.frame.at) && (this.settledAt = this.time), this.at = l;
            let _ = this.focusIndex >= 0 ? this.slots[this.focusIndex].spec.id : null,
                v = this.slots[m].spec.id,
                y = new Set(p.filter(e => this.live(e)));
            for (let e of this.visible)
                if (!y.has(e)) {
                    let t = this.slots[e];
                    t.visible = !1, t.layer.hidden = !0, this.live(e) && t.station.exit(v === t.spec.id ? null : v), this.residency.sleep(e, y)
                }
            for (let e of y)
                if (!this.visible.has(e)) {
                    let t = this.slots[e];
                    t.visible = !0, t.enteredAt = this.time, t.clearedAt = -1, t.layer.hidden = !1;
                    let n = this.host.ctxFor(t.spec, t.layer);
                    t.station.layout(n.stage.info), t.station.enter(_ === t.spec.id ? null : _)
                }
            this.visible = y, m !== this.focusIndex && (this.focusIndex = m, this.host.onFocus(this.slots[m].spec, m));
            let b = this.time - this.settledAt;
            ge(Qr > 0 && !(this.goal > l || this.clearing || this.jump >= 0 || i) && !(h && b >= Qr));
            let x = e => this.host.canPreload ? .(e) !== !1;
            h && b > .35 && this.ready(l) && l + 1 < r && x(l + 1) && this.ensure(l + 1);
            let S = !ni && this.host.lookahead ? .() !== !1,
                C = e => S && e > l && e - l <= this.preloadOf(e);
            if (S && h && b > .35 && this.ready(l)) {
                for (let e = l + 2; e < r && C(e) && !(this.slots[e - 1].state === `idle` || (ri || this.host.serialLookahead ? .()) && !this.ready(e - 1)); e++)
                    if (this.slots[e].state === `idle`) {
                        x(e) && this.ensure(e);
                        break
                    }
            }(this.goal > l || this.clearing) && this.ensure(l + 1);
            for (let e of this.slots) {
                let t = e.index,
                    n = y.has(t) || t === l || t === l - 1 && !Z || t === this.jump || t > l && (t <= this.goal || t === l + 1 || C(t));
                e.state === `ready` && !e.asleep && !n ? e.farSince ? this.time - e.farSince > Jr && (Z && !e.disposeOnLeave ? this.sleepSlot(e) : this.disposeQuietly(e)) : e.farSince = this.time : e.farSince = 0
            }
            if (this.disposeLater.length) {
                let e = this.disposeLater.shift();
                e.state === `ready` && !e.visible && e.index !== this.jump ? this.dispose(e) : e.state === `ready` && e.visible && (e.disposeOnLeave = !0)
            }
            for (let r of y) {
                let i = this.slots[r];
                i.station.update({
                    dt: e,
                    time: this.time - i.enteredAt,
                    clock: t,
                    beat: t / f,
                    dwell: 0,
                    active: h && r === l,
                    arrive: u && r === u.to ? u.p : 1,
                    leave: u && r === u.from ? u.p : 0,
                    input: n
                })
            }
            return this.frame = {
                goal: this.goal,
                at: l,
                focus: m,
                settled: h,
                transition: u,
                waiting: i
            }, this.frame
        }
        render(e) {
            let t = this.frame,
                n = (e, t) => {
                    let n = this.slots[e];
                    if (n.visible && this.live(e)) this.owners.with(e, () => n.station.render(t));
                    else {
                        let e = this.host.renderer;
                        e.setRenderTarget(t), e.setClearColor(0, 1), e.clear(), e.setRenderTarget(null)
                    }
                };
            t.transition ? (n(t.transition.from, this.compositor.slotA), n(t.transition.to, this.compositor.slotB), this.compositor.render({
                name: t.transition.name,
                p: t.transition.p
            }, e)) : (n(t.at, this.compositor.slotA), this.compositor.render(null, e))
        }
        get current() {
            let e = this.frame;
            return e.settled && this.live(e.at) ? this.slots[e.at].station : null
        }
        get focusSlot() {
            return this.slots[Math.max(0, this.focusIndex)]
        }
        waitingFor() {
            if (!this.frame.waiting) return null;
            let e = this.frame;
            for (let t of [this.jump, this.goal, e.transition ? .to ? ? -1, e.at + 1, e.at]) {
                let e = this.slots[t];
                if (e && e.state === `loading`) return {
                    id: e.spec.id,
                    chapter: e.spec.chapter,
                    stage: e.stage ? ? `load`
                }
            }
            return null
        }
        settledFor() {
            return this.frame.settled ? this.time - this.settledAt : 0
        }
        loaded() {
            return this.slots.filter(e => e.state === `ready`).map(e => e.spec.id)
        }
    },
    Q = {
        pipelines: 0,
        stages: 0,
        device: 0,
        afterReady: {
            pipelines: 0,
            stages: 0,
            device: 0,
            what: []
        },
        ready: !1,
        reused: 0,
        patched: !1
    },
    oi = new Set;

function si() {
    return Q
}

function ci(e) {
    return oi.add(e), () => oi.delete(e)
}

function li() {
    Q.ready = !0
}
var ui = () => {
    for (let e of oi) e()
};

function di(e, t) {
    Q.ready && (Q.afterReady[e]++, Q.afterReady.what.length < 200 && Q.afterReady.what.push(`${e}: ${t}`))
}
var fi = e => `${e?.material?.name||e?.material?.type||`?`} on ${e?.object?.name||e?.object?.type||`?`}`;

function pi(e, t) {
    let n = e.nodeUniform ? .node ? .name || ``,
        r = t.nodeUniform ? .node ? .name || ``;
    return n && r && n !== r ? n < r ? -1 : 1 : n && !r ? -1 : r && !n ? 1 : (e.nodeUniform ? .node ? .id ? ? 0) - (t.nodeUniform ? .node ? .id ? ? 0)
}

function mi() {
    return Array.prototype.sort.call(this, pi)
}
var hi = new WeakMap;

function gi(e, t) {
    let n = hi.get(e);
    n || hi.set(e, n = new Map);
    let r = n.get(t);
    return r === void 0 && n.set(t, r = n.size), r
}
var _i = new WeakMap,
    vi = (e, t) => {
        try {
            return (typeof e ? .getIncludes == `function` ? e.getIncludes(t) : e ? .includes) ? ? []
        } catch {
            return e ? .includes ? ? []
        }
    };

function yi(e, t) {
    let n = e.codes ? .[t];
    if (!Array.isArray(n) || n.length < 2) return;
    let r = new Map;
    for (let e of n) {
        let t = _i.get(e);
        t && r.set(t, e)
    }
    let i = new Set;
    for (let t of r.keys())
        for (let n of vi(t, e)) i.add(n);
    let a = [],
        o = new Set,
        s = t => {
            if (o.has(t)) return;
            o.add(t);
            let n = _i.get(t);
            if (n)
                for (let t of vi(n, e)) {
                    let e = r.get(t);
                    e && s(e)
                }
            a.push(t)
        };
    for (let e of n) {
        let t = _i.get(e);
        (!t || !i.has(t)) && s(e)
    }
    for (let e of n) s(e);
    a.length === n.length && n.splice(0, n.length, ...a)
}

function bi(e) {
    let t = e,
        n = t.backend,
        r = t._pipelines;
    try {
        let t = n.createNodeBuilder(new S, e),
            i = Object.getPrototypeOf(t),
            a = Object.getPrototypeOf(i),
            o = !!n.isWebGLBackend;
        if (typeof a._getBindGroup != `function` || typeof i.getUniformFromNode != `function` || typeof i.buildCode != `function` || typeof r ? ._releasePipeline != `function` || typeof r ? ._releaseProgram != `function`) throw Error(`three internals moved`);
        let s = a._getBindGroup;
        a._getBindGroup = function(e, t) {
            for (let e of t) e ? .isNodeUniformsGroup && Array.isArray(e.uniforms) && e.uniforms.sort !== mi && Object.defineProperty(e.uniforms, "sort", {
                value: mi,
                configurable: !0,
                writable: !0
            });
            return s.call(this, e, t)
        };
        let c = i.getUniformFromNode;
        i.getUniformFromNode = function(e, t, n, r = null) {
            let i = c.call(this, e, t, n, r);
            if (t === `buffer` || t === `storageBuffer` || t === `indirectStorageBuffer`) {
                let r = i ? .node ? ? e;
                if (o) {
                    if (t === `buffer` && i && i.name === `buffer${r.id}`) {
                        let t = gi(this, r);
                        i.name = `buffer${t}`;
                        let a = this.getDataFromNode(e, n, this.globalCache);
                        a ? .uniformGPU && typeof a.uniformGPU == `object` && `name` in a.uniformGPU && (a.uniformGPU.name = `NodeBuffer_${t}`)
                    }
                } else i && i.name === `NodeBuffer_` + i.id && (i.name = `NodeBuffer_` + gi(this, r))
            }
            return i
        };
        let l = a.getCodeFromNode;
        if (typeof l != `function`) throw Error(`three internals moved (getCodeFromNode)`);
        a.getCodeFromNode = function(e, t, n) {
            let r = l.call(this, e, t, n ? ? this.shaderStage);
            return r && typeof r == `object` && _i.set(r, e), r
        };
        let u = i.buildCode;
        i.buildCode = function() {
            if (this.codes)
                for (let e of Object.keys(this.codes)) yi(this, e);
            let e = o ? hi.get(this) : void 0;
            if (e)
                for (let [t, n] of e) t.name = `NodeBuffer_${n}`;
            try {
                return u.call(this)
            } finally {
                if (e)
                    for (let t of e.keys()) t.name = `NodeBuffer_${t.id}`
            }
        }, r._releasePipeline = function() {}, r._releaseProgram = function() {};
        let d = n.createRenderPipeline;
        n.createRenderPipeline = function(e, t) {
            return Q.pipelines++, di(`pipelines`, fi(e)), ui(), d.call(this, e, t)
        };
        let f = n.createComputePipeline;
        typeof f == `function` && (n.createComputePipeline = function(...e) {
            return Q.pipelines++, di(`pipelines`, `compute`), ui(), f.apply(this, e)
        });
        let p = n.createProgram;
        n.createProgram = function(e) {
            return Q.stages++, di(`stages`, `${e?.stage} ${e?.name||``}`), ui(), p.call(this, e)
        };
        let m = r.programs,
            h = r.getForRender;
        if (r.getForRender = function(e, t) {
                if (this.get(e).pipeline === void 0) {
                    let t = e.getNodeBuilderState ? .();
                    t && m.vertex.has(t.vertexShader) && m.fragment.has(t.fragmentShader) && Q.reused++
                }
                return h.call(this, e, t)
            }, o) {
            let e = n.gl,
                t = e.linkProgram;
            e.linkProgram = function(e) {
                return Q.device++, di(`device`, `linkProgram`), t.call(this, e)
            }
        } else {
            let e = n.device;
            for (let t of [`createRenderPipeline`, `createRenderPipelineAsync`, `createComputePipeline`, `createComputePipelineAsync`]) {
                let n = e[t];
                typeof n == `function` && (e[t] = function(e) {
                    return Q.device++, di(`device`, `${t} ${e?.label??``}`), n.call(this, e)
                })
            }
        }
        Q.patched = !0
    } catch (e) {
        console.info(`[pipelines] cache patch skipped — stations re-created later compile again`, e)
    }
}
var xi = [`models`, `textures`, `audio`, `fonts`, `data`],
    Si = 6,
    Ci = 2,
    wi = 2e4,
    Ti = {
        glb: `model/gltf-binary`,
        json: `application/json`,
        webp: `image/webp`,
        png: `image/png`,
        jpg: `image/jpeg`,
        jpeg: `image/jpeg`,
        svg: `image/svg+xml`,
        hdr: `application/octet-stream`,
        m4a: `audio/mp4`,
        woff2: `font/woff2`,
        wasm: `application/wasm`,
        js: `text/javascript`
    },
    Ei = e => Ti[e.slice(e.lastIndexOf(`.`) + 1).toLowerCase()] ? ? `application/octet-stream`;

function Di(e) {
    return /\.(glb|gltf|pack|bin)$|\/draco\//.test(e) ? `models` : /\.(webp|png|jpe?g|hdr|svg|ktx2|basis)$/.test(e) ? `textures` : /\.(m4a|mp3|ogg|wav)$/.test(e) ? `audio` : /\.(woff2?|ttf|otf)$/.test(e) ? `fonts` : `data`
}
var Oi = e => new Promise(t => setTimeout(t, e)),
    ki = [],
    Ai = null;

function ji(e) {
    return Ai || (Ai = new MessageChannel, Ai.port1.onmessage = () => ki.shift() ? .()), new Promise(t => {
        ki.push(() => t(e)), Ai.port2.postMessage(0)
    })
}
var Mi = `iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAEklEQVR4nGNoaGj4j4wZSBcAAEKHJ/GaxCLSAAAAAElFTkSuQmCC`,
    Ni = `q0tUWCAyMLsNChoKKwAAAAEAAAAEAAAABAAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAaAAAAFwAAADEAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADkAAAAAAAAAEAAAAAAAAAAQAAAAAAAAABcAAAAAAAAAAIAWAABAQIAAAAAAAQAAAAAAAAAAAAHAAAAAAAAAAAA/wAAAAgABwEAAAAAAAAAAP8AAAAQAAcCAAAAAAAAAAD/AAAAGAAHHwAAAAAAAAAA/wAAABsAAABLVFh3cml0ZXIAS1RYLVBhcnNlIHYxLjEuMAAAgICA/4CAgP+AgID/gICA/4CAgP+AgID/gICA/4CAgP+AgID/gICA/4CAgP+AgID/gICA/4CAgP+AgID/gICA/w==`,
    Pi = new Map,
    Fi = e => {
        let t = e.endsWith(`.ktx2`),
            n = Pi.get(t ? `ktx2` : `png`);
        return n || Pi.set(t ? `ktx2` : `png`, n = new Blob([Uint8Array.from(atob(t ? Ni : Mi), e => e.charCodeAt(0))], {
            type: t ? `image/ktx2` : `image/png`
        })), n
    },
    Ii = class extends Error {
        status;
        constructor(e) {
            super(`HTTP ${e}`), this.status = e
        }
    },
    Li = class {
        base;
        concurrency;
        entries = new Map;
        queue = [];
        active = 0;
        errors = [];
        misses = [];
        sealed = !1;
        placeholder = null;
        placeholders = [];
        bytesIn = 0;
        firstByteAt = 0;
        listeners = new Set;
        emitAt = 0;
        emitTimer = 0;
        origFetch;
        genPrefix;
        constructor(e, t = 6) {
            this.base = e, this.concurrency = t, this.origFetch = window.fetch.bind(window), this.genPrefix = new URL(e + `gen/`, location.href).href
        }
        onChange(e) {
            return this.listeners.add(e), () => this.listeners.delete(e)
        }
        emit(e = !1) {
            if (e || performance.now() - this.emitAt > 50) {
                this.emitAt = performance.now(), clearTimeout(this.emitTimer), this.emitTimer = 0;
                for (let e of this.listeners) e()
            } else this.emitTimer || = window.setTimeout(() => this.emit(!0), 50)
        }
        abs(e) {
            return new URL(/^(https?:|blob:|data:|\/)/.test(e) ? e : this.base + e, location.href).href
        }
        get(e) {
            return this.entries.get(this.abs(e))
        }
        add(e, t = {}) {
            let n = [];
            for (let r of e) {
                let e = this.abs(r.path);
                if (this.entries.has(e)) continue;
                let i, a = new Promise(e => {
                        i = e
                    }),
                    o = { ...r,
                        url: e,
                        state: `queued`,
                        received: 0,
                        blob: null,
                        attempts: 0,
                        used: !1,
                        extra: !!t.extra,
                        t0: 0,
                        t1: 0,
                        done: a,
                        resolve: i
                    };
                this.entries.set(e, o), n.push(o)
            }
            t.front ? this.queue.unshift(...n) : this.queue.push(...n), this.pump(), this.emit(!0)
        }
        blob(e) {
            if (e.used = !0, e.state === `queued`) {
                let t = this.queue.indexOf(e);
                t >= 0 && this.queue.splice(t, 1), this.start(e)
            }
            return e.done
        }
        whenStation(e, t) {
            return Promise.all([...this.entries.values()].filter(n => n.station === e && (!t || t(n))).map(e => e.done))
        }
        whenFiles(e) {
            return Promise.all([...this.entries.values()].filter(e).map(e => e.done))
        }
        reorder(e) {
            this.queue.sort((t, n) => e(t) - e(n))
        }
        drop(e) {
            let t = this.queue.filter(t => t.state === `queued` && e(t));
            if (!t.length) return t;
            this.queue = this.queue.filter(e => !t.includes(e));
            for (let e of t) this.entries.delete(e.url), e.resolve(null);
            return this.emit(!0), t
        }
        rate() {
            let e = performance.now() - this.firstByteAt;
            return this.firstByteAt && e > 0 ? this.bytesIn / (e / 1e3) : 0
        }
        whenAll() {
            return Promise.all([...this.entries.values()].map(e => e.done))
        }
        objectURL(e) {
            let t = this.get(e);
            return !t || !t.blob ? null : (t.used = !0, t.objectURL ? ? = URL.createObjectURL(t.blob))
        }
        held = !1;
        hold(e) {
            this.held = e, e || this.pump()
        }
        gate = null;
        setGate(e) {
            this.gate = e, this.pump()
        }
        pump() {
            for (; !this.held && this.active < this.concurrency;) {
                let e = this.gate ? this.queue.findIndex(this.gate) : this.queue.length ? 0 : -1;
                if (e < 0) break;
                this.start(this.queue.splice(e, 1)[0])
            }
        }
        start(e) {
            e.state === `queued` && (e.state = `loading`, e.t0 = performance.now(), this.active++, this.download(e).then(t => {
                e.blob = t, e.state = t ? `done` : `failed`, e.t1 = performance.now(), e.resolve(t)
            }).finally(() => {
                this.active--, this.pump(), this.emit(!0)
            }))
        }
        async download(e) {
            for (let t = 1;; t++) {
                e.attempts = t, e.received = 0;
                let n = new AbortController,
                    r = window.setTimeout(() => n.abort(), wi),
                    i = performance.now(),
                    a = () => {
                        let e = performance.now();
                        e - i < 500 || (i = e, clearTimeout(r), r = window.setTimeout(() => n.abort(), wi))
                    };
                try {
                    let t = await this.origFetch(e.url, {
                        signal: n.signal,
                        credentials: `same-origin`
                    });
                    if (!t.ok) throw new Ii(t.status);
                    let i = (t.headers.get(`content-type`) || ``).split(`;`)[0] || Ei(e.path),
                        o;
                    if (t.body && typeof t.body.getReader == `function`) {
                        let n = t.body.getReader(),
                            r = [];
                        for (;;) {
                            let {
                                done: t,
                                value: i
                            } = await n.read();
                            if (t) break;
                            r.push(i), e.received += i.byteLength, this.firstByteAt || = performance.now(), this.bytesIn += i.byteLength, a(), this.emit()
                        }
                        o = new Blob(r, {
                            type: Ei(e.path) === `image/svg+xml` ? `image/svg+xml` : i
                        })
                    } else o = await t.blob(), e.received = o.size, this.firstByteAt || = performance.now(), this.bytesIn += o.size;
                    return clearTimeout(r), o
                } catch (i) {
                    clearTimeout(r);
                    let a = i instanceof Ii ? i.status : 0,
                        o = a ? `${a}` : n.signal.aborted ? `stalled` : `network`,
                        s = a === 404 || a === 403 || a === 410,
                        c = t >= (s ? Ci : Si),
                        l = c ? 0 : Math.round(Math.min(8e3, 500 * 2 ** (t - 1)) * (.8 + .4 * Math.random()));
                    if (this.errors.push({
                            t: performance.now(),
                            path: e.path,
                            what: o,
                            attempt: t,
                            retryIn: l,
                            final: c
                        }), console.warn(`[store] ${e.path}: ${o}${c?` — giving up (its station will fetch it itself)`:` — retrying in ${(l/1e3).toFixed(1)} s (${t}/${s?Ci:Si})`}`), e.received = 0, this.emit(!0), c) return null;
                    await Oi(l)
                }
            }
        }
        seal() {
            this.sealed = !0
        }
        installFetch() {
            let e = this,
                t = this.origFetch;
            window.fetch = function(n, r) {
                try {
                    let i = (r ? .method ? ? (n instanceof Request ? n.method : `GET`)).toUpperCase(),
                        a = typeof n == `string` ? n : n instanceof URL ? n.href : n.url;
                    if (i === `GET` && !a.startsWith(`blob:`) && !a.startsWith(`data:`)) {
                        let i = e.abs(a),
                            o = e.entries.get(i);
                        if (!o && i.startsWith(e.genPrefix) && !e.sealed && !i.includes(`?`)) {
                            let t = i.slice(e.genPrefix.length - 4);
                            e.add([{
                                path: t,
                                bytes: 0,
                                kind: Di(t),
                                station: `extra`
                            }], {
                                extra: !0,
                                front: !0
                            }), o = e.entries.get(i)
                        }
                        if (o && o.state !== `done` && o.state !== `failed` && e.placeholder ? .(o)) {
                            e.placeholders.includes(o.path) || e.placeholders.push(o.path);
                            let t = Fi(o.path);
                            return ji(new Response(t, {
                                status: 200,
                                statusText: `OK`,
                                headers: {
                                    "Content-Type": t.type,
                                    "Content-Length": String(t.size)
                                }
                            }))
                        }
                        if (o && o.state !== `failed`) {
                            let i = o;
                            return e.blob(i).then(ji).then(e => e ? new Response(e, {
                                status: 200,
                                statusText: `OK`,
                                headers: {
                                    "Content-Type": e.type || Ei(i.path),
                                    "Content-Length": String(e.size)
                                }
                            }) : t(n, r))
                        }!o && i.startsWith(e.genPrefix) && e.miss(i)
                    }
                } catch {}
                return t(n, r)
            }
        }
        miss(e) {
            let t = e.slice(this.genPrefix.length - 4);
            this.sealed && (this.misses.includes(t) || this.misses.push(t))
        }
        totals(e) {
            let t = Object.fromEntries(xi.map(e => [e, {
                items: 0,
                done: 0,
                bytes: 0,
                received: 0,
                failed: 0
            }]));
            for (let n of this.entries.values()) {
                if (e && !e(n)) continue;
                let r = t[n.kind] ? ? t.data;
                r.items++, n.state === `done` ? (r.done++, r.bytes += n.blob.size, r.received += n.blob.size) : n.state === `failed` ? (r.failed++, r.done++, r.bytes += n.bytes) : (r.bytes += n.bytes, r.received += n.received)
            }
            return t
        }
        heldBytes() {
            let e = 0;
            for (let t of this.entries.values()) e += t.blob ? .size ? ? 0;
            return e
        }
    },
    Ri = +(C.get(`loadbudget`) ? ? 5) || 5,
    zi = Math.max(1, Math.min(8, +(C.get(`loadpar`) ? ? 2) || 2)),
    Bi = C.get(`handoff`) === `1`,
    Vi = C.get(`realpool`) === `1`,
    Hi = (e => e === `slow` || e === `full` ? e : `auto`)(C.get(`loadmode`)),
    Ui = +(C.get(`slowafter`) ? ? 30) || 30,
    Wi = () => new Promise(e => requestAnimationFrame(() => e())),
    Gi = [`400 16px elevon`, `800 16px elevon`, `600 16px proxima-nova`, `700 16px proxima-nova`, `400 16px VT323`],
    $ = new class {
        enabled = C.get(`load`) === `1` || C.get(`load`) !== `0` && !C.has(`at`);
        phase = `idle`;
        marks = {};
        store = null;
        code = {
            items: 0,
            done: 0
        };
        fonts = {
            items: 0,
            done: 0,
            failed: 0
        };
        audio = {
            requested: 0,
            done: 0,
            samples: 0
        };
        audioWanted = 0;
        stations = [];
        profile = {
            backend: ``,
            tier: `high`,
            lod: `high`,
            halfArt: !1,
            decompress: !0,
            ktx2: !1
        };
        mode = `full`;
        rate = 0;
        waited = null;
        check = {
            unpredicted: [],
            unused: []
        };
        version = 0;
        listeners = new Set;
        readyFns = new Set;
        stationReadyFns = new Map;
        stationReadySeen = new Set;
        get ready() {
            return this.phase === `ready`
        }
        onChange(e) {
            return this.listeners.add(e), () => this.listeners.delete(e)
        }
        onReady(e) {
            return this.ready ? e() : this.readyFns.add(e), () => this.readyFns.delete(e)
        }
        whenReady() {
            return new Promise(e => this.onReady(e))
        }
        bump() {
            this.version++;
            for (let e of this.listeners) e()
        }
        mark(e) {
            this.marks[e] === void 0 && (this.marks[e] = performance.now(), e === `terminal` && this.onTerminal ? .(), this.bump())
        }
        onTerminal = null;
        stationReady(e) {
            this.stationReadySeen.add(e), this.stationReadyFns.get(e) ? .(), this.stationReadyFns.delete(e)
        }
        whenStationReady(e) {
            return this.stationReadySeen.has(e) ? Promise.resolve() : new Promise(t => this.stationReadyFns.set(e, t))
        }
        async run(e) {
            let {
                director: t,
                audio: n,
                story: r
            } = e;
            if (!this.enabled) {
                this.phase = `ready`, this.finish();
                return
            }
            this.phase = `loading`, this.mark(`start`), re(Ri, C.get(`loadasync`) !== `1`), document.documentElement.dataset.loading = `loading`;
            let i = e.assets.funkunLod(e.tier);
            this.profile = {
                backend: e.backend,
                tier: e.tier,
                lod: i,
                halfArt: e.assets.halfArt,
                decompress: typeof DecompressionStream < `u`,
                ktx2: e.assets.ktx2On
            };
            let a = this.profile,
                o = (t, n) => !t || (!t.tier || t.tier.includes(a.tier)) && (t.lod === void 0 || t.lod === a.lod) && (t.decompress === void 0 || t.decompress === a.decompress) && (t.halfArt === void 0 || t.halfArt === e.assets.halfFor(n)) && (t.ktx2 === void 0 || t.ktx2 === a.ktx2),
                s = new Li(e.base);
            this.store = s, s.installFetch(), s.hold(!0), Promise.race([Promise.all([r[e.entry].module(), document.fonts.load(`40px VT323`)]), new Promise(e => setTimeout(e, 4e3))]).catch(() => {}).then(() => s.hold(!1)), e.assets.store = s, s.onChange(() => this.bump()), s.add(k.files.filter(e => o(e.w, e.p)).map(e => ({
                path: e.p,
                bytes: e.b,
                kind: xi.includes(e.k) ? e.k : `data`,
                station: e.s,
                late: !!e.l
            })));
            let c = s.whenAll().then(() => this.mark(`files`)),
                l = new Set([r[e.entry] ? .id, r[e.entry + 1] ? .id]),
                u = e => l.has(e.station) || e.extra,
                d = () => {
                    if (this.mode === `slow`) return;
                    this.mode = `slow`, this.waited = u;
                    let e = new Map(k.files.map(e => [e.p, e])),
                        t = t => (t.endsWith(`.ktx2.glb`) ? [t.slice(0, -9) + `.glb`] : [`.webp`, `.png`, `.jpg`].map(e => t.slice(0, -5) + e)).map(t => e.get(t)).find(Boolean),
                        n = [];
                    for (let e of s.drop(e => e.path.endsWith(`.ktx2.glb`) || e.path.endsWith(`.ktx2`) && u(e))) {
                        let r = t(e.path);
                        r && n.push({
                            path: r.p,
                            bytes: r.b,
                            kind: xi.includes(r.k) ? r.k : `data`,
                            station: r.s,
                            late: !!r.l
                        })
                    }
                    n.length && s.add(n);
                    let i = [...s.entries.values()],
                        a = r.find(e => i.some(t => t.station === e.id && /\.ktx2(\.glb)?$/.test(t.path))) ? .id;
                    a && s.add(s.drop(e => e.path.startsWith(`gen/basis/`)).map(e => ({
                        path: e.path,
                        bytes: e.bytes,
                        kind: e.kind,
                        station: a,
                        late: e.late
                    }))), s.reorder(e => +!u(e)), s.setGate(u), s.placeholder = e => this.phase === `loading` && e.kind === `textures` && !u(e) && !/\.(basis|hdr|svg)$/.test(e.path), this.mark(`slow`)
                },
                f = Promise.resolve();
            Hi === `slow` ? d() : Hi === `auto` && (s.setGate(e => !e.path.startsWith(`gen/basis/`) && !/\.ktx2(\.glb)?$/.test(e.path)), f = this.measure(s, r[e.entry].id).then(e => {
                e ? d() : s.setGate(null)
            })), this.code.items = r.length;
            let p = Promise.all(r.map(e => e.module().then(() => {
                this.code.done++, this.bump()
            }, t => {
                this.code.done++, console.warn(`[loader] module ${e.id}`, t)
            }))).then(() => this.mark(`code`));
            this.fonts.items = Gi.length;
            let m = Promise.all(Gi.map(e => Promise.race([document.fonts.load(e, `FUNTECH`), new Promise(e => setTimeout(e, 1e4))]).then(e => {
                this.fonts.done++, (!Array.isArray(e) || !e.length) && this.fonts.failed++, this.bump()
            }, () => {
                this.fonts.done++, this.fonts.failed++, this.bump()
            }))).then(() => this.mark(`fonts`));
            this.audio = n.decodes, n.onDecode(() => this.bump()), C.get(`audioprep`) !== `0` && (this.onTerminal = () => {
                let e = globalThis.scheduler;
                e ? .postTask ? e.postTask(() => n.prepare(), {
                    priority: `user-blocking`
                }).catch(() => {}) : setTimeout(() => n.prepare(), 0)
            });
            let h = C.get(`audiores`) !== `0`;
            h && n.pin([`ui_click`, `ui_hover`, `ui_confirm`]);
            let g = h ? Promise.resolve() : n.decodeAll().then(() => this.mark(`audio`), () => this.mark(`audio`));
            se(() => this.bump()), ci(() => this.bump()), this.stations = r.map((n, r) => ({
                id: n.id,
                chapter: n.chapter,
                mode: this.modeFor(r, e.entry, t),
                state: `waiting`,
                t0: 0,
                t1: 0,
                frames: 0,
                streamed: 0
            }));
            let _ = new Map,
                v = new Set,
                y = e => {
                    let t = _.get(e);
                    t && (_.delete(e), t())
                },
                b = async i => {
                    let a = this.stations[i];
                    if (i > e.entry + 1 && (await f, a.mode = this.modeFor(i, e.entry, t)), a.mode === `skip`) {
                        a.state = `skipped`, v.add(i), y(i - 1);
                        return
                    }
                    await this.startSlot(), a.t0 = performance.now();
                    try {
                        if (a.state = `files`, this.bump(), this.waited && a.mode === `stand-in` || await s.whenStation(r[i].id), a.state = `building`, this.bump(), a.mode === `real`) t.ensure(i, {
                            asleep: t.persistent && !t.resident(i, e.entry)
                        }), r[i].id === `boot` && await this.whenStationReady(`boot`), await t.whenLoaded(i);
                        else {
                            let e = await t.precompile(i, {
                                keep: Bi,
                                loaded: () => {
                                    v.add(i), y(i - 1)
                                },
                                streamed: C.get(`loadstream`) === `1`
                            });
                            e && (a.frames = e.frames, a.streamed = e.streamed), e ? .release && (_.set(i, e.release), (this.stations[i + 1] ? .mode !== `stand-in` || v.has(i + 1)) && y(i))
                        }
                        a.state = t.slots[i].state === `error` ? `error` : `done`
                    } catch (e) {
                        console.warn(`[loader] ${r[i].id}: stand-in failed — it compiles when the chain loads it`, e), a.state = `error`
                    } finally {
                        v.add(i), y(i - 1), a.t1 = performance.now(), this.mark(r[i].id), h && a.mode === `real` && this.stations.every(e => e.mode !== `real` || e.state === `done` || e.state === `error`) && n.idle().then(() => this.mark(`audio`))
                    }
                },
                x = t => Vi || t !== e.entry && t !== e.entry + 1,
                S = r.map((e, t) => t).filter(x),
                w = 0;
            await Promise.all([...r.map((e, t) => t).filter(e => !x(e)).map(e => b(e)), ...Array.from({
                length: zi
            }, async () => {
                for (; w < S.length;) await b(S[w++])
            })]);
            for (let e of [..._.keys()]) y(e);
            this.mark(`stations`), await Promise.all([p, m, g, this.waited ? s.whenFiles(u) : c]), h && (await n.idle(), this.mark(`audio`)), this.finish()
        }
        lastStart = -1;
        async startSlot() {
            for (;;) {
                await Wi();
                let e = document.timeline ? .currentTime ? ? performance.now();
                if (e !== this.lastStart) {
                    this.lastStart = e;
                    return
                }
            }
        }
        async measure(e, t) {
            if (navigator.connection ? .saveData) return !0;
            await new Promise(n => {
                let r = () => {},
                    i = () => {
                        r(), n()
                    };
                r = e.onChange(() => {
                    e.bytesIn >= 1 << 20 && i()
                }), Promise.race([e.whenStation(t), e.whenAll()]).then(i)
            }), this.rate = e.rate(), this.mark(`measured`);
            let n = 0;
            for (let t of e.entries.values()) n += t.blob ? .size ? ? t.bytes;
            return this.rate > 0 && n / this.rate > Ui
        }
        stationFiles(e) {
            if (!this.store) return null;
            let t = 0,
                n = 0,
                r = !1;
            for (let i of this.store.entries.values()) i.station === e && (n += i.blob ? .size ? ? i.bytes, t += i.blob ? .size ? ? i.received, (i.state === `queued` || i.state === `loading`) && (r = !0));
            return r ? {
                received: t,
                bytes: n
            } : null
        }
        modeFor(e, t, n) {
            return e === t || e === t + 1 || this.mode === `full` && n.resident(e, t) || this.mode === `full` && n.persistent && e > 0 || n.slots[e] ? .state !== `idle` ? `real` : e === 0 ? `skip` : `stand-in`
        }
        finish() {
            if (re(1), this.enabled && C.get(`heavyasync`) === `1` && ne(!0), this.store) {
                if (this.store.placeholder = null, this.store.setGate(null), this.mode === `slow`) {
                    let e = this.store;
                    e.whenAll().then(() => e.seal())
                } else this.store.seal()
            }
            if (this.enabled && li(), this.phase = `ready`, this.mark(`ready`), this.store) {
                let e = [...this.store.entries.values()],
                    t = new Set(this.stations.filter(e => e.mode === `skip`).map(e => e.id)),
                    n = e => e.kind === `audio` && C.get(`audiores`) !== `0` || !!this.waited && !this.waited(e);
                this.check = {
                    unpredicted: e.filter(e => e.extra).map(e => e.path),
                    unused: e.filter(e => !e.used && !e.extra && !e.late && !n(e) && !t.has(e.station)).map(e => e.path)
                }
            }
            document.documentElement.dataset.loading = `ready`;
            for (let e of this.readyFns) e();
            this.readyFns.clear(), window.dispatchEvent(new Event(`site:ready`)), this.bump()
        }
        items() {
            let e = [];
            if (!this.enabled || this.phase === `idle`) return e;
            let t = this.marks.start ? ? 0,
                n = this.store;
            if (e.push({
                    key: `code`,
                    label: `loading code`,
                    n: this.code.done,
                    total: this.code.items,
                    done: this.code.done >= this.code.items,
                    t
                }), n) {
                let r = n.totals();
                for (let n of xi) {
                    let i = r[n];
                    if (i.items || n === `fonts`) {
                        if (n === `fonts`) {
                            let n = i.done + this.fonts.done,
                                r = i.items + this.fonts.items;
                            e.push({
                                key: `dl:fonts`,
                                label: `loading fonts`,
                                n,
                                total: r,
                                bytes: i.received,
                                totalBytes: i.bytes,
                                done: n >= r,
                                t
                            });
                            continue
                        }
                        e.push({
                            key: `dl:${n}`,
                            label: `loading ${n}`,
                            n: i.done,
                            total: i.items,
                            bytes: i.received,
                            totalBytes: i.bytes,
                            done: i.done >= i.items,
                            t
                        })
                    }
                }
                this.mode === `slow` && e.push({
                    key: `slow`,
                    label: this.rate ? `link ${(this.rate/1e6).toFixed(1)} MB/s: slow mode` : `slow mode`,
                    done: !0,
                    t: this.marks.slow ? ? t
                })
            }
            this.audio.requested && e.push({
                key: `decode`,
                label: `decoding audio`,
                n: this.audio.done,
                total: Math.max(this.audio.requested, this.audioWanted),
                done: this.marks.audio !== void 0,
                t: t + 1
            });
            let r = this.stations.filter(e => e.t0 > 0);
            r.length && e.push({
                key: `pipes`,
                label: `compiling shaders`,
                n: j.compiled,
                total: Math.max(j.requested, j.compiled),
                done: this.marks.stations !== void 0,
                t: Math.min(...r.map(e => e.t0))
            });
            for (let t of this.stations) {
                if (t.state === `waiting` || t.state === `skipped`) continue;
                let n = t.chapter.split(` `).pop().toUpperCase(),
                    r = t.mode === `real` ? `warming ${n}` : `building [${n}]`;
                e.push({
                    key: `st:${t.id}`,
                    label: r,
                    done: t.state === `done` || t.state === `error`,
                    err: t.state === `error`,
                    t: t.t0
                })
            }
            return n && n.errors.forEach((t, n) => e.push({
                key: `err:${n}`,
                label: `ERR ${t.path.replace(/^gen\//,``)} ${t.what}${t.final?` — skipped`:` — retrying (${t.attempt})`}`,
                done: !0,
                err: !0,
                t: t.t
            })), e
        }
        fraction() {
            if (this.ready) return 1;
            let e = this.store,
                t = this.waited,
                n = 0,
                r = 0;
            if (e)
                for (let i of Object.values(e.totals(t ? ? void 0))) n += i.bytes, r += i.received;
            let i = this.stations.filter(e => e.mode !== `skip`),
                a = i.filter(e => e.state === `done` || e.state === `error`).length,
                o = (this.code.done / Math.max(1, this.code.items) + this.fonts.done / Math.max(1, this.fonts.items) + (this.marks.audio === void 0 ? this.audio.done / Math.max(1, this.audio.requested) : 1)) / 3;
            return Math.min(.99, .6 * (n ? r / n : 0) + .3 * (i.length ? a / i.length : 0) + .1 * o)
        }
        snapshot() {
            let e = this.store,
                t = e ? .totals(),
                n = e => this.marks[e] === void 0 ? null : Math.round(this.marks[e]);
            return {
                enabled: this.enabled,
                phase: this.phase,
                profile: this.profile,
                mode: this.mode,
                rateMBps: +(this.rate / 1e6).toFixed(2),
                placeholders: e ? .placeholders.slice() ? ? [],
                marks: Object.fromEntries(Object.keys(this.marks).map(e => [e, n(e)])),
                files: t ? Object.fromEntries(Object.entries(t)) : null,
                bytesHeld: e ? .heldBytes() ? ? 0,
                errors: e ? .errors.map(e => ({ ...e,
                    t: Math.round(e.t)
                })) ? ? [],
                misses: e ? .misses ? ? [],
                check: this.check,
                code: this.code,
                fonts: this.fonts,
                audio: { ...this.audio
                },
                stations: this.stations.map(e => ({
                    id: e.id,
                    mode: e.mode,
                    state: e.state,
                    ms: e.t1 ? Math.round(e.t1 - e.t0) : null,
                    t0: Math.round(e.t0),
                    frames: e.frames,
                    streamed: e.streamed
                })),
                pipelines: { ...si(),
                    afterReady: { ...si().afterReady,
                        what: si().afterReady.what.slice(0, 50)
                    }
                },
                warm: { ...j,
                    heavy: te()
                }
            }
        }
    },
    Ki = `./`,
    qi = .5,
    Ji = C.get(`audiores`) !== `0`;
async function Yi() {
    let e = N(`gl`),
        t = new Fe(e),
        n = new T,
        r = new Ue(n, Ki),
        i = new Sr(t, r, F, De),
        a;
    try {
        a = await Me(e, {
            forceWebGL: C.get(`gl`) === `1`
        })
    } catch (e) {
        let t = String(e ? .message ? ? e),
            n = e => e ? z(`あり`, `yes`) : z(`なし`, `no`);
        i.fallback(t === `NO_GPU` ? `${z(`検出結果`,`Detected`)}: WebGPU ${n(Oe())} / WebGL2 ${n(ke())}` : `${z(`初期化エラー`,`Initialization error`)}: ${t}`), t === `NO_GPU` ? console.info(`[site] neither WebGPU nor WebGL2 — showing the fallback message`) : console.error(`[site] renderer failed`, e);
        return
    }
    let {
        renderer: o,
        backend: s
    } = a, c = await ot(o, s);
    bi(o), document.documentElement.dataset.backend = s;
    let l = new rt(o, s, Ne(a), c);
    l.resize(t.info.cssW, t.info.cssH), document.documentElement.dataset.tier = l.tier, l.onTier(e => {
        document.documentElement.dataset.tier = e.tier
    });
    let u = new Ve(t),
        d = new ee(o, Ki, () => l.tier),
        f = new jr(o),
        p = x(),
        m = new Map,
        h = new Map,
        _;
    _ = new ai(F, {
        renderer: o,
        ctxFor(e, a) {
            let c = m.get(e.id);
            if (!c) {
                let f = F.indexOf(e);
                c = {
                    renderer: o,
                    backend: s,
                    assets: d,
                    audio: Ji ? r.scope(e.id) : r,
                    clock: n,
                    stage: t,
                    input: u,
                    perf: l,
                    ui: i,
                    layer: a,
                    params: C,
                    reducedMotion: p,
                    gate: t => {
                        t ? h.set(e.id, t) : h.delete(e.id), _.gate(f, t)
                    },
                    advance: () => {
                        _.advance(f)
                    },
                    restart: () => _.restart()
                }, m.set(e.id, c)
            }
            return c.layer = a, c
        },
        onFocus(e, t) {
            r.setStation(e.loop ? ? e.id);
            let n = F[t + 1];
            n && (Ji ? r.scope(n.id) : r).preload(n.loop ? ? n.id)
        },
        onStation(e, t, n) {
            Ji && (t === `load` ? (n ? .asleep && r.sleepScope(e.id), r.scope(e.id).preload(e.loop ? ? e.id)) : t === `sleep` ? r.sleepScope(e.id) : t === `wake` ? r.wakeScope(e.id) : r.release(e.id))
        },
        standIn: e => ({ ...e,
            audio: r.silent()
        }),
        onLoadState(e) {
            l.paused = e, l.restart(e ? 1 : 1.5)
        },
        lookahead: () => l.tier !== `low`,
        canPreload: () => $.ready,
        serialLookahead: () => $.enabled && $.ready
    }, N(`station-layer`), f), i.onGate = () => {
        _.advance(_.at)
    }, i.onLogo = () => {
        _.restart()
    }, t.onChange(e => {
        l.resize(e.cssW, e.cssH);
        for (let t of _.slots) t.visible && t.station && t.station.layout(e)
    });
    let v = C.get(`at`),
        y = v ? _.indexOf(v) : -1;
    y > 0 && _.jumpTo(y), $.run({
        director: _,
        audio: r,
        assets: d,
        renderer: o,
        story: F,
        base: Ki,
        backend: s,
        tier: l.tier,
        entry: Math.max(0, y)
    }).catch(e => console.error(`[loader] the loading phase failed`, e)), y > 0 && $.enabled && (_.hold = !0, $.onReady(() => {
        _.hold = !1
    })), _.ensure(Math.max(0, y));
    let b = new D,
        S = performance.now(),
        w = ``,
        E = $.enabled ? `off` : `light`;
    i.setHud(E), document.addEventListener(`visibilitychange`, () => {
        r.visibility(document.hidden), S = performance.now()
    }), i.onReel = e => {
        e ? (o.setAnimationLoop(null), r.suspend(!0)) : (S = performance.now(), o.setAnimationLoop(O), r.suspend(!1))
    };
    let O = () => {
        let r = performance.now(),
            a = (r - S) / 1e3;
        S = r;
        let s = g(a, .001, .05);
        t.sync(), u.frame(s);
        let c = n.now(),
            d = _.frame,
            p = d.transition,
            m = $.ready ? p ? `${p.from}+${p.to}` : `${d.at}` : `loading`;
        m !== w && (w = m, $.ready ? l.moment(F[p ? p.from : d.at].id, p ? F[p.to].id : void 0) : l.moment(``)), o.getDrawingBufferSize(b), f.resize(b.x, b.y), f.prewarm();
        let h = _.update(s, c, u);
        _.render(c);
        let v = _.current;
        i.setLogo((!$.enabled || $.ready) && (h.at > 0 || h.goal > 0));
        let y = h.transition,
            x = v ? v.hud ? .() ? ? `light` : y ? (e => {
                let t = _.slots[e] ? .station;
                return t ? t.hud ? .() ? ? `light` : void 0
            })(y.p < .5 ? y.from : y.to) : void 0;
        x && x !== `keep` && (E = x), i.setHud(E);
        let C = _.settledFor(),
            T = _.gateView();
        i.setGate(T);
        let ee = v && C > qi && !T ? .cleared ? v.hints ? .() ? ? null : null;
        i.setHints(ee);
        let D = h.waiting ? _.waitingFor() : null,
            O = D && D.stage !== `warm` ? $.stationFiles(D.id) : null,
            k = e => (e / 1048576).toFixed(1);
        i.loading(h.waiting ? _.hold ? `loading ${Math.round($.fraction()*100)}% ...` : D ? `${D.stage===`warm`?`warming`:`loading`} ${D.chapter.split(` `).pop()}${O?` ${k(O.received)}/${k(O.bytes)} MB`:``} ...` : `loading ...` : null), e.style.cursor = v ? .cursor ? .() ? ? `default`, l.stats.stations = `G ${_.G.toFixed(2)}  at ${_.slots[h.at].spec.id}${h.transition?` → ${_.slots[h.transition.to].spec.id} ${(h.transition.p*100).toFixed(0)}%`:``}${h.goal!==h.at&&!h.transition?` → ${_.slots[h.goal].spec.id}`:``}${T?.cleared?`  cleared`:``}  loaded [${_.loaded().join(` `)}]`, l.frame(a, performance.now() - r, !h.transition)
    };
    o.setAnimationLoop(O);
    let k = {
        gates: h,
        director: _,
        stage: t,
        audio: r,
        perf: l,
        renderer: o,
        input: u,
        compositor: f,
        clock: n,
        backend: s,
        ui: i,
        STORY: F,
        pipelines: () => ({ ...si(),
            afterReady: { ...si().afterReady
            }
        }),
        load: () => $.snapshot(),
        loader: $,
        advance: () => _.advance(_.at),
        goTo: e => {
            let t = typeof e == `number` ? e : _.indexOf(e);
            return t >= 0 && _.goTo(t), t
        },
        restart: () => _.restart(),
        state: () => {
            let e = _.frame,
                t = _.gateView();
            return {
                at: F[e.at].id,
                atIndex: e.at,
                goal: F[e.goal].id,
                settled: e.settled,
                waiting: e.waiting,
                transition: e.transition ? {
                    from: F[e.transition.from].id,
                    to: F[e.transition.to].id,
                    p: +e.transition.p.toFixed(3),
                    name: e.transition.name
                } : null,
                gate: t ? {
                    kind: t.state.kind,
                    text: t.state.text,
                    progress: t.state.progress,
                    count: t.state.count ? ? null,
                    cleared: t.cleared,
                    fallback: t.fallback,
                    button: t.button
                } : null,
                loaded: _.loaded()
            }
        },
        tick: O,
        pause: () => o.setAnimationLoop(null),
        resume: () => {
            S = performance.now(), o.setAnimationLoop(O)
        }
    };
    Object.defineProperty(k, "lenis", {
        enumerable: !1,
        get() {
            throw Error(`[site] there is no scroll navigation any more (transition actions): use window.__site.advance() / goTo(id) / state() — README §7`)
        }
    }), Object.assign(window, {
        __site: k
    })
}
Yi().catch(e => {
    console.error(`[site] fatal`, e)
});
export {
    dr as a, mt as c, Ke as d, P as f, Ar as i, z as l, Xr as n, ft as o, kr as r, yt as s, $ as t, ht as u
};