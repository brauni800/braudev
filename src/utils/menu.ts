export class Menu extends HTMLElement {
  showDropdown () {
    const dropdown = this.querySelector('ul')
    dropdown?.classList.remove('hidden')
    dropdown?.classList.remove('animate-fade-out')
  }

  hideDropdown () {
    const dropdown = this.querySelector('ul')
    dropdown?.classList.add('animate-fade-out')
  }

  constructor () {
    super()

    const toggleButton = this.querySelector('button')
    const dropdown = this.querySelector('ul')

    toggleButton?.addEventListener('click', () => {
      if (Boolean(dropdown?.classList.contains('hidden')) || Boolean(dropdown?.classList.contains('animate-fade-out'))) {
        this.showDropdown()
      } else {
        this.hideDropdown()
      }
    })

    window.addEventListener('click', (event) => {
      if (!toggleButton?.contains(event.target as Node) && !dropdown?.contains(event.target as Node)) {
        this.hideDropdown()
      }
    })
  }
}
