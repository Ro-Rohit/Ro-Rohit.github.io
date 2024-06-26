import { Animator, BleepsProvider, } from '@arwes/react';
import { AnimatorGeneralProvider, } from '@arwes/react';
import { soundSettings, stylesBaseline, theme } from './utlis/settings';
import { Global } from '@emotion/react';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';

import HomePage from './pages/home';
import ProjectPage from './pages/projects';
import ResumePage from './pages/resume';

import Background from './components/background';


const isProd = import.meta.env.NODE_ENV === 'production';

const routeItem = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/projects',
    element: <ProjectPage />
  },
  {
    path: '/about',
    element: <ResumePage />
  }
]

const routes = isProd ? createHashRouter(routeItem) : createBrowserRouter(routeItem)



const App = () => (
  <>
    <Global styles={{ ...stylesBaseline, }} />
    <AnimatorGeneralProvider duration={{ enter: 1, exit: 1, stagger: 0.2 }}>
      <BleepsProvider  {...soundSettings}>
        <Animator active={true} combine manager='stagger'>

          <Animator>
            <Background theme={theme} />
          </Animator>


          <div className='relative z-[99]'>
            <RouterProvider router={routes} />
          </div>

        </Animator>
      </BleepsProvider>
    </AnimatorGeneralProvider>
  </>

);

export default App;
