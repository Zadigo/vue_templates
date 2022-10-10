<template>
  <base-cover-page>
    <template #lead>
      Cover your page.
    </template>
  </base-cover-page>
</template>

<script>
import BaseCoverPage from '@/layouts/BaseCoverPage.vue'

export default {
  name: 'CoverPageView',
  components: {
    BaseCoverPage
  }
}
</script>
