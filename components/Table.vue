<template>
  <div class="overflow-x-auto">
    <table class="table table-lg table-zebra">
      <!-- head -->
      <thead>
        <tr>
          <th>Datum</th>
          <th>Veranstaltung</th>
          <th>Ort</th>
          <th>Art</th>
          <th>Skilllevel</th>
          <th>Verantworliche:r</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="v in veranstaltung" :key="v">
          <th>{{ v.datum }}</th>
          <td>{{ v.veranstaltung }}</td>
          <td>{{ v.ort }}</td>
          <td>{{ v.art }}</td>
          <td>{{ v.skilllevel }}</td>
          <td>{{ v.verantwortliche }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const veranstaltung = [
  {
    datum: "",
    veranstaltung: "Staffelrudern",
    ort: "Hamburg",
    art: "Regatta",
    skilllevel: "offen",
    verantwortliche: "",
  },
  {
    datum: "",
    veranstaltung: "Deutsche Hochschulmeisterschaft",
    ort: "Brandenburg",
    art: "Regatta",
    skilllevel: "Fortgeschritten",
    verantwortliche: "",
  },
];
</script>
