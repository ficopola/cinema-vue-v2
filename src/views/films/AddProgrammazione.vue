<script setup>
import { useRoute, RouterLink } from "vue-router";
import { ref } from "vue";
import { useFilmsStore, useAuthStore, useAlertStore } from "@/stores";
import { storeToRefs } from "pinia";

const MIN_DATE = new Date().toISOString().slice(0, 10);

const store = useFilmsStore();
const alertStore = useAlertStore();

const route = useRoute();
const id = route.params.id;

const { film, progr } = storeToRefs(store);

store.getById(id);

function onSave() {
  store.createProgrammazione(id);
}
</script>

<template>
  <p class="title has-text-centered">
    Programare <span class="has-text-primary is-size-3">{{ film.titolo }}</span>
  </p>
  <form method="post" ref="form">
    <div class="field">
      <label class="label">Quando</label>
      <div class="control">
        <input
          v-model="progr.il"
          class="input"
          type="date"
          placeholder="data di programmazione"
          :min="MIN_DATE"
          required
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Prezzo</label>
      <div class="control is-expanded">
        <input
          v-model="progr.prezzo"
          class="input"
          type="number"
          placeholder="prezzo"
          required
        />
      </div>
    </div>
    <p>Dove voglia proietare?</p>
    <div class="field">
      <div class="checkbox">
        <label class="label"> <input type="checkbox" /> Tutte le sale </label>
      </div>
    </div>
    <div class="field">
      <div class="select is-multiple ">
        <select name="sale" id="sale" multiple>
          <option value="1">Sala 1</option>
          <option value="2">Sala 2</option>
        </select>
      </div>
    </div>

    <div class="field is-grouped">
      <p class="control">
        <button
          @click.prevent="onSave"
          class="button is-primary"
          :class="{ 'is-loading': alertStore.isLoading }"
        >
          Salva
        </button>
      </p>
      <p class="control">
        <RouterLink
          :to="`/films/programmazione/${id}`"
          class="button is-link is-light"
          >Elenco</RouterLink
        >
      </p>
    </div>
  </form>
</template>
