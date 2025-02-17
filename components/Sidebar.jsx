const Sidebar = () => {
  return (
    <>
      <aside className="fixed top-0 left-0 w-64 h-full" aria-label="Sidenav">
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ml-3">Charts.js</span>
              </a>
            </li>
            <li>
              <a href="/re-charts">
                <button
                  type="button"
                  className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Re Charts
                  </span>
                </button>
              </a>
            </li>
            <li>
            <a href="/d3-charts">
              <button
                type="button"
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-sales"
                data-collapse-toggle="dropdown-sales"
              >
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  D3 Charts
                </span>
              </button>
              </a>
            </li>
            <li>
              <a
                href="/google-chart"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ml-3 whitespace-nowrap">Google Chart</span>
                
              </a>
            </li>
            
          </ul>
          <ul className="space-y-2">
            <li>
              <a
                href="/canvas"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <span className="ml-3">Canvas</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
