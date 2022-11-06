<script setup lang="ts">
const props = defineProps({
  show: {
    type: Boolean,
  },
  margin: {
    type: String,
  },
  close: {
    type: Function,
  },
  saveMargin: {
    type: Function,
  },
  changeMargin: {
    type: Function,
  },
});
</script>

<template>
  <div v-if="show" class="update-margin-content">
    <div class="update-margin-backdrop" @click="$emit('close')" />
    <div class="update-margin">
      <div>
        <input
          type="number"
          min="0.1"
          max="1"
          step="0.1"
          v-model="margin"
          @change="$emit('changeMargin', $event.target.value)"
        />
      </div>
      <button @click="$emit('saveMargin')">Save</button>
    </div>
  </div>
</template>

<style>
.update-margin-content {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.update-margin {
  position: absolute;
  padding: 25px;
  border-radius: 10px;
  background: white;
  box-shadow: 0 0 10px rgb(0, 0, 0);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: right;
  z-index: 10;
}

.update-margin-backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.update-margin button {
  margin-top: 20px;
}
</style>