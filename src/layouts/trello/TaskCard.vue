<template>
  <div class="card">    
    <div class="card-body">
      {{ item.title }}
    </div>
  </div>
</template>


<script>
export default {
  name: 'TaskCard',
  props: {
    item: {
      type: Object
    }
  }
}
</script>
