<script setup>

defineProps({
    level: {
        type: String,
        required: true,
        validator(val) {
            return ['free', 'pro', 'enterprise'].includes(val);
        }
    }
});

</script>

<template>
    <a :class="`${level}-label`" href="https://observablehq.com/pricing">Learn more about Pro</a>
</template>


<style scope>
.pro-label:before, .enterprise-label:before {
  color: #fff;
  background-color: #a463f2;
  padding: 2px;
  padding-left: 4px;
  padding-right: 4px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  margin-right: 5px;
}

.pro-label:before {
  content: "Pro";
}

.enterprise-label:before {
  content: "Enterprise";
}

.free-label:before {
  content: "Free";
  background-color: #2F9666;
}
.pro-label, .enterprise-label {
  font-size: small; font-family: sans-serif;
}
</style>