<template>
  <div class="container">
    <div class="header">
      <div class="font-size-xl center">점심 메뉴 추천</div>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn color="white" v-bind="props"> 음식점 리스트 </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in lunchList"
            :key="index"
            :value="index"
          >
            <v-list-item-title
              >[ {{ item.category }} ] {{ item.name }}</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <v-card class="option-box">
      <v-radio-group v-model="categotyOption" inline>
        <div class="center font-size-md">카테고리 :</div>
        <v-radio
          class="font-size-md"
          v-for="category in categoryList"
          :key="category"
          color="red"
          :label="category"
          :value="category"
        ></v-radio>
      </v-radio-group>
      <div class="d-flex">
        <div class="center font-size-md">팀 :</div>
        <div class="ml-3">
          <v-select
            class="font-size-md"
            v-model="teamKey"
            :items="teamList"
            item-title="name"
            item-value="webhookUrl"
            hide-details
            dense
          />
        </div>
      </div>
    </v-card>
    <v-card
      class="card"
      :title="result.name"
      :subtitle="`${result.distance}m`"
      text="This is content"
    />
    <div class="btns d-flex">
      <v-btn
        class="font-size-sm"
        :disabled="result.name == '-' || state"
        width="20%"
        rounded="xs"
        size="x-large"
        @click="send"
        >send jandi!</v-btn
      >
      <v-btn
        class="font-size-sm"
        :disabled="state"
        width="20%"
        rounded="xs"
        size="x-large"
        @click="random"
        >start!</v-btn
      >
      <v-btn
        class="font-size-sm"
        :disabled="!state"
        rounded="xs"
        size="x-large"
        width="20%"
        @click="stop"
        >stop!</v-btn
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
import { lunchList, categoryList, teamList } from "@/helper/json";
import { sendJandiWebhook } from "@/api/jandi";
import { getKakaoSearch } from "@/api/kakao";

const state = ref(false);
const result = ref<item>({ category: "-", name: "-", distance: 0 });
const timer = ref<NodeJS.Timeout | undefined>(undefined);
const list = ref<item[]>(lunchList);
const categotyOption = ref("전체");
const teamKey = ref(teamList[0].webhookUrl);

const random = () => {
  state.value = true;
  timer.value = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * list.value.length);
    result.value = list.value[randomIndex];
  }, 50);
};

const stop = () => {
  state.value = false;
  if (!timer.value) return;
  clearInterval(timer.value);
  timer.value = undefined;
};

const send = async () => {
  const query = "야탑 " + result.value.name;
  const searchData = await getKakaoSearch(query);
  const info = {
    ...result.value,
    key: teamKey.value,
    imageUrl: searchData.documents[0].url,
  };
  sendJandiWebhook(info);
};

watch(categotyOption, (option) => {
  if (option === "전체") return (list.value = lunchList);
  list.value = list.value.filter(
    (item) => item.category == categotyOption.value
  );
});
</script>

<style scoped lang="scss">
.container {
  margin: 0 5%;
}

.header {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}

.option-box {
  padding: 15px;
  margin: 30px 0;
}

.btns {
  margin-top: 30px;
  display: grid;
  grid-template-columns: (2fr, 1fr);
  gap: 3%;
  justify-content: end;
}

.btn {
  width: 200px;
  height: 200px;
}
</style>
