import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function Sidebarmenu ({ children }) {
  return (
    <div className='container-fluid d-flex p-0'>
      {/* Sidebar */}
      <div
        className='bg-dark position-fixed top-0 start-0'
        style={{
          width: '20%',
          height: '100vh',
          zIndex: 1000
        }}
      >
        <div className='bg-dark h-100 p-2'>
          <div>
            <a className='text-decoration-none text-white d-flex align-items-center ms-3 mt-2'>
              <i className='fs-4 bi bi-book'></i>
              <span className='ms-1 fs-4'>Book Store</span>
            </a>

            <hr className='text-secondary' />

            <ul className='nav nav-pills flex-column'>
              <li className='nav-item text-white fs-4 my-1'>
                <a href='/books' className='nav-link text-white fs-5'>
                  <i className='bi bi-house'></i>
                  <span className='ms-2'>Manage Book</span>
                </a>
              </li>

              <li className='nav-item text-white fs-4 my-1'>
                <a href='/dashboard' className='nav-link text-white fs-5'>
                  <i className='bi bi-table'></i>
                  <span className='ms-2'>Dashboard</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main
        style={{
          width: '80%',
          marginLeft: '20%',
          padding: '20px'
        }}
      >
        {children}
      </main>
    </div>
  )
}

export default Sidebarmenu
