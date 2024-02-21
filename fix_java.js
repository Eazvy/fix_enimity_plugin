function r(o) {
    window.enmity.plugins.registerPlugin(o)
}
const a = {
    byProps: (...o) => window.enmity.modules.filters.byProps(...o),
    byName: (o, m) => window.enmity.modules.filters.byName(o, m),
    byTypeName: (o, m) => window.enmity.modules.filters.byTypeName(o, m),
    byDisplayName: (o, m) => window.enmity.modules.filters.byDisplayName(o, m)
};

function u(...o) {
    return window.enmity.modules.bulk(...o)
}

function y(...o) {
    return window.enmity.modules.getByProps(...o)
}
window.enmity.modules.common, window.enmity.modules.common.Constants, window.enmity.modules.common.Clipboard, window.enmity.modules.common.Assets;
const p = window.enmity.modules.common.Messages;
window.enmity.modules.common.Clyde, window.enmity.modules.common.Avatars, window.enmity.modules.common.Native, window.enmity.modules.common.React, window.enmity.modules.common.Dispatcher, window.enmity.modules.common.Storage, window.enmity.modules.common.Toasts, window.enmity.modules.common.Dialog, window.enmity.modules.common.Token, window.enmity.modules.common.REST, window.enmity.modules.common.Settings, window.enmity.modules.common.Users, window.enmity.modules.common.Navigation, window.enmity.modules.common.NavigationNative, window.enmity.modules.common.NavigationStack, window.enmity.modules.common.Theme, window.enmity.modules.common.Linking, window.enmity.modules.common.StyleSheet, window.enmity.modules.common.ColorMap, window.enmity.modules.common.Components, window.enmity.modules.common.Locale, window.enmity.modules.common.Profiles, window.enmity.modules.common.Lodash, window.enmity.modules.common.Logger, window.enmity.modules.common.Flux, window.enmity.modules.common.SVG, window.enmity.modules.common.Scenes;

function g(o) {
    return window.enmity.patcher.create(o)
}
var h = "Freemoji",
    f = "Send external emoji without Nitro as image links",
    v = "2.0.2",
    S = "#f9a418",
    b = [{
        name: "colin273",
        id: "690213339862794285"
    }],
    N = {
        name: h,
        description: f,
        version: v,
        color: S,
        authors: b
    };
const i = g("freemoji"),
    [l, {
        getChannel: E
    }] = u(a.byProps("openLazy", "hideActionSheet"), a.byProps("getChannel")),
    t = y("canUseEmojisEverywhere", "canUseAnimatedEmojis", {
        defaultExport: !1
    }),
    j = {
        ...N,
        onStart() {
            let o = !0;
            i.before(l, "openLazy", (m, [, s, {
                pickerIntention: n
            }]) => {
                switch (s) {
                    case "EmojiPickerActionSheet":
                        if (n !== 0) break;
                    case "MessageLongPressActionSheet":
                        o = !1
                }
            }), i.after(l, "hideActionSheet", () => {
                o = !0
            }), t.default = {
                ...t.default
            }, i.before(p, "sendMessage", (m, [s, n]) => {
                const w = E(s);
                n.validNonShortcutEmojis.forEach((e, c) => {
                    var d;
                    (e.guildId !== w.guild_id || e.animated) && (n.content = n.content.replace(`<${e.animated?"a":""}:${(d=e.originalName)!=null?d:e.name}:${e.id}>`, `[${e.name}](https://cdn.discordapp.com/emojis/${e.id}.webp?size=48&quality=lossless&name=${encodeURIComponent(e.name)})`), delete n.validNonShortcutEmojis[c])
                }), n.validNonShortcutEmojis = n.validNonShortcutEmojis.filter(e => e)
            }), i.instead(t.default, "canUseEmojisEverywhere", () => o), i.instead(t.default, "canUseAnimatedEmojis", () => o)
        },
        onStop() {
            i.unpatchAll()
        }
    };
r(j);