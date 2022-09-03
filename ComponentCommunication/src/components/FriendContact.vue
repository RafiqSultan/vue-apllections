<template>
  <li>
    <h2>{{ name }} {{ friendIsFav === "1" ? "(FAV)" : "" }}</h2>
    <button @click="togglefav">toggleFav</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friendIsFav: this.isFavorite,
    };
  },
  props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    togglefav() {
      if (this.friendIsFav === "1") {
        this.friendIsFav = "0";
      } else {
        this.friendIsFav = "1";
      }
    },
  },
};
</script>