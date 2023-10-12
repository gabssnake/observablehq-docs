<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  set: {
    type: String,
    required: true,
    // validator(val) {
    //   return true;
    // }
  },
  mac: {
    type: String,
    // validator(val) {
    //   return true;
    // }
  },
});

// ported from https://observablehq.com/@observablehq/keys
const symbols = {
  Alt: "⌥",
  Tab: "⇥",
  Up: "↑",
  Down: "↓",
  Left: "←",
  Right: "→",
  macMod: "⌘",
  otherMod: "Ctrl",
  Cmd: "⌘",
  Ctrl: "⌃",
  Shift: "⇧",
  Enter: "↩︎",
  Backspace: "⌫",
  Escape: "⎋",
};

const words = {
  Alt: "Option",
  Backspace: "Delete",
  macMod: "Command",
  otherMod: "Ctrl",
  Cmd: "Command",
  Ctrl: "Control",
  Enter: "Return",
  Escape: "Esc",
  "/": "Slash",
  "?": "Question mark",
};

const order = {
  Ctrl: -4,
  Alt: -3,
  Shift: -2,
  Mod: -1,
  Cmd: -1,
};

function remap(keyset, map) {
  const keys = keyset.split("-");
  return keys
    .slice()
    .sort(
      (a, b) => (order[a] || keys.indexOf(a)) - (order[b] || keys.indexOf(b))
    )
    .map((key) => (map && map[key]) || key);
}

function makeMap(map, mac) {
  if (mac) {
    return { ...map, Mod: map["macMod"] };
  } else {
    return { ...map, Mod: map["otherMod"] };
  }
}

function makeKeyWords(keyset, mac) {
  return remap(keyset, makeMap(words, mac)).join("-");
}

function makeKeySymbols(keyset, mac) {
  return remap(keyset, makeMap(symbols, mac)).join("");
}

function keys(keyset, mac) {
  return makeKeyWords(keyset, mac) + " " + makeKeySymbols(keyset, mac);
}

let keyWords = ref("");
let keySymbols = ref("");
const macOnly = !props.set;

onMounted(() => {
  const mac = /Mac|iPhone/.test(navigator.platform);
  // const mac = false; // for testing/debugging

  const set = (mac && props.mac) || macOnly ? props.mac : props.set;

  keyWords.value = makeKeyWords(set, mac || macOnly);
  if (set.length > 1)
    // avoid duplicating single keys
    keySymbols.value = makeKeySymbols(set, mac || macOnly);
});
</script>

<template>
  <span v-if="keyWords === ''">{{ set }}</span>
  <strong v-else>{{ keyWords }}</strong> {{ keySymbols }}
  <small v-if="macOnly"> (macOS/iOS only)</small>
</template>
