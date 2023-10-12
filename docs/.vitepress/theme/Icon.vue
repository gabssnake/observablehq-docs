<script setup>
import icons from "./icons.json";

const props = defineProps({
  name: {
    type: String,
    required: true,
    validator(val) {
      return [
        "paperclip",        // formerly filePane
        "database",         // formerly databasePane
        "playButton",
        "threeHorizDots",
        "threeHorizLines",
        "threeVertDots",
        "clock",            // formerly versionHistory
        "plus",             // formerly addCellPlus
        "downArrow",        // formerly dropDownArrow
        "rightBendyArrow",
        "trash",
        "chart",            // formerly chartCell
      ].includes(val);
    },
  },
});

const viewbox = `0 0 ${icons[props.name].size} ${icons[props.name].size}`;

</script>

<template>
  <svg :width="icons[name].size" :height="icons[name].size"
        role="img" :aria-label="icons[name].alt"
        :viewbox="viewbox" style="display:inline;"
        :stroke-width="icons[name].strokeWidth"
        :stroke-linejoin="icons[name].strokeLinejoin"
        :stroke="icons[name].stroke"
        :fill="icons[name].fill"
        v-html="icons[name].path"
    >
  </svg>
</template>
