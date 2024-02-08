<template>
  <div data-theme="night">
    <header>
      <div
        class="relative flex items-center justify-center w-screen min-h-screen overflow-hidden"
      >
        <div class="absolute inset-0 h-full overflow-hidden">
          <NuxtPicture
            src="/images/skulls.JPG"
            class="object-cover w-full h-full"
            :img-attrs="{ class: 'w-full h-full object-cover' }"
          />
          <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-neutral-content"
        >
          <h1 class="mb-5 text-5xl font-bold">
            Willkommen beim Uni Rudern Kiel
          </h1>
          <p class="mb-5">
            Entdecke die Faszination des Ruderns an und auf der Förde
          </p>
          <button class="btn btn-primary">Zum Hochschulsport</button>
        </div>
        <div class="absolute bottom-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </header>
    <main class="max-w-screen-xl p-6 mx-auto">
      <section class="w-full py-10">
        <div class="flex items-center justify-between w-full">
          <Stats
            title="Kilometer"
            stat-value="200"
            subtitle="gefahrene Kilometer in diesem Jahr"
          />
          <Stats
            title="Deutscher Hochschulmeister"
            stat-value="2023"
            subtitle="DHM 2023 Männer 4x"
          />
          <Stats
            title="Neue Ruderer/ Ruderinnen"
            stat-value="65"
            subtitle="Sommersemester 2023"
          />
        </div>
      </section>
      <section class="py-10">
        <h2 class="pb-4">Kurse</h2>
        <div class="flex flex-wrap justify-center gap-4">
          <Cards
            title="Anfängerkurs"
            paragraph="Im Sommersemester öffnen wir unsere Türen für Anfänger, die das Rudern von Grund auf erlernen möchten. In bis zu 5 Kursen bilden wir jedes Jahr 13 neue Ruderer aus."
            cta="Zum Kurs"
          />
          <Cards
            title="Fortgeschrittenenkurs"
            paragraph="Für diejenigen, die bereits erste Erfahrungen gesammelt haben, bieten wir Fortgeschrittenenkurse an, um ihre Fähigkeiten weiter zu entwickeln."
            cta="Zum Kurs"
          />
          <Cards
            title="8er Kurs"
            paragraph="Erlebe die Kraft des gemeinsamen Ruderns im Achter – Unsere spezialisierten Trainingseinheiten konzentrieren sich auf körperliche Fitness, Teamarbeit und taktisches Verständnis, um die individuellen Fähigkeiten jedes Ruderers zu fördern und die Teamdynamik zu stärken."
            cta="Zum Kurs"
          />
          <Cards
            title="DHM Training"
            paragraph="Bereite dich intensiv auf die Deutschen Hochschulmeisterschaften vor – Unser DHM-Training bietet spezielle Renntrainingseinheiten unter der Anleitung erfahrener Trainer und einem engagierten Team, um Technik, Ausdauer und Geschwindigkeit zu optimieren."
            cta="Zum Kurs"
          />
        </div>
      </section>
      <section class="py-10">
        <h2>Veranstaltungen</h2>
        <Table />
      </section>
      <section class="py-10">
        <h2>Unsere Erfolge</h2>
        <div class="flex flex-wrap justify-center gap-6">
          <Cards
            title="Vogalonga 2022"
            paragraph="Die Vogalonga ist eine Regatta, die alljährlich in der Regel am Pfingstsonntag in Venedig stattfindet. Es können alle Bootsklassen teilnehmen, die mit Muskelkraft bewegt werden, also zum Beispiel Ruderboote, Kanus oder Gondeln. Die Strecke beträgt 30 Kilometer und beginnt und endet am Markusplatz."
            cta="Zur Vogalonga"
            href="http://www.vogalonga.com/de/home-3/"
          />
          <Cards
            title="DHM 2023"
            paragraph="Die Deutschen Hochschulmeisterschaften (DHM) sind die offiziellen deutschen Meisterschaften für Studierende. Sie werden jährlich in verschiedenen Sportarten ausgetragen. Unsere Damen haben den 3. Platz im Freuen 4x und die Männer haben den 1. Platz bei den Männer 4x belegt und sind somit Deutscher Hochschulmeister 2023."
            cta="Zu den DHM"
            href="https://www.adh.de/wettkampf/sportarten/rudern/"
          />
        </div>
      </section>
      <section class="py-10">
        <h2>Das Team</h2>
      </section>
      <section class="py-10">
        <h2>Instagram</h2>
      </section>
    </main>
  </div>
</template>
