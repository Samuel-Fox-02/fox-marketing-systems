// ========================================
// COMPONENT LOADER (DEBUG VERSION)
// ========================================
async function loadComponents() {
  console.log('🔍 Attempting to load components...')

  try {
    const headerRes = await fetch('components/header.html')
    if (!headerRes.ok)
      throw new Error(
        `Header fetch failed: ${headerRes.status} ${headerRes.statusText}`
      )
    document.getElementById('header-placeholder').innerHTML =
      await headerRes.text()
    console.log('✅ Header loaded')

    const footerRes = await fetch('components/footer.html')
    if (!footerRes.ok)
      throw new Error(
        `Footer fetch failed: ${footerRes.status} ${footerRes.statusText}`
      )
    document.getElementById('footer-placeholder').innerHTML =
      await footerRes.text()
    console.log('✅ Footer loaded')

    // Re-init after HTML is injected
    initNav()
  } catch (err) {
    console.error('❌ Component Load Error:', err)
    document.getElementById('header-placeholder').innerHTML =
      '<p style="color:red; padding:1rem;">⚠️ Header failed to load. Check console.</p>'
    document.getElementById('footer-placeholder').innerHTML =
      '<p style="color:red; padding:1rem;">⚠️ Footer failed to load. Check console.</p>'
  }
}

function initNav() {
  // Navbar scroll
  const navbar = document.getElementById('navbar')
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50)
    })
  }

  // Mobile menu
  const hamburger = document.querySelector('.hamburger')
  const navMenu = document.querySelector('.nav-menu')
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () =>
      navMenu.classList.toggle('active')
    )
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => navMenu.classList.remove('active'))
    })
  }

  // Active link highlight
  const page = window.location.pathname.split('/').pop() || 'index.html'
  document.querySelectorAll('.nav-link').forEach((link) => {
    if (link.getAttribute('href') === page) link.classList.add('active')
  })
}

// Run on load
document.addEventListener('DOMContentLoaded', loadComponents)
