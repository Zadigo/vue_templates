<template>
  <v-app>
    <v-container>
      <div class="row">
        <div class="col-12">
          <div class="cash-flow">
            <!-- Section -->
            <div v-for="section in sections" :key="section.id" class="cash-flow-section bg-light-subtle rounded">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h1 class="h5">{{ section.name }}</h1>
                <v-btn :id="`section-list-${section.id}`" icon="dots-vertical" elevation="0" density="compact" color="light"></v-btn>
                <v-menu :activator="`#section-list-${section.id}`">
                  <v-list>
                    <v-list-item v-for="action in sectionMenu" :key="action" :value="action">
                      <v-list-item-title @click="handleSectionMenuClick(section, action)">
                        {{ action }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
              
              <!-- Section Header -->
              <div v-if="showHeader" class="cash-flow-section-row mb-1">
                <div class="cash-flow-cell bg-info-subtle rounded-1 text-dark">Months</div>
                <div v-for="i in 11" :key="i" class="cash-flow-cell bg-info-subtle rounded-1 text-dark">
                  {{ i }}
                </div>
              </div>
              
              <!-- Row -->
              <template v-for="row in section.rows" :key="row.id">
                <div v-show="row.visibility" class="cash-flow-section-row">
                  <v-btn :id="`btn-row-menu-${row.row_id}`" elevation="0" color="primary" variant="tonal">
                    {{ row.name }}
                  </v-btn>
                  <v-menu :activator="`#btn-row-menu-${row.row_id}`">
                    <v-list>
                      <v-list-item v-for="action in menuList" :key="action" :value="action" @click="handleRowMenuClick(row, action, section)">
                        <v-list-item-title>{{ action }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                  
                  <div v-for="(value, i) in row.values" :key="i" :class="{ 'fw-bold': handleCellSelection(i, row) }" class="cash-flow-cell bg-body-secondary rounded-1 fw-light text-dark-subtle" @click="handleModification(i, row, value)">
                    {{ value }}
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>

      <v-dialog id="modification-modal" v-model="showModificationDialog" width="300px">
        <v-card title="Modify">
          <v-card-text>
            <v-text-field type="number" @keypress.enter="showModificationDialog = false"></v-text-field>
          </v-card-text>

          <v-card-actions class="d-flex justify-content-end">
            <v-btn color="danger" @click="showModificationDialog = false">
              Cancel
            </v-btn>
            <v-btn variant="tonal" @click="showModificationDialog = false">
              Validate
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script>
import { useUtilities } from '@/composables/utils'
import _ from 'lodash'

export default {
  setup () {
    const { getRandomString } = useUtilities()
    return {
      getRandomString
    }
  },
  data () {
    return {
      currentSelectedValue: null,
      currentSelectedRow: null,
      showModificationDialog: false,
      showHeader: false,
      sectionMenu: [
        'New row',
        'Unhide all (0)',
        'Toggle header',
        'Reset'
      ],
      menuList: [
        'Rename',
        'Duplicate',
        'Insert between',
        'Hide',
        'Delete'
      ],
      sections: [
        {
          id: 1,
          name: 'Revenue',
          rows: [
            {
              id: 1,
              row_id: 'row_eljdl',
              name: 'Use cases',
              visibility: true,
              values: [11.56, 24.3, 3, 4, 5, 6, 7, 9, 10, 11, 12]
            },
            {
              id: 2,
              row_id: 'row_zinel',
              name: 'Rent',
              visibility: true,
              values: [1, 2, 30.1, 4, 5, 6, 7, 9, 10, 11, 12]
            }
          ]
        },
        {
          id: 2,
          name: 'Cost of sales',
          rows: [
            {
              id: 1,
              row_id: 'row_emnqp',
              name: 'Other',
              visibility: true,
              values: [11.56, 24.3, 3, 4, 5, 6, 7, 9, 10, 11, 12]
            },
          ]
        },
        {
          id: 3,
          name: 'Operations',
          rows: [

          ]
        }
      ]
    }
  },
  computed: {
    groupRevenuePerMonth () {
      // Groups all the revenues by month
      const months = {}
      const revenueSection = _.find(this.sections, { name: 'Revenue' })
      for (let i = 1; i < 12; i++) {
        months[i] = []
        revenueSection.rows.forEach((row) => {
          months[i].push(row.values[i])
        })
      }
      return months
    },
    sumRevenuePerMonth () {
      const months = {}
      Object.entries(this.groupRevenuePerMonth).forEach((items) => {
        months[items[0]] = items[1].reduce((accumulator, currentValue) => {
          return accumulator + currentValue
        }, 0)
      })
      return months
    }
  },
  methods: {
    createRowTemplate () {
      // Returns a usable template for a creating
      // a new row in the cash flow
      const values = []
      
      for (let i = 1; i < 12; i++) {
        values.push(i)
      }

      return {
        id: 13,
        row_id: this.getRandomString(5),
        visibility: true,
        name: 'New row',
        values: values
      }
    },
    handleSectionMenuClick (section, action) {
      // Handles the different actions related
      // to the drop down menu for a given
      // section in the cash flow
      const values = []

      switch (action) {
        case 'New row':
          this.handleCreateRow(section)
          break

        case 'Toggle header':
          this.showHeader = !this.showHeader
          break

        case 'Reset':
          for (let i = 1; i < 12; i++) {
            values.push(0)
          }

          for (const row of section.rows) {
            row.values = values
          }
          break
      
        default:
          break
      }
    },
    handleRowMenuClick (row, action, section) {
      // Handles the different actions related to the
      // dropdown menu for a given row
      const newRow = {}
      let rowIndex = 0

      switch (action) {
        case 'Hide':
          row.visibility = false
          break

        case 'Duplicate':
          Object.assign(newRow, row)
          newRow.id = 12323
          newRow.row_id = this.getRandomString(5)
          section.rows.push(newRow)
          break

        case 'Delete':
          rowIndex = _.findIndex(section.rows, { id: row.id })
          section.rows.splice(rowIndex, 1)
          break
        
        default:
          break
      }
    },
    handleCreateRow (section) {
      // creates a new row in the cash flow model
      section.rows.push(this.createRowTemplate())
    },
    handleModification (index, row, value) {
      this.currentSelectedRow = row
      this.currentSelectedValue = { index, value }
    },
    handleCellSelection (index, row) {
      // Handles the selection of a new cell from a given row
      if (!this.currentSelectedRow || !this.currentSelectedValue) {
        return false
      }
      if (row.name === this.currentSelectedRow.name) {
        if (this.currentSelectedValue.index === index) {
          this.showModificationDialog = true
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
.cash-flow {
  padding: .5rem;
}
.cash-flow-section-row {
  display: grid;
  grid-template-columns: 2fr repeat(12, 1fr);
  column-gap: 5px;
  margin-bottom: 5px;
  align-self: center;
  height: auto;
  width: auto;
}

.cash-flow-section {
  padding: 1rem;
  /* background-color: aliceblue; */
  margin-bottom: .25rem;
}

.cash-flow-cell {
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  text-align: center;
  cursor: pointer;
}

[id^="btn-row-menu-"] {
  justify-content: left;
  text-transform: capitalize;
}
</style>
