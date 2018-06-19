export default {
  methods: {
    /* | -----------------------------------------------------------------------------
     * | Working with attributes.
     * | -----------------------------------------------------------------------------
     * |
     */
    /**
     * Add a new, unique and sorted number to an array from the input.
     *
     * @param {object} obj - {input, numbers, compareAll*}
     *
     * @return void - adding an input value to the array
     */
    pushNumber (obj) {
      const id = parseInt(obj.input)

      if (id) {
        obj.items.push(id)
        obj.items = Array.from(new Set(obj.items.sort((a, b) => a - b)))
      }

      obj.input = ''
    },
    /**
     * Add a new, unique, and sorted string to an array from the input.
     *
     * @param {object} obj - {input, items, compareAll*}
     *
     * @return void - adding an input value to the array
     */
    pushString (obj) {
      const value = obj.input.toLowerCase().trim()

      if (value) {
        obj.items.push(value)
        obj.items = Array.from(new Set(obj.items.sort()))
      }

      obj.input = ''
    }
  }
}
