<template>
  <section ref="link" class="timeline-container bg-light">
    <ol>
      <li v-for="i in 10" :key="i">
        <div class="timeline-block">
          <div class="card">
            <div class="card-body">
              <time class="h5 card-title">1934</time>
              <p class="text">
                At vero eos et accusamus et iusto odio dignissimos 
                ducimus qui blanditiis
              </p>
            </div>
          </div>
        </div>
      </li>
      <!-- <li></li> -->
    </ol>
  
    <!-- <div class="arrows">
      <button type="button" class="arrow arrow__prev disabled" disabled>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_prev.svg" alt="prev timeline arrow">
      </button>

      <button type="button" class="arrow arrow__next">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_next.svg" alt="next timeline arrow">
      </button>
    </div> -->
  </section>
</template>

<script>
export default {
  name: 'BaseTimeline',
  props: {
    // items: {
    //   type: Array,
    //   default: () => []
    // }
  },
  emits: {
    'timeline-click' () {
      return true
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.timeline-container {
  position: relative;
  margin: 1em 0;
  white-space: nowrap;
  /* overflow-x: hidden; */
  overflow-x: scroll;
  box-shadow: inset 0px 0px 5px 0 rgba(0, 0, 0, 0.15);
}

ol {
  position: relative;
  width: 100%;
  padding: 250px 0;
  margin: 3rem;
  transition: all 1s;
}

ol li {
  position: relative;
  display: inline-block;
  list-style-type: none;
  width: 160px;
  min-width: 160px;
  /* background-color: #fff; */
  background-color: rgba(0, 0, 0, 0.375);
  height: 3px;
}

ol li:last-child {
  width: 280px;
}

ol li:not(:first-child) {
  margin-left: .5em;
}

ol li:not(:first-child) {
  margin-left: 14px;
}

ol li .timeline-block {
  position: absolute;
  left: calc(100% + 7px);
  width: 280px;
  padding: .5rem;
  font-size: 1rem;
  white-space: normal;
  color: black;
  /* background: white; */
}

.timeline-block .card {
  transition: all .3s ease-in;
}

ol li:nth-child(odd) .timeline-block {
  top: -16px;
  transform: translateY(-100%);
}

ol li:nth-child(even) .timeline-block {
  top: calc(100% + 16px);
}

/* ol li:not(:last-child)::after { */
ol li::after {
  content: "";
  position: absolute;
  top: 50%;
  left: calc(100% + 1px);
  bottom: 0;
  width: 12px;
  height: 12px;
  transform: translateY(-50%);
  border-radius: 50%;
  background: #0d6efd;
  /* box-shadow: inset 0px 3px 0px white; */
}

/* ol li:nth-child(odd) .timeline-block::before {
  top: 100%;
  border-width: 8px 8px 0 0;
  border-color: white transparent transparent transparent;
} */

.timeline-block .card:hover {
  transform: translate(-16px);
}
</style>
