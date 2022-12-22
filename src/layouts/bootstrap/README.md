# Bootstrap for Vue
## Form
### Checkbox
```html
<base-checkbox id="dark-mode" :is-switch="true" label="Dark mode" @update:initial="toggleDarkMode" />
```

#### switch

### select

```html
<base-select :items="['A', 'B', 'C']" />
```

## Pagination

```html
<base-pagination :pages="4" />
```


## Modal

```html
<base-modal-vue id="test-modal" :show="showModal" :non-invasive="false" :scrollable="false" :centered="false" :static-backdrop="true" position="top-right" size="sm" @close="showModal = false">
    <p>...</p>
</base-modal-vue>
```

## Offcanvas

```html
<base-offcanvas id="..." :show="..." allow-scroll position="top">
    ...
</base-offcanvas>
```

## Dynmamic table

An advanced data table to filter, sort and manipulate data efficiently.

```html
<dynamic-table id="table1" :headers="['firstname', 'lastname', 'age']" :items="table" />
```

The `items` attribute receive data structured as below:

```json
[
    {
        "id": 1,
        "firstname": "Kendall",
        "lastname": "Jenner",
        "age": 35
    }
]
```


### Attributes

- `position` : top, bottom, start, end
- `static-backdrop` : true, false
- `allow-scroll` : true, false
- `show` : true, false
- `id`

### Emits

- @close
