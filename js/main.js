let header = document.getElementById('header')
let headerHeight = header.clientHeight
let mobileMenu = document.getElementById('mobile-menu')
let menuItems = document.querySelectorAll('#nav li a[href*="#"]')
let menuItemsLength = menuItems.length

function showMobileMenu () {
  let isClosed = header.clientHeight === headerHeight
  if (isClosed) {
    header.style.height = 'auto'
  } else {
    header.style.height = null
  }
}

mobileMenu.addEventListener('click', showMobileMenu)

for (let i = 0; i < menuItemsLength; i++) {
    let menuItem = menuItems[i]
    menuItem.onclick = function (event) {
      let isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
      if (isParentMenu) {
        event.prevenDefault()
      } else {
        header.style.height = null
      }
    }
}