<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-left">
          <!-- Button -->
          <b-button id="some">Click me</b-button>

          <!-- Dropdown -->
          <!-- <b-dropdown-button class="mx-2" id="some" buttonName="Some name" color="info" transition="slide"></b-dropdown-button> -->
          
          <!-- Split -->
          <b-split-drop-button :items="[{ name: 'Google' }, { name: 'Facebook' }]" class="mx-2" button-name="My button" color="dark">
            My button
          </b-split-drop-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BButton, BSplitDropButton } from '../plugins/bootstrap'
// import { BButton, BDropdownButton, BSplitDropButton } from '../plugins/bootstrap'
export default {
  name: 'TestingPage',
  components: {
    BButton,
    // BDropdownButton,
    BSplitDropButton
    // BDropdownItem
  }
}
</script>
