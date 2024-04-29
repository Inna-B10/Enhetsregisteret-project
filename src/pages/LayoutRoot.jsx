import { NavLink, Outlet } from 'react-router-dom'
export function LayoutRoot() {
  function toggleMenu() {
    document.querySelector('.nav-bar').classList.toggle('hidden')
    document.querySelector('nav svg').classList.toggle('active')
  }
  return (
    <>
      <header>
        <nav className='flex'>
          <svg
            onClick={() => toggleMenu()}
            className='ham hamRotate hidden-invert'
            viewBox='0 0 100 100'
            width='40'>
            <path
              className='line top'
              d='m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20'
            />
            <path className='line middle' d='m 30,50 h 40' />
            <path
              className='line bottom'
              d='m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20'
            />
          </svg>
          <ul className='nav-bar hidden'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => toggleMenu()}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => toggleMenu()}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className='flex column'>
        <h1>Enhetsregisteret prosjekt</h1>
        <Outlet />
      </main>

      <footer>
        <p>Module D</p>
      </footer>
    </>
  )
}
