<template>
  <dashboard-layout-vue>
    <div class="row">
      <div class="col-sm-12 col-md-10 offset-md-1">
        <div class="card shadow-sm rounded-0">
          <div class="card-header">
            <div class="scrollbar">
              <router-link v-for="i in 15" :key="i" :to="{ name: 'templates_view' }" class="mx-1 h5">
                <span class="badge badge-light text-muted fw-normal border rounded-pill p-2">
                  {{ `first badge ${i}` }}
                </span>
              </router-link>
            </div>
          </div>

          <div class="card-body">
            <div class="row">
              <div class="col-sm-12 col-md-8">
                <div class="row">
                  <div class="col-12">
                    <div class="d-flex justify-content- h-75 fs-small">
                      <span class="badge badge-primary">Tennis</span>
                      <p class="fw-bold text-muted mx-2">GP France</p>
                      <p class="text-warning">exclusivité abonnés</p>
                    </div>
                  </div>

                  <div class="col-12">
                    <h2 class="text-uppercase fw-bold mb-4">La pôle pour Kendall devant les Reds</h2>
                    <figure class="figure mb-0">
                      <img src="https://picsum.photos/1200/800" class="figure-img img-fluid rounded" alt="Image 1">
                      <figcaption class="figure-caption">
                        Charles Leclerc a été le plus rapide ce samedi à Bakou. (Leonhard/Reuters)
                      </figcaption>
                    </figure>
                  </div>

                  <div class="col-12 fw-bold my-3 fs-5">
                    Charles Leclerc (Ferrari) a décroché ce samedi sa sixième pole position de la saison sur le circuit
                    urbain de Bakou (Azerbaïdjan). Le Monégasque devance Sergio Perez (Red Bull) et Max Verstappen.
                  </div>

                  <div class="col-12 mt-2 mb-4">
                    <div class="fw-bold">Fréderic Ferret</div>
                    <div class="text-muted">mis à jour le 11 juin 2022 à 17h53</div>
                  </div>

                  <div class="col-12 mb-3">
                    <button class="btn btn-primary btn-lg btn-floating">1</button>
                    <button class="btn btn-primary btn-lg btn-floating mx-2">2</button>
                  </div>

                  <div class="col-12 fw-light">
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque harum recusandae dolore officia quibusdam nostrum aspernatur beatae
                      inventore molestiae et nam, dolor id eveniet aperiam earum alias eius
                      perferendis facere.
                    </p>

                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Atque harum recusandae dolore officia quibusdam nostrum aspernatur beatae
                      inventore molestiae et nam, dolor id eveniet aperiam earum alias eius
                      perferendis facere.
                    </p>

                    <blockquote class="twitter-tweet">
                      <p lang="fr" dir="ltr">🇫🇷 FLASH - Le rappeur Moha La Squale a été arrêté hier soir à sa descente
                        d’un train à la gare du Nord. L&#39;artiste, mis en examen pour agression sexuelle et violences
                        et
                        séquestration, n&#39;aurait pas respecté les obligations de son contrôle judiciaire. (Le
                        Parisien)
                        <a href="https://twitter.com/hashtag/Paris?src=hash&amp;ref_src=twsrc%5Etfw">#Paris</a>
                      </p>&mdash; Mediavenir (@Mediavenir)
                      <a href="https://twitter.com/Mediavenir/status/1535637226557693952?ref_src=twsrc%5Etfw">June 11,
                        2022</a>
                    </blockquote>

                  </div>

                  <div class="col-12 my-3">
                    <div class="text-muted">publié le 11 juin 2022 à 17h31</div>
                    <div class="text-muted">mis à jour le 11 juin 2022 à 17h53</div>
                  </div>

                  <div class="col-12 my-4 d-flex justify-content-left flex-wrap">
                    <h5><span class="badge badge-lg rounded-pill bg-primary">Charles Leclerc</span></h5>
                    <h5><span class="badge rounded-pill bg-primary mx-2">Ferrari</span></h5>
                  </div>

                  <hr class="my-3">

                  <div class="col-12 p-0">
                    <div class="card bg-light shadow-none mb-3">
                      <div class="card-body p-2 fw-bold">
                        Commentaires (34)
                      </div>
                    </div>

                    <div v-for="i in 6" :key="i" class="card border-bottom shadow-none rounded-0">
                      <div class="card-body">
                        <p class="fw-bold m-0">OM-93270</p>
                        <p class="text-muted m-0 mb-4">aujourd'hui à 17h34</p>
                        <p class="card-text">FORZA FERRARI !!!</p>
                      </div>

                      <div class="card-footer border-0">
                        <button class="btn btn-light shadow-none">Like</button>
                        <button class="btn btn-light shadow-none mx-2">Dislike</button>
                        <button class="btn btn-light shadow-none">Signal</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-4">
                <img src="http://via.placeholder.com/1200x800" class="img-fluid" alt="Image 2">

                <div class="p-3 bg-light fw-bold mt-3 mb-1">Jeux concours</div>

                <div v-for="i in 3" :key="i" class="card my-2 rounded-0 shadow-sm bg-light">
                  <img src="http://via.placeholder.com/1200x800" class="card-img-top rounded-0" alt="Image 2">

                  <div class="card-body">
                    <p class="card-text fw-bold">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </dashboard-layout-vue>
</template>

<script>
import DashboardLayoutVue from '../layouts/DashboardLayout.vue'

export default {
  name: 'LequipeTemplate',
  components: {
    DashboardLayoutVue
  },
  mounted() {
    var script = document.createElement('script')

    var src = document.createAttribute('src')
    var charset = document.createAttribute('charset')
    var async = document.createAttribute('async')

    src.value = 'https://platform.twitter.com/widgets.js'
    charset.value = 'utf-8'

    script.setAttributeNode(src)
    script.setAttributeNode(async)
    script.setAttributeNode(charset)

    var body = document.querySelector('body')
    body.append(script)
  }
}
</script>

<style scoped>
.scrollbar {
  /* transition: all .3s ease; */
  overflow: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
  padding: .5rem;
  margin-top: .25rem;
  margin-bottom: .25rem;
}
.scrollbar h5 {
  display: inline-block;
}

.scrollbar::-webkit-scrollbar {
  display: none;
}

/* .scrollbar::before {
  content: "";
  filter: blur(5px);
} */

</style>
