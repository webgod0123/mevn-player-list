<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";
import EditMargin from "./EditMargin.vue";

const props = defineProps({
  players: {
    type: Array,
  },
  saveMargin: {
    type: Function,
  },
});

const changeId = ref();
const margin = ref<string>();

const changeMargin = (updateMargin: string) => {
  margin.value = updateMargin;
};

const editMargin = (id: string, originMargin: number) => {
  changeId.value = id;
  margin.value = originMargin.toString();
};

const stopEdit = () => {
  changeId.value = "";
  margin.value = "";
};
</script>

<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Position</th>
          <th>Margin</th>
          <th>Odds</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(player, index) of players" :key="player.id">
          <td>{{ index + 1 }}</td>
          <td>{{ player.name }}</td>
          <td>{{ player.position }}</td>
          <td>
            <span>{{ player.margin }}</span>
          </td>
          <td>{{ player.finalOdds }}</td>
          <td>
            <button @click="editMargin(player.id, player.margin)">
              Change Margin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <EditMargin
      :show="!!changeId"
      :margin="margin"
      @close="stopEdit"
      @saveMargin="
        $emit('saveMargin', margin, changeId);
        stopEdit();
      "
      @changeMargin="changeMargin"
    />
  </div>
</template>

<style>
.table-container {
  width: 100%;
  overflow: auto;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
}

thead {
  background: rgb(160, 160, 160);
}

th {
  font-weight: bold;
}

th,
td {
  border: 1px solid #ccc;
  text-align: left;
  padding: 10px 20px;
}

tr {
  cursor: pointer;
}

tbody tr:hover {
  background: #eee;
}

input {
  height: 40px;
  padding: 10px 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 250px;
}

button {
  background: rgb(55, 206, 105);
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.7);
  color: white;
  cursor: pointer;
  font-size: 16px;
}
</style>
