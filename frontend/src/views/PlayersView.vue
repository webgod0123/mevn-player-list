<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";
import PlayerList from "../components/PlayerList.vue";

const players = ref([]);

onMounted(() => {
  fetch("http://localhost:5000/getPlayers")
    .then((res) => res.json())
    .then((res) => {
      players.value = res;
    });
});

const saveMargin = (margin: string, changeId: string) => {
  if (Number(margin) < 0.1 || Number(margin) > 1) {
    alert("Margin should be between 0.1 and 1");
  } else {
    fetch("http://localhost:5000/editPlayerMargin", {
      headers: { "Content-Type": "application/json" },
      method: "post",
      body: JSON.stringify({
        id: changeId,
        value: Number(margin),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        players.value = res;
      });
  }
};
</script>

<template>
  <div class="container">
    <h1 class="title">Player list</h1>
    <PlayerList :players="players" @saveMargin="saveMargin" />
  </div>
</template>

<style>
.container {
  width: 100%;
  padding: 30px;
  box-shadow: 0 0 5px grey;
  border-radius: 10px;
  background: white;
}

.title {
  text-align: center;
  font-weight: bold;
}
</style>
